# 4 Multiple Random Variables

## 4.1 Joint and Marginal Distributions

> [!DEFINITION]
> Let $X,\ Y$ be 2 random variables, then the **joint distribution function** is 
> 
> $$F_{X,\ Y}(x,\ y) = P(X \leqslant x,\ Y \leqslant y).$$
> 
> Let $\mathcal{A}$ be any set in $\mathbb{R}^{2}$, then the **joint pdf (pmf)** of a bivariate random vector $(X,\ Y)$, $f_{X,\ Y}(x,\ y)$ is defined by 
> 
> $$P((X,\ Y) \in \mathcal{A}) = \int \int_{\mathcal{A}} f_{X,\ Y}(x,\ y) ~\mathrm{d}x ~\mathrm{d}y \quad \text{(continuous)},$$
> 
> $$P((X,\ Y) \in \mathcal{A}) = \sum\limits_{(x,\ y)\in \mathcal{A}} f_{X,\ Y}(x,\ y) \quad \text{(discrete)}.$$

> [!EXAMPLE]
> Define a joint pdf by 
> 
> $$f_{X,\ Y}(x,\ y) = \begin{cases} 6 x y^{2},\ &0 < x < 1,\ 0 < y < 1 \\ 0,\ &\text{otherwise}. \end{cases}$$
> 
> Consider calculating a probability $P(X + Y \geqslant 1)$. We let $\mathcal{A} = \left\{(x,\ y): x + y \geqslant 1 \right\}$ and thus the probability can be expressed as $P((X,\ Y)\in \mathcal{A})$. Note that the set $\mathcal{A}$ can be rewritten as $\mathcal{A} = \left\{(x,\ y): y \geqslant 1 - x \right\}$, so the probability is given by 
> 
> $$P(X + Y \geqslant 1) = \int_{0}^{1} \int_{1}^{1 - x} 6 x y^{2} ~\mathrm{d}y ~\mathrm{d}x = -\frac{9}{10}.$$

> [!THEOREM]
> Let $(X,\ Y)$ be a bivariate random vector with joint pdf (pmf) $f_{X,\ Y}(x,\ y)$, then the **marginal pdfs (pmfs)** of $X$ and $Y$, $f_{X}(x)$ and $f_{Y}(y)$ are given by 
> 
> $$f_{X}(x) = \int_{-\infty}^{\infty} f_{X,\ Y}(x,\ y) ~\mathrm{d}y,\quad f_{Y}(y) = \int_{-\infty}^{\infty} f_{X,\ Y}(x,\ y) ~\mathrm{d}x$$
> 
> for continuous cases, and 
> 
> $$f_{X}(x) = \sum\limits_{y \in \mathbb{R}} f_{X,\ Y}(x,\ y),\quad f_{Y}(y) = \sum\limits_{x \in \mathbb{R}} f_{X,\ Y}(x,\ y)$$
> 
> for discrete cases.

## 4.2 Conditional Distributions and Independence

> [!DEFINITION]
> Let $(X,\ Y)$ be a bivariate random vector with joint pdf (pmf) $f_{X,\ Y}(x,\ y)$. For any $x$ s.t. $f_{X}(x) > 0$, the **conditional pdf (pmf)** of $Y$ given that $X = x$ is the function of $y$ denoted by $f(y \mid x)$ and defined by 
> 
> $$f_{Y \mid X}(y \mid x) = \frac{f_{X,\ Y}(x,\ y)}{f_{X}(x)}.$$
> 
> Note that conditional pdf (pmf) is a pdf (pmf) because $f_{Y \mid X}(y \mid x) \geqslant 0$ 
> 
> $$\int_{-\infty}^{\infty} f_{Y \mid X}(y \mid x) ~\mathrm{d}y = \frac{\int_{-\infty}^{\infty} f_{X,\ Y}(x,\ y) ~\mathrm{d}y}{f_{X}(x)} = \frac{f_{X}(x)}{f_{X}(x)} = 1$$
> 
> for continuous cases (discrete cases are similar).

> [!EXAMPLE]
> Let a continuous random vector $(X,\ Y)$ have joint pdf $f_{X,\ Y}(x,\ y) = e^{-y},\ 0 < x < y < \infty$. We want to calculate the conditional pdf of $Y \mid X$. First we need to calculate the marginal pdf of $X$: 
> 
> $$f_{X}(x) = \int_{x}^{\infty} e^{-y} ~\mathrm{d}y = e^{-x}.$$
> 
> Then, the conditional pdf of $Y \mid X$ is given by 
> 
> $$f_{Y \mid X}(y \mid x) = \frac{e^{-y}}{e^{-x}} = e^{x - y},\quad y > x.$$
> 
> The expectation of $Y$ given that $X = x$ is given by 
> 
> $$\begin{aligned} \E[Y \mid X = x] &= \int_{x}^{\infty} y e^{x - y} ~\mathrm{d}y \\ &= -\int_{x}^{\infty} y ~\mathrm{d}e^{x - y} \\ &= -\left[y e^{x - y} \big\vert_{y=x}^{\infty} - \int_{x}^{\infty} e^{x - y} ~\mathrm{d}y \right] \\ &= x + 1. \end{aligned}$$
> 
> To calculate the variance of $Y$ given that $X = x$, we just need to calculate the second moment: 
> 
> $$\begin{aligned} \E[Y^{2} \mid X = x] &= \int_{x}^{\infty} y^{2} e^{x - y} ~\mathrm{d}y \\ &= -\int_{x}^{\infty} y^{2} ~\mathrm{d}e^{x - y} \\ &= -\left[y^{2} e^{x - y} \big\vert_{y=x}^{\infty} - \int_{x}^{\infty} 2 y e^{x - y} ~\mathrm{d}y \right] \\ &= -\left[-x^{2} - 2 (x + 1)\right] \\ &= (x + 1)^{2} + 1. \end{aligned}$$
> 
> Thus, $\Var(Y \mid X = x) = \E[Y^{2} \mid X = x] - \E^{2}[Y \mid X = x] = 1$.

