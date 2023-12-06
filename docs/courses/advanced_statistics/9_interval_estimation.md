# 9 Interval Estimation

## 9.1 Introduction

> [!DEFINITION]
> An **interval estimate** of a real-valued parameter $\theta$ is any pair of functions, $L(x_1,\ \cdots,\ x_n)$ and $U(x_1,\ \cdots,\ x_n)$, of a sample that satisfy $L(\bm{x}) \leqslant U(\bm{x}),\ \forall x \in \mathcal{X}$. If $\bm{X} = \bm{x}$ is observed, the inference $L(\bm{x}) \leqslant \theta \leqslant U(\bm{x})$ is made. The random interval $[L(\bm{X}),\ U(\bm{X})]$ is called an **interval estimator**.

> [!DEFINITION]
> For an interval estimator $[L(\bm{X}),\ U(\bm{X})]$ of a parameter $\theta$, the **coverage probability** of $[L(\bm{X}),\ U(\bm{X})]$ is the probability that the random interval $[L(\bm{X}),\ U(\bm{X})]$ covers the true parameter, $\theta$. In symbols, it is denoted by $P_{\theta}(\theta \in [L(\bm{X}),\ U(\bm{X})])$.

> [!DEFINITION]
> For an interval estimator $[L(\bm{X}),\ U(\bm{X})]$ of a parameter $\theta$, the **confidence coefficient** of $[L(\bm{X}),\ U(\bm{X})]$ is the *infimum of the coverage probabilities*, $\inf_{\theta} P_{\theta}(\theta \in [L(\bm{X}),\ U(\bm{X})])$.

> [!TIP]
> When the coverage probability does not depend on $\theta$, the confidence coefficient is just the coverage probability.

> [!EXAMPLE|label:Scale uniform interval estimator]
> Let $X_1,\ \cdots,\ X_n$ be a random sample from a $\text{Uniform}(0,\ \theta)$ population and let $Y = \max \left\{X_1,\ \cdots,\ X_n \right\}$. We are interested in an interval estimator of $\theta$. We consider 2 candidate estimators: $[a Y,\ b Y],\ 1 \leqslant a < b$, and $[Y + c,\ Y + d],\ 0 \leqslant c < d$, where $a,\ b,\ c$, and $d$ are specified constants. (Note that $\theta$ is necessarily larger than $y$.) For the first interval we have 
>
> $$P_{\theta}(\theta \in [a Y,\ b Y]) = P_{\theta}(a Y \leqslant \theta \leqslant b Y) = P_{\theta}\left(\frac{1}{b} \leqslant \frac{Y}{\theta} \leqslant \frac{1}{a} \right).$$
>
> Define $T := \frac{Y}{\theta}$, since $f_{Y}(y) = \frac{n y^{n-1}}{\theta^{n}},\ 0 \leqslant y \leqslant \theta$, the pdf of T is given by 
>
> $$f_{T}(t) = n t^{n-1},\quad 0 \leqslant t \leqslant 1.$$
>
> We therefore have 
>
> $$P_{\theta}\left(\frac{1}{b} \leqslant \frac{Y}{\theta} \leqslant \frac{1}{a} \right) = \int_{\frac{1}{b}}^{\frac{1}{a}} n t ^{n-1} ~\mathrm{d}t = \frac{1}{a^{n}} - \frac{1}{b^{n}}.$$
>
> The coverage probability of the first interval is independent of the value of $\theta$, and thus it is also the confidence coefficient.
>
> For the other interval, for $\theta \geqslant d$ a similar calculation yields
>
> $$\begin{aligned} P_{\theta}(\theta \in [Y + c,\ Y + d]) &= P_{\theta}(Y + c \leqslant \theta \leqslant Y + d) \\ &= P_{\theta}\left(1 - \frac{d}{\theta} \leqslant T \leqslant 1 - \frac{c}{\theta} \right) \\ &= \int_{1 - \frac{d}{\theta}}^{1 - \frac{c}{\theta}} n t^{n-1} ~\mathrm{d}t \\ &= \left(1 - \frac{c}{\theta} \right)^{n} - \left(1 - \frac{d}{\theta} \right)^{n}. \end{aligned}$$
>
> In this case, the coverage probability depends on $\theta$. Furthermore, it is straightforward to calculate that for any constants $c$ and $d$, 
>
> $$\lim\limits_{\theta \to \infty} \left(1 - \frac{c}{\theta} \right)^{n} - \left(1 - \frac{d}{\theta} \right)^{n} = 0,$$
>
> showing that the confidence coefficient of this interval estimator is $0$.

## 9.2 Methods of Finding Interval Estimators

### 9.2.1 Inverting a Test Statistic

