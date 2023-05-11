# Tmux 指令与快捷键

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
- `C`：在当前 session 新建一个窗口
- 数字：切换到对应数字的窗口