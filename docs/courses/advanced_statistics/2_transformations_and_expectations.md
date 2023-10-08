# 2 Transformations and Expectations

## 2.0 Measurability

> [!DEFINITION]
> A **measurable space** $(\mathcal{X},\ \mathcal{A})$ is a non-empty set $\mathcal{X}$ equipped with a sigma algebra $\mathcal{A}$ on $\mathcal{X}$.

> [!DEFINITION]
> Let $(\mathcal{X},\ \mathcal{A})$ and $(\mathcal{Y},\ \mathcal{B})$ be measurable spaces. A function $f : \mathcal{X} \to \mathcal{Y}$ is **measurable** if $f ^{-1}(B) \in \mathcal{A},\ \forall B \in \mathcal{B}$.

> [!NOTE]
> We only care about real-valued functions here, so $\mathcal{Y} = \mathbb{R}$ and $\mathcal{B}$ is the Borel sigma algebra (see [previous example](/courses/advanced_statistics/1_probability_theory.md#example)). Thus, when we say a function is measurable, we would only specify the sigma algebra of $\mathcal{X}$, i.e., we would say a function is $\mathcal{A}$-measurable.

> [!DEFINITION]
> A function $f : \mathbb{R}^{n} \to \mathbb{R}$ is **Borel measurable** if $f ^{-1}(B) \in \mathcal{B}(\mathbb{R}^{n}),\ \forall B \in \mathcal{B}(\mathbb{R})$.

## 2.1 Distributions of Functions of a Random Variable

> [!THEOREM]
> Let $X$ be a random variable (r.v.) with cdf $F_{X}(x)$. Denote $g : \mathbb{R} \to \mathbb{R}$ be a *Borel measurable* function. Then $g(X)$ is also a r.v..

Let $Y = g(X)$. The function $g(X)$ defines a mapping from the original sample space $\mathcal{X}$ (the sample space of $X$), to a new sample space $\mathcal{Y}$ (the sample space of $Y$), i.e., $g(X): \mathcal{X} \to \mathcal{Y}$. Then, 

$$
P(Y \in \mathcal{A}) = P(g(X) \in \mathcal{A}) = P(X \in g ^{-1}(\mathcal{A})),
$$

where $g^{-1}(\mathcal{A}) = \left\{x \in \mathbb{R}: g(x) \in \mathcal{A} \right\}$.

In particular, 

$$
F_{Y}(y) = P(Y \leqslant y) = P(X \in g ^{-1}(-\infty,\ y]).
$$

> [!NOTE]
> Here the inverse map $g ^{-1}(\cdot)$ is defined on sets, i.e., the outcome is a set instead of a number. Thus, we would not meet the existence problem.

> [!EXAMPLE]
> Suppose $X$ has a uniform distribution on the interval $(0,\ 2 \pi)$, i.e. 
> 
> $$f_{X}(x) = \begin{cases}\frac{1}{2 \pi},\ &0 < x < 2 \pi, \\ 0,\ &\text{otherwise}.\end{cases}$$
> 
> Consider $Y = \sin^{2}(X)$, then the cdf of $Y$ would be
> 
> $$P(Y \leqslant y) = P(X \leqslant x_1) + P(x_2\leqslant X \leqslant x_3) + P(X \geqslant x_4),$$
> 
> where $x_1,\ x_2,\ x_3$ and $x_4$ are shown below: 
> 
> <div align='center'>
> 
> ![](image/2023-09-20-12-06-38.png)
> </div align='center'>
> 
> From the symmetry of the function $\sin^{2}(x)$ and the fact that $X$ has a uniform distribution, we have 
> 
> $$P(X \leqslant x_1) = P(X \geqslant x_4),\quad P(x_2 \leqslant X \leqslant x_3) = 2 P(x_2 \leqslant X \leqslant \pi),$$
> 
> so 
> 
> $$P(Y \leqslant y) = 2 P(X \leqslant x_1) + 2 P(x_2 \leqslant X \leqslant \pi),$$
> 
> where $x_1$ and $x_2$ are 2 solutions to 
> 
> $$\sin^{2}(x) = y,\quad 0 < x < \pi.$$

> [!DEFINITION]
> Let $X$ has pdf $f_{X}(x)$, a set $\mathcal{X}:= \left\{x: f_{X}(x) > 0 \right\}$ is called the **support set** of the distribution. This terminology can also apply to a pmf or, in general, to any nonnegative function.

> [!THEOREM]
> Let $X$ has cdf $F_{X}(x)$, let $Y = g(X)$, and let $\mathcal{X}$ and $\mathcal{Y}$ be their support sets.
> 
> - If $g$ is an *increasing* function on $\mathcal{X}$, $F_{Y}(y) = F_{X}(g ^{-1}(y)),\ \forall y \in \mathcal{Y}$;
> - If $g$ is a *decreasing* function on $\mathcal{X}$ and $X$ is a continuous random variable, $F_{Y}(y) = 1 - F_{X}(g ^{-1}(y)),\ \forall y \in \mathcal{Y}$.

<details>
<summary>Proof: </summary>

If $g$ is an increasing function, so is $g^{-1}$, and this implies 

$$
\begin{aligned}
    \left\{x \in \mathcal{X}: g(x)\leqslant y \right\} &= \left\{x \in \mathcal{X}: g ^{-1}(g(x)) \leqslant g ^{-1}(y) \right\} \\
    &= \left\{x \in \mathcal{X}: x \leqslant g ^{-1}(y) \right\}.
\end{aligned}
$$

Thus, we have 

$$
F_{Y}(y) = \int_{x \leqslant g ^{-1}(y)} f_{X}(x) ~\mathrm{d}x = \int_{-\infty}^{g ^{-1}(y)} f_{X}(x) ~\mathrm{d}x = F_{X}(g ^{-1}(y)).
$$

Similarly, decreasing $g$ implies 

$$
\begin{aligned}
    \left\{x \in \mathcal{X}: g(x)\leqslant y \right\} &= \left\{x \in \mathcal{X}: g ^{-1}(g(x)) \geqslant g ^{-1}(y) \right\} \\
    &= \left\{x \in \mathcal{X}: x \geqslant g ^{-1}(y) \right\},
\end{aligned}
$$

which means 

$$
F_{Y}(y) = \int_{\left\{x \in \mathcal{X}: x \geqslant g ^{-1}(y) \right\}} f_{X}(x) ~\mathrm{d}x = \int_{g ^{-1}(y)}^{\infty} f_{X}(x) ~\mathrm{d}x = 1 - F_{X}(g ^{-1}(y)).
$$

The continuity of $X$ is used to obtain the last equality, because we need to switch the limits of integration here.
</details>

<br>

> [!THEOREM]
> Let $X$ have pdf $f_{X}(x)$ and let $Y = g(X)$, where $g$ is a *monotone* function. Let $\mathcal{X}$ and $\mathcal{Y}$ be their support sets. Suppose that $f_{X}(x)$ is *continuous* on $\mathcal{X}$ and that $g ^{-1}(y)$ has a *continuous derivative* on $\mathcal{Y}$. Then the pdf of $Y$ is given by 
> 
> $$f_{Y}(y) = \begin{cases} f_{X}(g ^{-1}(y)) \left\vert \frac{\mathrm{d}}{\mathrm{d}y}g ^{-1}(y) \right\vert,\ &y\in \mathcal{Y}, \\ 0,\ &\text{otherwise}. \end{cases}$$

The theorem above can be proved by using the chain rule on the conclusions of previous theorem.

> [!EXAMPLE|label:Example：Transform Gamma to Inverted Gamma]
> Let $f_{X}(x)$ be the *Gamma pdf*: 
> 
> $$f(x) = \frac{1}{(n-1)! \beta^{n}} x^{n-1} e^{-x / \beta},\quad 0 < x < \infty, $$
> 
> where $\beta$ is a positive constant and $n$ is a positive integer.
> 
> Suppose we want to find the pdf of $Y = g(X) = \frac{1}{X}$. Note that here the support sets $\mathcal{X}$ and $\mathcal{Y}$ are both $(0,\ \infty)$. If we let $y = g(x)$, then $g ^{-1}(y) = \frac{1}{y}$ and $\frac{\mathrm{d}}{\mathrm{d}y}g ^{-1}(y) = - \frac{1}{y^{2}}$. Applying the theorem above, we have 
> 
> $$\begin{aligned} f_{Y}(y) &= \frac{1}{(n-1)! \beta^{n}} \left(\frac{1}{y} \right)^{n-1} e^{- 1 / (\beta y)} \frac{1}{y^{2}} \\ &= \frac{1}{(n-1)! \beta^{n}} \left(\frac{1}{y} \right)^{n+1} e^{- 1 / (\beta y)},\quad 0 < y < \infty, \end{aligned}$$
> 
> which is a special case of a pdf known as the *inverted Gamma pdf*.

> [!THEOREM]
> Let $X$ have pdf $f_{X}(x)$, let $Y = g(X)$, let $\mathcal{X}$ and $\mathcal{Y}$ be their support sets. Suppose $\exists$ a partition, $\mathcal{A}_0,\ \mathcal{A}_1,\ \cdots \mathcal{A}_k$, of $\mathcal{X}$ s.t. $P(X \in \mathcal{A}_0) = 0$ and $f_{X}(x)$ is *continuous* on each $\mathcal{A}_i,\ i=1,\ 2,\ \cdots,\ k$. Further, suppose $g(\cdot)$ is *monotone* if restricted to each $\mathcal{A}_i$, we define 
> 
> $$g_i ^{-1}(y) = \left\{x \in \mathcal{A}_{i}: g(x) = y \right\}$$
> 
> and assume $g_i ^{-1}(y)$ has a *continuous derivative* on $\mathcal{Y}$ for each $i=1,\ 2,\ \cdots,\ k$. Then, 
> 
> $$f_{Y}(y) = \begin{cases} \sum\limits_{i=1}^{k} f_{X}(g_i ^{-1}(y)) \left\vert \frac{\mathrm{d}}{\mathrm{d}y}g_i ^{-1}(y) \right\vert,\ &y\in \mathcal{Y}, \\ 0,\ &\text{otherwise}. \end{cases}$$

> [!NOTE]
> We require the partition to have the same $\mathcal{Y}$ here.

This theorem deals with cases that $g(\cdot)$ is not continuous or monotone on the whole support set. We only require *piece-wise* continuity and monotonicity for the nice conclusion.

> [!EXAMPLE|label:Example：Transform Normal to Chi Squared]
> Let $X$ have the *standard normal distribution*, 
> 
> $$f_{X}(x) = \frac{1}{\sqrt{2 \pi}} e^{- x^{2} / 2},\quad -\infty < x < \infty. $$
> 
> Consider $Y = X^{2}$. The function $g(x) = x^{2}$ is monotone on $(-\infty,\ 0)$ and $(0,\ \infty)$. The support set $\mathcal{Y} = (0,\ \infty)$. Applying the theorem above, we take $\mathcal{A}_0 = \left\{0 \right\} $, $\mathcal{A}_1 = (-\infty,\ 0)$ and $\mathcal{A}_2 = (0,\ \infty)$. The corresponding inverse transformations are $g_1 ^{-1}(y) = -\sqrt{y}$ and $g_2 ^{-1}(y) = \sqrt{y}$. Thus, the pdf of $Y$ is 
> 
> $$\begin{aligned} f_{Y}(y) &= \frac{1}{\sqrt{2 \pi}} e^{-(-\sqrt{y})^{2} / 2}\left\vert - \frac{1}{2\sqrt{y}} \right\vert + \frac{1}{\sqrt{2 \pi}} e^{-(\sqrt{y})^{2} / 2} \left\vert \frac{1}{2\sqrt{y}} \right\vert \\ &= \frac{1}{\sqrt{2 \pi y}} e^{-y / 2},\quad 0 < y < \infty, \\ \end{aligned}$$
> 
> which is the pdf of a *chi squared* random variable with 1 degree of freedom.

> [!THEOREM]
> Let $X$ have continuous cdf $F_{X}(x)$ and define the random variable $Y$ as $Y = F_{X}(x)$. Then $Y$ is uniformly distributed on $(0,\ 1)$, i.e., $P(Y \leqslant y) = y,\ 0 < y < 1$.

<details>
<summary>Proof: </summary>

During the proof, we would use $F_{X}^{-1}(\cdot)$, which is not well defined since $F_{X}$ can be not strictly increasing. So we define the inverse cdf as follow: 

$$
F_{X}^{-1}(y) = \inf \left\{x: F_{X}(x) \geqslant y \right\}.
$$

Now for $0 < y < 1$ we have 

$$
\begin{aligned}
    P(Y \leqslant y) &= P(F_{X}(x) \leqslant y) \\
    &= P(F_{X}^{-1}(F_{X}(x)) \leqslant F_{X}^{-1}(y)) \\
    &= P(X \leqslant F_{X}^{-1}(y)) \\
    &= F_{X}(F_{X}^{-1}(y)) \\
    &= y.
\end{aligned}
$$
</details>

<br>

> [!TIP]
> From the theorem above, if $F(\cdot)$ is a distribution function, then $F ^{-1}(U)$, where $U$ is uniformly distributed on $(0,\ 1)$, is a r.v. with $F(\cdot)$ as its cdf. Then we can generate a random variable using this method, called *the inversion method*, which will be further discussed in Chapter 5.

### Exercises

1. Assume $\frac{1}{\sqrt{n}} w_{j} \to N(0,\ \sigma_{j}^{2})$, prove that 

    $$
    P\left(\left\vert \frac{1}{\sqrt{n}} w_{j} \right\vert > t \right) \leqslant e^{- \frac{t^{2}}{2 \sigma_{j}^{2}}}.
    $$

    > [!TIP]
    > Note that $\frac{1}{\sqrt{n} \sigma_{j}} w_j \to N(0,\ 1)$, and according to the symmetry of standard normal, we have $P\left(\left\vert \frac{1}{\sqrt{n}} w_{j} \right\vert > t \right) = 2 \phi(- \frac{t}{\sigma_j})$, where $\phi(\cdot)$ is the cdf of standard normal. To calculate $\phi(- \frac{t}{\sigma_j})$, we can find 
    > 
    > $$\phi^{2}\left(-\frac{t}{\sigma_j} \right) = \frac{1}{2\pi} \int_{-\infty}^{-\frac{t}{\sigma_j}} \int_{-\infty}^{-\frac{t}{\sigma_j}} e^{-\frac{x^{2} + y^{2}}{2}} ~\mathrm{d}x  ~\mathrm{d}y$$
    > 
    > and calculate it by polar coordinate transformation.

    <details>
    <summary>Proof: </summary>

    Since $\frac{1}{\sqrt{n} \sigma_{j}} w_j \to N(0,\ 1)$, we can transform the left side of the inequality to be 

    $$\begin{aligned}
        P\left(\left\vert \frac{1}{\sqrt{n}\sigma_j} w_j \right\vert > \frac{t}{\sigma_j} \right) &= P\left(\frac{1}{\sqrt{n}\sigma_j} w_j > \frac{t}{\sigma_j} \right) + P\left(\frac{1}{\sqrt{n}\sigma_j} w_j < -\frac{t}{\sigma_j} \right) \\
        &= 2 \phi\left(-\frac{t}{\sigma_j} \right),
    \end{aligned}$$

    where $\phi(\cdot)$ is the cdf of standard normal.

    Then, we find that 

    $$
    \begin{aligned}
        \phi^{2}\left(-\frac{t}{\sigma_j} \right) &= \frac{1}{2\pi} \int_{-\infty}^{-\frac{t}{\sigma_j}} \int_{-\infty}^{-\frac{t}{\sigma_j}} e^{-\frac{x^{2} + y^{2}}{2}} ~\mathrm{d}x  ~\mathrm{d}y \\
        &= \frac{1}{2\pi} \int_{-\infty}^{-\frac{t}{\sigma_j}} \int_{-\infty}^{-\frac{t}{\sigma_j}} e^{-\frac{r^{2}}{2}} ~\mathrm{d}(r \cos\theta)  ~\mathrm{d}(r \sin\theta) \\
        &\leqslant \frac{1}{2\pi} \int_{\pi}^{\frac{3\pi}{2}} \int_{\sqrt{2}\frac{t}{\sigma_j}}^{\infty} r e^{-\frac{r^{2}}{2}} ~\mathrm{d}r  ~\mathrm{d}\theta \\
        &= \frac{1}{2\pi} \int_{\pi}^{\frac{3\pi}{2}} e^{-\frac{t^{2}}{\sigma_j^{2}}} ~\mathrm{d}\theta \\
        &= \frac{1}{4} e^{-\frac{t^{2}}{\sigma_j^{2}}},
    \end{aligned}
    $$

    which means $\phi(-\frac{t}{\sigma_j}) \leqslant \frac{1}{2} e^{-\frac{t^{2}}{2\sigma_j^{2}}}$ and thus $P\left(\left\vert \frac{1}{\sqrt{n}} w_{j} \right\vert > t \right) \leqslant e^{- \frac{t^{2}}{2 \sigma_{j}^{2}}}$.

    > [!TIP]
    > If you have forgotten the formula of polar coordinate tranformation of double integral, you can directly calculate 
    > 
    > $$\begin{aligned} \mathrm{d}(r \cos\theta) \otimes \mathrm{d}(r \sin\theta) &= [\cos\theta ~ \mathrm{d}r + r (-\sin\theta) ~ \mathrm{d}\theta] \otimes \\ &\qquad(\sin\theta ~ \mathrm{d}r + r \cos\theta ~ \mathrm{d}\theta) \\ &= \begin{vmatrix} \cos \theta ~ \mathrm{d}r & -r \sin \theta ~ \mathrm{d}\theta \\	\sin \theta ~ \mathrm{d}r & r \cos \theta ~ \mathrm{d}\theta \\\end{vmatrix} \\ &= r ~ \mathrm{d}r ~ \mathrm{d}\theta \end{aligned}$$
    > 
    > where $\otimes $ denotes outer product.
    > 
    > And the inequality above occurs because we expand the integral area: 
    > 
    > <div align='center'>
    > 
    > ![](image/2023-09-22-11-29-27.png)
    > </div align='center'>
    </details>

## 2.2 Expected Values

> [!DEFINITION]
> The **expected value**, **expectation** or **mean** of a random variable $g(X)$, denoted by $\E[g(X)]$, is 
> 
> $$\E[g(X)] = \begin{cases} \int_{-\infty}^{\infty} g(x) f_{X}(x) ~\mathrm{d}x,\ &X \text{ is continuous}, \\ \sum\limits_{x \in \mathcal{X}} g(x) P(X = x),\ &X \text{ is discrete}, \\ \end{cases}$$
> 
> provided that the integral or sum exists. If $\E[\left\vert g(X) \right\vert ] = \infty$, we say that $\E[g(X)]$ does not exist.

Since expectation is just an integral or a sum, the properties of it is similar to an integral or a sum. But there is one property that explains why $\E[X]$ is a good guess at a value of a r.v. $X$.

Suppose we measure the distance between $X$ and a constant $b$ by $(X - b)^{2}$. We can now determine the value of $b$ that minimizes $\E[(X - b)^{2}]$: 

$$
\begin{aligned}
    \E[(X - b)^{2}] &= \E[(X - \E[X] + \E[X] - b)^{2}] \\
    &= \E[(X - E[X])^{2} + 2 \E[(X - \E[X])(\E[X] - b)] + (\E[X] - b)^{2}] \\
    &= \E[(X - \E[X])^{2}] + (\E[X] - b)^{2},
\end{aligned}
$$

which means when $b = \E[X]$, $\E[(X - b)^{2}]$ would reach the minimum, and thus $\E[X]$ is a good guess at a value of $X$.

## 2.3 Moments and Moment Generating Functions

> [!DEFINITION]
> Let $X$ be a r.v., define 
> 
> - the $n$-th **moment (around the origin)**: $\mu_n' = \E[X^{n}]$;
> - the $n$-th **central moment**: $\mu_n = \E[(X - \mu)^{n}]$ with $\mu = \mu_1' = \E[X]$;
> - **variance**: $\Var(X) = \mu_2 = \E[(X - \mu)^{2}]$.

> [!EXAMPLE|label:Mean and Variance of Common Distributions]
> - If $X \sim \text{Exponential}(\lambda)$ with $f_{X}(x) = \frac{1}{\lambda} e^{-\frac{x}{\lambda}}$, then $\E[X] = \lambda$ and $\Var(X) = \lambda^{2}$;
> - if $X \sim \text{Binomial}(n,\ p)$, then $\E[X] = np$ and $\Var(X) = np(1-p)$;
> - if $X \sim \text{Cauchy}(0,\ 1)$ with $f_{X}(x) = \frac{1}{\pi} \frac{1}{1 + x^{2}},\ -\infty < x < \infty$, then both $\E[X]$ and $\Var(X)$ do not exist;
> - if $X \sim \text{Poisson}(\lambda)$ with $P(X = k) = \frac{\lambda^{k}}{k!} e^{-\lambda},\ k=0,\ 1,\ \cdots,\ \infty$, then $\E[X] = \Var(X) = \lambda$.

<span id="mgf"></span>

> [!DEFINITION]
> Let $X$ be a r.v. with cdf $F_{X}$. The **moment generating function (mgf)** of $X$, denoted by $M_{X}(t)$, is 
> 
> $$M_{X}(t) = \E[e^{tX}],$$
> 
> provided that the expectation exists for $t$ in some neighborhood of $0$.

> [!THEOREM]
> If a r.v. $X$ has mgf $M_{X}(t)$, then the $n$-th moment
> 
> $$\E[X^{n}] = M_{X}^{(n)}(0) = \frac{\mathrm{d}^{n}}{\mathrm{d}t^{n}}M_{X}(t) \bigg\vert_{t=0}.$$

<span id='example'></span>

> [!EXAMPLE|label:Example：Mgf of Binomial Distribution]
> Consider a r.v. $X \sim \text{Binomial}(n,\ p)$, we have 
> 
> $$P(X = x) = C_n^{x} p^{x} (1 - p)^{n-x},\quad x=0,\ 2,\ \cdots,\ n. $$
> 
> Then, the mgf can be written as 
> 
> $$\begin{aligned} M_{X}(t) &= \sum\limits_{x=0}^{n} e^{tx} C_n^{x} p^{x} (1-p)^{n-x} \\ &= \sum\limits_{x=0}^{n} C_n^{x} (p e^{t})^{x} (1-p)^{n-x} \\ &= [p e^{t} + (1 - p)]^{n}, \end{aligned}$$
> 
> where the last equality holds by the binomial formula.

The major usefulness of the mgf is not in its ability to generate moments. Rather, its usefulness stems from the fact that, in many cases, the mgf can *characterize a distribution*. *However*, there are still some cases that different distributions have the same moments. 

> [!EXAMPLE|label:Example：Different Distributions With Same Moments]
> Consider 2 pdfs given by 
> 
> $$f_1(x) = \frac{1}{\sqrt{2 \pi} x}e^{-(\log x)^{2} / 2},\quad 0\leqslant x \leqslant \infty,$$
> 
> $$f_2(x) = f_1(x)[1 + \sin(2 \pi \log x)],\quad 0 \leqslant x < \infty. $$
> 
> It can be shown that if $X_1 \sim f_1(x)$, then 
> 
> $$\E[X_1^{r}] = e^{r^{2} / 2},\quad r = 0,\ 1,\ \cdots. $$
> 
> Suppose $X_2 \sim f_2(x)$, then we have 
> 
> $$\begin{aligned} \E[X_2^{r}] &= \int_{0}^{\infty} x^{r}f_1(x)[1 + \sin(2\pi \log x)] ~\mathrm{d}x \\ &= \E[X_1^{r}] + \int_{0}^{\infty} x^{r}f_1(x)\sin(2\pi \log x) ~\mathrm{d}x.  \end{aligned}$$
> 
> Let $y = \log x$, the second term of the RHS becomes 
> 
> $$\begin{aligned} \text{Second term of RHS} &= \int_{-\infty}^{\infty} e^{ry} \frac{1}{\sqrt{2\pi}e^{y}} e^{-\frac{y^{2}}{2}} \sin(2\pi y) e^{y} ~\mathrm{d}y \\ &= \frac{1}{\sqrt{2\pi}} e^{\frac{r^{2}}{2}} \int_{-\infty}^{\infty} e^{- \frac{(y - r)^{2}}{2}} \sin(2\pi y) ~\mathrm{d}y \\ &= \frac{1}{\sqrt{2\pi}} e^{\frac{r^{2}}{2}} \int_{-\infty}^{\infty} e^{- \frac{(y - r)^{2}}{2}} \sin[2\pi (y - r)] ~\mathrm{d}(y - r) \\ &= 0, \end{aligned}$$
> 
> which means $\E[X_2^{r}] = \E[X_1^{r}],\ r = 1,\ 2,\ \cdots$.

Under some conditions, we can guarantee that an mgf can give a unique distribution.

> [!THEOREM]
> Let $F_{X}(x)$ and $F_{Y}(y)$ be 2 cdfs all of whose moments exist.
> 
> - If $X$ and $Y$ have *bounded support*, then $F_{X}(u) = F_{Y}(u),\ \forall u$ *iff* $\E[X^{r}] = \E[Y^{r}],\ \forall r = 0,\ 1,\ \cdots$.
> - If the mgf exist and $M_{X}(t) = M_{Y}(t),\ \forall t$ in some neighborhood of $0$, then $F_{X}(u) = F_{Y}(u),\ \forall u$.

Now we want to give the convergence theorem of mgf, which we want to use to prove the CLT (Central Limit Theorem).

<span id="convergence-theorem-of-mgf"></span>

> [!THEOREM]
> Suppose $\left\{X_{i},\ i = 1,\ 2,\ \cdots \right\} $ is a sequence of random variables, each with mgf $M_{X_{i}}(t)$. Futhermore, suppose the sequence of mgfs is *convergent for $t$ in a neighborhood of $0$*, i.e., $\exists \delta > 0$ s.t. 
> 
> $$\lim\limits_{i \to \infty} M_{X_{i}}(t) = M_{X}(t),\quad \forall t \in (-\delta,\ \delta),$$
> 
> where $M_{X}(t)$ is an mgf. Then there is a *unique* cdf $F_{X}$ whose moments are determined by $M_{X}(t)$ and, $\forall x$ where $F_{X}(x)$ is continuous, we have 
> 
> $$\lim\limits_{i \to \infty} F_{X_{i}}(x) = F_{X}(x),$$
> 
> i.e., *convergence of mgfs in a neighborhood of 0 implies convergence of cdfs*.

> [!EXAMPLE]
> Binomial distribution with large $n$ but small $np$ can be approximated by $\text{Poisson}(\lambda)$ with $\lambda = np$.
> 
> Suppose $X_n \sim \text{Binomial}(n,\ p)$ and $Y \sim \text{Poisson}(\lambda)$ where $\lambda = np$. Recall that in [previous example](#example) we get $M_{X_n(t)} = [p e^{t} + (1 - p)]^{n}$. For the Poisson one, we know that 
> 
> $$P(Y = y) = e^{-\lambda}\frac{\lambda^{y}}{y!},\quad y = 0,\ 1,\ \cdots,$$
> 
> which means 
> 
> $$\begin{aligned} M_{Y}(t) = \E[e^{tY}] &= \sum\limits_{y=0}^{\infty} e^{ty} e^{-\lambda}\frac{\lambda^{y}}{y!} \\ &= e^{\lambda e^{t} - \lambda} \sum\limits_{y=0}^{\infty} e^{-\lambda e^{t}}\frac{(\lambda e^{t})^{y}}{y!} \\ &= e^{\lambda (e^{t} - 1)}. \end{aligned}$$
> 
> Note that 
> 
> $$\begin{aligned} \lim\limits_{n \to \infty} M_{X_n}(t) &= \lim\limits_{n \to \infty} [p e^{t} + (1 - p)]^{n} \\ &= \lim\limits_{n \to \infty} \left[\frac{1}{n} \cdot np (e^{t} - 1) + 1 \right] ^{n} \\ &= e^{np(e^{t} - 1)} \\ &= e^{\lambda(e^{t} - 1)}. \end{aligned}$$

> [!THEOREM]
> For any constants $a$ and $b$, the mgf of the r.v. $a X + b$ is given by 
> 
> $$M_{a X + b}(t) = e^{bt} M_{X}(at). $$

Now we start to prove the CLT.

> [!THEOREM|label:Central Limit Theorem]
> Let $X_1,\ X_2,\ \cdots$ be a sequence of i.i.d. random variables whose mgf exists in a neighborhood of $0$, say, $M_{X}(t)$ exists for $\left\vert t \right\vert < \delta$. Let 
> - $\E[X_1] = \mu$,
> - $\Var(X_1) = \sigma^{2} > 0$,
> - $\overline{X}_{n} = \frac{1}{n}\sum\limits_{i=1}^{n} X_{i}$,
> - and $G_n(x)$ denote the cdf of $\frac{\sqrt{n}(\overline{X}_{n} - \mu)}{\sigma}$.
> 
> Then, $\forall x$, we have 
> 
> $$\lim\limits_{n \to \infty} G_n(x) = \int_{-\infty}^{x} \frac{1}{\sqrt{2\pi}} e^{-\frac{y^{2}}{2}} ~\mathrm{d}y,$$
> 
> i.e., *$\frac{\sqrt{n}(\overline{X}_{n} - \mu)}{\sigma}$ has a limiting standard normal distribution*.

<details>
<summary>Proof: </summary>

We want to prove the convergence of $G_n(x)$ by proving the convergence of the corresponding mgfs in a neighborhood of $0$. So first we calculate the mgf of a standard normal r.v. $Z$: 

$$
\begin{aligned}
    M_{Z}(t) = \E[e^{t Z}] &= \int_{-\infty}^{\infty} e^{tz} \frac{1}{\sqrt{2\pi}} e^{-\frac{z^{2}}{2}} ~\mathrm{d}z \\
    &= \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}} e^{-\frac{z^{2} - 2tz + t^{2}}{2}} e^{\frac{t^{2}}{2}} ~\mathrm{d}z \\
    &= e^{\frac{t^{2}}{2}} \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}} e^{-\frac{(z - t)^{2}}{2}} ~\mathrm{d}z \\
    &= e^{\frac{t^{2}}{2}}.