> [!EXAMPLE|label:Inverting a Normal test]
> Let $X_1,\ \cdots,\ X_n$ be i.i.d. $N(\mu,\ \sigma^{2})$ and consider testing $H_0: \mu = \mu_0$ versus $H_1: \mu \neq \mu_0$. For a fixed $\alpha$ level, a reasonable test (in fact, the most powerful unbiased test) has rejection region $\left\{\bm{x}: \left\vert \overline{x} - \mu_0 \right\vert > z_{\alpha / 2} \sigma / \sqrt{n} \right\}$. Note that $H_0$ is accepted for sample points with 
>
> $$\overline{x} - z_{\alpha / 2} \frac{\sigma}{\sqrt{n}} \leqslant \mu_0 \leqslant \overline{x} + z_{\alpha / 2} \frac{\sigma}{\sqrt{n}}.$$
>
> Since the test has size $\alpha$, we can write 
>
> $$P_{\mu_0}\left(\overline{X} - z_{\alpha / 2} \frac{\sigma}{\sqrt{n}} \leqslant \mu_0 \leqslant \overline{X} + z_{\alpha / 2} \frac{\sigma}{\sqrt{n}} \right) = 1 - \alpha.$$
>
> But this probability statement is true for every $\mu_0$. Hence the statement 
>
> $$P_{\mu}\left(\overline{X} - z_{\alpha / 2} \frac{\sigma}{\sqrt{n}} \leqslant \mu \leqslant \overline{X} + z_{\alpha / 2} \frac{\sigma}{\sqrt{n}} \right) = 1 - \alpha$$
>
> is true. The interval $[\overline{X} - z_{\alpha / 2} \sigma / \sqrt{n},\ \overline{X} + z_{\alpha / 2} \sigma / \sqrt{n}]$, obtained by inverting the acceptance region of the level $\alpha$ test, is a $1 - \alpha$ confidence interval.

> [!THEOREM]
> For each $\theta_0 \in \Theta$, let $\mathcal{A}(\theta_0)$ be the *acceptance region* of a level $\alpha$ test of $H_0: \theta = \theta_0$. For each $\bm{x} \in \mathcal{X}$, define a set $\mathcal{C}(\bm{x})$ in the parameter space by 
>
> $$\mathcal{C}(\bm{x}) = \left\{\theta_0: \bm{x} \in \mathcal{A}(\theta_0) \right\}.$$
>
> Then the random set $\mathcal{C}(\bm{X})$ is a $1 - \alpha$ *confidence set*. Conversely, let $\mathcal{C}(\bm{X})$ be a $1 - \alpha$ *confidence set*. For any $\theta_0 \in \Theta$, define 
>
> $$\mathcal{A}(\theta_0) = \left\{\bm{x}: \theta_0 \in \mathcal{C}(\bm{x}) \right\}.$$
>
> Then $\mathcal{A}(\theta_0)$ is the *acceptance region* of a level $\alpha$ test of $H_0: \theta = \theta_0$.

<span id="inverting_an_lrt"></span>

> [!EXAMPLE|label:Inverting an LRT]
> Suppose that we want a confidence interval for the mean, $\lambda$, of an $\text{Exponential}(\lambda)$ population. We can obtain such an interval by inverting a level $\alpha$ test of $H_0: \lambda = \lambda_0$ versus $H_1: \lambda \neq \lambda_0$.
>
> If we take a random sample $X_1,\ \cdots,\ X_n$, the LRT statistic is given by 
>
> $$\frac{\frac{1}{\lambda_0^{n}} e^{-\sum_{i=1}^{n} x_i / \lambda_0}}{\sup_{\lambda} \frac{1}{\lambda^{n}} e^{-\sum_{i=1}^{n} x_i / \lambda}} = \frac{\frac{1}{\lambda_0^{n}} e^{-n \overline{x} / \lambda_0}}{\frac{1}{\overline{x}^{n}} e^{-n}} = \left(\frac{\overline{x}}{\lambda_0} \right)^{n} e^{-n (\overline{x} / \lambda_0 - 1)},$$
>
> where $\overline{x}$ is the sample mean. For fixed $\lambda_0$, the acceptance region is given by 
>
> $$\mathcal{A}(\lambda_0) = \left\{\bm{x}: \left(\frac{\overline{x}}{\lambda_0} \right)^{n} e^{-n (\overline{x} / \lambda_0 - 1)} \geqslant c_{\alpha} \right\}.$$
>
> where $c_{\alpha}$ is a constant chosen to satisfy $P_{\lambda_0}(\bm{X} \in \mathcal{A}(\lambda_0)) = 1 - \alpha$. Inverting this acceptance region gives the $1 - \alpha$ confidence set 
>
> $$\mathcal{C}(\bm{x}) = \left\{\lambda: \left(\frac{\overline{x}}{\lambda} \right)^{n} e^{-n (\overline{x} / \lambda - 1)} \geqslant c_{\alpha} \right\}.$$
>
> The expression defining $\mathcal{C}(\bm{x})$ depends on $\bm{x}$ only through $\overline{x}$, so we can write
>
> $$\mathcal{C}(\overline{x}) = \left\{\lambda: L(\overline{x}) \leqslant \lambda \leqslant U(\overline{x}) \right\},$$
>
> where $L$ and $U$ are funcions determined by the constraints that the confidence set has probability $1 - \alpha$ and 
>
> $$\left(\frac{\overline{x}}{L(\overline{x})} \right)^{n} e^{-n (\overline{x} / L(\overline{x}) - 1)} = c_{\alpha} = \left(\frac{\overline{x}}{U(\overline{x})} \right)^{n} e^{-n (\overline{x} / U(\overline{x}) - 1)}.$$
>
> If we set 
>
> $$\frac{\overline{x}}{L(\overline{x})} = a \quad \text{and} \quad \frac{\overline{x}}{U(\overline{x})} = b,$$
>
> where $a > b$ are constants, then we have 
>
> $$a^{n} e^{-n (a - 1)} = b^{n} e^{-n (b - 1)},$$
>
> which yields easily to numerical solution. To work out some details, let $n = 2$ and note that $\sum_{i=1}^{2} X_{i} \sim \text{Gamma}(2,\ \lambda)$ and thus $\overline{x} / \lambda \sim \text{Gamma}(2,\ 1 / 2)$. Hence, we can write 
>
> $$\mathcal{C}(\bm{x}) = \left\{\lambda: \frac{1}{a} \overline{x} \leqslant \lambda \leqslant \frac{1}{b} \overline{x} \right\}$$
>
> where $a$ and $b$ satisfy 
>
> $$\begin{aligned} P_{\lambda}\left(\frac{1}{a} \overline{x} \leqslant \lambda \leqslant \frac{1}{b} \overline{x} \right) &= P\left(b \leqslant \frac{\overline{x}}{\lambda} \leqslant a \right) \\ &= \int_{b}^{a} \frac{(1 / 2)^{2}}{\Gamma(2)} x^{2 - 1} e^{-\frac{1}{2} x} ~\mathrm{d}x \\ &= \int_{\frac{b}{2}}^{\frac{a}{2}} \frac{1}{2} y e^{-y} ~\mathrm{d}y \quad (\text{let } y = x / 2) \\ &= -\frac{1}{2} \left(y e^{-y} \vert_{y=b / 2}^{a / 2} - \int_{\frac{b}{2}}^{\frac{a}{2}} e^{-y} ~\mathrm{d}y \right) \\ &= \frac{1}{2} \left[\left(\frac{b}{2} + 1 \right) e^{-b / 2} - \left(\frac{a}{2} + 1 \right) e^{-a / 2} \right] \\ &= 1 - \alpha. \end{aligned}$$
>
> To get, for example, a $90\%$ confidence interval, we must simultaneously satisfy the probability condition and the constraint, i.e., 
>
> $$\begin{cases} \frac{1}{2} \left[\left(\frac{b}{2} + 1 \right) e^{-b / 2} - \left(\frac{a}{2} + 1 \right) e^{-a / 2} \right] = 1 - \alpha = 0.1, \\ a^{2} e^{-2 (a - 1)} = b^{2} e^{-2 (b - 1)}. \end{cases}$$

