### 键入
- **tmux ls**: 查看所有session
- **tmux new -s + session**：创建新的session，`session`为自定义的名字
- **tmux a -t + session**：attach到某个session
- **exit**：永久关闭当前session
- **tmux kill-session -t + session**：永久关闭某个session

### 快捷键（默认先按Ctrl + B）
- **pgup/pgdn**：窗口向上/向下滚动一页，按后窗口进入滚动模式，可以使用滚轮或方向键，按esc退出
- **D**：暂时关闭当前session