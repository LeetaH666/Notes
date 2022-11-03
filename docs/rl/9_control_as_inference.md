# 用推断的眼光看待控制问题

### 基本设定

状态 $s \in \mathcal{S}$，动作 $a \in \mathcal{A}$。经过时间 $1,\ 2,\ \cdots,\ T$，我们得到轨迹 $\tau = (s_1,\ a_1,\ s_2,\ \cdots,\ a_T)$ 的概率为

$$
p(\tau) = p(s_1) p(a_1|s_1) p(s_2) \cdots p(a_T|s_T) = p(s_1) \prod_{t=1}^{T} p(a_t|s_t) p(s_{t+1}|s_t,\ a_t) 
$$

其中 $s_{T+1}$ 是终止状态且 $p(s_{T+1}|s_T,\ a_T) = 1$。

### 最优变量的引入

由于模型中并不涉及奖励函数，仅凭这个模型并不能够解决控制问题。因此我们需要引入一个最优变量 $\mathcal{O}_t$（$t = 1,\ 2,\ \cdots,\ T$），$\mathcal{O}_t = 1$ 当且仅当在时间 $t$ 时决策最优，否则 $\mathcal{O}_t = 0$，定义

$$
p(\mathcal{O}_t = 1|s_t,\ a_t) = e^{r(s_t,\ a_t)}
$$

则需要奖励函数 $r(s_t,\ a_t) \leqslant 0$（几乎所有问题都可以转化成这一设定，只需要将奖励函数减去最大奖励，除非奖励可以是无穷大）。

> [!NOTE|label:注意]
> 以下所有 $\mathcal{O}_t = 1$ 都将省略为 $\mathcal{O}_t$。

那么得到最优轨迹的概率为

$$
p(\tau|\mathcal{O}_{1:T}) = \frac{p(\tau,\ \mathcal{O}_{1:T})}{p(\mathcal{O}_{1:T})} \propto p(\tau,\ \mathcal{O}_{1:T}) = p(\tau) \prod_{t=1}^{T} e^{r(s_t,\ a_t)}
$$

### 后向消息（backward message）与最优策略

#### 后向消息

解决控制问题通常采取动态规划，即从后往前递归，借助这个思想，我们定义后向消息

$$
\begin{aligned}
 \beta_t(s_t,\ a_t) := p(\mathcal{O}_{t:T}|s_t,\ a_t) &= \int_{\mathcal{S}} p(\mathcal{O}_{t:T},\ s_{t+1}|s_t,\ a_t) ~\mathrm{d}s_{t+1} \\
 &= \int_{\mathcal{S}} p(\mathcal{O}_{t+1:T},\ s_{t+1}|s_t,\ a_t) p(\mathcal{O}_t|s_t,\ a_t) ~ \mathrm{d}s_{t+1} \\
 &= \int_{\mathcal{S}} p(\mathcal{O}_{t+1:T}|s_{t+1}) p(s_{t+1}|s_t,\ a_t) p(\mathcal{O}_t|s_t,\ a_t) ~ \mathrm{d}s_{t+1} \\
 &= p(\mathcal{O}_t|s_t,\ a_t) \int_{\mathcal{S}} \beta_{t+1}(s_{t+1}) p(s_{t+1}|s_t,\ a_t) ~ \mathrm{d}s_{t+1} \\
 &= e^{r(s_t,\ a_t)} \mathrm{E}_{p(s_{t+1}|s_t,\ a_t)}(\beta_{t+1}(s_{t+1}))
\end{aligned}
$$

其中

$$
\begin{aligned}
 \beta_{t}(s_{t}) := p(\mathcal{O}_{t:T}|s_t) &= \int_{\mathcal{A}} p(\mathcal{O}_{t:T}|s_t,\ a_t) p(a_t|s_t) ~ \mathrm{d}a_t \\
 &= \int_{\mathcal{A}} \beta_t(s_t,\ a_t) p(a_t|s_t) ~ \mathrm{d}a_t \\
 &= \mathrm{E}_{p(a_t|s_t)}(\beta_t(s_t,\ a_t))
\end{aligned}
$$

#### Soft max与贝尔曼方程

如果我们令

$$
V_t(s_t) := \log \beta_t(s_t) \\
Q_t(s_t,\ a_t) := \log \beta_t(s_t,\ a_t)
$$

则

$$
V_t(s_t) = \log \int_{\mathcal{A}} e^{Q_t(s_t,\ a_t)} p(a_t|s_t) ~ \mathrm{d}a_t = \log \int_{\mathcal{A}} e^{Q_t(s_t,\ a_t) + \log p(a_t|s_t)} ~ \mathrm{d}a_t
$$

