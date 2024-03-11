# 测试/比较因子定价模型

## 因子定价模型

因子定价模型是用因子对资产的总收益率（或超额收益率）建模，以解释资产的期望收益率在截面上的差异。比如最广为人知的 CAPM 模型，它假设

$$
\E[\tilde{R}] - R_f = \frac{\Cov(\tilde{R},\ \tilde{R}_{m})}{\Var(\tilde{R}_{m})} (\E[\tilde{R}_{m}] - R_f), \tag{1}
$$

其中 $\tilde{R}$ 是任意资产的总收益率，$\tilde{R}_{m}$ 是市场组合的总收益率，$R_f$ 是无风险资产的总收益率。总收益率（gross return）就是投资 $1$ 块钱能带来多少的回报。带波浪线表示是一个随机变量，不带的则是一个常数。$\frac{\Cov(\tilde{R},\ \tilde{R}_{m})}{\Var(\tilde{R}_{m})}$ 就是我们常说的 $\beta$。

> [!NOTE|label:注意]
> 这里使用总收益率而不是收益率，是为了更好地将超额收益率区分开来，即超额收益率是 zero investment 的回报。

通常真正的市场组合是不为人知的，我们只能找到一个 proxy 来代替，比如市场指数。而如果不存在无风险资产的话，上式的 $R_f$ 还可以用 zero-beta rate $R_z$ 来代替：

$$
\E[\tilde{R}] - R_z= \frac{\Cov(\tilde{R},\ \tilde{R}_{m})}{\Var(\tilde{R}_{m})} (\E[\tilde{R}_{m}] - R_z),
$$

意思是如果存在和市场组合无关的资产（协方差为 $0$），那么它的期望总收益率就是 $R_z$。通过将资产总收益率投影到市场组合的总收益率上，我们可以得到

$$
\tilde{R} = \alpha + \beta \tilde{R}_{m} + \tilde{\varepsilon},
$$

其中 $\alpha = (1 - \beta) R_z$，$\tilde{\varepsilon}$ 是与市场组合总收益率无关且均值为 $0$ 的误差项。如果我们认为存在无风险资产，那么还可以将投影写成超额收益率的形式：

$$
\tilde{R} - R_f = \alpha + \beta (\tilde{R}_{m} - R_f) + \tilde{\varepsilon}, \tag{2}
$$

其中 $\tilde{R}_{m} - R_f$ 就是后来大家常用的市场因子。CAPM 告诉我们，对于任意资产，上式中的 $\alpha$ 应该为 $0$。因为如果 $\alpha \neq 0$，$(1)$ 式应该写成

$$
\E[\tilde{R}] - R_f = \alpha + \beta (\E[\tilde{R}_{m}] - R_f) \tag{3}
$$

因此 CAPM 提出后，人们就通过不同的方法来检验 CAPM 的 $\alpha$ 是否为 $0$。后来更多的因子定价模型被提出来，大家也同样会去检验这些模型的 $\alpha$ 是否为 $0$。而当因子定价模型多了之后，人们就开始考虑如何选择因子，或者如何比较不同的因子定价模型。

## 可交易因子与不可交易因子

一般地，一个单因子定价模型可以写成

$$
\E[\tilde{R}] - R_f = \beta \lambda, \tag{4}
$$

其中 $\beta := \frac{\Cov(\tilde{R},\ \tilde{F})}{\Var(\tilde{F})}$ 是因子载荷（因子暴露），$\tilde{F}$ 是因子值，$\lambda$ 是因子的风险溢价（风险价格），也就是投资 $1$ 块钱，在 $1$ 单位的风险（$\beta = 1$）下可以带来多少回报。我们通常将因子 $\tilde{F}$ 分为可交易因子和不可交易因子。可交易因子又分为两种：总收益率和超额收益率。不可交易因子大多是一些宏观指标（例如 GDP），或者大宗商品指数（例如原油指数）。我们来看看它们的区别。

当因子是总收益率时，它同样可以作为 $(4)$ 中的资产总收益率 $\tilde{R}$，这时候 $\beta = \frac{\Cov(\tilde{F},\ \tilde{F})}{\Var(\tilde{F})} = 1$，则 $\lambda = \E[\tilde{F}] - R_f$；当因子是超额收益率时，我们可以将它写成 $\tilde{F} = \tilde{R}_{L} - \tilde{R}_{S}$，其中 $\tilde{R}_{L}$ 和 $\tilde{R}_{S}$ 都是资产总收益率，因此也可以出现在 $(4)$ 式的左边：

