# 7 Point Estimation

## 7.1 Introduction

> [!DEFINITION]
> A **point estimator** is any function $W(X_1,\ \cdots,\ X_n)$ of a sample, i.e., *any statistic is a point estimator.*

## 7.2 Methods of Finding Estimators

### 7.2.1 Method of Moments

Let $X_1,\ \cdots,\ X_n$ be a population with pdf or pmf $f(x \mid \theta_1,\ \cdots,\ \theta_k)$. *Method of moments estimators* are found by equating the first $k$ sample moments to the corresponding $k$ population moments, and solving the resulting system of simultaneous equations.

> [!EXAMPLE|label:Normal method of moments]
> Suppose $X_1,\ \cdots,\ X_n$ are i.i.d. $N(\mu,\ \sigma^{2})$. The system to solve is 
>
> $$\begin{aligned} \overline{X} := \frac{1}{n}\sum_{i=1}^{n} X_{i} &= \mu \\ \frac{1}{n}\sum_{i=1}^{n}X_{i}^{2} &= \mu^{2} + \sigma^{2}. \end{aligned}$$
>
> Solve it and we get the method of moments estimators: 
>
> $$\begin{aligned} \widehat{\mu} &= \overline{X} \\ \widehat{\sigma}^{2} &= \frac{1}{n}\sum_{i=1}^{n} (X_{i} - \overline{X})^{2}. \end{aligned}$$

### 7.2.2 Maximum Likelihood Estimators

> [!DEFINITION]
> For each sample point $\bm{x}$, let $\widehat{\theta}(\bm{x})$ be a parameter value at which $L(\theta \mid \bm{x})$ attains its maximum as a function of $\theta$, with $\bm{x}$ held fixed. A **maximum likelihood estimator (MLE)** of the parameter $\theta$ based on a sample $\bm{X}$ is $\widehat{\theta}(\bm{X})$.
>
> Sometimes maximizing the log-likelihood function $\ell(\theta \mid \bm{x}) := \log L(\theta \mid \bm{x})$ is much more easier.

> [!EXAMPLE|label:Normal MLE]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $N(\theta,\ 1)$. The likelihood function is 
>
> $$\begin{aligned} L(\theta \mid \bm{x}) &= \prod_{i=1}^{n} (2 \pi)^{-1/2} \exp\left[\frac{(x_i - \theta)^{2}}{2} \right] \\ &= (2 \pi)^{-n/2} \exp\left[-\frac{1}{2}\sum_{i=1}^{n} (x_i - \theta)^{2} \right].  \end{aligned}$$
>
> The log-likelihood function is 
>
> $$\ell(\theta \mid \bm{x}) = -\frac{n}{2} \log(2 \pi) - \frac{1}{2}\sum_{i=1}^{n} (x_i - \theta)^{2}.$$
>
> Take derivative w.r.t. $\mu$ and set it to zero, we have 
>
> $$\begin{aligned} \frac{\mathrm{d} \ell(\theta \mid \bm{x})}{\mathrm{d} \theta} &= \sum_{i=1}^{n} (x_i - \theta) = 0, \end{aligned}$$
> 
> which means $\widehat{\theta} = \frac{1}{n}\sum_{i=1}^{n} X_i = \overline{X}$ is a candidate for MLE. To verify it, we can check the second derivative: 
>
> $$\begin{aligned} \frac{\mathrm{d}^{2} \ell(\theta \mid \bm{x})}{\mathrm{d} \theta^{2}} &= -n < 0.\end{aligned}$$
>
> Therefore, the MLE estimator of $\theta$ is $\widehat{\theta} = \overline{X}$.

<span id="Bernoulli_MLE"></span>

> [!EXAMPLE|label:Bernoulli MLE]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $\text{Bernoulli}(p)$. Then the likelihood function is 
>
> $$L(p \mid \bm{x}) = \prod_{i=1}^{n} p^{x_i} (1 - p)^{1 - x_i} = p^{y} (1 - p)^{n - y},$$
> 
> where $y = \sum_{i=1}^{n} x_i$. The log-likelihood function is 
>
> $$\ell(p \mid \bm{x}) = y \log p + (n - y) \log(1 - p).$$
>
> Take derivative w.r.t. $p$ and set it to zero, we have
>
> $$\begin{aligned} \frac{\mathrm{d} \ell(p \mid \bm{x})}{\mathrm{d} p} &= \frac{y}{p} - \frac{n - y}{1 - p} = 0, \end{aligned}$$
>
> which means $\widehat{p} = \frac{1}{n} \sum_{i=1}^{n} X_{i}$ is a candidate for MLE. We can easily see that second derivative is positive, which means $\widehat{p}$ is the MLE estimator of $p$.

> [!THEOREM|label:Invariance property of MLEs]
> If $\widehat{\theta}$ is the MLE of $\theta$, then for any function $\tau(\theta)$, the MLE of $\tau(\theta)$ is $\tau(\widehat{\theta})$.

### 7.2.3 Bayes Estimators

In the classical approach the parameter, $\theta$, is thought to be an unknown constant, whereas in the Bayesian approach $\theta$ is considered to be a random variable that has a distribution. Before the data are observed, we say that $\theta$ has a *prior distribution* denoted by $\pi(\theta)$. Denote the *sampling distribution* (likelihood) by $f(\bm{x} \mid \theta)$, then the *posterior distribution* after observing $\bm{x}$ can be written from Bayes’ theorem as

$$
\pi(\theta \mid \bm{x}) = \frac{f(\bm{x} \mid \theta) \pi(\theta)}{m(\bm{x})},
$$

where $m(\bm{x}) = \int f(\bm{x} \mid \theta) \pi(\theta) ~ \mathrm{d} \theta$ is the marginal distribution of $\bm{X}$.

<span id="Binomial_Bayes_estimation"></span>

> [!EXAMPLE|label:Binomial Bayes estimation]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $\text{Bernoulli}(p)$. Then $Y = \sum_{i=1}^{n} X_{i}$ is $\text{Binomial}(n,\ p)$. We assume the prior distribution on $p$ is $\text{Beta}(\alpha,\ \beta)$. The joint distribution of $Y$ and $p$ is 
>
> $$\begin{aligned} f(y,\ p) &= \left[\binom{n}{y} p^{y} (1 - p)^{n - y} \right] \left[\frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) \Gamma(\beta)} p^{\alpha-1} (1 - p)^{\beta-1} \right] \\ &= \binom{n}{y} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) \Gamma(\beta)} p^{y + \alpha - 1} (1 - p)^{n - y + \beta - 1}. \end{aligned}$$
>
> The marginal pdf of $Y$ is 
>
> $$\begin{aligned} f(y) &= \int_{0}^{1} f(y,\ p) ~\mathrm{d}p \\ &= \binom{n}{y} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) \Gamma(\beta)} \int_{0}^{1} p^{y + \alpha - 1} (1 - p)^{n - y + \beta - 1} ~\mathrm{d}p \\ &= \binom{n}{y} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) \Gamma(\beta)} \frac{\Gamma(y + \alpha) \Gamma(n - y + \beta)}{\Gamma(n + \alpha + \beta)}, \end{aligned}$$
>
> a distribution known as the *Beta-Binomial distribution*. Then, the posterior distribution of $p$ is 
>
> $$f(p \mid y) = \frac{f(y,\ p)}{f(y)} = \frac{\Gamma(n + \alpha + \beta)}{\Gamma(y + \alpha) \Gamma(n - y + \beta)} p^{y + \alpha - 1} (1 - p)^{n - y + \beta - 1},$$
>
> which is just $\text{Beta}(y + \alpha,\ n - y + \beta)$. A natural estimate for $p$ is the mean of the posterior distribution, which would give us as the Bayes estimator of $p$, 
>
> $$\widehat{p}_{\text{B}} = \frac{Y + \alpha}{n + \alpha + \beta}.$$

