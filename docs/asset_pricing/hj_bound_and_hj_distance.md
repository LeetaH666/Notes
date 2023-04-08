# HJ 边界与 HJ 距离

## HJ 边界

从超额收益率的定价公式我们可以得到 SDF 与 超额收益率之间的相关系数有如下关系：

$$
\begin{aligned}
 \mathrm{E}\left(m R^{e} \right) &= 0 \\
 \mathrm{E}(m) \mathrm{E}\left(R^{e} \right) + \rho_{m,\ R^{e}} \sigma(m) \sigma\left(R^{e} \right) &= 0 \\
 \rho_{m,\ R^{e}} &= \frac{\mathrm{E}(m) \mathrm{E}\left(R^{e} \right)}{\sigma(m) \sigma\left(R^{e} \right)}
\end{aligned}
$$

由于相关系数的绝对值 $\left\vert \rho_{m,\ R^{e}} \right\vert  \leqslant 1$，我们有

$$
\left\vert \frac{\mathrm{E}(m) \mathrm{E}\left(R^{e} \right)}{\sigma(m) \sigma\left(R^{e} \right)} \right\vert \leqslant 1
\implies \frac{\sigma(m)}{\mathrm{E}(m)} \geqslant \left\vert \frac{\mathrm{E}\left(R^{e} \right)}{\sigma\left(R^{e} \right)} \right\vert 
$$

这就是著名的 **Hansen-Jagannathan 边界**（Hansen 和 Jagannathan，1991），简称 HJ 边界。任何一个**能够满足定价条件的** SDF，方差都应该大于 HJ 边界。

## HJ 距离

资产定价领域的研究通常是为了找到一个接近真实 SDF 的 SDF，那么怎样算是接近呢？我们需要一个衡量 SDF 之间距离的工具。

首先我们需要把 SDF 投射到回报空间，因为与回报空间正交的部分并不影响定价。在 [SDF → 均值方差前沿](asset_pricing/relations_between_different_frameworks.md#sdf-→-均值方差前沿)中我们提到，对于理论的真实 SDF $m$，我们可以投影到回报空间 $\underline{X}$ 上得到 $x^{*}$，同样我们也可以将模型得到的估计 SDF $m'$ 投影到回报空间得到 $x'^{*}$，即

$$
x^{*} = \text{proj}(m|\underline{X}) = \mathrm{E}\left(m x^{\mathsf{T}} \right) \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1} x \\
x'^{*} = \text{proj}(m'|\underline{X}) = \mathrm{E}\left(m' x^{\mathsf{T}} \right) \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1} x
$$

投影到回报空间后，我们就可以对距离进行定义。如果 SDF 的接近指的是在期望和方差上都比较接近，那么我们可以在 $\sigma - \mathrm{E}$ 坐标系上定义距离。$\sigma - \mathrm{E}$ 坐标系上任意一点到原点的距离为[二阶矩开根号](asset_pricing/relations_between_different_frameworks.md#二阶矩距离)，也即向量 $x$ 的模长为 $\left\| x \right\| = \sqrt{\mathrm{E}\left(x^{2} \right)}$，则两个向量 $x$ 与 $y$ 之间的距离为 $\left\| x - y \right\|$。于是估计的 SDF $m'$ 和真实的 SDF $m$ 之间的距离可以写成

$$
\begin{aligned}
 \left\| m' - m \right\| &= \left\| x'^{*} - x^{*} \right\| \\
 &= \left\| \mathrm{E}\left(m' x^{\mathsf{T}} \right) \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1} x - \mathrm{E}\left(m x^{\mathsf{T}} \right) \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1} x \right\| \\
 &= \left\| \mathrm{E}\left(m' x^{\mathsf{T}} - m x^{\mathsf{T}} \right) \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1} x \right\| \\
 &= \sqrt{\mathrm{E} \left[\mathrm{E}\left(m' x - m x \right)^{\mathsf{T}} \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1} x \cdot x^{\mathsf{T}} \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1} \mathrm{E}\left(m' x - m x \right) \right]} \\
 &= \sqrt{\left[\mathrm{E}\left(m' x \right) - \mathrm{E}(m x) \right]^{\mathsf{T}} \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1} \left[\mathrm{E}\left(m' x \right) - \mathrm{E}(m x) \right]} \\
\end{aligned}
$$

其中 $\mathrm{E}\left(m' x \right) - \mathrm{E}(m x)$ 为定价误差。这个 SDF 之间的距离被称作 **HJ 距离**（Hansen 和 Jagannathan，1997）。

> [!TIP|label:提示]
> GMM 的基本目标函数是
> 
> $$\underset{b}{\min} ~ g^{\mathsf{T}}_{T}(b) W g_{T}(b)$$
> 
> 其中 $g_{T}$ 为考虑 $T$ 个样本的误差函数，$b$ 为参数，$W$ 为权重矩阵，衡量不同矩条件的重要程度。
>
> 当权重矩阵 $W = I$ 时，这个目标函数等价于 OLS 的目标函数。而最小化 HJ 距离则相当于 $W = \mathrm{E}\left(x x^{\mathsf{T}} \right)^{-1}$。