\end{aligned}
$$

Define $Y_i := \frac{X_{i} - \mu}{\sigma}$ (also i.i.d.), and let $M_{Y}(t)$ denote the common mgf of $Y_i$, which exists when $\left\vert t \right\vert < \sigma \delta$ since $M_{Y}(t) = e^{-\frac{\mu}{\sigma}t} M_{X}(\frac{t}{\sigma})$. Then, we find 

$$
\frac{\sqrt{n}(\overline{X}_{n} - \mu)}{\sigma} = \frac{\sqrt{n}(\frac{1}{n}\sum_{i=1}^{n} X_{i} - \mu)}{\sigma} = \frac{1}{\sqrt{n}} \sum\limits_{i=1}^{n} Y_i,
$$

whose mgf can be written as 

$$
\begin{aligned}
    M_{\frac{1}{\sqrt{n}} \sum_{i=1}^{n} Y_i}(t) &= M_{\sum_{i=1}^{n} Y_i}\left(\frac{t}{\sqrt{n}} \right)  \\
    &= \E\left[e^{(t / \sqrt{n}) \sum_{i=1}^{n} Y_i} \right]  \\
    &= \prod_{i=1}^{n} \E\left[e^{(t / \sqrt{n}) Y_i} \right]  \\
    &= \left(M_{Y}\left(\frac{t}{\sqrt{n}} \right) \right)^{n}.
