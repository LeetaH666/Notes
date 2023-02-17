## 随机变量

随机变量是 $\mathcal{F}$-measurable 意味着在 $\mathcal{F}$ 确定之后随机变量就是一个确定的函数。

## 随机过程

对于随机过程 $\left\{X_t \right\}$，不同时间 $t$ 对应的随机变量 $X_t$ 是 $\mathcal{F}_t$-measurable 的，但一般共用同一个样本空间 $\Omega$。

随机变量取值是离散的话为 discrete variable process，连续则为 continuous variable process。

随机过程复杂程度的平衡：太简单不能很好刻画现实，太复杂性质不好。

### 高斯过程

多元高斯中任意线性组合都是高斯过程。

### Self-Similar Processes

$=_d$ 代表同分布。

## 高斯过程

independent and stationary.

处理高斯过程的重点是处理它们的增量，因为是独立的，性质好。

正态分布有比较好的性质：可加性，独立可以由不相关推出。

### 布朗桥

布朗桥指的是随机过程，$t$ 不能固定。

布朗桥证明重点在构造独立增量，这样联合分布就可以直接拆出来：

$$
f(B_t = x | B_1 = 0) = \frac{g(B_t = x,\ B_1 = 0)}{h(B_1 = 0)} = \frac{g(B_t = x,\ B_1 - B_t = -x)}{\frac{1}{\sqrt{2\pi}}} = \frac{\frac{1}{\sqrt{2\pi t}} e^{-\frac{x^{2}}{2 t}}\frac{1}{\sqrt{2\pi (1-t)}} e^{-\frac{(-x)^{2}}{2 (1-t)}}}{\frac{1}{\sqrt{2\pi}}} = \frac{1}{\sqrt{2\pi t(1-t)}} e^{-\frac{x^{2}}{2 t(1-t)}}
$$

即服从 $B(0,\ t(1-t))$。

### 几何布朗运动

正态分布密度积分为1的证明需要化简为繁：把一重积分变成多重积分，再用极坐标方法求解。

### 布朗运动性质

几乎处处收敛与依概率收敛的区别在于概率与极限的位置。

i.o. = infinitely often

想要定义随机积分，参考普通积分，但 1-variation 是 unbounded 的，所以只能去看其他的 variation，因此从 quadratic variation 出发去定义。

quadratic variation 的定义需要说明极限是依概率的。

2-variation 和 quadratic variation 不同。

$$
[f,\ g](t) = \lim\limits_{\delta_n \to 0} \sum\limits_{i=1}^{n} \left\vert f(t_i) - f(t_{i-1}) \right\vert \left\vert g(t_i) - g(t_{i-1}) \right\vert
$$

$V_{B_t(\omega)}([0,\ t])$ 简写成 $V_{B_t(\omega)}(t)$。

数学分析是随机分析的一个特例，所以有些结论会打架。

连续且 finite variation 的 $g$ 的 quadratic variation 为 0，因为可以提出一个有界的数，变成足够小的数乘有界的数即收敛到 0。

布朗运动 quadratic variation 得出来刚好是极限中那部分的期望。

证明过程中研究 $L^{2}$ 是因为 $\mathrm{E}((x-\mathrm{E}(x))^{2}) = \mathrm{Var}(x)$。