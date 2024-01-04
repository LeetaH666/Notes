# 2. 先验分布

> [!ATTENTION|label:注意]
> 首先明确一点，当我们提到先验分布时，我们在讨论的是数据分布中**参数的分布**，这意味着我们已经假设了数据分布的形式。

## 2.1 共轭先验

如果先验分布和后验分布是同一个分布形式，比如都是正态分布，那我们称这样的先验为**共轭先验（conjugate prior）**。通常的表述是一个分布是数据分布关于某参数的共轭分布。比如“正态分布是正态分布关于均值的共轭先验”的意思是：如果数据服从正态分布 $N(\mu,\ \sigma^{2})$，那么对均值 $\mu$ 这个参数做正态分布的先验，得到的后验同样也是正态分布。前一个“正态分布”指的是先验分布，后一个“正态分布”指的是数据分布。鉴于先验和后验都是针对数据分布的参数，对于不同的数据分布，**一个先验分布可能在一种数据分布下是共轭的，但在另一种数据分布下就不是共轭的了。**

**使用共轭先验的好处在于后验分布有解析形式**，这样可以方便地计算后验分布的期望、方差等统计量。**但共轭先验并不是必须的**，只要后验分布有解析形式，我们就可以使用后验分布的统计量来描述后验分布。

> [!EXAMPLE|label:常见的共轭先验]
> 分布中已知的参数用下标 $0$ 表示，比如 $N(\mu,\ \sigma_0^{2})$ 代表方差已知的正态分布。
> 
> <div class='centertable'>
> 
> |                 数据分布                  |           参数           |                       共轭先验                       |
> | :---------------------------------------: | :----------------------: | :--------------------------------------------------: |
> |           $\text{Bernoulli}(p)$           |           $p$            |                    $\text{Beta}$                     |
> |        $\text{Binomial}(n_0,\ p)$         |           $p$            |                    $\text{Beta}$                     |
> |           $\text{NB}(r_0,\ p)$            |           $p$            |                    $\text{Beta}$                     |
> |         $\text{Poisson}(\lambda)$         |        $\lambda$         |                    $\text{Gamma}$                    |
> |   $\text{Multinomial}(n,\ k,\ \bm{p})$    |       $k,\ \bm{p}$       |                  $\text{Dirichlet}$                  |
> |          $N(\mu,\ \sigma_0^{2})$          |          $\mu$           |                   $\text{Normal}$                    |
> |          $N(\mu_0,\ \sigma^{2})$          |       $\sigma^{2}$       | $\text{Inverse Gamma or Scaled Inverse Chi-Squared}$ |
> |           $N(\mu,\ \sigma^{2})$           |    $\mu,\ \sigma^{2}$    |            $\text{Normal-Inverse Gamma}$             |
> | $\mathcal{N}(\bm{\mu},\ \bm{\Sigma}_{0})$ |        $\bm{\mu}$        |             $\text{Multivariate Normal}$             |
> | $\mathcal{N}(\bm{\mu}_{0},\ \bm{\Sigma})$ |      $\bm{\Sigma}$       |               $\text{Inverse-Wishart}$               |
> |   $\mathcal{N}(\bm{\mu},\ \bm{\Sigma})$   | $\bm{\mu},\ \bm{\Sigma}$ |           $\text{Normal-Inverse-Wishart}$            |
> |       $\text{Exponential}(\lambda)$       |        $\lambda$         |                    $\text{Gamma}$                    |
> |     $\text{Gamma}(\alpha_0,\ \beta)$      |         $\beta$          |                    $\text{Gamma}$                    |
> |       $\text{IG}(\alpha_0,\ \beta)$       |         $\beta$          |                    $\text{Gamma}$                    |
> </div class='centertable'>

> [!NOTE|label:尚未清楚]
> 在网上看到两种说法：
> 
> 1. 所有分布都可以是共轭先验。
> 2. 所有指数族分布都有共轭分布。
> 
> 但没有人说所有分布都有共轭分布。

## 2.2 Jeffreys prior

Jeffreys prior 的定义与 Fisher information 有关，而 Fisher information 与 score 有关，score 又与 likelihood 有关，因此想要更好地理解 Jeffreys prior 需要从 likelihood 开始。

### 2.2.1 Likelihood

<strong>Likelihood（似然）</strong>形式上和数据的联合分布是一样的，但**自变量是参数而不是数据**。比如数据 $\bm{x}$ 的联合分布是 $f(\bm{x} \mid \bm{\theta})$，其中 $\bm{\theta}$ 为参数，而 likelihood 则是 $L(\bm{\theta} \mid \bm{x})$。

> [!EXAMPLE|label:举个例子]
> 假设数据 $\bm{x}$ 服从正态分布 $N(\mu,\ \sigma^{2})$，那么数据的联合分布是
>
> $$f(\bm{x} \mid \mu,\ \sigma^{2}) = (2 \pi \sigma^{2})^{-\frac{n}{2}} \exp \left( -\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_i - \mu)^{2} \right).$$
>
> 参数 $(\mu,\ \sigma^{2})$ 的 likelihood 是
>
> $$L(\mu,\ \sigma^{2} \mid \bm{x}) = (2 \pi \sigma^{2})^{-\frac{n}{2}} \exp \left( -\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_i - \mu)^{2} \right).$$

Likelihood 

### 2.2.2 Score

### 2.2.3 Fisher information

## 2.3 最大熵先验

## 2.3 Reference prior