$$
\begin{cases}
    \E[\tilde{R}_{L}] - R_f = \beta_{L} \lambda, \\
    \E[\tilde{R}_{S}] - R_f = \beta_{S} \lambda,
\end{cases} \implies
\E[\tilde{R}_{L}] - \E[\tilde{R}_{S}] = (\beta_{L} - \beta_{S}) \lambda
$$

根据定义，$\beta_{L} - \beta_{S} = \frac{\Cov(\tilde{R}_{L},\ \tilde{F}) - \Cov(\tilde{R}_{S},\ \tilde{F})}{\Var(\tilde{F})} = \frac{\Cov(\tilde{R}_{L} - \tilde{R}_{S},\ \tilde{F})}{\Var(\tilde{F})} = 1$，因此 $\lambda = \E[\tilde{R}_{L}] - \E[\tilde{R}_{S}] = \E[\tilde{F}]$。

对于可交易因子来说，风险溢价 $\lambda$ 是有定义的，是可以只通过因子值 $\tilde{F}$ 估计出来的。但对于不可交易因子来说，由于它既不是总收益率也不是超额收益率，因此它没法写到 $(4)$ 式的左边，也就没法直接写出对应的风险溢价 $\lambda$。因此对于不可交易因子来说，我们需要用其他的方式来估计它的风险溢价，比如使用截面回归。如果我们能够估计出每个资产的 $\beta$，那么我们可以将 $\E[\tilde{R}] - R_f$ 回归到 $\beta$ 上，从而得到 $\lambda$。但这就涉及到一个问题：如何选择 test assets $\tilde{R}$。选择不同的 test assets 会得到不同的结果，因此理论中我们更多地是讨论可交易因子，但实际中不可交易因子也是很重要的。

如果定价模型中有多个因子，我们可以将 $(4)$ 式拓展成

$$
\E[\tilde{R}] - R_f = \bm{\beta}^{\top} \bm{\lambda}, \tag{5}
$$

其中 $\bm{\beta} := \Var(\tilde{\bm{F}})^{-1} \Cov(\tilde{R},\ \tilde{\bm{F}})$ 是因子载荷向量，$\bm{\lambda}$ 是因子的风险溢价向量。你可能会注意到，当因子之间有相关性时，即使某一个因子 $\tilde{F}_{1}$ 是可交易因子，我们也不能直接用它自身的期望来估计它的风险溢价，但我们仍然可以只用 $\tilde{\bm{F}}$ 就将它的风险溢价表示出来。或者我们可以通过将因子做正交化处理，从而让因子之间失去相关性，那么就可以直接用因子的期望来估计它的风险溢价。

当然，以上都是我们假设模型正确的情况。在检验模型是否正确的时候，我们需要先假设一个更一般的模型：

$$
\E[\tilde{R}] - R_f = \alpha + \bm{\beta}^{\top} \bm{\lambda}, \tag{6}
$$

通过检验多出来的 $\alpha$ 是否等于 $0$ 来判断定价模型是否正确。当 $\alpha \neq 0$ 时，因子的风险溢价不能简单地写成因子期望的形式，这时我们会有其他方法来估计，后面会再仔细介绍。

## 检验因子定价模型会遇到的问题

在多因子的框架下，检验因子定价模型是否正确，就是检验 $(6)$ 式中的 $\alpha$ 是否为 $0$。对于可交易因子，我们可以直接写成投影形式：

$$
\tilde{R} - R_f = \alpha + \bm{\beta}^{\top} \tilde{\bm{F}} + \tilde{\varepsilon}, \tag{7}
$$

通过时序回归来检验每一个资产的 $\alpha$ 是否为 $0$。但这会遇到以下两个问题：

1. 投影只能保证 $\tilde{\varepsilon}$ 的均值为 $0$，但不能保证时序上没有相关性，也不能保证同方差，因此回归得到的标准误可能是不准确的；
2. 单独检验每个资产的 $\alpha$ 是否为 $0$，会遇到多重检验问题。

> [!TIP|label:多重检验问题]
> 假设我们对每个资产都做独立的检验，原假设为 $\alpha = 0$，假设检验的 level 是 $5\%$，即错误拒绝原假设的概率是 $5\%$，那么当我们检验 $100$ 个资产时，即使每一个都通过了检验，平均我们也会有 $5$ 个资产是错误拒绝了原假设的，至少有一个资产错误拒绝了原假设的概率是 $1 - (95\%)^{100} \approx 99.4\%$。这就是多重检验问题。

