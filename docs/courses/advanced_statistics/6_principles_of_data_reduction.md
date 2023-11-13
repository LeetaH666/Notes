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
> A statistic $T(\bm{X})$ is a **sufficient statistic** for $\theta$ if the conditional distribution of the sample $\bm{X}$ given the value of $T(\bm{X})$ does not depend on $\theta$.

> [!THEOREM]
> If $p(\bm{x} \mid \theta)$ is the joint pdf or pmf of $\bm{X}$ and $q(t \mid \theta)$ is the pdf or pmf of $T(\bm{X})$, then $T(\bm{X})$ is a *sufficient statistic* for $\theta$ if, $\forall \bm{x}$ in the sample space, the raio $\frac{p(\bm{x} \mid \theta)}{q(T(\bm{x}) \mid \theta)}$ is *constant* as a function of $\theta$.

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
> $$f(x \mid \theta) = g(T(\bm{x}) \mid \theta) h(\bm{x}).$$

> [!EXAMPLE|label:Normal sufficient statistic (cont.)]
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
> and 
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

### Exercises

1. Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. sample from $\text{Gamma}(\alpha,\ \beta)$. Prove that $T(\bm{X}) = \left(\sum_{j=1}^{n} \log X_j,\ \sum_{j=1}^{n} X_j \right) $ are sufficient for $(\alpha,\ \beta)$.

Proof:

<br>

2. Let $X_1,\ X_2,\ \cdots,\ X_n$ be i.i.d. sample from $\text{Uniform}(\alpha,\ \beta),\ \alpha < \beta$. Prove that $\left(\underset{1 \leqslant i \leqslant n}{\min} ~ X_{i},\ \underset{1 \leqslant i \leqslant n}{\max} ~ X_{i} \right)$ is sufficient for $(\alpha,\ \beta)$.

Proof:

<br>

### 6.2.2 Minimal Sufficient Statistics

For a fixed family of distribution, many sufficient statistics exist. We need to find the one that achieves the maximal data reduction.

> [!DEFINITION]
> A sufficient statistic $T(\bm{X})$ is called a **minimal sufficient statistic** if, for any other sufficient statistic $T'(\bm{X})$, $\exists $ a function $g$ s.t. $T(\bm{x}) = g(T'(\bm{x}))$.



> Exercise 4 在博资考和期中考都出现过。
>
> 手机上拍了个照片，是期中考的难度。