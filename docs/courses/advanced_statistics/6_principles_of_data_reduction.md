# 6. Principles of Data Reduction

## 6.1 Introduction

Suppose we want to use the information in a sample $\bm{X} = (X_1,\ X_2,\ \cdots,\ X_n)$ to make inferences about an unknown parameter $\theta$. If the sample size $n$ is large, then the observed sample $\bm{x} = (x_1,\ x_2,\ \cdots,\ x_n)$ is a long list of numbers that may be hard to interpret. We might wish to summarize the information in a sample by determining a few ky features of the sample values. This is usually done by computing statistics, such as the sample mean, the sample variance, order statistics and so on. Any statistic, $T(\bm{X})$, defines a form of *data reduction* or *data summary*.

We will study 3 principles of data reduction: 

1. *The Sufficiency Principle*: promotes a method of data reduction that does not discard information about $\theta$ while achieving summarization of the data;
2. *The Likelihood Principle*: describes a function of the parameter, determined by the observed sample, that contains all the information about $\theta$ that is available from the sample;
3. *The Equivariance Principle*: describes yet another method of data reduction that still preserves some important features of the model.

## 6.2 The Sufficiency Principle

> [!DEFINITION|label:Sufficiency Principle]
> If $T(\bm{X})$ is a *sufficient statistic* for $\theta$, then any inference about $\theta$ should depend on the sample $\bm{X}$ only through the value $T(\bm{X})$, i.e., if $\bm{x}$ and $\bm{y}$ are 2 sample points s.t. $T(\bm{x}) = T(\bm{y})$, then the inference about $\theta$ should be the same whether $\bm{X} = \bm{x}$ or $\bm{X} = \bm{y}$ is observed.

### 6.2.1 Sufficient Statistics

> [!DEFINITION]
> A statistic $T(\bm{X})$ is a **sufficient statistic** for $\theta$ if the conditional distribution of the sample $\bm{X}$ given the value of $T(\bm{X})$ does *not* depend on $\theta$.

> [!THEOREM]
> If $p(\bm{x} \mid \theta)$ is the joint pdf or pmf of $\bm{X}$ and $q(t \mid \theta)$ is the pdf or pmf of $T(\bm{X})$, then $T(\bm{X})$ is a *sufficient statistic* for $\theta$ if, $\forall \bm{x}$ in the sample space, the raio $\frac{p(\bm{x} \mid \theta)}{q(T(\bm{x}) \mid \theta)}$ does *not* depend on $\theta$.

> [!EXAMPLE|label:Binomial sufficient statistic]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. Bernoulli random variables with parameter $\theta$, $0 < \theta < 1$. We will show that $T(\bm{X}) = \sum_{i=1}^{n} X_{i}$ is a sufficient statistic for $\theta$. Note that the statistic $T(\bm{X})$ counts the number of $X_{i}$s that equal $1$, so $T(\bm{X})$ has a $\text{Binomial}(n,\ \theta)$ distribution. Denote the observed statistic $T(\bm{x})$ as $t$, then the ratio of pmfs is 
>
> $$\begin{aligned} \frac{p(\bm{x} \mid \theta)}{q(T(\bm{x}) \mid \theta)} &= \frac{\prod_{i=1}^{n} \theta^{x_{i}} (1 - \theta)^{1 - x_{i}}}{\binom{n}{t} \theta^{t} (1 - \theta)^{n - t}} \\ &= \frac{\theta^{t} (1 - \theta)^{n - t}}{\binom{n}{t} \theta^{t} (1 - \theta)^{n - t}} \\ &= \frac{1}{\binom{n}{t}}, \end{aligned}$$
>
> which does not depend on $\theta$. This means $T(\bm{X})$ is a sufficient statistic for $\theta$.

 <span id="normal_example"></span>

> [!EXAMPLE|label:Normal sufficient statistic]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. $N(\mu,\ \sigma^{2})$, where $\sigma^{2}$ is known. We will show that $T(\bm{X}) := \overline{X} = \frac{1}{n} \sum_{i=1}^{n} X_{i}$ is a sufficient statistic for $\mu$. The joint pdf of the sample $\bm{X}$ is 
>
> $$\begin{aligned} f(\bm{x} \mid \mu) &= \prod_{i=1}^{n} \frac{1}{\sqrt{2 \pi \sigma^{2}}} \exp \left[-\frac{(x_{i} - \mu)^{2}}{2 \sigma^{2}} \right] \\ &= \left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[-\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_{i} - \mu)^{2} \right] \\ &= \left( \frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[ -\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_{i} - \overline{x} + \overline{x} - \mu)^{2} \right] \\ &= \left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[ -\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2} - \frac{n(\overline{x} - \mu)^{2}}{2 \sigma^{2}} \right] \\ \end{aligned}$$
>
> Recall that the sample mean $\overline{X} \sim N\left(\mu,\ \frac{\sigma^{2}}{n} \right)$, then the ratio of pdfs is 
>
> $$\begin{aligned} \frac{f(\bm{x} \mid \theta)}{q(T(\bm{x}) \mid \theta)} &= \frac{\left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[ -\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2} - \frac{n(\overline{x} - \mu)^{2}}{2 \sigma^{2}} \right]}{\frac{1}{\sqrt{2 \pi \sigma^{2} / n}} \exp \left[ -\frac{(\overline{x} - \mu)^{2}}{2 \sigma^{2} / n} \right]} \\ &= \frac{\left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n - 1}}{\sqrt{n}} \exp \left[ -\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2} \right], \end{aligned}$$
>
> which does not depend on $\mu$. This means the sample mean is a sufficient statistic for $\mu$.

> [!EXAMPLE|label:Sufficient order statistics]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. from a pdf $f$. The joint pdf of the sample is given by 
>
> $$f(\bm{x}) = \prod_{i=1}^{n} f(x_i) = \prod_{i=1}^{n} f(x_{(i)}),$$
>
> where $x_{(1)} \leqslant x_{(2)} \leqslant \cdots \leqslant x_{(n)}$ are the observed order statistics. Then it is easy to see that the order statistics $(X_{(1)},\ X_{(2)},\ \cdots,\ X_{(n)})$ are *a* sufficient statistic. Note that there is no data reduction here.

Another way and the *most useful* way to find out sufficient statistics is to use the *Factorization Theorem*.

> [!THEOREM|label:Factorization Theorem]
> Let $f(\bm{x} \mid \theta)$ denote the joint pdf or pmf of a sample $\bm{X}$. A statistic $T(\bm{X})$ is a sufficient statistic for $\theta$ *iff* $\exists $ functions $g(t \mid \theta)$ and $h(\bm{x})$ s.t., $\forall \bm{x}$ and $\forall \theta$, 
>
> $$f(\bm{x} \mid \theta) = g(T(\bm{x}) \mid \theta) h(\bm{x}).$$

> [!EXAMPLE|label:Normal sufficient statistic（continued）]
> From the [example before](#normal_example) we have known that the joint pdf of Normal sample (conditional on $\mu$) can be written as 
>
> $$f(\bm{x} \mid \mu) = \left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[-\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2} - \frac{n(\overline{x} - \mu)^{2}}{2 \sigma^{2}} \right].$$
>
> This can be factored as 
>
> $$f(\bm{x} \mid \mu) = \left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[-\frac{\sum_{i=1}^{n} (x_{i} - \overline{x})^{2}}{2 \sigma^{2}} \right] \exp \left[- \frac{n(\overline{x} - \mu)^{2}}{2 \sigma^{2}} \right].$$
>
> Define 
> $$g(T(\bm{x}) \mid \mu) = \exp \left[- \frac{n(\overline{x} - \mu)^{2}}{2 \sigma^{2}} \right]$$
> 
> and 
> 
> $$h(\bm{x}) = \left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[-\frac{\sum_{i=1}^{n} (x_{i} - \overline{x})^{2}}{2 \sigma^{2}} \right],$$
> 
> we can conclude that the sample mean is a sufficient statistic for $\mu$ by the Factorization Theorem.

> [!EXAMPLE|label:Uniform sufficient statistic]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. sample from the discrete Uniform distribution on $1,\ 2,\ \cdots,\ \theta$. The pmf of $X_{i}$ is 
>
> $$f(x \mid \theta) = \frac{1}{\theta},\quad x=1,\ 2,\ \cdots,\ \theta.$$
>
> Then, the joint pmf of $X_1,\ X_2,\ \cdots,\ X_n$ is given by 
>
> $$f(\bm{x} \mid \theta) = \theta^{-n},\quad x_i \in \{1,\ 2,\ \cdots,\ \theta\} \text{ for } i=1,\ 2,\ \cdots,\ n.$$
>
> The restriction that “$x_i \in \{1,\ 2,\ \cdots,\ \theta\} \text{ for } i=1,\ 2,\ \cdots,\ n$” can be re-expressed as “$x_i \in \{1,\ 2,\ \cdots\} \text{ for } i=1,\ 2,\ \cdots,\ n$ and $\underset{i}{\max} ~ x_i \leqslant \theta$”. If we define $T(\bm{x}) = \underset{i}{\max} ~ x_i$, and define 
>
> $$h(x) = \begin{cases} 1,\ &x_i \in \left\{1,\ 2,\ \cdots \right\} \text{ for } i=1,\ 2,\ \cdots,\ n \\ 0,\ &\text{otherwise}, \end{cases}$$
>
> as well as 
>
> $$g(t \mid \theta) = \begin{cases} \theta^{-n},\ &t\leqslant \theta \\ 0,\ &\text{otherwise}, \end{cases}$$
>
> then it is easily verified that $f(\bm{x} \mid \theta) = g(T(\bm{x}) \mid \theta) h(\bm{x}),\ \forall x$ and $\forall \theta$. Thus, the largest order statistic is a sufficient statistic for $\theta$.

