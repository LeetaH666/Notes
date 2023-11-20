# 5 Properties of a Random Sample

## 5.1 Basic Concepts of Random Samples

> [!DEFINITION]
> The random variables $X_1,\ X_2,\ \cdots X_n$ are called a **random sample** of size $n$ from the population $f(x)$ if $X_1,\ X_2,\ \cdots X_n$ are *mutually independent* and each has the *same* pdf or pmf $f(x)$. Alternatively, $X_1,\ X_2,\ \cdots,\ X_n$ are called **independent and identically distributed (i.i.d.)** random variables with pdf or pmf $f(x)$.

## 5.2 Sums of Random Variables from a Random Sample

> [!DEFINITION]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be a *random sample* of size $n$ from a population and let $T(x_1,\ \cdots,\ x_n)$ be a real-valued or vector-valued function whose domain includes the sample space of $(X_1,\ X_2,\ \cdots,\ X_n)$. Then the r.v. or random vector $Y = T(X_1,\ X_2,\ \cdots,\ X_n)$ is called a **statistic**. The probability distribution of a statistic $Y$ is called the **sampling distribution** of $Y$.

> [!THEOREM]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be a random sample from a population with mean $\mu$ and variance $\sigma^{2} < \infty$. Denote the sample mean and sample variance by $\overline{X} = \frac{1}{n} \sum\limits_{i=1}^{n} X_{i}$ and $S^{2} = \frac{1}{n} \sum\limits_{i=1}^{n} (X_{i} - \overline{X})^{2}$, respectively. Then 
> 
> 1. $\E[\overline{X}] = \mu$,
> 2. $\Var(\overline{X}) = \frac{\sigma^{2}}{n}$,
> 3. $\E[S^{2}] = \sigma^{2}$.

> [!THEOREM|label:Convolution Formula]
> If $X$ and $Y$ are *independent continuous* random variables with pdfs $f_{X}(x)$ and $f_{Y}(y)$, then the pdf of $Z = X + Y$ is 
>
> $$f_{Z}(z) = \int_{-\infty}^{\infty} f_{X}(w) f_{Y}(z - w) ~\mathrm{d}w.$$

<details>
<summary>Proof: </summary>

Let $W = X$, then we have $X = W$ and $Y = Z - W$. The Jacobian of the transformation $(X,\ Y) \to (Z,\ W)$ is 

$$
J = \left\vert \begin{matrix} \frac{\partial x}{\partial z} & \frac{\partial x}{\partial w} \\ \frac{\partial y}{\partial z} & \frac{\partial y}{\partial w} \end{matrix} \right\vert = \left\vert \begin{matrix} 0 & 1 \\ 1 & -1 \end{matrix} \right\vert = -1.
$$

Thus, the joint pdf of $(Z,\ W)$ is given by 

$$
f_{Z,\ W}(z,\ w) = f_{X,\ Y}(w,\ z - w) \left\vert J \right\vert = f_{X}(w) f_{Y}(z - w).
$$

Integrating out $w$, we obtain the marginal pdf of $Z$ as given in the theorem.
</details>

<br>

> [!EXAMPLE|label:Sum of Cauchy Random Variables]
> Let $U$ and $V$ be independent Cauchy random variables, $U \sim \text{Cauchy}(0,\ \sigma)$ and $V \sim \text{Cauchy}(0,\ \tau)$, i.e., 
> 
> $$f_{U}(u) = \frac{1}{\pi \sigma} \frac{1}{1 + (u / \sigma)^{2}},\quad f_{V}(v) = \frac{1}{\pi \tau} \frac{1}{1 + (v / \tau)^{2}},\quad -\infty < u,\ v < \infty.$$
> 
> Based on the convolution formula, the pdf of $Z = U + V$ is given by 
> 
> $$\begin{aligned} f_{Z}(z) &= \int_{-\infty}^{\infty} f_{U}(w) f_{V}(z - w) ~\mathrm{d}w \\ &= \frac{1}{\pi^{2} \sigma \tau} \int_{-\infty}^{\infty} \frac{1}{1 + (w / \sigma)^{2}} \frac{1}{1 + [(z - w) / \tau]^{2}} ~\mathrm{d}w \\ &= \frac{1}{\pi^{2} \sigma \tau} \int_{-\infty}^{\infty} \frac{A w}{1 + (w / \sigma)^{2}} + \frac{B}{1 + (w / \sigma)^{2}} - \frac{C w}{1 + [(z - w) / \tau]^{2}} \\ &\qquad - \frac{D}{1 + [(z - w) / \tau]^{2}} ~\mathrm{d}w \\ \end{aligned}$$
> 
> for some constants $A,\ B,\ C,\ D$ independent of $w$. By some annoyiing calculations (see Textbook Exercise 5.7), we get the result as follows: 
> 
> $$f_{Z}(z) = \frac{1}{\pi (\sigma + \tau)} \frac{1}{1 + [z / (\sigma + \tau)]^{2}},\quad -\infty < z < \infty.$$
> 
> Thus, the sum of 2 independent Cauchy random variables is again a Cauchy, with the scale parameters adding.
> 
> It therefore follows that if $Z_1,\ Z_2,\ \cdots,\ Z_n$ are i.i.d. $\text{Cauchy}(0,\ 1)$ random variables, then $\sum_{i=1}^{n} Z_i$ is $\text{Cauchy}(0,\ n)$ and thus $\overline{Z}$ is also $\text{Cauchy}(0,\ 1)$. Note that in this case, since the mean and variance of the Cauchy distribution do not exist, the sample mean and sample variance would also diverge, resulting that $\Var(\overline{Z})$ cannot decrease as the sample size increases, dislike the common cases.

We have already known that the properties of the sum of a Cauchy random sample from the example above. Now we will discuss the cases of random sampling from an exponential family.

<span id="theorem5_2_11"></span>

> [!THEOREM]
> Suppose $X_1,\ X_2,\ \cdots,\ X_n$ is a *random sample* from an *exponential family* with pdf or pmf given by 
> 
> $$f(x \mid \theta) = h(x) c(\theta) \exp \left(\sum\limits_{i=1}^{k} w_i(\theta) t_i(x) \right).$$
> 
> Define statistics $T_1,\ T_2,\ \cdots,\ T_k$ by 
> 
> $$T_i(X_1,\ X_2,\ \cdots,\ X_n) = \sum\limits_{j=1}^{n} t_i(X_j),\quad i=1,\ 2,\ \cdots,\ k.$$
> 
> If the set $\left\{(w_1(\theta),\ w_2(\theta),\ \cdots,\ w_k(\theta),\ \theta \in \Theta) \right\}$ contains an open subset of $\mathbb{R}^{k}$, then the distribution of $(T_1,\ T_2,\ \cdots,\ T_k)$ is an exponential family of the form 
> 
> $$f_{T}(u_1,\ u_2,\ \cdots,\ u_k \mid \theta) = H(u_1,\ u_2,\ \cdots,\ u_k) c^{n}(\theta) \exp\left(\sum\limits_{i=1}^{k} w_i(\theta) u_i \right).$$

The theorem above is hard to understand, so we will give an example to illustrate it.

