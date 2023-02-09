# 四、蒙特卡洛（Monte Carlo，MC）

蒙特卡洛算法不需要知道环境的机制，只需要智能体不断地与环境交互来产生样本，因此属于 model-free 算法。

## 估计状态价值

让智能体在策略 $\pi$ 下与环境交互产生若干个样本（每个样本为一个 episode），**对这些样本中相同状态下的状态价值取平均**即可得到估计。

### 首次访问 MC（First-Visit MC）

把每次遇到一个状态 $s$ 称作对 $s$ 的一次访问（visit），首次访问 MC **只记录每个样本中状态第一次被访问时所得到的状态价值**。具体算法如下：

- 输入：策略 $\pi$
- 参数：循环次数 $n$

1. $\forall s \in \mathcal{S}$：随机初始化 $V(s)$，初始化空列表 $\text{returns}(s)$；
2. 循环 $n$ 次：
    1. 在策略 $\pi$ 下生成一个 episode：$s_1,\ a_1,\ r_1,\ s_2,\ \cdots,\ a_{T},\ r_{T}$；
    2. $G \leftarrow 0$；
    3. 对 $t = T-1,\ T-2,\ \cdots,\ 1$ 循环：
        1. $G \leftarrow \gamma G + r_{t+1}$；
        2. 除非 $s_t$ 在 $s_1,\ s_2,\ \cdots,\ s_{t-1}$ 中出现过，否则：
            1. 将 $G$ 放进 $\text{returns}(s_t)$；
            2. $V(s_t) \leftarrow \text{average}(\text{returns}(s_t))$。

考虑如下问题：

<div align='center'>

![](image/2023-02-09-10-00-45.png)
</div align='center'>

我们要估计从状态 $S$ 开始到终止（$T$）前的预期步数，于是假设每一步的奖励都为 $1$。

使用首次访问 MC 时，我们只会记录 $S$ 第一次被访问时的状态价值，即 $4$，这与最大似然模型给出的估计是一样的。实际上，**对于单次试验，首次访问 MC 给出的估计是无偏的**。

### 每次访问 MC（Every-Visit MC）

与首次访问 MC 不同，每次访问 MC **将样本中所有状态价值都记录下来**。

依旧考虑上面的问题，使用每次访问 MC 时，我们会记录所有状态价值，对于状态 $S$ 来说，我们记录了 $4,\ 3,\ 2,\ 1$ 四个状态价值，平均下来是 $2.5$，这与最大似然模型给出的估计并不相同。实际上，**对于有限次试验，每次访问 MC 给出的估计是有偏的，只有当试验次数趋于无穷，估计才是无偏的**。

## 估计动作价值

如果我们知道环境机制，那么用状态价值就足以得到一个策略；但**当我们不知道环境机制的时候，只知道状态价值并不能指导我们选择动作，因此估计动作价值更为有效**。

估计动作价值同样可以用和[估计状态价值](#估计状态价值)类似的方法，不同的是，我们需要对状态&ndash;动作对 $(s,\ a)$ 进行访问，而不是只对状态 $s$ 进行访问。但这就有一个问题，对于一个确定性策略，每个状态下只会选择固定的一个动作，那么很多状态&ndash;动作对其实是访问不到的。

这个问题的解决办法就是持续探索，即让策略选择每个动作的概率非零。其中一种方法叫 **exploring starts**，即在每个 episode 开始的时候选择一个初始状态&ndash;动作对使得之后的所有状态&ndash;动作对都能够以非零概率被访问。

> [!NOTE|label:注意]
> Exploring starts 一般作为一种理论假设，实际操作很难实现。

## 蒙特卡洛控制（Monte Carlo Control）

回顾上一章中讲到的 [GPI](rl/3_dynamic_programming.md#广义策略迭代（general-policy-iteration，gpi）)，我们可以用蒙特卡洛方法来进行策略评估（比如首次访问 MC），而策略提升的过程可以通过

$$
\pi^{\prime}(s) = \underset{a \in \mathcal{A}}{\mathop{\arg\max}} ~ Q_{\pi}(s,\ a)
$$

来实现。在这个过程并不需要用到环境机制。

如果我们加上 ES（Exploring Starts）假设，整套算法被称为 **Monte Carlo ES**，具体过程如下：

1. 随机初始化策略 $\pi$；
2. $\forall s \in \mathcal{S},\ a \in \mathcal{A}$：随机初始化 $Q(s,\ a) \in \mathbb{R}$，初始化空列表 $\text{returns}(s,\ a)$；
3. 循环：
    1. 选择初始状态 $s_1 \in \mathcal{S}$ 和初始动作 $a_1 \in \mathcal{A}$，使得所有状态&ndash;动作对的出现概率非零；
    2. 在 $(s_1,\ a_1)$ 和策略 $\pi$ 下生成一个 episode：$s_1,\ a_1,\ r_1,\ s_2,\ \cdots,\ a_{T},\ r_{T}$；
    3. $G \leftarrow 0$；
    4. 对 $t = T-1,\ T-2,\ \cdots 1$ 循环：
        1. $G \leftarrow \gamma G + r_{t+1}$；
        2. 除非 $(s_t,\ a_t)$ 在 $(s_1,\ a_1),\ (s_2,\ a_2),\ \cdots,\ (s_{t-1},\ a_{t-1})$ 中出现过，否则：
            1. 将 $G$ 放进 $\text{returns}(s_t,\ a_t)$；
            2. $Q(s_t,\ a_t) \leftarrow \text{average}(\text{returns}(s_t,\ a_t))$；
            3. $\pi(s_t) \leftarrow \underset{a \in \mathcal{A}}{\mathop{\arg\max}} ~ Q(s_t,\ a)$。
