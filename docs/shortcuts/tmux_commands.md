# Tmux 指令与快捷键

## 键入

- **tmux ls**: 查看所有 session
- **tmux new -s + session**：创建新的 session，`session` 为自定义的名字
- **tmux a -t + session**：attach 到某个 session
- **exit**：永久关闭当前 session
- **tmux kill-session -t + session**：永久关闭某个 session

## 快捷键（默认先按 `Ctrl + B`）

- **pgup/pgdn**：窗口向上/向下滚动一页，按后窗口进入滚动模式，可以使用滚轮或方向键，按 `Esc` 退出
- **D**：暂时关闭当前 session
- **C**：在当前 session 新建一个窗口
- 数字：切换到对应数字的窗口