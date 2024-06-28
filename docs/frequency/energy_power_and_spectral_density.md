# 能量、功率与谱密度

## 能量与能量信号

信号处理中的能量和物理中的能量并不一样，但它们之间有一定的联系。在信号处理中，能量是信号的平方和：

$$
E = \int_{-\infty}^{\infty} \left\vert x(t) \right\vert^2 ~\mathrm{d}t 
$$

假设信号是电势能，那么这样计算出来的能量单位是 $V^{2} \cdot s$，可以再除以电阻值来得到物理上的能量，单位是 $\frac{V^{2}}{\Omega} \cdot s = W \cdot s = J$。

如果信号的能量是有限的（$E < \infty$），那么我们称这个信号是**能量信号（energy signal）**。根据上面能量的定义，要达到这个条件，信号只能是有限长的。而在时间序列分析中，虽然我们用有限样本来估计，但我们通常假设信号是无限长的，比如我们认为纳斯达克指数的时间序列未来会一直有值。所以在时间序列分析中，我们很少会遇到能量信号。

如果信号的能量无限，那么这个信号不存在连续傅里叶变换，因为连续傅里叶变换涉及积分，需要积分的收敛性。至于平时我们对有限长的信号样本做离散傅里叶变换，其实是假设了这段样本会不断重复下去。

### 帕塞瓦尔定理：时频域能量相等

$$
\int_{-\infty}^{\infty} \left\vert x(t) \right\vert^2 ~\mathrm{d}t = \int_{-\infty}^{\infty} \left\vert X(f) \right\vert^2 ~\mathrm{d}f
$$

## 功率与功率信号

与能量信号不同，我们在时间序列分析中经常会遇到**功率信号（power signal）**，即能量无限，但功率有限的信号。功率是单位时间内的能量，也即信号的二阶矩：

$$
P = \lim_{T \to \infty} \frac{1}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} \left\vert x(t) \right\vert^2 dt
$$

在这个定义下，不难看出能量信号的功率为 $0$。当我们假设时间序列弱平稳，它的二阶矩就是有限的，也就是一个功率信号。

## 功率谱密度

<strong>谱密度（spectral density）</strong>其实分为<strong>能量谱密度（energy spectral density）</strong>和<strong>功率谱密度（power spectral density）</strong>，但由于能量信号在时间序列分析中很少用到，所以我们通常所说的谱密度都是指功率谱密度，下面简称 PSD。

根据帕塞瓦尔定理，信号的功率可以改写成

$$
P = \lim_{T \to \infty} \frac{1}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} \left\vert X_{T}(f) \right\vert^2 ~\mathrm{d}f = \int_{-\infty}^{\infty} \lim_{T \to \infty} \frac{1}{T} \left\vert X_{T}(f) \right\vert^2 ~\mathrm{d}f
$$

则被积函数 $\lim_{T \to \infty} \frac{1}{T} \left\vert X_{T}(f) \right\vert^2 =: S_{x}(f)$ 就是 PSD。而 PSD 的分布就叫作**功率谱（power spectrum）**。

> [!TIP|label:提示]
> 概率密度积出来是概率，功率谱密度积出来是功率。而信号处理中“频谱”不分家，看到“谱”就要想到“频”，谱密度就代表积分元是频率。

### PSD 是自相关函数的傅里叶变换

由于功率信号的能量无限，在无穷区间内的连续傅里叶变换不存在，我们需要将它限制在一个有限区间内，即

$$
X_{T}(f) = \int_{-\frac{T}{2}}^{\frac{T}{2}} x(t) e^{-i 2 \pi f t} ~\mathrm{d}t
$$

或者用角频率代替频率：

$$
X_{T}(\omega) = \int_{-\frac{T}{2}}^{\frac{T}{2}} x(t) e^{-i \omega t} ~\mathrm{d}t
$$

这样做其实也是额外假设了原先的信号以 $T$ 为周期。则 $\left\vert X_{T}(\omega) \right\vert^{2}$ 可以写成

$$
\begin{aligned}
    \left\vert X_{T}(\omega) \right\vert^{2} = X_{T}(\omega) X_{T}^{*}(\omega) &= \int_{-\frac{T}{2}}^{\frac{T}{2}} x(t) e^{-i \omega t} ~\mathrm{d}t \int_{-\frac{T}{2}}^{\frac{T}{2}} x(s) e^{i \omega s} ~\mathrm{d}s \\
    &= \int_{-\frac{T}{2}}^{\frac{T}{2}} \int_{-\frac{T}{2}}^{\frac{T}{2}} x(t) x(s) e^{-i \omega (t-s)} ~\mathrm{d}t ~\mathrm{d}s