定义 $\widetilde{Q}_t(s_t,\ a_t) := Q_t(s_t,\ a_t) + \log p(a_t|s_t)$，我们有

$$
V_t(s_t) = \log \int_{\mathcal{A}} e^{\widetilde{Q}_t(s_t,\ a_t)} ~ \mathrm{d}a_t \to \underset{a_t}{\max} ~ \widetilde{Q}_t(s_t,\ a_t) \\
$$

> [!TIP|label:提示]
> 由于指数函数会让Q值之间拉开距离，最大的Q值占据了主导地位，即积分的数值取决于最大的Q值，当用对数函数消除掉指数函数的影响后，剩下的就是一个接近最大Q值的数。随着最大Q值的增大，V值会趋向于最大的Q值。

这种对数指数的形式称为soft max（此soft max非彼softmax）。定义 $\widetilde{r}(s_t,\ a_t) := r(s_t,\ a_t) + \log p(a_t|s_t)$，我们可以得到soft版本的贝尔曼方程：

$$
\widetilde{Q}_t(s_t,\ a_t) = \widetilde{r}(s_t,\ a_t) + \log \mathrm{E}_{p(s_{t+1}|s_t,\ a_t)}\left( e^{V_{t+1}(s_{t+1})} \right) 
$$

在没有额外先验知识的情况下，我们通常假设动作先验（action priori）$p(a_t|s_t)$ 服从均匀分布，则 $\log p(a_t|s_t) = - \log \left\vert \mathcal{A} \right\vert $ 是一个常数，可以忽略。

> [!NOTE|label:注意]
> 以下我们将默认把动作先验放入奖励函数，则以下所有 $r(s_t,\ a_t)$ 指代的是 $\widetilde{r}(s_t,\ a_t)$，$Q_t(s_t,\ a_t)$ 指代的是 $\widetilde{Q}_t(s_t,\ a_t)$。

#### 最优策略

最优策略即动作后验（action posterior）：

$$
\begin{aligned}
 \pi(a_t|s_t) := p(a_t|s_t,\ \mathcal{O}_{t:T}) &= \frac{p(a_t,\ s_t|\mathcal{O}_{t:T})}{p(s_t|\mathcal{O}_{t:T})} \\
 &= \frac{p(\mathcal{O}_{t:T}|a_t,\ s_t) p(a_t,\ s_t) / p(\mathcal{O}_{t:T})}{p(\mathcal{O}_{t:T}|s_t) p(s_t) / p(\mathcal{O}_{t:T})} \\
 &= \frac{p(\mathcal{O}_{t:T}|a_t,\ s_t)}{p(\mathcal{O}_{t:T}|s_t)} p(a_t|s_t) \\
 &\propto \frac{\beta_t(s_t,\ a_t)}{\beta_t(s_t)} \\
 &= e^{Q_t(s_t,\ a_t) - V_t(s_t)} \\
 &= e^{A_t(s_t,\ a_t)}
\end{aligned}
$$

其中 $A_t(s_t,\ a_t) := Q_t(s_t,\ a_t) - V_t(s_t,\ a_t)$ 为优势函数（advantage）。

#### 温度因子

我们可以在最优策略中加入一个温度因子 $\alpha$ 来控制策略的soft程度，即

$$
\pi(a_t|s_t) = \exp \left( \frac{1}{\alpha} A_t(s_t,\ a_t) \right) 
$$

当 $\alpha \to 0$，soft策略趋向于hard，即标准的贪婪策略。

### 前向消息（forward message）与状态后验（state posterior）

定义前向消息

