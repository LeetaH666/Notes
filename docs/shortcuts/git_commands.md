# Git 常用命令与操作流程

## Git 常用命令

- **git clone + 远程仓库链接**：将远程仓库整个克隆到本地。
- **git init**：将当前文件夹变成 git 文件夹。
- **git add + 文件名**：把文件放进缓冲区，可以用 `.` 来代表文件夹下所有文件。
- **git status**：查看当前文件夹下的状态，比如缓冲区中是否有需要 commit 的文件。
- **git commit + (文件名) + -m + (内容)**：对缓冲区内的所有或指定文件进行 commit，即解释新加的文件或者新做的更改。
- **git reset**：重置缓冲区。
- **git remote -v**：列出所有远程主机以及对应网址。
- **git remote add + 远程主机名 + 远程仓库链接**：把当前文件夹与远程仓库连接起来，并给它命名一个代号，通常我们会将它命名为 `origin`，因为使用 `git clone` 命令时 git 会自动命名远程主机为 `origin`。
- **git branch -a**：列出所有仓库分支。
- **git push (-u) + (远程主机名) + (本地分支名)**：将本地仓库推送到远程，远程主机名通常为 `origin`，远程分支名通常为 `master`。第一次推送需要用 `-u` 指令，之后就不需要了；如果本地和远程存在追踪关系且只有一个分支，主机名和分支名都可以省略。
- **git pull + (远程主机名) + (远程分支名)**：将远程仓库的内容下拉到本地并与本地分支合并，如果存在追踪关系且只有一个分支，主机名和分支名都可以省略。

## Git 常用操作流程

### 克隆项目

1. git clone + 远程仓库链接

### 将本地文件夹上传到远程仓库

1. 远程新建一个仓库
2. git init
3. git add .
4. git commit -m "first upload"
5. git remote add origin + 远程仓库链接
6. git push -u origin master

### 将远程仓库下拉到本地

1. git init
2. git remote add origin + 远程仓库链接
3. git pull origin master

### 本地更新上传远程

1. git commit -m "update"
2. git push

### 本地下拉远程更新

1. git pull

## 常见问题与解决方案

### 无法 push

有时候我们 commit 完之后 push 遇到如下问题（比如在 VSCode 的非当前文件夹下进行 commit & push）：

<div align='center'>

![](image/2022-12-27-14-51-53.png)
</div align='center'>

一个解决方案就是重新上传一个同名分支覆盖掉原先的分支：

1. git push -u origin head