<span id="risk_functions_note"></span>

> [!NOTE]
> Actually, using the *posterior mean* to estimate a parameter $\theta$ is under an assumption that the *Bayes risk* is of the form $\E_{\theta}(\widehat{\theta} - \theta)^{2}$, which is just the *mean square error (MSE)*. In other words, when we choose MSE as the risk function, the Bayes estimator is the *posterior mean*.
> 
> There are also other risk functions. If we choose mean absolute error (MAE) as the risk function, the Bayes estimator is the *posterior median* (we can also modify the MAE to be piecewise to let the Bayes estimator be other quantiles); if we let the risk function be zero when small mistakes are made, i.e., $\left\vert \theta - \widehat{\theta} \right\vert < K$ for some constant $K > 0$, and let the risk function be another constant $L > 0$ when large mistakes are made, i.e., $\left\vert \theta - \widehat{\theta} \right\vert \geq K$, then the Bayes estimator is the *posterior mode*.

We can see from the example above that, the posterior distribution is of the same form as the prior distribution, which makes things easier by obtaining a closed-form expression for the estimator. In general, for any sampling distribution, there is a natural family of prior distributions, called the *conjugate family*.

> [!DEFINITION]
> Let $\mathcal{F}$ denote the class of pdfs or pmfs $f(x \mid \theta)$ (indexed by $\theta$). A class $\Pi$ of prior distributions is a **conjugate family** for $\mathcal{F}$ if the posterior distribution is in the class $\Pi$, $\forall f \in \mathcal{F}$, $\forall$ priors $\pi \in \Pi$, and $\forall x \in \mathcal{X}$.

### Exercises

1. Let $X_1,\ \cdots,\ X_n$ be a random sample from $N(\theta,\ \sigma^{2})$ population, and suppose that the prior distribution on $\theta$ is $N(\mu,\ \tau^{2})$. Here we assume that $\sigma^{2}$, $\mu$, and $\tau^{2}$ are all known.

    (a) Find the joint pdf of $\overline{X} = \frac{1}{n}\sum_{i=1}^{n} X_{i}$ and $\theta$;

    <details>
    <summary>Solution:</summary>

    Since $\overline{X} \sim N(\theta,\ \sigma^{2} / n)$, the joint pdf of $\overline{X}$ and $\theta$ is given by 

    $$
    \begin{aligned}
        f(\overline{x},\ \theta) &= f(\overline{x} \mid \theta) \pi(\theta) \\
        &= ((\sigma^{2} / n))^{-\frac{1}{2}} \exp\left[\frac{(\overline{x} - \theta)^{2}}{2 \sigma^{2} / n} \right] (2 \pi \tau^{2})^{-\frac{1}{2}} \exp\left[\frac{(\theta - \mu)^{2}}{2 \tau^{2}} \right] \\
        &= \frac{1}{2 \pi} ((\sigma^{2} \tau^{2} / n))^{-\frac{1}{2}} \exp\left[-\frac{1}{2} \left(\frac{n (\overline{x} - \theta)^{2}}{\sigma^{2}} + \frac{(\theta - \mu)^{2}}{\tau^{2}} \right) \right],
    \end{aligned}
    $$

    which is a bivariate Normal distribution.
    </details>

    <br>

    (b) Show that the marginal distribution of $\overline{X}$ is $N(\mu,\ (\sigma^{2}/n) + \tau^{2})$;

    <details>
    <summary>Proof:</summary>

    Since the joint distribution of $\overline{X}$ and $\theta$ is bivariate Normal, the marginal distribution of $\overline{X}$ is also Normal. Under the hierarchical model, we have 

    $$
    \E[\overline{X}] = \E[\E[\overline{X} \mid \theta]] = \E[\theta] = \mu,
    $$

    and 

    $$
    \begin{aligned}
        \Var(\overline{X}) &= \E[\Var(\overline{X} \mid \theta)] + \Var(\E[\overline{X} \mid \theta]) \\
        &= \E[\sigma^{2} / n] + \Var(\theta) \\
        &= \frac{\sigma^{2}}{n} + \tau^{2}.
    \end{aligned}
    $$

    Therefore, the marginal distribution of $\overline{X}$ is $N(\mu,\ (\sigma^{2}/n) + \tau^{2})$.
    </details>

    <br>

    (c) Show that the posterior distribution of $\theta$ is $N((\tau^{2} \overline{x} + (\sigma^{2} / n) \mu) / ((\sigma^{2} / n) + \tau^{2}),\ (\sigma^{2} \tau^{2} / n) / ((\sigma^{2} / n) + \tau^{2}))$ where $\overline{x}$ is the observation mean.

    <details>
    <summary>Proof:</summary>

    The posterior distribution of $\theta$ is given by 

    $$
    \begin{aligned}
        f(\theta \mid \overline{x}) &= \frac{f(\overline{x},\ \theta)}{f(\overline{x})} \\
        &= \frac{\frac{1}{2 \pi} ((\sigma^{2} \tau^{2} / n))^{-\frac{1}{2}} \exp\left[-\frac{1}{2} \left(\frac{n (\overline{x} - \theta)^{2}}{\sigma^{2}} + \frac{(\theta - \mu)^{2}}{\tau^{2}} \right) \right]}{[2 \pi ((\sigma^{2} / n) + \tau^{2})]^{-\frac{1}{2}} \exp\left[-\frac{1}{2} \left(\frac{(\overline{x} - \mu)^{2}}{(\sigma^{2} / n) + \tau^{2}} \right) \right]} \\
        &= \left(2 \pi \frac{\sigma^{2} \tau^{2} / n}{(\sigma^{2} / n) + \tau^{2}} \right)^{-\frac{1}{2}} \exp\bigg[-\frac{1}{2} \bigg(\frac{n (\overline{x} - \theta)^{2}}{\sigma^{2}} + \frac{(\theta - \mu)^{2}}{\tau^{2}} \\ &\qquad - \frac{(\overline{x} - \mu)^{2}}{(\sigma^{2} / n) + \tau^{2}} \bigg) \bigg] \\
        &= \left(2 \pi \frac{\sigma^{2} \tau^{2} / n}{(\sigma^{2} / n) + \tau^{2}} \right)^{-\frac{1}{2}} \exp\left[-\frac{1}{2} \frac{\left[\theta - \frac{\tau^{2} \overline{x} + (\sigma^{2} / n) \mu}{(\sigma^{2} / n) + \tau^{2}} \right]^{2}}{\frac{\sigma^{2} \tau^{2} / n}{(\sigma^{2} / n) + \tau^{2}}}\right],
    \end{aligned}
    $$

    which means the posterior distribution of $\theta$ is $N((\tau^{2} \overline{x} + (\sigma^{2} / n) \mu) / ((\sigma^{2} / n) + \tau^{2}),\ (\sigma^{2} \tau^{2} / n) / ((\sigma^{2} / n) + \tau^{2}))$.
    </details>

## 7.3 Methods of Evaluating Estimators

### 7.3.1 Mean Square Error