$$
\begin{aligned}
 \alpha_t(s_t) := p(s_t|\mathcal{O}_{1:t-1}) &= \int_{\mathcal{A}} \int_{\mathcal{S}} p(s_t,\ s_{t-1},\ a_{t-1}|\mathcal{O}_{1:t-1}) ~ \mathrm{d}s_{t-1} ~ \mathrm{d}a_{t-1} \\
 &= \int_{\mathcal{A}} \int_{\mathcal{S}} p(s_t|s_{t-1},\ a_{t-1},\ \mathcal{O}_{1:t-1}) p(a_{t-1}|s_{t-1},\ \mathcal{O}_{1:t-1}) p(s_{t-1}|\mathcal{O}_{1:t-1}) ~ \mathrm{d}s_{t-1} ~ \mathrm{d}a_{t-1} \\
 &= \int_{\mathcal{A}} \int_{\mathcal{S}} p(s_t|s_{t-1},\ a_{t-1}) \frac{p(\mathcal{O}_{t-1}|s_{t-1},\ a_{t-1}) p(a_{t-1}|s_{t-1})}{p(\mathcal{O}_{t-1}|s_{t-1})} \frac{p(\mathcal{O}_{t-1}|s_{t-1}) p(s_{t-1}|\mathcal{O}_{1:t-2})}{p(\mathcal{O}_{t-1}|\mathcal{O}_{1:t-2})} ~ \mathrm{d}s_{t-1} ~ \mathrm{d}a_{t-1} \\
 &= \int_{\mathcal{A}} \int_{\mathcal{S}} p(s_t|s_{t-1},\ a_{t-1}) \frac{\beta_{t-1}(s_{t-1},\ a_{t-1}) \alpha_{t-1}(s_{t-1})}{\left\vert \mathcal{A} \right\vert p(\mathcal{O}_{t-1}|\mathcal{O}_{1:t-2})} ~ \mathrm{d}s_{t-1} ~ \mathrm{d}a_{t-1} \\
\end{aligned}
$$

其中 $\alpha_1(s_1) := p(s_1)$ 通常是已知的。我们可以通过从前往后的迭代计算出所有前向消息。而状态后验

$$
p(s_t|\mathcal{O}_{1:T}) = \frac{p(s_t,\ \mathcal{O}_{1:T})}{p(\mathcal{O}_{1:T})} = \frac{p(\mathcal{O}_{t:T}|s_t) p(s_t|\mathcal{O}_{1:t-1}) p(\mathcal{O}_{1:t-1})}{p(\mathcal{O}_{1:T})} \propto \beta_t(s_t) \alpha_t(s_t)
$$

### 变分推断与最大熵强化学习

#### 彩票问题

还记得我们前面得到soft版本的贝尔曼方程：

$$
\widetilde{Q}_t(s_t,\ a_t) = \widetilde{r}(s_t,\ a_t) + \log \mathrm{E}_{p(s_{t+1}|s_t,\ a_t)}\left( e^{V_{t+1}(s_{t+1})} \right) 
$$

其中第二项与经典贝尔曼方程的区别在于，经典贝尔曼方程只取V值的期望，而soft版本的贝尔曼方程取了V值的soft max，这导致对Q值的计算过于“乐观”。

考虑一个彩票，中彩票的概率为 $0.0001\%$，奖金为 $1,000,000$ 元，在每个时间点，智能体都要做出买或不买彩票的决策。在经典贝尔曼框架下，买彩票的Q值与期望收益有关，即 $1$ 元；而在soft的贝尔曼框架下，买彩票的Q值与最大收益有关，即 $1,000,000$ 元。两者相差甚远，在soft框架下，智能体会一直买彩票。这是因为用推断的眼光看控制问题时，我们的最优策略是动作后验，即给定未来是最优的情况下智能体的动作分布。当给定未来的最优情况——中奖，智能体当然会一直买彩票。

我们希望得到最优策略 $\pi(a_t|s_t) = p(a_t|s_t,\ \mathcal{O}_{1:T})$，但引入最优变量的同时默认使用了 $p(s_{t+1}|s_t,\ a_t,\ \mathcal{O}_{1:T})$ 作为转移概率，即

$$
p(\tau|\mathcal{O}_{1:T}) = p(s_1|\mathcal{O}_{1:T}) \prod_{t=1}^{T} p(a_t|s_t,\ \mathcal{O}_{1:T}) p(s_{t+1}|s_t,\ a_t,\ \mathcal{O}_{1:T}) 
$$

所以问题的本质在于状态转移概率的先验与后验不同：

$$
p(s_{t+1}|s_t,\ a_t,\ \mathcal{O}_{1:T}) \neq p(s_{t+1}|s_t,\ a_t)
$$

那么我们就希望找到另一个分布 $q(\tau)$ 来近似 $p(\tau|\mathcal{O}_{1:T})$ 且保证转移概率依旧是 $p(s_{t+1}|s_t,\ a_t)$。

#### 变分推断

