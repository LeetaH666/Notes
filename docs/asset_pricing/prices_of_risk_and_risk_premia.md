# 风险价格与风险溢价

**风险价格（risk prices/prices of risk）是一个笼统的概念，因为风险的度量有很多种，在不同的语境下风险价格代表不同的东西。**

> Whether "price of risk" refers to the coefficient of the covariance or to the coefficient of the beta must be determined by context. &mdash;Back (2017, p.139)

**风险溢价（risk premia）指的是某个资产在剔除无风险收益后的收益率，即有风险的那部分，常常被表示为 $\E(R) - R_f$ 的形式。**

风险价格既可以出现在 SDF 的框架中，也可以出现在 β 表达式的框架中；而风险溢价则只在 β 表达式的框架中出现。**当两个框架同时出现时，通常因子的风险价格指 SDF 载荷，因子的风险溢价则指 β 表达式中 β 的系数。**

下面对这两个框架做一些统一的设定，并分别给出风险价格和风险溢价的例子。

## 设定

假设长度为 $T$ 的时间窗口内有 $K$ 个因子 $\bm{f} = (\bm{f_1},\ \bm{f_2},\ \cdots,\ \bm{f_{T}})^{\top}$，其中 $\bm{f_t} = (f_{1t},\ f_{2t},\ \cdots,\ f_{Kt})^{\top},\ t=1,\ 2,\ \cdots,\ T$。同时，考虑 $N$ 个 test assets（超额收益率）$\bm{R^{e}} = (\bm{R_1^{e}},\ \bm{R_2^{e}},\ \cdots,\ \bm{R_{T}^{e}})^{\top}$，其中 $\bm{R_t^{e}} = (R_{1t}^{e},\ R_{2t}^{e},\ \cdots,\ R_{Nt}^{e})^{\top}$。

### SDF

我们通常用因子来构造线性形式的 SDF $m_t$ 来满足 test assets 的定价条件：

$$
\begin{align}
&m_t = 1 - [\bm{f_t} - \E(\bm{f_t})]^{\top} \bm{b} \label{1} \\
&\text{s.t.}\quad \E(m_t \bm{R_t^{e}}) = \bm{0_{N}} \label{2}
\end{align}
$$

其中 $\bm{b}$ 为 **SDF 载荷（SDF loadings）**。

把 $\eqref{1}$ 式代入限制条件 $\eqref{2}$ 可以解得

$$
\begin{align}
\bm{\mu_{R^{e}}} = \bm{C} \bm{b} \label{3}\\
\end{align}
$$

其中 $\bm{\mu_{R^{e}}} := \E(\bm{R_t^{e}})$，$\bm{C}$ 为 $\bm{R_t^{e}}$ 与 $\bm{f_t}$ 之间的协方差矩阵。

从 $\eqref{3}$ 式我们可以看出，**如果用协方差作为风险的度量，$\bm{b}$ 即每单位风险对应的期望收益率，因此可以被称作因子的风险价格。**

> [!NOTE|label:注意]
> 以下 $\mu_{x}$ 均代表某一变量 $x$ 的期望，且期望默认消除变量的时间维度。

### β 表达式

在传统的因子模型中，test assets 的期望收益率可以写成

$$
\begin{equation}
\bm{\mu_{R^{e}}} = \bm{\beta} \bm{\lambda} \label{4} \\
\end{equation}
$$

其中 $\bm{\beta}$ 为资产在因子上的**风险暴露（risk exposure）**，$\bm{\lambda}$ 为因子的风险溢价。

仅从 $\eqref{4}$ 式我们是看不出为什么 $\bm{\lambda}$ 是风险溢价的，但**如果用 β 作为风险的度量，$\bm{\lambda}$ 其实也是每单位风险对应的期望收益率，因此也可以被称作因子的风险价格。**

当 SDF 的框架和 β 表达式的框架一同出现时，我们需要注意区分 $\bm{b}$ 和 $\bm{\lambda}$ 的名字，比如 Kozak 等（2020）的做法是将前者称作风险价格，后者称作风险溢价。