> [!EXAMPLE|label:Sum of Bernoulli Random Variables]
> Suppose $X_1,\ X_2,\ \cdots,\ X_n$ is a random sample from a $\text{Bernoulli}(p)$ distribution. From the [example in 3.4](/courses/advanced_statistics/3_common_families_of_distributions.md#binomial) (with $n = 1$) we know that $\text{Bernoulli}(p)$ is an exponential family with $k = 1$, $c(p) = 1 - p$, $w_1(p) = \log\left(\frac{p}{1 - p} \right)$, and $t_1(x) = x$. Thus, in the theorem above, we have 
>
> $$T_1 = T_1(X_1,\ X_2,\ \cdots,\ X_n) = X_1 + X_2 + \cdots + X_n,$$
>
> which has a $\text{Binomial}(n,\ p)$ distribution. Still from the [example in 3.4](/courses/advanced_statistics/3_common_families_of_distributions.md#binomial), we know that $\text{Binomial}(n,\ p)$ is an exponential family with the same $w_1(p)$ and $c(p)=(1 - p)^{n}$. This is consistent with the theorem above. Furthermore, we can write the pmf of $T_1$ as 
> 
> $$\begin{aligned} f_{T}(u_1 \mid p) &= H(u_1) (1 - p)^{n} \exp\left(u_1 \log\left(\frac{p}{1 - p} \right) \right) \\ &= H(u_1) p^{u_1} (1 - p)^{n - u_1},\quad u_1 = 0,\ 1,\ \cdots,\ n, \end{aligned}$$
> 
> which leads to $H(u_1) = \binom{n}{u_1}$.

## 5.3 Sampling from the Normal Distribution

### 5.3.1 Properties of the Sample Mean and Variance

> [!THEOREM]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be a *random sample* from a $N(\mu,\ \sigma^{2})$ distribution, and let $\overline{X} = \frac{1}{n}\sum\limits_{i=1}^{n} X_{i}$ and $S^{2} = \frac{1}{n - 1}\sum\limits_{i=1}^{n} (X_{i} - \overline{X})^{2}$. Then 
> 
> 1. $\overline{X}$ and $S^{2}$ are independent random variables,
> 2. $\overline{X}$ has a $N(\mu,\ \sigma^{2} / n)$ distribution,
> 3. $(n - 1) S^{2} / \sigma^{2}$ has a $\chi^{2}(n - 1)$ distribution.

### 5.3.2 The Derived Distributions: Student’s t and Snedecor’s F

## 5.4 Order Statistics

> [!DEFINITION]
> The **order statistics** of a *random sample* $X_1,\ X_2,\ \cdots,\ X_n$ are the sample values placed in *ascending* order. They are denoted by $X_{(1)},\ X_{(2)},\ \cdots,\ X_{(n)}$.

For discrete cases, the cdf and pmf of the order statistics is given by the following theorem.

> [!THEOREM]
> Let $X_1,\ X_2,\ \cdots,\ X_n$ be a *random sample* from a discrete distribution with pmf $f_{X}(x_{i}) = p_{i}$, where $x_1 < x_2 < \cdots$ are the possible values of $X$ in ascending order. Define 
>
> $$\begin{aligned} P_0 &= 0 \\ P_1 &= p_1 \\ P_2 &= p_1 + p_2 \\ &\ \ \vdots \\ P_{i} &= p_1 + p_2 + \cdots + p_{i} \\ &\ \ \vdots \end{aligned}$$
> 
> Let $X_{(1)},\ X_{(2)},\ \cdots,\ X_{(n)}$ denote the order statistics from the sample. Then 
> 
> $$P(X_{(j)} \leqslant x_{i}) = \sum\limits_{k=j}^{n} \binom{n}{k} P_{i}^{k} (1 - P_{i})^{n - k}$$
> 
> and 
> 
> $$P(X_{(j)} = x_{i}) = \sum\limits_{k=j}^{n} \binom{n}{k} \left[P_{i}^{k} (1 - P_{i})^{n - k} - P_{i - 1}^{k} (1 - P_{i - 1})^{n - k} \right].$$

<details>
<summary>Proof: </summary>

Fix $i$, and let $Y$ be a r.v. that counts the number of $X_1,\ X_2,\ \cdots,\ X_n$ that are less than or equal to $x_i$. For each of $X_1,\ \cdots,\ X_n$, call the event $\left\{X_{j} \leqslant x_i \right\}$ a “success” and $\left\{X_{j} > x_i \right\}$ a “failure”. Then $Y$ is the number of successes in $n$ trials. The probability of a success is the same value, namely $P_{i} = P(X_{j} \leqslant x_i)$, for each trial, since $X_1,\ X_2,\ \cdots,\ X_n$ are i.i.d.. The success or failure of the $j$-th trial is independent of the outcome of any other trial, since $X_{j}$ is independent of the other $X_{i}$s. Thus, $Y \sim \text{Binomial}(n,\ P_{i})$.

The event $\left\{X_{(j)} \leqslant x_i \right\}$ is equivalent to the event $\left\{Y \geqslant j \right\}$, which leads to the first conclusion in the theorem above. The second one is just the difference: 

$$
P(X_{(j)} = x_i) = P(X_{(j)} \leqslant x_i) - P(X_{(j)} \leqslant x_{i - 1}).
$$
</details>

<br>

For continuous cases, we have $Y \sim \text{Binomial}(n,\ F_{X}(x))$ instead of $\text{Binomial}(n,\ P_{i})$ (see the proof above), and thus we have the following theorem.

> [!THEOREM]
> Let $X_{(1)},\ X_{(2)},\ \cdots,\ X_{(n)}$ denote the *order statistics* of a *random sample*, $X_1,\ X_2,\ \cdots,\ X_n$, from a continuous population with cdf $F_{X}(x)$ and pdf $f_{X}(x)$. Then the cdf of $X_{(j)}$ is 
>
> $$F_{X_{(j)}}(x) = \sum\limits_{k=j}^{n} \binom{n}{k} [F_{X}(x)]^{k} [1 - F_{X}(x)]^{n - k},$$
> 
> and the pdf of $X_{(j)}$ is 
>
> $$f_{X_{(j)}}(x) = \frac{n!}{(j - 1)! (n - j)!} f_{X}(x) [F_{X}(x)]^{j - 1} [1 - F_{X}(x)]^{n - j}.$$

> [!THEOREM]
> Let $X_{(1)},\ X_{(2)},\ \cdots,\ X_{(n)}$ denote the *order statistics* of a *random sample*, $X_1,\ X_2,\ \cdots,\ X_n$, from a continuous population with cdf $F_{X}(x)$ and pdf $f_{X}(x)$. Then the joint pdf of $X_{(i)}$ and $X_{(j)}$, $1 \leqslant i < j \leqslant n$, is 
> 
> $$\begin{aligned} f_{X_{(i)},\ X_{(j)}}(u,\ v) &= \frac{n!}{(i - 1)! (j - 1 - i)! (n - j)!} f_{X}(u) f_{X}(v) [F_{X}(u)]^{i - 1} \\ &\qquad \cdot [F_{X}(v) - F_{X}(u)]^{j - 1 - i} [1 - F_{X}(v)]^{n - j} \end{aligned}$$
> 
> for $-\infty < u < v < \infty$.

For example, the joint pdf of $X_{(1)}$ and $X_{(n)}$ is 

$$
\begin{aligned}
    f_{X_{(1)},\ X_{(n)}}(u,\ v) &= \frac{n!}{(n - 2)!} f_{X}(u) f_{X}(v) [F_{X}(v) - F_{X}(u)]^{n - 2} \\
    &= n (n - 1) f_{X}(u) f_{X}(v) [F_{X}(v) - F_{X}(u)]^{n - 2}.
\end{aligned}
$$

Similarly, we can derive the joint pdf of all the order statistics: 

$$
f_{X_{(1)},\ \cdots,\ X_{(n)}}(x_1,\ \cdots,\ x_n) = n! f_{X}(x_1) \cdots f_{X}(x_n),\quad -\infty < x_1 < \cdots < x_n < \infty.
$$

<span id="range_example"></span>

> [!EXAMPLE|label:Distribution of the midrange and range]
> Let $X_1,\ X_2,\ \cdots,\ X_n \overset{\text{i.i.d.}}{\sim} \text{Uniform}(0,\ a)$ and let $X_{(1)},\ X_{(2)},\ \cdots,\ X_{(n)}$ denote the order statistics. The *range* is defined as $R = X_{(n)} - X_{(1)}$ and the *midrange* is defined as $V = (X_{(1)} + X_{(n)}) / 2$. We will derive the joint pdf of $R$ and $V$ from the joint pdf of $X_{(1)}$ and $X_{(n)}$. From above we know that 
> 
> $$\begin{aligned} f_{X_{(1)},\ X_{(n)}}(u,\ v) &= n (n - 1) f_{X}(u) f_{X}(v) [F_{X}(v) - F_{X}(u)]^{n - 2} \\ &= n (n - 1) \frac{1}{a^{2}} \left[\frac{x_n}{a} - \frac{x_1}{a} \right]^{n - 2} \\ &= \frac{n (n - 1) (x_n - x_1)^{n - 2}}{a^{n}},\quad 0 < x_1 < x_n < a. \end{aligned}$$
> 
> Then, $X_{(1)}$ and $X_{(n)}$ can be written as $X_{(1)} = V - \frac{R}{2}$ and $X_{(n)} = V + \frac{R}{2}$, which means the Jacobian for this transformation is 
> 
> $$J = \left\vert \begin{matrix} \frac{\partial x_{(1)}}{\partial r} & \frac{\partial x_{(1)}}{\partial v} \\ \frac{\partial x_{(n)}}{\partial r} & \frac{\partial x_{(n)}}{\partial v} \end{matrix} \right\vert = \left\vert \begin{matrix} -\frac{1}{2} & 1 \\ \frac{1}{2} & 1 \end{matrix} \right\vert = -1.$$
> 
> Thus, the joint pdf of $R$ and $V$ is given by
> 
> $$f_{R,\ V}(r,\ v) = f_{X_{(1)},\ X_{(n)}}(v - r / 2,\ v + r / 2) \left\vert J \right\vert = \frac{n (n - 1) r^{n - 2}}{a^{n}},$$
> 
> for $0 < r < a$ and $\frac{r}{2} < v < a - \frac{r}{2}$. Thus, the marginal pdf of $R$ is 
> 
> $$\begin{aligned} f_{R}(r) &= \int_{\frac{r}{2}}^{a - \frac{r}{2}} \frac{n (n - 1) r^{n - 2}}{a^{n}} ~\mathrm{d}v \\ &= \frac{n (n - 1) r^{n - 2} (a - r)}{a^{n}},\quad 0 < r < a.  \end{aligned}$$
> 
> If $a = 1$, we can see that $R$ has a $\text{Beta}(n - 1,\ 2)$ distribution. Or, for arbitrary $a$, it is easy to deduce that $\frac{R}{a}$ has a beta distribution.
> 
> For the marginal pdf of $V$, we should integrate out $r$, but note that the integration area is not $0 < r < a$. Instead, the integration area is different for different $v$: 
> 
> $$f_{V}(v) = \int_{0}^{2 v} \frac{n (n - 1) r^{n - 2}}{a^{n}} ~\mathrm{d}r = \frac{n (2 v)^{n - 1}}{a^{n}},\quad 0 < v \leqslant \frac{a}{2},$$
> 
> and 
> 
> $$f_{V}(v) = \int_{0}^{2 (a - v)} \frac{n (n - 1) r^{n - 2}}{a^{n}} ~\mathrm{d}r = \frac{n [2 (a - v)]^{n - 1}}{a^{n}},\quad \frac{a}{2} < v \leqslant a.$$
> 
> This pdf is symmetric about $\frac{a}{2}$ and has a peak at $\frac{a}{2}$.

### Exercises

1. Let $X_1,\ X_2,\ \cdots,\ X_n$ be independent continuous random variables, each having density funtion 

    $$
    p(x;\ \theta) = e^{-(x - \theta)} I(x > \theta).
    $$

    Let $X_{(1)},\ X_{(2)},\ \cdots,\ X_{(n)}$ be the corresponding order statistics.

    (a) Find the joint density function of $X_{(1)}$ and $X_{(2)}$.

    <details>
    <summary>Solution: </summary>

    The cdf of $X_1,\ X_2,\ \cdots,\ X_n$ is 

    $$
    F_{X}(x) = \int_{\theta}^{x} e^{-(y - \theta)} ~\mathrm{d}y = -e^{-(y - \theta)} \big\vert_{y=\theta}^{x} = 1 - e^{-(x - \theta)},\quad x > \theta.
    $$

    The joint density function of $X_{(1)}$ and $X_{(2)}$ is given by 

    $$
    \begin{aligned}
        f_{X_{(1)},\ X_{(2)}}(u,\ v) &= \frac{n!}{(n - 2)!} f_{X}(u) f_{X}(u) [1 - F_{X}(v)]^{n - 2} \\
        &= n (n - 1) e^{-(u + v - 2 \theta)} e^{-(v - \theta) (n - 2)} I(u > \theta,\ v > \theta) \\
        &= n (n - 1) e^{-[u + (n - 1) v - n \theta]} I(u > \theta,\ v > \theta).
    \end{aligned}
    $$
    </details>

    <br>

    (b) Find the marginal densities of $X_{(1)}$ and $X_{(2)}$.

    <details>
    <summary>Solution: </summary>

    The marginal density of $X_{(1)}$ is 

    $$
    \begin{aligned}
        f_{X_{(1)}}(u) &= \int_{\theta}^{\infty} n (n - 1) e^{-[u + (n - 1) v - n \theta]} ~\mathrm{d}v \\
        &= n (n - 1) e^{-(u - n \theta)} \int_{\theta}^{\infty} e^{-(n - 1) v} ~\mathrm{d}v \\
        &= n (n - 1) e^{-(u - n \theta)} \left[-\frac{1}{n - 1} e^{-(n - 1) v} \right]_{v=\theta}^{\infty} \\
        &= n e^{-(u - \theta)},\quad u > \theta.
    \end{aligned}
    $$

    Similarly, the marginal density of $X_{(2)}$ is given by 

    $$
    \begin{aligned}
        f_{X(2)}(v) &= \int_{\theta}^{\infty} n (n - 1) e^{-[u + (n - 1) v - n \theta]} ~\mathrm{d}u \\
        &= n (n - 1) e^{-[(n - 1) v - n \theta]} \int_{\theta}^{\infty} e^{-u} ~\mathrm{d}u \\
        &= n (n - 1) e^{-[(n - 1) v - n \theta]} \left(-e^{-u} \right) \big\vert_{u=\theta}^{\infty} \\
        &= n (n - 1) e^{-(n - 1) (v - \theta)},\quad v > \theta.
    \end{aligned}
    $$
    </details>

    <br>

2. Let $X_1,\ \cdots,\ X_n$ be a random sample from a population with pdf 

    $$
    f_{X}(x) = \begin{cases}
        1 / \theta,\ &\text{if } 0 < x < \theta \\
        0,\ &\text{otherwise}.
    \end{cases}
    $$

    Let $X_{(1)},\ \cdots,\ X_{(n)}$ be the order statistics. Show that $X_{(1)} / X_{(n)}$ and $X_{(n)}$ are independent random variables.

    <details>
    <summary>Proof: </summary>

    The cdf of $X$ is given by 

    $$
    F_{X}(x) = \int_{0}^{x} \frac{1}{\theta} ~\mathrm{d}t = x / \theta,\quad 0 < x < \theta \\
    $$

    Then, let $Y = X_{(n)}$ and $Z = X_{(1)}$, we have 

    $$
    \begin{aligned}
        f_{Z,\ Y}(z,\ y) &= \frac{n!}{0! (n-2)! 0!} \frac{1}{\theta} \frac{1}{\theta} \left(\frac{z}{\theta} \right)^0 \left(\frac{y-z}{\theta} \right)^{n - 2} \left(1 - \frac{y}{\theta} \right)^0 \\
        &= \frac{n (n - 1)}{\theta^n} (y - z)^{n - 2},\quad 0 < z < y < \theta.
    \end{aligned}
    $$

    Now let $U = Z / Y$ and $V = Y$, we have 

    $$
    \begin{aligned}
        f_{U,\ V}(u,\ v) &= f_{Z,\ Y}(u v,\ v) \left\vert \begin{matrix} \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{matrix} \right\vert \\
        &= \frac{n (n - 1)}{\theta^n} (v - u v)^{n - 2} \left\vert \begin{matrix} v & 0 \\ 0 & 1 \end{matrix} \right\vert \\
        &= \frac{n (n - 1)}{\theta^n} (1 - u)^{n - 2} v^{n - 1},\quad 0 < u < 1,\ 0 < v < \theta.
    \end{aligned}
    $$

    Since the joint pdf of $U$ and $V$ can be factorized into the product of the marginal pdfs of $U$ and $V$, $U$ and $V$ are independent, i.e., $X_{(1)} / X_{(n)}$ and $X_{(n)}$ are independent random variables.
    </details>

## 5.5 Convergence Concepts

### 5.5.1 Convergence in Probability

> [!DEFINITION]
> A sequence of random variables, $X_1,\ X_2,\ \cdots$, **converges in probability** to a r.v. $X$ if, $\forall \epsilon > 0$, 
> 
> $$\lim\limits_{n \to \infty} P(\left\vert X_n - X \right\vert < \epsilon) = 1,$$
>
> denoted as $X_n \stackrel{p}{\longrightarrow} X$.

> [!THEOREM|label:Weak Law of Large Numbers（WLLN）]
> Let $X_1,\ X_2,\ \cdots$ be i.i.d. random variables with $\E[X_{i}] = \mu$ and $\Var(X_{i}) = \sigma^{2} < \infty$, $i = 1,\ 2,\ \cdots$. Define $\overline{X}_{n} = \frac{1}{n}\sum\limits_{i=1}^{n} X_{i}$. Then, $\forall \epsilon > 0$,
> 
> $$\lim\limits_{n \to \infty} P(\left\vert \overline{X}_{n} - \mu \right\vert < \epsilon) = 1;$$
> 
> i.e., $\overline{X}_{n} \stackrel{p}{\longrightarrow} \mu$.

<details>
<summary>Proof: </summary>

From Chebyshev’s Inequality we have, $\forall \epsilon > 0$, 

$$
P(\left\vert \overline{X}_{n} - \mu \right\vert \geqslant \epsilon) = P((\overline{X}_{n} - \mu)^{2} \geqslant \epsilon^{2}) \leqslant \frac{\E[(\overline{X}_{n} - \mu)^{2}]}{\epsilon^{2}} = \frac{\sigma^{2}}{n \epsilon^{2}},
$$

which means $P(\left\vert \overline{X}_{n} - \mu \right\vert < \epsilon) \geqslant 1 - \frac{\sigma^{2}}{n \epsilon^{2}} \to 1$ as $n \to \infty$.
</details>

<br>

> [!NOTE]
> Actually, WLLN *does not need the finite variance (or finite second moment) condition*, the *only* moment condition needed is the *finite first moment condition*. Here we require the finite variance condition just for the *convenience of the proof*.

WLLN shows that the sample mean would *converge in probability* to the true mean, but how about the sample variance? Define 

$$
S_n^{2} = \frac{1}{n - 1}\sum\limits_{i=1}^{n} (X_{i} - \overline{X}_{n})^{2},
$$

Also using Chebyshev’s Inequality, we have 

$$
P(\left\vert S_n^{2} - \sigma^{2} \right\vert \geqslant \epsilon) \leqslant \frac{\E[(S_n^{2} - \sigma^{2})^{2}]}{\epsilon^{2}} = \frac{\Var(S_n^{2})}{\epsilon^{2}}.
$$

Thus, a sufficient condition that $S_n^{2}$ converges in probability to $\sigma^{2}$ is that $\Var(S_n^{2}) \to 0$ as $n \to \infty$.

If the samples are sampled from a normal distribution, then $\frac{(n - 1) S^{2}}{\sigma^{2}} \sim \chi^{2}(n - 1)$, which means $\Var[(n - 1) S^{2} / \sigma^{2}] = 2 (n - 1)$ and thus $\Var(S^{2}) = \frac{2 \sigma^{4}}{n - 1} \to 0$ as $n \to \infty$.

> [!THEOREM]
> Suppose that $X_1,\ X_2,\ \cdots$ *converges in probability* to a r.v. $X$ and that $h$ is a *continuous* function. Then $h(X_1),\ h(X_2),\ \cdots$ *converges in probability* to $h(X)$.

### 5.5.2 Almost Sure Convergence

> [!DEFINITION]
> A sequence of random variables, $X_1,\ X_2,\ \cdots$, **converges almost surely (or with probability 1)** to a r.v. $X$ if, $\forall \epsilon > 0$, 
>
> $$P(\lim\limits_{n \to \infty} \left\vert X_n - X \right\vert < \epsilon) = 1,$$
>
> denoted as $X_n \stackrel{a.s.}{\longrightarrow} X$.

> [!NOTE]
> The definition of *almost sure convergence* is similar to that of *convergence in probability*, but the former one is much stronger than the latter because *almost sure convergence* requires probability to be exactly equal to 1, while *convergence in probability* only requires probability to be near 1. In fact, *almost sure convergence* implies *convergence in probability*.

> [!EXAMPLE]
> Let the sample space $\mathcal{S}$ be the closed interval $[0,\ 1]$ with the uniform probability distribution. Define random variables $X_n(s) = s + s^{n}$ and $X(s) = s$. Then, $\forall s \in [0,\ 1)$, we have $s^{n} \to 0$ as $n \to \infty$ and $X_n(s) \to s = X(s)$. However, $X_n(1) = 2$ for every $n$ so $X_n(1)$ does not converge to $1 = X(1)$. But since the convergence occurs on the set $[0,\ 1)$ and $P([0,\ 1)) = 1$, $X_n \stackrel{a.s.}{\longrightarrow} X$. 

> [!THEOREM|label:Strong Law of Large Numbers（SLLN）]
> Let $X_1,\ X_2,\ \cdots$ be i.i.d. random variables with $\E[X_{i}] = \mu$ and $\Var(X_{i}) = \sigma^{2} < \infty$, $i = 1,\ 2,\ \cdots$. Define $\overline{X}_{n} = \frac{1}{n}\sum\limits_{i=1}^{n} X_{i}$. Then, $\forall \epsilon > 0$, 
>
> $$P(\lim\limits_{n \to \infty} \left\vert \overline{X}_n - \mu \right\vert < \epsilon) = 1;$$
> 
> i.e., $\overline{X}_{n}$ *converges almost surely* to $\mu$.

> [!NOTE]
> It seems like the conditions for WLLN and SLLN are the same. Actually, WLLN can have a *weaker* condition, e.g., $x P(\left\vert X_{i} \right\vert > x) \to 0$ as $x \to \infty$ instead of $\E[X_{i}] < \infty$. However, SLLN requires the finite first moment condition. *Both WLLN and SLLN do not require the finite variance condition* but we write it just for *convenience of proof*.

### 5.5.3 Convergence in Distribution

> [!DEFINITION]
> A sequence of random variables, $X_1,\ X_2,\ \cdots$, **converges in distribution** to a r.v. $X$ if 
>
> $$\lim\limits_{n \to \infty} F_{X_n}(x) = F_{X}(x)$$
> 
> at all points $x$ where $F_{X}(x)$ is continuous. We denote this convergence as $X_n \stackrel{d}{\longrightarrow} X$.

> [!EXAMPLE|label:Maximum of uniforms]
> If $X_1,\ X_2,\ \cdots$ are i.i.d. $\text{Uniform}(0,\ 1)$ and $X_{(n)} = \underset{1 \leqslant i \leqslant n}{\max} ~ X_{i}$, we want to examine if (and to where) $X_{(n)}$ converges in distribution.
>
> As $n \to \infty$, we expect $X_{(n)}$ to get close to $1$, so $\forall \epsilon > 0$, we have 
>
> $$\begin{aligned} P(\left\vert X_{(n)} - 1 \right\vert \geqslant \epsilon) &= P(X_{(n)} \geqslant 1 + \epsilon) + P(X_{(n)} \leqslant 1 - \epsilon) \\ &= 0 + P(X_{(n)} \leqslant 1 - \epsilon) \\ &= P(X_{i} \leqslant 1 - \epsilon,\ i=1,\ 2,\ \cdots,\ n) \\ &= (1 - \epsilon)^{n}, \end{aligned}$$
>
> which goes to $0$ as $n \to \infty$. This means $X_{(n)} \stackrel{p}{\longrightarrow} 1$.
> 
> Furthermore, if we take $\epsilon = \frac{t}{n}$, we have 
>
> $$P(X_{(n)} \leqslant 1 - t / n) = (1 - t / n)^{n} \to e^{-t}$$
>
> as $n \to \infty$, yielding $P[n(1 - X_{(n)}) \leqslant t] \to 1 - e^{-t}$, which means $X_{(n)} \stackrel{d}{\longrightarrow} \text{Exponential}(1)$.

<span id='5_5_12'></span>

> [!THEOREM]
> If the sequence of random variables, $X_1,\ X_2,\ \cdots$, *converges in probability* to a r.v. $X$, the sequence also *converges in distribution* to $X$.

> [!THEOREM]
> The sequence of random variables, $X_1,\ X_2,\ \cdots$, *converges in probability* to a constant $\mu$ *iff* the sequence also *converges in distribution* to $\mu$, i.e., the statement 
>
> $$P(\left\vert X_n - \mu \right\vert < \epsilon) \to 1,\quad \forall \epsilon > 0$$
> 
> is equivalent to 
> 
> $$P(X_n \leqslant x) \to \begin{cases} 0,\ &\text{if } x < \mu \\ 1,\ &\text{if } x > \mu. \end{cases}$$

> [!THEOREM|label:Slutsky’s Theorem]
> If $X_n \stackrel{d}{\longrightarrow} X$ and $Y_n \stackrel{p}{\longrightarrow} a$ for some constant $a$, then 
>
> 1. $Y_n X_n \stackrel{d}{\longrightarrow} a X$.
> 2. $X_n + Y_n \stackrel{d}{\longrightarrow} X + a$.

### 5.5.3' Small O and Big O

> [!DEFINITION]
> Let $X_1,\ X_2,\ \cdots$ be a sequence of random variables and let $a_n$ be a corresponding set of constants, the notation 
>
> $$X_n = \omicron_p(a_n)$$
>
> means that the set of values $\frac{X_n}{a_n} \stackrel{p}{\longrightarrow} 0$.

> [!THEOREM]
> Let $X_1,\ X_2,\ \cdots$ be a sequence of random variables and let $a_n$ be a corresponding set of constants, we have 
>
> 1. $X_n = \omicron_p(a_n)$ *iff* $\frac{X_n}{a_n} = \omicron_p(1)$.
> 2. $X_n = \omicron_p(1)$ *iff* $\lim\limits_{n \to \infty} P(\left\vert X_n \right\vert < \epsilon) = 1,\ \forall \epsilon > 0$.

> [!DEFINITION]
> Let $X_1,\ X_2,\ \cdots$ be a sequence of random variables and let $a_n$ be a corresponding set of constants, the notation 
>
> $$X_n = \Omicron_p(a_n)$$
>
> means that the set of values $\frac{X_n}{a_n}$ is **stochastically bounded**, i.e., $\forall \epsilon > 0$, $\exists $ a finite $\delta_{\epsilon} > 0$ and a finite $N_{\epsilon} > 0$ s.t. 
>
> $$P(\left\vert X_n / a_n \right\vert \geqslant \delta_{\epsilon}) < \epsilon,\quad \forall n > N_{\epsilon}.$$

> [!THEOREM]
> Let $X_1,\ X_2,\ \cdots$ be a sequence of random variables and let $a_n$ be a corresponding set of constants, we have $X_n = \Omicron_p(a_n)$ *iff* $\frac{X_n}{a_n} = \Omicron_p(1)$.

> [!NOTE|label:Difference between Small O and Big O]
> To see the difference, we can first rewrite the definition of small O as $\forall \epsilon > 0$, $\delta > 0$, $\exists N_{\epsilon,\ \delta}$ s.t. 
>
> $$P(\left\vert X_n / a_n \right\vert \geqslant \delta) \leqslant \epsilon,\quad \forall n > N_{\epsilon,\ \delta}.$$
>
> We can see that in the definition of big O, for different $\epsilon$ we have *different* $\delta$, while in that of small O, we require the inequality to hold for *all (arbitrary small)* $\delta$, which means the sequence *must be bounded with a bound that gets smaller as the sample size increases*. Thus, if $X_n = \omicron_p(a_n)$, then $X_n = \Omicron_p(a_n)$.

### 5.5.4 The Delta Method

> [!DEFINITION]
> If a function $g(x)$ has derivatives of order $r$, i.e., $g^{(r)}(x) = \frac{\mathrm{d}^{r}}{\mathrm{d}x^{r}}g(x)$ exists, then for any constant $a$, the **Taylor polynomial** of order $r$ about $a$ is 
>
> $$T_r(x) = \sum\limits_{i=0}^{r} \frac{g^{i}(a)}{i!} (x - a)^{i}.$$

> [!THEOREM|label:Taylor’s Theorem]
> If $g^{(r)}(a) = \frac{\mathrm{d}^{r}}{\mathrm{d}x^{r}}g(x)\big\vert_{x=a}$ exists, then 
>
> $$\lim\limits_{x \to a} \frac{g(x) - T_r(x)}{(x - a)^{r}} = 0.$$

For the statistical application of Taylor's Theorem, we are most concerned with the *first-order* Taylor series, i.e., an approximation using just the first derivative. Furthermore, we will also find use for a multivariate Taylor series.

Let $T_1,\ \cdots,\ T_k$ be random variables with means $\theta_1,\ \cdots,\ \theta_k$, and define $\bm{T} = (T_1,\ \cdots,\ T_k)$ and $\bm{\theta} = (\theta_1,\ \cdots,\ \theta_k)$. Suppose there is differentiable function $g(\bm{T})$ (an estimator of some parameter) for which we want an approximate estimate of variance. Define 

$$
g_i'(\bm{\theta}) = \frac{\partial}{\partial t_i}g(\bm{t})\big\vert_{t_1=\theta_1,\ \cdots,\ t_k=\theta_k}.
$$

The first-order Taylor series expansion of $g$ about $\bm{\theta}$ is 

$$
g(\bm{t}) = g(\bm{\theta}) + \sum\limits_{i=1}^{k} g_i'(\bm{\theta})(t_i - \theta_i) + \text{Remainder}.
$$

For our statistical approximation, we will ignore the remainder term and write 

$$
g(\bm{t}) \approx g(\bm{\theta}) + \sum\limits_{i=1}^{k} g_i'(\bm{\theta})(t_i - \theta_i).
$$

Now, take expectations of both sides, we have 

$$
\E[g(\bm{T})] \approx g(\bm{\theta}) + \sum\limits_{i=1}^{k} g_i'(\bm{\theta}) \E[(T_i - \theta_i)] = g(\bm{\theta}).
$$

We can now approximate the variance of $g(\bm{T})$ by 

$$
\begin{aligned}
    \Var(g(\bm{T})) &\approx \E[(g(\bm{T}) - g(\bm{\theta}))^{2}] \\
    &\approx \E\left[\left(\sum\limits_{i=1}^{k} g_i'(\bm{\theta}) (T_i - \theta_i) \right)^{2} \right] \\
    &= \sum\limits_{i=1}^{k} (g_i'(\bm{\theta}))^{2} \Var(T_i) + 2 \sum\limits_{i > j} g_i'(\bm{\theta}) g_j'(\bm{\theta}) \Cov(T_i,\ T_j).
\end{aligned}
$$

This approximation is very useful because it gives us a variance formula for a general function, using only simple variances and covariances.

> [!EXAMPLE|label:Approximate mean and variance]
> Suppose $X$ is a r.v. with $\E[X] = \mu \neq 0$. If we want to estimate a function $g(\mu)$, a first-order approximation would give us 
>
> $$g(X) \approx g(\mu) + g'(\mu)(X - \mu).$$
>
> If we use $g(X)$ as an estimator of $g(\mu)$, we can say that (univariate case for the above results)
>
> $$\E[g(X)] \approx g(\mu)$$
>
> and 
>
> $$\Var(g(X)) \approx (g'(\mu))^{2} \Var(X).$$
>
> For a specific example, take $g(\mu) = \frac{1}{\mu}$, we want to estimate $\frac{1}{\mu}$ with $\frac{1}{X}$. By the results above we have 
>
> $$\E\left[\frac{1}{X} \right] \approx \frac{1}{\mu}$$
>
> and 
>
> $$\Var\left(\frac{1}{X} \right) \approx \left(\frac{1}{\mu} \right)^{4} \Var(X).$$

> [!THEOREM|label:Delta Method]
> Let $Y_n$ be a sequence of random variables that satisfies $\sqrt{n} (Y_n - \theta) \stackrel{d}{\longrightarrow} N(0,\ \sigma^{2})$. For a given function $g$ and a specific value of $\theta$, suppose that $g'(\theta)$ exists and is not $0$. Then 
>
> $$\sqrt{n}(g(Y_n) - g(\theta)) \stackrel{d}{\longrightarrow} N(0,\ \sigma^{2} (g'(\theta))^{2}).$$

<details>
<summary>Proof: </summary>

The Taylor expansion of $g(Y_n)$ around $Y_n = \theta$ is 

$$
g(Y_n) = g(\theta) + g'(\theta)(Y_n - \theta) + \text{Remainder}.
$$

Since the remainder converges to $0$ in probability, by applying Slutsky's Theorem, we have 

$$
\sqrt{n}(g(Y_n) - g(\theta)) = \sqrt{n}[g'(\theta)(Y_n - \theta) + \text{Remainder}] \stackrel{d}{\longrightarrow} N(0,\ \sigma^{2} (g'(\theta))^{2}).
$$
</details>

<br>

> [!EXAMPLE]
> Suppose we have the mean of a random sample $\overline{X}$. For $\mu \neq 0$, since 
> 
> $$\sqrt{n}(\overline{X} - \mu) \stackrel{d}{\longrightarrow} N(0,\ \Var(X_1)),$$
> 
> by Delta Method we have 
>
> $$\sqrt{n}\left(\frac{1}{\overline{X}} - \frac{1}{\mu} \right) \stackrel{d}{\longrightarrow} N\left(0,\ \left(\frac{1}{\mu} \right)^{4} \Var(X_1) \right).$$
>
> If we do not know the variance of $X_1$, to use the above approximation requires an estimate of variance, say, $S^{2}$. Moreover, there is also a question of how to deal with the $\frac{1}{\mu}$ term if we also do not know $\mu$. Actually, we can estimate everything (multivariate case of the first-order approximation), which gives us the approximate variance 
>
> $$\widehat{\Var}\left(\frac{1}{\overline{X}} \right) \approx \left(\frac{1}{\overline{X}} \right)^{4} S^{2}.$$
>
> Furthermore, as both $\overline{X}$ and $S^{2}$ are consistent estimators, we can again apply Slutsky's Theorem to get 
>
> $$\frac{\sqrt{n}\left(\frac{1}{\overline{X}} - \frac{1}{\mu} \right)}{\left(\frac{1}{\overline{X}} \right)^{2} S} \stackrel{d}{\longrightarrow} N(0,\ 1).$$

> 上面这个例子还没有特别理解。

> [!THEOREM|label:Second-order Delta Method]
> Let $Y_n$ be a sequence of random variables that satisfies $\sqrt{n}(Y_n - \theta) \stackrel{d}{\longrightarrow} N(0,\ \sigma^{2})$. For a given function $g$ and a specific value of $\theta$, suppose that $g'(\theta) = 0$ and $g''(\theta)$ exists and is not $0$. Then 
>
> $$n [g(Y_n) - g(\theta)] \stackrel{d}{\longrightarrow} \sigma^{2} \frac{g''(\theta)}{2} \chi^{2}(1).$$

<details>
<summary>Proof: </summary>

If $g'(\theta) = 0$, we take one more term in the Taylor expansion to get 

$$
g(Y_n) = g(\theta) + \frac{g''(\theta)}{2} (Y_n - \theta)^{2} + \text{Remainder}.
$$

Recall that the square of a $N(0,\ 1)$ is a $\chi^{2}(1)$, which implies that 

$$
\frac{n (Y_n - \theta)}{\sigma^{2}} \stackrel{d}{\longrightarrow} \chi^{2}(1).
$$

Therefore, by applying Slutsky’s Theorem we finish the proof.
</details>

<br>

Delta Method can also be extended to multivariate cases.

> [!THEOREM|label:Multivariate Delta Method]
> Let $X_1,\ \cdots,\ X_n$ be a random sample with $\E[X_{ij}] = \mu_i$ and $\Cov(X_{ik},\ X_{jk}) = \sigma_{ij}$. Denote the covariance matrix of variables as $\bm{\Sigma}$. For a given function $g$ with continuous first partial derivatives and a specific value of $\bm{\mu} = (\mu_1,\ \cdots,\ \mu_p)$ for which $\tau^{2} := (g'(\bm{\mu}))^{\top} \bm{\Sigma} g'(\bm{\mu}) = \sum \sum \sigma_{ij} \frac{\partial g(\bm{\mu})}{\partial \mu_i}\frac{\partial g(\bm{\mu})}{\partial \mu_{j}} > 0$, we have 
> 
> $$\sqrt{n} [g(\overline{X}_1,\ \cdots,\ \overline{X}_s) - g(\mu_1,\ \cdots,\ \mu_p)] \stackrel{d}{\longrightarrow} N(0,\ \tau^{2}).$$

### Exercises

#### Textbook Exercises

*5.32* (p.261) Let $X_1,\ X_2,\ \cdots$ be a sequence of random variables that converges in probability to a constant $a$. Assume that $P(X_{i} > 0) = 1$ for all $i$.

(a) Verify that the sequences defined by $Y_{i} = \sqrt{X_{i}}$ and $Y_{i}' = a / X_{i}$ converge in probability.

<details>
<summary>Proof: </summary>

Since $X_{i} \stackrel{p}{\longrightarrow} a$, we have 

$$
\lim\limits_{i \to \infty} P(\left\vert X_{i} - a \right\vert < \epsilon) = 1,\quad \forall \epsilon > 0.
$$

Then, $\forall \epsilon > 0$, we have 

$$
\begin{aligned}
    P\left(\left\vert Y_{i} - \sqrt{a} \right\vert < \epsilon \right) &= P\left(\left\vert \sqrt{X_{i}} - \sqrt{a} \right\vert \left\vert \sqrt{X_{i}} + \sqrt{a} \right\vert < \epsilon \left\vert \sqrt{X_{i}} + \sqrt{a} \right\vert \right) \\
    &= P\left(\left\vert X_{i} - a \right\vert < \epsilon \left\vert \sqrt{X_{i}} + \sqrt{a} \right\vert \right) \\
    &\geqslant P\left(\left\vert X_{i} - a \right\vert < \epsilon \sqrt{a} \right) \to 1
\end{aligned}
$$

as $i \to \infty$, which means $Y_{i} \stackrel{p}{\longrightarrow} \sqrt{a}$.

Similarly, $\forall \epsilon > 0$, we have 

$$
\begin{aligned}
    P\left(\left\vert Y_{i}' - 1 \right\vert < \epsilon \right) &= P\left(1 - \epsilon < \frac{a}{X_{i}} < 1 + \epsilon \right) \\
    &= P\left(\frac{a}{1 + \epsilon} < X_{i} < \frac{a}{1 - \epsilon} \right) \\
    &= P\left(a - \frac{a \epsilon}{1 + \epsilon} < X_{i} < a + \frac{a \epsilon}{1 - \epsilon} \right) \\
    &\geqslant P\left(a - \frac{a \epsilon}{1 + \epsilon} < X_{i} < a + \frac{a \epsilon}{1 + \epsilon} \right) \\
    &= P\left(\left\vert X_{i} - a \right\vert < \frac{a \epsilon}{1 + \epsilon} \right) \to 1
\end{aligned}
$$

as $i \to \infty$, which means $Y_{i}' \stackrel{p}{\longrightarrow} 1$.
</details>

<br>

(b) Use the results in part (a) to prove the fact used in Example 5.5.18, that $\sigma / S_n$ converges in probability to $1$.

> [!TIP]
> The condition in Example 5.5.18 is $S_n^{2} \stackrel{p}{\longrightarrow} \sigma^{2}$.

<details>
<summary>Proof: </summary>

From the first result in (a) we know that $S_n \stackrel{p}{\longrightarrow} \sigma$, then using the second result we have $\sigma / S_n \stackrel{p}{\longrightarrow} 1$.
</details>

<br>

*5.40* (p.262) Prove [Theorem 5.5.12](#5_5_12) for the case where $X_n$ and $X$ are continuous random variables.

(a) Given $t$ and $\epsilon$, show that $P(X \leqslant t - \epsilon) \leqslant P(X_n \leqslant t) + P(\left\vert X_n - X \right\vert \geqslant \epsilon)$. This gives a lower bound on $P(X_n \leqslant t)$.

<details>
<summary>Proof: </summary>

Given $t$ and $\epsilon > 0$, we have 

$$
\begin{aligned}
    P(X \leqslant t - \epsilon) &= P(X \leqslant t - \epsilon,\ X_n \leqslant t) + P(X \leqslant t - \epsilon,\ X_n > t) \\
    &\leqslant P(X_n \leqslant t) + P(\left\vert X_n - X \right\vert \geqslant \epsilon),
\end{aligned}
$$

which means a lower bound on $P(X_n \leqslant t)$ is 

$$
P(X \leqslant t - \epsilon) - P(\left\vert X_n - X \right\vert \geqslant \epsilon).
$$
</details>

<br>

(b) Use a similar strategy to get an upper bound on $P(X_n \leqslant t)$.

<details>
<summary>Proof: </summary>

Given $t$ and $\epsilon > 0$, we have 

$$
\begin{aligned}
    P(X > t + \epsilon) &= P(X > t + \epsilon,\ X_n \leqslant t) + P(X > t + \epsilon,\ X_n > t) \\
    &\leqslant P(\left\vert X_n - X \right\vert \geqslant \epsilon) + P(X_n > t) \\
    &= P(\left\vert X_n - X \right\vert \geqslant \epsilon) + 1 - P(X_n \leqslant t),
\end{aligned}
$$

which means a upper bound on $P(X_n \leqslant t)$ is 

$$
P(X \leqslant t + \epsilon) + P(\left\vert X_n - X \right\vert \geqslant \epsilon).
$$
</details>

<br>

(c) By pinching, deduce that $P(X_n \leqslant t) \to P(X \leqslant t)$.

<details>
<summary>Proof: </summary>

Since $X_n \stackrel{p}{\longrightarrow} X$, we have 

$$
\lim\limits_{n \to \infty} P(\left\vert X_n - X \right\vert \geqslant \epsilon) = 0
$$

and thus 

$$
P(X \leqslant t - \epsilon) \leqslant \lim\limits_{n \to \infty} P(X_n \leqslant t) \leqslant P(X \leqslant t + \epsilon).
$$

By letting $\epsilon \to 0^{+}$, we obtain 

$$
\lim\limits_{n \to \infty} P(X_n \leqslant t) = P(X \leqslant t).
$$
</details>

<br>

*5.43* (p.263) Fill in the details in the proof of Theorem 5.5.24 (Delta Method).

(a) Show that if $\sqrt{n}(Y_n - \mu) \stackrel{d}{\longrightarrow} N(0,\ \sigma^{2})$, then $Y_n \stackrel{p}{\longrightarrow} \mu$.

<details>
<summary>Proof: </summary>

Since 

$$
\lim\limits_{n \to \infty} P(\left\vert Y_n - \mu \right\vert < \epsilon) = \lim\limits_{n \to \infty} P(\left\vert \sqrt{n} (Y_n - \mu) \right\vert < \sqrt{n} \epsilon) = 1,
$$

we have $Y_n \stackrel{p}{\longrightarrow} \mu$.
</details>

<br>

(b) Give the details for the application of Slutsky’s Theorem (Theorem 5.5.17).

<details>
<summary>Solution: </summary>

The Taylor expansion of $g(Y_n)$ around $Y_n = \theta$ is 

$$
g(Y_n) = g(\theta) + g'(\theta)(Y_n - \theta) + \text{Remainder}.
$$

Since the remainder converges to $0$ in probability, by applying Slutsky's Theorem, we have 

$$
\sqrt{n}(g(Y_n) - g(\theta)) = \sqrt{n}[g'(\theta)(Y_n - \theta) + \text{Remainder}] \stackrel{d}{\longrightarrow} N(0,\ \sigma^{2} (g'(\theta))^{2}).
$$
</details>

#### Additional Exercises

1. Show that if $X_n$ is a stochastic sequence s.t. each element has finite variance, then 

    $$
    X_n - \E[X_n] = \Omicron_p(\sqrt{\Var(X_n)}).
    $$

    <details>
    <summary>Proof: </summary>

    $\forall \epsilon > 0$, choose $\delta_{\epsilon} = \sqrt{\frac{1}{\epsilon}}$. By Chebyshev's Inequality, we have

    $$
    P\left(\left\vert \frac{X_n - \E[X_n]}{\sqrt{\Var(X_n)}} \right\vert \geqslant \delta_{\epsilon} \right) \leqslant \frac{\Var(X_n) / \Var(X_n)}{\delta_{\epsilon}^{2}} = \epsilon,
    $$

    which means $X_n - \E[X_n] = \Omicron_p(\sqrt{\Var(X_n)})$.
    </details>

    <br>

2. Show that if $a_n^{-2} \Var(X_n) \to 0$ as $n \to \infty$, then 

    $$
    (X_n - \E[X_n]) = \omicron_p(a_n).
    $$

    <details>
    <summary>Proof: </summary>

    $\forall \epsilon > 0$, by Chebyshev’s Inequality, we have 

    $$
    P\left(\left\vert \frac{X_n - \E[X_n]}{a_n} \right\vert \geqslant \epsilon \right) \leqslant \frac{\Var(X_n) / a_n^{2}}{\epsilon^{2}} \to 0
    $$

    as $n \to \infty$, which means $X_n - \E[X_n] = \omicron_p(a_n)$.
    </details>

3. Let $X_1,\ \cdots,\ X_n$ be an i.i.d. sample from $\text{Poisson}(\lambda)$ distribution truncated on the left at $0$, the density is given by 

    $$
    P(X = x) = \frac{e^{-\lambda} \lambda^{x}}{(1 - e^{-\lambda}) x!},\quad x = 1,\ 2,\ \cdots.
    $$

    Please find the asymptotic variance of the MLE estimator of $\lambda$ (*Hints*: You can use Delta Method).

    > [!ATTENTION]
    > 曾经出现在博资考中。

    <details>
    <summary>Solution: </summary>

    The log-likelihood function is 

    $$
    \begin{aligned}
        \ell(x_1,\ \cdots,\ x_n,\ \lambda) &= \sum\limits_{i=1}^{n} \log \frac{e^{-\lambda} \lambda^{x_i}}{(1 - e^{-\lambda}) x_i!} \\
        &= -n \lambda + \sum\limits_{i=1}^{n} x_i \log \lambda - n \log (1 - e^{-\lambda}) - \sum\limits_{i=1}^{n} \log x_i!.
    \end{aligned}
    $$

    Write the derivative of $\ell$ w.r.t. $\lambda$ as 

    $$
    \frac{\mathrm{d}\ell}{\mathrm{d}\lambda} = -n + \frac{1}{\lambda} \sum\limits_{i=1}^{n} x_i - \frac{n e^{-\lambda}}{1 - e^{-\lambda}} = 0,
    $$

    solve it and we get 

    $$
    \frac{\lambda}{1 - e^{-\lambda}} = \overline{X},
    $$

    which means the MLE estimator of $\lambda$ can be expressed as 

    $$
    \widehat{\lambda} = g^{-1}(\overline{X}),
    $$

    where $g(\lambda) = \frac{\lambda}{1 - e^{-\lambda}}$.

    Utilizing properties of Poisson distribution, we can get $\mu := \E[X] = \frac{\lambda}{1 - e^{-\lambda}}$ and $\E[X^{2}] = \frac{\lambda + \lambda^{2}}{1 - e^{-\lambda}}$, and thus $\sigma^{2} := \Var(X) = \frac{\lambda (1 - e^{-\lambda} - \lambda e^{-\lambda})}{(1 - e^{-\lambda})^{2}}$. By CLT we have 

    $$
    \sqrt{n} \left(\overline{X} - \mu \right) \stackrel{d}{\longrightarrow} N(0,\ \sigma^{2}).
    $$
    
    Then, by Delta Method, we have 

    $$
    \sqrt{n} \left(\widehat{\lambda} - \lambda \right) \stackrel{d}{\longrightarrow} N\left(0,\ \left(\frac{\mathrm{d}g^{-1}(\mu)}{\mathrm{d}\mu} \right)^{2} \sigma^{2} \right).
    $$

    Since 

    $$
    \frac{\mathrm{d}g^{-1}(\mu)}{\mathrm{d}\mu} = \frac{1}{\frac{\mathrm{d}g(g^{-1}(\mu))}{\mathrm{d}\lambda}} = \frac{1}{\frac{\mathrm{d}g(\lambda)}{\mathrm{d}\lambda}} = \frac{(1 - e^{-\lambda})^{2}}{1 - e^{-\lambda} - \lambda e^{-\lambda}},
    $$

    the asymptotic variance of $\widehat{\lambda}$ is 

    $$
    \frac{\lambda (1 - e^{-\lambda})^{2}}{1 - e^{-\lambda} - \lambda e^{-\lambda}}.
    $$
    </details>

## 5.6 Generating a Random Sample

### 5.6.1 Direct Method &mdash; The Inversion Method

> [!THEOREM|label:The inversion method for discrete case]
> If $Y$ is a *discrete* r.v. taking on values $y_1 \leqslant y_2 \leqslant \cdots \leqslant y_k$ with cdf $F_{Y}(\cdot)$, then we can write 
>
> $$P(F_{Y}(y_i) \leqslant U \leqslant F_{Y}(y_{i+1})) = F_{Y}(y_{i+1}) - F_{Y}(y_i) = P(Y = y_{i+1}).$$
>
> where $U \sim \text{Uniform}(0,\ 1)$. Thus, by generating $U$ we can generate $Y$. Here is the algorithm: 
>
> 1. Generate $U \sim \text{Uniform}(0,\ 1)$;
> 2. If $F_{Y}(y_i) \leqslant U \leqslant F_{Y}(y_{i+1})$, then set $Y = y_{i+1}$ (define $y_0 = -\infty$ and $F_{Y}(y_0) = 0$).

> [!THEOREM|label:The inversion method for continuous case]
> If $Y$ is a *continuous* r.v. with pdf $f_{Y}(y)$, then we need to find the cdf $F_{Y}(y) = \int_{-\infty}^{\infty} f_{Y}(y) ~\mathrm{d}y$ first. Then, let $U \sim \text{Uniform}(0,\ 1)$, from $u = F_{Y}(y)$ we can solve $y = F_{Y}^{-1}(u)$, which means we manage to generate $Y$. Here is the algorithm: 
>
> 1. Generate $U \sim \text{Uniform}(0,\ 1)$;
> 2. Solve $y = F_{Y}^{-1}(u)$.

> [!EXAMPLE|Sample from Weibull]
> Use the inversion method to generate a sample from Weibull distribution with pdf 
>
> $$f(x) = \frac{k}{\lambda} \left(\frac{x}{\lambda} \right)^{k - 1} e^{-(x / \lambda)^{k}},\quad x > 0,\ \lambda,\ k > 0.$$
>
> Its cdf is 
>
> $$F(x) = \int_{0}^{x} \frac{k}{\lambda} \left(\frac{x}{\lambda} \right)^{k - 1} e^{-(x / \lambda)^{k}} ~\mathrm{d}x = 1 - e^{-(x / \lambda)^{k}},$$
>
> which means 
>
> $$F^{-1}(u) = \lambda (-\log(1 - u))^{1 / k}.$$
>
> Since the distribution of $U$ and $1 - U$ are the same, we can use $1 - U$ to generate $Y$, i.e., we can replace $\log(1 - u)$ by $\log u$. So the algorithm is 
>
> 1. Generate $U \sim \text{Uniform}(0,\ 1)$;
> 2. Set $X = \lambda (-\log u)^{1 / k}$.

### 5.6.2 Indirect Method &mdash; The Accept/Reject Algorithm

You may have found that the inversion method is not always applicable (especially for continuous cases) since the cdf $F_{Y}(y)$ may not be invertible or the inverse may be difficult to compute. So we have another method called the Accept/Reject Algorithm, which is an indirect method.

> [!THEOREM|label:The Accept/Reject Algorithm for continuous case]
> Let $Y \sim f_{Y}(y)$ and $V \sim f_{V}(v)$, where $f_{Y}$ and $f_{V}$ have *common support* with 
>
> $$M = \sup\limits_{y} \frac{f_{Y}(y)}{f_{V}(y)} < \infty.$$
>
> To generate a r.v. $Y \sim f_{Y}$, we can use the following algorithm: 
>
> 1. Generate $U \sim \text{Uniform}(0,\ 1)$ and $V \sim f_{V}$ *independently*;
> 2. If $U < \frac{1}{M} \frac{f_{Y}(V)}{f_{V}(V)}$, set $Y = V$; otherwise, go back to step 1.

<details>
<summary>Proof:</summary>

The generated r.v. $Y$ has cdf 

$$
\begin{aligned}
    P(Y \leqslant y) &= P(V \leqslant y \mid \text{stop}) \\
    &= P\left(V \leqslant y \mid U < \frac{1}{M} \frac{f_{Y}(V)}{f_{V}(V)} \right) \\
    &= \frac{P\left(V \leqslant y,\ U < \frac{1}{M} \frac{f_{Y}(V)}{f_{V}(V)} \right)}{P\left(U < \frac{1}{M} \frac{f_{Y}(V)}{f_{V}(V)} \right)} \\
    &= \frac{\int_{-\infty}^{y} \int_{0}^{\frac{1}{M} \frac{f_{Y}(v)}{f_{V}(v)}} f_{V}(v) ~\mathrm{d}u ~\mathrm{d}v}{\int_{-\infty}^{\infty} \int_{0}^{\frac{1}{M} \frac{f_{Y}(v)}{f_{V}(v)}} f_{V}(v) ~\mathrm{d}u ~\mathrm{d}v} \\
    &= \frac{\int_{-\infty}^{y} \frac{1}{M} f_{Y}(v) ~\mathrm{d}v}{\int_{-\infty}^{\infty} \frac{1}{M} f_{Y}(v) ~\mathrm{d}v} \\
    &= \int_{-\infty}^{y} f_{Y}(v) ~\mathrm{d}v \\
    &= F_{Y}(y),
\end{aligned}
$$

which is what we want.
</details>

<br>
 
Actually you can see from the proof that $M$ *need not* be the supremum of $\frac{f_{Y}}{f_{V}}$, it can be any constant greater than $\frac{f_{Y}}{f_{V}}$ to guarantee $\frac{1}{M} \frac{f_{Y}(V)}{f_{V}(V)} \leqslant 1$. However, since we accept the value of $V$ only when $U < \frac{1}{M} \frac{f_{Y}(V)}{f_{V}(V)}$, the larger $\frac{1}{M}$ is, the more likely we accept the value of $V$, which means the algorithm is more efficient. So $\frac{1}{M}$ is also called the **acceptance rate** and we require the largest acceptance rate in the algorithm above.

Similarly, the Accept/Reject Algorithm can also be applied to discrete cases.

> [!THEOREM|label:The Accept/Reject Algorithm for discrete case]
> Let $Y$ be a *discrete* r.v. taking on values $y_1 \leqslant y_2 \leqslant \cdots \leqslant y_k$ with pmf $p(\cdot)$ and $V$ be a discrete r.v. with pmf $q(\cdot)$ and with the *same support* of $Y$. Define 
>
> $$M = \sup\limits_{y} \frac{p(y)}{q(y)} < \infty.$$
>
> To generate a r.v. $Y$, we can use the following algorithm:
>
> 1. Generate $U \sim \text{Uniform}(0,\ 1)$ and $V$ from $q(\cdot)$ *independently*;
> 2. If $U < \frac{1}{M} \frac{p(V)}{q(V)}$, set $Y = V$; otherwise, go back to step 1.

### 5.6.3 Indirect Method &mdash; Metropolis Algorithm

In the Accept/Reject Algorithm, an important requirement is $M < \infty$. This can be interpreted as requiring the density of $V$ (**candidate density**) to have heavier tails than the density of $Y$ (**target density**). This requirement tends to ensure that we will obtain a good representation of the values of $Y$, even those values that are in the tails. However, in some cases, e.g., the target density has heavy tails, it is difficult to find a candidate density with heavier tails than the target density, which means $M$ may tend to infinity. In such caes the Accept/Reject Algorithm will no longer apply, and one is led to another class of methods known as *Markov Chain Monte Carlo (MCMC)* methods. Special cases of such methods are known as *Gibbs Sampler* and *Metropolis Algorithm*. Here we will introduce the latter.

> [!THEOREM|label:Metropolis Algorithm]
> Let $Y \sim f_{Y}(y)$ and $V \sim f_{V}(v)$, where $f_{Y}$ and $f_{V}$ have common support. To generate $Y \sim f_{Y}$, we can use the following algorithm:
>
> 0. Generate $V \sim f_{V}$. Set $Z_0 = V$;
>
> For $i = 1,\ 2,\ \cdots$: 
>
> 1. Generate $U_i \sim \text{Uniform}(0,\ 1)$, $V_i \sim f_{V}$, and calculate
> 
>     $$\rho_i = \min \left\{\frac{f_{Y}(V_i)}{f_{V}(V_i)} \frac{f_{V}(Z_{i-1})}{f_{Y}(Z_{i-1})},\ 1 \right\};$$
>
> 2. Set 
>
>     $$Z_i = \begin{cases} V_i,\ &\text{if } U_i \leqslant \rho_i \\ Z_{i-1},\ &\text{if } U_i > \rho_i. \end{cases}$$
>
> Then, as $i \to \infty$, $Z_i \stackrel{d}{\longrightarrow} Y$.

## Assignments

### Textbook Exercises

*5.6* (p.256) If $X$ has pdf $f_{X}(x)$ and $Y$, independent of $X$, has pdf $f_{Y}(y)$, establish formulas, similar to (5.2.3), for the random variable $Z$ in each of the following situations.

> [!TIP]
> Just calculate the pdf of $Z$.

(a) $Z = X - Y$

<details>
<summary>Solution: </summary>

Since the inverse transformation of $Z$ is $X = Z + Y$, let $h_1(z,\ y) = z + y$ and $h_2(z,\ y) = y$, we have 

$$
\begin{aligned}
    f_{Z,\ Y}(z,\ y) &= f_{X,\ Y}(h_1(z,\ y),\ h_2(z,\ y)) \left\vert \begin{matrix} \frac{\partial h_1}{\partial z} & \frac{\partial h_1}{\partial y} \\ \frac{\partial h_2}{\partial z} & \frac{\partial h_2}{\partial y} \end{matrix} \right\vert \\
    &= f_{X,\ Y}(z + y,\ y) \left\vert \begin{matrix} 1 & 1 \\ 0 & 1 \end{matrix} \right\vert \\
    &= f_{X,\ Y}(z + y,\ y) \\
\end{aligned}
$$

Thus, the marginal pdf of $Z$ is given by 

$$
\begin{aligned}
    f_{Z}(z) &= \int_{-\infty}^{\infty} f_{Z,\ Y}(z,\ y) ~ \mathrm{d}y \\
    &= \int_{-\infty}^{\infty} f_{X,\ Y}(z + y,\ y) ~ \mathrm{d}y \\
    &= \int_{-\infty}^{\infty} f_{X}(z + y) f_{Y}(y) ~ \mathrm{d}y.
\end{aligned}
$$
</details>

<br>

(b) $Z = X Y$

<details>
<summary>Solution: </summary>

Since the inverse transformation of $Z$ is $X = Z / Y$, let $h_1(z,\ y) = z / y$ and $h_2(z,\ y) = y$, we have 

$$
\begin{aligned}
    f_{Z,\ Y}(z,\ y) &= f_{X,\ Y}(h_1(z,\ y),\ h_2(z,\ y)) \left\vert \begin{matrix} \frac{\partial h_1}{\partial z} & \frac{\partial h_1}{\partial y} \\ \frac{\partial h_2}{\partial z} & \frac{\partial h_2}{\partial y} \end{matrix} \right\vert \\
    &= f_{X,\ Y}(z / y,\ y) \left\vert \begin{matrix} 1 / y & -z / y^{2} \\ 0 & 1 \end{matrix} \right\vert \\
    &= \frac{1}{\left\vert y \right\vert } f_{X,\ Y}(z / y,\ y) \\
\end{aligned}
$$

Thus, the marginal pdf of $Z$ is given by

$$
\begin{aligned}
    f_{Z}(z) &= \int_{-\infty}^{\infty} f_{Z,\ Y}(z,\ y) ~ \mathrm{d}y \\
    &= \int_{-\infty}^{\infty} \frac{1}{\left\vert y \right\vert } f_{X,\ Y}(z / y,\ y) ~ \mathrm{d}y \\
    &= \int_{-\infty}^{\infty} \frac{1}{\left\vert y \right\vert } f_{X}(z / y) f_{Y}(y) ~ \mathrm{d}y.
\end{aligned}
$$
</details>

<br>

(c) $Z = X / Y$

<details>
<summary>Solution: </summary>

Since the inverse transformation of $Z$ is $X = Z Y$, let $h_1(z,\ y) = z y$ and $h_2(z,\ y) = y$, we have

$$
\begin{aligned}
    f_{Z,\ Y}(z,\ y) &= f_{X,\ Y}(h_1(z,\ y),\ h_2(z,\ y)) \left\vert \begin{matrix} \frac{\partial h_1}{\partial z} & \frac{\partial h_1}{\partial y} \\ \frac{\partial h_2}{\partial z} & \frac{\partial h_2}{\partial y} \end{matrix} \right\vert \\
    &= f_{X,\ Y}(z y,\ y) \left\vert \begin{matrix} y & z \\ 0 & 1 \end{matrix} \right\vert \\
    &= \left\vert y \right\vert f_{X,\ Y}(z y,\ y) \\
\end{aligned}
$$

Thus, the marginal pdf of $Z$ is given by

$$
\begin{aligned}
    f_{Z}(z) &= \int_{-\infty}^{\infty} f_{Z,\ Y}(z,\ y) ~ \mathrm{d}y \\
    &= \int_{-\infty}^{\infty} \left\vert y \right\vert f_{X,\ Y}(z y,\ y) ~ \mathrm{d}y \\
    &= \int_{-\infty}^{\infty} \left\vert y \right\vert f_{X}(z y) f_{Y}(y) ~ \mathrm{d}y.
\end{aligned}
$$
</details>

<br>

*5.8* (p.257) Let $X_1,\ \cdots,\ X_n$ be a random sample, where $\overline{X}$ and $S^{2}$ are calculated in the usual way.

(a) Show that 

$$
S^{2} = \frac{1}{2 n (n - 1)} \sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2}.
$$

Assume now that the $X_{i}$s have a finite fourth moment, and denote $\theta_1 = \E[X_{i}]$, $\theta_j = \E[(X_{i} - \theta_1)^{j}]$, $j = 2,\ 3,\ 4$.

<details>
<summary>Proof: </summary>

$$
\begin{aligned}
    &\phantom{=} \frac{1}{2n (n - 1)} \sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2} \\
    &= \frac{1}{2n (n - 1)} \sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - \overline{X} + \overline{X} - X_{j})^{2} \\
    &= \frac{1}{2n (n - 1)} \sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} \left[(X_{i} - \overline{X})^{2} - 2 (X_{i} - \overline{X}) (X_{j} - \overline{X}) + (X_{j} - \overline{X})^{2} \right] \\
    &= \frac{1}{2n (n - 1)} \Bigg[\sum\limits_{i=1}^{n} n(X_{i} - \overline{X})^{2} - 2 \sum\limits_{i=1}^{n} (X_{i} - \overline{X}) \sum\limits_{j=1}^{n} (X_{j} - \overline{X}) \\ &\qquad + n \sum\limits_{j=1}^{n} (X_{j} - \overline{X})^{2} \Bigg] \\
    &= \frac{1}{2 (n - 1)} \left[\sum\limits_{i=1}^{n} (X_{i} - \overline{X})^{2} + \sum\limits_{j=1}^{n} (X_{j} - \overline{X})^{2} \right] \\
    &= \frac{1}{n - 1} \sum\limits_{i=1}^{n} (X_{i} - \overline{X})^{2} \\
    &= S^{2}.
\end{aligned}
$$
</details>

<br>

(b) Show that $\Var(S^{2}) = \frac{1}{n}(\theta_4 - \frac{n - 3}{n - 1}\theta_2^{2})$.

> [!TIP]
> It’s hard to prove it directly, try to use induction method.

<details>
<summary>Proof: </summary>

We first prove the case for $n = 4$. To calculate $\Var(S^{2})$, we need to calculate $\E[S^{4}]$ and $\E[S^{2}]$: 

$$
\E[S^{2}] = \Var(X_{i}) = \theta_2
$$

and

$$
\begin{aligned}
    \E[S^{4}] &= \E\left[\frac{1}{[2 n (n - 1)]^{2}} \left[\sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2} \right]^{2} \right] \\
    &= \frac{1}{24^{2}} \Bigg[2 \sum\limits_{i=1}^{4} \sum\limits_{j\neq i} \E[(X_{i} - X_{j})^{4}] \\ &\qquad + 2 \sum\limits_{i=1}^{4} \sum\limits_{j\neq i} \sum\limits_{k \notin \left\{i,\ j \right\}} \E[(X_{i} - X_{j})^{2} (X_{i} - X_{k})^{2}] \\ &\qquad + 2 \sum\limits_{i=1}^{4} \sum\limits_{j\neq i} \sum\limits_{k \notin \left\{i,\ j \right\}} \E[(X_{i} - X_{j})^{2} (X_{j} - X_{k})^{2}] \\ &\qquad + \sum\limits_{i=1}^{4} \sum\limits_{j\neq i} \sum\limits_{k \notin \left\{i,\ j \right\}} \sum\limits_{l \notin \left\{i,\ j,\ k \right\}} \E[(X_{i} - X_{j})^{2} (X_{k} - X_{l})^{2}] \Bigg],
\end{aligned}
$$

which contains 24 terms of $\E[(X_{i} - X_{j})^{4}]$, 96 terms of $\E[(X_{i} - X_{j})^{2} (X_{i} - X_{k})^{2}]$ and 24 terms of $\E[(X_{i} - X_{j})^{2} (X_{k} - X_{l})^{2}]$.

Note that 

$$
\begin{aligned}
    \E[(X_{i} - X_{j})^{4}] &= \E[(X_{i} - \theta_1 + \theta_1 - X_{j})^{4}] \\
    &= \E[(X_{i} - \theta_1)^{4}] + 4 \E[(X_{i} - \theta_1)^{3} (\theta_1 - X_{j})] \\ &\qquad + 6 \E[(X_{i} - \theta_1)^{2} (X_{j} - \theta_1)^{2}] + 4 \E[(X_{i} - \theta_1) (\theta_1 - X_{j})^{3}] \\ &\qquad + \E[(X_{j} - \theta_1)^{4}] \\
    &= 2 \theta_4 + 6 \theta_2^{2},
\end{aligned}
$$

$$
\begin{aligned}
    \E[(X_{i} - X_{j})^{2} (X_{i} - X_{k})^{2}] &= \E[(X_{i} - \theta_1 + \theta_1 - X_{j})^{2} (X_{i} - \theta_1 + \theta_1 - X_{k})^{2}] \\
    &= \E[[(X_{i} - \theta_1)^{2} + (X_{j} - \theta_1)^{2}] \\ &\qquad \cdot [(X_{i} - \theta_1)^{2} + (X_{k} - \theta_1)^{2}]] \\
    &= \theta_4 + 3 \theta_2^{2}
\end{aligned}
$$

and 

$$
\begin{aligned}
    \E[(X_{i} - X_{j})^{2} (X_{k} - X_{l})^{2}] &= \E[(X_{i} - \theta_1 + \theta_1 - X_{j})^{2} (X_{k} - \theta_1 + \theta_1 - X_{l})^{2}] \\
    &= \E[[(X_{i} - \theta_1)^{2} + (X_{j} - \theta_1)^{2}] \\ &\qquad \cdot [(X_{k} - \theta_1)^{2} + (X_{l} - \theta_1)^{2}]] \\
    &= 4 \theta_2^{2}.
\end{aligned}
$$

Therefore, we have 

$$
\E[S^{4}] = \frac{1}{24^{2}} \left[24 (2 \theta_4 + 6 \theta_2^{2}) + 96 (\theta_4 + 3 \theta_2^{2}) + 24 (4 \theta_2^{2}) \right] = \frac{1}{4} \theta_{4} + \frac{11}{12} \theta_{2}^{2},
$$

which means 

$$
\begin{aligned}
    \Var(S^{2}) &= \E[S^{4}] - \E^{2}[S^{2}] \\
    &= \frac{1}{4} \theta_{4} + \frac{11}{12} \theta_{2}^{2} - \theta_{2}^{2} \\
    &= \frac{1}{4} \theta_{4} - \frac{1}{12} \theta_{2}^{2} \\
    &= \frac{1}{4} \left(\theta_{4} - \frac{4 - 3}{4 - 1} \theta_{2}^{2} \right).
\end{aligned}
$$

Assume $\Var(S^{2}) = \frac{1}{n}(\theta_4 - \frac{n - 3}{n - 1}\theta_2^{2})$ holds for $n,\ n \geqslant 4$, then for $n + 1$ we have 

$$
\begin{aligned}
    S_{n + 1}^{2} = \frac{1}{2 (n + 1) n} \left[\sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2} + 2 \sum\limits_{i=1}^{n} (X_{i} - X_{n + 1})^{2} \right].
\end{aligned}
$$

Since 

$$
\begin{aligned}
    \Var\left[\sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2} \right] &= 4 n^{2} (n - 1)^{2} \frac{1}{n} \left(\theta_4 - \frac{n - 3}{n - 1}\theta_2^{2} \right)  \\
    &= 4 n (n - 1)^{2} \left(\theta_4 - \frac{n - 3}{n - 1}\theta_2^{2} \right) ,
\end{aligned}
$$

$$
\begin{aligned}
    \Var\left[\sum\limits_{i=1}^{n} (X_{i} - X_{n + 1})^{2} \right] &= \E\left[\left[\sum\limits_{i=1}^{n} (X_{i} - X_{n + 1})^{2} \right]^{2} \right] \\ &\qquad - \E^{2}\left[\sum\limits_{i=1}^{n} (X_{i} - X_{n + 1})^{2} \right] \\
    &= \E\left[\sum\limits_{i=1}^{n} (X_{i} - X_{n + 1})^{4} \right] \\ &\qquad + \E\left[\sum\limits_{i=1}^{n} \sum\limits_{j\neq i} (X_{i} - X_{n + 1})^{2} (X_{j} - X_{n + 1})^{2} \right] \\ &\qquad - \E^{2}\left[\sum\limits_{i=1}^{n} (X_{i} - \theta_1 + \theta_1 - X_{n + 1})^{2} \right] \\
    &= n (2 \theta_4 + 6 \theta_2^{2}) + n (n - 1) (\theta_4 + 3 \theta_2^{2}) - (2 n \theta_2)^{2} \\
    &= n (n + 1) \theta_4 + n (3 - n) \theta_2^{2}
\end{aligned}
$$

and 

$$
\begin{aligned}
    &\phantom{=} \Cov\left[\sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2},\ \sum\limits_{i=1}^{n} (X_{i} - X_{n + 1})^{2} \right] \\
    &= \E\left[\sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2} \cdot \sum\limits_{i=1}^{n} (X_{i} - X_{n + 1})^{2} \right] \\ &\qquad - \E\left[\sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2} \right] \E\left[\sum\limits_{i=1}^{n} (X_{i} - X_{n + 1})^{2} \right] \\
    &= \E\Bigg[2 \sum\limits_{i=1}^{n} \sum\limits_{j\neq i} (X_{i} - X_{j})^{2} (X_{i} - X_{n + 1})^{2} \\ &\qquad + \sum\limits_{i=1}^{n} \sum\limits_{j\neq i} \sum\limits_{k\notin \left\{i,\ j \right\}} (X_{i} - X_{j})^{2} (X_{k} - X_{n + 1})^{2} \Bigg] - 2 n (n - 1) \theta_2 \cdot 2 n \theta_2 \\
    &= 2 n (n - 1) (\theta_4 + 3 \theta_2^{2}) + n (n - 1) (n - 2) 4 \theta_2^{2} - 4 n^{2} (n - 1) \theta_2^{2} \\
    &= 2 n (n - 1) (\theta_{4} - \theta_{2}^{2}),
