# DolphinDB 命令

> [!NOTE|label:注意]
> 以下内容基于 DolphinDB 3.00.2 版本。其他版本可能会有所不同。

## 交互方式

DolphinDB 支持多种交互方式，包括命令行、脚本、交互界面等。

### 命令行

在 `path/to/DolphinDB/server` 目录下，通过在命令行中输入 `./dolphindb` 即可进入 DolphinDB 的命令行交互界面。

### 脚本

DolphinDB 的脚本文件以 `.dos` 为后缀，在 `path/to/DolphinDB/server` 目录下，可以通过 `./dolphindb -run scriptName.dos` 的方式运行脚本。也可以在交互界面通过 `run` 函数运行写好的脚本。

### 交互界面

本地转发 `8848/8900` 端口（单节点/集群控制节点），可以通过浏览器访问 DolphinDB 的交互界面。

也可以使用 VSCode 插件 DolphinDB，通过配置连接信息，在 VSCode 中写代码并运行。不过 VSCode 插件的功能相对有限，有的东西在 web 界面更方便看。

> [!TIP|label:配置连接信息]
> VSCode 的 DolphinDB 插件会在左侧栏生成一个 `DolphinDB` 的图标，打开后 `CONNECTIONS` 旁边有一个齿轮图标，点击会进入到 VSCode 的设置，需要再点击 `Edit in settings.json`，才能编辑连接信息。
>
> 其中主要是集群控制节点的端口需要修改，改成 `8900` 才能连接。数据节点则对应 `8902` 端口。

## 基本语法

### 变量声明

> [!NOTE|label:注意]
> 这里只罗列一些与 python 不同的声明方式。

