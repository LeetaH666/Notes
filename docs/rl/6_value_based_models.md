# 四、基于价值的模型

强化学习的模型可以分为三类：基于价值的模型（Value-based model）、基于策略的模型（Policy-based model）以及 Actor-Critic。其中基于价值的模型训练目标是**获得最优的动作价值函数**。

## 基于价值的原理

如果我们能够得到每个状态下不同动作价值的上限，即采取一个动作最多可以拿到多少**期望**回报，我们就只需要在每个状态选择最大价值上限的动作即可。于是我们的目标是得到最优动作价值函数：

$$
Q^{*}(s_t,\ a_t) := \underset{\pi}{\max} ~ Q_{\pi}(s_t,\ a_t)
$$

在[基本概念](rl/1_basic_concepts.md#动作价值函数)中我们讲到，动作价值函数是与策略 $\pi$ 有关的，它衡量的是在策略 $\pi$ 下不同动作的价值；而最优动作价值函数是在最优策略下得到动作价值函数，它**衡量的是不同动作价值的上限**。

得到最优动作价值函数后，智能体就可以利用它做出决策：

$$
a^{*} = \underset{a}{\mathop{\arg\max}} ~ Q^{*}(s,\ a)
$$

## 蒙特卡洛

## TD (Temporal Difference) Learning

首先我们并不知道动作价值函数长什么样，所以我们只能根据现有的信息给出动作价值的估计值。让估计值去靠近真实值，我们就能逐渐逼近真实的动作价值函数。

### 通俗解释

举个例子，假设我们想要知道周六是否会下雨，周一的时候天气预报预测周六下雨的概率为50\%，周二的时候预测周六下雨的概率为75\%，那么之后再遇到跟周一相似的情况时，预测周六下雨的概率就会增加。和传统监督学习的区别是，监督学习需要等到周六看到真实的天气情况才能对模型进行更新，而 TD Learning 则不需要（Sutton，1988）。

### 公式推导

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

在每一轮训练，模型都可以看作是动作价值函数的 candidate，记为 $Q^{\prime}$，则上述等式左右两边都可以通过估计得到。等式左边的估计值为 $Q^{\prime}(s_t,\ a_t)$，等式右边的估计值为 $y_t$，可以使用不同的估计方法，比如 $y_t = r_t + \gamma \cdot Q^{\prime}(s_{t+1},\ a_{t+1})$。

不难看出，等式右边的估计值 $y_t$ 相对于等式左边蕴含了更真实的信息（$r_t$），因此 $y_t$ 在 TD Learning 中被称为 **TD target** （可以类比监督学习中的标签），$Q^{\prime}(s_t,\ a_t)$ 与 TD target 之间的差值 $Q^{\prime}(s_t,\ a_t) - y_t$ 被称为 **TD error**。TD Learning 的目标就是让 TD error 趋近于0，也就是要让上述等式在套用估计值的情况下尽可能成立。

### 训练方式

#### 表格模型

表格模型的行和列分别为状态和动作，比如

<div class='centertable'>

| 状态\动作 | 往左走 | 往右走 |
| :-------: | :----: | :----: |
|   **A**   |   0    |   1    |
|   **B**   |   0    |   1    |
|   **C**   |   0    |   1    |
</div>

每一个状态动作对 $(s,\ a)$ 都对应一个动作价值，不在表格中的状态动作对则没有值，因此一般**适用于有限的离散状态和动作空间**。

在表格模型中使用 TD Learning 训练时，将 TD error 作为更新表格的依据，即

$$
Q^{\prime}(s_t,\ a_t) \leftarrow Q^{\prime}(s_t,\ a_t) - \alpha \cdot \left[Q^{\prime}(s_t,\ a_t) - y_t \right]
$$

其中 $\alpha$ 为学习率。

#### 梯度下降模型

梯度下降模型适用于连续状态和动作空间，比如常见的神经网络。

在带参数 $\mathbf{w}$ 的梯度下降模型中使用 TD Learning 时，目标函数为

$$
\mathcal{L} = \frac{1}{2} \left[Q^{\prime}(s_t,\ a_t;\ \mathbf{w}) - y_t \right]^{2}
$$

则该函数的梯度为

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{w}} = \left[Q^{\prime}(s_t,\ a_t;\ \mathbf{w}) - y_t \right] \frac{\partial Q^{\prime}}{\partial \mathbf{w}}
$$

更新方式为

$$
\mathbf{w} \leftarrow \mathbf{w} - \alpha \cdot \frac{\partial \mathcal{L}}{\partial \mathbf{w}}
$$

其中 $\alpha$ 为学习率。

### Q-Learning

从上面的[公式推导](#公式推导)我们知道，对于任意策略 $\pi$，都有

$$
Q_{\pi}(s_t,\ a_t) = \mathrm{E}[R_t + \gamma \cdot Q_{\pi}(S_{t+1},\ A_{t+1})|s_t,\ a_t]
$$

Q-learning 的目标是要得到最优动作价值函数 $Q^{*}$，因此出发点为如下等式：

$$
Q^{*}(s_t,\ a_t) = \mathrm{E}[R_t + \gamma \cdot Q^{*}(S_{t+1},\ A_{t+1})|s_t,\ a_t]
$$

Q-learning 每一次迭代会给出 $Q^{*}$ 的 candidate $Q^{\prime}$，而 TD target

$$
y_t = r_t + \gamma \cdot \underset{a}{\max} ~ Q^{\prime}(s_{t+1},\ a)
$$

### SARSA

与 Q-learning 不同，SARSA 给出的并不是

TD target

$$
y_t = r_t + \gamma \cdot Q^{\prime}(s_{t+1},\ a_{t+1})
$$

每次更新时需要用到 $(s_t,\ a_t,\ r_t,\ s_{t+1},\ a_{t+1})$ 这个五元组，因此被称为 SARSA。

### DQN (Deep Q Network)

用一个参数为 $\mathbf{w}$ 的神经网络 $Q(s,\ a;\ \mathbf{w})$ 来估计最优动作价值函数 $Q^{*}(s,\ a)$。

## 参考文献

Sutton, R. S. (1988). Learning to predict by the methods of temporal differences. Machine Learning, 3(1), 9–44. https://doi.org/10.1007/BF00115009