\end{aligned}
$$

The variance of $S_{n + 1}^{2}$ is given by 

$$
\begin{aligned}
    \Var(S_{n + 1}^{2}) &= \frac{1}{4 n^{2} (n + 1)^{2}} \bigg[4 n (n - 1)^{2} \left(\theta_4 - \frac{n - 3}{n - 1}\theta_2^{2} \right) + 4 n (n + 1) \theta_4 \\ &\qquad + 4 n (3 - n) \theta_2^{2} + 8 n (n - 1) (\theta_{4} - \theta_{2}^{2}) \bigg] \\
    &= \frac{1}{4 n^{2} (n + 1)^{2}} [4 n^{2} (n + 1) \theta_4 + 4 n (2 - n) (n + 1) \theta_2^{2}] \\
    &= \frac{1}{n + 1} \left(\theta_4 - \frac{n - 2}{n} \theta_2^{2} \right).
\end{aligned}
$$

Hence, by induction, the equality holds for all $n \geqslant 4$.
</details>

<br>

(c) Find $\Cov(\overline{X},\ S^{2})$ in terms of $\theta_1,\ \cdots,\ \theta_4$. Under what conditions is $\Cov(\overline{X},\ S^{2}) = 0$?

<details>
<summary>Solution: </summary>

$$
\begin{aligned}
    \Cov(\overline{X},\ S^{2}) &= \E\left[\frac{1}{n} \sum\limits_{i=1}^{n} X_{i} \cdot \frac{1}{2 n (n - 1)} \sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} (X_{i} - X_{j})^{2} \right] - \E[\overline{X}] \E[S^{2}] \\
    &= \frac{1}{2 n^{2} (n - 1)} \E\Bigg[2 \sum\limits_{i=1}^{n} \sum\limits_{j\neq i} X_{i} (X_{i} - X_{j})^{2} \\ &\qquad + \sum\limits_{i=1}^{n} \sum\limits_{j\neq i} \sum\limits_{k\notin \left\{i,\ j \right\}} X_{k} (X_{i} - X_{j})^{2} \Bigg] - \theta_1 \theta_2.