> [!EXAMPLE|label:Normal sufficient statistic for both parameters]
> Assume that $X_1,\ X_2,\ \cdots,\ X_n$ are i.i.d. $N(\mu,\ \sigma^{2})$ with both $\mu$ and $\sigma^{2}$ unknown. So the parameter vector is $\bm{\theta} = (\mu,\ \sigma^{2})$. In the [example before](#normal_example) we have known that the likelihood function is 
>
> $$f(\bm{x} \mid \mu,\ \sigma^{2}) = \left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[ -\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2} - \frac{n(\overline{x} - \mu)^{2}}{2 \sigma^{2}} \right],$$
>
> which depends on the sample $\bm{x}$ only through 2 values $T_1(\bm{x}) = \overline{x}$ and $T_2(\bm{x}) := s^{2} = \frac{1}{n - 1}\sum_{i=1}^{n} (x_i - \overline{x})^{2}$. Thus, we can define $h(\bm{x}) = 1$ and 
>
> $$\begin{aligned} g(\bm{t} \mid \bm{\theta}) &= g(t_1,\ t_2 \mid \mu,\ \sigma^{2}) \\ &= \left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[ -\frac{(n - 1) t_2 + n (t_1 - \mu)^{2}}{2 \sigma^{2}} \right]. \end{aligned}$$
>
> By the Factorization Theorem, the sample mean and sample variance are a sufficient statistic for $(\mu,\ \sigma^{2})$.

<span id="theorem6_2_10"></span>

> [!THEOREM]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. observations from a pdf or pmf $f(x \mid \bm{\theta})$ that belongs to an exponential family given by 
>
> $$f(x \mid \bm{\theta}) = h(x) c(\bm{\theta}) \exp \left(\sum_{i=1}^{k} w_i(\bm{\theta}) t_i(x) \right),$$
>
> where $\bm{\theta} = (\theta_1,\ \theta_2,\ \cdots,\ \theta_d),\ d \leqslant k$. Then 
>
> $$T(\bm{X}) = \left(\sum_{j=1}^{n} t_1(\bm{X}_j),\ \cdots,\ \sum_{j=1}^{n} t_k(\bm{X}_j) \right)$$
>
> is a *sufficient statistic* for $\bm{\theta}$.

### 6.2.2 Minimal Sufficient Statistics

For a fixed family of distribution, many sufficient statistics exist. We need to find the one that achieves the maximal data reduction.

> [!DEFINITION]
> A sufficient statistic $T(\bm{X})$ is called a **minimal sufficient statistic** if, for any other sufficient statistic $T'(\bm{X})$, $\exists $ a function $g$ s.t. $T(\bm{x}) = g(T'(\bm{x}))$.

> [!EXAMPLE]
> We have known that a sufficient statistic for $\mu$ in $N(\mu,\ \sigma^{2})$ with known $\sigma^{2}$ is the sample mean $\overline{X}$, while a sufficient statistic for $(\mu,\ \sigma^{2})$ is the sample version $(\overline{X},\ S^{2})$. Note that $(\overline{X},\ S^{2})$ can also be a sufficient statistic for $\mu$ with known $\sigma^{2}$. However, it is not a minimal sufficient statistic, because $\overline{X} = \overline{X} + 0 \cdot S^{2}$ is a function of $(\overline{X},\ S^{2})$. Actually, $\overline{X}$ is a minimal sufficient statistic for $\mu$.

<span id="theorem6_2_13"></span>

> [!THEOREM]
> Let $f(\bm{x} \mid \theta)$ be the pmf or pdf of a sample $\bm{X}$. Suppose $\exists $ a function $T(\bm{x})$ s.t. for every 2 sample points $\bm{x}$ and $\bm{y}$, the ratio $\frac{f(\bm{x} \mid \theta)}{f(\bm{y} \mid \theta)}$ does *not* depend on $\theta$ *iff* $T(\bm{x}) = T(\bm{y})$. Then $T(\bm{X})$ is a *minimial sufficient statistic* for $\theta$.

> [!EXAMPLE|label:Normal minimal sufficient statistic]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. $N(\mu,\ \sigma^{2})$, both $\mu$ and $\sigma^{2}$ unknown. Let $\bm{x}$ and $\bm{y}$ be 2 sample points, and let $(\overline{x},\ s_{\bm{x}}^{2})$ and $(\overline{y},\ s_{\bm{y}}^{2})$ be the corresponding sample means and variances. Then, the ratio of densities is given by 
>
> $$\begin{aligned} \frac{f(\bm{x} \mid \mu,\ \sigma^{2})}{f(\bm{y} \mid \mu,\ \sigma^{2})} &= \frac{\left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[ -\frac{(n - 1) s_{\bm{x}}^{2} + n (\overline{x} - \mu)^{2}}{2 \sigma^{2}} \right]}{\left(\frac{1}{\sqrt{2 \pi \sigma^{2}}} \right)^{n} \exp \left[ -\frac{(n - 1) s_{\bm{y}}^{2} + n (\overline{y} - \mu)^{2}}{2 \sigma^{2}} \right]} \\ &= \exp \left[ -\frac{(n - 1) \left(s_{\bm{x}}^{2} - s_{\bm{y}}^{2} \right) + n (\overline{x} - \mu + \overline{y} - \mu) (\overline{x} - \mu - \overline{y} + \mu)}{2 \sigma^{2}} \right] \\ &= \exp \left[ -\frac{(n - 1) \left(s_{\bm{x}}^{2} - s_{\bm{y}}^{2} \right) + n (\overline{x}^{2} - \overline{y}^{2}) - 2 n \mu (\overline{x} - \overline{y})}{2 \sigma^{2}} \right]. \end{aligned}$$
>
> This ratio does not depend on $(\mu,\ \sigma^{2})$ *iff* the numerator is zero, i.e., $\overline{x} = \overline{y}$ and $s_{\bm{x}}^{2} = s_{\bm{y}}^{2}$. Thus, $(\overline{X},\ S^{2})$ is a minimal sufficient statistic for $(\mu,\ \sigma^{2})$.

> [!EXAMPLE|label:Uniform minimal sufficient statistic]
> Suppose $X_1,\ X_2,\ \cdots,\ X_n$ are i.i.d. $\text{Uniform}(\theta,\ \theta + 1)$ observations, $-\infty < \theta < \infty$. Then the joint pdf of $\bm{X}$ is 
>
> $$f(\bm{x} \mid \theta) = \begin{cases} 1,\ &\theta < x_i < \theta + 1,\ i=1,\ 2,\ \cdots,\ n \\ 0,\ &\text{otherwise}, \end{cases}$$
>
> which can be written as 
>
> $$f(\bm{x} \mid \theta) = \begin{cases} 1,\ &\underset{i}{\max} ~ x_i - 1 < \theta < \underset{i}{\min} ~ x_i \\ 0,\ &\text{otherwise}. \end{cases}$$
>
> Thus, for 2 sample points $\bm{x}$ and $\bm{y}$, the ratio will be $1$ for the same values of $\theta$ *iff* $\underset{i}{\min} ~ x_i = \underset{i}{\min} ~ y_i$ and $\underset{i}{\max} ~ x_i = \underset{i}{\max} ~ y_i$. Hence, $(X_{(1)},\ X_{(n)})$ is a minimal sufficient statistic for $\theta$. Note that here we have a *2-dimensional* minimal sufficient statistic for *1-dimisional* parameter $\theta$.

### 6.2.3 Ancillary Statistics

> [!DEFINITION]
> A statistic $S(\bm{X})$ whose distribution does not depend on the parameter $\theta$ is called an **ancillary statistic**.

Alone, an ancillary statistic *does not* provide any information about $\theta$. However, when used in conjunction with other statistics, it sometimes contain valuable information for inference about $\theta$.

