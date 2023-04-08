# SDF、β 表达式与均值方差前沿之间的联系

## SDF → β 表达式

### Test Assets 是总收益率

当 test assets 是总收益率（gross returns）时，我们有

$$
\E(m R) = 1
$$

其中 $m$ 是 SDF，$R$ 是任意资产的总收益率。

则我们可以做以下推导：

$$
\begin{aligned}
 \E(m R) &= 1 \\
 \E(m) \E(R) + \Cov(m,\ R) &= 1 \\
 \E(R) &= \frac{1}{\E(m)} - \frac{\Cov(m,\ R)}{\E(m)} \\
 \E(R) &= \frac{1}{\E(m)} + \frac{\Cov(m,\ R)}{\Var(m)} \left(-\frac{\Var(m)}{\E(m)} \right)  \\
\end{aligned}
$$

令

$$
\begin{aligned}
 \alpha &:= \frac{1}{\E(m)} \\
 \beta_m &:= \frac{\Cov(m,\ R)}{\Var(m)} \\
 \lambda_m &:= \frac{\Var(m)}{\E(m)}
\end{aligned}
$$

则我们得到了因子为 $m$ 的 $\beta$ 表达式：

$$
\E(R) = \alpha + \beta_m \lambda_m
$$

以上推导我们没有对 SDF 有任何结构上的先验假设，如果进行一些结构上的假设我们可以得到更多的推论。

假设 SDF 由一系列均值为 $0$ 的因子 $f$ 线性构成：

$$
m = a + b^{\mathsf{T}}f
$$

则

$$
\begin{aligned}
 \E(R) &= \frac{1}{\E(m)} - \frac{\Cov(m,\ R)}{\E(m)} \\
 &= \frac{1}{a} - \frac{\E\left(R f^{\mathsf{T}} \right) b}{a} \\
\end{aligned}
$$

根据 $\beta$ 的定义，即 $R$ 对因子 $f$ 回归得到的回归系数：

$$
\beta = \E\left(f f^{\mathsf{T}} \right)^{-1} \E(f R)
$$

则

$$
\begin{aligned}
 \E(R) &= \frac{1}{a} - \frac{\E\left(R f^{\mathsf{T}} \right) b}{a} \\
 &= \frac{1}{a} - \frac{\E\left(R f^{\mathsf{T}} \right) \E\left(f f^{\mathsf{T}} \right)^{-1} \E\left(f f^{\mathsf{T}} \right) b}{a} \\
 &= \frac{1}{a} - \beta^{\mathsf{T}} \frac{\E\left(f f^{\mathsf{T}} \right) b}{a} \\
\end{aligned}
$$

令

$$
\begin{aligned}
 \alpha &:= \frac{1}{a} = \frac{1}{\E(m)} \\
 \lambda &:= -\frac{\E\left(f f^{\mathsf{T}} \right) b}{a} = -\frac{\E\left[f (m - a) \right]}{a} = -\alpha \E(m f)
\end{aligned}
$$

我们有

$$
\E(R) = \alpha + \beta^{\mathsf{T}} \lambda
$$

> [!TIP|label:提示]
> $\lambda = -\alpha \E(m f)$ 说明因子的风险溢价与因子的“价格”呈负相关，因子“价格”越低，风险溢价越高。
> 
> 对于均值不为 $0$ 的因子，风险溢价可以写成
> 
> $$\lambda = -\alpha \E[m(f - \E(f))] = \E(f) - \alpha \E(mf)$$

### Test Assets 是超额收益率

当 test assets 是资产的超额收益率，而非总收益率：

$$
\E\left(m R^{e} \right) = 0
$$

其中 $R^{e}$ 为任意资产的超额收益率。

假设 SDF 由一系列均值可以不为 $0$ 的因子 $f$ 线性构成：

$$
m = a + b^{\mathsf{T}}[f - \E(f)]
$$

由于我们可以对 $\E\left(m R^{e} \right) = 0$ 等式两边同时乘上一个常数，所以当 test assets 是超额收益率时，SDF 是可以被标准化的。我们不妨设 $\E(m) = 1$，即

$$
m = 1 + b^{\mathsf{T}}[f - \E(f)]
$$

