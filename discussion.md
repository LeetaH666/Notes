# 孙澈工作讨论

## 基于对抗三维卷积自编码器的像素层特征表示

### 解决问题

- 如果有人走路经过一根柱子，只看在柱子后面这一帧识别不到人，但根据上下文就可以。
- 如果有人和背景颜色差不多，很难识别出来。

### 实现细节

- 三维卷积：
    - 提取时空相关性；
    - Literature 用二维卷积 + LSTM，但 LSTM 如果遇到状态变化会遗忘过去。
- 输入加噪声：
    - 防止模型学到恒等变换（靠记住输入来实现输出）；
    - 加噪声有点像惩罚信息，让信息都变小一些，从而突出那些原本不明显的信息。
- GAN 结构：
    - 三维卷积 encode 之后 decode 作为生成器；
    - 判别器判别生成器的输出与输入是否一致。

### 可能相关的金融问题

- 数据缺失（不光是时序插值，插值应考虑截面信息）

## 基于时空上下文图的目标层特征表示

### 解决问题

异常与异常关系检测。

### 实现细节

- 结构 RNN：建立目标之间的时空图。
- 场景图聚类：检测图上节点的异常或节点之间边的异常（关系异常）。

### 可能相关的金融问题

- 风控

## 动态 AP Tree

使用强化学习让 AP Tree 的分法时变。