> Another important difference between our approach and much of this recent machine learning literature in asset pricing lies in the objective. Most papers focus on estimating **risk premia**, i.e., the extent to which a stock characteristic is associated with variation in expected returns. In contrast, we focus on estimation of **risk prices**, i.e., the extent to which the factor associated with a characteristic helps price assets by contributing to variation in the SDF. &mdash;Kozak et al. (2020, p.4)

下面我将通过介绍风险暴露的定义以及表达式，推导出 $\bm{\lambda}$ 为什么可以被称作因子的风险溢价。

#### 风险暴露

**风险暴露 $\bm{\beta}$ 是将收益率回归到因子得到的回归系数**：

$$
\begin{equation}
\bm{R_t^{e}} = \bm{a} + \bm{\beta} \bm{f_t} + \bm{\epsilon_t} \label{5}\\
\end{equation}
$$

其中 $\bm{a}$ 为截距项，$\bm{\epsilon_t}$ 为噪声向量。

因此在 OLS 假设下，$\bm{\beta} = (\bm{f^{\top}} \bm{f})^{-1} \bm{f^{\top}} \bm{R}$。<strong>当我们假设 $\bm{\mu_f} = \bm{0_{K}}$</strong>，风险暴露可以写成更为简洁的形式：

$$
\begin{equation}
\bm{\beta} = \bm{\Sigma_f^{-1}} \bm{C} \label{6} \\
\end{equation}
$$

其中 $\bm{\Sigma_f}$ 为因子之间的协方差矩阵。

#### 因子的风险溢价

先给出结论：**假设 $\bm{f}$ 中一个因子 $\bm{f_k}$ 是收益率（不是超额收益率），对应的 $\lambda_k$ 就是因子的风险溢价。**

对 $\eqref{5}$ 式取期望，我们有

$$
\begin{equation}
\bm{\mu_{R^{e}}} = \bm{a} + \bm{\beta} \bm{\mu_f} \label{7}\\
\end{equation}
$$

用 $\eqref{5}$ 式减去 $\eqref{7}$ 式，我们得到

$$
\begin{equation}
\bm{R_t^{e}} = \bm{\mu_{R^{e}}} + \bm{\beta} (\bm{f_t} - \bm{\mu_f}) + \bm{\epsilon_t} \label{8}\\
\end{equation}
$$

假设存在无风险收益率 $\bm{R^{f}} = (R_1^{f},\ R_2^{f},\ \cdots,\ R_{T}^{f})^{\top}$，$\bm{f_k} - \bm{R^{f}}$ 也是超额收益率，那么它同样应该被定价：

$$
\begin{equation}
f_{kt} - R_t^{f} = (\mu_k - R_t^{f}) + \bm{\beta_k} (\bm{f_t} - \bm{\mu_f}) + \epsilon_t \label{9}\\
\end{equation}
$$

其中 $\mu_k:= \E(\bm{f_k})$，$\bm{\beta_k}$ 是 $\bm{f_k} - \bm{R^{f}}$ 在不同因子上的风险暴露，是一个 $1 \times K$ 的行向量。

$\eqref{9}$ 式成立的条件为：$\bm{f_k} - \bm{R^{f}}$ 在 $\bm{f_k}$ 上的风险暴露 $\beta_{kk} = 1$ 而其他风险暴露为 $0$，这意味着

$$
f_{kt} - R_t^{f} = \beta_{kk} (f_{kt} - R_t^{f}) + \bm{\epsilon_t} \implies \mu_k - \mu_{R^{f}} = \beta_{kk} (\mu_k - \mu_{R^{f}})\\
$$

说明 $\bm{\beta_{k}}$ 在 $\eqref{4}$ 式中的系数 $\lambda_k = \mu_k - \mu_{R^{f}}$，即 $\bm{\lambda}$ 是因子的风险溢价。

以上推导都建立在**因子是收益率**的情况下，**当因子不是收益率时，$\bm{\lambda}$ 实际上并不是因子的风险溢价**，只是我们为了方便或者区分风险价格而统称它为风险溢价。

当因子是超额收益率时，我们可以很容易地证明 $\bm{\lambda}$ 就是因子的期望；而当因子不可交易时（比如 GDP），我们并不知道 $\bm{\lambda}$ 是什么。