> [!DEFINITION]
> Two random variables $X$ and $Y$ are said to be **independent** if for any Borel sets $\mathcal{A}$ and $\mathcal{B}$, 
> 
> $$P(X \in \mathcal{A},\ Y \in \mathcal{B}) = P(X \in \mathcal{A}) P(Y \in \mathcal{B}).$$
> 
> If $X$ and $Y$ have pdfs (pmfs) $f_{X}(x)$ and $f_{Y}(y)$, then independence implies 
> 
> $$f_{X,\ Y}(x,\ y) = f_{X}(x) f_{Y}(y).$$

> [!THEOREM]
> Let $X,\ Y$ be a bivariate random vector with joint pdf or pmf $f(x,\ y)$. Then $X$ and $Y$ are *independent* *iff* $\exists $ functions $g(x)$ and $h(y)$ s.t., $\forall x \in \mathbb{R},\ \forall y \in \mathbb{R}$, 
> 
> $$f(x,\ y) = g(x) h(y).$$

> [!EXAMPLE]
> Consider a random vector $(X,\ Y)$ with joint pdf 
> 
> $$f(x,\ y) = \frac{1}{384} x^{2} y^{4} e^{-y - x / 2},\quad x > 0,\ y > 0.$$
> 
> Write $g(x) = \frac{1}{384} x^{2} e^{-x / 2}$ and $h(y) = y^{4} e^{-y}$, we can easily find that $X$ and $Y$ are independent.

> [!THEOREM]
> Let $X$ and $Y$ be *independent* random variables. If $g(x)$ is a function only of $x$ and $h(y)$ is a function only of $y$, then 
> 
> $$\E[g(X) h(Y)] = \E[g(X)] \E[g(Y)].$$

> [!THEOREM]
> Let $X$ and $Y$ be *independent* random variables with mgfs $M_{X}(t)$ and $M_{Y}(t)$. Then the mgf of the r.v. $Z = X + Y$ is given by 
>
> $$M_{Z}(t) = M_{X}(t) M_{Y}(t).$$

> [!EXAMPLE]
> Let $X \sim N(\mu,\ \sigma^{2})$ and $Y \sim N(\gamma,\ \tau^{2})$ be independent Normal random variables. The mgfs of $X$ and $Y$ are 
> 
> $$M_{X}(t) = e^{\mu t + \sigma^{2}t^{2} / 2},\quad M_{Y}(t) = e^{\gamma t + \tau^{2}t^{2} / 2}.$$
> 
> By the theorem above, we have 
> 
> $$M_{X + Y}(t) = M_{X}(t) M_{Y}(t) = e^{(\mu + \gamma) t + (\sigma^{2} + \tau^{2}) t^{2} / 2},$$
> 
> which means $X + Y \sim N(\mu + \gamma,\ \sigma^{2} + \tau^{2})$.

## 4.3 Bivariate Transformations

Let $(X,\ Y)$ be a bivariate random vector with a known probability distribution. Now consider a new bivariate random vector $(U,\ V)$ defined by 

$$
U = g_1(X,\ Y) \quad \text{ and } \quad V = g_2(X,\ Y),
$$

where $g_1(x,\ y)$ and $g_2(x,\ y)$ are some specified functions. For any set $\mathcal{B} \in \mathbb{R}^{2}$, $(U,\ V) \in \mathcal{B}$ *iff* $(X,\ Y) \in \mathcal{A}$, where 

$$
\mathcal{A} = \left\{(x,\ y): (g_1(x,\ y),\ g_2(x,\ y)) \in \mathcal{B} \right\}.
$$

Thus, we have $P((U,\ V) \in \mathcal{B}) = P((X,\ Y) \in \mathcal{A})$ and the probability distribution of $(U,\ V)$ is completely determined by the probability distribution of $(X,\ Y)$.

Consider the discrete cases, define 

$$
\mathcal{A}_{uv} := \left\{(x,\ y) \in \mathcal{A}: g_1(x,\ y) = u \text{ and } g_2(x,\ y) = v \right\}.
$$

Then, the joint pmf of $(U,\ V)$, $f_{U,\ V}(u,\ v)$ can be computed from the joint pmf of $(X,\ Y)$ by 

$$
\begin{aligned}
    f_{U,\ V}(u,\ v) &= P(U = u,\ V = v) \\
    &= P((X,\ Y) \in \mathcal{A}_{uv}) \\
    &= \sum\limits_{(x,\ y) \in \mathcal{A}_{uv}} f_{X,\ Y}(x,\ y).
\end{aligned}
$$