> [!DEFINITION]
> The **mean square error (MSE)** of an estimator $\widehat{\theta}$ of a parameter $\theta$ is the function of $\theta$ defined by $\E_{\theta}[(\widehat{\theta} - \theta)^{2}]$, which can be decomposed as 
> 
> $$\E_{\theta}[(\widehat{\theta} - \theta)^{2}] = \Var_{\theta}(\widehat{\theta}) + (\E_{\theta}[\widehat{\theta}] - \theta)^{2},$$
> 
> where the term $\E_{\theta}[\widehat{\theta}] - \theta$ is called the **bias** of the estimator $\widehat{\theta}$. An estimator whose bias is identically (w.r.t. $\theta$) zero is called **unbiased**.

<span id="Normal_MSE"></span>

> [!EXAMPLE|label:Normal MSE]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $N(\mu,\ \sigma^{2})$. The statistics $\overline{X}$ and $S^{2}$ are both unbiased estimators since 
>
> $$\E[\overline{X}] = \mu,\quad \E[S^{2}] = \sigma^{2},\quad \forall \mu,\ \sigma^{2}.$$
>
> Then the MSEs of these estimators are given by 
>
> $$\begin{aligned} \E[(\overline{X} - \mu)^{2}] &= \Var(\overline{X}) = \frac{\sigma^{2}}{n}, \\ \E[(S^{2} - \sigma^{2})^{2}] &= \Var(S^{2}) = \frac{2 \sigma^{4}}{n - 1} \end{aligned}$$
>
> since $\overline{X} \sim N(\mu,\ \sigma^{2} / n)$ and $(n - 1) S^{2} / \sigma^{2} \sim \chi_{n - 1}^{2}$ whose variance is $2 (n - 1)$.
>
> An alternative estimator of $\sigma^{2}$ is the MLE estimator $\widehat{\sigma}^{2} = \frac{1}{n}\sum_{i=1}^{n} (X_{i} - \overline{X})^{2} = \frac{n - 1}{n} S^{2}$, which is biased. The MSE of it is given by 
>
> $$\E[(\widehat{\sigma}^{2} - \sigma^{2})^{2}] = \frac{(n - 1)^{2}}{n^{2}} \frac{2 \sigma^{4}}{n - 1} + \left(\frac{n - 1}{n} \sigma^{2} - \sigma^{2} \right)^{2} = \frac{2 n - 1}{n^{2}} \sigma^{4}.$$
>
> Since 
>
> $$\frac{2 n - 1}{n^{2}} - \frac{2}{n - 1} = \frac{(2 n - 1)(n - 1) - 2 n^{2}}{n^{2} (n - 1)} = \frac{-3 n + 1}{n^{2} (n - 1)} < 0,$$
>
> the MSE of the MLE estimator is smaller than the unbiased estimator $S^{2}$. This means we can improve the MSE by trading off variance for bias.

