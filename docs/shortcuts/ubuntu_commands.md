# Ubuntu 命令

## 管理员

- `su`：进入 root 账户
- `sudo passwd`：重设密码
- `cat /etc/passwd`：查看所有用户
- `cat /etc/group`：查看所有组
- `adduser/deluser User`：添加/删除用户
- `gpasswd -a/-d User Group`：在组中添加/删除某用户
- `top`：查看内存占用

## 常用

- `cd dirName`：进入某个目录（`.` 代表当前目录，`..` 代表上一层目录，`~` 代表根目录）
- `mkdir dirName`：创建目录
- `touch fileName`：创建文件
- `cp -r dir1Name dir2Name`：复制目录1到目录2内
- `cp fileName dirName`：复制文件到某个目录内
- `rm -r dirName`：删除目录
- `rm fileName`：删除文件
- `du -h dirName/fileName`：查看目录/文件占用内存
- `Ctrl + C`：终止命令