则我们可以做如下推导：

$$
\begin{aligned}
 \E\left(m R^{e} \right) &= 0 \\
 \E\left(R^{e} \right) + b^{\mathsf{T}} \Cov\left(f,\ R^{e} \right) &= 0 \\
 \E\left(R^{e} \right) &= -b^{\mathsf{T}} \Var(f) \Var(f)^{-1} \Cov\left(f,\ R^{e} \right) \\
\end{aligned}
$$

根据 $\beta$ 的定义，我们有

$$
\E\left(R^{e} \right) = -b^{\mathsf{T}} \Var(f) \beta
$$

令

$$
\lambda := -\Var(f) b
$$

我们有

$$
\E\left(R^{e} \right) = \lambda^{\mathsf{T}} \beta
$$

## SDF → 均值方差前沿

假设我们把 SDF 投射到资产的回报（payoff）空间 $\underline{X}$（所有回报的集合）：

$$
x^{*} = \text{proj}(m|\underline{X})
$$

> [!TIP|label:提示]
> $$\text{proj}(y|x) := \frac{\E(xy)}{\E\left(x^{2} \right)} x$$
> 
> 代表 $y$ 在 $x$ 上的投影，也就是 $y$ 对 $x$ 做无常数项的线性回归所得到的 $y$ 的估计值，$\hat{y}$。

这意味着有一个资产的回报 $x^{*}$ 可以作为 SDF。这个资产的价格为 $\E\left(x^{*}x^{*} \right) = \E\left(x^{*2} \right)$，因此对应的总收益率 $R^{*} = \frac{x^{*}}{\E\left(x^{*2} \right)}$。

对于任意超额收益率 $R^{e}$，我们有

$$
\E\left(R^{*} R^{e} \right) = \frac{\E\left(x^{*} R^{e} \right)}{\E\left(x^{*2} \right)} = 0
$$

这说明 $R^{*}$ 与超额收益率空间 $\underline{R}^{e}$ 是正交的。

我们想要通过 $R^{*}$ 找到均值方差前沿，所以需要定义一个超额收益率来改变资产收益率的均值：

$$
R^{e*} := \text{proj}\left(1|\underline{R}^{e} \right)
$$

这样定义出来的 $R^{e*}$ 毋庸置疑是一个超额收益率，它有如下性质：

$$
\E\left(R^{e*} R^{e} \right) = \E\left[\text{proj}\left(1|R^{e} \right) \cdot R^{e} \right] = \E\left(1 \cdot R^{e} \right) = \E\left(R^{e} \right)
$$

> [!TIP|label:提示]
> 由于 $R^{*}$ 与 $\underline{R}^{e}$ 正交且共同张成回报空间 $\underline{X}$，当存在无风险总收益率 $R_f$ 时，我们有
>
> $$1 = \text{proj}\left(1|R^{*} \right) + \text{proj}\left(1|\underline{R}^{e*} \right)$$
> 
> 因此 $R^{e*}$ 也可以表示为 
> 
> $$\begin{aligned} R^{e*} &= 1 - \text{proj}\left(1|R^{*} \right) \\ &= 1 - \frac{\E\left(R^{*} \right)}{\E\left(R^{*2} \right)} R^{*} \\ &= 1 - \frac{\E\left(x^{*} \right) / \E\left(x^{*2} \right)}{\E\left(x^{*2} \right) / \E^{2}\left(x^{*2} \right)} R^{*} \\ &= 1 - \E\left(x^{*} \right) R^{*} \\ &= 1 - \frac{1}{R_f} R^{*} \\ \end{aligned}$$
>
> 当不存在无风险总收益率时，我们只需要把 $1$ 投射到回报空间得到 $\text{proj}(1|\underline{X})$（constant-mimicking portfolio），此时
>
> $$R^{e*} = \text{proj}(1|\underline{X}) - \frac{\E\left(R^{*} \right)}{\E\left(R^{*2} \right)} R^{*}$$

于是任意资产的总收益率都可以分解成三个互相正交的收益率：

$$
R = R^{*} + c R^{e*} + \epsilon
$$

其中 $c$ 是一个常数，$\epsilon$ 是一个超额收益率且 $\E(\epsilon) = 0$。

