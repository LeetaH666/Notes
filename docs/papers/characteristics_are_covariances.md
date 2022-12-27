# Characteristics are Covariances: A Unified Model of Risk and Return

## 论文信息

### 作者

Bryan T. Kelly, Seth Pruitt, Yinan Su

Kelly 来自耶鲁大学，Pruitt 来自亚利桑那州立大学，Su 来自约翰霍普金斯大学。

### 收录情况

JFE2019

## 解决什么问题

在资产定价的因子模型中，因子与因子载荷都是不可观测的。过去的研究大多采取以下两种方法来解决这个问题：

1. 构建可观测的因子作为不可观测因子的代理变量；
2. 对收益率做 PCA（Principal Component Analysis）得到隐因子以及隐因子的因子载荷。

其中 PCA 方法中隐因子的因子载荷是个常数，不随时间变化，且只对收益率做 PCA 信息量比较少（没有其他特征来帮助定价）。本文采取的方法让因子载荷可以随时间变化，且能加入其他特征来辅助定价。

## 前置知识

### PCA

传统的因子模型可以写成

$$
r_t = \beta f_t + \epsilon_{t}
$$

其中 $r_t$ 为 $t$ 时刻 $N$ 个资产的收益率向量，$f_t$ 为 $t$ 时刻 $K (K \leqslant N)$ 个因子的因子值向量，$\beta$ 为 $N \times K$ 的因子载荷矩阵，$\epsilon_{t}$ 为 $N \times 1$ 的噪声向量。

对于隐因子模型，即因子观测不到的情况，我们可以对收益率做 PCA，从 $N$ 维降到 $K$ 维。PCA 的目标为

$$
\underset{\beta,\ F}{\min} ~ \sum\limits_{t=1}^{T} \epsilon_{t}^{\mathsf{T}} \epsilon_{t} = \underset{\beta,\ F}{\min} ~ \sum\limits_{t=1}^{T} (r_t - \beta f_t)^{\mathsf{T}} (r_t - \beta f_t)
$$

其中 $F = (f_1,\ f_2,\ \cdots,\ f_{T})$。

> [!TIP|label:提示]
> 与线性回归类似，PCA 也是最小化残差平方和，但在 PCA 问题中我们不仅不知道回归系数，连自变量是什么都不知道。

目标函数对 $f_t$ 求导可得 $f_t$ 的一阶条件为 $f_t = \left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} r_t$，代回目标函数可以得到

$$
\begin{aligned}
 &\quad \ \underset{\beta}{\min} ~ \sum\limits_{t=1}^{T} \left[r_t - \beta \left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} r_t \right] ^{\mathsf{T}} \left[r_t - \beta \left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} r_t \right] \\
 &= \underset{\beta}{\min} ~ \sum\limits_{t=1}^{T} r_t^{\mathsf{T}} r_t - r_t^{\mathsf{T}} \beta \left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} r_t \\
\end{aligned}
$$

即问题可以转化为

$$
\begin{aligned}
 \underset{\beta}{\max} ~ \sum\limits_{t=1}^{T} r_t^{\mathsf{T}} \beta \left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} r_t &= \underset{\beta}{\max} ~ \sum\limits_{t=1}^{T} \text{tr} \left[r_t^{\mathsf{T}} \beta \left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} r_t \right] \\
 &= \underset{\beta}{\max} ~ \sum\limits_{t=1}^{T} \text{tr} \left[\left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} r_t r_t^{\mathsf{T}} \beta \right] \\
 &= \underset{\beta}{\max} ~ \text{tr} \left[\left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} \sum\limits_{t=1}^{T} r_t r_t^{\mathsf{T}} \beta \right] \\
\end{aligned}
$$

> [!TIP|label:提示]
> $r_t^{\mathsf{T}} \beta \left(\beta^{\mathsf{T}} \beta \right)^{-1} \beta^{\mathsf{T}} r_t$ 是一个常数，且矩阵的迹有以下性质：
> 1. $\text{tr}(AB) = \text{tr}(BA)$
> 2. $\text{tr}(A) + \text{tr}(B) = \text{tr}(A + B)$