> [!EXAMPLE|label:Binomial MSE]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $\text{Bernoulli}(p)$. From the [Bernoulli MLE example](#Bernoulli_MLE) we know that the MLE estimator of $p$ is $\widehat{p} = \frac{1}{n} \sum_{i=1}^{n} X_{i}$, which is also unbiased. Then the MSE of it is 
>
> $$\E_{p}[(\widehat{p} - p)^{2}] = \Var_{p}(\widehat{p}) = \frac{n p (1 - p)}{n^{2}} = \frac{p (1 - p)}{n}.$$
>
> From the [Binomial Bayes estimation example](#Binomial_Bayes_estimation) we know that the Bayes estimator of $p$ is $\widehat{p}_{\text{B}} = \frac{Y + \alpha}{n + \alpha + \beta}$, then the MSE of it is
>
> $$\begin{aligned} \E_{p}[(\widehat{p}_{\text{B}} - p)^{2}] &= \Var_{p}(\widehat{p}_{\text{B}}) + (\E_{p}[\widehat{p}_{\text{B}}] - p)^{2} \\ &= \frac{n p (1 - p)}{(n + \alpha + \beta)^{2}} + \left(\frac{n p + \alpha}{n + \alpha + \beta} - p \right)^{2}. \end{aligned}$$
>
> In the absence of good prior information about $p$, we might try to choose $\alpha$ and $\beta$ to make the MSE of $\widehat{p}_{\text{B}}$ constant (w.r.t. $p$). Thus, we choose $\alpha = \beta = \sqrt{n / 4}$, which yields 
>
> $$\widehat{p}_{\text{B}} = \frac{Y + \sqrt{n / 4}}{n + \sqrt{n}} \quad \text{and} \quad \E_{p}[(\widehat{p}_{\text{B}} - p)^{2}] = \frac{n}{4 (n + \sqrt{n})^{2}}.$$
>
> We show the MSEs of the MLE estimator and the Bayes estimator in the following figure.
>
> <div align='center'>
> 
> ![](image/2023-11-27-21-12-10.png)
> </div align='center'>
>
> From the figure on the left we can see that, unless we have a strong belief that $p$ is near $0$ or $1$, the Bayes estimator is the better choice when the sample size $n$ is small; from the figure on the right we can see that, when the sample size is large, the MLE estimator is better unless we have a strong belief that $p$ is close to $\frac{1}{2}$.

### 7.3.2 Best Unbiased Estimators

> [!DEFINITION]
> An estimator $\widehat{\theta}^{*}$ is a **best unbiased estimator** of $\tau(\theta)$ if it is an unbiased estimator and, for any other unbiased estimator $\widehat{\theta}$, we have $\Var_{\theta}(\widehat{\theta}^{*}) \leqslant \Var_{\theta}(\widehat{\theta}),\ \forall \theta$. $\widehat{\theta}^{*}$ is also called a **uniformly minimum variance unbiased estimator (UMVUE)** of $\tau(\theta)$.

<span id="Cramer_Rao_Inequality"></span>

> [!THEOREM|label:Cramér-Rao Inequality]
> Let $X_1,\ \cdots,\ X_n$ be a sample with pdf $f(\bm{x} \mid \theta)$, and let $\widehat{\theta}(\bm{X})$ be any estimator satisfying 
>
> $$\frac{\mathrm{d}}{\mathrm{d}\theta}\E_{\theta}[\widehat{\theta}(\bm{X})] = \int_{\mathcal{X}} \frac{\partial }{\partial \theta} [\widehat{\theta}(\bm{x}) f(\bm{x} \mid \theta)] ~\mathrm{d}\bm{x}$$
>
> and 
>
> $$\Var_{\theta}(\widehat{\theta}(\bm{X})) < \infty.$$
>
> Then 
>
> $$\Var_{\theta}(\widehat{\theta}(\bm{X})) \geqslant \frac{\left(\frac{\mathrm{d}}{\mathrm{d}\theta} \E_{\theta}[\widehat{\theta}(\bm{X})] \right)^{2}}{\E_{\theta}\left[\left(\frac{\partial }{\partial \theta} \ell(\theta \mid \bm{X}) \right)^{2} \right]},$$
>
> where $\ell(\theta \mid \bm{X}) := \log f(\bm{X} \mid \theta)$ is the log-likelihood function. For unbiased estimators, we have $\E_{\theta}[\widehat{\theta}(\bm{X})] = \theta$ and thus the nominator is $1$.
>
> If additionally, $X_1,\ \cdots,\ X_n$ are i.i.d. with pdf $f(x \mid \theta)$, then 
>
> $$\Var_{\theta}(\widehat{\theta}(\bm{X})) \geqslant \frac{\left(\frac{\mathrm{d}}{\mathrm{d}\theta} \E_{\theta}[\widehat{\theta}(\bm{X})] \right)^{2}}{n I(\theta)}.$$
>
> where $I(\theta) := \E_{\theta}\left[\left(\frac{\partial }{\partial \theta} \ell(\theta \mid \bm{X}) \right)^{2} \right] > 0$ is the *Fisher information* of $X_{i}$, and the *Fisher information* of the whole sample is $n I(\theta)$.

Intuitively, if we have more information about $\theta$, then the Fisher information would be larger and the variance bound would be smaller, which means we would be more confident about the estimation. There is another way to calculate the Fisher information.

> [!THEOREM]
> If $f(x \mid \theta)$ satisfies 
>
> $$\frac{\mathrm{d}}{\mathrm{d}\theta}\E_{\theta}\left[\frac{\partial }{\partial \theta}\ell(\theta \mid X) \right] = \int \frac{\partial }{\partial \theta}\left[\left(\frac{\partial }{\partial \theta}\ell(\theta \mid x) \right) f(x \mid \theta) \right] ~\mathrm{d}x,$$
>
> e.g., an *exponential family*, then 
>
> $$I(\theta) := \E_{\theta}\left[\left(\frac{\partial }{\partial \theta}\ell(\theta \mid X) \right)^{2} \right] = -\E_{\theta}\left[\frac{\partial^{2}}{\partial \theta^{2}}\ell(\theta \mid X) \right].$$

> [!EXAMPLE|label:Poisson unbiased estimator]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $\text{Poisson}(\lambda)$, and let $\overline{X}$ and $S^{2}$ be the sample mean and variance, respectively. Since both the population mean and variance of $\text{Poisson}(\lambda)$ are $\lambda$, from [properties of sample mean and variance](#courses/advanced_statistics/5_properties_of_a_random_sample.md#properties_of_sample_mean_and_variance) we know that $\overline{X}$ and $S^{2}$ are both unbiased estimators of $\lambda$. To determine which one is better, we should now compare their variances.
>
> Again from [properties of sample mean and variance](#courses/advanced_statistics/5_properties_of_a_random_sample.md#properties_of_sample_mean_and_variance) we know that 
>
> $$\Var(\overline{X}) = \frac{\lambda}{n}.$$
>
> But the variance of $S^{2}$ is hard to calculate. Instead, we can use the Cramér-Rao Inequality to get a lower bound of all unbiased estimators of $\lambda$. First, the nominator of the Cramér-Rao lower bound is 
>
> $$\left(\frac{\mathrm{d}}{\mathrm{d}\lambda} \E_{\lambda}[\widehat{\lambda}(\bm{X})] \right)^{2} = 1.$$
> 
> Then, since Poisson distribution is an exponential family, using the theorem above we have 
>
> $$\begin{aligned} I(\lambda) &= - \E_{\lambda}\left[\frac{\partial^{2}}{\partial \lambda^{2}}\ell(\lambda \mid X) \right] \\ &= -\E_{\lambda}\left[\frac{\partial^{2}}{\partial \lambda^{2}}\log \frac{\lambda^{X} e^{-\lambda}}{X!} \right] \\ &= -\E_{\lambda}\left[\frac{\partial^{2}}{\partial \lambda^{2}}(X \log \lambda - \lambda - \log X!) \right] \\ &= -\E_{\lambda}\left[\frac{\partial}{\partial \lambda}\left(\frac{X}{\lambda} - 1 \right) \right] \\ &= -\E_{\lambda}\left[-\frac{X}{\lambda^{2}} \right] \\ &= \frac{1}{\lambda}. \end{aligned}$$
>
> Therefore, the Cramér-Rao lower bound is $\frac{\lambda}{n}$, which means $\overline{X}$ is a best unbiased estimator of $\lambda$.

It is important to remember that a key assumption of Cramér-Rao Inequality is the ability to differentiate under the integral sign, which, of course, is somewhat restrictive. *Densities in exponential class satisfy the assumptions*, like the example above. However, in general, such assumptions need to be checked, or contradictions such as the following will arise.

> [!EXAMPLE|label:Unbiased estimator for the scale uniform]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. with pdf $f(x \mid \theta) = 1 / \theta,\ 0 < x < \theta$. Since $\frac{\partial }{\partial \theta}\log f(x \mid \theta) = -1 / \theta$, we have 
>
> $$I(\theta) = \E_{\theta}\left[\left(\frac{\partial }{\partial \theta}\ell(\theta \mid X) \right)^{2} \right] = \frac{1}{\theta^{2}}.$$
>
> Now we want to find an unbiased estimator with small variance. As a first guess, we might try a sufficient statistic. The joint pdf of the random sample is
>
> $$f(\bm{x} \mid \theta) = \frac{1}{\theta^{n}} \prod_{i=1}^{n} I_{(0,\ \theta)}(x_i) = \frac{1}{\theta^{n}} I_{(0,\ \theta)}(x_{(n)}),$$
>
> where $x_{(n)} := \max_{i} x_i$. We can easily find that $X_{(n)}$ is a sufficient statistic for $\theta$. The pdf of $Y := X_{(n)}$ is given by 
>
> $$f(y \mid \theta) = \frac{n!}{(n-1)! 0!} \frac{1}{\theta} \left(\frac{1}{\theta} y \right)^{n-1} = \frac{n y^{n-1}}{\theta^{n}},\quad 0 < y < \theta.$$
>
> Then we have 
>
> $$\E_{\theta}[Y] = \int_{0}^{\theta} \frac{n y^{n}}{\theta^{n}} ~\mathrm{d}y = \frac{n}{n + 1} \theta,$$
>
> which means we can construct an unbiased estimator $\widehat{\theta} := \frac{n + 1}{n} Y$. Note that 
>
> $$\E_{\theta}[Y^{2}] = \int_{0}^{\theta} \frac{n y^{n+1}}{\theta^{n}} ~\mathrm{d}y = \frac{n}{n + 2} \theta^{2},$$
> 
> so the variance of $\widehat{\theta}$ is given by 
>
> $$\Var_{\theta}(\widehat{\theta}) = \E_{\theta}\left[\left(\frac{n + 1}{n} Y \right)^{2} \right] - \theta^{2} = \frac{1}{n (n + 2)} \theta^{2} < \frac{1}{n} \theta^{2}.$$
>
> This indicates that the Cramér-Rao Inequality is not applicable to this pdf. To see why, we can check that for any unbiased estimator $h(x)$, 
>
> $$\begin{aligned} \frac{\mathrm{d}}{\mathrm{d}\theta}\int_{0}^{\theta} h(x) f(x \mid \theta) ~\mathrm{d}x &= \frac{\mathrm{d}}{\mathrm{d}\theta}\int_{0}^{\theta} \frac{h(x)}{\theta} ~\mathrm{d}x \\ &= \frac{h(\theta)}{\theta} - \frac{1}{\theta^{2}} \int_{0}^{\theta} h(x) ~\mathrm{d}x \\ &\neq \int_{0}^{\theta} h(x) \frac{\partial }{\partial \theta}f(x \mid \theta) ~\mathrm{d}x, \end{aligned}$$
>
> unless $\frac{h(\theta)}{\theta} = 0,\ \forall \theta$. Hence, the Cramér-Rao Inequality is not applicable. In general, *it is not applicable to any pdf with its range depending on the parameter.*

> [!EXAMPLE|label:Normal variance bound]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $N(\mu,\ \sigma^{2})$, and consider estimation of $\sigma^{2}$, where $\mu$ is unknown. Since Normal distribution is an exponential family, the assumptions of Cramér-Rao Inequality are satisfied. Then, the Fisher information is given by 
>
> $$\begin{aligned} I(\mu,\ \sigma^{2}) &= -\E\left[\frac{\partial^{2}}{\partial (\sigma^{2})^{2}}\ell(\mu,\ \sigma^{2} \mid X) \ \middle\vert \ \mu,\ \sigma^{2} \right] \\ &= -\E\left[\frac{\partial^{2}}{\partial (\sigma^{2})^{2}}\left[-\frac{\log(2 \pi \sigma^{2})}{2} - \frac{(X - \mu)^{2}}{2 \sigma^{2}} \right] \ \middle\vert \ \mu,\ \sigma^{2} \right] \\ &= -\E\left[\frac{\partial}{\partial \sigma^{2}}\left[- \frac{1}{2 \sigma^{2}} + \frac{(X - \mu)^{2}}{2 (\sigma^{2})^{2}} \right] \ \middle\vert \ \mu,\ \sigma^{2} \right] \\ &= -\E\left[\frac{1}{2 (\sigma^{2})^{2}} - \frac{(X - \mu)^{2}}{(\sigma^{2})^{3}} \ \middle\vert \ \mu,\ \sigma^{2} \right] \\ &= \frac{1}{2 \sigma^{4}}, \end{aligned}$$
>
> which means the Cramér-Rao lower bound is $\frac{2 \sigma^{4}}{n}$. From [Normal MSE](#Normal_MSE) we have known that the variance of $S^{2}$ is $\frac{2 \sigma^{4}}{n - 1}$, so $S^{2}$ is unbiased but is not a best unbiased estimator.

> [!THEOREM|label:Attainment of the Cramér-Rao lower bound]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $f(x \mid \theta)$, where $f(x \mid \theta)$ satisfies the conditions of the [Cramér-Rao Inequality](#Cramer_Rao_Inequality). Let $\ell(\theta \mid \bm{x}) := \sum_{i=1}^{n} \log f(x_i \mid \theta)$ denote the log-likelihood function. If $\widehat{\tau}(\bm{X})$ is any unbiased estimator of $\tau(\theta)$, then $\widehat{\tau}(\bm{X})$ attains the Cramér-Rao lower bound *iff* 
>
> $$g(\theta) [\widehat{\tau}(\bm{x}) - \tau(\theta)] = \frac{\partial }{\partial \theta}\ell(\theta \mid \bm{x})$$
>
> for some function $g(\theta)$.

<details>
<summary>Proof:</summary>

We prove the “$\impliedby$” side and the “$\implies$” side is just the reverse process. The Cramér-Rao Inequality is 

$$
\Var_{\theta}(\widehat{\tau}(\bm{X})) \geqslant \frac{\left(\frac{\mathrm{d}}{\mathrm{d}\theta} \E_{\theta}[\widehat{\tau}(\bm{X})] \right)^{2}}{\E_{\theta}\left[\left(\frac{\partial }{\partial \theta} \ell(\theta \mid \bm{X}) \right)^{2} \right]}.
$$

If $g(\theta) [\widehat{\tau}(\bm{x}) - \tau(\theta)] = \frac{\partial }{\partial \theta}\ell(\theta \mid \bm{x})$, we have $\E\left[\frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X}) \right] = 0$ and thus the Cramér-Rao Inequality can be written as

$$
\Var_{\theta}(\widehat{\tau}(\bm{X})) \geqslant \frac{\left(\frac{\mathrm{d}}{\mathrm{d}\theta} \E_{\theta}[\widehat{\tau}(\bm{X})] \right)^{2}}{\Var_{\theta}\left(\frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X}) \right)}.
$$

By applying the [Covariance Inequality](courses/advanced_statistics/4_multiple_random_variables.md#Covariance_Inequality) to $\widehat{\tau}(\bm{X})$ and $\frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X})$, we have 

$$
\left(\Cov_{\theta}\left(\widehat{\tau}(\bm{X}),\ \frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X}) \right) \right)^{2} \leqslant \Var_{\theta}(\widehat{\tau}(\bm{X})) \Var_{\theta}\left(\frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X}) \right).
$$

