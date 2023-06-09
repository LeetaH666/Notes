# DDG-DA: Data Distribution Generation for Predictable Concept Drift Adaptation

## 论文信息

### 作者

Wendi Li, Xiao Yang, Weiqing Liu, Yingce Xia, Jiang Bian

均来自微软研究院。

### 收录情况

AAAI2022

## 解决什么问题

概念漂移：输入与预测目标之间的关系在变化，恒定的模型无法刻画。

## 设定

- 数据流：$\bm{X} = \left\{\bm{x}^{(1)},\ \bm{x}^{(2)},\ \cdots,\ \bm{x}^{(T)} \right\} $
    - $\bm{x}^{(t)} = \left\{x_1,\ x_2,\ \cdots,\ x_m \right\} \in \mathbb{R}^{m}$ 是 $t$ 时刻到来的数据
- 目标变量：$\bm{y} = \left\{y^{(1)},\ y^{(2)},\ \cdots,\ y^{(T)} \right\} $
- 时变的数据分布：$\left(\bm{x}^{(t)},\ y^{(t)} \right) \sim p_t(\bm{x},\ y)$
- 目标：通过训练集 $D_{\text{train}}^{(t)} = \left\{\left(\bm{x}^{(i)},\ y^{(i)} \right) \right\}_{i=1}^{t} $ 建立模型，在测试集 $D_{\text{test}}^{(t)} = \left\{\left(\bm{x}^{(i)},\ y^{(i)} \right) \right\}_{i=t+1}^{t+\tau}$ 上做预测，最小化预测误差。

## 方法

使用元学习的方法，把训练数据切割成若干个子训练集和子测试集，每个子训练集对应一个子测试集，组合成一个预测任务。本文通过训练让模型能够从子训练集上采样出符合子测试集分布的数据（实际上是学习这些任务的权重，做 reweight），从而在真正预测时（下一个子任务）能够做到从当前训练集采样出未知的测试集数据。

- 训练集每个时刻 $t$ 都有一个预测任务 $\text{task}^{(t)}$，所有训练集的任务放在一个集合 $\text{Task}_{\text{train}} = \left\{\text{task}^{(1)},\ \text{task}^{(2)},\ \cdots,\ \text{task}^{(\tau)} \right\}$，测试集任务 $\text{Task}_{\text{test}}$ 同理。
- 在训练集上采样的概率为 $q_{\text{train}}^{(t)} = \mathcal{M}_{\bm{\Theta}}\left(g (D_{\text{train}}^{(t)}) \right)$，其中 $g$ 是一个特征提取器，用来提取训练集分布信息；$\mathcal{M}_{\bm{\Theta}}$ 是本文的元学习器架构 &mdash; DDG-DA，$\Theta$ 为模型参数。

<div align='center'>

![](image/2023-06-06-17-08-18.png)
</div align='center'>

### 目标函数

对于每个子任务 $\text{task}^{(t)}$，最小化采样分布和测试集分布之间的距离，用 KL 散度度量：

$$
\begin{equation}
    L_{\bm{\Theta}}\left(\text{task}^{(t)} \right) = D_{\text{KL}} \left(p_{\text{test}}^{(t)}(\bm{x},\ y)\ \Vert\ p_{\text{resam}}^{(t)}(\bm{x},\ y;\ \bm{\Theta}) \right)
\end{equation}
$$

其中 $\text{resam}$ 代表重采样（resample）。

假设 $p_{\text{test}}^{(t)}(\bm{x})$ 与 $p_{\text{resam}}^{(t)}(\bm{x};\ \bm{\Theta})$ 之间的差距忽略不计，$\eqref{1}$ 式可以写成

$$
\begin{equation}
    L_{\bm{\Theta}}\left(\text{task}^{(t)} \right) = \E_{\bm{x}\sim p_{\text{test}}^{(t)}(\bm{x})} \left[D_{\text{KL}} \left(p_{\text{test}}^{(t)}(y\mid \bm{x})\ \Vert\ p_{\text{resam}}^{(t)}(y\mid \bm{x};\ \bm{\Theta}) \right) \right] \\
\end{equation}
$$

然而 $p_{\text{test}}^{(t)}(y\mid \bm{x})$ 和 $p_{\text{resam}}^{(t)}(y\mid \bm{x};\ \bm{\Theta})$ 都不知道，作者就做了简化，假设它们是方差相同的正态分布：

$$
p_{\text{test}}^{(t)}(y\mid \bm{x}) = N\left(y_{\text{test}}^{(t)}(\bm{x}),\ \sigma \right)
$$

$$
p_{\text{resam}}^{(t)}(y\mid \bm{x}) = N\left(y_{\text{resam}}^{(t)}(\bm{x}),\ \sigma \right)
$$

