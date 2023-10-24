# 5 Properties of a Random Sample

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

(b) Use the results of Exercise 5.8, together with the results of part (a), to calculate $\Var(S^{2})$.

<details>
<summary>Solution: </summary>

$$
\Var(S^{2}) = \frac{1}{n} \left(3 \sigma^{4} - \frac{n - 3}{n - 1} \sigma^{4} \right) = \frac{2}{n - 1} \sigma^{4}.
$$
</details>

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

(b) Show that $X^{2}$ has an $F$ distribution with $1$ and $p$ degrees of freedom.

<details>
<summary>Proof: </summary>

Since $Z^{2} \sim \chi^{2}(1)$, $X^{2} = \frac{Z^{2}}{Y / p} \sim F_{1,\ p}$.
</details>

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

(d) Use the results of parts (a) and (b) to argue that, as $p \to \infty$, $X^{2}$ converges in distribution to a $\chi_1^{2}$ random variable.

<details>
<summary>Solution: </summary>

Since $X$ converges in distribution to an $N(0,\ 1)$ random variable as $p \to \infty$, $X^{2}$ converges in distribution to a $\chi_1^{2}$ random variable.
</details>

(e) What might you conjecture about the distributional limit, as $p \to \infty$, of $q F_{q,\ p}$?

<details>
<summary>Solution: </summary>

Let $X_{i} \sim t_{p},\ i=1,\ 2,\ \cdots,\ q$, then we have $\sum\limits_{i=1}^{q} X_{i}^{2} \sim q F_{q,\ p}$. From (d) we know that as $p \to \infty$, $X_{i}^{2}$ converges in distribution to a $\chi_1^{2}$ random variable. Thus, we conjecture that as $p \to \infty$, $q F_{q,\ p}$ converges in distribution to a $\chi_{q}^{2}$ random variable.
</details>

*5.23* (p.259) Let $U_i,\ i=1,\ 2,\ \cdots$, be independent $\text{Uniform}(0,\ 1)$ random variables, and let $X$ have distribution 

$$
P(X = x) = \frac{c}{x!},\quad x=1,\ 2,\ 3,\ \cdots,
$$

where $c = 1 / (e - 1)$. Find the distribution of 

$$
Z = \min \left\{U_1,\ \cdots,\ U_{X} \right\}.
$$

(*Hint*: Note that the distribution of $Z \mid X = x$ is that of the first-order statistic from a sample of size $x$.)

Solution:

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