Note that since $\E\left[\frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X}) \right] = 0$, rearranging the inequality above gives 

$$
\Var_{\theta}(\widehat{\tau}(\bm{X})) \geqslant  \frac{\left[\E_{\theta}\left[\widehat{\tau}(\bm{X}) \frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X}) \right] \right]^{2}}{\Var_{\theta}\left(\frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X}) \right)}.
$$

Note that under the assumptions of the Cramér-Rao Inequality, we have 

$$
\begin{aligned}
    \E_{\theta}\left[\widehat{\tau}(\bm{X}) \frac{\partial }{\partial \theta}\ell(\theta \mid \bm{X}) \right] &= \frac{\mathrm{d}}{\mathrm{d}\theta}\E_{\theta}\left[\widehat{\tau}(\bm{X}) l(\theta \mid \bm{X}) \right] \\
    &= \E_{\theta}\left[\widehat{\tau}(\bm{X}) \frac{\partial }{\partial \theta}\log f(\bm{X} \mid \theta) \right] \\
    &= \E_{\theta}\left[\widehat{\tau}(\bm{X}) \left(\frac{\partial }{\partial \theta} f(\bm{X} \mid \theta) \right) / f(\bm{X} \mid \theta) \right] \\
    &= \int_{\mathcal{X}} \frac{\partial }{\partial \theta} [\widehat{\tau}(\bm{x}) f(\bm{x} \mid \theta)] ~\mathrm{d}x \\
    &= \frac{\mathrm{d}}{\mathrm{d}\theta}\E_{\theta}[\widehat{\tau}(\bm{X})],
\end{aligned}
$$

which means we attain the Cramér-Rao lower bound.
</details>

<br>

> [!EXAMPLE|label:Normal variance bound （continued）]
> The log-likelihood function of $X_1,\ \cdots,\ X_n$ is given by
>
> $$\ell(\mu,\ \sigma^{2} \mid \bm{x}) = -\frac{n}{2} \log(2 \pi \sigma^{2}) - \frac{1}{2 \sigma^{2}} \sum_{i=1}^{n} (x_i - \mu)^{2},$$
>
> and thus 
>
> $$\begin{aligned} \frac{\partial }{\partial \sigma^{2}} \ell(\mu,\ \sigma^{2} \mid \bm{x}) &= -\frac{n}{2 \sigma^{2}} + \frac{1}{2 (\sigma^{2})^{2}} \sum_{i=1}^{n} (x_i - \mu)^{2} \\ &= \frac{n}{2 \sigma^{4}} \left(\sum_{i=1}^{n} \frac{(x_i - \mu)^{2}}{n} - \sigma^{2} \right). \end{aligned}$$
>
> Taking $g(\sigma^{2}) = \frac{n}{2 \sigma^{4}}$, by the attainment theorem we know that the best unbiased estimator of $\sigma^{2}$ is $\sum_{i=1}^{n} \frac{(x_i - \mu)^{2}}{n}$, which is calculable only if $\mu$ is known. In other words, if $\mu$ is unknown, the lower bound cannot be attained.

### 7.3.3 Sufficiency and Unbiasedness

