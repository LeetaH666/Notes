# Pip 命令

Pip 和 Conda 一样，都是包管理软件，我们优先使用 Conda，但有些包只有 Pip 能装。

## 常用命令

- `pip install packageName`：安装某个包

    > [!TIP|label:提示]
    > 通常使用 Pip 会遇到网络错误，这是因为无法访问默认的下载地址，需要使用镜像源下载，例如 `pip install packageName -i https://pypi.tuna.tsinghua.edu.cn/simple/` 即从清华源下载。