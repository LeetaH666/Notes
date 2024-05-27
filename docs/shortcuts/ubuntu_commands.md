# Ubuntu 命令

## 常用

以下是所有用户都常用的命令。

### 文件与目录

- `cd dirName`：进入某个目录（`.` 代表当前目录，`..` 代表上一层目录，`~` 代表根目录）
- `ll`：列出当前目录下所有文件及其权限
- `mkdir dirName`：创建目录
- `touch fileName`：创建文件
- `cp fileName dirName`：复制文件到某个目录内
- `cp -r dir1Name dir2Name`：复制目录1到目录2内
- `scp (-r) userName@remoteIP:remoteDirName localDirName`：从远程服务器下载文件（如果是目录需要 `-r`）
- `rm fileName`：删除文件
- `rm -rf dirName`：删除目录（`-f` 代表强制删除不存在的文件）
    
    > [!WARNING|label:警告]
    > `rm -rf` 属于高危操作，可能导致误删。

- `find dirName -name expressQuery`：按名字在某目录下查找文件，`expressQuery` 可以使用正则表达式，不写 `dirName` 则默认当前目录
- `ln -s fileName dirName`：将某个文件软链接到某目录下
- `du -sh dirName/fileName`：查看目录/文件占用内存
- `du -h dirName`：查看目录内所有文件占用内存
- `strings fileName`：将二进制文件或可执行文件以人类可读的语言输出
- `zip -r zipName.zip dirName`：将某目录压缩为 zip 文件
- `unzip (-n) (-d dirName) zipName.zip`：解压 zip 文件（`-n` 代表不覆盖已有文件，`-d` 代表解压到指定目录）

### 系统

- `top (-u userName) (-p PID)`：查看 CPU 内存占用（动态变化）（`-u` 代表只看某个用户的情况，`-p` 代表只看某个进程的情况）
- `nvdia-smi (-i GPUNumber)`：查看 GPU 内存占用（静态）（`-i` 代表只看某张卡的情况）

    > [!TIP|label:提示]
    > 如果想像 `top` 那样看动态变化的 GPU 内存占用，需要用 `-l` 参数，后面接动态变化的秒数（多少秒变一次），比如 `nvidia-smi -l 5` 代表 5 秒更新一次。

### 查询

- `... | grep Target`：查找指定信息，比如：
    - `ll | grep parquet`：查找包含 parquet 字样的文件和目录
    - `dpkg -l | grep libicu`：查找包含 libicu 字样的包信息
    - `conda list | grep stringi`：查找包含 stringi 字样的 conda 包

- `which commandName`：查找某一指令所在的路径，比如：
    - `which python`：查找 python 路径

### 其他

- `ssh-keygen -t rsa -C "Comment"`：生成公钥，`-t rsa` 指定了公钥类型，`-C "Comment"` 则是添加注释（把 `Comment` 替换成你想加的注释），以免之后有多个公钥弄混。
- `jupyter notebook --no-browser --port=portNumber`：启动 jupyter notebook，`--no-browser` 代表不自动打开浏览器，`--port` 代表指定端口号，`portNumber` 可以设成 `8889`。

    > [!TIP|label:提示]
    > 如果遇到 VSCode 无法使用，又想远程使用 jupyter notebook，则可以遵照以下步骤：
    > 
    > 1. 开一个 cmd 连上远程服务器后执行上述命令，cmd 不要关掉；
    > 2. 再开多一个 cmd，用 `ssh -N -L localPort:localhost:remotePort userName@remoteIP` 来建立本地端口和远程端口的映射，`-N` 代表不执行其他命令，`-L` 代表端口映射，`localPort` 可以是 `8888`，这个 cmd 可以关掉；
    > 3. 在本地浏览器输入 `localhost:localPort` 即可访问远程服务器上的 jupyter notebook；
    > 4. 如果需要输入 token（第一次登陆），可以在第一个 cmd 中看到，即执行第一步时会有一些输出，其中有一个类似下图的信息：
    > 
    >     <div align='center'>
    > 
    >     ![](image/2024-03-01-20-48-38.png)
    >     </div align='center'>
    > 
    >     其中的 `token=` 后面的一长串就是 token，输入到浏览器的输入框中即可。
    > 
    
    > [!NOTE|label:注意]
    > 记得需要 `conda activate envName` 切换到对应的环境后再执行 `jupyter notebook`。且在哪个目录执行就会只显示哪个目录的文件，不会有父目录的文件。