> 变分推断原理和细节见[VAE](papers/auto_encoding_variational_bayes.md#变分贝叶斯（variational-bayes）)。

假设动作先验服从均匀分布，$\log p(\mathcal{O}_{1:T})$ 的变分下界为

$$
\begin{aligned}
 \mathrm{E}_{q(\tau)} \left( \log \frac{p(\tau,\ \mathcal{O}_{1:T})}{q(\tau)} \right) &= \mathrm{E}_{q(\tau)} \left( \log \frac{p(\tau) \prod_{t=1}^{T} e^{r(s_t,\ a_t)}}{q(\tau)} \right) \\
 &= \mathrm{E}_{q(\tau)} \left( \log \frac{p(s_1) \prod_{t=1}^{T} e^{r(s_t,\ a_t)} p(s_{t+1} | s_t,\ a_t)}{q(\tau)} \right) \\
\end{aligned}
$$

因为我们希望转移概率依旧是 $p(s_{t+1}|s_t,\ a_t)$，所以 $q(\tau)$ 的形式应为

$$
q(\tau) = p(s_1) \prod_{t=1}^{T} q(a_t|s_t) p(s_{t+1}|s_t,\ a_t)
$$

代入变分下界我们得到了需要最大化的目标函数

$$
\mathrm{E}_{q(\tau)} \left( \sum\limits_{t=1}^{T} r(s_t,\ a_t) - \log q(a_t|s_t) \right) = \sum\limits_{t=1}^{T} \mathrm{E}_{q(\tau)} \left( r(s_t,\ a_t)\right) - \sum\limits_{t=1}^{T} \mathrm{E}_{q(\tau)} (\log q(a_t|s_t)) 
$$

这个目标函数的第一项是标准的强化学习目标函数，即最大化期望奖励；第二项是最大化策略的信息熵，即鼓励探索。这个过程被称作最大熵强化学习。

#### 动态规划

> [!WARNING|label:警告]
> 这一小节的推导很可能有问题，结论是对的，过程不严谨，仅供参考。

在 $t=T$，也就是最后一步时，我们要优化的目标函数为

$$
\mathrm{E}_{q(s_T)} [\mathrm{E}_{q(a_T|s_T)}(r(s_T,\ a_T) - \log q(a_T|s_T))] = \int_{\mathcal{S}} q(s_T) \int_{\mathcal{A}} q(a_T|s_T) \left( r(s_T,\ a_T) - \log q(a_T|s_T) \right) ~ \mathrm{d}a_T ~ \mathrm{d}s_T
$$

令关于 $q(a_T|s_T)$ 的变分等于 $0$，有

$$
\begin{aligned}
 r(s_T,\ a_T) - \log q(a_T|s_T) - 1 &= 0 \\
 q(a_T|s_T) &= e^{r(s_T,\ a_T) - 1} \\
\end{aligned}
$$

即 $q(a_T|s_T) \propto e^{r(s_T,\ a_T)}$，则

$$
q(a_T|s_T) = \frac{e^{r(s_T,\ a_T)}}{\int_{\mathcal{A}} e^{r(s_T,\ a_T)} ~ \mathrm{d}a_T}
$$

在最后一步，$Q_T(s_T,\ a_T) = r(s_T,\ a_T)$，所以上式实际上就是

$$
q(a_T|s_T) = \frac{e^{Q_T(s_T,\ a_T)}}{e^{V_T(s_T,\ a_T)}} = e^{A_T(s_T,\ a_T)}
$$

而我们最优化的目标函数实际上就是

$$
\mathrm{E}_{q(s_T)} [\mathrm{E}_{q(a_T|s_T)}(r(s_T,\ a_T) - \log q(a_T|s_T))] = \mathrm{E}_{q(s_T)} [\mathrm{E}_{q(a_T|s_T)}(V_T(s_T))]
$$

而对于所有 $t < T$，目标函数为

$$
\mathrm{E}_{q(s_t)}\{\mathrm{E}_{q(a_t|s_t)}[r(s_t,\ a_t) + \mathrm{E}_{p(s_{t+1}|s_t,\ a_t)}(V(s_{t+1})) - \log q(a_t|s_t)]\}
$$

定义 $Q_t(s_t,\ a_t) = r(s_t,\ a_t) + \mathrm{E}_{p(s_{t+1}|s_t,\ a_t)}(V(s_{t+1}))$，则目标函数可以被写成

$$
\mathrm{E}_{q(s_t)}[\mathrm{E}_{q(a_t|s_t)}(Q_t(s_t,\ a_t) - \log q(a_t|s_t))]
$$

这意味着 $q(a_t|s_t) \propto e^{Q_t(s_t,\ a_t)}$，且贝尔曼方程不再是“乐观”的了，变成了经典的贝尔曼方程，这就解决了上面的[彩票问题](#彩票问题)。

### 参考文献

[UC Berkeley CS285 2020 Fall](https://www.bilibili.com/video/BV12341167kL?p=83)

Levine, S. (2018). Reinforcement Learning and Control as Probabilistic Inference: Tutorial and Review (arXiv:1805.00909). arXiv. http://arxiv.org/abs/1805.00909
