# 5 Properties of a Random Sample

## Assignments

### Textbook Exercises

*5.6* (p.256) If $X$ has pdf $f_{X}(x)$ and $Y$, independent of $X$, has pdf $f_{Y}(y)$, establish formulas, similar to (5.2.3), for the random variable $Z$ in each of the following situations.

(a) $Z = X - Y$

(b) $Z = X Y$

(c) $Z = X / Y$

*5.8* (p.257) Let $X_1,\ \cdots,\ X_n$ be a random sample, where $\overline{X}$ and $S^{2}$ are calculated in the usual way.

(a) Show that 

$$
S^{2} = \frac{1}{2 n (n - 1)} \sum\limits_{i=1}^{n} \sum\limits_{i=1}^{n} (X_{i} - X_{j})^{2}.
$$

Assume now that the $X_{i}$s have a finite fourth moment, and denote $\theta_1 = \E[X_{i}]$, $\theta_j = \E[(X_{i} - \theta_1)^{j}]$, $j = 2,\ 3,\ 4$.

(b) Show that $\Var(S^{2}) = \frac{1}{n}(\theta_4 - \frac{n - 3}{n - 1}\theta_2^{2})$.

(c) Find $\Cov(\overline{X},\ S^{2})$ in terms of $\theta_1,\ \cdots,\ \theta_4$. Under what conditions is $\Cov(\overline{X},\ S^{2}) = 0$?

*5.10* (p.257) Let $X_1,\ \cdots,\ X_n$ be a random sample from a $N(\mu,\ \sigma^{2})$ population.

(a) Find expressions for $\theta_1,\ \cdots,\ \theta_4$, as defined in Exercise 5.8, in terms of $\mu$ and $\sigma^{2}$.

(b) Use the results of Exercise 5.8, together with the results of part (a), to calculate $\Var(S^{2})$.

(c) Calculate $\Var(S^{2})$ a completely different (and easier) way: Use the fact that $(n - 1)S^{2} / \sigma^{2} \sim \chi_{n - 1}^{2}$.

*5.18* (p.258) Let $X$ be a random variable with a Student’s $t$ distribution with $p$ degrees of freedom.

(a) Derive the mean and variance of $X$.

(b) Show that $X^{2}$ has an $F$ distribution with $1$ and $p$ degrees of freedom.

(c) Let $f(x \mid p)$ denote the pdf of $X$. Show that 

$$
\lim\limits_{p \to \infty} f(x \mid p) \to \frac{1}{\sqrt{2 \pi}}e^{-x^{2} / 2}
$$

at each value of $x$, $-\infty < x < \infty$. This correctly suggests that as $p \to \infty$, $X$ converges in distribution to a $N(0,\ 1)$ random variable. (*Hint*: Use Stirling’s Formula.)

(d) Use the results of parts (a) and (b) to argue that, as $p \to \infty$, $X^{2}$ converges in distribution to a $\chi_1^{2}$ random variable.

(e) What might you conjecture about the distributional limit, as $p \to \infty$, of $q F_{q,\ p}$?

*5.23* (p.259) Let $U_i,\ i=1,\ 2,\ \cdots$, be independent $\text{Uniform}(0,\ 1)$ random variables, and let $X$ have distribution 

$$
P(X = x) = \frac{c}{x!},\quad x=1,\ 2,\ 3,\ \cdots,
$$

where $c = 1 / (e - 1)$. Find the distribution of 

$$
Z = \min \left\{U_1,\ \cdots,\ U_{X} \right\}.
$$

(*Hint*: Note that the distribution of $Z \mid X = x$ is that of the first-order statistic from a sample of size $x$.)

*5.24* (p.259) Let $X_1,\ \cdots,\ X_n$ be a random sample from a population with pdf 

$$
f_{X}(x) = \begin{cases}
    1 / \theta &\text{if } 0 < x < \theta \\
    0 &\text{otherwise}.
\end{cases}
$$

Let $X_{(1)} < \cdots < X_{(n)}$ be the order statistics. Show that $X_{(1)} / X_{(n)}$ and $X_{(n)}$ are independent random variables.