### 按键命令

- `Ctrl + C`：终止命令
- `Ctrl + R`：查找之前输过的命令
- `Ctrl + Z`：暂停命令
    - `jobs`：查看当前暂停的任务
    - `fg jobNumber`：恢复执行任务

## 管理员常用

以下是管理员常用的命令。

- `su`：进入 root 账户

### 用户

- `passwd`：重设密码
- `adduser --ingroup groupName userName`：添加用户并加入某组
- `deluser --remove-all-files userName`：删除用户以及用户的所有文件

    > [!TIP|label:提示]
    > 删除的时候会有很多 warnings，无视即可。

- `addgroup groupName`：添加组
- `delgroup --only-if-empty groupName`：（仅当组里没有用户时）删除组
- `usermod -aG groupName userName`：将某用户加入某组，`-a` 代表添加（append），`-G` 代表组
- `deluser userName groupName`：将某用户从某组中删除

    > [!TIP|label:提示]
    > 无法从初始组中删除，只能用 `usermod -g newGroupName userName` 修改用户的初始组为新的组。

- `cat /etc/passwd`：查看所有用户
- `cat /etc/group`：查看所有组
- `groups userName`：查看某用户所在的组
- `getent group groupName`：查看某组有哪些用户

    > [!TIP|label:提示]
    > `getent` 是 “get entries” 的缩写，用来获取某个数据库的条目，比如 `/etc/passwd`、`/etc/group` 等等，所以 `getent group groupName` 实际上是访问 `etc/group` 取了对应的条目。同理可以通过 `getent passwd userName` 查看某个用户的信息。
    > 
    > 对于初始组是 `groupName` 的 `userName` 来说，`getent group groupName` 并不会显示该用户，但可以通过 gid 来判断，比如 `getent group groupName` 的输出中有一串数字，我们叫它 `gidNumber`，那么就可以通过 `cat /etc/passwd | grep gidNumber` 来找到对应的用户。

### 权限

- `chmod modeNumber dirName/fileName`：更改目录/文件的权限

    > [!TIP|label:提示]
    > `modeNumber` 由三位数构成，第一位代表 root 权限，第二位代表目录或文件拥有者的权限，第三位代表其他人的权限。`4` 代表可读（r），`2` 代表可写（w），`1` 代表可执行（x），数字相加即为权限叠加，比如 `7` 代表拥有 rwx 权限，最放松的权限就是 `777`。通常目录都是可执行的，而文件是不可执行的，因此对于目录来说，root 权限是 `755`；对于文件来说，root 权限是 `644`。
    > 
    > 本地文件上传服务器时如果是 root 权限就没法传，需要先放松权限，上传后再改回来。

- `chmod -R modeNumber dirName`：更改目录下所有文件的权限
- `chown userName:(groupName) fileName`：更改文件的拥有者和拥有组（不写 `groupName` 则为拥有者的默认组）
- `chown -R userName:(groupName) dirName`：更改目录及目录下所有文件的拥有者和拥有组
- `setfacl -m u:userName:rwx fileName`：设置某个用户在某个文件的权限

    > [!TIP|label:提示]
    > `rwx` 可以替换成 `r`、`w`、`x` 的组合，比如 `rx`、`rw` 等等，如果限制所有权限，可以用 `-`。
    > 
    > 如果设置的是组权限，用 `g:groupName` 替换 `u:userName`。

