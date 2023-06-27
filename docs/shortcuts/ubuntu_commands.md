# Ubuntu 命令

## 常用

- `cd dirName`：进入某个目录（`.` 代表当前目录，`..` 代表上一层目录，`~` 代表根目录）
- `mkdir dirName`：创建目录
- `touch fileName`：创建文件
- `cp -r dir1Name dir2Name`：复制目录1到目录2内
- `cp fileName dirName`：复制文件到某个目录内
- `rm -rf dirName`：删除目录（`-f` 代表强制删除不存在的文件）
- `rm fileName`：删除文件
- `ln -s fileName dirName`：将某个文件软链接到某目录下
- `Ctrl + C`：终止命令
- `du -h dirName/fileName`：查看目录/文件占用内存
- `free -h`：查看服务器内存
- `top`：查看 CPU 内存占用
- `lscpu`：查看 CPU 信息
- `... | grep Target`：查找指定信息，比如：
    - `dpkg -l | grep libicu`：查找包含 libicu 字样的包信息
    - `conda list | grep stringi`：查找包含 stringi 字样的 conda 包

## 管理员

- `su`：进入 root 账户
- `sudo passwd`：重设密码
- `cat /etc/passwd`：查看所有用户
- `cat /etc/group`：查看所有组
- `adduser/deluser User`：添加/删除用户
- `gpasswd -a/-d User Group`：在组中添加/删除某用户
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