# Tmux 指令与快捷键

## Tmux 架构

<center>

session -> window -> panel
</center>

session 指一个命令行界面，window 指命令行界面中的一个窗口，panel 指窗口中的不同分区。

### 特性

- 建立一个 session 只会有一个 window，一个 window 中只有一个 panel；
- 可以通过快捷键在 session 中创建多个 window，可以快捷切换，而如果你创建多个 session 则没法很快的切换；
- 可以通过快捷键在 window 中创建多个 panel，通俗来讲就是分屏，这时候你不需要切换都可以同时监视多个区域。

## 键入

- `tmux ls`: 查看所有 session
- `tmux new -s + sessionName`：创建新的 session，`sessionName` 为自定义的名字
- `tmux a -t + sessionName`：attach 到某个 session
- `tmux kill-session -t + sessionName`：永久关闭某个 session
- `tmux set mouse on`：开启鼠标滚轮，滚轮滑动后进入滚动模式，可以用滚轮或方向键操控，按 `Esc` 退出

    > `set mouse on` 不代表鼠标可以像正常 terminal 那样使用，复制文字依旧需要按住 `Shift` 来选中。

- `exit`：永久关闭当前 panel

## 快捷键（默认先按 `Ctrl + B`）

- `C`：在当前 session 新建一个 window
- `D`：暂时关闭当前 session
- `X`：永久关闭当前 panel
- 数字：切换到对应数字的 window（每个 window 有自己的数字编号）
- `%`：在当前 window 新建一个 panel（横向分屏）
- `"`：在当前 window 新建一个 panel（纵向分屏）
- `方向键`：光标在 panel 之间移动
- `[`：进入滚动模式，可以使用方向键或鼠标滚轮来查看历史输出，按 `Esc` 退出。在滚动模式下，有以下快捷键，和 Vim 比较类似：
  - `k`/`j`/`h`/`l`：向上/下/左/右移动光标
  - `w`/`b`：向前/后移动一个单词
  - `0`/`$`：跳转到行首/行尾
  - `Page Up/Page Down`：向上/下翻页
  - `g/G`：跳转到顶/底部
  - `Space`：开始选择文本，使用方向键选择后按 `Enter` 复制选中的文本到剪贴板
  - `/`：搜索文本，输入要搜索的内容后按 `Enter`，使用 `n`/`N` 来查找下一个/上一个匹配项
  - `q`：退出滚动模式

## 常见问题

### 某个 panel 键入无效

有时候在某个 panel 按键盘会没有反应，可能是因为误触了锁定快捷键 `Ctrl + S`。这时候可以尝试按 `Ctrl + Q` 来解锁该 panel。在 VSCode 的终端中，`Ctrl + Q` 可能对应其他快捷键，可以考虑用 cmd 来解锁。

### 不同 terminal 打开同一个 session 导致窗口大小不一致

可以通过 `Ctrl + B` 后 `Shift + D` 来唤出调整窗口大小的选项，选择分辨率最小的那个（一般是第一个），然后按 `Enter` 即可调整所有 session 的窗口大小一致，重新打开 tmux 窗口后即可生效。