### 9.2.2 Pivotal Quantities

> [!DEFINITION]
> A r.v. $Q(\bm{X},\ \theta)$ is a **pivotal quantity** (or **pivot**) if the distribution of $Q(\bm{X},\ \theta)$ is independent of all parameters, i.e., if $\bm{X} \sim F(\bm{x} \mid \theta)$, then $Q(\bm{X},\ \theta)$ has the same distribution for all values of $\theta$.

> [!NOTE]
> Recall that we have learned the [ancillary statistic](courses/advanced_statistics/6_principles_of_data_reduction.md#_623-ancillary-statistics) in Chapter 6. An ancillary statistic also does not depend on the parameter $\theta$. The difference between a pivot and an ancillary statistic is that *a pivot need not be a statistic*, i.e., it can be a function of $\theta$.

> [!EXAMPLE|label:Gamma pivot]
> Suppose that $X_1,\ \cdots,\ X_n$ are i.i.d. $\text{Exponential}(\lambda)$. Then $T := \sum_{i=1}^{n} X_{i}$ is a sufficient statistic for $\lambda$ and $T \sim \text{Gamma}(n,\ \lambda)$. To find a pivot, we can use the fact that $T / \lambda \sim \text{Gamma}(n,\ 1)$, which is independent of $\lambda$. Thus, $T / \lambda$ is a pivot.
>
> Recall that in the [Example in 9.2.1](#inverting_an_lrt) we have obtained a confidence interval for $\lambda$ by inverting the LRT of $H_0: \lambda = \lambda_0$ versus $H_1: \lambda \neq \lambda_0$. Now we try to obtain it by using a pivot. For convenience, we construct the pivot as $Q(\bm{X},\ \lambda) = 2 T / \lambda \sim \Gamma(n,\ 1 / 2) \sim \chi_{2 n}^{2}$. Then the $1 - \alpha$ confidence interval is given by 
>
> $$\left\{\lambda: a \leqslant \frac{2 t}{\lambda} \leqslant b \right\} = \left\{\lambda: \frac{2 t}{b} \leqslant \lambda \leqslant \frac{2 t}{a} \right\},$$
>
> where $a$ and $b$ are some constants satisfying 
>
> $$P(a \leqslant \chi_{2 n}^{2} \leqslant b) = 1 - \alpha.$$

> [!EXAMPLE|label:Normal pivotal interval]
> If $X_1,\ \cdots,\ X_n$ are i.i.d. $N(\mu,\ \sigma^{2})$, then $(\overline{X} - \mu) / (\sigma / \sqrt{n})$ is a pivot. If $\sigma^{2}$ is known, we can use this pivot to calculate a confidence interval for $\mu$. For any constant $a$, 
>
> $$P\left(-a \leqslant \frac{\overline{X} - \mu}{\sigma / \sqrt{n}} \leqslant a \right) = P(-a \leqslant Z \leqslant a),$$
>
> where $Z$ is a standard Normal r.v.. Thus, the confidence interval is given by 
>
> $$\left\{\mu: \overline{x} - a \frac{\sigma}{\sqrt{n}} \leqslant \mu \overline{x} + a \frac{\sigma}{\sqrt{n}} \right\}.$$
>
> If $\sigma^{2}$ is unknown, we can use the location-scale pivot $\frac{\overline{X} - \mu}{S / \sqrt{n}}$. Since it has a Student’s $t$ distribution with $n - 1$ degrees of freedom, we have 
>
> $$P\left(-a \leqslant \frac{\overline{X} - \mu}{S / \sqrt{n}} \leqslant a \right) = P(-a \leqslant T_{n - 1} \leqslant a),$$
>
> where $T_{n - 1}$ is a Student’s $t$ r.v. with $n - 1$ degrees of freedom. Thus, for any given $\alpha$, if we tak $a = t_{n-1,\ \alpha / 2}$, we find that a $1 - \alpha$ confidence interval is given by
>
> $$\left\{\mu: \overline{x} - t_{n-1,\ \alpha / 2} \frac{S}{\sqrt{n}} \leqslant \mu \leqslant \overline{x} + t_{n-1,\ \alpha / 2} \frac{S}{\sqrt{n}} \right\}.$$
>
> Suppose that we also want an interval estimate for $\sigma$. Because $(n - 1) S^{2} / \sigma^{2} \sim \chi_{n-1}^{2}$, it is also a pivot. Thus, if we choose $a$ and $b$ to satisfy 
>
> $$P\left(a \leqslant \frac{(n - 1) S^{2}}{\sigma^{2}} \leqslant b \right) = P(a \leqslant \chi_{n-1}^{2} \leqslant b) = 1 - \alpha,$$
>
> we can invert this set to obtain the $1 - \alpha$ confidence interval 
>
> $$ \left\{\sigma: \sqrt{\frac{(n - 1) s^{2}}{b}} \leqslant \sigma \leqslant \sqrt{\frac{(n - 1) s^{2}}{a}} \right\}.$$
>
> One choice of $a$ and $b$ that will produce the required interval is $a = \chi_{n-1,\ 1 - \alpha / 2}^{2}$ and $b = \chi_{n-1,\ \alpha / 2}^{2}$. This choice splits the probability equally, putting $\alpha / 2$ in each tail of the distribution. The $\chi_{n-1}^{2}$ distribution, however, is a skewed distribution and it is not immediately clear that an equal probability split is optimal for a skewed distribution (also for symmetric distribution). In fact, for the $\chi^{2}$ distribution, *the equal probability split is not optimal*, as will be seen in Section 9.3.

### Exercises

1. (p.452, 9.4) Let $X_1,\ \cdots,\ X_n$ be a random sample from a $N(0,\ \sigma_{X}^{2})$, and let $Y_1,\ \cdots,\ Y_m$ be a random sample from a $N(0,\ \sigma_{Y}^{2})$, independent of the $X$s. Define $\lambda = \sigma_{Y}^{2} / \sigma_{X}^{2}$.

    (a) Find the level $\alpha$ LRT of $H_0: \lambda = \lambda_0$ versus $H_1: \lambda \neq \lambda_0$.

    <details>
    <summary>Solution:</summary>

    The LRT statistic is given by 

    $$
    \lambda(\bm{x},\ \bm{y}) = \frac{\sup_{\lambda = \lambda_0} L(\sigma_{X}^{2},\ \sigma_{Y}^{2} \mid \bm{x},\ \bm{y})}{\sup_{\lambda > 0} L(\sigma_{X}^{2},\ \sigma_{Y}^{2} \mid \bm{x},\ \bm{y})}.
    $$

    The unrestricted MLEs of $\sigma_{X}^{2}$ and $\sigma_{Y}^{2}$ are $\widehat{\sigma}_{X}^{2} = \sum_{i=1}^{n} X_{i}^{2} / n$ and $\widehat{\sigma}_{Y}^{2} = \sum_{i=1}^{m} Y_{i}^{2} / m$, respectively. Under the restriction $\lambda = \lambda_0$, we have $\widehat{\sigma}_{Y}^{2} = \lambda_0 \widehat{\sigma}_{X}^{2}$, and thus 

    $$
    \begin{aligned}
        L(\sigma_{X}^{2},\ \lambda_0 \sigma_{X}^{2} \mid \bm{x},\ \bm{y}) &= (2 \pi \sigma_{X}^{2})^{-n / 2} (2 \pi \lambda_0 \sigma_{X}^{2})^{-m / 2} \exp\Bigg(-\frac{1}{2 \sigma_{X}^{2}} \sum_{i=1}^{n} x_{i}^{2}\\ &\qquad -\frac{1}{2 \lambda_0 \sigma_{X}^{2}} \sum_{i=1}^{m} y_{i}^{2}\Bigg) \\
        &= (2 \pi \sigma_{X}^{2})^{-(n + m) / 2} \lambda_0^{-m / 2} \exp\Bigg[-\frac{1}{2 \lambda_0 \sigma_{X}^{2}} \\ &\qquad \cdot \Bigg(\lambda_0 \sum_{i=1}^{n} x_{i}^{2} + \sum_{i=1}^{m} y_{i}^{2} \Bigg) \Bigg].
    \end{aligned}
    $$

    The log-likelihood function is 

    $$
    \begin{aligned}
        \ell(\sigma_{X}^{2},\ \lambda_0 \sigma_{X}^{2} \mid \bm{x},\ \bm{y}) &= -\frac{n + m}{2} \log(2 \pi \sigma_{X}^{2}) - \frac{m}{2} \log \lambda_0 \\ &\qquad -\frac{1}{2 \lambda_0 \sigma_{X}^{2}} \Bigg(\lambda_0 \sum_{i=1}^{n} x_{i}^{2} + \sum_{i=1}^{m} y_{i}^{2} \Bigg).
    \end{aligned}
    $$

    Take derivative w.r.t. $\sigma_{X}^{2}$ and set it to be $0$, we have 

    $$
    \frac{\mathrm{d}\ell}{\mathrm{d}\sigma_{X}^{2}} = -\frac{n + m}{2 \sigma_{X}^{2}} + \frac{1}{2 \lambda_0 (\sigma_{X}^{2})^{2}} \Bigg(\lambda_0 \sum_{i=1}^{n} x_{i}^{2} + \sum_{i=1}^{m} y_{i}^{2} \Bigg) = 0 \\
    $$

    $$
    \implies \widehat{\sigma}_{0}^{2} = \frac{\lambda_0 \sum_{i=1}^{n} x_{i}^{2} + \sum_{i=1}^{m} y_{i}^{2}}{\lambda_0 (n + m)}.
    $$

    To see this is a maximum, check the second derivative: 

    $$
    \begin{aligned}
        \frac{\mathrm{d}^{2}\ell}{\mathrm{d}(\sigma_{X}^{2})^{2}} \bigg\vert_{\sigma_{X}^{2} = \widehat{\sigma}_{0}^{2}} &= \frac{n + m}{2 (\widehat{\sigma}_{0}^{2})^{2}} - \frac{1}{\lambda_0 (\widehat{\sigma}_{0}^{2})^{3}} \Bigg(\lambda_0 \sum_{i=1}^{n} x_{i}^{2} + \sum_{i=1}^{m} y_{i}^{2} \Bigg) \\
        &= \frac{n + m}{2 (\widehat{\sigma}_{0}^{2})^{2}} - \frac{n + m}{(\widehat{\sigma}_{0}^{2})^{2}} \\
        &= -\frac{n + m}{2 (\widehat{\sigma}_{0}^{2})^{2}} \\
        &< 0.
    \end{aligned}
    $$

    Therefore, the LRT statistic is given by

    $$
    \begin{aligned}
        \lambda(\bm{x},\ \bm{y}) &= \frac{L(\widehat{\sigma}_{0}^{2},\ \lambda_0 \widehat{\sigma}_{0}^{2} \mid \bm{x},\ \bm{y})}{L(\widehat{\sigma}_{X}^{2},\ \widehat{\sigma}_{Y}^{2} \mid \bm{x},\ \bm{y})} \\
        &= \frac{(2 \pi \widehat{\sigma}_{0}^{2})^{-(n + m) / 2} \lambda_0^{-m / 2}}{(2 \pi \widehat{\sigma}_{X}^{2})^{-n / 2} (2 \pi \widehat{\sigma}_{Y}^{2})^{-m / 2}} \\
        &= \frac{(\widehat{\sigma}_{X}^{2})^{n / 2} (\widehat{\sigma}_{Y}^{2})^{m / 2}}{(\widehat{\sigma}_{0}^{2})^{(n + m) / 2} \lambda_0^{m / 2}}.
    \end{aligned}
    $$

    The level $\alpha$ LRT test is to reject $H_0$ if $\lambda(\bm{x},\ \bm{y}) \leqslant c_{\alpha}$ for some constant $c_{\alpha} \in [0,\ 1]$ s.t. 

    $$
    P_{\lambda_0}(\lambda(\bm{x},\ \bm{y}) \leqslant c_{\alpha}) = \alpha.
    $$
    </details>

    <br>

    (b) Express the rejection region of the LRT of part (a) in terms of an $F$ random variable.

    <details>
    <summary>Solution:</summary>

    Note that under $H_0$, $\sum_{i=1}^{m} Y_i^{2} / (\lambda_0 \sigma_{X}^{2}) \sim \chi_m^{2}$ and $\sum_{i=1}^{n} X_{i}^{2} / \sigma_{X}^{2} \sim \chi_n^{2}$ (square of $N(0,\ 1)$). Thus, $\frac{n}{m}\frac{\sum_{i=1}^{m} Y_i^{2} / (\lambda_0 \sigma_{X}^{2})}{\sum_{i=1}^{n} X_{i}^{2} / \sigma_{X}^{2}} \sim F_{m,\ n}$. So the LRT statistic can be written as 

    $$
    \begin{aligned}
        \lambda(\bm{X},\ \bm{Y}) &= \frac{(\widehat{\sigma}_{X}^{2})^{n / 2} (\widehat{\sigma}_{Y}^{2})^{m / 2}}{(\widehat{\sigma}_{0}^{2})^{(n + m) / 2} \lambda_0^{m / 2}} \\
        &= \left[\frac{\frac{1}{n} \sum_{i=1}^{n} X_{i}^{2}}{\frac{\lambda_0 \sum_{i=1}^{n} X_{i}^{2} + \sum_{i=1}^{m} Y_{i}^{2}}{\lambda_0 (n + m)}} \right]^{n / 2} \left[\frac{\frac{1}{m} \sum_{i=1}^{m} Y_{i}^{2}}{\lambda_0 \frac{\lambda_0 \sum_{i=1}^{n} X_{i}^{2} + \sum_{i=1}^{m} Y_{i}^{2}}{\lambda_0 (n + m)}} \right]^{m / 2} \\
        &= \left[\frac{(n + m) / n}{1 + \frac{\sum_{i=1}^{m} Y_{i}^{2} / (\lambda_0 \sigma_{X}^{2})}{\sum_{i=1}^{n} X_{i}^{2} / \sigma_{X}^{2}}} \right]^{n / 2} \left[\frac{(n + m) / m}{\frac{\sum_{i=1}^{n} X_{i}^{2} / \sigma_{X}^{2}}{\sum_{i=1}^{m} Y_{i}^{2} / (\lambda_0 \sigma_{X}^{2})} + 1} \right]^{m / 2} \\
        &= \left[\frac{(n + m) / n}{1 + (m / n) F} \right]^{n / 2} \left[\frac{(n + m) / m}{1 + (n / m) F^{-1}} \right]^{m / 2} \\
        &= \left(\frac{n}{n + m} + \frac{m}{n + m} F \right)^{-n / 2} \left(\frac{m}{n + m} + \frac{n}{n + m} F^{-1} \right)^{-m / 2},
    \end{aligned}
    $$

    where $F \sim F_{m,\ n}$ under $H_0$. Therefore, the rejection region is given by 

    $$
    \left\{(\bm{x},\ \bm{y}): \left(\frac{n}{n + m} + \frac{m}{n + m} F \right)^{-n / 2} \left(\frac{m}{n + m} + \frac{n}{n + m} F^{-1} \right)^{-m / 2} \leqslant c_{\alpha} \right\}.
    $$
    </details>

    <br>

    (c) Find a $1 - \alpha$ confidence interval for $\lambda$.

    <details>
    <summary>Solution:</summary>

    To ease notation, let $a = \frac{n}{n + m}$ and $b = \frac{\sum_{i=1}^{m} y_i^{2}}{\sum_{i=1}^{n} x_i^{2}}$, then the $1 - \alpha$ confidence set can be written as 

    $$
    \left\{\lambda: \left[a \left(1 + \frac{b}{\lambda} \right) \right]^{-n / 2} \left[(1 - a) \left(1 + \frac{\lambda}{b} \right) \right]^{-m / 2} > c_{\alpha} \right\}.
    $$

    Now we write the confidence set as an interval: 

    $$
    \left\{\lambda: L(b) \leqslant \lambda \leqslant U(b) \right\}
    $$

    with $L(b)$ and $U(b)$ satisfying 

    $$
    \left(1 + \frac{b}{L(b)} \right)^{-n / 2} \left(1 + \frac{L(b)}{b} \right)^{-m / 2} = \left(1 + \frac{b}{U(b)} \right)^{-n / 2} \left(1 + \frac{U(b)}{b} \right)^{-m / 2}.
    $$

    Note that $\frac{n}{m} \lambda b \sim F_{m,\ n}$, the probability condition is 

    $$
    \int_{\frac{n}{m} b L(b)}^{\frac{n}{m} b U(b)} f\left(\frac{n}{m} \lambda b \mid m,\ n \right) ~\mathrm{d}x = 1 - \alpha,
    $$

    where $f\left(\frac{n}{m} \lambda b \mid m,\ n \right)$ is the pdf of $F_{m,\ n}$.
    </details>

    <br>

2. (p.453, 9.13) Let $X$ be a single observation from the $\text{Beta}(\theta,\ 1)$ pdf.

    (a) Let $Y = -(\log X)^{-1}$. Evaluate the confidence coefficient of the set $[y / 2,\ y]$.

    <details>
    <summary>Solution:</summary>

    The inverse transformation is $X = e^{-1 / Y}$, then the pdf of $Y$ is given by 

    $$
    \begin{aligned}
        f_{Y}(y \mid \theta) &= f_{X}(e^{-1 / y} \mid \theta) \left\vert \frac{1}{y^{2}} e^{-1 / y} \right\vert \\
        &= \frac{\Gamma(\theta + 1)}{\Gamma(\theta) \Gamma(1)} (e^{-1 / y})^{\theta - 1} \frac{1}{y^{2}} e^{-1 / y} \\
        &= \frac{\theta}{y^{2}} e^{-\theta / y}.
    \end{aligned}
    $$

    The confidence set can be written as 

    $$
    \left\{\theta: \frac{y}{2} \leqslant \theta \leqslant y \right\} = \left\{\theta: \theta \leqslant y \leqslant 2 \theta \right\},
    $$

    which means the coverage probability is 

    $$
    \begin{aligned}
        P_{\theta}\left(\theta \leqslant Y \leqslant 2 \theta \right) &= \int_{\theta}^{2 \theta} \frac{\theta}{y^{2}} e^{-\theta / y} ~\mathrm{d}y \\
        &= \int_{\frac{1}{\theta}}^{\frac{1}{2 \theta}} - \theta e^{-\theta / y} ~\mathrm{d}\frac{1}{y} \\
        &= e^{-\theta / y} \big\vert_{y=\theta}^{2 \theta} \\
        &= e^{-1 / 2} - e^{-1}.
    \end{aligned}
    $$

    Since it does not depend on $\theta$, the confidence coefficient is just $e^{-1 / 2} - e^{-1}$.
    </details>

    <br>

    (b) Find a pivotal quantity and use it to set up a confidence interval having the same confidence coefficient as the interval in part (a).

    <details>
    <summary>Solution:</summary>

    Since $f_{X}(x) = \theta x^{\theta - 1},\ 0 < x < 1$, $T = X^{\theta}$ can be a good guess as a pivot. We then verify it. The inverse transformation is $X = T^{1 / \theta}$ and thus the pdf of $T$ is given by 

    $$
    f_{T}(t) = f_{X}(t^{1 / \theta}) \left\vert \frac{1}{\theta} t^{1 / \theta - 1} \right\vert = \theta t^{(\theta - 1) / \theta} \frac{1}{\theta} t^{(1 - \theta) / \theta} = 1,\quad 0 < t < 1,
    $$ 

    which has a $\text{Uniform}(0,\ 1)$ distribution. Therefore, $T = X^{\theta}$ is a pivot. To let the confidence interval having the same confidence coefficient as the interval in part (a), we set 

    $$
    \left\{\theta: a \leqslant x^{\theta} \leqslant b \right\} = \left\{\theta: \frac{\log b}{\log x} \leqslant \theta \leqslant \frac{\log a}{\log x} \right\}
    $$

    with any constants $a$ and $b$ s.t. $b - a = e^{-1 / 2} - e^{-1}$.
    </details>

    <br>

    (c) Compare the two confidence intervals.

    <details>
    <summary>Solution:</summary>

    The length of the confidence interval in part (a) is 

    $$
    \frac{y}{2} = -\frac{1}{2 \log x},
    $$

    while that in part (b) is 

    $$
    \frac{\log a - \log b}{\log x} = -\frac{2 \log \left(1 + \frac{e^{-1 / 2} - e^{-1}}{a} \right)}{2 \log x},
    $$

    which means the interval in part (b) can be shorter as $a$ goes larger. Since $\theta > 0$, a reasonable confidence interval should start with positive number, which means $\frac{\log b}{\log x}$ should be positive. As $a$ goes larger, $b$ would go larger and $\frac{\log b}{\log x}$ becomes negative. The largest $b$ we can choose is $b = 1$, and thus $a = 1 - e^{-1 / 2} + e^{-1}$. Hence, the shortest interval in part (b) is 

    $$
    \left\{\theta: 0 \leqslant \theta \leqslant \frac{\log (1 - e^{-1 / 2} + e^{-1})}{\log x} \right\}
    $$

    with length 

    $$
    -\frac{2 \log \left(1 + \frac{e^{-1 / 2} - e^{-1}}{1 - e^{-1 / 2} + e^{-1}} \right)}{2 \log x} = -\frac{2 \log \left(\frac{1}{1 - e^{-1 / 2} + e^{-1}} \right)}{2 \log x}.
    $$

    Since $\frac{1}{1 - e^{-1 / 2} + e^{-1}} < e$, the shortest confidence interval in part (b) is shorter than that in part (a).
    </details>

    <br>

3. Let $X_1,\ \cdots,\ X_n$ be i.i.d. $f(x \mid \theta) = \frac{\theta}{x^{2}},\ x > \theta$.

    (a) Find the MLE of $\theta$, denoted by $Y$.

    <details>
    <summary>Solution:</summary>

    The likelihood function is 

    $$
    L(\theta \mid \bm{x}) = \prod_{i=1}^{n} \frac{\theta}{x_i^{2}}
    $$

    The log-likelihood function is

    $$
    \ell(\theta \mid \bm{x}) = n \log \theta - 2 \sum_{i=1}^{n} \log x_i.
    $$

    Take derivative w.r.t. $\theta$, we have 

    $$
    \frac{\mathrm{d}\ell}{\mathrm{d}\theta} = \frac{n}{\theta} > 0,
    $$

    which means the log-likelihood always increases as $\theta$ get larger. Therefore, the MLE of $\theta$ is $Y = \min_{i} X_i$.
    </details>

    <br>

    (b) Prove that $Y / \theta$ is a pivotal quantity.

    <details>
    <summary>Proof:</summary>

    The cdf of $X$ is 

    $$
    F_{X}(x) = \int_{\theta}^{x} \frac{\theta}{y^{2}} ~\mathrm{d}y = -\frac{\theta}{y} \bigg\vert_{y=\theta}^{x} = 1 - \frac{\theta}{x}.
    $$

    So the pdf of $Y$ is given by

    $$
    f_{Y}(y) = n [1 - F_{X}(y)]^{n - 1} f_{X}(y) = n \left(\frac{\theta}{y} \right)^{n - 1} \frac{\theta}{y^{2}} = \frac{n}{y} \left(\frac{\theta}{y} \right)^{n},\quad y > \theta.
    $$

    Denote $T := Y / \theta$. The inverse transformation is $Y = \theta T$ and thus the pdf of $T$ is given by 

    $$
    f_{T}(t) = f_{Y}(\theta t) \left\vert \theta \right\vert = \frac{n}{\theta t} \left(\frac{\theta}{\theta t} \right)^{n} \theta = n t^{-(n + 1)},\quad t > 1,
    $$

    which does not depend on $\theta$. Hence, $Y / \theta$ is a pivotal quantity.
    </details>

    <br>

    (c) Show that the interval 

    $$
    \left\{\theta: \frac{y}{\alpha^{-1 / n}} \leqslant \theta \leqslant y \right\}
    $$

    is the shortest $1 - \alpha$ pivotal interval.

    <details>
    <summary>Proof:</summary>

    Based on the pivotal quantity constructed in part (b), we can write the confidence interval as 

    $$
    \left\{\theta: a \leqslant \frac{y}{\theta} \leqslant b \right\} = \left\{\theta: \frac{y}{b} \leqslant \theta \leqslant \frac{y}{a} \right\}
    $$

    with any constants $a$ and $b$ satisfying 

    $$
    P_{\theta}\left(a \leqslant \frac{Y}{\theta} \leqslant b \right) = \int_{a}^{b} n t^{- (n + 1)} ~\mathrm{d}t = 1 - \alpha.
    $$

    Since the constraint tells us $b$ is the function of $a$, to find the shortest $1 - \alpha$ confidence interval is to minimize  

    $$
    \begin{aligned}
        &h(a) = \frac{1}{a} - \frac{1}{b(a)} \\
        \text{s.t.} \quad &\int_{a}^{b(a)} n t^{- (n + 1)} ~\mathrm{d}t = 1 - \alpha.
    \end{aligned}
    $$

    Take derivative of both sides of the subjection w.r.t. $a$, we have 

    $$
    \begin{aligned}
        n b^{-(n + 1)} \frac{\mathrm{d}b}{\mathrm{d}a} - n a^{-(n + 1)} &= 0 \\
        \frac{\mathrm{d}b}{\mathrm{d}a} &= \frac{b^{n + 1}}{a^{n + 1}}.
    \end{aligned}
    $$

    Then we take derivative of $h(a)$ w.r.t. $a$ to get 

    $$
    \frac{\mathrm{d}}{\mathrm{d}a} h(a) = -\frac{1}{a^{2}} + \frac{1}{b^{2}}\frac{\mathrm{d}b}{\mathrm{d}a} = \frac{1}{a^{2}} \left(\left(\frac{b}{a} \right)^{n - 1} - 1 \right) > 0
    $$

    since $b > a \geqslant 1$. This means the length of the $1 - \alpha$ confidence interval would be shorter as $a$ goes smaller. So take $a = 1$, we have 

    $$
    \begin{aligned}
        \int_{1}^{b} n t^{-(n + 1)} ~\mathrm{d}t &= 1 - \alpha \\
        1 - b^{-n} &= 1 - \alpha \\
        b &= \alpha^{-1 / n},
    \end{aligned}
    $$

    which means the shortest $1 - \alpha$ confidence interval is 

    $$
    \left\{\theta: \frac{y}{\alpha^{-1 / n}} \leqslant \theta \leqslant y \right\}.
    $$
    </details>
    
## 9.3 Methods of Evaluating Interval Estimators

We can derive different confidence sets for the same problem. In such situations we would, of course, want to choose a best one.

### 9.3.1 Size and Coverage Probability

One way to evaluate a confidence set is to look at its *size*. *Given a confidence level*, we want to find the confidence set with the *smallest size*.

> [!THEOREM]
> Let $f(x)$ be a *unimodal pdf*. If the interval $[a,\ b]$ satisfies 
>
> 1. $\int_{a}^{b} f(x) ~\mathrm{d}x = 1 - \alpha$,
> 2. $f(a) = f(b) > 0$, and
> 3. $a \leqslant x^{*} \leqslant b$, where $x^{*}$ is a *mode* of $f(x)$,
>
> then $[a,\ b]$ is the *shortest* among all intervals that satisfy (1).

### 9.3.2 Test-Related Optimality

Since there is a one-to-one correspondence between confidence sets and tests of hypotheses, there is some correpondence between the optimality of tests and optimality of confidence sets. Usually, test-related optimality properties of confidence sets do *not* directly relate to the size of the set *but* rather to the *probability of the set covering false values*. But intuitively, smaller sets cover fewer values, and hence are less likely to cover false values.

> [!THEOREM]
> Let $\bm{X} \sim f(\bm{x} \mid \theta)$, where $\theta$ is a real-valued parameter. For each $\theta_0 \in \Theta$, let $\mathcal{A}^{*}(\theta_0)$ be the *UMP level $\alpha$ acceptance region* of a test of $H_0: \theta = \theta_0$ versus $H_1: \theta > \theta_0$. Let $\mathcal{C}^{*}(\bm{x})$ be the $1 - \alpha$ *confidence set formed by inverting the UMP acceptance regions*. Then for any other $1 - \alpha$ confidence set $\mathcal{C}$,
>
> $$P_{\theta}(\theta' \in \mathcal{C}^{*}(\bm{X})) \leqslant P_{\theta}(\theta' \in \mathcal{C}(\bm{X})),\quad \forall \theta' < \theta.$$