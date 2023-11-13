# 对待特征的不同方式与不同的预处理方法

## Characteristics as Exposures &mdash; Barra

在 Barra（Menchero 等，2011）中，特征被称作公司的 descriptor，通过将个股收益率截面回归到 descriptor 上可以得到风格因子的估计（假设每个风格只有一个 descriptor）：

$$
\begin{equation}
    \bm{r} = \bm{Z} \bm{f} + \bm{\epsilon} \quad \implies \quad \bm{\widehat{f}} = \left(\bm{Z}^{\top}\bm{Z} \right)^{-1} \bm{Z}^{\top} \bm{r} \label{1}
\end{equation}
$$

其中 $\bm{r}$ 为截面上 $N$ 个股票的收益率向量，$\bm{Z}$ 是 $N \times K$ 的 descriptor（特征）矩阵，也是风格因子的暴露，$\bm{f}$ 是 $K \times 1$ 的风格因子，$\bm{\epsilon}$ 是误差向量。

*Principal Portfolios*（Kelly 等，2023，以下简称 KMP）认为不应该只有自己公司的特征影响自己的收益率，其他公司的特征也应该影响自己的收益率。从 $\eqref{1}$ 式可以看出，Barra 风格因子其实做到了这一点，只是模型本身比较简单。

Barra 会对 descriptor 做标准化的操作，通过减去均值再除以标准差，使它们的均值为 0，方差为 1。对于某些高共线性的 descriptor，比如 size（log 市值）和 non-linear size（size 的三次方），Barra 还会做正交化处理，比如将 non-linear size 回归到 size 上，取残差作为正交 descriptor。

> [!NOTE|label:注意]
> 在第 4 版的 Barra 中，均值的计算用的是 value-weighted，因为想让 well-diversified 的 value-weighted portfolio 在风格因子上暴露为 0；而标准差的计算则是 equal-weighted（即通常的标准差），这是为了防止大公司暴露过大。这里我们暂时忽略这个细节。

### Barra 风格因子与 Managed Portfolio 之间的关系

假如所有 descriptor 都是正交的。由于均值为 0，方差为 1，$\bm{Z}$ 的每一列平方和都为 1，即 $\bm{Z}$ 是一个正交矩阵，因此

$$
\begin{equation}
    \bm{Z}^{\top} \bm{Z} = I \quad \implies \quad \bm{\widehat{f}} = \bm{Z}^{\top} \bm{r}
\end{equation}
$$

于是我们可以得到一个结论：当特征均值为 0，方差为 1，特征之间互相正交时，managed portfolio 的收益率与用 Barra 方法得到的因子是相同的。

在正交假设下，对于每个特征，对应的 managed portfolio 在对应风格上的暴露为 1，在其他风格上的暴露为 0。

### Barra 风格暴露与传统 β 的区别

传统 β 的定义是

$$
\begin{equation}
    \bm{\beta}_k = \frac{\Cov(\bm{r},\ f_k)}{\Var(f_k)}
\end{equation}
$$

其中 $f_k$ 为第 $k$ 个因子。

按照定义，我们可以看看正交假设下的 Barra 风格暴露是否符合：

$$
\frac{\Cov(\bm{r},\ f_k)}{\Var(f_k)} = \frac{\Cov(\bm{r},\ \bm{Z}_{k}^{\top} \bm{r})}{\Var(\bm{Z}_{k}^{\top} \bm{r})} = \frac{\bm{\Sigma}_r \bm{Z}_{k}}{\bm{Z}_{k}^{\top} \bm{\Sigma}_r \bm{Z}_{k}} \neq \bm{Z}_{k}
$$

其中 $\bm{Z}_{k}$ 为第 $k$ 个特征，$\bm{\Sigma}_{r}$ 为资产收益率的协方差矩阵。

只有当收益率之间没有相关性，正交后的 Barra 风格暴露才符合传统 β 的定义，否则它只能算是一个 predetermined factor loading。这是因为通过风格暴露获得风格因子时，用的是截面回归，并没有考虑时序上每个截面回归之间的关系。

如果使用时序回归，根据 *Principal Portfolios*（Kelly 等，2023）中的 Lemma 1，特征等于传统 β 时，对应的因子应该为

$$
\begin{equation}
    f_k = \left(\frac{\bm{\Sigma}_{r}^{-1} \bm{Z}_{k}}{\bm{Z}_{k}^{\top} \bm{\Sigma}_{r}^{-1} \bm{Z}_{k}} \right)^{\top} \bm{r}
\end{equation}
$$

## Characteristics as Covariances &mdash; IPCA

IPCA（Kelly 等，2019）假设因子暴露是公司特征的线性函数：

$$
\begin{equation}
    \bm{r}_{t+1} = \bm{Z}_t \bm{\Gamma}_{\beta} \bm{f}_{t+1} + \bm{\epsilon}_{t+1}