\end{aligned}
$$

Now we can expand $M_{Y}(\frac{t}{\sqrt{n}})$ in a Taylor series around $0$: 

$$
M_{Y}\left(\frac{t}{\sqrt{n}}\right) = \sum\limits_{k=0}^{\infty} M_{Y}^{(k)}(0) \frac{(t / \sqrt{n})^{k}}{k!}.
$$

Since $M_{Y}(t)$ exists for $\left\vert t \right\vert < \sigma\delta$, the Taylor expansion above is valid if $t < \sqrt{n} \sigma \delta$.

By the definition of mgf, we have $M_{Y}^{0}(0) = \E[e^{0}] = 1$. And note that by construction we have $\E[Y_i] = 0$ and $\Var(Y_i) = 1$, which means $M_{Y}^{(1)}(0) = 0$ and $M_{Y}^{(2)}(0) = 1$. Thus, we have 

$$
M_{Y}\left(\frac{t}{\sqrt{n}} \right) = 1 + \frac{(t / \sqrt{n})^{2}}{2!} + \omicron\left(\frac{1}{n} \right).
$$

Then, we can write

$$
\begin{aligned}
    \lim\limits_{n \to \infty} \left(M_{Y}\left(\frac{t}{\sqrt{n}} \right) \right)^{n} &= \lim\limits_{n \to \infty} \left[1 + \frac{(t / \sqrt{n})^{2}}{2!} + \omicron\left(\frac{1}{n} \right) \right]^{n} \\
    &= \lim\limits_{n \to \infty} \left[1 + \frac{1}{n} \left(\frac{t^{2}}{2} + \omicron(1) \right) \right]^{n} \\
    &= e^{\frac{t^{2}}{2}} \\
    &= M_{Z}(t),
