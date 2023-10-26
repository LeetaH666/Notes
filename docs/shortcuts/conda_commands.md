# Conda 命令

## 环境

- `conda create -n envName python=3.8`：创建新的环境并安装 python3.8（版本可修改）
- `conda create -n envName r-essentials r-base`：创建新的环境并安装 r-essentials 和 r-base（R 语言）
- `conda activate envName`：激活某一环境
- `conda list`：列出当前环境下用 conda 装的包
- `conda remove -n envName --all`：删除环境

## 镜像源

- `conda config --show-sources`：查看已有镜像源
- `conda config --add channels URL`：加入新的镜像源
- `conda config --remove channels URL`：移除某个镜像源
- `conda config --set show_channel_urls yes`：安装包时显示包来源

> [!TIP|label:好用的镜像源]
> - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge
> - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2/
> - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r/
> - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/

## 包管理

- `conda install packageName`：在当前环境下通过 conda 安装某包
- `conda install -c r r-packageName`：在当前环境下通过 conda 安装 R 包（`-c r` 即指定 `r` 作为获取安装包的 channel）
- `conda uninstall packageName`：卸载当前环境下 conda 中某包

> [!NOTE|label:注意]
> 如果遇到 CRAN 的包在 conda 里没有，可以在对应的 conda R 环境下使用 `install.packages('packageName')` 安装。使用这种方法安装的包无法在 `conda list` 中显示。
> 
> 有时这种安装方法会因为依赖安装失败而报错，可以看依赖是否在 conda 里有，如果有就用 conda 先装依赖。

## 常用流程与问题

### 在 Ubuntu 配置 R 环境

使用 `conda create -n envName r-essentials r-base` 即可创建新的 R 环境，在这个 R 环境下键入 `R` 即可进入 R 终端，使用 `Rscript fileName` 即可执行 R 文件。

如果要在 VSCode 上写 R 程序，还需要安装 languageserver 包以及 R 插件，可以使用 `conda install -c r r-languageserver` 安装，也可以在 R 终端中通过 `install.packages("languageserver")` 安装。而 R 插件需要修改设置中的 `R > Rpath: Linux` 和 `R > Rterm: Linux` 为 conda 中的 R，通常路径为 `/home/userName/anaconda3/envs/envName/bin/R`，注意不能使用 `~/anaconda3/...` 这种相对路径，亲测无效。

完成以上工作后也许还是有问题，R Language Server 可能会报错，说 icu 没有找到，这是因为系统上自带的 icu 版本与 stringi 这个包不匹配，只需要在 R 终端中重新安装 stringi 即可。

运行 R 代码只需在右上角找到三角符号（Run Source）点击即可，注意需要在代码文件所在的目录下运行。在这种运行方式下，左边的 R Workspace 才可以查看变量和图片。