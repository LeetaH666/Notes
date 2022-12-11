# 二、基于价值的模型

基于价值的模型（Value-based model）训练目标是获得最优的动作价值函数。

## 基于价值的原理

如果我们能够得到每个状态下不同动作价值的上限，即采取一个动作最多可以拿到多少期望回报，我们就只需要在每个状态选择最大价值上限的动作即可。于是我们的目标是得到最优动作价值函数：

$$
Q^{*}(s_t,\ a_t) := \underset{\pi}{\max} ~ Q_{\pi}(s_t,\ a_t)
$$

在[基本概念](rl/1_basic_concepts.md#动作价值函数)中我们讲到，动作价值函数是与策略 $\pi$ 有关的，它衡量的是在策略 $\pi$ 下不同动作的价值；而最优动作价值函数是在最优策略下得到动作价值函数，它衡量的是不同动作价值的上限。

得到最优动作价值函数后，智能体就可以利用它做出决策：

$$
a^{*} = \underset{a}{\mathop{\arg\max}} ~ Q^{*}(s,\ a)
$$

## 训练算法

### TD (Temporal Difference) Learning

首先我们并不知道动作价值函数长什么样，所以我们只能根据现有的信息给出动作价值的估计值。让估计值去靠近真实值，我们就能逐渐逼近真实的动作价值函数。

回忆一下回报的定义，$t$ 时刻的回报可以写成

$$
\begin{aligned}
 U_t &= R_t + \gamma R_{t+1} + \gamma^{2} R_{t+2} + \cdots \\
 &= R_t + \gamma \left(R_{t+1} + \gamma R_{t+2} + \gamma^{2} R_{t+3} + \cdots \right) \\
 &= R_t + \gamma \cdot U_{t+1} \\
\end{aligned}
$$

于是对任意一个策略 $\pi$，我们有

$$
\begin{aligned}
 Q_{\pi}(s_t,\ a_t) &= \mathrm{E}(U_t|s_t,\ a_t) \\
 &= \mathrm{E}(R_t + \gamma \cdot U_{t+1}|s_t,\ a_t) \\
 &= \mathrm{E}(R_t|s_t,\ a_t) + \gamma \cdot \mathrm{E}(U_{t+1}|s_t,\ a_t) \\
 &= \mathrm{E}(R_t|s_t,\ a_t) + \gamma \cdot \mathrm{E}[\mathrm{E}(U_{t+1}|S_{t+1},\ A_{t+1})|s_t,\ a_t] \\
 &= \mathrm{E}(R_t|s_t,\ a_t) + \gamma \cdot \mathrm{E}[Q_{\pi}(S_{t+1},\ A_{t+1})|s_t,\ a_t] \\
 &= \mathrm{E}[R_t + \gamma \cdot Q_{\pi}(S_{t+1},\ A_{t+1})|s_t,\ a_t] \\
\end{aligned}
$$

因此对于

想要得到

## 经典模型

### Q Learning

$$
\approx r_t + \gamma \cdot \underset{a}{\max} ~ Q_{\pi}(s_{t+1},\ a)
$$

### SARSA

$$
\approx r_t + \gamma \cdot Q_{\pi}(s_{t+1},\ a_{t+1})
$$

### DQN (Deep Q Network)