\end{aligned}
$$

Note that 

$$
\begin{aligned}
    \E\left[X_{i} (X_{i} - X_{j})^{2} \right] &= \E\left[X_{i} (X_{i} - \theta_1 + \theta_1 - X_{j})^{2} \right] \\
    &= \E\left[X_{i} (X_{i} - \theta_1)^{2} + X_{i} (X_{j} - \theta_1)^{2} \right] \\
    &= \E[(X_{i} - \theta_1 + \theta_1) (X_{i} - \theta_1)^{2}] + \theta_1 \theta_2 \\
    &= \theta_3 + 2 \theta_1 \theta_2
\end{aligned}
$$

and 

$$
\begin{aligned}
    \E\left[X_{k} (X_{i} - X_{j})^{2} \right] &= \E\left[X_{k} (X_{i} - \theta_1)^{2} + X_{k} (X_{j} - \theta_1)^{2} \right] \\
    &= \E[(X_{k} - \theta_1 + \theta_1) (X_{i} - \theta_1)^{2}] + \theta_1 \theta_2 \\
    &= 2 \theta_1 \theta_2.
\end{aligned}
$$

Thus, we have 

$$
\begin{aligned}
    \Cov(\overline{X},\ S^{2}) &= \frac{1}{2 n^{2} (n - 1)} \Bigg[2 n (n - 1) (\theta_3 + 2 \theta_1 \theta_2) \\ &\qquad + n (n - 1) (n - 2) 2 \theta_1 \theta_2 \Bigg] - \theta_1 \theta_2 \\
    &= \frac{1}{n} [\theta_3 + n \theta_1 \theta_2] - \theta_1 \theta_2 \\
    &= \frac{1}{n} \theta_3.