\end{aligned}
$$

两边同时取期望，我们有

$$
\E \left\vert X_{T}(\omega) \right\vert^{2} = \int_{-\frac{T}{2}}^{\frac{T}{2}} \int_{-\frac{T}{2}}^{\frac{T}{2}} \E[ x(t) x(s)] e^{-i \omega (t-s)} ~\mathrm{d}t ~\mathrm{d}s \\
$$

令 $\tau = t - s$，假设 $x(t)$ 是弱平稳的，$\E[x(t) (t - \tau)]$ 就是它的自相关函数 $R_x(\tau)$，则上式可以写成

$$
\E \left\vert X_{T}(\omega) \right\vert^{2} = \int_{-\frac{T}{2}}^{\frac{T}{2}} \int_{-\frac{T}{2}}^{\frac{T}{2}} R_x(\tau) e^{-i \omega \tau} ~\mathrm{d}t ~\mathrm{d}s
$$

> [!NOTE|label:注意]
> 自相关函数和自相关系数（autocorrelation coefficient）不是一个东西，自相关系数是自相关函数的归一化版本。当对数据做了 demean 处理后，自相关函数就是自协方差函数。

令 $\eta = t + s$，变量替换的雅可比行列式为

$$
J = \left\vert \frac{\partial (\eta, \tau)}{\partial (t, s)} \right\vert  = \begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} = -2 \implies \left\vert J \right\vert^{-1} = \frac{1}{2}
$$

则上式可以写成

$$
\begin{aligned}
    \E \left\vert X_{T}(\omega) \right\vert^{2} &= \frac{1}{2} \int_{-T}^{T} \int_{-(T - \left\vert \tau \right\vert)}^{T - \left\vert \tau \right\vert } R_x(\tau) e^{-i \omega \tau} ~\mathrm{d}\eta ~\mathrm{d}\tau \\
    &= \int_{-T}^{T} (T - \left\vert \tau \right\vert) R_x(\tau) e^{-i \omega \tau} ~\mathrm{d}\tau
\end{aligned}
$$

两边同时除 $T$，取极限 $T \to \infty$，我们有

$$
\begin{aligned}
    \lim_{T \to \infty} \frac{1}{T} \E \left\vert X_{T}(\omega) \right\vert^{2} &= \lim_{T \to \infty} \int_{-T}^{T} \left(1 - \frac{\left\vert \tau \right\vert}{T} \right) R_x(\tau) e^{-i \omega \tau} ~\mathrm{d}\tau \\
    &= \int_{-\infty}^{\infty} R_x(\tau) e^{-i \omega \tau} ~\mathrm{d}\tau
\end{aligned}
$$

因此 PSD $S_{x}(f)$ 就是自相关函数 $R_x(\tau)$ 的傅里叶变换：

$$
\begin{aligned}
    S_{x}(f) &= \int_{-\infty}^{\infty} R_x(\tau) e^{-i 2 \pi f \tau} ~\mathrm{d}\tau \\
    R_x(\tau) &= \int_{-\infty}^{\infty} S_{x}(f) e^{i 2 \pi f \tau} ~\mathrm{d}f
\end{aligned}
$$

这个逆变换的式子也是大家可能在某些地方会看到的自相关函数定义式。令 $\tau = 0$，则 $x(t)$ 的二阶矩为

$$
R_x(0) = \int_{-\infty}^{\infty} S_{x}(f) ~\mathrm{d}f
$$

如果进一步假设 $x(t)$ 的均值为 $0$，那么这其实就是 $x(t)$ 的方差。

### PSD 的基本性质

根据

$$
S_{x}(f) = \lim_{T \to \infty} \frac{1}{T} \left\vert X_{T}(f) \right\vert^{2}
$$

我们可以知道 PSD 是一个**非负实数函数**。

而根据 

$$
S_{x}(f) = \int_{-\infty}^{\infty} R_x(\tau) e^{-i 2 \pi f \tau} ~\mathrm{d}\tau
$$

我们可以发现 $S_x(f)$ 是一个**周期为 $1$** 的函数，因为 $e^{-i 2 \pi \cdot 0} = e^{-i 2 \pi \cdot 1} = 1$。当然，这对任意傅里叶系数都是成立的（把 $R_x(\tau)$ 换成 $x(t)$）。根据频率的原始定义，它的范围是 $(0, 1)$，而由于 $S_x(f)$ 是周期为 $1$ 的函数，我们可以关注任意一个长度为 $1$ 的区间，这也回答了为什么我们可以把冗余的 $(0.5, 1)$ 的频率移到 $(-0.5, 0)$ 上（负频率）。