> [!EXAMPLE|label:Uniform ancillary statistic]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. $\text{Uniform}(\theta,\ \theta + 1)$ observations, $-\infty < \theta < \infty$. Let $X_{(1)},\ X_{(2)},\ \cdots,\ X_{(n)}$ be the corresponding order statistics. From [Distribution of the midrange and range](courses/advanced_statistics/5_properties_of_a_random_sample.md#range_example) in Chapter 5, we have known that the range statistic, $R = X_{(n)} - X_{(1)}$, is a $\text{Beta}(n - 1,\ 2)$ random variable, which does not depend on $\theta$. Thus, the range statistic is an ancillary statistic for $\theta$.
>
> Recall that $(X_{(1)},\ X_{(n)})$ is a minimal sufficient statistic for $\theta$, which means the transformed $\left(X_{(n)} - X_{(1)},\ \frac{X_{(n)} + X_{(1)}}{2} \right)$ is also a minimal sufficient statistic for $\theta$, though $X_{(n)} - X_{(1)}$ contains no information about $\theta$.

### 6.2.4 Sufficient, Ancillary, and Complete Statistics

> [!DEFINITION]
> Let $f(t \mid \theta)$ be a family of pdfs or pmfs for a statistic $T(\bm{X})$. The family of probability distributions is called **complete** if $\E[g(T) \mid \theta] = 0,\ \forall \theta$ implies $P(g(T) = 0 \mid \theta) = 1,\ \forall \theta$. Equivalently, $T(\bm{X})$ is called a **complete statistic**.

> [!EXAMPLE|label:Binomial complete sufficient statistic]
> Suppose that $T$ has a $\text{Binomial}(n,\ p)$ distribution, $0 < p < 1$. Let $g$ be a function s.t. $\E[g(T) \mid p] = 0$. Then, 
>
> $$\begin{aligned} 0 &= \E[g(T) \mid p] \\ &= \sum_{t=0}^{n} g(t) \binom{n}{t} p^{t} (1 - p)^{n - t} \\ &= (1 - p)^{n} \sum_{t=0}^{n} g(t) \binom{n}{t} \left(\frac{p}{1 - p} \right)^{t} \\ &= \sum_{t=0}^{n} g(t) \binom{n}{t} \left(\frac{p}{1 - p} \right)^{t},\quad 0 < p < 1. \end{aligned}$$
>
> Since both $\binom{n}{t}$ and $\frac{p}{1 - p}$ are positive, the equation above implies that $g(t) = 0$ for all $t = 0,\ 1,\ \cdots,\ n$. Since $T$ takes on the values $0,\ 1,\ \cdots,\ n$ with probability $1$, this yields that $P(g(T) = 0 \mid p) = 1,\ \forall p$. Hence, $T$ is a complete statistic for $p$.

For exponential family, complete statistics are easy to find.

<span id="theorem6_2_25"></span>

> [!THEOREM|label:Complete statistics in the exponential family]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. observations from an exponential family with pdf or pmf of the form 
>
> $$f(x \mid \bm{\theta}) = h(x) c(\bm{\theta}) \exp \left(\sum_{i=1}^{k} w_i(\bm{\theta}) t_i(x) \right),$$
>
> where $\bm{\theta} = (\theta_1,\ \theta_2,\ \cdots,\ \theta_k)$. Then the statistic 
>
> $$T(\bm{X}) = \left(\sum_{i=1}^{n} t_1(X_{i}),\ \sum_{i=1}^{n} t_2(X_{i}),\ \cdots,\ \sum_{i=1}^{n} t_k(X_{i}) \right)$$
>
> is *complete* as long as the parameter space $\Theta$ contains an open set in $\mathbb{R}^{k}$.

But how can we use the completeness of a statistic? See the following theorem.

> [!THEOREM|label:Basu’s Theorem]
> If $T(\bm{X})$ is *complete and minimal sufficient statistic*, then $T(\bm{X})$ is *independent of every ancillary statistic*.

Basu’s Theorem is useful because it allow us to deduce the independence of 2 statistic without ever finding the joint distribution.

> [!EXAMPLE|label:Using Basu’s Theorem]
> Consider sampling from a $N(\mu,\ \sigma^{2})$ population with known $\sigma^{2}$. Since Normal distribution is a member of exponential family, we can easily verify that the sample mean $\overline{X}$ is a complete statistic for $\mu$. Note that $\overline{X}$ is also a minimal sufficient statistic, by Basu’s Theorem, $\overline{X}$ is independent of every ancillary statistic of $\mu$, including the sample variance $S^{2}$. Since $\sigma^{2}$ can be arbitrary, the sample mean and sample variance are independent for any choice of $\mu$ and $\sigma^{2}$.

> [!THEOREM]
> If a *minimal sufficient statistic exists*, then *any complete statistic is also a minimal sufficient statistic*.

### Exercises

1. Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. sample from $\text{Gamma}(\alpha,\ \beta)$. Prove that $T(\bm{X}) = \left(\sum_{j=1}^{n} \log X_j,\ \sum_{j=1}^{n} X_j \right) $ are sufficient for $(\alpha,\ \beta)$.

    <details>
    <summary>Proof:</summary>

    The joint pdf of the random sample is 

    $$
    \begin{aligned}
        f(\bm{x} \mid \alpha,\ \beta) &= \frac{\beta^{\alpha n}}{\Gamma(\alpha)^{n}} \exp \left(-\beta \sum_{j=1}^{n} x_j \right) \prod_{j=1}^{n} x_j^{\alpha - 1} \\
        &= \frac{\beta^{\alpha n}}{\Gamma(\alpha)^{n}} \exp \left[-\beta \sum_{j=1}^{n} x_j + (\alpha - 1) \sum_{j=1}^{n} \log x_j\right].
    \end{aligned}
    $$

    Let $g(T(\bm{x})) = \exp \left[-\beta \sum_{j=1}^{n} x_j + (\alpha - 1) \sum_{j=1}^{n} \log x_j\right]$ and $h(\bm{x}) = \frac{\beta^{\alpha n}}{\Gamma(\alpha)^{n}}$. By the Factorization Theorem, we can conclude that $T(\bm{X})$ is a sufficient statistic for $(\alpha,\ \beta)$.
    </details>

    <br>

2. Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. sample from $\text{Uniform}(\alpha,\ \beta),\ \alpha < \beta$. Prove that $\left(\min\limits_{1 \leqslant i \leqslant n} X_{i},\ \max\limits_{1 \leqslant i \leqslant n} X_{i} \right)$ is sufficient for $(\alpha,\ \beta)$.

    <details>
    <summary>Proof:</summary>

    The joint pdf of the random sample is 

    $$
    \begin{aligned}
        f(\bm{x} \mid \alpha,\ \beta) &= \begin{cases} \frac{1}{(\beta - \alpha)^{n}},\ &\alpha < x_i < \beta,\ i=1,\ 2,\ \cdots,\ n \\ 0,\ &\text{otherwise} \end{cases} \\
        &= \begin{cases} \frac{1}{(\beta - \alpha)^{n}},\ &\alpha < \min\limits_{1 \leqslant i \leqslant n} x_i < \max\limits_{1 \leqslant i \leqslant n} x_i < \beta \\ 0,\ &\text{otherwise}. \end{cases}
    \end{aligned}
    $$

    Let $g(T(\bm{x})) = I_{\left\{\alpha < t_1 < t_2 < \beta \right\}}(t_1,\ t_2)$ be an indicator function where $t_1 = \min_{1\leqslant i\leqslant n} x_i$ and $t_2 = \max_{1\leqslant i\leqslant n} x_i$. Let $h(\bm{x}) = \frac{1}{(\beta - \alpha)^{n}}$. By the Factorization Theorem, we can conclude that $\left(\min\limits_{1 \leqslant i \leqslant n} X_{i},\ \max\limits_{1 \leqslant i \leqslant n} X_{i} \right)$ is a sufficient statistic for $(\alpha,\ \beta)$.
    </details>

    <br>

3. (p.301 6.9) For each of the following distributions let $X_1,\ \cdots,\ X_n$ be a random sample. Find a minimal sufficient statistic for $\theta$.

    (a) Normal: $f(x \mid \theta) = \frac{1}{\sqrt{2 \pi}} e^{-(x - \theta)^{2} / 2},\ -\infty < x < \infty,\ -\infty < \theta < \infty$

    <details>
    <summary>Solution:</summary> 

    For every 2 sample points $\bm{x}$ and $\bm{y}$ the ratio of joint pdfs is given by 

    $$
    \begin{aligned}
        \frac{f(\bm{x} \mid \theta)}{f(\bm{y} \mid \theta)} &= \exp \left[ -\frac{1}{2} \left(\sum_{i=1}^{n} (x_i - \theta)^{2} - \sum_{i=1}^{n} (y_i - \theta)^{2} \right) \right] \\
        &= \exp \left\{ -\frac{1}{2} \left[\sum_{i=1}^{n} (x_i^{2} - y_i^{2}) - 2 \theta \left(\sum_{i=1}^{n} x_i - \sum_{i=1}^{n} y_i \right)  \right] \right\}.
    \end{aligned}
    $$

    The ratio does not depend on $\theta$ iff $\sum_{i=1}^{n} x_i = \sum_{i=1}^{n} y_i$. Thus, $\sum_{i=1}^{n} X_i$ is a minimal sufficient statistic for $\theta$.
    </details>

    <br>

    <span id="exercise3b"></span>

    (b) Location exponential: $f(x \mid \theta) = e^{-(x - \theta)},\ \theta < x < \infty,\ -\infty < \theta < \infty$

    <details>
    <summary>Solution:</summary> 

    For every 2 sample points $\bm{x}$ and $\bm{y}$ the ratio of joint pdfs is given by 

    $$
    \begin{aligned}
        \frac{f(\bm{x} \mid \theta)}{f(\bm{y} \mid \theta)} &= \exp \left\{ -\left[\sum_{i=1}^{n} (x_i - \theta) - \sum_{i=1}^{n} (y_i - \theta) \right] \right\} \frac{\prod_{i=1}^{n} I_{(\theta,\ \infty)}(x_i)}{\prod_{i=1}^{n} I_{(\theta,\ \infty)}(y_i)} \\
        &= \exp \left[-\left(\sum_{i=1}^{n} x_i - \sum_{i=1}^{n} y_i \right) \right] \frac{I_{(\theta,\ \infty)}(\min_{i} x_i)}{I_{(\theta,\ \infty)}(\min_{i} y_i)}.
    \end{aligned}
    $$

    The ratio does not depend on $\theta$ iff $\min_{i} x_i = \min_{i} y_i$. Thus, $\min_{i} X_i$ is a minimal sufficient statistic for $\theta$.
    </details>

    <br>

    (c) Logistic: $f(x \mid \theta) = \frac{e^{-(x - \theta)}}{\left(1 + e^{-(x - \theta)} \right)^{2}},\ -\infty < x < \infty,\ -\infty < \theta < \infty$

    <details>
    <summary>Solution:</summary> 

    For every 2 sample points $\bm{x}$ and $\bm{y}$ the ratio of joint pdfs is given by 

    $$
    \begin{aligned}
        \frac{f(\bm{x} \mid \theta)}{f(\bm{y} \mid \theta)} &= e^{-\left(\sum_{i=1}^{n} x_i - \sum_{i=1}^{n} y_i \right)} \left[\frac{\prod_{i=1}^{n} \left(1 + e^{-(y_i - \theta)} \right)}{\prod_{i=1}^{n} \left(1 + e^{-(x_i - \theta)} \right)} \right]^{2}.
    \end{aligned}
    $$

    The ratio does not depend on $\theta$ iff $\bm{x}$ and $\bm{y}$ have the same order statistics. Therefore, the order statistics are minimal sufficient for $\theta$.
    </details>

    <br>

4. Let $X_1,\ X_2,\ \cdots,\ X_n$ be a random sample from a distribution with density 

    $$
    f(x;\ \theta) = \frac{g(x)}{h(\theta)},\quad a(\theta) \leqslant x \leqslant b(\theta),
    $$

    where $g(x)$ is a function of $x$ only and $h(\theta) = \int_{a(\theta)}^{b(\theta)} g(x) ~\mathrm{d}x$ is a function of $\theta$ only. Let $a ^{-1}(\theta)$ and $b ^{-1}(\theta)$ be the inverse functions of $a(\theta)$ and $b(\theta)$, respectively. Prove that 

    (a) If $a(\theta)$ and $b(\theta)$ are monotone-increasing and monotone-decreasing functions of $\theta$, respectively, then the sufficient statistic for $\theta$ is $\widehat{\theta} = \min\left\{a ^{-1}(X_{(1)}),\ b ^{-1}(X_{(n)}) \right\}$, where $X_{(1)}$ and $X_{(n)}$ are the smallest and largest order statistics, respectively.

    > 本题在博资考和期中考都出现过。

    <details>
    <summary>Proof:</summary>

    The joint pdf of the random sample is 

    $$
    \begin{aligned}
        f(\bm{x} \mid \theta) &= \frac{\prod_{i=1}^{n} g(x_i) I_{[a(\theta),\ b(\theta)]}(x_i)}{h(\theta)^{n}} \\
        &= \frac{\prod_{i=1}^{n} g(x_i) I_{\left\{a(\theta) \leqslant x_{(1)} < x_{(n)} \leqslant b(\theta) \right\}}(\theta)}{h(\theta)^{n}} \\
        &= \frac{\prod_{i=1}^{n} g(x_i) I_{\left[-\infty,\ \min \left\{a ^{-1}(x_{(1)}),\ b ^{-1}(x_{(n)}) \right\} \right] }(\theta)}{h(\theta)^{n}}.
    \end{aligned}
    $$

    Then, by the Factorization Theorem, we can conclude that $\widehat{\theta} = \min\left\{a ^{-1}(X_{(1)}),\ b ^{-1}(X_{(n)}) \right\}$ is a sufficient statistic for $\theta$.
    </details>

    <br>

    (b) If $a(\theta)$ and $b(\theta)$ are monotone-decreasing and monotone-increasing functions of $\theta$, respectively, then the sufficient statistic for $\theta$ is $\widehat{\theta} = \max\left\{a ^{-1}(X_{(1)}),\ b ^{-1}(X_{(n)}) \right\}$.

    <details>
    <summary>Proof:</summary>

    The joint pdf of the random sample is 

    $$
    \begin{aligned}
        f(\bm{x} \mid \theta) &= \frac{\prod_{i=1}^{n} g(x_i) I_{\left\{a(\theta) \leqslant x_{(1)} < x_{(n)} \leqslant b(\theta) \right\}}(\theta)}{h(\theta)^{n}} \\
        &= \frac{\prod_{i=1}^{n} g(x_i) I_{\left[\max \left\{a ^{-1}(x_{(1)}),\ b ^{-1}(x_{(n)}) \right\},\ \infty \right]}(\theta)}{h(\theta)^{n}}.
    \end{aligned}
    $$

    Then, by the Factorization Theorem, we can conclude that $\widehat{\theta} = \max\left\{a ^{-1}(X_{(1)}),\ b ^{-1}(X_{(n)}) \right\}$ is a sufficient statistic for $\theta$.
    </details>

    <br>

5. (p.301 6.15) Let $X_1,\ \cdots,\ X_n$ be i.i.d. $N(\theta,\ a \theta^{2})$, where $a > 0$ is a known constant and $\theta > 0$.

    (a) Show that the parameter space does not contain a two-dimensional open set.

    <details>
    <summary>Proof:</summary>

    The parameter space consists only of the points $(\theta,\ \nu)$ on the graph of the function $\nu = a \theta^{2}$. This quadratic graph is a line and does not contain any two-dimensional open set.
    </details>

    <br>

    (b) Show that the statistic $T = (\overline{X},\ S^{2})$ is a sufficient statistic for $\theta$, but the family of distributions is not complete.

    <details>
    <summary>Proof:</summary>

    The joint pdf of the random sample is

    $$
    f(\bm{x} \mid \mu,\ \sigma^{2}) = \left(\frac{1}{\sqrt{2 \pi a \theta^{2}}} \right)^{n} \exp \left[ -\frac{1}{2 a \theta^{2}} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2} - \frac{n(\overline{x} - \theta)^{2}}{2 a \theta^{2}} \right],
    $$

    which depends on the sample $\bm{x}$ only through $\overline{x}$ and $s^{2} = \frac{1}{n - 1}\sum_{i=1}^{n} (x_i - \overline{x})^{2}$. Thus, we can define $h(x) = \left(\frac{1}{\sqrt{2 \pi a \theta^{2}}} \right)^{n}$ and $g(\overline{x},\ s^{2}) = \exp \left[ -\frac{n - 1}{2 a \theta^{2}} s^{2} - \frac{n(\overline{x} - \theta)^{2}}{2 a \theta^{2}} \right]$. By the Factorization Theorem, we can conclude that $T$ is a sufficient statistic for $\theta$.

    Since $\E[S^{2}] = a \theta^{2}$ and $\E[\overline{X}^{2}] = \Var(\overline{X}) + \E^{2}[\overline{X}] = \frac{a \theta^{2}}{n} + \theta^{2} = \frac{a + n}{n} \theta^{2}$, we have 

    $$
    \E\left[\frac{n}{a + n} \overline{X}^{2} - \frac{S^{2}}{a} \right] = \theta^{2} - \theta^{2} = 0.
    $$

    However, $P\left(\frac{n}{a + n} \overline{X}^{2} - \frac{S^{2}}{a} \right) \neq 1$, which means $T$ is not a complete statistic for $\theta$.
    </details>

    <br>