将 $\beta$ 写成 $(\beta_1,\ \beta_2,\ \cdots,\ \beta_{K})$ 的形式，对于每一个列向量 $\beta_{j}$，$\frac{\beta_{j}^{\mathsf{T}}\sum\limits_{t=1}^{T} r_t r_t^{\mathsf{T}} \beta_{j}}{\beta_{j}^{\mathsf{T}}\beta_{j}}$ 是一个瑞利商（Rayleigh quotient）。根据 Rayleigh-Ritz 定理，$\sum\limits_{t=1}^{T} r_t r_t^{\mathsf{T}}$ 的特征向量为该瑞利商的驻点，而特征向量对应的特征值为该瑞利商在该驻点上的值。因此，PCA 目标对应的 $\beta$ 解即为 $\sum\limits_{t=1}^{T} r_t r_t^{\mathsf{T}}$ 的前 $K$ 个特征向量（特征值从大到小排列）。

不过 PCA 还存在解不唯一的问题。对于任意的非奇异 $K \times K$ 矩阵 $A$，$\beta^{\prime} = \beta A$ 和 $f_t^{\prime} = A^{-1} f_t$ 可以得到与 $\beta$ 和 $f_t$ 相同的残差平方和，因此我们需要对解做一些限制来得到唯一解，比如：

$$
\begin{cases}
    \beta^{\mathsf{T}}\beta = I_{K} \\
    \mathrm{E}\left(f_t f_t^{\mathsf{T}} \right) = \Sigma_f \\
    \mathrm{E}(f_t) \geqslant 0
\end{cases}
$$

其中 $I_{K}$ 是 $K \times K$ 的单位矩阵，$\Sigma_f$ 是对角线元素从大到小排列的对角阵。

### 工具变量和 Managed Portfolio

在资产定价领域，最基础的定价公式之一是

$$
\mathrm{E}_{t}(m_{t+1} R_{t+1} - 1) = 0
$$

其中 $m$ 为 SDF，$R$ 为资产总收益率（gross return）。

定义 $u_{t+1} := m_{t+1} R_{t+1} - 1$，$u_{t+1}$ 是实际的折现后收益率（ex-post discounted return），而在 $t$ 时刻，我们构建的 SDF 预测出折现后收益率应当是 $0$，因此预测误差为 $u_{t+1} - 0 = u_{t+1}$。

由于我们不可能获取所有的有效信息来构建 SDF，模型肯定是有内生性的，为了解决内生性问题，我们引入工具变量（instruments）$z_t$：

$$
\mathrm{E}_{t}[m_{t+1} (R_{t+1} \otimes z_t) - 1 \otimes z_t] = 0
$$

其中 $A \otimes B$ 代表 $A$ 中每个元素都与 $B$ 相乘。

> [!TIP|label:提示]
> 在计量经济学领域，工具变量是与解释变量有关但与误差项无关的变量。工具变量法的矩估计表示是 $\mathrm{E}(z u) = 0$，而上式正是这样的形式。
>
> 假设 $R$ 是 $N$ 个资产的总收益率向量，$z$ 是 $K$ 个工具变量组成的向量，那么上式写成方程组的形式会从 $N$ 个等式变成 $N \times K$ 个等式。当等式数量超过参数量，会遇到过度识别（over-identification）的问题，这时就需要用到广义矩估计（GMM）的方法。

假设 $z_t$ 中只有一个元素，即只有一个工具变量，$R_{t+1} \otimes z_t = z_t R_{t+1}$ 可以理解为 managed portfolio 的总收益率，这个投资组合即投资者根据资产的工具变量数值来决定购买的份数。多个工具变量则相当于有多个 managed portfolios。

## 创新点

### IPCA