> [!TIP|label:提示]
> 这个 $1$ 不是 $1$ 个频率的意思，而是指频率从 $0$ 到 $1$ 是一个周期。

又因为傅里叶系数本身有共轭的性质，PSD 又是纯实数，所以 $S_x(f)$ 是一个**偶函数**。

### ARMA 过程的 PSD

记 $\text{ARMA}(p,\ q)$ 过程

$$
X_t - \phi_1 X_{t - 1} - \cdots - \phi_p X_{t - p} = W_t + \theta_1 W_{t - 1} + \cdots + \theta_q W_{t - q},\quad \left\{W_t \right\} \sim \text{N}(0,\ \sigma^2),
$$

为 $\phi(B) X_t = \theta(B) W_t$，其中 $B$ 是滞后算子。令 $\psi(B) := \frac{\theta(B)}{\phi(B)}$，则这个过程可以被简单写为

$$
X_t = \psi(B) W_t := \sum_{i=0}^{\infty} \psi_i W_{t - i}.
$$

它的自协方差为

$$
\begin{aligned}
    \gamma(\tau) &= \E\left[\sum_{i=0}^{\infty} \psi_i W_{t - i} \sum_{j=0}^{\infty} \psi_j W_{t + \tau - j}\right] \\
    &= \sum_{i=0}^{\infty} \sum_{j=0}^{\infty} \psi_i \psi_j \E[W_{t - i} W_{t + \tau - j}] \\
    &= \sigma^{2} \sum_{i=0}^{\infty} \psi_i \psi_{i + \tau}.
\end{aligned}
$$

定义自协方差生成函数（autocovariance generating function）为

$$
\gamma(B) = \sum_{\tau=-\infty}^{\infty} \gamma_{\tau} B^{\tau},
$$

则

$$
\begin{aligned}
    \gamma(B) &= \sigma^{2} \sum_{\tau=-\infty}^{\infty} \sum_{i=0}^{\infty} \psi_i \psi_{i + \tau} B^{\tau} \\
    &= \sigma^{2} \sum_{i=0}^{\infty} \sum_{j=0}^{\infty} \psi_i \psi_{j} B^{j - i} \\
    &= \sigma^{2} \sum_{i=0}^{\infty} \psi_i B^{-i} \sum_{j=0}^{\infty} \psi_{j} B^{j} \\
    &= \sigma^{2} \psi(B^{-1}) \psi(B).
\end{aligned}
$$

因此这个 $\text{ARMA}(p,\ q)$ 过程的 PSD 为

$$
f(\omega) = \sum_{\tau=-\infty}^{\infty} \gamma_{\tau} e^{-i \omega \tau} = \gamma(e^{-i \omega}) = \sigma^{2} \psi(e^{i \omega}) \psi(e^{-i \omega}) = \sigma^{2} \left\vert \psi(e^{i \omega}) \right\vert^{2}.
$$

比如 $\text{AR}(p)$，$\psi(B) = \frac{1}{\phi(B)}$，因此它的 PSD 为 $\frac{\sigma^{2}}{\left\vert \phi(e^{i \omega}) \right\vert^{2}}$。更具体地，$\text{AR}(1)$ 过程的 PSD 为

$$
\begin{aligned}
    \frac{\sigma^{2}}{\left\vert 1 - \phi_1 e^{i \omega} \right\vert^{2}} &= \frac{\sigma^{2}}{[1 - \phi_1 (\cos(\omega) + i \sin(\omega))] [1 - \phi_1 (\cos(\omega) - i \sin(\omega))]} \\
    &= \frac{\sigma^{2}}{1 - 2 \phi_1 \cos(\omega) + \phi_1^{2}}.
\end{aligned}
$$

由于角频率 $\omega \in (0, \pi]$，$\cos(\omega) \geqslant 0$，越低频，$\cos(\omega)$ 越大，越高频，$\cos(\omega)$ 越小。当 $\phi_1 > 0$ 时，分母会随着频率的增加而减小，即低频成分的能量更大；当 $\phi_1 < 0$ 时，分母会随着频率的增加而增大，即高频成分的能量更大。

### 如何估计 PSD

估计 PSD 的方法分为非参数估计和参数估计。**非参数估计不假设信号的分布**，常见的有周期图法（periodogram）、Welch 方法等，其中周期图法就是直接对信号做傅里叶变换，然后取模平方；**参数估计需要假设信号的分布**，比如将信号建模成 ARMA 过程，然后通过估计 ARMA 的系数来得到 PSD。

## 互功率谱密度