In the previous section, the concept of sufficiency was not used in our search for unbiased estimators. We will now see that consideration of sufficiency is a powerful tool, indeed.

> [!THEOREM|label:Rao-Blackwell Theorem]
> Let $\widehat{\tau}$ be any *unbiased estimator* of $\tau(\theta)$, and let $T$ be a *sufficient statistic* for $\theta$. Define $\phi(T) = \E[\widehat{\tau} \mid T]$. Then $\phi(T)$ is a *uniformly better unbiased estimator* of $\tau(\theta)$.

<details>
<summary>Proof:</summary>

First, since $T$ is a sufficient statistic for $\theta$, by definition we know that $\phi(T) = \E[\widehat{\tau} \mid T]$ does not depend on $\theta$, which means it can be an estimator. Then, since 

$$
\E_{\theta}[\phi(T)] = \E_{\theta}[\E[\widehat{\tau} \mid T]] = \E_{\theta}[\widehat{\tau}] = \tau(\theta),
$$

$\phi(T)$ is an unbiased estimator of $\tau(\theta)$. Also, 

$$
\Var_{\theta}(\widehat{\tau}) = \E_{\theta}[\Var(\widehat{\tau} \mid T)] + \Var_{\theta}(\E[\widehat{\tau} \mid T]) \geqslant \Var_{\theta}(\E[\widehat{\tau} \mid T]) = \Var_{\theta}(\phi(T)),
$$

which means $\phi(T)$ is uniformly better than $\widehat{\tau}$.
</details>

<br>

> [!NOTE]
> Using Rao-Blackwell Theorem we can find a better unbiased estimator, but it is not necessarily the best unbiased estimator.

> [!THEOREM|label:Uniqueness of the best unbiased estimator]
> If $\widehat{\tau}^{*}$ is a best unbiased estimator of $\tau(\theta)$, then $\widehat{\tau}^{*}$ is unique.

> [!THEOREM]
> An *unbiased estimator* $\widehat{\tau}$ of $\tau(\theta)$ is the *best unbiased estimator* *iff* $\widehat{\tau}$ is *uncorrelated* with all unbiased estimators of $0$, i.e., $\Cov_{\theta}(\widehat{\tau},\ U) = 0,\ \forall \theta$, for any $U$ s.t. $\E_{\theta}[U] = 0$.

> [!THEOREM]
> Let $T$ be a *complete sufficient statistic* for a parameter $\theta$, and let $\phi(T)$ be any estimator based only on $T$. Then $\phi(T)$ is the *unique best unbiased estimator* of its *expected value*.

> [!EXAMPLE|label:Binomial best unbiased estimation]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $\text{Binomial}(k,\ \theta)$. The problem is to estimate the probability of exactly one success from a $\text{Binomial}(k,\ \theta)$, i.e., estimate 
>
> $$\tau(\theta) = P_{\theta}(X = 1) = k \theta (1 - \theta)^{k - 1}.$$
>
> Since Binomial distribution is an exponential family, we can easily verify that $T := \sum_{i=1}^{n} X_{i}$ is a complete sufficient statistic for $\theta$. Now we want to find an unbiasd estimator of $\tau(\theta)$ based on it. A simple-minded estimator is defined by 
>
> $$h(X_1) = \begin{cases} 1,\ &\text{if } X_1 = 1 \\ 0,\ &\text{otherwise} \end{cases}.$$
>
> Since 
>
> $$\E_{\theta}[h(X_1)] = \sum_{x_1=0}^{k} h(x_1) \binom{k}{x_1} \theta^{x_1} (1 - \theta)^{k - x_1} = k \theta (1 - \theta)^{k - 1},$$
>
> $h(X_1)$ is an unbiased estimator of $\tau(\theta)$. Then, applying the theorem above, we can construct the best unbiased estimator of $\tau(\theta)$: 
>
> $$\phi(T) = \E\left[h(X_1) \mid T \right].$$
>
> This expectation is hard to calculate. Instead, we evaluate it after observing $T = t$: 
>
> $$\begin{aligned} \phi(t) &= \E[h(X_1) \mid T = t] \\ &= P(X_1 = 1 \mid T = t) \\ &= \frac{P_{\theta}(X_1 = 1,\ T = t)}{P_{\theta}(T = t)} \\ &= \frac{P_{\theta}(X_1 = 1,\ \sum_{i=2}^{n} X_{i} = t - 1)}{P_{\theta}(T = t)} \\ &= \frac{P_{\theta}(X_1 = 1) P_{\theta}(\sum_{i=2}^{n} X_{i} = t - 1)}{P_{\theta}(T = t)}. \end{aligned}$$
>
> Since $X_1 \sim \text{Binomial}(k,\ \theta)$, $\sum_{i=2}^{n} X_{i} \sim \text{Binomial}((n - 1) k,\ \theta)$, and $\sum_{i=1}^{n} X_{i} \sim \text{Binomial}(n k,\ \theta)$, we have 
>
> $$\phi(t) = \frac{\left[k \theta (1 - \theta)^{k - 1} \right] \left[\binom{(n - 1) k}{t - 1} \theta^{t - 1} (1 - \theta)^{(n - 1) k - (t - 1)} \right]}{\binom{n k}{t} \theta^{t} (1 - \theta)^{n k - t}} = k \frac{\binom{(n - 1) k}{t - 1}}{\binom{n k}{t}},$$
>
> which means the best unbiased estimator of $\tau(\theta)$ is 
>
> $$\phi(T) = k \frac{\binom{(n - 1) k}{T - 1}}{\binom{n k}{T}}.$$

### 7.3.4 Loss Function Optimality

> [!DEFINITION]
> A **risk function** $R$ of a parameter $\theta$ and estiamator $\delta$ is the expected value of the loss between them, i.e., 
>
> $$R(\theta,\ \delta) = \E_{\theta}[L(\theta,\ \delta(\bm{X}))],$$
>
> where $L$ is the loss function.

> [!NOTE]
> The value of risk function changes with $\theta$, i.e., it will be different with different values of $\theta$.