> [!NOTE|label:注意]
> 不同资产对应不同的 $c$ 和 $\epsilon$。

> [!TIP|label:提示]
> $R^{*}$ 与超额收益率空间正交，因此 $R^{*}$ 与 $R^{e*}$ 和 $\epsilon$ 都正交；根据 $R^{e*}$ 的性质，$\E\left(R^{e*} \epsilon \right) = \E(\epsilon) = 0$，因此 $R^{e*}$ 与 $\epsilon$ 也正交。

<a id='二阶矩距离'></a>

不难看出，$\epsilon$ 让同一个收益率均值水平上有不同的方差，而均值方差前沿上的资产很自然地就可以表示为

$$
R^{mv} = R^{*} + c R^{e*}
$$

> [!TIP|label:提示]
> 由于 $\E\left(R^{2} \right) = \E\left(R^{*2} \right) + c^{2} \E\left(R^{e*2} \right) + \E\left(\epsilon^{2} \right)$，$R^{*}$ 代表了最小二阶矩收益。在 $\sigma - \E$ 坐标系上，到原点的距离为 $\sqrt{\sigma^{2}(R) + \E^{2}(R)} = \sqrt{\E\left(R^{2} \right)}$，因此 $R^{*}$ 也代表均值方差前沿与原点最近的收益率。
> 
> ![](image/2022-12-21-14-12-12.png)

## 均值方差前沿 → SDF

假设 SDF 可以由任意资产的总收益率 $R$ 线性构成：

$$
m = a + b R = a + b \left(R^{*} + c R^{e*} + \epsilon \right)
$$

则我们可以得到

$$
\begin{cases}
    \E\left(m R^{*} \right) = a \E\left(R^{*} \right) + b \E\left(R^{*2} \right) = 1 \\
    \E\left(m R^{e*} \right) = a \E\left(R^{e*} \right) + b c \E\left(R^{e*} \right) = 0 \\
\end{cases} \implies
\begin{cases}
    a = \frac{c}{c \E\left(R^{*} \right) - \E\left(R^{*2} \right)} \\
    b = \frac{1}{c \E\left(R^{*} \right) - \E\left(R^{*2} \right)} \\
\end{cases} \implies
m = \frac{c - \left(R^{*} + c R^{e*} + \epsilon \right)}{c \E\left(R^{*} \right) - \E\left(R^{*2} \right)}
$$

SDF 应当能对任意回报进行定价，而任意回报 $x^{\prime}$ 可以表示成：

$$
x^{\prime} = y^{\prime} R^{*} + c^{\prime} R^{e*} + \epsilon^{\prime}
$$

这代表 $x^{\prime}$ 的价格应为 $y^{\prime}$。

我们用根据假设得到的 SDF 来对 $x^{\prime}$ 定价：

$$
\begin{aligned}
 \E\left(m x^{\prime} \right) &= \E\left[\frac{\left(c - R^{*} - c R^{e*} - \epsilon \right) \left(y^{\prime} R^{*} + c^{\prime} R^{e*} + \epsilon^{\prime} \right)}{c \E\left(R^{*} \right) - \E\left(R^{*2} \right)} \right] \\
 &= \frac{c y^{\prime} \E\left(R^{*} \right) - y^{\prime} \E\left(R^{*2} \right) - \E\left(\epsilon \epsilon^{\prime} \right)}{c \E\left(R^{*} \right) - \E\left(R^{*2} \right)} \\
 &= y^{\prime} - \frac{\E\left(\epsilon \epsilon^{\prime} \right)}{c \E\left(R^{*} \right) - \E\left(R^{*2} \right)} \\
\end{aligned}
$$

想要得到准确的定价 $y^{\prime}$，我们需要 $\E\left(\epsilon \epsilon^{\prime} \right) = 0,\ \forall \epsilon^{\prime}$，即需要 $\epsilon = 0$；而为了保证分母不为 $0$，我们需要 $c \neq \frac{\E\left(R^{*2} \right)}{\E\left(R^{*} \right)}$。

因此，SDF 可以由均值方差前沿上除了无风险资产或 constant-mimicking portfolio 外的任意组合线性构成。