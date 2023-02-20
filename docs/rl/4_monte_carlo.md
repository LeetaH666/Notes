# 四、蒙特卡洛（Monte Carlo，MC）

DP 算法需要知道环境机制，而对于复杂问题来说，环境机制通常又是未知的，因此我们需要一些 model-free 的算法，蒙特卡洛算法就是其中之一。MC 不需要知道环境的机制，只需要智能体不断地与环境交互来产生样本，利用产生的样本来得到某些估计。

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

**在实践中，每次访问 MC 更常被用到**，因为它不需要每次判断状态是否被访问过，速度更快，且更容易扩展。

### 增量更新与 Constant-α MC

在[首次访问 MC](#首次访问-mc（first-visit-mc）)的算法中，我们每次都对列表中的所有回报进行重新平均，但其实我们可以用增量更新的办法来替代这一操作。

假设我们有一个回报序列 $G_1,\ G_2,\ \cdots,\ G_{n-1}$，则均值估计为

$$
V_n = \frac{\sum\limits_{k=1}^{n-1} G_k}{n - 1},\quad n \geqslant 2
$$

> [!TIP|label:提示]
> 我们要随机初始化一个 $V_1$，因此 $n$ 从 $2$ 开始。

当增加一个回报 $G_n$ 后，我们可以得到更新后的估计 $V_{n+1}$，更新后与更新前的差为

$$
\begin{aligned}
 V_{n+1} - V_n &= \frac{\sum\limits_{k=1}^{n} G_k}{n} - V_n \\
 &= \frac{\sum\limits_{k=1}^{n-1} G_k + G_n - n V_n}{n} \\
 &= \frac{(n-1) V_n + G_n - n V_n}{n} \\
 &= \frac{G_n - V_n}{n} \\
\end{aligned}
$$

即想要把 $V_n$ 更新到 $V_{n+1}$，只需要让

$$
V_{n+1} = V_n + \frac{1}{n} (G_n - V_n)
$$

不难发现，循环的次数越多，更新的步长会越小。对于平稳的环境，这样做是没问题的，但当环境不是平稳的，越来越小的步长并不会得到很好的结果，使用固定的步长才是更好的选择，于是我们有 constant-α MC：

$$
V_{n+1} = V_n + \alpha (G_n - V_n)
$$

其中步长 $\alpha \in (0,\ 1]$ 是一个固定的常数。

> [!TIP|label:提示]
> 使用固定步长意味着我们可以从最近的 episode 中得到更多的更新，比如在股票市场，我们人为地按时间先后分出若干个 episode（时间窗口），离当前越近的 episode 理应更为重要。

## 估计动作价值

如果我们知道环境机制，那么用状态价值就足以得到一个策略；但**当我们不知道环境机制的时候，只知道状态价值并不能指导我们选择动作，因此估计动作价值更为有效**。

估计动作价值同样可以用和[估计状态价值](#估计状态价值)类似的方法，不同的是，我们需要对状态-动作对 $(s,\ a)$ 进行访问，而不是只对状态 $s$ 进行访问。但这就有一个问题，对于一个确定性策略，每个状态下只会选择固定的一个动作，那么很多状态-动作对其实是访问不到的。这个问题的解决办法就是保持探索，即让策略选择每个动作的概率非零。

## 蒙特卡洛控制（Monte Carlo Control）

回顾上一章中讲到的 [GPI](rl/3_dynamic_programming.md#广义策略迭代（general-policy-iteration，gpi）)，我们可以用蒙特卡洛方法来进行策略评估，而策略提升的过程可以通过

$$
\pi^{\prime}(s) = \underset{a \in \mathcal{A}(s)}{\mathop{\arg\max}} ~ Q_{\pi}(s,\ a)
$$

来实现。这个过程叫做**蒙特卡洛控制**。

> [!NOTE|label:注意]
> 相比普通的 DP 算法，在蒙特卡洛控制中我们并不需要用到环境机制。

为了保证每个状态-动作对都能被访问，我们需要在这个 GPI 中使用一些保持探索的方法。

### 蒙特卡洛 ES (Monte Carlo Exploring Starts)

保持探索的其中一种方法叫 **ES （Exploring Starts）**，即在每个 episode 开始的时候选择一个初始状态-动作对，使得之后的所有状态-动作对都能够以非零概率被访问。

> [!NOTE|label:注意]
> Exploring starts 一般作为一种理论假设，实际操作很难实现。

如果我们在首次访问 MC 的基础上加上 ES 假设来保证探索，就得到了蒙特卡洛 ES，具体过程如下：

- 参数：循环次数 $n$

1. 随机初始化策略 $\pi$；
2. $\forall s \in \mathcal{S},\ a \in \mathcal{A}(s)$：随机初始化 $Q(s,\ a) \in \mathbb{R}$，初始化空列表 $\text{returns}(s,\ a)$；
3. 循环 $n$ 次：
    1. 选择初始状态 $s_1 \in \mathcal{S}$ 和初始动作 $a_1 \in \mathcal{A}(s_1)$，使得所有状态-动作对的出现概率非零；
    2. 在 $(s_1,\ a_1)$ 和策略 $\pi$ 下生成一个 episode：$s_1,\ a_1,\ r_1,\ s_2,\ \cdots,\ a_{T},\ r_{T}$；
    3. $G \leftarrow 0$；
    4. 对 $t = T-1,\ T-2,\ \cdots 1$ 循环：
        1. $G \leftarrow \gamma G + r_{t+1}$；
        2. 除非 $(s_t,\ a_t)$ 在 $(s_1,\ a_1),\ (s_2,\ a_2),\ \cdots,\ (s_{t-1},\ a_{t-1})$ 中出现过，否则：
            1. 将 $G$ 放进 $\text{returns}(s_t,\ a_t)$；
            2. $Q(s_t,\ a_t) \leftarrow \text{average}(\text{returns}(s_t,\ a_t))$；
            3. $\pi(s_t) \leftarrow \underset{a \in \mathcal{A}(s_t)}{\mathop{\arg\max}} ~ Q(s_t,\ a)$。

### ε-贪婪策略（ε-Greedy Policies）

还有一种方法是让初始策略 $\pi$ 在每个状态下选择任一动作概率都非零，然后随着策略提升渐渐地向确定性（贪婪）策略靠拢。

想要让 $\pi(a|s)$ 都非零，那么可以让它大于等于某个比较小的数。设定一个 $\varepsilon > 0$，$\pi(a|s) \geqslant \frac{\varepsilon}{\left\vert \mathcal{A}(s) \right\vert}$ 被称为**ε-软策略（ε-soft policies）**。当策略逐渐变得贪婪，只有一个动作会被大概率选择，其他动作只有 $\frac{\varepsilon}{\left\vert \mathcal{A}(s) \right\vert}$ 的概率被选择时，这个策略被称作**ε-贪婪策略**。

于是我们可以在首次访问 MC 的基础上使用ε-贪婪策略：

- 参数：$\epsilon > 0$，循环次数 $n$

1. 随机初始化ε-软策略 $\pi$；
2. $\forall s \in \mathcal{S},\ a \in \mathcal{A}(s)$：随机初始化 $Q(s,\ a) \in \mathbb{R}$，初始化空列表 $\text{returns}(s,\ a)$；
3. 循环 $n$ 次：
    1. 在策略 $\pi$ 下生成一个 episode：$s_1,\ a_1,\ r_1,\ s_2,\ \cdots,\ a_{T},\ r_{T}$；
    2. $G \leftarrow 0$；
    3. 对 $t = T-1,\ T-2,\ \cdots 1$ 循环：
        1. $G \leftarrow \gamma G + r_{t+1}$；
        2. 除非 $(s_t,\ a_t)$ 在 $(s_1,\ a_1),\ (s_2,\ a_2),\ \cdots,\ (s_{t-1},\ a_{t-1})$ 中出现过，否则：
            1. 将 $G$ 放进 $\text{returns}(s_t,\ a_t)$；
            2. $Q(s_t,\ a_t) \leftarrow \text{average}(\text{returns}(s_t,\ a_t))$；
            3. $a^{*} \leftarrow \underset{a \in \mathcal{A}(s_t)}{\mathop{\arg\max}} ~ Q(s_t,\ a)$；
            4. $\forall a \in \mathcal{A}(s_t)$：$\pi(a|s_t) \leftarrow \begin{cases}
                1 - \varepsilon + \frac{\varepsilon}{\left\vert \mathcal{A}(s_t) \right\vert},\ a = a^{*} \\
                \frac{\varepsilon}{\left\vert \mathcal{A}(s_t) \right\vert},\ a \neq a^{*} \\
            \end{cases}$。

回顾之前的[策略提升定理](rl/3_dynamic_programming.md#策略提升)，我们现在采用ε-贪婪策略来提升ε-软策略同样满足这个定理的条件：

$$
\begin{aligned}
 Q_{\pi}\left(s,\ \pi^{\prime}(s) \right) &= \sum\limits_{a \in \mathcal{A}(s)} \pi^{\prime}(a|s) Q_{\pi}(s,\ a) \\
 &= \frac{\varepsilon}{\left\vert \mathcal{A}(s) \right\vert} \sum\limits_{a \in \mathcal{A}(s)} Q_{\pi}(s,\ a) + (1 - \varepsilon) \underset{a \in \mathcal{A}(s)}{\max} ~ Q_{\pi}(s,\ a) \\
 &\geqslant \frac{\varepsilon}{\left\vert \mathcal{A}(s) \right\vert} \sum\limits_{a \in \mathcal{A}(s)} Q_{\pi}(s,\ a) + (1 - \varepsilon) \sum\limits_{a \in \mathcal{A}(s)} \frac{\pi(a|s) - \frac{\varepsilon}{\left\vert \mathcal{A}(s) \right\vert}}{1 - \varepsilon} Q_{\pi}(s,\ a) \\
 &= \frac{\varepsilon}{\left\vert \mathcal{A}(s) \right\vert} \sum\limits_{a \in \mathcal{A}(s)} Q_{\pi}(s,\ a) - \frac{\varepsilon}{\left\vert \mathcal{A}(s) \right\vert} \sum\limits_{a \in \mathcal{A}(s)} Q_{\pi}(s,\ a) + \sum\limits_{a \in \mathcal{A}(s)} \pi(a|s) Q_{\pi}(s,\ a) \\
 &= V_{\pi}(s)
\end{aligned}
$$

因此新策略 $\pi^{\prime}$ 不差于旧策略 $\pi$。

### 重要性采样（Importance Sampling）

类似ε-贪婪策略的方法都面临着一个两难困境：**想要学到最优动作价值 $Q^{*}$，但又需要通过非最优的策略来保持探索**。于是人们想到用两个不同的策略来分别完成样本生成和策略迭代的任务，也就是使用 off-policy 算法来解决这一问题。

用来生成样本的策略被称为**行为策略（behavior policy）**，用来进行策略迭代的策略被称为**目标策略（target policy）**。假设我们有目标策略 $\pi$ 和行为策略 $b$，要想通过 $b$ 产生的 episode 来更新 $\pi$，我们需要假设 $\pi$ 有可能选择的动作 $b$ 也要有可能选到，即 $\pi(a|s) > 0 \implies b(a|s) > 0$，这个假设被称为**覆盖假设（assumption of coverage）**。

策略实际上是一个概率分布，想要从一个策略生成的样本中得到另一个策略的值估计，可以用重要性采样的技术。给定一个起始状态 $s_t$，接下来的状态-动作轨迹在策略 $\pi$ 下出现的概率为

$$
\begin{aligned}
 p_{\pi}(\tau_{t+1:T}|s_t) &:= \mathrm{P}(a_t,\ s_{t+1}, a_{t+1},\ \cdots,\ s_{T}|s_t,\ a_{t:T-1} \sim \pi) \\
 &= \pi(a_t|s_t) p(s_{t+1}|s_t,\ a_t) \pi(a_{t+1}|s_{t+1})\cdots p(s_{T}|s_{T-1},\ a_{T-1}) \\
 &= \prod_{k=t}^{T-1} \pi(a_k|s_k) p(s_{k+1}|s_k,\ a_k)
\end{aligned}
$$

在策略 $b$ 下出现的概率为

$$
p_b(\tau_{t+1:T}|s_t) = \prod_{k=t}^{T-1} b(a_k|s_k) p(s_{k+1}|s_k,\ a_k)
$$

则我们想要评估的策略 $\pi$ 的状态价值为

$$
\begin{aligned}
 V_{\pi}(s_t) &= \mathrm{E}_{\pi}(G_t|S_t = s_t) \\
 &= \int G_t p_{\pi}(\tau_{t:T-1}|s_t) ~ \mathrm{d}\tau_{t:T-1} \\
 &= \int G_t \frac{p_{\pi}(\tau_{t:T-1}|s_t)}{p_b(\tau_{t:T-1}|s_t)} p_b(\tau_{t:T-1}|s_t) ~ \mathrm{d}\tau_{t:T-1} \\
 &= \mathrm{E}_b\left[G_t \frac{p_{\pi}(\tau_{t:T-1}|s_t)}{p_b(\tau_{t:T-1}|s_t)} \bigg|S_t = s_t \right]  \\
\end{aligned}
$$

其中 $\frac{p_{\pi}(\tau_{t:T-1}|s_t)}{p_b(\tau_{t:T-1}|s_t)}$ 被称为<strong>重要性采样比（importance-sampling ratio）</strong>，记为 $\rho_{t:T-1}$，简化之后可以写成

$$
\rho_{t:T-1} := \frac{p_{\pi}(\tau_{t:T-1}|s_t)}{p_b(\tau_{t:T-1}|s_t)} = \frac{\prod_{k=t}^{T-1} \pi(a_k|s_k) p(s_{k+1}|s_k,\ a_k)}{\prod_{k=t}^{T-1} b(a_k|s_k) p(s_{k+1}|s_k,\ a_k)} = \prod_{k=t}^{T-1} \frac{\pi(a_k|s_k)}{b(a_k|s_k)}
$$

因此重要性采样比与环境机制无关。

方便起见，我们对不同 episode 的时间 $t$ 进行连续计数，即假如一个 episode 在 $t = 100$ 结束，则下一个 episode 从 $t = 101$ 开始计数。这样处理后我们就可以用 $\mathcal{J}(s)$ 来表示所有 $s$ 被（首次）访问时对应的时间 $t$。于是我们可以这样估计 $V_{\pi}(s)$：

$$
V_{\pi}(s) \approx \frac{\sum\limits_{t \in \mathcal{J}(s)} \rho_{t:T(t) - 1} G_t}{\left\vert \mathcal{J}(s) \right\vert}
$$

其中 $T(t)$ 代表在 $t$ 时刻后第一次遇到的终止时刻。这个估计方法被称为**普通重要性采样（ordinary importance sampling）**。

#### 加权重要性采样（Weighted Importance Sampling）

对于首次访问 MC 来说，**使用普通重要性采样得到的估计依然是无偏的，然而方差会随着目标策略 $\pi$ 与行为策略 $b$ 之间的差距变大而变大**：

$$
\mathrm{Var}_{\pi}(G_t | S_t = s_t) = \mathrm{E}_{\pi}\left(G_t^{2} | S_t = s_t \right) - \mathrm{E}_{\pi}^{2}(G_t | S_t = s_t)
$$

$$
\begin{aligned}
 \mathrm{Var}_{b}\left(G_t \rho_{t:T-1} |S_t = s_t \right) &= \mathrm{E}_{b}\left(G_t^{2} \rho_{t:T-1}^{2} | S_t = s_t \right) - \mathrm{E}_{b}^{2}\left(G_t \rho_{t:T-1} | S_t = s_t \right) \\
 &= \int G_t^{2} \frac{p_{\pi}^{2}(\tau_{t:T-1}|s_t)}{p_b^{2}(\tau_{t:T-1}|s_t)} p_b(\tau_{t:T-1}|s_t) ~ \mathrm{d}\tau_{t:T-1} - \mathrm{E}_{\pi}^{2}(G_t | S_t = s_t) \\
 &= \int G_t^{2} \frac{p_{\pi}(\tau_{t:T-1}|s_t)}{p_b(\tau_{t:T-1}|s_t)} p_{\pi}(\tau_{t:T-1}|s_t) ~ \mathrm{d}\tau_{t:T-1} - \mathrm{E}_{\pi}^{2}(G_t | S_t = s_t) \\
 &=  \mathrm{E}_{\pi}\left(G_t^{2} \rho_{t:T-1} | S_t = s_t \right) - \mathrm{E}_{\pi}^{2}(G_t | S_t = s_t) \\
\end{aligned}
$$

可以看到，比起目标策略的真实方差，使用普通重要性采样得到的估计方差多了一项重要性采样比，这就导致当两个策略之间差距很大时，估计方差会变得非常大，甚至趋于无穷。人们想要从普通重要性采样中消除重要性采样比对方差的影响，于是有了**加权重要性采样**：

$$
V_{\pi}(s) \approx \frac{\sum\limits_{t \in \mathcal{J}(s)} \rho_{t:T(t) - 1} G_t}{\sum\limits_{t \in \mathcal{J}(s)} \rho_{t:T(t) - 1}}
$$

**尽管加权重要性采样的估计方差小了，但估计变得有偏**。假如我们使用首次访问 MC 来估计，且假设只有一个样本，那么得到的估计值为 $\frac{\rho_{t:T(t) - 1} G_t}{\rho_{t:T(t) - 1}} = G_t$，这个估计值的期望为 $V_b(s)$ 而非 $V_{\pi}(s)$，即估计是有偏的。

利用[增量更新](#增量更新与-constant-α-mc)的概念，我们可以得到加权重要性采样的增量估计：

$$
V_{n+1} = V_n + \frac{\rho_n}{C_n} (G_n - V_n)
$$

其中 $C_{n} := \sum\limits_{k=1}^{n} \rho_k$ 为累积权重。

估计动作价值和估计状态价值的道理是相同的，于是在每次访问 MC 的基础上用加权重要性采样的策略评估算法如下：

- 输入：任意目标策略 $\pi$
- 参数：循环次数 $n$

1. $\forall s \in \mathcal{S},\ a \in \mathcal{A}(s)$：随机初始化 $Q(s,\ a) \in \mathbb{R}$，$C(s,\ a) \leftarrow 0$；
2. 循环 $n$ 次：
    1. 选取任意能被 $\pi$ 覆盖的行为策略 $b$；
    2. 在策略 $b$ 下生成一个 episode：$s_1,\ a_1,\ r_1,\ s_2,\ \cdots,\ a_{T},\ r_{T}$；
    3. $G \leftarrow 0$，$\rho \leftarrow 1$；
    4. 如果 $\rho \neq 0$：
        1. 对 $t = T-1,\ T-2,\ \cdots,\ 1$ 循环：
            1. $G \leftarrow \gamma G + r_{t+1}$；
            2. $C(s_t,\ a_t) \leftarrow C(s_t,\ a_t) + \rho$；
            3. $Q(s_t,\ a_t) \leftarrow Q(s_t,\ a_t) + \frac{\rho}{C(s_t,\ a_t)}[G - Q(s_t,\ a_t)]$；
            4. $\rho \leftarrow \rho \cdot \frac{\pi(a_t|s_t)}{b(a_t|s_t)}$。

#### Off-Policy 蒙特卡洛控制

通过使用两个不同的策略来分别完成样本生成和策略迭代的任务，重要性采样解决了ε-贪婪策略的两难困境。这时候我们可以用任意的软策略来作为行为策略 $b$，即保持探索，而让目标策略 $\pi$ 变成一个贪婪策略，即希望它收敛到最优策略。完整的 off-policy 蒙特卡洛控制算法如下：

- 参数：循环次数 $n$

1. $\forall s \in \mathcal{S},\ a \in \mathcal{A}(s)$：随机初始化 $Q(s,\ a) \in \mathbb{R}$，$C(s,\ a) \leftarrow 0$，$\pi(s) \leftarrow \underset{a \in \mathcal{A}(s)}{\mathop{\arg\max}} ~ Q(s,\ a)$；
2. 循环 $n$ 次：
    1. 选取任意软策略 $b$；
    2. 在策略 $b$ 下生成一个 episode：$s_1,\ a_1,\ r_1,\ s_2,\ \cdots,\ a_{T},\ r_{T}$；
    3. $G \leftarrow 0$，$\rho \leftarrow 1$；
    1. 对 $t = T-1,\ T-2,\ \cdots,\ 1$ 循环：
        1. $G \leftarrow \gamma G + r_{t+1}$；
        2. $C(s_t,\ a_t) \leftarrow C(s_t,\ a_t) + \rho$；
        3. $Q(s_t,\ a_t) \leftarrow Q(s_t,\ a_t) + \frac{\rho}{C(s_t,\ a_t)}[G - Q(s_t,\ a_t)]$；
        4. $\pi(s_t) \leftarrow \underset{a \in \mathcal{A}(s_t)}{\mathop{\arg\max}} ~ Q(s_t,\ a)$；
        5. 如果 $a_t \neq \pi(s_t)$：
            1. 结束循环。
        6. $\rho \leftarrow \rho \cdot \frac{1}{b(a_t|s_t)}$。

> [!NOTE|label:注意]
> 当 $\underset{a \in \mathcal{A}(s)}{\mathop{\arg\max}} ~ Q(s,\ a)$ 的结果不止一个时，我们随机选取一个。

> [!TIP|label:提示]
> 上述算法中对重要性采样比 $\rho$ 的更新方式似乎与之前不同（原本是 $\rho \leftarrow \rho \cdot \frac{\pi(a_t|s_t)}{b(a_t|s_t)}$），但其实这是因为我们让 $\pi$ 变成一个贪婪策略，$\pi(a_t|s_t)$ 就是 $1$。

当行为策略 $b$ 比较“软”时，也就是相同状态下给出的动作 $a_t$ 随机性比较强时，算法很容易结束在 episode 中的循环，因为 $\pi(s_t)$ 是确定的。在这种情况下，学习的速率会大大降低，特别是对于那些只在 episode 前面部分（比如 $t = 1,\ 2,\ 3$）出现的状态，由于循环是从后往前的，前面的部分可能很难被循环到，就更难更新了。下一章要介绍的 temporal-difference learning 可以解决这个问题。