\end{aligned}
$$

Hence, $\Cov(\overline{X},\ S^{2}) = 0$ *iff* $\theta_3 = 0$.
</details>

<br>

*5.10* (p.257) Let $X_1,\ \cdots,\ X_n$ be a random sample from a $N(\mu,\ \sigma^{2})$ population.

(a) Find expressions for $\theta_1,\ \cdots,\ \theta_4$, as defined in Exercise 5.8, in terms of $\mu$ and $\sigma^{2}$.

<details>
<summary>Solution: </summary>

It is trivial that $\theta_1 = \mu$ and $\theta_2 = \sigma^{2}$. For the others, we can calculate using Stein’s Lemma: 

Let $g(X) = (X - \mu)^{2}$, we have 

$$
\theta_3 = \E[(X - \mu)^{3}] = \sigma^{2} \E[2 X (X - \mu)] = 0.
$$

Let $g(X) = (X - \mu)^{3}$, we have 

$$
\theta_4 = \E[(X - \mu)^{4}] = \sigma^{2} \E[3 (X - \mu)^{2}] = 3 \sigma^{4}.
$$
</details>

<br>

(b) Use the results of Exercise 5.8, together with the results of part (a), to calculate $\Var(S^{2})$.

<details>
<summary>Solution: </summary>

