# 二、算法分类

## Policy-Based VS. Value-Based VS. Actor-Critic

### 区别

在 policy-based 算法中，模型输出的是策略 $\pi$；在 value-based 算法中，模型输出的是状态价值函数 $V$ 或者动作价值函数 $Q$；而 actor-critic 是两者的结合，actor 模型输出的是策略 $\pi$，critic 模型输出的是价值函数。

### 例子

- Policy-based：Policy gradient
- Value-based：DQN（Deep Q Network）
- Actor-critic：A3C（Asynchronous Advantag Actor-Critic）

## Model-Based VS. Model-Free

### 区别

Model-based 算法会对环境机制 $p$ 进行建模，并用估计出的 $p$ 直接进行规划或改进策略，还可以利用它学一个价值函数出来（因此 model-based 中既有 policy-based 算法，也有 value-based 算法）；不对 $p$ 进行建模的算法统称 model-free。

### 例子

- Model-based：Dyna
- Model-free：DQN

## On-Policy VS. Off-Policy

### 区别

On-policy 算法生成样本用的策略和做策略提升用的策略是同一个策略；而 off-policy 算法使用不同的策略来生成样本和迭代策略，通常生成样本需要更具探索性的策略，而迭代策略时我们想要找到最优的策略（不一定需要探索性）。由于用到了两个不同的策略，off-policy 算法的波动会比较大，收敛也比较慢，但效果会更强。

### 例子

- On-policy：SARSA
- Off-policy：Q-learning