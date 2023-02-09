# 三、Policy-Based 算法

Policy-based 算法**目标是估计一个好的策略 $\pi$**。

## Policy Gradient

我们用一个带参数 $\theta$ 的网络 $\pi_{\theta}(a|s)$ 来输出智能体采用的策略，由于 $\pi$ 是个概率分布，我们需要 $\sum\limits_{a \in \mathcal{A}} \pi_{\theta}(a|s) = 1$，这通常可以通过 softmax 来实现。

强化学习的目标通常是最大化奖励的期望，即最大化 $\mathrm{E}\left(\sum\limits_{t} R_t \right)$

目标函数为

$$
J(\theta) = \mathrm{E}
$$