6. (p.302 6.21) Let $X$ be one observation from the pdf 

    $$
    f(x \mid \theta) = \left(\frac{\theta}{2} \right)^{\left\vert x \right\vert } (1 - \theta)^{1 - \left\vert x \right\vert },\quad x = -1,\ 0,\ 1,\ 0 \leqslant \theta \leqslant 1.
    $$

    (a) Is $X$ a complete sufficient statistic?

    <details>
    <summary>Solution:</summary>

    First, $X$ itself must be sufficient. Then, to check completeness, calculate 

    $$
    \E[g(X)] = \frac{\theta}{2} g(-1) + (1 - \theta) g(0) + \frac{\theta}{2} g(1).
    $$

    If $g$ is an odd function, then $g(-1) = - g(1)$ and $g(0) = 0$, which means $\E[g(X)] = 0$. Thus, $P(g(X) = 0)$ is not necessarily $1$, and $X$ is not a complete statistic.
    </details>

    <br>

    (b) Is $\left\vert X \right\vert$ a complete sufficient statistic?

    <details>
    <summary>Solution:</summary>

    Define $h(x) = 1$ and $g(\left\vert x \right\vert) = \left(\frac{\theta}{2} \right)^{\left\vert x \right\vert } (1 - \theta)^{1 - \left\vert x \right\vert}$, by the Factorization Theorem, $\left\vert X \right\vert$ is a sufficient statistic for $\theta$.

    Then, note that the distribution of $\left\vert X \right\vert$ is $\text{Bernoulli}(\theta)$, which is a member of exponential family. Thus, $\left\vert X \right\vert$ is a complete sufficient statistic for $\theta$.
    </details>

    <br>

    (c) Does $f(x \mid \theta)$ belong to the exponential class?

    <details>
    <summary>Solution:</summary>

    We can write $f(x \mid \theta)$ as 

    $$
    f(x \mid \theta) = \exp \left\{ \left\vert x \right\vert \log \frac{\theta}{2} + (1 - \left\vert x \right\vert) \log (1 - \theta) \right\}.
    $$

    Let $h(x) = c(\theta) = 1$, $w_1(\theta) = \log \frac{\theta}{2}$, $t_1(x) = \left\vert x \right\vert$, $w_2(\theta) = \log (1 - \theta)$, and $t_2(x) = 1 - \left\vert x \right\vert$. Then, $f(x \mid \theta)$ belongs to the exponential class.
    </details>

    <br>