$$
\Var(S^{2}) = \frac{1}{n} \left(3 \sigma^{4} - \frac{n - 3}{n - 1} \sigma^{4} \right) = \frac{2}{n - 1} \sigma^{4}.
$$
</details>

<br>

(c) Calculate $\Var(S^{2})$ a completely different (and easier) way: Use the fact that $(n - 1)S^{2} / \sigma^{2} \sim \chi_{n - 1}^{2}$.

<details>
<summary>Solution: </summary>

$$
\begin{aligned}
    \Var[(n - 1) S^{2} / \sigma^{2}] &= 2 (n - 1) \\
    \frac{(n - 1)^{2}}{\sigma^{4}}\Var(S^{2}) &= 2 (n - 1) \\
    \Var(S^{2}) &= \frac{2}{n - 1} \sigma^{4}.
\end{aligned}
$$
</details>

<br>

*5.18* (p.258) Let $X$ be a random variable with a Student’s $t$ distribution with $p$ degrees of freedom.

(a) Derive the mean and variance of $X$.

<details>
<summary>Solution: </summary>

Let $Z \sim N(0,\ 1)$ and $Y \sim \chi_1^{2}$ be independent random variables, we can write $X = \frac{Z}{\sqrt{Y / p}}$. Thus, we have 

$$
\E[X] = \frac{\E[Z]}{\E[\sqrt{Y / p}]} = 0,\quad p > 1.
$$

Since $Z^{2} \sim \chi_1^{2}$, $X^{2} = \frac{Z^{2}}{Y / p} \sim F_{1,\ p}$ and we have 

$$
\E[X^{2}] = \frac{p}{p - 2},\quad p > 2,
$$

which means $\Var(X) = \frac{p}{p - 2},\ p > 2$.
</details>

<br>

(b) Show that $X^{2}$ has an $F$ distribution with $1$ and $p$ degrees of freedom.

<details>
<summary>Proof: </summary>

Since $Z^{2} \sim \chi^{2}(1)$, $X^{2} = \frac{Z^{2}}{Y / p} \sim F_{1,\ p}$.
</details>

<br>

(c) Let $f(x \mid p)$ denote the pdf of $X$. Show that 

$$
\lim\limits_{p \to \infty} f(x \mid p) \to \frac{1}{\sqrt{2 \pi}}e^{-x^{2} / 2}
$$

at each value of $x$, $-\infty < x < \infty$. This correctly suggests that as $p \to \infty$, $X$ converges in distribution to a $N(0,\ 1)$ random variable. (*Hint*: Use Stirling’s Formula.)

<details>
<summary>Proof: </summary>