> The price of risk corresponding to a **return factor** is the return's risk premium. The price of risk corresponding to an **excess return** is the mean of the excess return. In contrast, for **general factors**, the prices of risk are not determined by theory. &mdash;Back (2017, p.136)

## 区别与联系

> [!NOTE|label:注意]
> 以下我们将沿用大多数文献采用的方式，即用风险价格指代 $\bm{b}$，用风险溢价指代 $\bm{\lambda}$。

假设因子的期望均为 $0$，由 $\eqref{3}$、$\eqref{4}$、$\eqref{6}$ 式我们可以推出风险溢价与风险价格之间的关系：

$$
\begin{equation}
\bm{\lambda} = \bm{\Sigma_f} \bm{b} \label{10} \\
\end{equation}
$$

当因子之间是正交的，$\bm{\Sigma_f}$ 是对角阵，对于每个因子 $i$，$\lambda_i = 0$ 当且仅当 $b_i = 0$；当因子之间具有相关性，$\lambda_i$ 可以不为 $ 0$ 即使 $b_i = 0$，即因子 $i$ 的风险溢价可能来自于某个构成 SDF 的因子 $j$。

$\eqref{10}$ 式还可以被写成

$$
\begin{align}
\bm{\lambda} &= \E(\bm{f^{\top}} \bm{f}) \bm{b} = \E[\bm{f^{\top}} (\bm{f} \bm{b})] = - \E(\bm{f^{\top}} \bm{m}) \label{11} \\
\end{align}
$$

其中 $\bm{m} = (m_1,\ m_2,\ \cdots,\ m_{T})^{\top}$ 由不同时刻的 SDF 组成。

$\eqref{11}$ 式的意思是：**因子的风险溢价是因子“价格”的相反数**。如果一个因子的风险溢价是正的，那么它的价格理应是负的，因为我们假设了因子的期望为 $0$。

因此，从这个角度来说，**风险溢价捕捉的是因子是否被定价，而风险价格捕捉的是因子在定价中的贡献。**

> $\lambda_j$ captures whether factor $f_j$ is priced. ... $b_j$ captures whether $f_j$ is marginally useful in pricing assets, given the presence of other factors. &mdash;Cochrane (2009, p.242)

由于我们假设了因子的期望为 $0$，$\eqref{11}$ 式还可以被表示成

$$
\begin{equation}
\bm{\lambda} = - \Cov(\bm{f},\ \bm{m}) \\
\end{equation}
$$

对于每个因子 $i$，我们有 $\lambda_i = - \Cov(\bm{f_i},\ \bm{m})$，代表将 SDF **单独回归**到因子 $i$ 上的回归系数（和回归系数成比例）。因此**当我们看一个因子的风险溢价是否为 $0$ 时，实际上是在看它是否与 SDF 相关。**

而从 $\eqref{1}$ 式我们可以看出，$\bm{b}$ 代表着将 SDF **多元回归**到所有因子上的回归系数（和回归系数成比例）。因此**当我们看一个因子的风险价格是否为 $0$ 时，实际上在看有其他因子的情况下是否仍应该囊括这个因子。**

> $\lambda_j$ is proportional to the **single regression** coefficient of $m$ on $f_j$. $\lambda_j = 0$ asks the corresponding single regression coefficient question&mdash;"is factor $j$ correlated with the true discount factor?"
> 
> $b_j$ is the **multiple regression** coefficient of $m$ on $f_j$ given all the other factors. ... When you want to ask the question, "should I include factor $j$ given the other factors?" you want to ask the multiple regression question. &mdash;Cochrane (2009, p.242)

## 参考文献

Back, K. (Kerry). (2017). Asset pricing and portfolio choice theory (Second edition). Oxford University Press.

Cochrane, J. H. (2009). Asset pricing (Rev. ed). Princeton University Press.

Kozak, S., Nagel, S., & Santosh, S. (2020). Shrinking the cross-section. Journal of Financial Economics, 135(2), 271–292. https://doi.org/10.1016/j.jfineco.2019.06.008