\end{aligned}
$$

which means $G_n(x)$ converges to the cdf of standard normal distribution.
</details>

### Exercises

1. Let $X$ be a r.v. with finite mgf $M_{X}(t),\ -h < t < h$. Prove the following limitation: 

    $$
    \lim\limits_{n \to \infty} \left[M_{X}\left(\frac{t}{n} \right) \right]^{n} = e^{t \E[X]}.
    $$

    > [!TIP]
    > How can we get $\E[X]$ from $M_{X}(\frac{t}{n})$? Differentiate, i.e., $M_{X}'(0) = \E[X]$. When do derivatives appear? Taylor expansion.

    <details>
    <summary>Proof: </summary>

    By Taylor expansion we have 

    $$
    \begin{aligned}
        M_{X} \left(\frac{t}{n} \right) &= \sum\limits_{k=0}^{\infty} M_{X}^{(k)}(0) \frac{(t / n)^{k}}{k!} \\
        &= 1 + M_{X}^{(1)}(0) \frac{t}{n} + \omicron\left(\frac{1}{n} \right) \\
        &= 1 + \frac{t \E[X]}{n} + \omicron\left(\frac{1}{n} \right),
    \end{aligned}
    $$

    which means 

    $$
    \begin{aligned}
        \lim\limits_{n \to \infty} \left[M_{X}\left(\frac{t}{n} \right) \right]^{n} &= \lim\limits_{n \to \infty} \left[1 + \frac{t \E[X]}{n} + \omicron\left(\frac{1}{n} \right) \right]^{n} \\
        &= \lim\limits_{n \to \infty} \left[1 + \frac{1}{n} \left(t \E[X] + \omicron(1) \right) \right]^{n} \\
        &= e^{t \E[X]}.
    \end{aligned}
    $$
    </details>

## 2.3' Characteristic Functions