The pdf of $X$ is 

$$
f(x \mid p) = \frac{\Gamma((p + 1) / 2)}{\Gamma(p / 2) \sqrt{p \pi}} \left(1 + \frac{x^{2}}{p} \right)^{-\frac{p + 1}{2}}.
$$

From Stirling’s Formula, we have

$$
\begin{aligned}
    \lim\limits_{p \to \infty} f(x \mid p) &= \lim\limits_{p \to \infty} \frac{\Gamma((p + 1) / 2)}{\Gamma(p / 2) \sqrt{p \pi}} \left(1 + \frac{x^{2}}{p} \right)^{-\frac{p + 1}{2}} \\
    &= e^{-x^{2} / 2} \lim\limits_{p \to \infty} \frac{\sqrt{2 \pi} [(p - 1) / 2]^{(p - 1) / 2 + 1 / 2} e^{-(p - 1) / 2}}{\sqrt{2 \pi} [(p - 2) / 2]^{(p - 2) / 2 + 1 / 2} e^{-(p - 2) / 2}} \frac{1}{\sqrt{p \pi}} \\
    &= \frac{e^{-1 / 2} e^{-x^{2} / 2}}{\sqrt{\pi}} \lim\limits_{p \to \infty} \frac{[(p - 1) / 2]^{(p - 1) / 2 + 1 / 2}}{[(p - 2) / 2]^{(p - 2) / 2 + 1 / 2} \sqrt{p}} \\
    &= \frac{e^{-1 / 2} e^{-x^{2} / 2}}{\sqrt{\pi}} \frac{e^{1 / 2}}{\sqrt{2}} \\
    &= \frac{1}{\sqrt{2 \pi}} e^{-x^{2} / 2}.
\end{aligned}
$$
</details>

<br>

(d) Use the results of parts (a) and (b) to argue that, as $p \to \infty$, $X^{2}$ converges in distribution to a $\chi_1^{2}$ random variable.

<details>
<summary>Solution: </summary>

Since $X$ converges in distribution to an $N(0,\ 1)$ random variable as $p \to \infty$, $X^{2}$ converges in distribution to a $\chi_1^{2}$ random variable.
</details>

<br>

(e) What might you conjecture about the distributional limit, as $p \to \infty$, of $q F_{q,\ p}$?

<details>
<summary>Solution: </summary>

Let $X_{i} \sim t_{p},\ i=1,\ 2,\ \cdots,\ q$, then we have $\sum\limits_{i=1}^{q} X_{i}^{2} \sim q F_{q,\ p}$. From (d) we know that as $p \to \infty$, $X_{i}^{2}$ converges in distribution to a $\chi_1^{2}$ random variable. Thus, we conjecture that as $p \to \infty$, $q F_{q,\ p}$ converges in distribution to a $\chi_{q}^{2}$ random variable.
</details>

<br>

*5.23* (p.259) Let $U_i,\ i=1,\ 2,\ \cdots$, be independent $\text{Uniform}(0,\ 1)$ random variables, and let $X$ have distribution 

$$
P(X = x) = \frac{c}{x!},\quad x=1,\ 2,\ 3,\ \cdots,
$$

where $c = 1 / (e - 1)$. Find the distribution of 

$$
Z = \min \left\{U_1,\ \cdots,\ U_{X} \right\}.
$$

(*Hint*: Note that the distribution of $Z \mid X = x$ is that of the first-order statistic from a sample of size $x$.)

<details>
<summary>Solution: </summary>

Since 

$$
\begin{aligned}
    P(Z > z) &= \sum\limits_{x=1}^{\infty} P(Z > z \mid x) P(X = x) \\
    &= \sum\limits_{x=1}^{\infty} P(U_1 > z,\ \cdots,\ U_x > z) \frac{1 / (e - 1)}{x!} \\
    &= \frac{1}{e - 1} \sum\limits_{x=1}^{\infty} (1 - z)^{x} \frac{1}{x!} \\
    &= \frac{e^{1 - z}}{e - 1} \left[\sum\limits_{x=0}^{\infty} \frac{e^{-(1 - z)} (1 - z)^{x}}{x!} - e^{-(1 - z)} \right] \\
    &= \frac{e^{1 - z}}{e - 1} \left[1 - e^{-(1 - z)} \right] \\
    &= \frac{e^{1 - z} - 1}{e - 1},\quad 0 < z < 1,
\end{aligned}
$$

we have 

$$
F_{Z}(z) = P(X \leqslant z) = 1 - \frac{e^{1 - z} - 1}{e - 1} = \frac{e - e^{1 - z}}{e - 1},\quad 0 < z < 1.
$$
</details>

<br>

*5.24* (p.259) Let $X_1,\ \cdots,\ X_n$ be a random sample from a population with pdf 

$$
f_{X}(x) = \begin{cases}
    1 / \theta &\text{if } 0 < x < \theta \\
    0 &\text{otherwise}.
\end{cases}
$$

Let $X_{(1)} < \cdots < X_{(n)}$ be the order statistics. Show that $X_{(1)} / X_{(n)}$ and $X_{(n)}$ are independent random variables.

<details>
<summary>Proof: </summary>

See [exercises in 5.4](#exercises).
</details>

<br>

*5.35* (p.261) Stirling’s Formula (derived in Exercise 1.28), which gives an approximation for factorials, can be easily derived using the CLT.

(a) Argue that, if $X_{i} \sim \text{Exponential}(1),\ i = 1,\ 2,\ \cdots$, all independent, then for every $x$, 

$$
P\left(\frac{\overline{X}_n - 1}{1 / \sqrt{n}} \leqslant x \right) \to P(Z \leqslant x),
$$

where $Z$ is a standard normal random variable.

<details>
<summary>Proof: </summary>

The mean and variance of $X_{i}$ is $\E[X_{i}] = 1$ and $\Var(X_{i}) = 1$ respectively. By CLT we have 

$$
\sqrt{n} \frac{\overline{X}_n - 1}{1} \stackrel{d}{\longrightarrow} N(0,\ 1),
$$

which means 

$$
P\left(\frac{\overline{X}_n - 1}{1 / \sqrt{n}} \leqslant x \right) \to P(Z \leqslant x),\quad \forall x.
$$
</details>

<br>

(b) Show that differentiating both sides of the approximation in part (a) suggests 

$$
\frac{\sqrt{n}}{\Gamma(n)} (x \sqrt{n} + n)^{n - 1} e^{-(x \sqrt{n} + n)} \approx \frac{1}{\sqrt{2 \pi}} e^{-x^{2} / 2}
$$

and that $x = 0$ gives Stirling’s Formula.

<details>
<summary>Proof: </summary>

For the RHS, differentiating the cdf of standard normal would result in the pdf of it, i.e. 

$$
\frac{\mathrm{d}P(Z\leqslant x)}{\mathrm{d}x} = \frac{1}{\sqrt{2 \pi}} e^{-x^{2} / 2}.
$$

For the LHS, note that the sum of $\text{Exponential}(1)$ is a $\text{Gamma}(n,\ 1)$, which means 

$$
\begin{aligned}
    \frac{\mathrm{d}P\left(\frac{\overline{X}_{n} - 1}{1 / \sqrt{n}} \leqslant x \right)}{\mathrm{d}x} &= \frac{\mathrm{d}P(\sum_{i=1}^{n} X_{i} \leqslant n + \sqrt{n} x)}{\mathrm{d}x}\\
    &= \frac{\sqrt{n}}{\Gamma(n)} (x \sqrt{n} + n)^{n - 1} e^{-(x \sqrt{n} + n)}.
\end{aligned}
$$

Thus, as $n \to \infty$, we can write 

$$
\frac{\sqrt{n}}{\Gamma(n)} (x \sqrt{n} + n)^{n - 1} e^{-(x \sqrt{n} + n)} \approx \frac{1}{\sqrt{2 \pi}} e^{-x^{2} / 2}
$$

Taking $x = 0$, we have 

$$
\frac{\sqrt{n}}{\Gamma(n)} n^{n - 1} e^{-n} = \frac{n^{n + 1 / 2}}{n!} e^{-n} \approx \frac{1}{\sqrt{2 \pi}},
$$

which means 

$$
n! \approx \sqrt{2 \pi} n^{n + 1 / 2} e^{-n}.
$$
</details>

<br>

*5.41* (p.262) Prove Theorem 5.5.13; that is, show that 

$$
P(\left\vert X_n - \mu \right\vert > \epsilon) \to 0 \text{ for every } \epsilon \iff P(X_n \leqslant x) \to 
\begin{cases}
    0,\ &\text{if } x < \mu \\
    1,\ &\text{if } x \geqslant \mu.
\end{cases}
$$

(a) Set $\epsilon = \left\vert x - \mu \right\vert$ and show that if $x > \mu$, then $P(X_n \leqslant x) \geqslant P(\left\vert X_n - \mu \right\vert \leqslant \epsilon)$, while if $x < \mu$, then $P(X_n \leqslant x) \leqslant P(\left\vert X_n - \mu \right\vert \geqslant \epsilon).$ Deduce the $\implies$ implication.

<details>
<summary>Proof: </summary>

If $P(\left\vert X_n - \mu \right\vert > \epsilon) \to 0$ for every $\epsilon$, then set $\epsilon = \left\vert x - \mu \right\vert$, we have 

$$
P(\left\vert X_n - \mu \right\vert \leqslant \left\vert x - \mu \right\vert) \to 1.
$$

If $x \geqslant \mu$, then 

$$
\begin{aligned}
    P(\left\vert X_n - \mu \right\vert \leqslant \left\vert x - \mu \right\vert) &= P(\left\vert X_n - \mu \right\vert \leqslant x - \mu) \\
    &= P(X_n - \mu \leqslant x - \mu) + P(\mu - X_n \leqslant x - \mu) \\
    &\leqslant P(X_n \leqslant x) \to 1.
\end{aligned}
$$

Similarly, if $x < \mu$, then 

$$
\begin{aligned}
    P(\left\vert X_n - \mu \right\vert \leqslant \left\vert x - \mu \right\vert) &= P(\left\vert X_n - \mu \right\vert \leqslant \mu - x) \\
    &= P(X_n - \mu \leqslant \mu - x) + P(\mu - X_n \leqslant \mu - x) \\
    &\geqslant P(X_n \geqslant x) \to 0.
\end{aligned}
$$
</details>

<br>

(b) Use the fact that $\left\{x: \left\vert x - \mu \right\vert > \epsilon \right\} = \left\{x: x - \mu < -\epsilon \right\} \cup \left\{x: x - \mu > \epsilon \right\}$ to deduce the $\impliedby$ implication.

<details>
<summary>Proof: </summary>

W.L.O.G., consider every $\epsilon > 0$, 

$$
\begin{aligned}
    P(\left\vert X_n - \mu \right\vert > \epsilon) &= P(X_n - \mu > \epsilon) + P(\mu - X_n > \epsilon) \\
    &= P(X_n > \mu + \epsilon) + P(X_n < \mu - \epsilon).
\end{aligned}
$$

Since $P(X_n \leqslant x) \to 0$ for $x < \mu$, we have 

$$
P(\left\vert X_n - \mu \right\vert > \epsilon) \leqslant P(X_n < \mu - \epsilon) \to 0.
$$

Similarly, since $P(X_n \leqslant x) \to 1$ for $x \geqslant \mu$, we have 

$$
P(\left\vert X_n - \mu \right\vert > \epsilon) \leqslant P(X_n > \mu + \epsilon) = 1 - P(X_n \leqslant \mu + \epsilon) \to 0,
$$

and thus 

$$
P(\left\vert X_n - \mu \right\vert > \epsilon) \to 0,\quad \forall \epsilon.
$$
</details>

<br>

*5.42* (p.262) Similar to Example 5.5.11, let $X_1,\ X_2,\ \cdots$ be i.i.d. and $X_{(n)} = \underset{1 \leqslant i \leqslant n}{\max} ~ X_{i}$.

(a) If $X_{i} \sim \text{Beta}(1,\ \beta)$, find a value of $\nu$ so that $n^{\nu} (1 - X_{(n)})$ converges in distribution.

<details>
<summary>Solution: </summary>

We can first write 

$$
\begin{aligned}
    P(1 - X_{(n)} \leqslant x) &= P(X_{(n)} \geqslant 1 - x) \\
    &= 1 - P(X_{(n)} < 1 - x) \\
    &= 1 - (1 - x^{\beta})^{n}.
\end{aligned}
$$

Then, let $x = t n^{-1 / \beta}$, we have 

$$
P(1 - X_{(n)} \leqslant x) = 1 - (1 - t^{\beta} / n)^{n} \to 1 - e^{-t^{\beta}},
$$

which means $P[n^{1 / \beta} (1 - X_{(n)}) \leqslant t] \to 1 - e^{-t^{\beta}}$ for $t > 0$. Since $1 - e^{-t^{\beta}}$ is a cdf, we conclude that $n^{1 / \beta} (1 - X_{(n)})$ converges in distribution, i.e., $\nu = \frac{1}{\beta}$.
</details>

<br>

(b) If $X_{i} \sim \text{Exponential}(1)$, find a sequence $a_n$ so that $X_{(n)} - a_n$ converges in distribution.

<details>
<summary>Solution:</summary>

We can first write 

$$
P(X_{(n)} - a_n \leqslant x) = \left[1 - e^{-(x + a_n)} \right]^{n}.
$$

Let $a_n = \log n$, we have 

$$
P(X_{(n)} - a_n \leqslant x) = \left(1 - e^{-x} / n \right)^{n} \to e^{-e^{-x}}.
$$

Since $e^{-e^{-x}}$ is a cdf, we conclude that $X_{(n)} - \log n$ converges in distribution, i.e., $a_n = \log n$.
</details>

<br>

*5.64* (p.265-266) A technique similar to Accept/Reject is *importance sampling*, which is quite useful to calculating features of a distribution. Suppose that $X \sim f$, but the pdf $f$ is difficult to simulate from. Generate $Y_1,\ Y_2,\ \cdots,\ Y_m$, i.i.d. from $g$, and, for any function $h$, calculate $\frac{1}{m}\sum_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)}h(Y_i)$. We assume that the supports of $f$ and $g$ are the same and $\Var(h(X)) < \infty$.

(a) Show that $\E\left[\frac{1}{m}\sum_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)} h(Y_i) \right]  = \E[h(X)]$.

<details>
<summary>Proof: </summary>

Denote the support of $X$ and $Y$ as $S_X$ and $S_Y$ respectively, we have 

