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
- `tmux new -s + session`：创建新的 session，`session` 为自定义的名字
- `tmux a -t + session`：attach 到某个 session
- `exit`：永久关闭当前 session
- `tmux kill-session -t + session`：永久关闭某个 session
- `tmux set mouse on`：开启鼠标滚轮，滚轮滑动后进入滚动模式，可以用滚轮或方向键操控，按 `Esc` 退出

    > `set mouse on` 不代表鼠标可以像正常 terminal 那样使用，复制文字依旧需要按住 `Shift` 来选中。

## 快捷键（默认先按 `Ctrl + B`）

- `D`：暂时关闭当前 session
- `C`：在当前 session 新建一个 window
- 数字：切换到对应数字的 window（每个 window 有自己的数字编号）
- `%`：在当前 window 新建一个 panel（分屏）