From section [2.3](#_23-moments-and-moment-generating-functions) we have known that mgf cannot always characterize a distribution. To characterize a distribution uniquely, we introduce the *characteristic function*.

> [!DEFINITION]
> The *characteristic function* of r.v. $X$ is defined by 
> 
> $$\phi_{X}(t) = \E[e^{itX}].$$
>

> [!EXAMPLE|label:Example：Characteristic Function of Standard Normal]
> For a normal r.v. $X \sim N(\mu,\ \sigma^{2})$, its characteristic function is 
> 
> $$\phi_{X}(t) = \E[e^{itX}] = e^{it \mu - \frac{1}{2} \sigma^{2} t^{2}}.$$
> 
> Particularly, the characteristic function of a standard normal r.v. is $\phi(t) = e^{-t^{2} / 2}$.

> [!THEOREM]
> Let $X$ be a r.v. with characteristic function $\phi_{X}(t)$. Like mgf, the derivative of characteristic function w.r.t. $t=0$ can be expressed by moments of the r.v.: 
>
> $$\phi_{X}^{(k)}(0) = i^{k} \E[X^{k}].$$

> [!THEOREM]
> For any r.v. $X$, its cdf has a unique characteristic function. Since $e^{itX} = \cos(tX) + i \sin(tX)$, like the Fourier transform, the pdf $f_{X}(x)$ can be inversely transformed from the characteristic function, i.e., 
> 
> $$f_{X}(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-itx}\phi_{X}(t) ~\mathrm{d}t.$$

Like the [convergence theorem of mgf](#convergence-theorem-of-mgf), there is also a convergence theorem of characteristic function, which we will also use to prove the CLT.

> [!THEOREM]
> Suppose $\left\{X_{i},\ i = 1,\ 2,\ \cdots \right\} $ is a sequence of random variables, each with characteristic function $M_{X_{i}}(t)$. Futhermore, suppose the sequence of characteristic functions is *convergent for $t$ in a neighborhood of $0$*, i.e., $\exists \delta > 0$ s.t. 
> 
> $$\lim\limits_{i \to \infty} \phi_{X_{i}}(t) = \phi_{X}(t),\quad \forall t \in (-\delta,\ \delta),$$
> 
> where $\phi_{X}(t)$ is a characteristic function. Then, $\forall x$ where $F_{X}(x)$ is continuous, we have 
> 
> $$\lim\limits_{i \to \infty} F_{X_{i}}(x) = F_{X}(x),$$
> 
> i.e., *convergence of characteristic functions in a neighborhood of 0 implies convergence of cdfs*.

Now we start to prove the CLT (Lindeberg-Lévy version).

> [!THEOREM|label:Lindeberg-Lévy’s Central Limit Theorem]
> Suppose $\left\{X_{i} \right\}_{i=1}^{n} $ is a sequence of random variables with $\E[X_i] = \mu$ and $\Var(X_{i}) = \sigma^{2} < \infty$, $i = 1,\ 2,\ \cdots,\ n$. Denote the sample average by $S_n := \frac{1}{n} \sum_{i=1}^{n} X_{i}$, then 
> 
> $$Z_n := \frac{\sqrt{n}(S_n - \mu)}{\sigma} \stackrel{d}{\to} N(0,\ 1),$$
> 
> where $\stackrel{d}{\to}$ denotes convergence in distribution, which means $Z_n$ converges pointwise to the standard normal cdf, i.e., 
> 
> $$\lim\limits_{n \to \infty} P(Z_n \leqslant z) = \phi(z),\quad \forall z \in \mathbb{R},$$
> 
> where $\phi(\cdot)$ is the standard normal cdf.

<details>
<summary>Proof: </summary>

We want to prove the convergence of cdfs of $Z_n$ by proving the convergence of the corresponding characteristic functions in a neighborhood of $0$. Note that the characteristic function of a standard normal r.v. is $e^{-t^{2} / 2}$.

Let $Y_i := \frac{X_{i} - \mu}{\sigma}$ (also i.i.d.), the r.v. $Z_n$ can be written as 

$$
Z_n = \frac{\sqrt{n}(S_n - \mu)}{\sigma} = \sum\limits_{i=1}^{n} \frac{X_{i} - \mu}{\sqrt{n}\sigma} = \sum\limits_{i=1}^{n} \frac{1}{\sqrt{n}}Y_i,
$$

which means the characteristic function of $Z_n$ can be given by 

$$
\phi_{Z_n}(t) = \E[e^{it Z_n}] = \prod_{i=1}^{n} \E[e^{it \frac{1}{\sqrt{n}} Y_i}] = \left[\phi_{Y}\left(\frac{t}{\sqrt{n}} \right) \right]^{n},
$$

where $\phi_{Y}(\cdot)$ is the common characteristic funcion of $Y_i,\ i=1,\ 2,\ \cdots,\ n$.

By doing Taylor expansion around $0$, we have 

$$
\phi_{Y}\left(\frac{t}{\sqrt{n}} \right) = \sum\limits_{k=0}^{\infty} \phi_{Y}^{(k)}(0) \frac{(t / \sqrt{n})^{k}}{k!}
$$

By definition we have $\phi_{Y}(0) = 1$, $\phi_{Y}'(0) = i\E[Y] = 0$ and $\phi_{Y}''(0) = - \E[Y^{2}] = - 1$. Then, we can write 

$$
\phi_{Y}\left(\frac{t}{\sqrt{n}} \right) = 1 - \frac{t^{2}}{2n} + \omicron\left(\frac{t^{2}}{n} \right).
$$

Thus, we have 

$$
\begin{aligned}
    \lim\limits_{n \to \infty} \phi_{Z_n}(t) &= \left(1 - \frac{t^{2}}{2n} + \omicron\left(\frac{t^{2}}{n} \right)\right)^{n} \\
    &= \left[1 + \frac{1}{n}\left(- \frac{t^{2}}{2} + \omicron\left(t^{2} \right) \right)\right]^{n} \\
    &= e^{-\frac{t^{2}}{2}},
\end{aligned}
$$

which means the cdf of $Z_n$ converges to the standard normal cdf.
</details>

## 2.4 Differentiating Under an Integral Sign

In section [2.3](#_23-moments-and-moment-generating-functions) and [2.3'](#_2339-characteristic-functions), when we calculate the derivative of an mgf or a characteristic function, we automatically *interchange the order of differentiation and integration* (expecation is integration). However, this operation is *not* always correct. In this section, we would give the conditions that we can do this operation.

> [!THEOREM]
> If $f(x,\ \theta)$, $a(\theta)$, and $b(\theta)$ are differentiable w.r.t. $\theta$, then 
> 
> $$\begin{aligned} \frac{\mathrm{d}}{\mathrm{d}\theta}\int_{a(\theta)}^{b(\theta)} f(x,\ \theta) ~\mathrm{d}x &= f(b(\theta),\ \theta) b'(\theta) - f(a(\theta),\ \theta) a'(\theta) \\&\quad + \int_{a(\theta)}^{b(\theta)} \frac{\partial}{\partial \theta}f(x,\ \theta) ~\mathrm{d}x, \end{aligned}$$
> 
> where $b'(\theta) := \frac{\mathrm{d}}{\mathrm{d}\theta}b(\theta)$ and $a'(\theta) := \frac{\mathrm{d}}{\mathrm{d}\theta}a(\theta)$.
> 
> Note that if $a(\theta)$ and $b(\theta)$ are constant, we can just interchange the order of differentiation and integration: 
> 
> $$\frac{\mathrm{d}}{\mathrm{d}\theta}\int_{a(\theta)}^{b(\theta)} f(x,\ \theta) ~\mathrm{d}x = \int_{a(\theta)}^{b(\theta)} \frac{\partial}{\partial \theta}f(x,\ \theta) ~\mathrm{d}x.$$

> [!NOTE]
> When we say some variable is constant, we automatically exclude the *infinite* cases. If the range of integration is *infinite*, problems can arise, and we need some other theorem.

Now let's introduce the well-known *DCT (Dominated Convergence Theorem)*, to help us solve the infinite cases.

> [!THEOREM|label:Dominated Convergence Theorem]
> Suppose the function $f(x,\ y)$ is continuous at $y_0$ for each $x$, and $\exists $ a function $g(x)$ satisfying
> 
> 1. $\left\vert f(x,\ y) \right\vert \leqslant g(x),\ \forall x,\ \forall y$,
> 2. $\int_{-\infty}^{\infty} g(x) ~\mathrm{d}x < \infty$.
> 
> Then 
> 
> $$\lim\limits_{y \to y_0} \int_{-\infty}^{\infty} f(x,\ y) ~\mathrm{d}x = \int_{-\infty}^{\infty} \lim\limits_{y \to y_0} f(x,\ y) ~\mathrm{d}x.$$

Applying the DCT to the differentiation cases, we get the following theorem.

> [!THEOREM]
> Suppose $f(x,\ \theta)$ is differentiable at $\theta = \theta_0$, i.e., 
> 
> $$\lim\limits_{\delta \to \infty} \frac{f(x,\ \theta_0 + \delta) - f(x,\ \theta_0)}{\delta} = \frac{\partial }{\partial \theta}f(x,\ \theta)\bigg\vert_{\theta=\theta_0}$$
> 
> exists for every $x$, and $\exists $ a function $g(x,\ \theta_0)$ and a constant $\delta_0 > 0$ s.t. 
> 
> 1. $\left\vert \frac{f(x,\ \theta_0 + \delta) - f(x,\ \theta_0)}{\delta} \right\vert \leqslant g(x,\ \theta_0),\ \forall x$ and $\left\vert \delta \right\vert \leqslant \delta_0$,
> 2. $\int_{-\infty}^{\infty} g(x,\ \theta_0) ~\mathrm{d}x < \infty$.
> 
> Then 
> 
> $$\frac{\mathrm{d}}{\mathrm{d}\theta}\int_{-\infty}^{\infty} f(x,\ \theta) ~\mathrm{d}x \bigg\vert_{\theta=\theta_0} = \int_{-\infty}^{\infty} \left[\frac{\partial }{\partial \theta}f(x,\ \theta)\bigg\vert_{\theta=\theta_0} \right] ~\mathrm{d}x.$$
> 
> Typically, if the conditions above are satisfied not only at one value $\theta_0$, but at all other $\theta$ as well, then we have 
> 
> $$\frac{\mathrm{d}}{\mathrm{d}\theta}\int_{-\infty}^{\infty} f(x,\ \theta) ~\mathrm{d}x = \int_{-\infty}^{\infty} \frac{\partial }{\partial \theta}f(x,\ \theta) ~\mathrm{d}x. $$

Actually, finding the bound $g(x,\ \theta)$ is cumbersome. We just need to know that interchange the order of differentiation and integration is not always automatic. In most situations, just do it!

Apart from integration, we also have theorem for *interchanging the order of differentiation and summation*.

> [!THEOREM]
> Suppose that the series $\sum_{x=0}^{\infty} f(\theta,\ x)$ converges for all $\theta$ in an interval $(a,\ b)$ of real numbers and 
> 
> 1. $\frac{\partial }{\partial \theta}f(\theta,\ x)$ is <em>continuous</em> in $\theta$ for each $x$,
> 2. $\sum_{x=0}^{\infty} \frac{\partial }{\partial \theta}f(\theta,\ x)$ <em>converges uniformly</em> on every closed bounded subinterval of $(a,\ b)$.
> 
> Then 
> 
> $$\frac{\mathrm{d}}{\mathrm{d}\theta}\sum\limits_{x=0}^{\infty} f(\theta,\ x) = \sum\limits_{x=0}^{\infty} \frac{\partial }{\partial \theta}f(\theta,\ x).$$

> [!TIP]
> Uniform convergence: given $\epsilon > 0$, $\exists N \in \mathbb{N}$ s.t. $\underset{\theta}{\sup} ~ \left\{\left\vert f(\theta,\ x) - f(\theta) \right\vert \right\} < \epsilon$ for $x \geqslant N$, where $f(\theta)$ is some function.
>
> The difference between uniform and pointwise convergence is that uniform convergence require an *overall* speed of convergence, while pointwise convergence implies that different points have *different* speed of convergence.

Also, we have theorem for *interchanging the order of summation and integration*.

> [!THEOREM]
> Suppose the series $\sum_{x=0}^{\infty} f(\theta,\ x)$ *converges uniformly* on $[a,\ b]$ and that, for each $x$, $f(\theta,\ x)$ is a *continuous* function of $\theta$. Then 
> 
> $$\int_{a}^{b} \sum\limits_{x=0}^{\infty} f(\theta,\ x) ~\mathrm{d}\theta = \sum\limits_{x=0}^{\infty} \int_{a}^{b} f(\theta,\ x) ~\mathrm{d}\theta.$$

### Exercises

1. Let $X$ be a standard normal r.v. and set $Y = e^{X}$.

    (a) Find the distribution of $Y$.

    <details>
    <summary>Solution: </summary>

    Since the transformation $g(x) = e^{x}$ is increasing in $(-\infty,\ \infty)$, the pdf of $Y$ is given by 

    $$
    f_{Y}(y) = f_{X}(\log y) \frac{\mathrm{d}}{\mathrm{d}y}\log y = \frac{1}{\sqrt{2\pi}} \frac{1}{y} e^{-\frac{(\log y)^{2}}{2}}.
    $$
    </details>

    (b) Show that all the moments of $Y$ exist.

    <details>
    <summary>Proof: </summary>

    The $n$-th moment of $Y$ is 

    $$
    \E[Y^{n}] = \E[e^{nX}] = M_{X}(n) = e^{\frac{n^{2}}{2}},
    $$

    where $M_{X}(\cdot)$ is the mgf of $X$. Thus, all the moments of $Y$ exist.
    </details>

    (c) Show that the r.v. $Y$ does not have a moment generating function.

    <details>
    <summary>Proof: </summary>

    Suppose $Y$ have a mgf denoted by $M_{Y}(t)$, by [definition](#mgf) we want to show that the expectation $\E[e^{tY}]$ does not exist for $t$ in some neighborhood of $0$. $\forall t < 0$, $\E[e^{tY}] \leqslant 1$ since $Y$ is positive. So we will focus on cases when $t > 0$.
    
    For $t > 0$, we have 

    $$
    \begin{aligned}
        M_{Y}(t) = \E\left[e^{tY} \right] &= \int_{0}^{\infty} e^{t y} \frac{1}{\sqrt{2\pi}} \frac{1}{y} e^{-\frac{(\log y)^{2}}{2}} ~\mathrm{d}y \\
        &= \int_{0}^{\infty} \frac{1}{\sqrt{2\pi}} \frac{1}{y} e^{ty - \frac{(\log y)^{2}}{2}} ~\mathrm{d}y.
    \end{aligned}
    $$

    Since 

    $$
    \begin{aligned}
        \lim\limits_{y \to \infty} \frac{ty - (\log y)^{2}}{ty} &= \lim\limits_{y \to \infty} \frac{t - 2 (\log y) / y}{t} \\
        &= \lim\limits_{y \to \infty} \frac{ty - 2 \log y}{ty} \\
        &= \lim\limits_{y \to \infty} \frac{t - 2 / y}{t} \\
        &= \lim\limits_{y \to \infty} \frac{ty - 2}{ty} \\
        &= \lim\limits_{y \to \infty} \frac{t}{t} \\
        &= 1,
    \end{aligned}
    $$

    we have
    
    $$
    \lim\limits_{y \to \infty} ty - (\log y)^{2} = \lim\limits_{y \to \infty} ty = \infty,\quad t > 0.
    $$

    Thus, for any $k > 0$, $\exists $ a positive constant $c$ s.t. 

    $$
    \int_{k}^{\infty} \frac{1}{\sqrt{2\pi}} \frac{1}{y} e^{ty - \frac{(\log y)^{2}}{2}} ~\mathrm{d}y \geqslant c \int_{k}^{\infty} \frac{1}{y} ~\mathrm{d}y = c \log y \big\vert_{y=k}^{\infty} = \infty,
    $$

    which means $M_{Y}(t)$ does not exist for $t > 0$.
    </details>

## Assignments

### Textbook Exercises

*2.2* (p.76) In each of the following find the pdf of $Y$.

(a) $Y = X^{2}$ and $f_{X}(x) = 1,\ 0 < x < 1$

<details>
<summary>Solution: </summary>

Denote the transformation from $X$ to $Y$ by $g(\cdot)$, which is an increasing function in $(0,\ 1)$. It is trivial that $g ^{-1}(y) = \sqrt{y},\ 0 < y < 1$. Then, we have 

$$
\begin{aligned}
    f_{Y}(y) &= f_{X}(g ^{-1}(y)) \left\vert \frac{\mathrm{d}}{\mathrm{d}y}g ^{-1}(y) \right\vert \\
    &= \frac{1}{2\sqrt{y}},\quad 0 < y < 1,
\end{aligned}
$$

and $f_{Y}(y) = 0$ elsewhere.
</details>

(b) $Y = -\log X$ and X has pdf

$$
f_{X}(x) = \frac{(n + m + 1)!}{n! m!} x^{n}(1 - x)^{m},\quad 0 < x < 1,\quad m,\ n \text{ positive integers}
$$

<details>
<summary>Solution: </summary>

Denote the transformation from $X$ to $Y$ by $g(\cdot)$, which is a decreasing function in $(0,\ 1)$. It is trivial that $g ^{-1}(y) = e^{-y},\ 0 < y < \infty$. Then, we have 

$$
\begin{aligned}
    f_{Y}(y) &= f_{X}(g ^{-1}(y)) \left\vert \frac{\mathrm{d}}{\mathrm{d}y}g ^{-1}(y) \right\vert \\
    &= \frac{(n + m + 1)!}{n! m!} e^{-ny}(1 - e^{-y})^{m} e^{-y} \\
    &= \frac{(n + m + 1)!}{n! m!} e^{-(n + 1) y}(1 - e^{-y})^{m},\quad 0 < y < \infty,
\end{aligned}
$$

and $f_{Y}(y) = 0$ elsewhere.
</details>

(c) $Y = e^{X}$ and X has pdf 

$$
f_{X}(x) = \frac{1}{\sigma^{2}} x e^{-(x / \sigma)^{2} / 2},\quad 0 < x < \infty,\quad \sigma^{2} \text{ a positive constant}
$$

<details>
<summary>Solution: </summary>

Denote the transformation from $X$ to $Y$ by $g(\cdot)$, which is an increasing function in $(0,\ \infty)$. It is trivial that $g ^{-1}(y) = \log y,\ 1 < y < \infty$. Then, we have 

$$
\begin{aligned}
    f_{Y}(y) &= f_{X}(g ^{-1}(y)) \left\vert \frac{\mathrm{d}}{\mathrm{d}y}g ^{-1}(y) \right\vert \\
    &= \frac{1}{\sigma^{2}} \log y e^{-[(\log y) / \sigma]^{2} / 2} \frac{1}{y} \\
    &= \frac{1}{\sigma^{2}} \frac{\log y}{y} e^{-[(\log y) / \sigma]^{2} / 2},\quad 1 < y < \infty,
\end{aligned}
$$

and $f_{Y}(y) = 0$ elsewhere.
</details>

*2.14* (p.78)

(a) Let $X$ be a continuous, nonnegative random variable $[f(x) = 0 \text{ for } x < 0]$. Show that 

$$
\E[X] = \int_{0}^{\infty} [1 - F_{X}(x)] ~\mathrm{d}x,
$$

where $F_{X}(x)$ is the cdf of $X$.

> [!TIP]
> Sometimes if it is hard from LHS to RHS, try from RHS to LHS.

<details>
<summary>Proof: </summary>

$$
\begin{aligned}
    \int_{0}^{\infty} [1 - F_{X}(x)] ~\mathrm{d}x &= \int_{0}^{\infty} P(X > x) ~\mathrm{d}x \\
    &= \int_{0}^{\infty} \int_{x}^{\infty} f_{X}(y) ~\mathrm{d}y ~\mathrm{d}x \\
    &= \int_{0}^{\infty} \int_{0}^{y} f_{X}(y) ~\mathrm{d}x ~\mathrm{d}y \\
    &= \int_{0}^{\infty} y f_{X}(y) ~\mathrm{d}y \\
    &= \E[X] \\
\end{aligned}
$$

where $f_{X}(x)$ is the pdf of $X$.
</details>

(b) Let $X$ be a discrete random variable whose range is the nonnegative integers. Show that 

$$
\E[X] = \sum\limits_{k=0}^{\infty} (1 - F_{X}(k)),
$$

where $F_{X}(k) = P(X \leqslant k)$. Compare this with part (a).

<details>
<summary>Proof: </summary>

$$
\begin{aligned}
    \sum\limits_{k=0}^{\infty} (1 - F_{X}(k)) &= \sum\limits_{k=0}^{\infty} P(X > k) \\
    &= \sum\limits_{k=0}^{\infty} \sum\limits_{m=k+1}^{\infty} P(X = m) \\
    &= \sum\limits_{m=0}^{\infty} \sum\limits_{k=0}^{m - 1} P(X = m) \\
    &= \sum\limits_{m=0}^{\infty} m P(X = m) \\
    &= \E[X],
\end{aligned}
$$

which is similar to (a).
</details>

*2.15* (p.78) Betteley (1977) provides an interesting addition law for expectations. Let $X$ and $Y$ be any two random variables and define 

$$
X \wedge Y = \min(X,\ Y) \quad \text{and} \quad X \vee Y = \max(X,\ Y).
$$

Analogous to the probability law $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, show that 

$$
\E[X \vee Y] = \E[X] + \E[Y] - \E[X \wedge Y].
$$

(*Hint*: Establish that $X + Y = (X \vee Y) + (X \wedge Y)$.)

<details>
<summary>Proof: </summary>

Assume $X \leqslant Y$, we have $X \vee Y = Y$ and $X \wedge Y = X$. Thus, 

$$
\begin{aligned}
    \E[X + Y] &= \E[X \vee Y + X \wedge Y] \\
    \E[X] + \E[Y] &= \E[X \vee Y] + \E[X \wedge Y] \\
    \E[X \vee Y] &= \E[X] + \E[Y] - \E[X \wedge Y].
\end{aligned}
$$

Then, if $X > Y$, we have $X \vee Y = X$ and $X \wedge Y = Y$, which leads to the same conclusion.
</details>

*2.32* (p.80) Let $M_{X}(t)$ be the moment generating function of $X$, and define $S(t) = \log(M_{X}(t))$. Show that 

$$
\frac{\mathrm{d}}{\mathrm{d}t}S(t) \bigg\vert_{t=0} = \E[X] \quad \text{and} \quad \frac{\mathrm{d}^{2}}{\mathrm{d}t^{2}}S(t)\bigg\vert_{t=0} = \Var(X).
$$

<details>
<summary>Proof: </summary>

The derivatives of $S(t)$ w.r.t. $t$ are 

$$
\frac{\mathrm{d}}{\mathrm{d}t}S(t) = \frac{\mathrm{d}}{\mathrm{d}t}\log(M_{X}(t)) = \frac{M_{X}'(t)}{M_{X}(t)}
$$

and 

$$
\frac{\mathrm{d}^{2}}{\mathrm{d}t^{2}}S(t) = \frac{\mathrm{d}}{\mathrm{d}t}\frac{M_{X}'(t)}{M_{X}(t)} = \frac{M_{X}''(t) M_{X}(t) - (M_{X}'(t))^{2}}{(M_{X}(t))^{2}}.
$$

Let $t = 0$, we have 

$$
\frac{\mathrm{d}}{\mathrm{d}t}S(t) \bigg\vert_{t=0} = \frac{\E[X]}{1} = \E[X]
$$

and 

$$
\frac{\mathrm{d}^{2}}{\mathrm{d}t^{2}}S(t) \bigg\vert_{t=0} = \frac{\E[X^{2}] \cdot 1 - (\E[X])^{2}}{1^{2}} = \Var(X).
$$
</details>

*2.33* (p.80-81) In each of the following cases verify the expression given for the moment generating function, and in each case use the mgf to calculate $\E[X]$ and $\Var(X)$.

(a) $P(X = x) = \frac{e^{-\lambda} \lambda^{x}}{x!},\ M_{X}(t) = e^{\lambda (e^{t} - 1)},\ x = 0,\ 1,\ \cdots;\ \lambda > 0$

<details>
<summary>Solution: </summary>

$$
\begin{aligned}
    M_{X}(t) = \E[e^{tX}] &= \sum\limits_{x=0}^{\infty} e^{tx} \frac{e^{-\lambda} \lambda^{x}}{x!} \\
    &= e^{\lambda e^{t} - \lambda} \sum\limits_{x=0}^{\infty} e^{-\lambda e^{t}}\frac{(\lambda e^{t})^{x}}{x!} \\
    &= e^{\lambda (e^{t} - 1)}.
\end{aligned}
$$

The derivatives of the mgf w.r.t. $t$ are 

$$
M_{X}'(t) = \lambda e^{t} e^{\lambda (e^{t} - 1)} = \lambda e^{\lambda(e^{t} - 1) + t}
$$

and 

$$
M_{X}''(t) = \frac{\mathrm{d}}{\mathrm{d}t} \left[\lambda e^{\lambda(e^{t} - 1) + t}\right] = \lambda (\lambda e^{t} + 1) e^{\lambda(e^{t} - 1) + t}.
$$

Let $t = 0$, we have 

$$
\E[X] = M_{X}'(0) = \lambda \quad \text{and} \quad \E[X^{2}] = M_{X}''(0) = \lambda (\lambda + 1),
$$

which means 

$$
\Var(X) = \E[X^{2}] - \E^{2}[X] = \lambda (\lambda + 1) - \lambda^{2} = \lambda.
$$
</details>

(b) $P(X = x) = p (1 - p)^{x},\ M_{X}(t) = \frac{p}{1 - (1 - p) e^{t}},\ x = 0,\ 1,\ \cdots;\ 0 < p < 1$

<details>
<summary>Solution: </summary>

$$
\begin{aligned}
    M_{X}(t) = \E[e^{tX}] &= \sum\limits_{x=0}^{\infty} e^{tx} p (1-p)^{x} \\
    &= \sum\limits_{x=0}^{\infty} p [(1-p)e^{t}]^{x} \\
    &= \frac{p \left[1 - \lim_{x \to \infty} [(1-p)e^{t}]^{x} \right]}{1 - (1 - p)e^{t}} \\
    &= \frac{p}{1 - (1 - p)e^{t}},\quad  t < - \log (1 - p),
\end{aligned}
$$

and $M_{X}(t)$ does not exist elsewhere.

The derivatives of the mgf w.r.t. $t$ are 

$$
M_{X}'(t) = - \frac{p \left[- (1 - p) e^{t} \right]}{\left[1 - (1 - p) e^{t} \right]^{2}} = \frac{p (1 - p) e^{t}}{\left[1 - (1 - p) e^{t} \right]^{2}}
$$

and 

$$
\begin{aligned}
    M_{X}''(t) &= \frac{\mathrm{d}}{\mathrm{d}t} \frac{p (1 - p) e^{t}}{\left[1 - (1 - p) e^{t} \right]^{2}} \\
    &= p (1 - p) \frac{e^{t} \left[1 - (1 - p) e^{t} \right]^{2} - e^{t} \cdot 2 \left[1 - (1 - p) e^{t} \right] \left[- (1 - p) e^{t} \right]}{\left[1 - (1 - p) e^{t} \right]^{4}} \\
    &= p (1 - p) e^{t} \frac{1 + (1 - p) e^{t}}{\left[1 - (1 - p) e^{t} \right]^{3}} \\
\end{aligned}
$$

Let $t = 0$, we have 

$$
\E[X] = M_{X}'(0) = \frac{1 - p}{p} \quad \text{and} \quad \E[X^{2}] = M_{X}''(0) = \frac{(1 - p) (2 - p)}{p^{2}},
$$

which means 

$$
\Var(X) = \E[X^{2}] - \E^{2}[X] = \frac{(1 - p) (2 - p)}{p^{2}} - \frac{(1 - p)^{2}}{p^{2}} = \frac{1 - p}{p^{2}}.
$$
</details>

(c) $f_{X}(x) = \frac{e^{-(x - \mu)^{2} / (2 \sigma^{2})}}{\sqrt{2 \pi} \sigma},\ M_{X}(t) = e^{\mu t + \sigma^{2} t^{2} / 2},\ -\infty < x < \infty;\ -\infty < \mu < \infty,\ \sigma > 0$

<details>
<summary>Solution: </summary>

$$
\begin{aligned}
    M_{X}(t) = \E[e^{tX}] &= \int_{-\infty}^{\infty} e^{t x} \frac{e^{-(x - \mu)^{2} / (2 \sigma^{2})}}{\sqrt{2 \pi} \sigma} ~\mathrm{d}x \\
    &= \int_{-\infty}^{\infty} e^{\mu t + \sigma^{2} t^{2} / 2} \frac{e^{\left[-(x - \mu)^{2} + 2 \sigma^{2} t x + \mu^{2} - \left(\mu + \sigma^{2} t \right)^{2}\right] / (2 \sigma^{2})}}{\sqrt{2 \pi} \sigma} ~\mathrm{d}x \\
    &= e^{\mu t + \sigma^{2} t^{2} / 2} \int_{-\infty}^{\infty} \frac{e^{-\left[x - \left(\mu + \sigma^{2}t\right) \right]^{2} / (2 \sigma^{2})}}{\sqrt{2 \pi} \sigma} ~\mathrm{d}x \\
    &= e^{\mu t + \sigma^{2} t^{2} / 2}.
\end{aligned}
$$

The derivatives of the mgf w.r.t. $t$ are 

$$
M_{X}'(t) = \left(\mu + \sigma^{2} t \right) e^{\mu t + \sigma^{2} t^{2} / 2}
$$

and 

$$
\begin{aligned}
    M_{X}''(t) &= \frac{\mathrm{d}}{\mathrm{d}t} \left[\left(\mu + \sigma^{2} t \right) e^{\mu t + \sigma^{2} t^{2} / 2} \right] \\
    &= \sigma^{2} e^{\mu t + \sigma^{2} t^{2} / 2} + \left(\mu + \sigma^{2} t \right)^{2} e^{\mu t + \sigma^{2} t^{2} / 2} \\
    &= \left[\sigma^{2} + \left(\mu + \sigma^{2} t \right)^{2} \right]  e^{\mu t + \sigma^{2} t^{2} / 2}.
\end{aligned}
$$

Let $t = 0$, we have 

$$
\E[X] = M_{X}'(0) = \mu\quad \text{and} \quad \E[X^{2}] = M_{X}''(0) = \sigma^{2} + \mu^{2},
$$

which means 

$$
\Var(X) = \E[X^{2}] - \E^{2}[X] = \sigma^{2} + \mu^{2} - \mu^{2} = \sigma^{2}.
$$
</details>

*2.38* (p.82) Let $X$ have the negative binomial distribution with pmf 

$$
f(x) = \binom{r + x - 1}{x} p^{r} (1 - p)^{x},\quad x = 0,\ 1,\ 2,\ \cdots,
$$

where $0 < p < 1$ and $r > 0$ is an integer.

(a) Calculate the mgf of $X$.

<details>
<summary>Solution: </summary>

The mgf of $X$ is given by 

$$
\begin{aligned}
    M_{X}(t) = \E[e^{t X}] &= \sum\limits_{x=0}^{\infty} e^{t x} \binom{r + x - 1}{x} p^{r} (1 - p)^{x} \\
    &= \sum\limits_{x=0}^{\infty} \binom{r + x - 1}{x} p^{r} \left[(1 - p)e^{t} \right]^{x} \\
    &= \left[\frac{p}{1 - (1 - p)e^{t}} \right]^{r} \sum\limits_{x=0}^{\infty} \binom{r + x - 1}{x} \left[1 - (1 - p)e^{t} \right]^{r} \left[(1 - p)e^{t} \right]^{x} \\
    &= \left[\frac{p}{1 - (1 - p)e^{t}} \right]^{r}.
\end{aligned}
$$
</details>

(b) Define a new random variable by $Y = 2pX$. Show that, as $p \downarrow 0$, the mgf of $Y$ converges to that of a chi squared random variable with $2r$ degrees of freedom by showing that 

$$
\lim\limits_{p \to \infty} M_{Y}(t) = \left(\frac{1}{1 - 2t} \right)^{r},\quad \left\vert t \right\vert < \frac{1}{2}.
$$

<details>
<summary>Proof: </summary>

The mgf of $Y$ is given by 

$$
M_{Y}(t) = M_{X}(2pt) = \left[\frac{p}{1 - (1 - p)e^{2pt}} \right]^{r}.
$$

Thus, we have 

$$
\begin{aligned}
    \lim\limits_{p \to 0} M_{Y}(t) &= \lim\limits_{p \to 0} \left[\frac{p}{1 - (1 - p)e^{2pt}} \right]^{r} \\
    &= \lim\limits_{p \to 0} \left[\frac{1}{1 \cdot e^{2pt} + (p - 1) \cdot 2t e^{2pt}} \right]^{r} \\
    &= \left(\frac{1}{1 - 2t} \right)^{r},\quad \left\vert t \right\vert < \frac{1}{2}.
\end{aligned}
$$
</details>

*2.40* (p.82) Prove 

$$
\sum\limits_{k=0}^{x} \binom{n}{k} p^{k} (1 - p)^{n-k} = (n - x) \binom{n}{x} \int_{0}^{1 - p} t^{n - x - 1}(1 - t)^{x} ~\mathrm{d}t.
$$

(*Hint*: Integrate by parts or differentiate both sides with respect to $p$.)

<details>
<summary>Proof: </summary>

$$
\begin{aligned}
    \text{RHS} := I_x &= \binom{n}{x} \int_{0}^{1 - p} (n - x) t^{n - x - 1}(1 - t)^{x} ~\mathrm{d}t \\
    &= \binom{n}{x} t^{n - x} (1 - t)^{x} \big\vert_{t = 0}^{1 - p} - \frac{n!}{x! (n - x)!} \int_{0}^{1 - p} \left[- x t^{n - x}(1 - t)^{x - 1} \right] ~\mathrm{d}t \\
    &= \binom{n}{x} (1 - p)^{n - x} p^{x} + \frac{n!}{(x - 1)! (n - x)!} \int_{0}^{1 - p} t^{n - x}(1 - t)^{x - 1} ~\mathrm{d}t \\
    &= \binom{n}{x} (1 - p)^{n - x} p^{x} + \binom{n}{x - 1} \int_{0}^{1 - p} (n - x + 1) t^{n - x}(1 - t)^{x - 1} ~\mathrm{d}t \\
    &= \binom{n}{x} (1 - p)^{n - x} p^{x} + I_{x - 1} \\
    &= \sum\limits_{k=1}^{x} \binom{n}{k} (1 - p)^{n - k} p^{k} + \binom{n}{0} \int_{0}^{1 - p} n t^{n - 1} ~\mathrm{d}t \\
    &= \sum\limits_{k=1}^{x} \binom{n}{k} (1 - p)^{n - k} p^{k} + t^{n} \big\vert_{t = 0}^{1 - p} \\
    &= \sum\limits_{k=1}^{x} \binom{n}{k} (1 - p)^{n - k} p^{k} + (1 - p)^{n} \\
    &= \sum\limits_{k=0}^{x} \binom{n}{k} (1 - p)^{n - k} p^{k} \\
    &= \text{LHS}.
\end{aligned}
$$
</details>

### Additional Exercises

1. Let $X$ have pdf $f_{X}(x) = \frac{2}{9}(x + 1),\ -1 \leqslant x \leqslant 2$.

    (a) Find the pdf of $Y = X^{2}$ by proper partition using Theorem 2.1.8.

    <details>
    <summary>Solution: </summary>

    Denote the transformation by $g(x) = x^{2}$, which is monotone in $[-1,\ 0)$ and $(0,\ 2]$. For $x \in [-1,\ 1]$, let $\mathcal{A}_0 = \left\{0 \right\}$, $\mathcal{A}_1 = [-1,\ 0)$ and $\mathcal{A}_2 = (0,\ 1]$, the corresponding inverse transformations are $g_1 ^{-1}(y) = -\sqrt{y}$ and $g_2 ^{-1}(y) = \sqrt{y}$. Then, the pdf of $Y$ is given by 

    $$
    \begin{aligned}
        f_{Y}(y) &= \sum\limits_{i=1}^{2} f_{X}(g_i^{-1}(y)) \left\vert \frac{\mathrm{d}}{\mathrm{d}y}g_i^{-1}(y) \right\vert \\
        &= \frac{2}{9}(-\sqrt{y} + 1) \frac{1}{2\sqrt{y}} + \frac{2}{9}(\sqrt{y} + 1) \frac{1}{2\sqrt{y}} \\
        &= \frac{2}{9} \frac{1}{\sqrt{y}},\quad 0 \leqslant y \leqslant  1 \\
    \end{aligned}
    $$

    For $x \in (1,\ 2]$, by monotonicity we have 

    $$
    \begin{aligned}
        f_{Y}(y) &= f_{X}(g_i^{-1}(y)) \left\vert \frac{\mathrm{d}}{\mathrm{d}y}g_i^{-1}(y) \right\vert \\
        &= \frac{2}{9}(\sqrt{y} + 1) \frac{1}{2\sqrt{y}} \\
        &= \frac{1}{9} \left(1 + \frac{1}{\sqrt{y}} \right),\quad 1 < y \leqslant 4.
    \end{aligned}
    $$

    Finally, we have 

    $$
    f_{Y}(y) = \begin{cases}
        \frac{2}{9} \frac{1}{\sqrt{y}},\ &0 \leqslant y \leqslant  1, \\
        \frac{1}{9} \left(1 + \frac{1}{\sqrt{y}} \right),\ &1 < y \leqslant 4, \\
        0,\ &\text{otherwise}.
    \end{cases}
    $$

    > [!ATTENTION]
    > Do not try to split the support set of $X$ to be $[-1,\ 0)$ and $(0,\ 2]$! Although $g(x)$ is monotone in these 2 intervals, their support sets of $Y$ are different, i.e., we need the partition to have the same support set of $Y$.
    </details>

    (b) Find a monotone function $u(y)$ such that random variable $Z = u(Y)$ has a $\text{uniform}(0,\ 1)$ distribution.

    <details>
    <summary>Solution: </summary>

    We know that the cdf transformation, i.e., $u(y) = F_{Y}(y)$ would make a r.v. uniformly distributed in $(0,\ 1)$. So our goal is to calculate the cdf of $Y$: 

    $$
    \begin{aligned}
        F_{Y}(y) &= \int_{-\infty}^{y} f_{Y}(x) ~\mathrm{d}x \\
        &= \begin{cases}
            0,\ &y < 0 \\
            \int_{0}^{y} \frac{2}{9}\frac{1}{\sqrt{x}} ~\mathrm{d}x,\ &0 \leqslant y \leqslant 1 \\
            \int_{0}^{1} \frac{2}{9}\frac{1}{\sqrt{x}} ~\mathrm{d}x + \int_{1}^{y} \frac{1}{9}\left(1 + \frac{1}{\sqrt{x}} \right) ~\mathrm{d}x,\ &1 < y \leqslant 4 \\
            1,\ &y > 4 \\
        \end{cases} \\
        &= \begin{cases}
            0,\ &y < 0 \\
            \frac{4}{9} \sqrt{x} \big\vert_{x=0}^{y},\ &0 \leqslant y \leqslant 1 \\
            \frac{4}{9} \sqrt{x} \big\vert_{x=0}^{1} + \left(\frac{1}{9}x + \frac{2}{9}\sqrt{x} \right) \big\vert_{x=1}^{y},\ &1 < y \leqslant 4 \\
            1,\ &y > 4 \\
        \end{cases} \\
        &= \begin{cases}
            0,\ &y < 0 \\
            \frac{4}{9}\sqrt{y},\ &0 \leqslant y \leqslant 1 \\
            \frac{1}{9} + \frac{1}{9}y + \frac{2}{9}\sqrt{y},\ &1 < y \leqslant 4 \\
            1,\ &y > 4.
        \end{cases} \\
    \end{aligned}
    $$

    So the transformation is given by 

    $$
    u(y) = \begin{cases}
            0,\ &y < 0 \\
            \frac{4}{9}\sqrt{y},\ &0 \leqslant y \leqslant 1 \\
            \frac{1}{9} + \frac{1}{9}y + \frac{2}{9}\sqrt{y},\ &1 < y \leqslant 4 \\
            1,\ &y > 4.
        \end{cases}
    $$

    > [!ATTENTION]
    > Do not forget the $0$ and $1$ cases, i.e., when the pdf is $0$!
    </details>


2. A median of a distribution is a value $m$ such that $P(X \leqslant m) \geqslant \frac{1}{2}$ and $P(X \geqslant m) \geqslant \frac{1}{2}$ (If $X$ is continuous, $m$ satisfies $\int_{-\infty}^{m} f(x) ~\mathrm{d}x = \int_{m}^{\infty} f(x) ~\mathrm{d}x = \frac{1}{2}$).

    (a) Find the median for following distributions respectively.

    &emsp;&emsp;(i) $f(x) = a x^{a - 1} (0 < x < 1,\ a > 0)$

    &emsp;&emsp;(ii) $f(x) = \frac{1}{\pi\sigma} \frac{\sigma^{2}}{\sigma^{2} + (x - \theta)^{2}} (-\infty < x < \infty,\ -\infty < \theta < \infty,\ \sigma > 0)$

    <details>
    <summary>Solution: </summary>

    (i) Let 

    $$
    \int_{0}^{m} a x^{a-1} ~\mathrm{d}x = x^{a} \big\vert_{x=0}^{2}{m} = m^{a} = \frac{1}{2},
    $$

    we get $m = 2^{-\frac{1}{a}}$.

    (ii) Let 

    $$
    \begin{aligned}
        \int_{-\infty}^{m} \frac{1}{\pi\sigma} \frac{\sigma^{2}}{\sigma^{2} + (x - \theta)^{2}} ~\mathrm{d}x &= \frac{1}{\pi} \int_{-\infty}^{m} \frac{1}{1 + (x - \theta)^{2} / \sigma^{2}} ~\mathrm{d}\left(\frac{x - \theta}{\sigma} \right) \\
        &= \frac{1}{\pi} \left(\arctan \left(\frac{m - \theta}{\sigma} \right) - \lim\limits_{x \to -\infty} \arctan \left(\frac{x - \theta}{\sigma} \right) \right) \\
        &= \frac{1}{\pi} \arctan \left(\frac{m - \theta}{\sigma} \right) + \frac{1}{2} \\
        &= \frac{1}{2},
    \end{aligned}
    $$

    we get $m = \theta$.
    </details>

    (b) Show that if $X$ is a continuous random variable, then 

    $$
    \underset{a}{\min} ~ \E[\left\vert X - a \right\vert] = \E[\left\vert X - m \right\vert] 
    $$

    &emsp;&emsp;where $m$ is the median of $X$.

    <details>
    <summary>Proof: </summary>

    Since 

    $$
    \begin{aligned}
        \E[\left\vert X - a \right\vert] &= \int_{-\infty}^{\infty} \left\vert x - a \right\vert f(x) ~\mathrm{d}x \\
        &= \int_{-\infty}^{a} (a - x) f(x) ~\mathrm{d}x + \int_{a}^{\infty} (x - a) f(x) ~\mathrm{d}x,
    \end{aligned}
    $$

    we can calculate the derivative of it w.r.t. $a$: 

    $$
    \begin{aligned}
        \frac{\mathrm{d}}{\mathrm{d}a} \E[\left\vert X - a \right\vert] &= \frac{\mathrm{d}}{\mathrm{d}a} \left[\int_{-\infty}^{a} (a - x) f(x) ~\mathrm{d}x + \int_{a}^{\infty} (x - a) f(x) ~\mathrm{d}x \right] \\
        &= \int_{-\infty}^{a} f(x) ~\mathrm{d}x - \int_{a}^{\infty} f(x) ~\mathrm{d}x.
    \end{aligned}
    $$

    When $\int_{-\infty}^{a} f(x) ~\mathrm{d}x = \int_{a}^{\infty} f(x) ~\mathrm{d}x$, i.e., $a$ equals the median $m$, the derivative is $0$, which means $a = m$ is a critial point. Now we check the second order derivative: 

    $$
    \begin{aligned}
        \frac{\mathrm{d}^{2}}{\mathrm{d}a^{2}} \E[\left\vert X - a \right\vert] &= \frac{\mathrm{d}}{\mathrm{d}a} \left(\int_{-\infty}^{a} f(x) ~\mathrm{d}x - \int_{a}^{\infty} f(x) ~\mathrm{d}x \right) \\
        &= \frac{\mathrm{d}}{\mathrm{d}a} \left[F(a) - (1 - F(a)) \right] \\
        &= 2 f(a) \\
        &> 0,
    \end{aligned}
    $$

    which means the critical point is the minimum point and thus we have 

    $$
    \underset{a}{\min} ~ \E[\left\vert X - a \right\vert] = \E[\left\vert X - m \right\vert].
    $$
    </details>

3. Let $X$ be a random variable with finite mgf $M_{X}(t)$. Prove that 
   
    $$
    \lim\limits_{n \to \infty} \left[M_{X} \left(\frac{t}{n} \right) \right]^{n} = e^{t \E[X]}.
    $$

    <details>
    <summary>Proof: </summary> 

    See [Exercises in 2.3](#exercises-1).
    </details>
