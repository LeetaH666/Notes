# Ubuntu 命令

## 常用

- `cd dirName`：进入某个目录（`.` 代表当前目录，`..` 代表上一层目录，`~` 代表根目录）
- `mkdir dirName`：创建目录
- `touch fileName`：创建文件
- `cp -r dir1Name dir2Name`：复制目录1到目录2内
- `cp fileName dirName`：复制文件到某个目录内
- `rm -rf dirName`：删除目录（`-f` 代表强制删除不存在的文件）
    
    > [!WARNING|label:警告]
    > `rm -rf` 属于高危操作，可能导致误删。

- `rm fileName`：删除文件
- `ln -s fileName dirName`：将某个文件软链接到某目录下
- `du -h dirName/fileName`：查看目录/文件占用内存
- `top`：查看 CPU 内存占用（动态变化）
- `nvdia-smi`：查看 GPU 内存占用（静态）

    > [!TIP|label:提示]
    > 如果想像 `top` 那样看动态变化的 GPU 内存占用，需要用 `-l` 参数，后面接动态变化的秒数（多少秒变一次），比如 `nvidia-smi -l 5` 代表 5 秒更新一次。

- `... | grep Target`：查找指定信息，比如：
    - `dpkg -l | grep libicu`：查找包含 libicu 字样的包信息
    - `conda list | grep stringi`：查找包含 stringi 字样的 conda 包

- `ssh-keygen -t rsa -C "Comment"`：生成公钥，`-t rsa` 指定了公钥类型，`-C "Comment"` 则是添加注释（把 `Comment` 替换成你想加的注释），以免之后有多个公钥弄混。

### Ctrl

- `Ctrl + C`：终止命令
- `Ctrl + R`：查找之前输过的命令

## 管理员常用

- `su`：进入 root 账户
- `sudo passwd`：重设密码
- `cat /etc/passwd`：查看所有用户
- `cat /etc/group`：查看所有组
- `adduser/deluser User`：添加/删除用户
- `gpasswd -a/-d User Group`：在组中添加/删除某用户
- `lscpu`：查看 CPU 信息
- `du -sh * | sort -nr | head -n 10`：查看物理内存占用最多的 10 个文件夹
- `df -aTh`：查看磁盘空间
- `fdisk -l`：查看所有盘符
- `lsblk`：查看各个内存块的基本信息
- `blkid`：查看各个内存块的 UUID
- `chmod modeNumber dirName/fileName`：更改目录/文件的权限

    > [!TIP|label:提示]
    > `modeNumber` 由三位数构成，第一位代表 root 权限，第二位代表目录或文件拥有者的权限，第三位代表其他人的权限。`4` 代表可读（r），`2` 代表可写（w），`1` 代表可执行（x），数字相加即为权限叠加，比如 `7` 代表拥有 rwx 权限，最放松的权限就是 `777`。通常目录都是可执行的，而文件是不可执行的，因此对于目录来说，root 权限是 `755`；对于文件来说，root 权限是 `644`。
    > 
    > 本地文件上传服务器时如果是 root 权限就没法传，需要先放松权限，上传后再改回来。

- `chmod -R modeNumber dirName`：更改目录下所有文件的权限
- `shutdown -h now`：关机

### 软件 RAID1

假设有两块硬盘（或分区） `/dev/sda` 和 `/dev/sdb`，你想将他们组成 RAID1 来实现自动备份：

1. `apt-get install mdadm`：安装 `mdadm`；
2. `blkid devName`：分别检查两块硬盘是否有文件系统，`devName` 为设备名，比如 `/dev/sda`；
    - 如果有文件系统，需要执行 `wipefs --all devName` 来清除文件系统。
3. `mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sda /dev/sdb`：使用 `mdadm` 组建名为 `md0` 的 RAID1，`--level` 指定了 RAID 的级别，`--raid-devices` 指定了用来组建 RAID1 的磁盘数量；

    > [!NOTE|label:注意]
    > 可能会出现如下提示 `Note: this array has metadata at the start and may not be suitable as a boot device. If you plan to store '/boot' on this device please ensure that your boot-loader understands md/v1.x metadata, or use --metadata=0.90 Continue creating array?` 一般都是可以支持 `md/v1.x metadata` 的，所以直接 `y` 就好了。

4. `vim /proc/mdstat`：查看 RAID1 的创建状态；

    <div align='center'>

    ![](image/2023-06-29-19-01-28.png)
    </div align='center'>

    > [!ATTENTION|label:注意]
    其中的 `resync = 1.6\%` 代表已经同步了 1.6\%，等同步完才可以进行下一步！

    <div align='center'>

    ![](image/2023-06-30-09-14-55.png)
    </div align='center'>

5. `mkfs.ext4 /dev/md0`：将建好的 RAID1 格式化为文件系统，比如 `ext4`；
6. `mount /dev/md0 dirName`：将 RAID1 挂载到某文件夹下；
7. `vim /etc/fstab`：打开 `fstab` 文件，里面记录了系统启动时需自动挂载的挂载点信息；
   - 模仿已有的挂载点添加一行新的自动挂载信息，比如 `/dev/md0 dirName ext4 defaults 0 1`。