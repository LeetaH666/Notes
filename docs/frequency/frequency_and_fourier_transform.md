# 频率与傅里叶变换

## 频率的定义

频率可以被定义为**周期的倒数**：

$$
f := \frac{1}{T}
$$

其中 $f$ 是频率，$T$ 是周期。频率代表了单位时间内经过了多少周期。

## 为什么要研究频率

研究频率实际上是研究信号分解到不同频率（区间）上的成分。这些成分可以看作是一些固定的 pattern，信号则是这些 pattern 的叠加。单独看每一个 pattern，比如低频、中频、高频，可以比较容易地分析不同 pattern 对信号的影响（比如 Li et al. ([2015](#LDCHT2015)) 发现图片在人类视觉上的显著与否与它的中频成分更相关），也可以判断一个信号主要是什么 pattern（比如 Field ([1987](#F1987)) 发现自然图片分解到频域上后，越低频的成分振幅会越高）。

## 时频域转换：傅里叶（逆）变换

在资产定价中，我们的频域分析更多地是基于时序数据。尽管面板数据也是主要的数据形式之一，但由于资产在截面上没有特定顺序（需要人为定义）以及面板的不平衡性（每个截面的资产不同），应该还没有任何的 literature 对面板数据做二维频域分析。

### 傅里叶变换

那么既然要研究频率，我们就需要将信号从时域转换到频域。傅里叶变换就是一种将信号从时域转换到频域的方法。假设我们有一个实数时间序列 $\left\{x_t \right\}_{t=1}^{T}$，对其做傅里叶变换，我们可以得到它在频域上的表示，也称作**傅里叶系数**：

$$
X_k := \frac{1}{T} \sum_{t=1}^{T} x_t e^{-i 2 \pi f_k t}, \quad k = 0, 1, \cdots, T-1
$$

其中 $k$ 代表频率的序号，$f_k := \frac{k}{T}$ 代表第 $k$ 个频率，通常为了方便，我们会还会定义角频率 $\omega_k := 2 \pi f_k = \frac{2 \pi k}{T}$，从而将傅里叶变换的公式简化为

$$
X_k := \frac{1}{T} \sum_{t=1}^{T} x_t e^{-i \omega_k t}, \quad k = 0, 1, \cdots, T-1
$$

注意到，每个频率对应的傅里叶系数都需要由**所有**时域数据共同组成。

#### $0$ 频率有且仅有均值信息

当 $k = 0$ 时，也就是频率为 $f_0 = \frac{0}{T} = 0$ 的时候，我们可以看到对应的傅里叶系数实际上就是时域数据的均值：

$$
X_0 = \frac{1}{T} \sum_{t=1}^{T} x_t
$$

均值不随时间变化，代表了一条直线，所以这个分量在信号处理中也被称为直流分量。由于直流分量不包含任何周期信息，所以在频域分析中通常会被忽略，或者会提前对时域数据做 demean 处理。

#### 傅里叶系数有一半是冗余的

当 $k = k'$ 时（$k' = 1,\ \cdots,\ T-1$），我们有

$$
\begin{aligned}
    X_{k'} &= \frac{1}{T} \sum_{t=1}^{T} x_t e^{-i \frac{2 \pi k'}{T} t} \\
    &= \frac{1}{T} \sum_{t=1}^{T} x_t \left(\cos\left(\frac{2 \pi k'}{T} t\right) - i \sin\left(\frac{2 \pi k'}{T} t\right) \right) 
     \\
\end{aligned}
$$

当 $k = T-k'$ 时，我们有

$$
\begin{aligned}
    X_{T-k'} &= \frac{1}{T} \sum_{t=1}^{T} x_t e^{-i \frac{2 \pi (T-k')}{T} t} \\
    &= \frac{1}{T} \sum_{t=1}^{T} x_t \left(\cos\left(\frac{2 \pi (T-k')}{T} t\right) - i \sin\left(\frac{2 \pi (T-k')}{T} t\right) \right) \\
    &= \frac{1}{T} \sum_{t=1}^{T} x_t \left(\cos\left(2 \pi - \frac{2 \pi k'}{T} t\right) - i \sin\left(2 \pi - \frac{2 \pi k'}{T} t\right) \right) \\
    &= \frac{1}{T} \sum_{t=1}^{T} x_t \left(\cos\left(\frac{2 \pi k'}{T} t\right) + i \sin\left(\frac{2 \pi k'}{T} t\right) \right) \\