> [!THEOREM]
> Let $(X,\ Y)$ be a continuous bivariate random vector. If $\exists $ inverse function $x = h_1(u,\ v)$ and $y = h_2(u,\ v)$ for $u = g_1(x,\ y)$ and $v = g_2(x,\ y)$, then the joint pdf of $(U,\ V)$ is formulated as 
> 
> $$f_{U,\ V}(u,\ v) = f_{X,\ Y}(h_1(u,\ v),\ h_2(u,\ v)) \left\vert J \right\vert,$$
> 
> where $J := \left\vert \begin{matrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \\\end{matrix} \right\vert = \left\vert \begin{matrix} \frac{\partial h_1(u,\ v)}{\partial u} & \frac{\partial h_1(u,\ v)}{\partial v} \\ \frac{\partial h_2(u,\ v)}{\partial u} & \frac{\partial h_2(u,\ v)}{\partial v} \\\end{matrix} \right\vert$ is called the **Jacobian of the transformation**.

> [!EXAMPLE]
> Let $X$ and $Y$ be independent, standard Normal random variables with joint pdf 
> 
> $$f_{X,\ Y}(x,\ y) = \frac{1}{2 \pi} e^{- (x^{2} + y^{2}) / 2}.$$
> 
> Consider the transformation $U = X + Y$ and $V = X - Y$. The inverse function is 
> 
> $$x = h_1(u,\ v) = \frac{u + v}{2} \quad \text{ and } \quad y = h_2(u,\ v) = \frac{u - v}{2},$$
> 
> which means the Jacobian of the transformation is 
> 
> $$\left\vert \begin{matrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{matrix} \right\vert = \left\vert \begin{matrix} \frac{1}{2} & \frac{1}{2}\\ \frac{1}{2} & -\frac{1}{2} \end{matrix} \right\vert = -\frac{1}{2}.$$
> 
> Thus, using the theorem above, the joint pdf of $(U,\ V)$ is given by 
> 
> $$\begin{aligned} f_{U,\ V}(u,\ v) &= f_{X,\ Y}\left(\frac{u + v}{2},\ \frac{u - v}{2} \right) \cdot \left\vert -\frac{1}{2} \right\vert \\ &= \frac{1}{4 \pi} e^{- [(u + v)^{2} / 4 + (u - v)^{2} / 4] / 2} \\ &= \left(\frac{1}{\sqrt{2 \pi} \sqrt{2}} \right)^{2} e^{- (u^{2} + v^{2}) / (2 \times 2)}, \end{aligned}$$
> 
> which means $U$ and $V$ are also independent Normal random variables with mean $0$ and variance $2$.

### Exercises

1. Let $X$ be a r.v. with density 

    $$
    f_{X}(x) = \frac{1}{\lambda} x^{1 / \lambda - 1},\quad 0 < x < 1,\ \lambda > 0.
    $$
    
    Find the distribution of $- \log X$.

    <details>
    <summary>Solution: </summary>

    Let $Y = - \log X$. The inverse transformation is $x = e^{- y}$. Since the transformation is monotone, the pdf of $Y$ is given by 

    $$
    f_{Y}(y) = f_{X}(x)(e^{-y}) \cdot \left\vert - e^{-y} \right\vert = \frac{1}{\lambda} e^{(1 - 1 / \lambda) y} e^{-y} = \frac{1}{\lambda} e^{-y / \lambda},\quad y > 0.
    $$
    </details>

2. Let $U$ and $V$ be independent standard Normal random variables. Find the distribution of $U / V$.

    <details>
    <summary>Solution: </summary>

    Let $X = U / V$ and $Y = V$. The inverse transformations are $u = x y$ and $v = y$, which means the Jacobian of the transformation is 

    $$
    J = \left\vert \begin{matrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{matrix} \right\vert = \left\vert \begin{matrix} y & x \\ 0 & 1 \end{matrix} \right\vert = y,
    $$

    and the joint pdf of $(X,\ Y)$ is given by 

    $$
    f_{X,\ Y}(x,\ y) = f_{U,\ V}(x y,\ y) \cdot \left\vert y \right\vert = \frac{1}{2 \pi} y e^{- (x^{2}y^{2} + y^{2}) / 2}.
    $$

    Thus, the marginal pdf of $X$ is 

    $$
    \begin{aligned}
        f_{X}(x) &= \int_{-\infty}^{\infty} \frac{1}{2 \pi} y e^{- (x^{2}y^{2} + y^{2}) / 2} ~\mathrm{d}y \\
        &= \frac{1}{2 \pi} \left[\int_{-\infty}^{0} y e^{- (x^{2} + 1) y^{2} / 2} ~\mathrm{d}y + \int_{0}^{\infty} y e^{- (x^{2} + 1) y^{2} / 2} ~\mathrm{d}y \right]  \\
        &= \frac{1}{2 \pi} \int_{0}^{\infty} e^{- (x^{2} + 1) y^{2} / 2} ~\mathrm{d}y^{2} \\
        &= -\frac{1}{2 \pi} \frac{2}{x^{2} + 1} e^{-(x^{2} + 1) y^{2} / 2} \big\vert_{y^{2}=0}^{\infty} \\
        &= \frac{1}{\pi} \frac{1}{x^{2} + 1},
    \end{aligned}
    $$

    which means $U / V$ is a standard Cauchy r.v..

    > [!ATTENTION]
    > You can only change the variable in integral using a *monotone* function.
    </details>

## 4.4 Hierachical Models and Mixture Distributions

ln the cases we have seen thus far, a r.v. has a *single* distribution, possibly depending on parameters. While, in general, a r.v. can have only *one* distribution, it is often easier to model a situation by thinking of things in *hierarchy*.

<span id='example'></span>

> [!EXAMPLE]
> Let $Y$ denote the number of eggs lay by a mother fish, and $X$ denote the number of survivors (young fish). It is hard to directly model the distribution of $X$, but we can get it in an indirect way. First, it is reasonable to assume that 
> 
> $$Y \sim \text{Poisson}(\lambda) \quad \text{ and } \quad X \mid Y \sim \text{Binomial}(Y,\ p).$$
> 
> Then, we can get the distribution of $X$ by combining the assumptions: 
> 
> $$\begin{aligned} P(X = x) &= \sum\limits_{y = 0}^{\infty} P(X = x,\ Y = y) \\ &= \sum\limits_{y = 0}^{\infty} P(X = x \mid Y = y) P(Y = y) \\ &= \sum\limits_{y = 0}^{\infty} \left[\binom{y}{x} p^{x} (1 - p)^{y - x} \cdot \frac{e^{-\lambda} \lambda^{y}}{y!} \right] \\ &= \frac{e^{-p \lambda}(p \lambda)^{x}}{x!} \sum\limits_{y = 0}^{\infty} \frac{e^{-(1 - p)\lambda} [(1 - p)\lambda]^{y - x}}{(y - x)!} \\ &= \frac{e^{-p \lambda}(p \lambda)^{x}}{x!}. \end{aligned}$$
> 
> This means $X$ is also a Poisson r.v. with $\E[X] = p \lambda$.

Like the example above, the advantage of the hierarchy is that complicated processes may be modeled by a sequence of relatively simple models placed in a hierachy.

> [!DEFINITION]
> A r.v. $X$ is said to have a **mixture distribution** if the distribution of $X$ depends on a quantity that also has a distribution.

In the [example above](#example), it is easy to see that $X$ has a mixture distribution.

> [!THEOREM|label:Tower Theorem（Law of Iterated Expectation）]
> Let $X$ and $Y$ be any 2 random variables, then 
> 
> $$\E[X] = \E[\E[X \mid Y]],$$
>
> provided that the expectations exist.

<details>
<summary>Proof: </summary>

Let $f(x,\ y)$ denote the joint pdf of $X$ and $Y$. By the definition of expectation, we have 

$$
\begin{aligned}
    \E[X] &= \int \int x f(x,\ y) ~\mathrm{d}x ~\mathrm{d}y \\
    &= \int \left[\int x f(x \mid y) ~\mathrm{d}x \right] f_{Y}(y) ~\mathrm{d}y \\
    &= \int \E[X \mid y] f_{Y}(y) ~\mathrm{d}y \\
    &= \E[\E[X \mid Y]].
\end{aligned}
$$
</details>

<br>

Note that using the Tower Theorem, we can easily get $\E[X]$ in the [example above](#example), i.e., $\E[X] = \E[\E[X \mid Y]] = \E[p Y] = p \lambda$.

Actually, the conditional expectation $\E[X \mid Y = y]$ is a funtion of $Y$ which is closest to $X$ in terms of mean square error, i.e., 

$$
\E[(X - \E[X \mid Y])^{2}] = \underset{g}{\inf} ~ \E[(X - g(Y))^{2}].
$$

> [!THEOREM|label:Conditional Variance Identity]
> For any 2 random variables $X$ and $Y$, 
> 
> $$\Var(X) = \E[\Var(X \mid Y)] + \Var(E[X \mid Y]),$$
> 
> provided that the expectations exist.

<details>
<summary>Proof: </summary>

$$
\begin{aligned}
    \Var(X) &= \E[(X - \E[X])^{2}] \\
    &= \E[(X - \E[X \mid Y] + \E[X \mid Y] - \E[X])^{2}] \\
    &= \E[(X - \E[X \mid Y])^{2}] + 2 \E[(X - \E[X \mid Y]) (\E[X \mid Y] - \E[X])] \\ &\qquad + \E[(\E[X \mid Y] - \E[X])^{2}].
\end{aligned}
$$

Using the Towel Theorem, the first and the third term can be rewritten as 

$$
\E[(X - \E[X \mid Y])^{2}] = \E[\E[(X - \E[X \mid Y])^{2} \mid Y]] = \E[\Var(X \mid Y)]
$$

and

$$
\E[(\E[X \mid Y] - \E[X])^{2}] = \E[(\E[X \mid Y] - \E[\E[X \mid Y]])^{2}] = \Var(\E[X \mid Y]).
$$

The second term is given by 

$$
\begin{aligned}
    &\phantom{=}\E[(X - \E[X \mid Y]) (\E[X \mid Y] - \E[X])] \\
    &= \E[\E[(X - \E[X \mid Y]) (\E[X \mid Y] - \E[X]) \mid Y]] \\
    &= \E[(\E[X \mid Y] - \E[X \mid Y]) (\E[X \mid Y] - \E[X])] \\
    &= 0,
\end{aligned}
$$

which means we have 

$$
\Var(X) = \E[\Var(X \mid Y)] + \Var(E[X \mid Y]).
$$
</details>

### Exercises

*4.59* (p.202) For any three random variables $X$, $Y$, and $Z$ with finite variances, prove (in the spirit of Theorem 4.4.7) the covariance identity

$$
\Cov(X,\ Y) = \E[\Cov(X,\ Y \mid Z)] + \Cov(\E[X \mid Z],\ \E[Y \mid Z]),
$$

where $\Cov(X,\ Y \mid Z)$ is the covariance of $X$ and $Y$ under the pdf $f(x,\ y \mid z)$.

<details>
<summary>Proof: </summary>

Let $U = X - \E[X]$, $V = Y - \E[Y]$, then 

$$
\begin{aligned}
    \Cov(X,\ Y) &= \E[(X - \E[X])(Y - \E[Y])] \\
    &= \E[U V] \\
    &= \E[U V - \E[U \mid Z] \E[V \mid Z] + \E[U \mid Z] \E[V \mid Z]] \\
    &= \E[\E[U V - \E[U \mid Z] \E[V \mid Z] \mid Z]] \\ &\qquad + \E[\E[U \mid Z] \E[V \mid Z] - 0] \\
    &= \E[\Cov(U,\ V \mid Z)] + \Cov(\E[U \mid Z],\ \E[V \mid Z]) \\
    &= \E[\Cov(X - \E[X],\ Y - \E[Y] \mid Z)] \\ &\qquad + \Cov(\E[X - \E[X] \mid Z],\ \E[Y - \E[Y] \mid Z]) \\
    &= \E[\Cov(X,\ Y \mid Z)] + \Cov(\E[X \mid Z],\ \E[Y \mid Z]).
\end{aligned}
$$
</details>

## 4.5 Covariance and Correlation

> [!DEFINITION]
> The **covariance** of $X$ and $Y$ is the number defined by 
> 
> $$\Cov(X,\ Y) = \E[(X - \E[X])(Y - \E[Y])].$$
> 
> The **correlation** of $X$ and $Y$ is the number defined by 
> 
> $$\rho_{X Y} = \frac{\Cov(X,\ Y)}{\sigma_{X} \sigma_{Y}},$$
> 
> where $\sigma_{X} := \sqrt{\Var(X)}$ and $\sigma_{Y} := \sqrt{\Var(Y)}$.

> [!THEOREM]
> For any random variables $X$ and $Y$, 
> 
> $$\Cov(X,\ Y) = \E[X Y] - \E[X] \E[Y].$$

> [!THEOREM]
> If $X$ and $Y$ are *independent* random variables, then $\Cov(X,\ Y) = 0$ and $\rho_{X Y} = 0$.

> [!THEOREM]
> If $X$ and $Y$ are any 2 random variables and $a$ and $b$ are any 2 constants, then 
>
> $$\Var(a X + b Y) = a^{2} \Var(X) + b^{2} \Var(Y) + 2 a b \Cov(X,\ Y).$$

> [!THEOREM]
> For any random variables $X$ and $Y$, 
> 
> - $-1 \leqslant \rho_{X Y} \leqslant 1$.
> - $\left\vert \rho_{X Y} \right\vert = 1$ *iff* $\exists $ numbers $a \neq 0$ and $b$ s.t. $P(Y = a X + b) = 1$.
>     - If $\rho_{X Y} = 1$, then $a > 0$;
>     - If $\rho_{X Y} = -1$, then $a < 0$.

<details>
<summary>Proof: </summary>

Consider the function $h(t)$ defined by 

$$
h(t) = \E[[(X - \E[X])t + (Y - \E[Y])]^{2}] \geqslant 0.
$$

Expanding this expression, we obtain 

$$
\begin{aligned}
    h(t) &= \E[(X - \E[X])^{2}] t^{2} + 2 \E[(X - \E[X]) (Y - \E[Y])] t \\ &\qquad + \E[(Y - \E[Y])^{2}] \\
    &= \sigma_{X}^{2} t^{2} + 2 \Cov(X,\ Y) t + \sigma_{Y}^{2} \\
    &\geqslant 0,
\end{aligned}
$$

which means the quadratic function $h(t)$ can have at most 1 real root and thus must have a nonpositive discriminant: 

$$
B^{2} - 4 A C = (2 \Cov(X,\ Y))^{2} - 4 \sigma_{X}^{2} \sigma_{Y}^{2} \leqslant 0.
$$

This is equivalent to 

$$
-1 \leqslant \frac{\Cov(X,\ Y)}{\sigma_{X} \sigma_{Y}} \leqslant 1.
$$

Also, the inequalities become equalities iff the discriminant is equal to $0$. Note that $h(t) = 0$ iff 

$$
P((X - \E[X]) t + (Y - \E[Y]) = 0) = 1.
$$

Rearrange and we get 

$$
P(Y = - t X + \E[X] t + \E[Y]) = 1,
$$

which means $a = -t$ and $b = \E[X] t + \E[Y]$. Also note that now $t$ is the root of $h(t)$, i.e., $t = -\frac{2 \Cov(X,\ Y)}{2 \sigma_{X}^{2}} = -\frac{\rho_{X Y} \sigma_{Y}}{\sigma_{X}}$. Thus, $a = -t$ has the same sign as $\rho_{X Y}$.
</details>

<br>

However, the correlation we define can only capture the linear relationship and can not capture the nonlinear relationship. See the following example.

> [!EXAMPLE]
> Let $X$ have a $\text{Uniform}(-1,\ 1)$ distribution and $Z$ have a $\text{Uniform}(0,\ \frac{1}{10})$ distribution. Let $X$ and $Z$ be independent and $Y = X^{2} + Z$. Then the conditional distribution of $Y \mid X$ is $\text{Uniform}(X^{2},\ X^{2} + \frac{1}{10})$. There is a strong relationship between $X$ and $Y$, but it is not linear. We can see that 
> 
> $$\begin{aligned} \Cov(X,\ Y) &= \Cov(X,\ X^{2} + Z) \\ &= \Cov(X,\ X^{2}) \\ &= \E[X^{3}] - \E[X] \E[X^{2}] \\ &= 0.\end{aligned}$$

> [!DEFINITION]
> Let $-\infty < \mu_{X} < \infty>$, $-\infty < \mu_{Y} < \infty$, $\sigma_{X},\ \sigma_{Y} > 0$, and $\left\vert \rho \right\vert < 1$ be 5 real numbers. The **bivariate Normal pdf** with means $\mu_{X}$ and $\mu_{Y}$, variances $\sigma_{X}^{2}$ and $\sigma_{Y}^{2}$, and correlation $\rho$ is the bivariate pdf given by 
> 
> $$f(x,\ y) = \frac{1}{2 \pi \sigma_{X} \sigma_{Y} \sqrt{1 - \rho^{2}}} e^{-\frac{1}{2 (1 - \rho^{2})} \left[\left(\frac{x - \mu_{X}}{\sigma_{X}} \right)^{2} - 2 \rho \left(\frac{x - \mu_{X}}{\sigma_{X}} \right) \left(\frac{y - \mu_{Y}}{\sigma_{Y}} \right) + \left(\frac{y - \mu_{Y}}{\sigma_{Y}} \right)^{2} \right]}.$$

## 4.6 Multivariate Distributions

> [!DEFINITION]
> Let $m$-dimension random vector $\bm{X} = (X_1,\ \cdots,\ X_m)^{\top}$ holds **multivariate Normal distribution** $\mathcal{N}(\bm{\mu},\ \bm{\Sigma})$. The joint pdf is 
> 
> $$f(\bm{x}) = \frac{1}{(2 \pi)^{m / 2} \left\vert \bm{\Sigma} \right\vert^{1 / 2}} e^{-\frac{1}{2} (\bm{x} - \bm{\mu})^{\top} \bm{\Sigma}^{-1} (\bm{x} - \bm{\mu})}.$$

> [!DEFINITION]
> The **multivariate mgf** is defined as 
> 
> $$M_{\bm{X}}(\bm{t}) = \E[e^{\bm{t}^{\top} \bm{x}}].$$

## 4.7 Inequalities

### 4.7.1 Numerical Inequalities

> [!THEOREM]
> Let $a,\ b > 0$, $p,\ q > 1$ and $\frac{1}{p} + \frac{1}{q} = 1$, then 
> 
> $$\frac{1}{p} a^{p} + \frac{1}{q} b^{q} \geqslant ab$$
> 
> with equality *iff* $a^{p} = b^{q}$.

<details>
<summary>Proof: </summary>

Fix $b$, and consider the function 

$$
g(a) = \frac{1}{p} a^{p} + \frac{1}{q} b^{q} - a b.
$$

To minimize $g(a)$, differentiate and set equal to $0$: 

$$
a^{p - 1} - b = 0 \implies b = a^{p - 1}.
$$

A check of the second derivative will establish that this is indeed a minimum. Note that 

$$
\frac{1}{p} + \frac{1}{q} = 1 \implies 1 + \frac{p}{q} = p \implies (p - 1) q = p,
$$

so the value of the minimum can be given by 

$$
\frac{1}{p}a^{p} + \frac{1}{q}(a^{p-1})^{q} - a a^{p-1} = \frac{1}{p} a^{p} + \frac{1}{q} a^{p} - a^{p} = 0.
$$

Thus, we have 

$$
g(a) = \frac{1}{p} a^{p} + \frac{1}{q} b^{q} - a b \geqslant 0,
$$

which means 

$$
\frac{1}{p} a^{p} + \frac{1}{q} b^{q} \geqslant a b,
$$

with equality iff $b = a^{p - 1}$, i.e., $a^{p} = b^{q}$.
</details>

[!THEOREM|label:Hölder’s Inequality]
Let $X$ and $Y$ be any 2 random variables. Let $p,\ q > 1$ and $\frac{1}{p} + \frac{1}{q} = 1$, then 

$$
\left\vert \E[X Y] \right\vert \leqslant \E[\left\vert X Y \right\vert ] \leqslant (\E[\left\vert X \right\vert ^{p}])^{1 / p} (\E[\left\vert Y \right\vert ^{q}])^{1 / q}.
$$

Proof:



### 4.7.2 Functional Inequalities


## Assignments

### Textbook Exercises

*4.26* (p.195) $X$ and $Y$ are independent random variables with $X \sim \text{Exponential}(\lambda)$ and $Y \sim \text{Exponential}(\mu)$. It is impossible to obtain direct observations of $X$ and $Y$. Instead, we observe the random variables $Z$ and $W$, where 

$$
Z = \min \left\{X,\ Y \right\} \quad \text{ and } \quad W = \begin{cases}
    1 &\text{if } Z = X \\
    0 &\text{if } Z = Y.
\end{cases}
$$

(This is a situation that arises, in particular, in medical experiments. The $X$ and $Y$ variables are *censored*.)

(a) Find the joint distribution of $Z$ and $W$.

<details>
<summary>Solution: </summary>

$$
\begin{aligned}
    P(Z \leqslant z,\ W = 1) &= P(X \leqslant z,\ X \leqslant Y) \\
    &= \int_{0}^{z} \frac{1}{\lambda} e^{-x / \lambda} \left(\int_{x}^{\infty} \frac{1}{\mu} e^{-y / \mu} ~\mathrm{d}y \right) ~\mathrm{d}x \\
    &= \int_{0}^{z} \frac{1}{\lambda} e^{-x / \lambda} \left(- e^{-y / \mu} \right) \bigg\vert_{y=x}^{\infty} ~\mathrm{d}x \\
    &= \int_{0}^{z} \frac{1}{\lambda} e^{-x(1 / \lambda + 1 / \mu)} ~\mathrm{d}x \\
    &= -\frac{1 / \lambda}{1 / \lambda + 1 / \mu} e^{-x(1 / \lambda + 1 / \mu)} \bigg\vert_{x=0}^{z} \\
    &= \frac{\mu}{\mu + \lambda} \left(1 - e^{-(\mu + \lambda) / (\mu \lambda) z} \right).
\end{aligned}
$$

$$
\begin{aligned}
    P(Z \leqslant z,\ W = 0) &= P(Y \leqslant z,\ X \geqslant Y) \\
    &= \int_{0}^{z} \frac{1}{\mu} e^{-y / \mu} \left(\int_{y}^{\infty} \frac{1}{\lambda} e^{-x / \lambda} ~\mathrm{d}x \right) ~\mathrm{d}y \\
    &= \frac{\lambda}{\mu + \lambda} \left(1 - e^{-(\mu + \lambda) / (\mu \lambda) z} \right).
\end{aligned}
$$
</details>

(b) Prove that $Z$ and $W$ are independent. (*Hint*: Show that $P(Z \leqslant z \mid W = i) = P(Z \leqslant z)$ for $i = 0$ or $1$.)

<details>
<summary>Proof: </summary>

First, we calculate the marginal distribution of $W$: 

$$
\begin{aligned}
    P(W = 1) &= P(X \leqslant Y) \\
    &= \int_{0}^{\infty} \frac{1}{\lambda} e^{-x / \lambda} \left(\int_{x}^{\infty} \frac{1}{\mu} e^{-y / \mu} ~\mathrm{d}y \right) ~\mathrm{d}x \\
    &= \int_{0}^{\infty} \frac{1}{\lambda} e^{-x (1 / \mu + 1 / \lambda)} ~\mathrm{d}x \\
    &= -\frac{1 / \lambda}{1 / \mu + 1 / \lambda} e^{-x(1 / \mu + 1 / \lambda)} \bigg\vert_{x=0}^{\infty} \\
    &= \frac{\mu}{\mu + \lambda}.
\end{aligned}
$$

$$
\begin{aligned}
    P(W = 0) &= P(X \geqslant Y) \\
    &= \int_{0}^{\infty} \frac{1}{\mu} e^{-y / \mu} \left(\int_{y}^{\infty} \frac{1}{\lambda} e^{-x / \lambda} ~\mathrm{d}x \right) ~\mathrm{d}y \\
    &= \frac{\lambda}{\mu + \lambda}.
\end{aligned}
$$

Then, we can calculate the distribution of $Z$: 

$$
P(Z \leqslant z) = P(Z \leqslant z,\ W = 1) + P(Z \leqslant z,\ W = 0) = 1 - e^{-(\mu + \lambda) / (\mu \lambda) z}.
$$

Since we have 

$$
P(Z \leqslant z,\ W = 1) = P(Z \leqslant z) P(W = 1),
$$

and 

$$
P(Z \leqslant z,\ W = 0) = P(Z \leqslant z) P(W = 0),
$$

we conclude that $Z$ and $W$ are independent.
</details>

*4.32* (p.196)

(a) For the hierarchical model 

$$
Y \mid \Lambda \sim \text{Poisson}(\Lambda) \quad \text{ and } \quad \Lambda \sim \text{Gamma}(\alpha,\ \beta)
$$

find the marginal distribution, mean, and variance of $Y$. Show that the marginal distribution of $Y$ is a negative binomial if $\alpha$ is an integer.

Solution:



(b) Show that the three-stage model 

$$
Y \mid N \sim \text{Binomial}(N,\ p),\quad N \mid \Lambda \sim \text{Poisson}(\Lambda),\quad \text{ and } \quad \Lambda \sim \text{Gamma}(\alpha,\ \beta)
$$

leads to the same marginal (unconditional) distribution of $Y$.

*4.35* (p.196-197)

(a) For the hierarchy in Example 4.4.6, show that the variance of $X$ can be written 

$$
\Var(X) = n \E[P] (1 - \E[P]) + n(n - 1) \Var(P).
$$

(The first term reflects binomial variation with success probability $\E[P]$, and the second term is often called “extra-binomial” variation, showing how the hierarchical model has a variance that is larger than the binomial alone.)

(b) For the hierarchy in Exercise 4.32, show that the variance of $Y$ can be written 

$$
\Var(Y) = \E[\Lambda] + \Var(\Lambda) = \mu + \frac{1}{\alpha} \mu^{2},
$$

where $\mu = \E[\Lambda]$. Identify the “extra-Poisson” variation induced by the hierarchy.

*4.36* (p.197) One generalization of the Bernoulli trials hierarchy in Example 4.4.6 is to allow the success probability to vary from trial to trial, keeping the trials independent. A standard model for this situation is 

$$
\begin{aligned}
    X_{i} \mid P_{i} &\sim \text{Bernoulli}(P_{i}),\quad i=1,\ 2,\ \cdots,\ n, \\
    P_{i} &\sim \text{Beta}(\alpha,\ \beta).
\end{aligned}
$$

This model might be appropriate, for example, if we are measuring the success of a drug on $n$ patients and, because the patients are different, we are reluctant to assume that the success probabilities are constant. (This can be thought of as an *empirical Bayes model*; see Miscellanea 7.5.6.)

A random variable of interest is $Y = \sum_{i=1}^{n} X_{i}$, the total number of successes.

(a) Show that $\E[Y] = n \alpha / (\alpha + \beta)$.

(b) Show that $\Var(Y) = n \alpha \beta / (\alpha + \beta)^{2}$, and hence $Y$ has the same mean and variance as a $\text{Binomial}(n,\ \frac{\alpha}{\alpha + \beta})$ random variable. What is the distribution of $Y$?

(c) Suppose now that the model is 

$$
\begin{aligned}
    X_{i} \mid P_{i} &\sim \text{Binomial}(n_i,\ P_{i}),\quad i=1,\ 2,\ \cdots,\ k, \\
    P_{i} &\sim \text{Beta}(\alpha,\ \beta).
\end{aligned}
$$

Show that for $Y = \sum_{i=1}^{k} X_{i}$, $\E[Y] = \frac{\alpha}{\alpha + \beta}\sum_{i=1}^{k} n_{i}$ and $\Var(Y) = \sum_{i=1}^{k} \Var(X_{i})$, where 

$$
\Var(X_{i}) = n_i \frac{\alpha \beta (\alpha + \beta + n_i)}{(\alpha + \beta)^{2} (\alpha + \beta + 1)}.
$$

*4.38* (p.198) (*The gamma as a mixture of exponentials*) Gleser (1989) shows that, in certain cases, the gamma distribution can be written as a scale mixture of exponentials, an identity suggested by different analyses of the same data. Let $f(x)$ be a $\text{Gamma}(r,\ \lambda)$ pdf.

(a) Show that if $r \leqslant 1$, then $f(x)$ can be written 

$$
f(x) = \int_{0}^{\lambda} \frac{1}{\nu} e^{-x / \nu} p_{\lambda}(\nu) ~\mathrm{d}\nu, 
$$

where 

$$
p_{\lambda}(\nu) = \frac{1}{\Gamma(r) \Gamma(1 - r)} \frac{\nu^{r - 1}}{(\lambda - \nu)^{r}},\quad 0 < \nu < \lambda.
$$

(*Hint*: Make a change of variable from $\nu$ to $\mu$, where $\mu = x / \nu - x / \lambda$.)

(b) Show that $p_{\lambda}(\nu)$ is a pdf, for $r \leqslant 1$, by showing that 

$$
\int_{0}^{\lambda} p_{\lambda}(\nu) ~\mathrm{d}\nu = 1.
$$

(c) Show that the restriction $r \leqslant 1$ is neccessary for the representation in part (a) to be valid; that is, there is no such representation if $r > 1$. (*Hint*: Suppose $f(x)$ can be written $f(x) = \int_{0}^{\infty} (e^{-x / \nu} / \nu) q_{\lambda}(\nu) ~\mathrm{d}\nu$ for some pdf $q_{\lambda}(\nu)$. Show that $\frac{\partial }{\partial x}\log(f(x)) > 0$ but $\frac{\partial }{\partial x}\log(\int_{0}^{\infty} (e^{-x / \nu} / \nu) q_{\lambda}(\nu) ~\mathrm{d}\nu) < 0$, a contradiction.)

*4.47* (p.200) (*Marginal normality does not imply bivariate normality.*) Let $X$ and $Y$ be independent $N(0,\ 1)$ random variables, and define a new random variable $Z$ by 

$$
Z = \begin{cases}
    X &\text{if } X Y > 0 \\
    -X &\text{if } X Y < 0.
\end{cases}
$$

(a) Show that $Z$ has a normal distribution.

(b) Show that the joint distribution of $Z$ and $Y$ is not bivariate normal. (*Hint*: Show that $Z$ and $Y$ always have the same sign.)

*4.59* (p.202) For any three random variables $X$, $Y$, and $Z$ with finite variances, prove (in the sprit of Theorem 4.4.7) the covariance identity 

$$
\Cov(X,\ Y) = \E[\Cov(X,\ Y \mid Z)] + \Cov(\E[X \mid Z],\ \E[Y \mid Z]),
$$

where $\Cov(X,\ Y \mid Z)$ is the covariance of $X$ and $Y$ under the pdf $f(x,\ y \mid z)$.

<details>
<summary>Proof: </summary>

See [Exercises in 4.4](#exercises-1).
</details>

*4.61* (p.202) DeGroot (1986) gives the following example of the Borel Paradox (Miscellanea 4.9.3): Suppose that $X_1$ and $X_2$ are i.i.d. $\text{Exponential}(1)$ random variables, and define $Z = (X_2 - 1) / X_1$. The probability-zero sets $\left\{Z = 0 \right\}$ and $\left\{X_2 = 1 \right\}$ seem to be giving us the same information but lead to different conditional distributions.

(a) Find the distribution of $X_1 \mid Z = 0$, and compare it to the distribution of $X_1 \mid X_2 = 1$.