[PCA](#pca) 假定的因子模型中，$\beta$ 不随时间变化，且定价只依赖于收益率信息；而 IPCA（Instrumented PCA）在 $\beta$ 中引入随时间变化的工具变量（可观测的资产特征），既让 $\beta$ 带有了时变性，又能够为定价模型加入额外的信息。

IPCA 假定模型为

$$
r_{t+1} = \beta_t f_{t+1} + \epsilon_{t+1}
$$

其中 $r_{t+1}$ 为 $t+1$ 时刻 $N$ 个资产的收益率向量，$f_{t+1}$ 为 $t+1$ 时刻 $K$ 个因子的因子值向量，$\beta_t$ 为 $N \times K$ 的因子载荷矩阵，$\epsilon_{t+1}$ 为 $N \times 1$ 的噪声向量。而 $\beta_t$ 满足

$$
\beta_t = Z_t \Gamma_{\beta} + \nu_t
$$

其中 $Z_t$ 代表 $L (K \leqslant L \leqslant N)$ 个工具变量（包括一个常数），是 $N \times L$ 的矩阵，$\Gamma_{\beta}$ 为 $L \times K$ 的系数矩阵，$\nu_{i,\ t}$ 为 $N \times K$ 的噪声矩阵。

将上述 $\beta$ 关系式代入因子模型，得到

$$
r_{t+1} = Z_t \Gamma_{\beta} f_{t+1} + \epsilon_{t+1}^{\prime}
$$

其中 $\epsilon_{t+1}^{\prime}$ 为新的误差项。

> [!TIP|label:提示]
> 当 $K = L$，IPCA 与 BARRA 模型基本等价。

对于这个模型，我们同样想最小化残差平方和：

$$
\underset{\Gamma_{\beta},\ F}{\min} ~ \sum\limits_{t=1}^{T-1} \epsilon_{t+1}^{\prime\mathsf{T}} \epsilon_{t+1}^{\prime} = \underset{\Gamma_{\beta},\ F}{\min} ~ \sum\limits_{t=1}^{T-1} (r_{t+1} - Z_t \Gamma_{\beta} f_{t+1})^{\mathsf{T}} (r_{t+1} - Z_t \Gamma_{\beta} f_{t+1})
$$

其中 $F = (f_2,\ f_3,\ \cdots,\ f_{T})$。

目标函数分别对 $F$ 和 $\Gamma_{\beta}$ 求导可以得到两个一阶条件：

$$
f_{t+1} = \left(\Gamma_{\beta}^{\mathsf{T}} Z_t^{\mathsf{T}} Z_t \Gamma_{\beta} \right)^{-1} \Gamma_{\beta}^{\mathsf{T}} Z_t^{\mathsf{T}} r_{t+1}
$$

$$
\text{vec}\left(\Gamma_{\beta}^{\mathsf{T}} \right) = \left(\sum\limits_{t=1}^{T-1} Z_t^{\mathsf{T}}Z_t \otimes f_{t+1} f_{t+1}^{\mathsf{T}} \right)^{-1} \left(\sum\limits_{t=1}^{T-1} \left(Z_t \otimes f_{t+1}^{\mathsf{T}} \right)^{\mathsf{T}} r_{t+1} \right) 
$$

按照与 [PCA](#pca) 中相同的思路，我们可以将这个回归问题转化为

$$
\underset{\Gamma_{\beta}}{\max} ~ \text{tr} \left[\sum\limits_{t=1}^{T-1} \left(\Gamma_{\beta}^{\mathsf{T}} Z_t^{\mathsf{T}} Z_t \Gamma_{\beta} \right)^{-1} \Gamma_{\beta}^{\mathsf{T}} Z_t^{\mathsf{T}} r_{t+1} r_{t+1}^{\mathsf{T}} Z_t \Gamma_{\beta} \right] 
$$

但与 [PCA](#pca) 不同的是，这里瑞利商的分母是随时间变化的，因此我们无法直接得到 $\Gamma_{\beta}$ 的解析解。于是用 $Z_t^{\mathsf{T}} Z_t$ 在时间维度上的均值来代替 $Z_t^{\mathsf{T}} Z_t$，这样就可以用 Rayleigh-Ritz 定理得到近似解，即 $\sum\limits_{t=1}^{T-1} Z_t^{\mathsf{T}} r_{t+1} r_{t+1}^{\mathsf{T}} Z_t$ 的前 $K$ 个特征向量。

注意到 $Z_t^{\mathsf{T}}r_{t+1}$ 即 managed portfolios 的收益率，这说明 IPCA 模型的 test assets 既可以看作是所有个股，也可以看作是 managed portfolios。为了不让这个组合的波动率受资产数量的影响，可以对组合进行以下标准化：

$$
\chi_{t+1} = \frac{Z_t^{\mathsf{T}} r_{t+1}}{N_{t+1}}
$$

其中 $N_{t+1}$ 是 $t+1$ 时刻没有缺失值的资产数量。

于是 $\Gamma_{\beta}$ 的近似解变成了 $\sum\limits_{t=1}^{T-1} \chi_{t+1} \chi_{t+1}^{\mathsf{T}}$ 的前 $K$ 个特征向量。得到近似解后我们可以用数值方法找到精确解：

1. 将近似解 $\hat{\Gamma}_{\beta}$ 代入 $f_t$ 的一阶条件得到 $\hat{f}_t$；
2. 将 $\hat{f}_t$ 代入 $\Gamma_{\beta}$ 的一阶条件得到新的 $\hat{\Gamma}_{\beta}$；
3. 反复迭代直至收敛。

> [!TIP|label:提示]
> 收敛即这一轮的近似解与上一轮的近似解十分接近，比如每个元素的差值都小于 $10^{-6}$。

## 实验

### 指标

总 R 方（total R-squared）衡量的是收益率被风险暴露和因子实现值解释的程度：

$$
\text{Total } R^{2} = 1 - \frac{\sum\limits_{t=1}^{T-1} \left(r_{t+1} - Z_t \Gamma_{\beta} \hat{f}_{t+1} \right)^{\mathsf{T}}\left(r_{t+1} - Z_t \Gamma_{\beta} \hat{f}_{t+1} \right)}{\sum\limits_{t=1}^{T-1} r_{t+1}^{2}}
$$

预测 R 方（predictive R-squared）衡量的是条件期望收益（conditional expected return）$\hat{\beta}_{t} \hat{\lambda}$ 的精确程度：

$$
\text{Predictive } R^{2} = 1 - \frac{\sum\limits_{t=1}^{T-1} \left(r_{t+1} - Z_t \Gamma_{\beta} \hat{\lambda} \right)^{\mathsf{T}}\left(r_{t+1} - Z_t \Gamma_{\beta} \hat{\lambda} \right)}{\sum\limits_{t=1}^{T-1} r_{t+1}^{2}}
$$

其中风险价格（risk prices）的估计 $\hat{\lambda} = \sum\limits_{t=1}^{T-1} \hat{f}_{t+1}$ 是因子实现值的样本均值。

### 结果

在总 R 方上，IPCA 并不能击败传统模型，但在预测 R 方上可以，而且 IPCA 的参数量比传统模型少。

> [!TIP|label:提示]
> 传统模型的参数量为 $N K$，因为每个资产在每个因子上都有不同的暴露需要估计；IPCA 的参数包括一个 $L \times K$ 的矩阵 $\Gamma_{\beta}$ 以及时序上的隐因子实现值，因此参数量为 $L K + T K$。

## 参考文献

Kelly, B. T., Pruitt, S., & Su, Y. (2019). Characteristics are covariances: A unified model of risk and return. Journal of Financial Economics, 134(3), 501–524. https://doi.org/10.1016/j.jfineco.2019.05.001