- `setfacl -Rm u:userName:rwx dirName`：设置某个用户在某个目录下所有文件的权限
- `getfacl fileName/dirName`：查看某个文件/目录的权限

### 系统

- `cat /proc/version`：查看系统版本
- `lscpu`：查看 CPU 信息
- `lspci | grep -i nvidia`：查看 GPU 型号

    > [!NOTE|label:注意]
    > 如果并没有显示型号，而是显示 `NVIDIA Corporation Device 2204` 之类的东西，这可能是因为 `/usr/share/misc/pci.ids` 文件没有更新，可以使用 `sudo update-pciids` 更新一下。

- `du -sh * | sort -nr | head -n 10`：查看物理内存占用最多的 10 个文件夹
- `df -aTh`：查看磁盘空间
- `fdisk -l`：查看所有盘符
- `lsblk`：查看各个内存块的基本信息
- `blkid`：查看各个内存块的 UUID
- `shutdown -h now`：关机

### 安装

- `apt-get update`：更新软件源（但不更新软件）
- `apt-get upgrade`：升级软件
- `apt-get install packageName`：安装软件
- `apt-get remove --purge packageName`：卸载软件
- `apt-get autoremove`：卸载不需要的软件

    > [!TIP|label:提示]
    > 通常我们会执行三个步骤来更新软件：
    > 
    > 1. `apt-get update`
    > 2. `apt-get upgrade`
    > 3. `apt-get autoremove`

### 挂载

- `mount /dev/deviceName dirName`：将某个设备挂载到某个目录下
- `umount dirName`：卸载某个目录下的设备
- `sshfs -o allow_other,default_permissions,uid=userIDNumber,gid=groupIDNumber userName@remoteIP:remoteDirName localDirName`：挂载远程服务器的目录到本地

    > [!TIP|label:提示]
    > `allow_other` 代表允许其他用户访问，`default_permissions` 代表使用默认权限，`uid` 和 `gid` 填写挂载后的 owner user/group 的 id，可以通过 `cat /etc/passwd` 和 `cat /etc/group` 查到，这些参数之间的逗号后面不能有空格！如果不填 `uid` 和 `gid` 的话，挂载后的 owner 可能有问题（不是你想要的）。
    > 
    > `localDirName` 代表本地目录，通常我们会在本地的 `/mnt` 文件夹下创建一个文件夹作为远程文件夹的载体。
    > 
    > 卸载的时候跟其他设备相同，用 `umount localDirName` 即可。

### 其他

- `nvidia-smi -pm 1`：开启 GPU 持久模式，即 GPU 不会在空闲时自动降频，也不需要在启动时预热。`0` 的话是关闭。

## 一次性工作

以下是一些一次性的过程，比如安装某个软件、配置某个环境等等。

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

### 安装 Nvidia 驱动