$$
\begin{aligned}
    \E\left[\frac{1}{m} \sum\limits_{i=1}^m \frac{f(Y_i)}{g(Y_i)} h(Y_i)\right] &= \frac{1}{m} \sum_{i=1}^m \int_{S_Y} \frac{f(Y_i)}{g(Y_i)} h(Y_i) g(Y_i) ~ \mathrm{d}Y_i \\
    &= \frac{1}{m} \sum\limits_{i=1}^m \int_{S_Y} f(Y_i) h(Y_i) ~ \mathrm{d}Y_i \\
    &= \frac{1}{m} \sum\limits_{i=1}^m \int_{S_X} f(X) h(X) ~ \mathrm{d}X \\
    &= \frac{1}{m} \sum\limits_{i=1}^m \E[h(X)] \\
    &= \E[h(X)]
\end{aligned}
$$
</details>

<br>

(b) Show that $\frac{1}{m} \sum_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)} h(Y_i) \to \E[h(X)]$ in probability.

<details>
<summary>Proof: </summary>

From (a) we have already known that $\E\left[\frac{1}{m}\sum_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)} h(Y_i) \right] = \E[h(X)] < \infty$, by SLLN we have 

$$
\frac{1}{m} \sum_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)} h(Y_i) \stackrel{p}{\longrightarrow} \E[h(X)].
$$
</details>

<br>

(c) Although the estimator of part (a) has the correct expectation, in practice the estimator 

$$
\sum\limits_{i=1}^{m} \left(\frac{f(Y_i) / g(Y_i)}{\sum_{j=1}^{m} f(Y_j) / g(Y_j)} \right) h(Y_i)
$$

is preferred. Show that this estimator converges in probability to $\E[h(X)]$. Moreover, show that if $h$ is constant, this estimator is superior to the one in part (a). (Casella and Robert 1996 further explore the properties of this estimator.)

<details>
<summary>Proof: </summary>

Since $\E\left[\frac{f(Y_i)}{g(Y_i)} \right] = \int_{-\infty}^{\infty} \frac{f(y)}{g(y)} g(y) ~\mathrm{d}y = 1 < \infty$, by SLLN we know that 

$$
M := \frac{1}{m} \sum\limits_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)} \stackrel{p}{\longrightarrow} 1.
$$

Then, $\forall \epsilon > 0$ we have 

$$
\begin{aligned}
    P\left(\left\vert \frac{1}{M} - 1 \right\vert < \epsilon \right) &= P\left(\left\vert 1 - M \right\vert < \epsilon \left\vert M \right\vert \right) \\
    &= P(\left\vert 1 - M \right\vert < \epsilon \left\vert M \right\vert,\ \left\vert M \right\vert \geqslant 1) \\ &\qquad + P(\left\vert 1 - M \right\vert < \epsilon \left\vert M \right\vert,\ \left\vert M \right\vert < 1) \\
    &\geqslant P(\left\vert 1 - M \right\vert < \epsilon) \to 1
\end{aligned}
$$

as $m \to \infty$. Thus, we have $\frac{1}{M} \stackrel{p}{\longrightarrow} 1$.

Note that the new estimator can be written as 

$$
\sum\limits_{i=1}^{m} \left(\frac{f(Y_i) / g(Y_i)}{\sum_{j=1}^{m} f(Y_j) / g(Y_j)} \right) h(Y_i) = \frac{1}{m}\sum_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)} h(Y_i) \frac{1}{M}.
$$

Therefore, by Slutsky’s Theorem we obtain 

$$
\sum\limits_{i=1}^{m} \left(\frac{f(Y_i) / g(Y_i)}{\sum_{j=1}^{m} f(Y_j) / g(Y_j)} \right) h(Y_i) \stackrel{p}{\longrightarrow} \E[h(X)].
$$

If $h$ is a constant, then the variance of the new estimator is 

$$
\Var\left(\sum\limits_{i=1}^{m} \left(\frac{f(Y_i) / g(Y_i)}{\sum_{j=1}^{m} f(Y_j) / g(Y_j)} \right) h(Y_i) \right) = \Var(h) = 0,
$$

while that of the estimator in part (a) is 

$$
\Var\left(\frac{1}{m}\sum_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)} h(Y_i) \right) = \frac{h^{2}}{m^{2}}  \Var\left(\sum\limits_{i=1}^{m} \frac{f(Y_i)}{g(Y_i)} \right) \geqslant 0.
$$

Hence, the new estimator is superior to the one in part (a).
</details>

<br>

*5.67* (p.266) In many instances the Metropolis Algorithm is the algorithm of choice because either (i) there are no obvious candidate densities that satisfy the Accept/Reject supremum condition, or (ii) the supremum condition is difficult to verify, or (iii) laziness leads us to substitute computing power for brain power.

For each of the following situations show how to implement the Metropolis Algorithm to generate a sample of size 100 from the specified distribution.

(a) $X \sim \frac{1}{\sigma} f[(x - \mu) / \sigma]$, $f=$ Student’s $t$ with $\nu$ degrees of freedom, $\nu$, $\mu$, and $\sigma$ known

<details>
<summary>Solution: </summary>

We want to generate $X = \sigma Z + \mu$ where $Z \sim \text{student’s t}(\nu)$. The pdf of $Z$ is 

$$
f_{Z}(z) = \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\Gamma\left(\frac{\nu}{2}\right)} \frac{1}{\sqrt{\nu \pi}} \frac{1}{\left(1+\left(\frac{z^2}{\nu}\right)\right)^{(v+1) / 2}}.
$$

The mean and variance of $Z$ is $\E[Z] = 0$ and $\Var(Z) = \frac{\nu}{\nu - 2}$ respectively. Thus, we can generate a sample by the following steps: 

0. Generate $V_i \sim N(0,\ \nu / (\nu - 2))$. Set $Z_0 = V$;

For i = 1, 2, ..., 100: 

1. Generate $U_i \sim \text{Uniform}(0,\ 1)$, $V_i \sim N(0,\ \nu / (\nu - 2))$, and calculate 

    $$
    \rho_i = \min \left\{\frac{f_{X}(V_i)}{f_{V}(V_i)} \cdot \frac{f_{V}(Z_{i - 1})}{f_{X}(Z_{i - 1})},\ 1 \right\};
    $$

2. Set 

    $$
    Z_i = 
    \begin{cases}
        V_i,\ &\text{if } U_i \leqslant \rho_i \\
        Z_{i - 1},\ &\text{if } U_i > \rho_i.
    \end{cases}
    $$
</details>

<br>

(b) $X \sim \text{Log-Normal}(\mu,\ \sigma^{2})$, $\mu$, $\sigma^{2}$ known

<details>
<summary>Solution: </summary>

The pdf of $X$ is given by 

$$
\frac{1}{\sqrt{2 \pi} \sigma} \frac{e^{-(\log x - \mu)^{2} / 2 \sigma^{2}}}{x}.
$$

The mean and variance of $X$ is $\E[X] = e^{\mu + \sigma^{2} / 2}$ and $\Var(X) = e^{2 (\mu + \sigma^{2})} - e^{2 \mu + \sigma^{2}}$ respectively.

Let $V \sim \text{Gamma}(\alpha,\ \beta)$ where 

$$
\alpha = \frac{\left(e^{\mu+\left(\sigma^2 / 2\right)}\right)^2}{e^{2\left(\mu + \sigma^2\right)}-e^{2 \mu + \sigma^2}},\quad \text{ and } \quad \beta = \frac{e^{2\left(\mu + \sigma^2\right)}-e^{2 \mu + \sigma^2}}{e^{\mu + \left(\sigma^2 / 2\right)}},
$$

which has the same mean and variance as $X$. Thus, we can generate a sample by the following steps: 

0. Generate $V_i \sim \text{Gamma}(\alpha,\ \beta)$. Set $Z_0 = V$;

For i = 1, 2, ..., 100: 

1. Generate $U_i \sim \text{Uniform}(0,\ 1)$, $V_i \sim \text{Gamma}(\alpha,\ \beta)$, and calculate 

    $$
    \rho_i = \min \left\{\frac{f_{X}(V_i)}{f_{V}(V_i)} \cdot \frac{f_{V}(Z_{i - 1})}{f_{X}(Z_{i - 1})},\ 1 \right\};
    $$

2. Set 

    $$
    Z_i = 
    \begin{cases}
        V_i,\ &\text{if } U_i \leqslant \rho_i \\
        Z_{i - 1},\ &\text{if } U_i > \rho_i.
    \end{cases}
    $$
</details>

<br>

(c) $X \sim \text{Weibull}(\alpha,\ \beta)$, $\alpha$, $\beta$ known

<details>
<summary>Solution: </summary>

The pdf of $X$ is given by 

$$
f_{X}(x) = \frac{\alpha}{\beta} e^{-x^{\alpha} / \beta} x^{\alpha - 1}.
$$

Let $V \sim \text{Exponential}(\beta)$, we can generate a sample by the following steps:

0. Generate $V_i \sim \text{Exponential}(\beta)$. Set $Z_0 = V$;

For i = 1, 2, ..., 100: 

1. Generate $U_i \sim \text{Uniform}(0,\ 1)$, $V_i \sim \text{Exponential}(\beta)$, and calculate 

    $$
    \rho_i = \min \left\{\frac{f_{X}(V_i)}{f_{V}(V_i)} \cdot \frac{f_{V}(Z_{i - 1})}{f_{X}(Z_{i - 1})},\ 1 \right\};
    $$

2. Set 

    $$
    Z_i = 
    \begin{cases}
        V_i,\ &\text{if } U_i \leqslant \rho_i \\
        Z_{i - 1},\ &\text{if } U_i > \rho_i.
    \end{cases}
    $$
</details>

<br>

*5.69* (p.267) Show that the pdf $f_{Y}(y)$ is a *stable point* of the Metropolis Algorithm. That is, if $Z_i \sim f_{Y}(y)$, then $Z_{i + 1} \sim f_{Y}(y)$.

*Hints*: Let $w(v,\ z) = \frac{f_{Y}(v) f_{V}(z)}{f_{V}(y) f_{Y}(z)}$, and then $\rho(v,\ z) = \min \left\{w(v,\ z),\ 1 \right\}$. You need to prove that 

$$
Z_i \sim f_{Y}(y) \implies P(Z_{i + 1} \leqslant a) = P(Y \leqslant a).
$$

<details>
<summary>Proof: </summary>

Let $w(v,\ z) = \frac{f_{Y}(v) f_{V}(z)}{f_{V}(y) f_{Y}(z)}$, and then $\rho(v,\ z) = \min \left\{w(v,\ z),\ 1 \right\}$. W.T.S. 

$$
Z_i \sim f_{Y}(y) \implies P(Z_{i + 1} \leqslant a) = P(Y \leqslant a).
$$

First, we can write 

$$
P(Z_{i + 1} \leqslant a) = P(V_{i + 1} \leqslant a,\ U_{i + 1} \leqslant \rho_{i + 1}) + P(Z_i \leqslant a,\ U_{i + 1} > \rho_{i + 1}) 
$$

If $Z_i \sim f_{Y}(y)$, then we have 

$$
\begin{aligned}
    P(Z_{i + 1} \leqslant a) &= P(V \leqslant a,\ U \leqslant \rho(V,\ Y)) + P(Y \leqslant a,\ U > \rho(V,\ Y)) \\
    &= P(V \leqslant a,\ U \leqslant \rho(V,\ Y)) + P(Y \leqslant a) - P(Y \leqslant a,\ U \leqslant \rho(V,\ Y)),
\end{aligned}
$$

which means our problem turns into proving 

$$
P(V \leqslant a,\ U \leqslant \rho(V,\ Y)) = P(Y \leqslant a,\ U \leqslant \rho(V,\ Y)).
$$

Then, we can write 

$$
\begin{aligned}
    P(V \leqslant a,\ U \leqslant \rho(V,\ Y)) &= \int_{-\infty}^{a} \int_{-\infty}^{\infty} \rho(v,\ y) f_{Y}(y) f_{V}(v) ~\mathrm{d}y ~\mathrm{d}v \\
    &= \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(v,\ y) \leqslant 1) \frac{f_{Y}(v) f_{V}(y)}{f_{V}(v) f_{Y}(y)} f_{Y}(y) f_{V}(v) ~\mathrm{d}y ~\mathrm{d}v \\ &\qquad + \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(v,\ y) \geqslant 1) f_{Y}(y) f_{V}(v) ~\mathrm{d}y ~\mathrm{d}v \\
    &= \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(v,\ y) \leqslant 1) f_{Y}(v) f_{V}(y)  ~\mathrm{d}y ~\mathrm{d}v \\ &\qquad + \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(v,\ y) \geqslant 1) f_{Y}(y) f_{V}(v) ~\mathrm{d}y ~\mathrm{d}v.
\end{aligned}
$$

Note that $w(v,\ y) = \frac{1}{w(y,\ v)}$, and thus the first term can be rewritten as 

$$
\begin{aligned}
    \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(v,\ y) \leqslant 1) f_{Y}(v) f_{V}(y)  ~\mathrm{d}y ~\mathrm{d}v &= \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(y,\ v) \geqslant 1) f_{Y}(v) f_{V}(y)  ~\mathrm{d}y ~\mathrm{d}v \\
    &= P(Y \leqslant a,\ U \leqslant \rho(V,\ Y),\ \rho(V,\ Y) = 1).
\end{aligned}
$$

Similarly, the second term can be rewritten as 

$$
\begin{aligned}
    \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(v,\ y) \geqslant 1) f_{Y}(y) f_{V}(v) ~\mathrm{d}y ~\mathrm{d}v &= \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(y,\ v) \leqslant 1) f_{Y}(y) f_{V}(v) ~\mathrm{d}y ~\mathrm{d}v \\
    &= \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(y,\ v) \leqslant 1) \frac{f_{Y}(y) f_{V}(v)}{f_{V}(y) f_{Y}(v)} f_{V}(y) f_{Y}(v) ~\mathrm{d}y ~\mathrm{d}v \\
    &= \int_{-\infty}^{a} \int_{-\infty}^{\infty} I(w(y,\ v) \leqslant 1) w(y,\ v) f_{V}(y) f_{Y}(v) ~\mathrm{d}y ~\mathrm{d}v \\
    &= P(Y \leqslant a,\ U \leqslant \rho(V,\ Y),\ \rho(V,\ Y) \leqslant 1).
\end{aligned}
$$

Hence, add them together we have 

$$
\begin{aligned}
    P(V \leqslant a,\ U \leqslant \rho(V,\ Y)) &= P(Y \leqslant a,\ U \leqslant \rho(V,\ Y),\ \rho(V,\ Y) = 1) + P(Y \leqslant a,\ U \leqslant \rho(V,\ Y),\ \rho(V,\ Y) \leqslant 1) \\
    &= P(Y \leqslant a,\ U \leqslant \rho(V,\ Y)),
\end{aligned}
$$

which means 

$$
P(Z_{i + 1} \leqslant a) = P(Y \leqslant a).
$$
</details>