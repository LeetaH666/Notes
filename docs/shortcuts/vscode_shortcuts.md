# VSCode 快捷键

> [!TIP|label:提示]
> 聚焦（Focus）：光标移动到某个位置。

## 默认快捷键

> [!NOTE|label:注意]
> mac的默认快捷键大部分是将 `Ctrl` 替换成 `Command`。

- `F1/Ctrl + Shift + P`: Show All Commands
  - 打开命令面板
- `F2`: Rename Symbol/renameFile
  - 重命名（既可以重命名变量，又可以重命名文件）

  > [!ATTENTION|label:注意]
  > mac的默认 `renameFile` 不是 `F2`，是 `Enter`。

- `F9`: Debug: Toggle Breakpoint
  - 在光标所在行添加或删除断点
- `Alt + ↑/↓`: Move Line Up/Down
  - 所在行或选取行与上/下一行交换顺序
- `Ctrl + =/-`: View: Zoom In/Out
  - 放大/缩小
- <code>Ctrl + `</code>: View: Toggle Terminal
  - 聚焦/隐藏 Terminal
- `Ctrl + 0`: View: Focus into Primary Side Bar
  - 聚焦侧边栏

  > [!TIP|label:提示]
  > 如果之前没有打开侧边栏，那么该操作只会打开侧边栏，并不会聚焦，需要再按一次。

  > [!ATTENTION|label:注意]
  > 侧边栏并不代表文件管理器（Explorer）！如果之前侧边栏聚焦的是别的功能区，比如聚焦在扩展区，想要聚焦文件管理器需要用 `Ctrl + Shift + E`。

- `Ctrl + 1`: View: Focus First Editor Group
  - 聚焦第一个 Editor Group（同理 `Ctrl+2` 即聚焦第二个，以此类推）
- `Ctrl + P`: Go to File
  - 打开文件
- `Ctrl + W`: View: Close Editor
  - 关闭文件
- `Ctrl + \`: View: Split Editor
  - 分屏
- `Ctrl + Shift + E`: View: Show Explorer
  - 打开并聚焦侧边栏的文件管理器

  > [!TIP|label:聚焦文件管理器后的操作]
  > **非 Vim 用户**
  > - `↑/↓`: list.focusUp/Down 
      - 上移/下移
  > - `Enter`: list.select
      - 打开文件
      - mac默认是 `Space`。
  >
  > - `→/Space`: list.expand/list.toggleExpand
      - 打开文件（相当于把文件向右拖）或者展开文件夹
  > - `←`: list.collapse
      - 收起文件夹
  >
  > **Vim 用户**
  > - `K/J`: list.focusUp/Down
      - 上移/下移 
  > - `L`: list.select
      - 打开文件（相当于把文件向右拖）或者展开文件夹
  > - `H`: list.collapse
      - 收起文件夹

- `Ctrl + Shift + G`：View: Show Source Control
  - 打开侧边栏的 Git 管理界面
- `Ctrl + Shift + L`: Search Editor: Select All Matches
  - 选中相同单词（进入 VISUAL-BLOCK 模式，可以批量修改变量）
- `Ctrl + Shift + N`: New Window
  - 打开新窗口
- `Ctrl + Shift + W`: Close Window
  - 关闭窗口
- `Ctrl + Shift + \`: Terminal: Focus Terminal Tabs View
  - 聚焦 Terminal 选项卡，可以用上下或 jk 移动
- `Ctrl + K, Ctrl + O`: File: Open Folder
  - 打开文件夹
- `Ctrl + K, 方向键`: View: Move Editor Group Up/Down/Left/Right
  - 将当前 Editor Group 移到所选方向
- `Alt + Shift + O`: Organize Imports
  - 整理 python 导入包的代码

**许多快捷键设计不符合直觉**，记忆起来比较困难，且**很多命令没有默认快捷键**，这个时候就需要我们自己更改或设置。

按 `F1` 或 `Ctrl + Shift + P` 打开命令面板，选择 `Preference: Open Keyboard Shortcuts`，即可按功能名称或快捷键查询相应信息。按功能名称查询直接输入名称即可，按快捷键查询在快捷键两端加上双引号（单引号不行）。

## 自定义快捷键（仅供参考）

- `Ctrl + Enter`: Run Code / Markdown Preview Enhanced: Open Preview to the Side
  - 执行文件或打开 MPE 的预览
- **Jupyter Notebook**
  - `Ctrl + J`: Jupyter: Create New Jupyter Notebook
    - 新建 Notebook
  - `Ctrl + K, Ctrl + V`: Jupyter: Focus on Variables View
    - 将光标移到 Jupyter 的变量查看
  - `Esc` (default)：Notebook: Stop Editting Cell
    - 停止编辑代码块，光标可使用方向键或 Vim 方向键在代码块间移动，并且可使用以下快捷键
  - `C`: Notebook: Change Cell to Code
    - 把 markdown 代码块改成 python 代码块
  - `M` (default): Notebook: Change Cell to Markdown
    - 把 python 代码块改成 markdown 代码块
  - `Y`: Notebook: Copy Cell
    - 复制代码块
  - `P`: Notebook: Paste Cell
    - 粘贴代码块
  - `X` (default): Notebook: Cut Cell
    - 剪切代码块
  - `B`: Notebook: Insert Cell Below
    - 在下方插入代码块
  - `Alt + Enter`: Notebook: Execute Cell
    - 执行单个代码块
  - `Ctrl + Alt + Enter`: Execute Cell and Insert Below
    - 执行单个代码块并在下方插入代码块

- `Ctrl + K, Ctrl + N`: workbench.action.files.newFile
  - 在当前文件夹下新建文件
- `Ctrl + K, Ctrl + P`: Project Manager: List Projects to Open
  - 列出 Project Manager 中的文件夹
- `Ctrl + K, Ctrl + T`: Terminal: Create New Terminal
  - 新建一个 Terminal
- `Ctrl + K, Ctrl + W`: View: Close Primary Side Bar
  - 关闭侧边栏
- `Ctrl + K, R`: Remote-SSh: Connect to Host
  - 在新窗口打开远程 SSH
- `Ctrl + Q, C`: Notifications: Clear All Notifications
  - 关闭右下角所有通知
- `Ctrl + Q, F`: Quick Fix
  - 在问题处选择快速修复

> [!TIP|label:提示]
> 修改快捷键的时候，如果有冲突可以忽略，使用时无效再把冲突的功能给改了（或者直接删掉该快捷键）。