参考：
- [CSDN：超全超详细的安装nvidia显卡驱动教程](https://blog.csdn.net/sinat_34686158/article/details/106845208)
- [NVIDIA drivers installation](https://ubuntu.com/server/docs/nvidia-drivers-installation)

1. 如果有系统自带的 `nouveau` 驱动，需要先禁用，具体见第一个参考链接。这里跳过这一步，因为服务器上没有 `nouveau`；
2. `sudo apt-get remove --purge nvidia*`：卸载之前安装的 Nvidia 驱动；
3. `ubuntu-drivers devices`：查看可用的 Nvidia 驱动版本，在推荐的版本后面会显示 `recommended`；
4. `sudo ubuntu-drivers autoinstall`：安装推荐的 Nvidia 驱动版本；
5. 重启；
6. `nvidia-smi`：如果正常显示则安装成功。

如果重启后 `nvidia-smi` 仍无法正常显示，执行 `nvidia-smi -L` 显示 `GPU...: not found` 的话，可以试试卸掉现有驱动，重装 `non-open` 的驱动版本。比如原本装的是 `535-server-open`，可以改成装 `535-server`，具体步骤如下：

1. `sudo apt-get remove --purge nvidia*`：卸载之前安装的 Nvidia 驱动；
2. `ubuntu-drivers devices`：查看可用的 Nvidia 驱动版本，找到不带 `open` 字样的驱动版本；
3. `sudo ubuntu-drivers install --gpgpu nvidia:535-server`：安装指定的 Nvidia 驱动版本，这里以 `535-server` 为例；
4. `sudo apt install nvidia-utils-535-server`：安装额外的驱动包，不然用不了 `nvidia-smi` 指令；
5. 重启；
6. `nvidia-smi`：如果正常显示则安装成功。

### 安全删除硬盘内容（保护隐私防恢复）

参考：[StackExchange: SSD Erasure verification](https://security.stackexchange.com/questions/171396/ssd-erasure-verification)

实现过一次，但最终效果是 `df -aTh` 显示硬盘空间是满的，而 `du -sh` 显示硬盘空间是空的，应该是安全删除了，但不知道影不影响后续使用。具体步骤如下：

1. `hdparm -I /dev/sda | grep -A8 "^Security:"`：查看硬盘是否支持安全删除（“not locked”，“not frozen”，“supported: enhanced erace”）；
2. `yes "You should not see me" > /dev/sda`：将硬盘内容填充为 “You should not see me”；
3. `hdparm --security-set-pass NULL /dev/sda`：设置硬盘密码为空值；
4. `hdparm --security-erase-enhanced NULL /dev/sda`：安全删除硬盘内容。
5. `strings /dev/sda | grep "You should not see me"`：查看硬盘内容是否被填充（然而在步骤 3 之前就已经填充了，输出跟步骤 4 之后是一样的，不知道在这里检查这么一步是要干嘛）。

同样地还有一种填充方式，即 `dd if=/dev/urandom of=/dev/sda bs=1M`，这种方式是用随机数填充硬盘内容，不知道和上面的方式有什么区别。

### 升级 CUDA

[CUDA Toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive) 里面有各个版本的 cuda 下载链接，选择对应版本和系统后选择 `runfile` 进行下载和安装。安装的时候如果已经有 `nvidia driver` 了，则取消勾选 `nvidia driver`。

#### NVCC 与 CUDA 版本不一致

如果安装了新版本的 cuda，但是 `nvcc -V` 显示的 cuda 版本不是最新的，可以尝试添加 cuda 环境变量：

1. `vim ~/.bashrc`：打开 `.bashrc` 文件；
2. 在文件末尾添加 

    ```bash
    export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
    export LD_LIBRARY_PATH=/usr/local/cuda/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
    export CUDA_HOME=/usr/local/cuda
    ```

    > [!TIP|label:提示]
    > 当你想使用老版本的 cuda 而非新版本的 cuda，可以将 `export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}` 改为 `export PATH=/usr/local/cuda-10.0/bin${PATH:+:${PATH}}`，其中 `10.0` 是你想要的 cuda 版本号，前提是 `/usr/local` 下有对应版本的 cuda 文件夹。`LD_LIBRARY_PATH` 和 `CUDA_HOME` 同理。
    > 
    > `${PATH:+:${PATH}}` 的意思是如果 `PATH` 不为空，则在 `PATH` 后面加 `:`，然后再加上原来的 `PATH`。而如果直接用 `export PATH=/usr/local/cuda/bin:$PATH` 的话，如果原先 `PATH` 为空会导致修改后的 `PATH` 变成 `/usr/local/cuda/bin:`，即环境变量会纳入当前路径，可能导致安全问题。当然一般环境变量都不会为空，所以只是个以防万一的写法。

3. `source ~/.bashrc`：使修改生效。

这时再使用 `nvcc -V` 应该就会显示最新的 cuda 版本了。