- `` `string1`string2`string3 ``：声明一个字符串向量（除非字符串有空格）。
- `start..end`：声明一个范围，包含 `start` 和 `end`。
- `<code>`：声明一段代码，可以在代码中使用变量。

### 函数调用

在 DolphinDB 中，函数调用既可以通过 `f(x)` 的形式，也可以通过 `x.f()` 的形式。

## 用户管理

> [!TIP|label:交互界面操作]
> 点击右上角的用户图标，输入用户名和密码登录。

- `login(userName, userPassword)`：登录。初始默认管理员名字为 `admin`，密码为 `123456`。
- `logout()`：注销。
- `changePwd(oldPassword, newPassword)`：修改密码。

### 管理员操作

- `createGroup(groupName, [userNames])`：创建用户组，可以在创建用户组的同时把用户加入到用户组中。
- `getGroupList()`：获取用户组列表。
- `createUser(userName, userPassword, [groupNames], [isAdmin=false])`：创建用户，可以指定用户组以及是否有管理员权限。
- `resetPwd(userName, newPassword)`：重置用户密码。
- `getUsersByGroupId(groupName)`：获取用户组中的用户列表。
- `grant(userNameOrGroupName, accessType, [objectNames])`：授权。其中 `accessType` 是权限类型。
- `getGroupAccess(groupName)`：获取用户组的权限。
- `deleteUser(userName)`：删除用户。

## 库表操作

### 创建库表

> [!TIP|label:交互界面操作]
> 在登录后的主界面，点击左下角的 `功能设置`，开启 `金融库表向导`，即可在左侧菜单栏找到 `金融库表向导`。在 `金融库表向导` 中，可以按照指导创建库表，会根据需求生成相应的代码。
> 在 `建表信息->列配置` 的地方，如果不想手输每一列，可以以 csv 的格式存一个样例数据，再通过 `导入表文件` 导入，会自动生成列配置。最终生成的代码可能并不完全符合需求，需要根据实际情况进行调整。

- `database("dfs://dbName")`：创建或加载数据库。

    > [!TIP|label:数据库分区]
    > 可以使用 `partitionType` 和 `partitionScheme` 参数分别指定数据库的分区类型和分区方案。例如 `database("dbName", partitionType=VALUE, partitionScheme=2014.01.02..2030.12.31)` 表示按值分区，值范围为 2014.01.02 到 2030.12.31，每个值为一个分区。又例如 `database("dbName", partitionType=HASH, partitionScheme=[SYMBOL, 50]` 表示按哈希分 50 个区。哈希分区的 partitionScheme 要求输入一个元组，第一个元素是数据类型，第二个元素是分区数量。
    > 还可以使用通过以下代码实现复合分区：
    > 
    > ```java
    > db1 = database(, partitionType=VALUE, partitionScheme=2014.01.02..2030.12.31)
    > db2 = database(, partitionType=HASH, partitionScheme=(SYMBOL, 50))
    > db = database("dfs://dbName", partitionType=COMPO, partitionScheme=(db1, db2))
    > ```

- `table(tableCapacity:tableSize, columnName, columnType)`：创建表。其中 `tableCapacity` 是表的容量，`tableSize` 是表的大小，表的容量需要大于等于表的大小。后续插入数据时，如果表的容量不够，会自动扩容。例如 `table(1:0)` 表示创建一个空表。`columnName` 支持输入字符串向量，`columnType` 则需要输入元组。
- `createPartitionedTable(dbHandle, tableObj, tableName, partitionColumns)`：创建分区表。其中 `dbHandle` 是数据库句柄（路径或对象），`tableObj` 是表对象，`partitionColumns` 是用来分区的列名。
- `setColumnComment(tableObj, columnComments)`：设置列注释。其中 `columnComments` 是字典类型的列注释，键为列名（不需要加引号），值为注释。
- `tableInsert(tableObj, dataObj)`：插入数据。其中 `dataObj` 可以是列表、字典、表等。

### 删除库表

- `dropDatabase("dfs://dbName")`：删除数据库。
- `dropTable("dfs://dbName", tableName)`：删除表。

### 查看库表

- `loadTable(dbHandle, tableName)`：加载表。
- `schema(dbOrTableObj)`：查看数据库或表的结构（分区方式、数据类型等）。

## 插件

- `installPlugin("pluginName")`：安装插件。比如要读取 Parquet 文件，需要安装 parquet 插件。
- `loadPlugin("pluginName")`：加载插件。安装后需要加载才能使用。

## SQL 查询

> [!NOTE|label:注意]
> DolphinDB 支持直接使用 SQL 语句，但有时候语句中需要用变量，则我们需要用以下函数动态生成 SQL 语句。

- `sql(select, from, ...)`：生成 SQL 查询语句。其中 `select` 是要查询的列，`from` 是要查询的表，还可以加其他条件，比如 `where`。通常会用 `eval` 函数来执行生成的 SQL 语句。
    
    > [!TIP|label:提示]
    > 这个函数中很多时候需要传入 code 类型的参数，比如 `select` 是不能直接传入字符串的，可以通过 `sqlCol` 函数把列名转换成 code 类型；又比如 `where` 是需要传入一个代码列表的，类似于 `where=[<symbol = "000001.SZ">]`。
    > 
    > 执行 SQL 语句的时候，一种可读性比较好的写法是 `sql(select, from, ...).eval()`。

- `sqlCol(colNames)`：生成 SQL 查询语句中的列名。`colNames` 是列名列表。
- `eval(code)`：执行代码。

## 执行函数与提交作业

- `rpc(nodeAlias, funcName, args, ...)`：在远程节点上执行函数。其中 `nodeAlias` 是节点别名，`funcName` 是函数名，`args` 是参数。
- `submitJob(jobId, jobDesc, jobDef, args, ...)`：提交作业。其中 `jobId` 是作业 ID，必须以字母开头，`jobDesc` 是作业描述，`jobDef` 是具体作业，即函数对象（不是字符串形式的函数名），`args` 是参数。

> [!TIP|label:提示]
> 通常这两个函数会配合使用，即用 `rpc` 远程执行 `submitJob` 来提交作业。