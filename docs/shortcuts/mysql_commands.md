# MySQL 命令

MySQL 是一个关系型数据库管理系统，如果还没有安装，可以参考 [MySQL 安装与配置](./ubuntu_commands.md/#mysql-安装与配置)。尽管 MySQL 的命令是不分大小写的，但是为了可读性，以下命令中，函数命令都是大写的，变量用小写，用户自定义的部分用小驼峰命名法。

## 连接数据库

- `sudo mysql -u root`：以 root 用户连接数据库
- `mysql -u userName -p`：连接数据库，输入密码（`-p` 后面不需要接密码，提示输入的时候再输入）

    > [!TIP|label:提示]
    > 如果遇到 `ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)` 的问题，可以在 `/etc/mysql/mysql.conf.d/mysql.cnf` 中设置 `socket = /var/run/mysqld/mysqld.sock`，然后重启 MySQL 服务来解决。

- `exit;`：退出数据库

## 管理用户

- `CREATE user 'userName'@'hostName' IDENTIFIED BY 'userPassword';`：创建用户

    > [!TIP|label:提示]
    > 如果设置密码时一直说密码不符合当前规则，则可以通过 `SHOW variables LIKE 'validate_password%';` 查看密码规则。

- `SHOW grants FOR 'userName'@'hostName';`：显示用户权限
- `GRANT CREATE ON *.* TO 'userName'@'hostName';`：授权用户创建数据库的权限
- `GRANT ALL PRIVILEGES ON dbName.* TO 'userName'@'hostName';`：授权用户对数据库的所有权限

## 管理数据库

- `SHOW databases;`：显示所有数据库
- `CREATE database dbName;`：创建数据库
- `DROP database dbName;`：删除数据库
- `USE dbName;`：选择进入哪个数据库
- `SHOW tables;`：显示数据库中的表
- `sudo mysqldump -u root dbName > fileName.sql`：备份数据库

    > [!TIP|label:提示]
    > 用 root 用户来备份数据，因为通常其他用户没有 PROCESS 权限。

## 数据库查询

- `SELECT database();`：显示当前数据库
- `SHOW columns FROM tableName;`：显示表的列