<span id="exercise7"></span>

7. (p.303 6.30) Let $X_1,\ \cdots,\ X_n$ be a random sample from the pdf $f(x \mid \mu) = e^{-(x - \mu)}$, where $-\infty < \mu < x < \infty$.

    (a) Show that $X_{(1)} = \min_{i} X_{i}$ is a complete sufficient statistic.

    <details>
    <summary>Proof:</summary>

    The joint pdf of the random sample is 

    $$
    f(\bm{x} \mid \mu) = e^{-\sum_{i=1}^{n} (x_i - \mu)} \prod_{i=1}^{n} I_{(\mu,\ \infty)}(x_i) = e^{-\sum_{i=1}^{n} (x_i - \mu)} I_{(-\infty,\ x_{(1)})}(\mu).
    $$

    Let $h(\bm{x}) = e^{-\sum_{i=1}^{n} (x_i - \mu)}$ and $g(x_{(1)}) = I_{(-\infty,\ x_{(1)})}(\mu)$, by the Factorization Theorem, we can conclude that $X_{(1)}$ is a sufficient statistic for $\mu$.

    To check completeness, calculate pdf of $X_{(1)}$: 

    $$
    \begin{aligned}
        f(x_{(1)} \mid \mu) &= f_{X}(x_{(1)} \mid \mu) (1 - F_{X}(x_{(1)} \mid \mu))^{n - 1} n \\
        &= e^{-(x_{(1)} - \mu)} [1 - (1 - e^{-(x_{(1)} - \mu)})]^{n - 1} n \\
        &= n e^{-n (x_{(1)} - \mu)} ,\quad x_{(1)} > \mu.
    \end{aligned}
    $$

    Then, we have 

    $$
    \E[g(X_{(1)}) \mid \mu] = \int_{\mu}^{\infty} g(x_{(1)}) n e^{-n (x_{(1)} - \mu)} ~\mathrm{d}x_{(1)}.
    $$

    If this is zero for all $\mu$, then $\int_{\mu}^{\infty} g(x_{(1)}) e^{-n (x_{(1)})} ~\mathrm{d}x_{(1)}$ should be zero for all $\mu$. Moreover, let $\int_{\mu}^{\infty} g(x_{(1)}) e^{-n (x_{(1)})} ~\mathrm{d}x_{(1)}$ be a function of $\mu$, this implies we need the function to be constant. So take the derivative w.r.t. $\mu$, we would have 

    $$
    \begin{aligned}
        \frac{\mathrm{d}}{\mathrm{d}\mu} \int_{\mu}^{\infty} g(x_{(1)}) e^{-n (x_{(1)})} ~\mathrm{d}x_{(1)} &= 0 \\
        - g(\mu) e^{-n \mu} &= 0 \\
        g(\mu) &= 0,\quad \forall \mu.
    \end{aligned}
    $$

    This means $P(g(X_{(1)}) = 0) = 1$, and thus $X_{(1)}$ is a complete sufficient statistic for $\mu$.
    </details>

    <br>

    (b) Use Basu’s Theorem to show that $X_{(1)}$ and $S^{2}$ are independent.

    <details>
    <summary>Proof:</summary>

    From [Exercise 3(b)](#exercise3b) we have known that $X_{(1)}$ is actually a minimal sufficient statistic for $\mu$. Since we have proven its completeness, by Basu’s Theorem, $X_{(1)}$ is independent of every ancillary statistic of $\mu$. 

    Then, since $f(x \mid \mu)$ is a location exponential, which means we can write $X_{i} = Z_i + \mu$ where $Z_i,\ i=1,\ 2,\ \cdots,\ n$ is a random sample from $f(x \mid 0)$. Then, we have 

    $$
    S^{2} = \frac{1}{n - 1} \sum_{i=1}^{n} (X_{i} - \overline{X})^{2} = \frac{1}{n - 1} \sum_{i=1}^{n} (Z_{i} - \overline{Z})^{2},
    $$

    whose distribution does not depend on $\mu$. Thus, $S^{2}$ is an ancillary statistic for $\mu$ and $X_{(1)}$ is independent of $S^{2}$.
    </details>

## 6.3 The Likelihood Principle (*)

### 6.3.1 The Likelihood Function

> [!DEFINITION]
> Let $f(\bm{x} \mid \theta)$ denote the joint pdf or pmf of the sample $\bm{X} = (X_1,\ \cdots,\ X_n)$. Then, given that $\bm{X} = \bm{x}$ is observed, the function of $\theta$ defined by 
>
> $$L(\theta \mid \bm{x}) = f(\bm{x} \mid \theta)$$
>
> is called the **likelihood function**.

> [!THEOREM|label:Likelihood Principle]
> If $\bm{x}$ and $\bm{y}$ are 2 sample points s.t. $L(\theta \mid \bm{x})$ *proportional* to $L(\theta \mid \bm{y})$, i.e., $\exists $ a constant $C(\bm{x},\ \bm{y})$ s.t. 
>
> $$L(\theta \mid \bm{x}) = C(\bm{x},\ \bm{y}) L(\theta \mid \bm{y}),\quad \forall \theta,$$
>
> then the conclusions drawn from $\bm{x}$ and $\bm{y}$ should be *identical*.

Note the constant may change for different $(\bm{x},\ \bm{y})$, but it does not depend on $\theta$.

### 6.3.2 The Formal Likelihood Principle

> [!DEFINITION]
> Formally, we define an **experiment** $E$ to be a triple $(\bm{X},\ \theta,\ \left\{f(\bm{x} \mid \theta) \right\})$, where $\bm{X}$ is a random vector with pmf $f(\bm{x} \mid \theta)$ for some $\theta$ in the parameter space $\Theta$. An experimenter, knowing what experiment $E$ was performed and having observed a particular sample $\bm{X} = \bm{x}$, will make some inference or draw some conclusion about $\theta$. This conclustion we denote by $\operatorname{Ev}(E,\ \bm{x})$, which stands for the **evidence** about $\theta$ arising from $E$ and $\bm{x}$.

> [!THEOREM|label:Formal Sufficiency Principle]
> Consider experiment $E = (\bm{X},\ \theta,\ \left\{f(\bm{x} \mid \theta) \right\})$ and suppose $T(\bm{X})$ is a sufficient statistic for $\theta$. If $\bm{x}$ and $\bm{y}$ are sample points satisfying $T(\bm{x}) = T(\bm{y})$, then $\operatorname{Ev}(E,\ \bm{x}) = \operatorname{Ev}(E,\ \bm{y})$.

> [!THEOREM|label:Conditionality Principle]
> If one of two experiments is *randomly* chosen and the chosen experiment is done, yielding data $\bm{x}$, the information about $\theta$ depends *only* on the experiment performed.

> [!THEOREM|label:Formal Likelihood Principle]
> Suppose that we have 2 experiments, $E_1 = (\bm{X}_{1},\ \theta,\ \left\{f_1(\bm{x}_{1} \mid \theta) \right\})$ and $E_2 = (\bm{X}_{2},\ \theta,\ \left\{f_2(\bm{x}_{2} \mid \theta) \right\})$, where the unknown parameter $\theta$ is the same in both experiments. Suppose $\bm{x}_{1}^{*}$ and $\bm{x}_{2}^{*}$ are sample points from $E_1$ and $E_2$, respectively, s.t. 
>
> $$L(\theta \mid \bm{x}_{2}^{*}) = C(\bm{x}_{1}^{*},\ \bm{x}_{2}^{*}) L(\theta \mid \bm{x}_{1}^{*}),\quad \forall \theta,$$
>
> for some constant $C(\bm{x}_{1}^{*},\ \bm{x}_{2}^{*})$. Then, 
> 
> $$\operatorname{Ev}(E_1,\ \bm{x}_{1}^{*}) = \operatorname{Ev}(E_2,\ \bm{x}_{2}^{*}).$$

The Formal Likelihood Principle is different from the Likelihood Principle in [Section 6.3.1](#631-the-likelihood-function) because the Formal Likelihood Principle concerns 2 experiments, whereas the Likelihood Principle concerns only 1. The Likelihood Principle, however, can be derived from the Formal Likelihood Principle by letting $E_2$ be an exact replicate of $E_1$.

> [!THEOREM|label:Likelihood Principle Corollary]
> If $E = (\bm{X},\ \theta,\ \left\{f(\bm{x} \mid \theta) \right\})$ is an experiment, then $\operatorname{Ev}(E,\ \bm{x})$ should depend on $E$ and $\bm{x}$ *only* through $L(\theta \mid \bm{x})$.

> [!THEOREM|label:Birnbaum’s Theorem]
> The Formal Likelihood Principle follows from the Formal Sufficiency Principle and the Conditionality Principle. The converse is also true.

## Assignments

### Textbook Exercises

*6.9* (p.301) For each of the following distributions let $X_1,\ \cdots,\ X_n$ be a random sample. Find a minimal sufficient statistic for $\theta$.

(e) Double exponential: $f(x \mid \theta) = \frac{1}{2} e^{-\left\vert x - \theta \right\vert},\ -\infty < x <\infty,\ -\infty < \theta < \infty$

<details>
<summary>Solution:</summary>

For every 2 sample points $\bm{x}$ and $\bm{y}$ the ratio of joint pdfs is given by 

$$
\begin{aligned}
    \frac{f(\bm{x} \mid \theta)}{f(\bm{y} \mid \theta)} &= \exp \left[ -\frac{1}{2} \left(\sum_{i=1}^{n} \left\vert x_i - \theta \right\vert - \sum_{i=1}^{n} \left\vert y_i - \theta \right\vert \right) \right] \\
    &= \exp \Bigg[-\frac{1}{2} \Bigg(\sum_{i=1}^{n} (x_i - \theta) I_{(\theta,\ \infty)}(x_i) - \sum_{i=1}^{n} (x_i - \theta) I_{(-\infty,\ \theta)}(x_i) \\ &\qquad - \sum_{i=1}^{n} (y_i - \theta) I_{(\theta,\ \infty)}(y_i) + \sum_{i=1}^{n} (y_i - \theta) I_{(-\infty,\ \theta)}(y_i) \Bigg) \Bigg].
\end{aligned}
$$

Denote the number of $x_i$ that satisfies $x_i > \theta$ as $n_x$ and the number of $y_i$ that satisfies $y_i > \theta$ as $n_y$. Then, the ratio can be written as 

$$
\begin{aligned}
    \frac{f(\bm{x} \mid \theta)}{f(\bm{y} \mid \theta)} &= \exp \Bigg[-\frac{1}{2} \Bigg(\sum_{i=1}^{n} x_i I_{(\theta,\ \infty)}(x_i) - \sum_{i=1}^{n} x_i I_{(-\infty,\ \theta)}(x_i) + (n - 2 n_x) \theta \\ &\qquad - \sum_{i=1}^{n} y_i I_{(\theta,\ \infty)}(y_i) + \sum_{i=1}^{n} y_i I_{(-\infty,\ \theta)}(y_i) - (n - 2 n_y) \theta \Bigg) \Bigg] \\
    &= \exp \Bigg[-\frac{1}{2} \Bigg(\sum_{i=1}^{n} x_i I_{(\theta,\ \infty)}(x_i) - \sum_{i=1}^{n} x_i I_{(-\infty,\ \theta)}(x_i) \\ &\qquad - \sum_{i=1}^{n} y_i I_{(\theta,\ \infty)}(y_i) + \sum_{i=1}^{n} y_i I_{(-\infty,\ \theta)}(y_i) + 2 (n_y - n_x) \theta \Bigg) \Bigg].
\end{aligned}
$$

The ratio does not depend on $\theta$ iff $\bm{x}$ and $\bm{y}$ have the same order statistics. Therefore, the order statistics are minimal sufficient for $\theta$.
</details>

<br>

*6.23* (p.302) Let $X_1,\ X_2,\ \cdots,\ X_n$ be a random sample from a uniform distribution on the interval $(\theta,\ 2 \theta)$, $\theta > 0$. Find a minimal sufficient statistic for $\theta$. Is the statistic complete?

<details>
<summary>Solution:</summary>

For every 2 sample points $\bm{x}$ and $\bm{y}$ the ratio of joint pdfs is given by 

$$
\begin{aligned}
    \frac{f(\bm{x} \mid \theta)}{f(\bm{y} \mid \theta)} &= \frac{\prod_{i=1}^{n} I_{(\theta,\ 2 \theta)}(x_i)}{\prod_{i=1}^{n} I_{(\theta,\ 2 \theta)}(y_i)} \\
    &= \frac{I_{(\theta,\ 2 \theta)}(x_{(1)}) I_{(\theta,\ 2 \theta)}(x_{(n)})}{I_{(\theta,\ 2 \theta)}(y_{(1)}) I_{(\theta,\ 2 \theta)}(y_{(n)})},
\end{aligned}
$$

where $x_{(1)} := \min_{i} x_i$ and $x_{(n)} := \max_{i} x_i$. The ratio does not depend on $\theta$ iff $x_{(1)} = y_{(1)}$ and $x_{(n)} = y_{(n)}$. Therefore, $(X_{(1)},\ X_{(n)})$ is a minimal sufficient statistic for $\theta$.

Note that $\text{Uniform}(\theta,\ 2\theta)$ is a scale family, with standard pdf $f(z) \sim \text{Uniform}(1,\ 2)$. So if $Z_1,\ \cdots,\ Z_n$ is a random sample from a $\text{Uniform}(1,\ 2)$ population, then $X_1 = \theta Z_1,\ \cdots,\ X_n = \theta Z_n$ is a random sample from a $\text{Uniform}(\theta,\ 2\theta)$ population. Thus, we can find that $X_{(1)} / X_{(n)} = Z_{(1)} / Z_{(n)}$ does not depend on $\theta$, which means if we define $g(x_{(1)},\ x_{(n)}) = h(x_{(1)} / x_{(n)})$ for some function that makes $\E[g(x_{(1)},\ x_{(n)})] = 0$, then we would not have $P(g(X_{(1)},\ X_{(n)}) = 0) = 1$. Therefore, $(X_{(1)},\ X_{(n)})$ is not a complete statistic for $\theta$.
</details>

<br>

*6.25* (p.303) We have seen a number of theorems concerning sufficiency and related concepts for exponential families. [Theorem 5.2.11](courses/advanced_statistics/5_properties_of_a_random_sample.md#theorem5_2_11) gave the distribution of a statistic whose sufficiency is characterized in [Theorem 6.2.10](#theorem6_2_10) and completeness in [Theorem 6.2.25](#theorem6_2_25). But if the family is curved, the open set condition of [Theorem 6.2.25](#theorem6_2_25) is not satisfied. In such cases, is the sufficient statistic of [Theorem 6.2.10](#theorem6_2_10) also minimal? By applying Theorem [Theorem 6.2.13](#theorem6_2_13) to $T(\bm{x})$ of [Theorem 6.2.10](#theorem6_2_10), establish the following: 

(a) The statistic $(\sum X_{i},\ \sum X_{i}^{2})$ is sufficient, but not minimal sufficient, in the $N(\mu,\ \mu)$ family.

<details>
<summary>Proof:</summary>

The joint pdf of a random sample with size $n$ in the $N(\mu,\ \mu)$ population is 

$$
\begin{aligned}
    f(\bm{x} \mid \mu) &= \left(\sqrt{2 \pi \mu} \right)^{-n} \exp \left[-\frac{1}{2 \mu} \sum_{i=1}^{n} (x_i - \mu)^{2} \right] \\
    &= \left(\sqrt{2 \pi \mu} \right)^{-n} \exp \left[-\frac{1}{2 \mu} \sum_{i=1}^{n} x_i^{2} + \sum_{i=1}^{n} x_i - \frac{n}{2} \mu \right].
\end{aligned}
$$

By [Theorem 6.2.10](#theorem6_2_10) we know that $(\sum X_{i},\ \sum X_{i}^{2})$ is sufficient. However, the ratio of joint pdfs of any sample points $\bm{x}$ and $\bm{y}$ is 

$$
\frac{f(\bm{x} \mid \mu)}{f(\bm{y} \mid \mu)} = \exp \left[-\frac{1}{2 \mu} \sum_{i=1}^{n} (x_i^{2} - y_i^{2}) + \sum_{i=1}^{n} (x_i - y_i) \right],
$$

which means a minimal statistic is $\sum X_{i}^{2}$. Since there does not exist a function that transforms $\sum X_{i}^{2}$ to $(\sum X_{i},\ \sum X_{i}^{2})$, $(\sum X_{i},\ \sum X_{i}^{2})$ is not a minimal sufficient statistic.
</details>

<br>

(b) The statistic $\sum X_{i}^{2}$ is minimal sufficient in the $N(\mu,\ \mu)$ family.

<details>
<summary>Proof:</summary>

We have finished the proof in part (a).
</details>

<br>

(c) The statistic $(\sum X_{i},\ \sum X_{i}^{2})$ is minimal sufficient in the $N(\mu,\ \mu^{2})$ family.

<details>
<summary>Proof:</summary>

The joint pdf of a random sample with size $n$ in the $N(\mu,\ \mu^{2})$ population is

$$
\begin{aligned}
    f(\bm{x} \mid \mu) &= \left(\sqrt{2 \pi \mu^{2}} \right)^{-n} \exp \left[-\frac{1}{2 \mu^{2}} \sum_{i=1}^{n} (x_i - \mu)^{2} \right] \\
    &= \left(\sqrt{2 \pi \mu^{2}} \right)^{-n} \exp \left[-\frac{1}{2 \mu^{2}} \sum_{i=1}^{n} x_i^{2} + \frac{1}{\mu} \sum_{i=1}^{n} x_i - \frac{n}{2} \right].
\end{aligned}
$$

For every 2 sample points $\bm{x}$ and $\bm{y}$ the ratio of joint pdfs is given by 

$$
\begin{aligned}
    \frac{f(\bm{x} \mid \mu)}{f(\bm{y} \mid \mu)} &= \exp \left[-\frac{1}{2 \mu^{2}} \sum_{i=1}^{n} (x_i^{2} - y_i^{2}) + \frac{1}{\mu} \sum_{i=1}^{n} (x_i - y_i) \right].
\end{aligned}
$$

The ratio does not depend on $\mu$ iff $\sum x_{i}^{2} = \sum y_{i}^{2}$ and $\sum x_{i} = \sum y_{i}$. Therefore, $(\sum X_{i},\ \sum X_{i}^{2})$ is a minimal sufficient statistic for $\mu$.
</details>

<br>

(d) The statistic $(\sum X_{i},\ \sum X_{i}^{2})$ is minimal sufficient in the $N(\mu,\ \sigma^{2})$ family.

<details>
<summary>Proof:</summary>

The joint pdf of a random sample with size $n$ in the $N(\mu,\ \sigma^{2})$ population is 

$$
\begin{aligned}
    f(\bm{x} \mid \mu) &= \left(\sqrt{2 \pi \sigma^{2}} \right)^{-n} \exp \left[-\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_i - \mu)^{2} \right] \\
    &= \left(\sqrt{2 \pi \sigma^{2}} \right)^{-n} \exp \left[-\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} x_i^{2} + \frac{\mu}{\sigma} \sum_{i=1}^{n} x_i - \frac{n}{2 \sigma^{2}} \mu^{2} \right].
\end{aligned}
$$

For every 2 sample points $\bm{x}$ and $\bm{y}$ the ratio of joint pdfs is given by

$$
\begin{aligned}
    \frac{f(\bm{x} \mid \mu)}{f(\bm{y} \mid \mu)} &= \exp \left[-\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_i^{2} - y_i^{2}) + \frac{\mu}{\sigma} \sum_{i=1}^{n} (x_i - y_i) \right].
\end{aligned}
$$

The ratio does not depend on $\mu$ iff $\sum x_{i}^{2} = \sum y_{i}^{2}$ and $\sum x_{i} = \sum y_{i}$. Therefore, $(\sum X_{i},\ \sum X_{i}^{2})$ is a minimal sufficient statistic for $\mu$.
</details>

<br>

*6.27* (p.303) Let $X_1,\ \cdots,\ X_n$ be a random sample from the *inverse Gaussian distribution* with pdf 

$$
f(x \mid \mu,\ \lambda) = \left(\frac{\lambda}{2 \pi x^{3}} \right)^{1 / 2} e^{\frac{-\lambda (x - \mu)^{2}}{2 \mu^{2} x}},\quad 0 < x < \infty.
$$

(a) Show that statistics 

$$
\overline{X} = \frac{1}{n} \sum_{i=1}^{n} X_{i} \quad \text{ and } \quad T = \frac{n}{\sum_{i=1}^{n} \frac{1}{X_{i}} - \frac{1}{\overline{X}}}
$$

are sufficient and complete.

<details>
<summary>Proof:</summary>

The pdf can be written as 

$$
\begin{aligned}
    f(x \mid \mu,\ \lambda) &= \frac{1}{\sqrt{2 \pi x^{3}}} \sqrt{\lambda} \exp \left[-\frac{\lambda}{2 \mu^{2} x} (x^{2} - 2 \mu x + \mu^{2}) \right] \\
    &= \frac{1}{\sqrt{2 \pi x^{3}}} \sqrt{\lambda} \exp \left(-\frac{\lambda}{2 \mu^{2}} x + \frac{\lambda}{\mu} - \frac{\lambda}{2} \frac{1}{x} \right) \\
    &= \frac{1}{\sqrt{2 \pi x^{3}}} \sqrt{\lambda} \exp\left(\frac{\lambda}{\mu} \right) \exp \left(-\frac{\lambda}{2 \mu^{2}} x - \frac{\lambda}{2} \frac{1}{x} \right),
\end{aligned}
$$

which is a member of exponential family. Define $t_1(x) = x$ and $t_2(x) = \frac{1}{x}$, we can get a complete sufficient statistic $\left(\sum_{i=1}^{n} X_{i},\ \sum_{i=1}^{n} \frac{1}{X_{i}} \right)$. Since $(\overline{X},\ T)$ is a one-to-one transform from $\left(\sum_{i=1}^{n} X_{i},\ \sum_{i=1}^{n} \frac{1}{X_{i}} \right)$, $(\overline{X},\ T)$ is also a complete sufficient statistic.
</details>

<br>

(b) For $n = 2$, show that $\overline{X}$ has an inverse Gaussian distribution, $n \lambda / T$ has a $\chi_{n - 1}^{2}$ distribution, and they are independent. (Schwarz and Samanta 1991 do the general case.)

<details>
<summary>Proof:</summary>

Since $X_1$ and $X_2$ are i.i.d., the joint pdf of them is given by 

$$
\begin{aligned}
    f(x_1,\ x_2 \mid \mu,\ \lambda) &= \frac{\lambda}{2 \pi (x_1 x_2)^{3 / 2}} \exp\left(\frac{2\lambda}{\mu} \right) \exp\bigg[-\frac{\lambda}{2 \mu^{2}} (x_1 + x_2) \\ &\qquad - \frac{\lambda}{2} \left(\frac{1}{x_1} + \frac{1}{x_2} \right) \bigg].
\end{aligned}
$$

Let transformation $U = \overline{X} = \frac{X_1 + X_2}{2}$ and $V = \frac{n \lambda}{T} = \lambda \left(\frac{1}{X_1} + \frac{1}{X_2} - 2 \frac{2}{X_1 + X_2} \right)$, which means 

$$
\begin{cases}
    X_1 + X_2 = 2 U \\
    \frac{1}{X_1} + \frac{1}{X_2} = \frac{V}{\lambda} + \frac{2}{U}
\end{cases} \implies X_1 X_2 = \frac{2 U}{V / \lambda + 2 / U} = \frac{2 \lambda U^{2}}{U V + 2 \lambda} := W.
$$

Since the inverse transformation is complicated, we calculate the Jacobian for the transformation and then invert it to get that of the inverse transformation: 

$$
\begin{aligned}
    \frac{1}{\left\vert J \right\vert } &= \left\vert 
    \begin{matrix} 
        \frac{\partial U}{\partial X_1} & \frac{\partial U}{\partial X_2} \\ 
        \frac{\partial V}{\partial X_1} & \frac{\partial V}{\partial X_2}
    \end{matrix} \right\vert \\
    &= \left\vert   
    \begin{matrix}
        \frac{1}{2} & \frac{1}{2} \\
        \lambda \left(-\frac{1}{X_1^{2}} + \frac{4}{(X_1 + X_2)^{2}} \right) & \lambda \left(-\frac{1}{X_2^{2}} + \frac{4}{(X_1 + X_2)^{2}} \right)
    \end{matrix} \right\vert \\
    &= \frac{\lambda}{2} \left\vert\frac{1}{X_1^{2}} - \frac{1}{X_2^{2}} \right\vert,
\end{aligned}
$$

which means 

$$
\begin{aligned}
    \left\vert J \right\vert &= \frac{2}{\lambda} \frac{X_1^{2} X_2^{2}}{\left\vert X_2^{2} - X_1^{2} \right\vert} \\
    &= \frac{2}{\lambda} \frac{W^{2}}{2 U \left\vert X_2 - X_1 \right\vert} \\
    &= \frac{1}{\lambda} \frac{W^{2}}{U \sqrt{(X_1 + X_2)^{2} - 4 X_1 X_2}} \\
    &= \frac{1}{2 \lambda} \frac{W^{2}}{U \sqrt{U^{2} - W}} \\
\end{aligned}
$$

Thus, the joint pdf of $U$ and $V$ is given by 

$$
\begin{aligned}
    f_{U,\ V}(u,\ v) &= f(x_1(u,\ v),\ x_2(u,\ v) \mid \mu,\ \lambda) \left\vert J \right\vert \\
    &= \frac{\lambda}{2 \pi w^{3 / 2}} \exp\left(\frac{2\lambda}{\mu} \right) \exp\left[-\frac{\lambda}{2 \mu^{2}} 2 u - \frac{\lambda}{2} \left(\frac{v}{\lambda} + \frac{2}{u} \right)  \right] \cdot \frac{1}{2 \lambda} \frac{w^{2}}{u \sqrt{u^{2} - w}} \\
    &\propto \frac{1}{\sqrt{2 \pi (2 u)^{3}}} \exp\left(-\frac{2 \lambda}{2 \mu^{2}} u - \frac{2 \lambda}{2} \frac{1}{u} \right) \frac{1}{\sqrt{v}} \exp\left(-\frac{v}{2} \right),
\end{aligned}
$$

which means $U$ and $V$ are independent, with $U \sim \text{IG}(\mu,\ 2 \lambda)$ and $V \sim \chi^{2}(1)$.
</details>

<br>

*6.30* (p.303) Let $X_1,\ \cdots,\ X_n$ be a random sample from the pdf $f(x \mid \mu) = e^{-(x - \mu)}$, where $-\infty < \mu < x < \infty$.

(a) Show that $X_{(1)} = \min_{i} X_{i}$ is a complete sufficient statistic.

<details>
<summary>Proof:</summary>

See [Exercise 7(a)](#exercise7).
</details>

<br>

(b) Use Basu’s Theorem to show that $X_{(1)}$ and $S^{2}$ are independent.

<details>
<summary>Proof:</summary>

See [Exercise 7(b)](#exercise7).
</details>

<br>

*6.40* (p.306) Let $X_1,\ \cdots,\ X_n$ be i.i.d. observations from a location-scale family. Let $T_1(X_1,\ \cdots,\ X_n)$ and $T_2(X_1,\ \cdots,\ X_n)$ be two statistics that both satisfy 

$$
T_i(a x_1 + b,\ \cdots,\ a x_n + b) = a T_i(x_1,\ \cdots,\ x_n)
$$

for all values of $x_1,\ \cdots,\ x_n$ and $b$ and for any $a > 0$.

(a) Show that $T_1 / T_2$ is an ancillary statistic.

<details>
<summary>Proof:</summary>

Since $X_1,\ \cdots,\ X_n$ are from a location-scale family, they can be written as $X_{i} = \sigma Z_i + \mu$, where $Z_i,\ i=1,\ 2,\ \cdots,\ n$ is a random sample from the standard pdf. Then, we have 

$$
\frac{T_1(X_1,\ \cdots,\ X_n)}{T_2(X_1,\ \cdots,\ X_n)} = \frac{T_1(\sigma Z_1 + \mu,\ \cdots,\ \sigma Z_n + \mu)}{T_2(\sigma Z_1 + \mu,\ \cdots,\ \sigma Z_n + \mu)} = \frac{T_1(Z_1,\ \cdots,\ Z_n)}{T_2(Z_1,\ \cdots,\ Z_n)},
$$

which does not depend on $\mu$ and $\sigma$. Thus, $T_1 / T_2$ is an ancillary statistic.
</details>

<br>

(b) Let $R$ be the sample range and $S$ be the sample standard deviation. Verify that $R$ and $S$ satisfy the above condition so that $R / S$ is an ancillary statistic.

<details>
<summary>Proof:</summary>

For $R$ we have $R(X_1,\ \cdots,\ X_n) = X_{(n)} - X_{(1)}$ and $R(a X_1 + b,\ \cdots,\ a X_n + b) = (a X_{(n)} + b) - (a X_{(1)} + b) = a R(X_1,\ \cdots,\ X_n)$ for any $a > 0$.

For $S$ we have $S(X_1,\ \cdots,\ X_n) = \sqrt{\frac{1}{n - 1} \sum_{i=1}^{n} (X_{i} - \overline{X})^{2}}$ and $S(a X_1 + b,\ \cdots,\ a X_n + b) = \sqrt{\frac{1}{n - 1} \sum_{i=1}^{n} [(a X_{i} + b) - (a \overline{X} + b)]^{2}} = a S(X_1,\ \cdots,\ X_n)$ for any $a > 0$.

Thus, $R$ and $S$ both satisfy the above condition, which means $R / S$ is an ancillary statistic.
</details>

### Additional Exercises

1. Find sufficient statistic for parameters.

    (a) $X_1,\ \cdots,\ X_n$ be a random sample from $f(x \mid \mu,\ \sigma) = \sigma^{-1} e^{-\frac{x - \mu}{\sigma}},\ x > \mu,\ \sigma > 0$.

    <details>
    <summary>Solution:</summary>

    The joint pdf of the random sample is 

    $$
    f(\bm{x} \mid \mu,\ \sigma) = \sigma^{-n} e^{-\frac{\sum_{i=1}^{n} (x_i - \mu)}{\sigma}} \prod_{i=1}^{n} I_{(\mu,\ \infty)}(x_i) = \sigma^{-n} e^{-\frac{\sum_{i=1}^{n} x_i - n \mu}{\sigma}} I_{(\mu,\ \infty)}(x_{(1)}).
    $$

    Let $h(\bm{x}) = 1$ and $g(\sum_{i=1}^{n} x_i,\ x_{(1)} \mid \mu,\ \sigma) = \sigma^{-n} e^{-\frac{\sum_{i=1}^{n} x_i - n \mu}{\sigma}} I_{(\mu,\ \infty)}(x_{(1)})$, by the Factorization Theorem, we can conclude that $(\sum_{i=1}^{n} X_{i},\ X_{(1)})$ is a sufficient statistic for $(\mu,\ \sigma)$.
    </details>

    <br>

    (b) $X_1,\ \cdots,\ X_n$ be a random sample from $\text{Gamma}(\alpha,\ \beta)$.

    <details>
    <summary>Solution:</summary>

    Note that $\text{Gamma}(\alpha,\ \beta)$ is a member of exponential family, which means its pdf can be written as   

    $$
    f(x \mid \alpha,\ \beta) = \frac{\beta^{\alpha}}{\Gamma(\alpha)} x^{\alpha - 1} e^{-\beta x} = \frac{\beta^{\alpha}}{\Gamma(\alpha)} e^{(\alpha - 1) \log x - \beta x}.
    $$

    Define $h(x) = 1$, $c(\alpha,\ \beta) = \frac{\beta^{\alpha}}{\Gamma(\alpha)}$, $w_1(\alpha,\ \beta) = \alpha - 1$, $t_1(x) = \log x$, $w_2(\alpha,\ \beta) = - \beta$, and $t_2(x) = x$, then we can conclude that $(\sum_{i=1}^{n} \log x_i,\ \sum_{i=1}^{n} x_i)$ is a sufficient statistic for $(\alpha,\ \beta)$.
    </details>

    <br>

    (c) Pdf $f(x,\ y \mid \theta_1,\ \theta_2,\ \theta_3,\ \theta_4)$ is the bivariate for the uniform distribution on the rectangle with lower left corner $(\theta_1,\ \theta_2)$ and upper right corner $(\theta_3,\ \theta_4)$ in $\mathbb{R}^{2}$ for random sample $(X_1,\ Y_1),\ \cdots,\ (X_n,\ Y_n)$, where $\theta_1 < \theta_3$ and $\theta_2 < \theta_4$. Find a four-dimensional sufficient statistic for parameters.

    <details>
    <summary>Solution:</summary>

    The joint pdf of the random sample is 

    $$
    \begin{aligned}
        f(\bm{x},\ \bm{y} \mid \theta_1,\ \theta_2,\ \theta_3,\ \theta_4) &= \prod_{i=1}^{n} \frac{1}{(\theta_3 - \theta_1) (\theta_4 - \theta_2)} I_{(\theta_1,\ \theta_3)}(x_i) I_{(\theta_2,\ \theta_4)}(y_i) \\
        &= [(\theta_3 - \theta_1) (\theta_4 - \theta_2)]^{-n} I_{(\theta_1,\ \infty)}(x_{(1)}) I_{(-\infty,\ \theta_3)}(x_{(n)}) \\ &\qquad \cdot I_{(\theta_2,\ \infty)}(y_{(1)}) I_{(-\infty,\ \theta_4)}(y_{(n)}),
    \end{aligned}
    $$

    where $x_{(1)} := \min_{i} x_i$, $x_{(n)} := \max_{i} x_i$, and the same for $y$. Let $h(\bm{x},\ \bm{y}) = 1$ and $g(x_{(1)},\ x_{(n)},\ y_{(1)},\ y_{(n)} \mid \theta_1,\ \theta_2,\ \theta_3,\ \theta_4) = [(\theta_3 - \theta_1) (\theta_4 - \theta_2)]^{-n} I_{(\theta_1,\ \infty)}(x_{(1)}) I_{(-\infty,\ \theta_3)}(x_{(n)}) I_{(\theta_2,\ \infty)}(y_{(1)}) I_{(-\infty,\ \theta_4)}(y_{(n)})$, by the Factorization Theorem, we can conclude that $(X_{(1)},\ X_{(n)},\ Y_{(1)},\ Y_{(n)})$ is a sufficient statistic for $(\theta_1,\ \theta_2,\ \theta_3,\ \theta_4)$.
    </details>

    <br>

2. Suppose $X_1,\ \cdots,\ X_n$ are i.i.d. random variable with common pdf 

    $$
    f(x \mid \theta) = e^{-(x - \theta)},\quad x\geqslant \theta,
    $$

    where $\theta$ is an unknown parameter. Let $X_{(1)} = \min_{i} X_{i}$ and $X_{(n)} = \max_{i} X_{i}$.

    (a) Show that $X_{(1)}$ is sufficient for $\theta$. Is the statistic complete?

    <details>
    <summary>Proof:</summary>

    See [Exercise 7(a)](#exercise7).
    </details>

    <br>

    (b) Show that $X_{(n)} - X_{(1)}$ is an ancillary statistic.

    <details>
    <summary>Proof:</summary>

    Note that $f(x \mid \theta)$ is a location family, which means we can write $X_i = Z_i + \theta$ where $Z_i,\ i=1,\ 2,\ \cdots,\ n$ is a random sample from $f(x \mid 0)$. Thus, the cdf of the range statistic, $R := X_{(n)} - X_{(1)}$ is given by 

    $$
    F_{R}(r) = P(X_{(n)} - X_{(1)} \leqslant r) = P(Z_{(n)} - Z_{(1)} \leqslant r),
    $$

    which does not depend on $\theta$. Therefore, $R = X_{(n)} - X_{(1)}$ is an ancillary statistic.
    </details>

    <br>

    (c) Show that $X_{(1)}$ and $S^{2}$ are independent.

    <details>
    <summary>Proof:</summary>

    See [Exercise 7(b)](#exercise7).
    </details>