对于问题 1，我们可以通过使用考虑残差时序相关性以及异方差的标准误来解决，比如 Newey-West ([1987](#NW1987)) 标准误；还可以使用 GMM ([1982](#H1982)) 来替代 OLS。对于问题 2，我们有两种办法解决，一种是使用 Fama-Macbeth ([1973](#FM1973)) 两步法将多重检验转化为单一检验，另一种是使用一些多重检验的统计量，比如 GRS ([1989](#GRS1989)) 检验。

对于不可交易因子来说，由于不能写成投影形式 $(7)$ 来检验，我们需要多做一步截面回归，也就是将 $(6)$ 式的 LHS 回归到时序回归估计出来的 $\bm{\beta}$ 上，此时 $\alpha$ 是误差而不是截距。然而截面回归又会遇到以下两个问题：

1. 截面回归的残差 $\widehat{\alpha}$ 存在明显的相关性（且异方差）；
2. $\bm{\beta}$ 是由时序回归估计出来的，回归到一个估计值上存在 EIV (Errors-In-Variables) 问题。

对于问题 1，我们依旧可以使用 GMM ([1982](#H1982)) 来替代 OLS。对于问题 2，可以使用 Shanken ([1992](#S1992)) 修正来解决。Fama-Macbeth ([1973](#FM1973)) 两步法中也有一步是截面回归，但它通过取平均的方式缓解了问题 1，而问题 2 则没有解决。

然而不管是截面回归还是多重检验，我们还要面临一个更加实际的问题：test assets 应该如何选择。如果选择所有个股，则个股的高波动会导致估计误差的增加，个股的数量多会导致需要估计的参数多，而且个股的 panel 是不平衡的。一般大家会选择使用组合作为 test assets，这样就能一次性解决这三个问题，但选择什么样的组合仍然是我们需要决定的。过去大量的实证文章会提出各种各样的因子，然后 test assets 选择 Fama & French ([1992](#FF1992)) 中对市值和账面市值比进行 conditional sort 的 $5 \times 5 = 25$ 个组合，说自己的因子能定价这 25 个组合，证明自己的模型是正确的定价模型。这显然有悖直觉，于是 Lewellen et al. ([2010](#LNS2010)) 对这种实证方法进行了批判。

## A Skeptical Appraisal of Asset Pricing Tests


问题：

- $\alpha$ 的截面相关性
    - GRS
- test assets 如何选择
    - A Skeptical Appraisal of Asset Pricing Tests
    - Which Alpha、Choosing Factors
    - 不需要选择（贝叶斯）：Comparing Asset Pricing Models、On Comparing Asset Pricing Models
- 因子动物园
    - Taming the Factor Zoo
- EIV 问题
    - Optimal Cross-Sectional Regression
- 遗漏变量

## 时序回归

## 截面回归

## Fama-MacBeth 两步回归

## GMM

## Shanken’s T^2^ Test

## GRS Test

## HJ Bound

## ... and the Cross-Section of Expected Returns

## Which Alpha

## Choosing Factors

## Comparing Asset Pricing Models

## Taming the Factor Zoo

## Omitted Factors

## Optimal Cross-Sectional Regression

## 参考文献

Back, K. (Kerry). (2017). *Asset pricing and portfolio choice theory* (Second edition). Oxford University Press.

<span id="FM1973">Fama, E. F., & MacBeth, J. D. (1973). Risk, Return, and Equilibrium: Empirical Tests. *Journal of Political Economy*, 81(3), 607–636. https://doi.org/10.1086/260061</span>

<span id="GRS1989">Gibbons, M. R., Ross, S. A., & Shanken, J. (1989). A Test of the Efficiency of a Given Portfolio. *Econometrica*, 57(5), 1121. https://doi.org/10.2307/1913625</span>

<span id="H1982">Hansen, L. P. (1982). Large Sample Properties of Generalized Method of Moments Estimators. *Econometrica*, 50(4), 1029. https://doi.org/10.2307/1912775</span>

<span id="LNS2010">Lewellen, J., Nagel, S., & Shanken, J. (2010). A skeptical appraisal of asset pricing tests. *Journal of Financial Economics*, 96(2), 175–194. https://doi.org/10.1016/j.jfineco.2009.09.001</span>

<span id="NW1987">Newey, W. K., & West, K. D. (1987). A Simple, Positive Semi-Definite, Heteroskedasticity and Autocorrelation Consistent Covariance Matrix. *Econometrica*, 55(3), 703–708. JSTOR. https://doi.org/10.2307/1913610</span>

<span id="S1992">Shanken, J. (1992). On the Estimation of Beta-Pricing Models. *The Review of Financial Studies*, 5(1), 1–33. https://doi.org/10.1093/rfs/5.1.1</span>
