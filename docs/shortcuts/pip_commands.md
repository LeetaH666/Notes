# Pip 命令

Pip 和 Conda 一样，都是包管理软件，我们优先使用 Conda，但有些包只有 Pip 能装，且有些时候用 Conda 通过 requirements.txt 安装包时会有冲突，这时也需要用 Pip 来完成。

## 常用命令

- `pip install packageName`：安装某个包

    > [!TIP|label:提示]
    > 通常使用 Pip 会遇到网络错误，这是因为无法访问默认的下载地址，需要使用镜像源下载，例如 `pip install packageName -i https://pypi.tuna.tsinghua.edu.cn/simple/` 即从清华源下载。也可以使用 `pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple` 来设置全局镜像源。当然[你科镜像源](https://mirrors.sustech.edu.cn/help/pypi.html#introduction)也是同样地好使。

- `pip install -r requirements.txt`：根据 requirements.txt 安装所有包