\end{equation}
$$

其中 $\bm{r}_{t+1}$ 是 $t + 1$ 时刻 $N$ 个资产的收益率向量，$\bm{Z}_{t}$ 是 $t$ 时刻 $N$ 个公司的 $L$（$K \leqslant L \leqslant N$） 个特征（$N \times L$），$\bm{\Gamma}_{\beta}$ 是 $L \times K$ 的时不变系数矩阵，$\bm{Z}_{t} \bm{\Gamma}_{\beta}$ 即因子暴露，$\bm{f}_{t+1}$ 为 $K \times 1$ 的因子向量，$\bm{\epsilon}_{t+1}$ 为误差向量。

在这个设定下，假设 $\bm{\Gamma}_{\beta}$ 已知，因子同样可以通过截面回归得到：

$$
\begin{equation}
    \bm{\widehat{f}}_{t+1} = \left(\bm{\Gamma}_{\beta}^{\top}\bm{Z}_{t}^{\top}\bm{Z}_{t} \bm{\Gamma}_{\beta} \right)^{-1} \bm{\Gamma}_{\beta}^{\top} \bm{Z}_{t}^{\top} \bm{r}_{t+1} \label{6}
\end{equation}
$$

不难看出，$\eqref{1}$ 式是 $\eqref{6}$ 式的一个特例，即当 $K = L$ 且 $\bm{\Gamma}_{\beta} = \bm{I}$ 时两式等价。

假设 $\bm{Z}_{t}^{\top} \bm{Z}_{t}$ 不随时间变化，IPCA 的解等价于对 managed portfolio 的收益率 &mdash; $\bm{Z}_{t}^{\top} \bm{r}_{t+1}$ 的协方差矩阵 $\bm{\Sigma}_{\text{mng}}$ 做 PCA，即 $\bm{\Gamma}_{\beta}$ 为 $\bm{\Sigma}_{\text{mng}}$ 的前 $K$ 个特征向量。当 $K = L$，我们有 $\bm{\Sigma}_{\text{mng}} = \bm{\Gamma}_{\beta}^{\top} \bm{\Lambda} \bm{\Gamma}_{\beta}$，其中 $\bm{\Lambda}$ 为 $\bm{\Sigma}_{\text{mng}}$ 的特征值组成的对角矩阵。

接下来我们验证一下这样子得到的 β 符不符合传统 β 的定义。假设 $K = L$，且特征都是正交的，对于某个特征（因子）$k$：

$$
\begin{aligned}
    \frac{\Cov(\bm{r}_{t+1},\ \widehat{f}_{k,\ t+1})}{\Var(\widehat{f}_{k,\ t+1})} &= \frac{\bm{\Sigma}_{r} \bm{Z}_{k,\ t} \bm{\Gamma}_{\beta_k} \left(\bm{\Gamma}_{\beta_k}^{\top}\bm{Z}_{k,\ t}^{\top}\bm{Z}_{k,\ t} \bm{\Gamma}_{\beta_k} \right)^{-1}}{\left(\bm{\Gamma}_{\beta_k}^{\top}\bm{Z}_{k,\ t}^{\top}\bm{Z}_{k,\ t} \bm{\Gamma}_{\beta_k} \right)^{-1} \bm{Z}_{k,\ t}^{\top} \bm{\Sigma}_{r} \bm{Z}_{k,\ t} \left(\bm{\Gamma}_{\beta_k}^{\top}\bm{Z}_{k,\ t}^{\top}\bm{Z}_{k,\ t} \bm{\Gamma}_{\beta_k} \right)^{-1}} \\
    &= \frac{\bm{\Sigma}_{r}\bm{Z}_{k,\ t}}{\bm{Z}_{k,\ t}^{\top} \bm{\Sigma}_{r} \bm{Z}_{k,\ t}} \bm{Z}_{k,\ t}^{\top}\bm{Z}_{k,\ t} \\
\end{aligned}
$$

## Characteristics as Portfolio Weights &mdash; Managed Portfolio

## 参考文献

Kelly, B., Malamud, S., & Pedersen, L. H. (2023). Principal Portfolios. The Journal of Finance, 78(1), 347–387. https://doi.org/10.1111/jofi.13199

Kelly, B. T., Pruitt, S., & Su, Y. (2019). Characteristics are covariances: A unified model of risk and return. Journal of Financial Economics, 134(3), 501–524. https://doi.org/10.1016/j.jfineco.2019.05.001

Kozak, S., Nagel, S., & Santosh, S. (2020). Shrinking the cross-section. Journal of Financial Economics, 135(2), 271–292. https://doi.org/10.1016/j.jfineco.2019.06.008

Menchero, J., Orr, D. J., & Wang, J. (2011). The Barra US Equity Model (USE4) [Methodology Notes]. MSCI.
