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

Model-based 算法会对状态转移概率 $p$ 进行建模，并用估计出的 $p$ 直接进行规划或改进策略，还可以利用它学一个价值函数出来（因此 model-based 中既有 policy-based 算法，也有 value-based 算法）；不对 $p$ 进行建模的算法统称 model-free。

### 例子

- Model-based：Dyna
- Model-free：DQN

## Off-Policy VS. On-Policy

### 区别

Off-policy 算法在改进策略时不需要用这个策略来生成样本；而 on-policy 算法每改进一次策略，就需要用新的策略来生成新的样本。

### 例子

- Off-policy：Q-learning
- On-policy：SARSA