In [Section 7.3.1](#731-mean-square-error) we have already introduce the MSE risk funcion based on MSE loss, but there are still other risk (loss) functions, as mentioned in [Section 7.2.3](#risk_functions_note).

In the Bayesian approach, the risk functions are obtained by averaging the risk function over the prior distribution of $\theta$, i.e., 

$$
\int_{\Theta} R(\theta,\ \delta) \pi(\theta) ~\mathrm{d}\theta,
$$

where $\pi(\theta)$ is the prior distribution of $\theta$. This is called the *Bayes risk function*. We can further write it as 

$$
\int_{\Theta} R(\theta,\ \delta) \pi(\theta) ~\mathrm{d}\theta = \int_{\Theta} \left(\int_{\mathcal{X}} L(\theta,\ \delta(\bm{x})) f(\bm{x} \mid \theta) ~\mathrm{d}\bm{x} \right) \pi(\theta) ~\mathrm{d}\theta.
$$

If we write $f(\bm{x} \mid \theta) \pi(\theta) = \pi(\theta \mid \bm{x}) m(\bm{x})$, where $m(\bm{x})$ is the marginal distribution of $\bm{X}$, then the Bayes risk can be written as 

$$
\int_{\Theta} R(\theta,\ \delta) \pi(\theta) ~\mathrm{d}\theta = \int_{\mathcal{X}} \left(\int_{\Theta} L(\theta,\ \delta(\bm{x})) \pi(\theta \mid \bm{x}) ~\mathrm{d}\theta \right) m(\bm{x}) ~\mathrm{d}\bm{x}.
$$

### Exercises

1. Let $X_1,\ \cdots,\ X_n$ be i.i.d. $\text{Bernoulli}(p)$. Show that the variance of $\overline{X}$ attains the Cramér-Rao lower bound, and hence $\overline{X}$ is the best unbiased estimator of $p$.

    <details>
    <summary>Proof:</summary>

    The log-likelihood function of $X_1,\ \cdots,\ X_n$ is given by

    $$
    \begin{aligned}
        \frac{\partial }{\partial p}\ell(p \mid \bm{x}) &= \frac{\partial }{\partial p}\sum_{i=1}^{n} \log f(x_i \mid p) \\
        &= \frac{\partial }{\partial p}\sum_{i=1}^{n} \log \left[p^{x_i} (1 - p)^{1 - x_i} \right] \\
        &= \frac{\partial }{\partial p}\sum_{i=1}^{n} \left[x_i \log p + (1 - x_i) \log (1 - p) \right] \\
        &= \frac{\partial }{\partial p}[n \overline{x} \log p + n (1 - \overline{x}) \log (1 - p)] \\
        &= \frac{n \overline{x}}{p} - \frac{n (1 - \overline{x})}{1 - p} \\
        &= \frac{n}{p (1 - p)} (\overline{x} - p).
    \end{aligned}
    $$

    Taking $g(p) = \frac{n}{p (1 - p)}$, by the attainment theorem we know that the best unbiased estimator of $p$ is $\overline{X}$.
    </details>

    <br>

2. Data $(x_i,\ Y_i),\ i=1,\ 2,\ \cdots,\ n$ are modeled, assuming $x_1,\ \cdots,\ x_n$ are fixed and positive constants; $Y_1,\ \cdots,\ Y_n$ are independent; $Y_i$ is distributed as $\text{Exponential}(\theta x_i)$ with mean $\theta x_i$ for each $i$; and $\theta > 0$ is an unknown parameter. Please find the UMVUE of $\theta$.

    <details>
    <summary>Solution:</summary>

    The joint pdf of $Y_1,\ \cdots,\ Y_n$ is given by

    $$
    \begin{aligned}
        f(\bm{y} \mid \theta) &= \prod_{i=1}^{n} \frac{1}{\theta x_i} \exp\left(-\frac{y_i}{\theta x_i} \right) \\
        &= \frac{1}{\theta^{n} \prod_{i=1}^{n} x_i} \exp\left(-\frac{1}{\theta} \sum_{i=1}^{n} \frac{y_i}{x_i} \right),
    \end{aligned}
    $$

    from which we can easily see that $T := \sum_{i=1}^{n} \frac{y_i}{x_i}$ is a complete sufficient statistic for $\theta$. Then we construct an estimator $\widehat{\theta} := \frac{1}{n} \sum_{i=1}^{n} \frac{Y_i}{x_i}$ whose expectation is given by

    $$
    \E_{\theta}[\widehat{\theta}] = \frac{1}{n} \sum_{i=1}^{n} \frac{1}{x_i} \E_{\theta}[Y_i] = \frac{1}{n} \sum_{i=1}^{n} \frac{1}{x_i} \theta x_i = \theta,
    $$

    which means $\widehat{\theta}$ is unbiased. The UMVUE of $\theta$ is just 

    $$
    \phi(T) := \E[\widehat{\theta} \mid T] = \E\left[\frac{1}{n} \sum_{i=1}^{n} \frac{Y_i}{x_i} \ \middle\vert \ \sum_{i=1}^{n} \frac{Y_i}{x_i} \right] = \frac{1}{n} \sum_{i=1}^{n} \frac{Y_i}{x_i}.
    $$
    </details>

    <br>

3. (p.367, 7.66) The *jackknife* is a general technique for reducing bias in an estimator (Quenouille, 1956). A one-step jackknife estimator is defined as follows. Let $X_1,\ \cdots,\ X_n$ be a random sample, and let $T_n = T_n(X_1,\ \cdots,\ X_n)$ be some estimator of a parameter $\theta$. In order to “jackknife” $T_n$ we calculate the $n$ statistics $T_n^{(i)},\ i=1,\ 2,\ \cdots,\ n$, where $T_n^{(i)}$ is calculated just as $T_n$ but using the $n - 1$ observations with $X_{i}$ removed from the sample. The jackknife estimator of $\theta$, denoted by $\operatorname{JK}(T_n)$, is given by 

    $$
    \operatorname{JK}(T_n) = n T_n - \frac{n - 1}{n} \sum_{i=1}^{n} T_n^{(i)}.
    $$

    (In general, $\operatorname{JK}(T_n)$ will have a smaller bias than $T_n$. See Miller 1974 for a good review of the properties of the jackknife.)

    Now, to be specific, let $X_1,\ \cdots,\ X_n$ be i.i.d. $\text{Bernoulli}(\theta)$. The object is to estimate $\theta^{2}$.

    (a) Show that the MLE of $\theta^{2}$, $(\sum_{i=1}^{n} X_{i} / n)^{2}$, is a biased estimator of $\theta^{2}$.

    <details>
    <summary>Proof:</summary>

    Note that $Y := \sum_{i=1}^{n} X_{i} \sim \text{Binomial}(n,\ \theta)$. The expectation of $(Y / n)^{2}$ is 

    $$
    \begin{aligned}
        \E[(Y / n)^{2}] &= \frac{1}{n^{2}} \E[Y^{2}] \\
        &= \frac{1}{n^{2}} (\Var(Y) + (\E[Y])^{2}) \\
        &= \frac{1}{n^{2}} [n \theta (1 - \theta) + n^{2} \theta^{2}] \\
        &= \theta^{2} + \frac{\theta (1 - \theta)}{n} \\
        &\neq \theta^{2},
    \end{aligned}
    $$

    which means the MLE of $\theta^{2}$ is a biased estimator of $\theta^{2}$.
    </details>

    <br>

    (b) Derive the one-step jackknife estimator based on the MLE.

    <details>
    <summary>Solution:</summary>

    Define $T_n := (Y / n)^{2}$, then the one-step jackknife estimator is given by 

    $$
    \begin{aligned}
        \operatorname{JK}(T_n) &= n T_n - \frac{n - 1}{n} \sum_{i=1}^{n} T_n^{(i)} \\
        &= n \left(\frac{Y}{n} \right)^{2} - \frac{n - 1}{n} \sum_{i=1}^{n} \left(\frac{Y - X_{i}}{n - 1} \right)^{2} \\
        &= \frac{1}{n} Y^{2} - \frac{1}{n (n - 1)} \sum_{i=1}^{n} (Y^{2} - 2 Y X_{i} + X_{i}^{2}) \\
        &= \left[\frac{1}{n} - \frac{n - 2}{n (n - 1)} \right] Y^{2} - \frac{1}{n (n - 1)} \sum_{i=1}^{n} X_{i}^{2} \\
        &= \left[\frac{1}{n} - \frac{n - 2}{n (n - 1)} \right] Y^{2} - \frac{1}{n (n - 1)} Y \\
    \end{aligned}
    $$

    since $X_{i}$ is $0$ or $1$. Therefore, the one-step jackknife estimator based on the MLE is 

    $$
    \begin{aligned}
        \operatorname{JK}(T_n) &= \left[\frac{1}{n} - \frac{n - 2}{n (n - 1)} \right] Y^{2} - \frac{1}{n (n - 1)} Y \\
        &= \frac{\left(\sum_{i=1}^{n} X_{i} \right)^{2} - \sum_{i=1}^{n} X_{i}}{n (n - 1)}.
    \end{aligned}
    $$
    </details>

    <br>

    (c) Show that the one-step jackknife estimator is an unbiased estimator of $\theta^{2}$. (In general, jackknifing only reduces bias. In this special case, however, it removes it entirely.)

    <details>
    <summary>Proof:</summary>

    The expectation of $\operatorname{JK}(T_n)$ is given by 

    $$
    \E[\operatorname{JK}(T_n)] = \frac{\E[Y^{2}] - \E[Y]}{n (n - 1)} = \frac{n \theta (1 - \theta) + n^{2} \theta^{2} - n \theta}{n (n - 1)} = \theta^{2},
    $$

    which means $\operatorname{JK}(T_n)$ is an unbiased estimator of $\theta^{2}$.
    </details>

    <br>

    (d) Is this jackknife estimator the best unbiased estimator of $\theta^{2}$? If so, prove it. If not, find the best unbiased estimator.

    <details>
    <summary>Solution:</summary>

    Since $Y$ is a complete sufficient statistic for $\theta$, the jackknife estimator is the best unbiased estimator of its expected value, i.e., $\theta^{2}$.
    </details>

## Assignments

### Textbook Exercises

*7.13* (p.356) Let $X_1,\ \cdots,\ X_n$ be a sample from a population with double exponential pdf 

$$
f(x \mid \theta) = \frac{1}{2} e^{-\left\vert x - \theta \right\vert},\quad -\infty < x < \infty,\quad -\infty < \theta < \infty.
$$

Find the MLE of $\theta$. (*Hint*: Consider the case of even $n$ separate from that of odd $n$, and find the MLE in terms of the order statistics. A complete treatment of this problem is given in Norton 1984.)

Soluion:

*7.23* (p.359) If $S^{2}$ is the sample variance based on a sample of size $n$ from a Normal population, we know that $(n - 1) S^{2} / \sigma^{2}$ has a $\chi_{n - 1}^{2}$ distribution. The conjugate prior for $\sigma^{2}$ is the *inverted Gamma* pdf, $\text{IG}(\alpha,\ \beta)$, given by 

$$
\pi(\sigma^{2}) = \frac{1}{\Gamma(\alpha) \beta^{\alpha}} \frac{1}{(\sigma^{2})^{\alpha + 1}} e^{-1 / (\beta \sigma^{2})},\quad 0 < \sigma^{2} < \infty,
$$

where $\alpha$ and $\beta$ are positive constants. Show that the posterior distribution of $\sigma^{2}$ is $\text{IG}(\alpha + \frac{n - 1}{2},\ [\frac{(n - 1) S^{2}}{2} + \frac{1}{\beta}]^{-1})$. Find the mean of this distribution, the Bayes estimator of $\sigma^{2}$.

Solution:

*7.38* (p.362) For each of the following distributions, let $X_1,\ \cdots,\ X_n$ be a random sample. Is there a function of $\theta$, say $g(\theta)$, for which there exists an unbiased estimator whose variance attains the Cramér-Rao Lower Bound? If so, find it. If not, show why not.

(a) $f(x \mid \theta) = \theta x^{\theta - 1},\quad 0 < x < 1,\quad \theta > 0$

Solution:

(b) $f(x \mid \theta) = \frac{\log \theta}{\theta - 1} \theta^{x},\quad 0 < x < 1,\quad \theta > 1$

Solution:

*7.44* (p.363) Let $X_1,\ \cdots,\ X_n$ be i.i.d. $N(\theta,\ 1)$. Show that the best unbiased estimator of $\theta^{2}$ is $\overline{X}^{2} - (1 / n)$. Calculate its variance (use Stein’s Identity from Section 3.6), and show that it is greater than the Cramér-Rao Lower Bound.

Proof:

*7.57* (p.365) Let $X_1,\ \cdots,\ X_{n+1}$ be i.i.d. $\text{Bernoulli}(p)$, and define the function $h(p)$ by 

$$
h(p) = P\left(\sum_{i=1}^{n} X_{i} > X_{n+1} \mid p \right),
$$

the probability that the first $n$ observations exceed the $(n + 1)$st.

(a) Show that 

$$
T(X_1,\ \cdots,\ X_{n+1}) = 
\begin{cases}
    1\quad &\text{if } \sum_{i=1}^{n} X_{i} > X_{n+1} \\
    0\quad &\text{otherwise}
\end{cases}
$$

is an unbiased estimator of $h(p)$.

Proof:

(b) Find the best unbiased estimator of $h(p)$.

*7.62* Let $X_1,\ \cdots,\ X_n$ be a random sample from a $N(\theta,\ \sigma^{2})$ population, $\sigma^{2}$ known. Consider estimating $\theta$ using squared error loss. Let $\pi(\theta)$ be a $N(\mu,\ \tau^{2})$ prior distribution on $\theta$ and let $\delta^{\pi}$ be the Bayes estimator of $\theta$. Verify the following formulas for the risk function and Bayes risk.

(a) For any constants $a$ and $b$, the estimator $\delta(\bm{x}) = a \overline{X} + b$ has risk function 

$$
R(\theta,\ \delta) = a^{2} \frac{\sigma^{2}}{n} + (b - (1 - a) \theta)^{2}.
$$

Proof:

(b) Let $\eta = \sigma^{2} / (n \tau^{2} + \sigma^{2})$. The risk function for the Bayes estimator is 

$$
R(\theta,\ \delta^{\pi}) = (1 - \eta)^{2} \frac{\sigma^{2}}{n} + \eta^{2} (\theta - \mu)^{2}.
$$

Proof:

(c) The Bayes risk for the Bayes estimator is 

$$
B(\pi,\ \delta^{\pi}) = \tau^{2} \eta.
$$

Proof:


*7.65* (p.367) A loss function investigated by Zellner (1986) is the LINEX (LINear-EXponential) loss, a loss function that can handle asymmetries in a smooth way. The LINEX loss is given by 

$$
L(\theta,\ a) = e^{c (a - \theta)} - c (a - \theta) - 1,
$$

where $c$ is a positive constant. As the constant $c$ varies, the loss function varies from very asymmetric to almost symmetric.

(a) For $c = 0.2,\ 0.5,\ 1$, plot $L(\theta,\ a)$ as a function of $a - \theta$.

Solution:

(b) If $X \sim F(x \mid \theta)$, show that the Bayes estimator of $\theta$, using a prior $\pi$, is given by $\delta^{\pi}(X) = \frac{-1}{c} \log \E[e^{-c \theta} \mid X]$.

Proof:

(c) Let $X_1,\ \cdots,\ X_n$ be i.i.d. $N(\theta,\ \sigma^{2})$, where $\sigma^{2}$ is known, and suppose that $\theta$ has the noninformative piror $\pi(\theta) = 1$. Show that the Bayes estimator versus LINEX loss is given by $\delta^{B}(\overline{X}) = \overline{X} - (c \sigma^{2} / (2 n))$.

Proof:

(d) Calculate the posterior expected loss for $\delta^{B}(\overline{X})$ and $\overline{X}$ using LINEX loss.

Solution:

(d) Calculate the posterior expected loss for $\delta^{B}(\overline{X})$ and $\overline{X}$ using squared error loss.

Solution:
