# Bayesian Solutions for the Factor Zoo: We Just Ran Two Quadrillion Models

## 论文信息

### 作者

Svetlana Bryzgalova, Jiantao Huang, and Christian Julliard

Bryzgalova 是伦敦商学院的助理教授，Huang 是香港大学的助理教授，Julliard 是伦敦政治经济学院（LSE）的副教授。前两位博士都就读于 LSE。

### 收录情况

JF2023

## 解决什么问题

在高维设定（factor zoo）下解决弱因子（weak factors）识别问题与过拟合问题，同时给出一个不管在样本内还是样本外定价能力都强的 SDF。

## 前置知识

### 频率派估计 SDF

#### 线性形式的 SDF

假设有 $K$ 个因子 $\bm{f_t} = (f_{1t},\ f_{2t},\ \cdots,\ f_{Kt})^{\top},\ t=1,\ 2,\ \cdots,\ T$ 和 $N$ 个 test assets（多空组合）$\bm{R_t} = (R_{1t},\ R_{2t},\ \cdots,\ R_{Nt})^{\top}$，我们通常用因子来构造线性形式的 SDF $m_t$ 来满足 test assets 的定价条件：

$$
\begin{align}
&m_t = 1 - [\bm{f_t} - \E(\bm{f_t})]^{\top} \bm{\lambda_f} \label{1} \\
&\text{s.t.}\quad \E(m_t \bm{R_t}) = \bm{0_{N}} \label{2}
\end{align}
$$

其中 $\bm{\lambda_f}$ 为 SDF 载荷，也被称作因子的**风险价格（prices of risk）**。

> 为什么叫做风险价格？

> [!NOTE|label:注意]
> 在 [Shrinking the cross-section](papers/shrinking_the_cross-section.md#sdf-系数与-pca) 中，用因子构造的 SDF 用于检验因子对应的组合，而这里没有这样做是因为这篇的**因子包括可交易的和不可交易的**，因此 test assets 与因子并不对应。

把 $\eqref{1}$ 式代入限制条件 $\eqref{2}$ 可以解得
$$
\begin{align}
\bm{\mu_{R}} = \bm{C_f} \bm{\lambda_f} \label{3}\\
\end{align}
$$

其中 $\bm{\mu_{R}} := \E(\bm{R_t})$，$\bm{C_f}$ 为 $\bm{R_t}$ 与 $\bm{f_t}$ 之间的协方差矩阵。

> [!NOTE|label:注意]
> 以下 $\mu_{x}$ 均代表某一变量 $x$ 的期望，$\overline{x}$ 均代表某一变量 $x$ 的样本均值。

如果 $\bm{C_f}$ 可逆，由 $\eqref{3}$ 式可得 $\bm{\lambda_f} = \bm{C_f^{-1}}  \bm{\mu_{R}}$。由于 $\bm{C_f}$ 是实对称矩阵，通过写成 $\bm{\lambda_f} = (\bm{C_f^{\top}} \bm{C_f})^{-1} \bm{C_f} \bm{\mu_{R}}$，我们发现因子的风险价格可以通过截面回归得到：

$$
\begin{equation}
\bm{\mu_{R}} = \lambda_c \bm{1_{N}} + \bm{C_f} \bm{\lambda_f} + \bm{\alpha} = \bm{C} \bm{\lambda} + \bm{\alpha}
\end{equation}
$$

其中 $\bm{C} := (\bm{1_{N}},\ \bm{C_f})$，$\bm{\lambda^{\top}} := (\lambda_c,\ \bm{\lambda_f^{\top}})$。$\lambda_c$ 为平均定价误差（average mispricing），$\bm{\alpha}$ 为特质误差，即每个 test assets 在平均定价误差外的定价误差。从回归的角度来看，**实际上 $\lambda_c$ 是截距项，$\bm{\alpha}$ 是误差项。**

#### GMM

上述截面回归的解通常可以用 <strong>GMM（Generalized Method of Moments，广义矩估计）</strong>得到。一般我们假设协方差矩阵的估计是准确的，且 $\bm{\alpha} = \bm{0_{N}}$，于是对因子的期望和收益率的期望有如下矩条件：

$$
\E[\bm{g_t}(\lambda_c,\ \bm{\lambda_f},\ \bm{\mu_f})] = 
\E \begin{bmatrix} \bm{R_t} - \lambda_c \bm{1_{N}} - \bm{R_t} (\bm{f_t} - \bm{\mu_f})^{\top} \bm{\lambda_f} \\ \bm{f_t} - \bm{\mu_f} \\\end{bmatrix} = \begin{bmatrix}	\bm{0_{N}} \\	\bm{0_{K}} \\\end{bmatrix}
$$

可以看到参数的数量为 $2 K + 1$，而矩条件的数量是 $N + K$，当 $N > K + 1$ 时，矩条件数量大于参数数量，我们基本上得不到准确的解。GMM 为了处理这样的过度识别（overidentification）问题，引入了矩条件的权重，对更应该限制的条件给予更大的权重。因此 GMM 的目标函数为

$$
\begin{equation}
\underset{\lambda_c,\ \bm{\lambda_f},\ \bm{\mu_f}}{\min} ~ \bm{g_{T}}(\lambda_c,\ \bm{\lambda_f},\ \bm{\mu_f})^{\top} \bm{W} \bm{g_{T}}(\lambda_c,\ \bm{\lambda_f},\ \bm{\mu_f}) \label{5}
\end{equation}
$$

其中 $\bm{g_{T}}(\lambda_c,\ \bm{\lambda_f},\ \bm{\mu_f}) := \frac{1}{T} \sum\limits_{t=1}^{T} \bm{g_t}(\lambda_c,\ \bm{\lambda_f},\ \bm{\mu_f})$，$\bm{W}$ 控制矩条件的权重。

> [!TIP|label:提示]
> 使用权重矩阵会让某些条件权重变小，相当于减少了条件数量，因此能改善过度识别问题。

#### GLS

对于 OLS 和 GLS（Generalized Least Squares，广义最小二乘），权重矩阵分别为

$$
\bm{W_{\text{OLS}}} = \begin{bmatrix}	\bm{I_{N}} & \bm{0_{N \times K}} \\	\bm{0_{K \times N}} & \kappa \bm{I_{K}} \\\end{bmatrix},\quad
\bm{W_{\text{GLS}}} = \begin{bmatrix}	\bm{\Sigma_{R}^{-1}} & \bm{0_{N \times K}} \\	\bm{0_{K \times N}} & \kappa \bm{I_{K}} \\\end{bmatrix}
$$

其中 $\kappa > 0$ 是一个很大的常数来保证 $\bm{\hat{\mu}_f} = \frac{1}{T} \sum\limits_{t=1}^{T} \bm{f_t}$，$\bm{\Sigma_{R}}$ 是收益率的协方差矩阵。

由 GMM 目标函数 $\eqref{5}$ 解出来的估计分别为

$$
\bm{\hat{\lambda}_{\text{OLS}}} = \left(\bm{\hat{C}^{\top}} \bm{\hat{C}} \right) \bm{\hat{C}^{\top}} \bm{\overline{R}},\quad \bm{\hat{\lambda}_{\text{GLS}}} = \left(\bm{\hat{C}^{\top}} \bm{\Sigma_{R}^{-1}} \bm{\hat{C}} \right) \bm{\hat{C}^{\top}} \bm{\Sigma_{R}^{-1}} \bm{\overline{R}}
$$

<strong>不同的权重矩阵从回归的角度来看其实是不同的残差分布假设。</strong>对于 OLS 来说，我们假设残差服从 iid 的正态分布，也就是 $\bm{\alpha} \sim \mathcal{N}(\bm{0_{N}},\ \sigma^{2}\bm{I_{N}})$；而 **GLS 则是考虑了截面上残差的相关性，即假设 $\bm{\alpha} \sim \mathcal{N}(\bm{0_{N}},\ \sigma^{2} \bm{\Sigma_{R}})$。**

> 协方差矩阵为什么要乘 $\sigma^{2}$？收益率的协方差和残差的协方差真的是一个东西吗？

## 贝叶斯估计 SDF

假设在 $K$ 个因子中有 $K_1$ 个可交易的因子和 $K_2$ 个不可交易的因子，记 $\bm{f_t} = \left(\bm{f_t^{\top}},\ \bm{f_t^{\top}} \right) ^{\top}$，$\bm{f_t^{\top}}$ 为可交易的因子，$\bm{f_t^{\top}}$ 为不可交易的因子。令 $\bm{Y_t}$ 表示因子和 test assets 收益率的并，由于可交易的因子其实也可以作为 test assets 的收益率，我们不用重复列出，因此 $\bm{Y_t^{\top}} := \left(\bm{R_t^{\top}},\ \bm{f_t^{\top}} \right) ^{\top}$ 是一个 $N + K_2$ 维的向量。

假设 $\bm{Y_t} \overset{\text{i.i.d.}}{\sim} \mathcal{N}(\bm{\mu_{Y}},\ \bm{\Sigma_{Y}})$，由此可以固定似然函数为

$$
p\left(\bf{Y} \mid \boldsymbol{\mu}_{\mathbf{Y}}, \boldsymbol{\Sigma}_{\mathbf{Y}}\right) \propto\left|\boldsymbol{\Sigma}_{\mathbf{Y}}\right|^{-\frac{T}{2}} \exp \left\{-\frac{1}{2} \operatorname{tr}\left[\boldsymbol{\Sigma}_{\mathbf{Y}}^{-1} \sum_{t=1}^T\left(\mathbf{Y}_{\mathbf{t}}-\boldsymbol{\mu}_{\mathbf{Y}}\right)\left(\boldsymbol{Y}_{\mathbf{t}}-\boldsymbol{\mu}_{\mathbf{Y}}\right)^{\top}\right]\right\}
$$

从贝叶斯的角度，我们需要对参数有一些先验假设，因此作者使用了一个 NIW（Normal Inverse Wishart）的扩散先验（diffuse prior）$\pi(\bm{\mu_{Y}},\ \bm{\Sigma_{Y}}) \propto \left\vert \bm{\Sigma_{Y}} \right\vert^{-\frac{p+1}{2}} $，在这个先验下的参数后验为

$$

$$

> [!TIP|label:提示]
> 扩散先验又被称为无信息先验（uninformative prior），指分布比较平坦的先验。均匀分布是最简单的扩散先验，NIW 也可以作为扩散先验。这里使用 NIW 是因为对于服从多元正态的似然函数，NIW 是[共轭](/papers/shrinking_the_cross-section.md#先验分布、后验分布与共轭分布)的。

### 当模型完全正确，即 $\bm{\alpha} = \bm{0_{N}}$

作者证明了，在任意的扩散先验下，风险价格 $\bm{\lambda}$ 的后验分布是一个 Dirac 分布，也就是说 $\bm{\lambda} = (\bm{C^{\top}} \bm{C})^{-1} \bm{C^{\top}} \bm{\mu_{R}}$ 是一个常数向量，因此通过从 NIW 中抽样 $\bm{\mu_{Y}}$ 和 $\bm{\Sigma_{Y}}$ 并根据数据更新后验即可得到确定的 $\bm{\lambda}$。

为什么用这种方法可以识别弱因子呢？因为尽管在每次抽样得到的 $\bm{\lambda}$ 中，弱因子对应的风险价格 $\bm{\lambda_{(j)}} = (\bm{C_{(j)}^{\top}} \bm{C_{(j)}})^{-1} \bm{C_{(j)}^{\top}} \bm{\mu_{R (j)}}$ 会因为 $(\bm{C_{(j)}^{\top}} \bm{C_{(j)}})^{-1}$ 的 near singularity 而变得很高，每次抽样这个风险价格会在正负之间切换，因此最终得到的置信区间是倾向于以 0 为中心的。

GLS 同理。

### 当允许有 $\bm{\alpha}$