类似于功率谱密度与自相关函数之间的关系，我们可以定义出<strong>互功率谱密度（cross power spectral density，CPSD）</strong>与<strong>互相关函数（cross-correlation function）</strong>之间的关系：

$$
\begin{aligned}
    S_{xy}(f) &= \int_{-\infty}^{\infty} R_{xy}(\tau) e^{-i 2 \pi f \tau} ~\mathrm{d}\tau \\
    R_{xy}(\tau) &= \int_{-\infty}^{\infty} S_{xy}(f) e^{i 2 \pi f \tau} ~\mathrm{d}f
\end{aligned}
$$

其中互相关函数 $R_{xy}(\tau) := \E[x(t) y(t + \tau)]$。

### 共谱与正交谱

与 PSD 不同，CPSD 是一个**复数函数**，它对应的分布叫作**互功率谱（cross power spectrum）**。它的实部的分布被称为**共谱（co-spectrum）**，虚部的分布被称为**正交谱（quadrature spectrum）**。

我们通过离散信号来理解。考虑两个信号 $x(t)$ 和 $y(t)$，它们的离散傅里叶变换分别为

$$
\begin{aligned}
    X_k &= \frac{1}{T} \sum_{t=1}^{T} x_t e^{-i \omega_k t} \\
    Y_k &= \frac{1}{T} \sum_{t=1}^{T} y_t e^{-i \omega_k t}
\end{aligned}
$$

将傅里叶系数写成指数形式，我们有

$$
\begin{aligned}
    X_k &= A_{xk} e^{i \theta_{xk}} \\
    Y_k &= A_{yk} e^{i \theta_{yk}}
\end{aligned}
$$

其中 $A_{xk} = \left\vert X_k \right\vert$ 是振幅，$\theta_{xk} = \arctan\left(\frac{\Im(X_k)}{\Re(X_k)}\right)$ 是初相位。则它们的 CPSD 可以写成

$$
\begin{aligned}
    S_{xy}(f_k) = X_k Y_{k}^{*} &= A_{xk} A_{yk} e^{i (\theta_{xk} - \theta_{yk})} \\
    &= A_{xk} A_{yk} \cos(\theta_{xk} - \theta_{yk}) + i A_{xk} A_{yk} \sin(\theta_{xk} - \theta_{yk}) \\
\end{aligned}
$$

在振幅不变的情况下，

- 相位差越接近于 $0$，共谱密度就会越大。当相位差 $\theta_{xk} - \theta_{yk} = 0$ 时，即 $x(t)$ 和 $y(t)$ 在频率 $f_k$ 上是 in phase 的，共谱密度达到最大。因此共谱密度代表了两个信号在这个频率上的共同变化程度。
- 而由于 $\sin$ 和 $\cos$ 是正交的，共谱密度越大，正交谱密度就会越小，当相位差 $\theta_{xk} - \theta_{yk} = \frac{\pi}{2}$ 时，即 $x(t)$ 和 $y(t)$ 在频率 $f_k$ 上是 completely out of phase 的，正交谱密度最大。因此正交谱密度代表了两个信号在这个频率上相差 $\frac{\pi}{2}$ 的变化程度。

### 协方差频率分解

从直觉上来讲，协方差是在描述两个信号的共同变化程度，那么应该与共谱有关，而又因为正交谱与共谱正交，所以协方差应该只与共谱有关，也就是只与 CPSD 的实部有关。从公式上来看，令 $\tau = 0$，我们有

$$
\begin{aligned}
    R_{xy}(0) &= \int_{-\infty}^{\infty} S_{xy}(f) ~\mathrm{d}f \\
    &= \int_{-\infty}^{\infty} A_{xk} A_{yk} \cos(\theta_{xk} - \theta_{yk}) + i A_{xk} A_{yk} \sin(\theta_{xk} - \theta_{yk}) ~\mathrm{d}f
\end{aligned}
$$

由于 $\sin(\theta_{xk} - \theta_{yk})$ 是奇函数（傅里叶系数的共轭性），最终的积分结果为 $0$，所以协方差只与 CPSD 的实部有关。据此我们可以将协方差分解到不同的频率上，比如只在低频上求积分：

$$
R_{xy}^{\text{LF}}(0) = \int_{\text{LF}} S_{xy}(f) ~\mathrm{d}f
$$

同样，由于傅里叶系数的共轭性，同时考虑正频率和负频率，我们依旧可以把虚部消掉。因此在离散情况下，低频协方差其实就是 CPSD 在低频区间上的实部和：

$$
R_{xy}^{\text{LF}}(0) = \sum_{f_k \in \text{LF}} \Re(S_{xy}(f_k))
$$

这同样也等价于两个信号的低频成分之间的协方差。