\end{aligned}
$$

即 $X_{T-k'} = X_{k'}^{*}$，$^{*}$ 代表共轭。也就是说，我们只需要知道**一半**的傅里叶系数就可以得到全部的频域信息。这从参数量上也可以很好理解，原先的时域数据有 $T$ 个实数，转换到频域后用复数表示，每个复数分为实部和虚部，所以只需要 $\frac{T}{2}$ 个复数就可以表示全部信息（奇偶的区别在此暂不作讨论）。从周期的角度也可以理解：一个时间序列中最小周期就是 $2$，对应最高频率 $0.5$，所以 $0.5$ 到 $1$ 的频率都是冗余的，通常我们会把这部分频率平移到负轴，称为负频率。

### 傅里叶逆变换

除了用傅里叶变换将时域数据转换到频域，我们还可以用傅里叶逆变换将频域数据恢复到时域：

$$
x_t = \sum_{k=0}^{T-1} X_k e^{i \omega_k t}
$$

> [!NOTE|label:注意]
> 大家平时见到的傅里叶（逆）变换公式可能会有一些细节上的不同，比如从 $0$ 到 $T-1$ 还是从 $1$ 到 $T$，比如前面常数系数的不同，这些其实都没错，只是用了不同的定义而已。对于常数系数，我们只需要保证傅里叶变换的常数系数和逆变换的常数系数相乘等于 $\frac{1}{T}$ 即可。

#### 将时序数据分解成余弦波

进一步地，假设 $X_k = a_k + i b_k$，$a_k,\ b_k \in \mathbb{R}$，且有一个 $\theta_k$ 使得 $\cos(\theta_k) = \frac{a_k}{\sqrt{a_k^{2} + b_k^{2}}}$，$\sin(\theta_k) = \frac{b_k}{\sqrt{a_k^{2} + b_k^{2}}}$，则傅里叶逆变换的过程还可以进一步写成：

$$
\begin{aligned}
    x_t &= \sum_{k=0}^{T-1} (a_k + i b_k) e^{i \omega_k t} \\
    &= \sum_{k=0}^{T-1} \sqrt{a_k^{2} + b_k^{2}} (\cos(\theta_k) + i \sin(\theta_k)) e^{i \omega_k t} \\
    &= \sum_{k=0}^{T-1} \sqrt{a_k^{2} + b_k^{2}} e^{i \theta_k} e^{i \omega_k t} \\
    &= \sum_{k=0}^{T-1} \sqrt{a_k^{2} + b_k^{2}} (\cos(\omega_k t + \theta_k) + i \sin(\omega_k t + \theta_k))
\end{aligned}
$$

由于 $x_t$ 是实数，所以虚部 $\sum_{k=0}^{T-1} \sqrt{a_k^{2} + b_k^{2}} \sin(\omega_k t + \theta_k) = 0$。更直接地，以 $\frac{T}{2}$ 为原点，$\sqrt{a_k^{2} + b_k^{2}}$ 是偶函数，$\sin(\omega_k t + \theta_k)$ 是奇函数，所以它们的乘积也是奇函数，整个求和就会等于 $0$。因此我们可以把时序数据表示为若干个余弦波的叠加：

$$
x_t = \sum_{k=0}^{T-1} \sqrt{a_k^{2} + b_k^{2}} \cos(\omega_k t + \theta_k)
$$

$\sqrt{a_k^{2} + b_k^{2}}$ 和 $\theta_k$ 分别是余弦波的振幅和初相位，它们都由傅里叶系数 $X_k$ 直接决定。

## 参考文献

<span id="F1987">Field, D. J. (1987). Relations between the statistics of natural images and the response properties of cortical cells. *JOSA A*, 4(12), 2379–2394. https://doi.org/10.1364/JOSAA.4.002379</span>

<span id="LDCHT2015">Li, J., Duan, L.-Y., Chen, X., Huang, T., & Tian, Y. (2015). Finding the Secret of Image Saliency in the Frequency Domain. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 37(12), 2428–2440. https://doi.org/10.1109/TPAMI.2015.2424870</span>