那么最小化这两个分布的 KL 散度就转换为最小化它们均值之间的 MSE：

$$
\begin{equation}
    L_{\bm{\Theta}}\left(\text{task}^{(t)} \right) = \frac{1}{2} \sum\limits_{(\bm{x},\ y)\in D_{\text{test}}^{(t)}} \left\| y_{\text{resam}}^{(t)}(\bm{x};\ \bm{\Theta}) - y \right\|^{2}
\end{equation}
$$

因此最优的参数 $\bm{\Theta}^{*}$ 为

$$
\begin{equation}
    \bm{\Theta}^{*} = \underset{\bm{\Theta}}{\mathop{\arg\min}} ~ \sum\limits_{\text{task}^{(t)}\in \text{Task}_{\text{train}}} L_{\bm{\Theta}}\left(\text{task}^{(t)} \right)
\end{equation}
$$

注意到，式 $\eqref{3}$ 中的数据来自于子测试集 $D_{\text{test}}^{(t)}$，也就是 $y_{\text{resam}}^{(t)}(\bm{x};\ \bm{\Theta})$ 采样的是子测试集的 $y$，对于子任务来说，它是不可观测的，因此我们需要在子训练集的采样中对子测试集做逼近，也就是说，在每个子任务中，要能够通过 $D_{\text{resam}}^{(t)}(\bm{\Theta})$ 中的 $\bm{x}$ 得到 $y_{\text{proxy}}$ 作为子测试集中 $y_{\text{resam}}$ 的估计：

$$
y_{\text{resam}}^{(t)}(\bm{x};\ \bm{\Theta}) \approx y_{\text{proxy}}^{(t)}\left(\bm{x};\ \bm{\phi}^{(t)} \right)
$$

则式 $\eqref{3}$ 这个损失函数对应的优化问题转变成双重优化：

$$
\begin{align}
    \underset{\bm{\Theta}}{\mathop{\arg\min}}& \quad \sum\limits_{\text{task}^{(t)}\in \text{Task}_{\text{train}}} \left(\sum\limits_{(\bm{x},\ y)\in D_{\text{test}}^{(t)}} \left\| y_{\text{proxy}}\left(x;\ \bm{\phi}^{(t)} \right)  - y \right\|^{2} \right) \\
    \text{s.t.}& \quad \bm{\phi}^{(t)} = \underset{\bm{\phi}}{\mathop{\arg\min}} ~ \sum\limits_{(\bm{x}',\ y')\in D_{\text{resam}}^{(t)}(\bm{\Theta})} \left\| y_{\text{proxy}}(\bm{x}';\ \bm{\phi}) - y' \right\|^{2}
\end{align}
$$

在这个双重优化问题中，argmin 算子是不可导的，因此需要式 $\eqref{6}$ 的内层优化有解析解。本文采用了最简单的线性回归，即

$$
\begin{equation}
    y_{\text{proxy}}^{(t)}\left(\bm{x};\ \bm{\phi}^{(t)} \right) = \bm{x} \bm{\phi}^{(t)}
\end{equation}
$$

而重采样并不是直接通过采样这个动作来实现，而是赋予子训练集中的样本不同的权重，于是式 $\eqref{6}$ 对应的损失函数可以写成

$$
\begin{equation}
    \begin{split}
        l_{\bm{\phi}^{(t)}}\left(D_{\text{resam}}^{(t)}(\bm{\Theta}) \right) &= \frac{1}{2} \sum\limits_{(\bm{x},\ y)\in D_{\text{train}}^{(t)}} q_{\text{train}}^{(t)} (\bm{x} \bm{\phi}^{(t)} - y)^{2} \\
        &= \frac{1}{2} \left(\bm{X}^{(t)} \bm{\phi}^{(t)} - \bm{y}^{(t)} \right)^{\top} \bm{Q}^{(t)} \left(\bm{X}^{(t)} \bm{\phi}^{(t)} - \bm{y}^{(t)} \right) \\
    \end{split}
\end{equation}
$$

其中 $\bm{X}^{(t)},\ \bm{y}^{(t)},\ \bm{Q}^{(t)}$ 分别为 $\bm{x},\ y,\ q_{\text{train}}^{(t)}$ 在时间维度上的拼接。则此时式 $\eqref{6}$ 这个内层优化变成了加权最小二乘（WLS）问题，解析解为

$$
\begin{equation}
    \bm{\phi}^{(t)} = \left(\bm{X}^{(t)\top} \bm{Q}^{(t)} \bm{X}^{(t)}\right)^{-1} \bm{X}^{(t)\top} \bm{Q}^{(t)} \bm{y}^{(t)}
\end{equation}
$$

则式 $\eqref{5}$ 这个外层优化就可以通过梯度下降算法进行优化。