# Mid-term Exercises

## 2022 Fall

1. Let $X$ be a standard normal random variable and set $Y = \exp(X)$.

    (a) Find the distribution of $Y$.

    <details>
    <summary>Solution:</summary>

    Since the transformation $g(x) = e^{x}$ is increasing in $(-\infty,\ \infty)$, the pdf of $Y$ is given by 

    $$
    f_{Y}(y) = f_{X}(\log y) \frac{\mathrm{d}}{\mathrm{d}y}\log y = \frac{1}{\sqrt{2\pi}} \frac{1}{y} e^{-\frac{(\log y)^{2}}{2}} \quad y > 0.
    $$
    </details>

    <br>

    (b) Show that all the moments of $Y$ exist.

    <details>
    <summary>Proof:</summary>

    The $n$-th moment of $Y$ is 

    $$
    \E[Y^{n}] = \E[e^{nX}] = M_{X}(n) = e^{\frac{n^{2}}{2}},
    $$

    where $M_{X}(\cdot)$ is the mgf of $X$. Thus, all the moments of $Y$ exist.
    </details>

    <br>

    (c) Show that the random variable $Y$ does not have a moment generating function.

    <details>
    <summary>Proof:</summary>

    Suppose $Y$ have a mgf denoted by $M_{Y}(t)$, by definition we want to show that the expectation $\E[e^{tY}]$ does not exist for $t$ in some neighborhood of $0$. $\forall t < 0$, $\E[e^{tY}] \leqslant 1$ since $Y$ is positive. So we will focus on cases when $t > 0$.
    
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

    <br>

2. Let $X_1,\ \cdots,\ X_n$ be a random sample from a population with pdf 

    $$
    f(x) = 
    \begin{cases}
        1 / \theta,\ &\text{if } 0 < x < \theta \\
        0,\ &\text{otherwise}.
    \end{cases}
    $$

    Let $X_{(1)} < \cdots < X_{(n)}$ be the order statistics.

    (a) Show that $X_{(1)} / X_{(n)}$ and $X_{(n)}$ are independent random variables.

    <details>
    <summary>Proof:</summary>

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

    <br>

    (b) Find $\Cov(X_{(1)},\ X_{(n)})$.

    <details>
    <summary>Solution:</summary>

    From part (a) we know that the joint pdf of $X_{(1)} =: Z$ and $X_{(n)} =: Y$ is given by 

    $$
    f_{Z,\ Y}(z,\ y) = \frac{n (n - 1)}{\theta^n} (y - z)^{n - 2},\quad 0 < z < y < \theta.
    $$

    Then, we can calculate 

    $$
    \begin{aligned}
        \E[Z Y] &= \int_{0}^{\theta} \int_{0}^{y} z y \frac{n (n - 1)}{\theta^n} (y - z)^{n - 2} ~\mathrm{d}z ~\mathrm{d}y \\
        &= -\frac{n}{\theta^n} \int_{0}^{\theta} y \int_{y^{n-1}}^{0} z ~\mathrm{d}(y - z)^{n - 1} ~\mathrm{d}y \\
        &= -\frac{n}{\theta^n} \int_{0}^{\theta} y \left[z (y - z)^{n-1} \big\vert_{z=0}^{y} - \int_{0}^{y} (y - z)^{n-1} ~\mathrm{d}z \right] ~\mathrm{d}y \\
        &= -\frac{n}{\theta^n} \int_{0}^{\theta} y \left(-\frac{1}{n} y^{n} \right) ~\mathrm{d}y \\
        &= \frac{1}{\theta^n} \int_{0}^{\theta} y^{n + 1} ~\mathrm{d}y \\
        &= \frac{\theta^{2}}{n + 2}.
    \end{aligned}
    $$

    Note that the pdfs of $Z$ and $Y$ are given by 

    $$
    \begin{aligned}
        f_{Z}(z) &= \frac{n!}{(1-1)! (n-1)!} \frac{1}{\theta} \left(\frac{z}{\theta} \right)^{1-1} \left(1 - \frac{z}{\theta} \right)^{n-1} \\
        &= \frac{n (\theta - z)^{n-1}}{\theta^{n}},\quad 0 < z < \theta,
    \end{aligned}
    $$

    and 

    $$
    \begin{aligned}
        f_{Y}(y) &= \frac{n!}{(n-1)! (n-n)!} \frac{1}{\theta} \left(\frac{y}{\theta} \right)^{n-1} \left(1 - \frac{y}{\theta} \right)^{n-n} \\
        &= \frac{n y^{n - 1}}{\theta^{n}},\quad 0 < y < \theta
    \end{aligned}
    $$

    respectively. Then, we can calculate 

    $$
    \begin{aligned}
        \E[Z] &= \int_{0}^{\theta} z \frac{n (\theta - z)^{n - 1}}{\theta^{n}} ~\mathrm{d}z \\
        &= \int_{\theta^{n}}^{0} z \frac{-1}{\theta^{n}} ~\mathrm{d}(\theta - z)^{n} \\
        &= -\frac{1}{\theta^{n}}\left[z (\theta - z)^{n} \vert_{z=0}^{\theta} - \int_{0}^{\theta} (\theta - z)^{n} ~\mathrm{d}z  \right] \\
        &= \frac{1}{\theta^{n}} \int_{0}^{\theta} (\theta - z)^{n} ~\mathrm{d}z \\
        &= \frac{\theta}{n + 1},
    \end{aligned}
    $$

    and 

    $$
    \E[Y] = \int_{0}^{\theta} y \frac{n y^{n-1}}{\theta^{n}} ~\mathrm{d}y = \frac{n}{(n + 1) \theta^{n}} y^{n+1} \bigg\vert_{y=0}^{\theta} = \frac{n \theta}{n + 1}.
    $$

    Thus, the covariance of $X_{(1)}$ and $X_{(n)}$ is given by 

    $$
    \Cov(Z,\ Y) = \E[Z Y] - \E[Z] \E[Y] = \frac{\theta^{2}}{n + 2} - \frac{n \theta^{2}}{(n + 1)^{2}} = \frac{\theta^{2}}{(n + 1)^{2} (n + 2)}.
    $$
    </details>

    <br>

3. Assume that $X_{i} \sim \text{Poisson}(\lambda)$ are i.i.d. and let $Y_n = \sum_{i=1}^{n} X_{i}$.

    (a) Show that $\sqrt{n} (\frac{Y_n}{n} - \lambda)$ converge in distribution to $N(0,\ \lambda)$.

    <details>
    <summary>Proof:</summary>

    Since $X_{i} \sim \text{Poisson}(\lambda)$, we have $\E[X_{i}] = \lambda$ and $\Var(X_{i}) = \lambda$. And since the sample mean of $X_{i}$ is $\frac{1}{n} \sum_{i=1}^{n} X_{i} = \frac{1}{n} Y_n$, by CLT we have 

    $$
    \frac{1 / n \sum_{i=1}^{n} X_{i} - \lambda}{\sqrt{\lambda / n}} \xrightarrow{d} N(0,\ 1),
    $$

    i.e., 

    $$
    \sqrt{n} \left(\frac{Y_n}{n} - \lambda \right) \xrightarrow{d} N(0,\ \lambda).
    $$
    </details>

    <br>

    (b) Show that $\sqrt{Y_n} - \sqrt{n \lambda}$ converge in distribution to $N(0,\ \frac{1}{4})$ using the Slutsky theorem.

    <details>
    <summary>Proof:</summary>

    By WLLN, we have $\sqrt{Y_n / n} \xrightarrow{p} \sqrt{\lambda}$. Then, since 

    $$
    \sqrt{Y_n} - \sqrt{n \lambda} = \frac{Y_n - n \lambda}{\sqrt{Y_n} + \sqrt{n \lambda}} = \frac{\sqrt{n} (Y_n / n - \lambda)}{\sqrt{Y_n / n} + \sqrt{\lambda}},
    $$

    by Slutsky theorem we have

    $$
    \sqrt{Y_n} - \sqrt{n \lambda} \xrightarrow{d} \frac{N(0,\ \lambda)}{2 \sqrt{\lambda}} \xlongequal{d} N\left(0,\ \frac{1}{4} \right).
    $$
    </details>

    <br>

    (c) Show the result in (b) using the Delta method.

    <details>
    <summary>Proof:</summary>

    Let $g(x) = \sqrt{x}$, then $g'(\lambda) = \frac{1}{2 \sqrt{\lambda}}$. By Delta method we have 

    $$
    \sqrt{n} \left(\sqrt{\frac{Y_n}{n}} - \sqrt{\lambda} \right) \xrightarrow{d} N\left(0,\ \lambda \left(\frac{1}{2 \sqrt{\lambda}} \right)^{2} \right) \xlongequal{d} N\left(0,\ \frac{1}{4} \right).
    $$
    </details>

    <br>

4. (a) If $X$ and $Y$ are mean zero random variables with unit variance, and correlation $\rho$, establish that $\E[\max \left\{X^{2},\ Y^{2} \right\}] \leqslant 1 + \sqrt{1 - \rho^{2}}$. (*Hints*: $\max \left\{x,\ y \right\} = 1 / 2 (x + y + \left\vert x - y \right\vert)$.)

    <details>
    <summary>Proof:</summary>

    Since $X$ and $Y$ are both mean zero random variables with unit variance, we have $\E[X^{2}] = \E[Y^{2}] = 1$ and $\Cov(X,\ Y) = \rho = \E[X Y]$.

    Note that $\max \left\{X^{2},\ Y^{2} \right\} = 1 / 2 (X^{2} + Y^{2} + \left\vert X^{2} - Y^{2} \right\vert)$, which means

    $$
    \begin{aligned}
        \text{LHS} = \E[1 / 2 (X^{2} + Y^{2} + \left\vert X^{2} - Y^{2} \right\vert)] = 1 + \frac{1}{2} \E[\left\vert (X + Y) (X - Y) \right\vert].
    \end{aligned}
    $$

    Then, by Cauchy-Schwarz Inequality we have 

    $$
    \begin{aligned}
        &\phantom{=}\E[\left\vert (X + Y) (X - Y) \right\vert] \\
        &\leqslant (\E[\left\vert X + Y \right\vert^{2}])^{1 / 2} (\E[\left\vert X - Y \right\vert^{2}])^{1 / 2} \\
        &= (\E[X^{2} + 2 X Y + Y^{2}])^{1 / 2} (\E[X^{2} - 2 X Y + Y^{2}])^{1 / 2} \\
        &= (2 + 2 \E[XY])^{1 / 2} (2 - 2 \E[XY])^{1 / 2} \\
        &= 2 \sqrt{1 - \rho^{2}}.
    \end{aligned}
    $$

    Therefore, we have 

    $$
    \text{LHS} \leqslant 1 + \frac{1}{2} (2 \sqrt{1 - \rho^{2}}) = 1 + \sqrt{1 - \rho^{2}} = \text{RHS}.
    $$
    </details>

    <br>

    (b) Let $X$ and $Y$ be random variables with $\E[X] = \xi$, $\Var(X) = \tau^{2}$, and $\E[Y] = \mu$, $\Var(Y) = \sigma^{2}$, and correlation coefficient $\rho$. Please further prove that 

    $$
    P(\left\{\left\vert X - \xi \right\vert \geqslant \varepsilon \tau \right\} \cup \left\{\left\vert Y - \mu \right\vert  \right\} \geqslant \varepsilon \sigma) \leqslant \frac{1 + \sqrt{1 - \rho^{2}}}{\varepsilon^{2}}.
    $$

    <details>
    <summary>Proof:</summary> 

    $$
    \begin{aligned}
        \text{LHS} &= P\left(\left\{\left\vert \frac{X - \xi}{\tau} \right\vert \geqslant \varepsilon \right\} \cup \left\{\left\vert \frac{Y - \mu}{\sigma} \right\vert \right\} \geqslant \varepsilon \right) \\
        &= P\left(\left\{\left(\frac{X - \xi}{\tau} \right)^{2} \geqslant \varepsilon^{2} \right\} \cup \left\{\left(\frac{Y - \mu}{\sigma} \right)^{2} \right\} \geqslant \varepsilon^{2} \right) \\
        &= P\left(\max \left\{\left(\frac{X - \xi}{\tau} \right)^{2},\ \left(\frac{Y - \mu}{\sigma} \right)^{2} \right\} \geqslant \varepsilon^{2} \right). 
    \end{aligned}
    $$

    By Chebychev’s Inequality and the result in part (a) we have 

    $$
    \begin{aligned}
        &\phantom{=}P\left(\max \left\{\left(\frac{X - \xi}{\tau} \right)^{2},\ \left(\frac{Y - \mu}{\sigma} \right)^{2} \right\} \geqslant \varepsilon^{2} \right) \\
        &\leqslant \frac{\E\left[\max \left\{\left(\frac{X - \xi}{\tau} \right)^{2},\ \left(\frac{Y - \mu}{\sigma} \right)^{2} \right\} \geqslant \varepsilon^{2} \right]}{\epsilon^{2}} \\
        &\leqslant \frac{1 + \sqrt{1 - \rho^{2}}}{\varepsilon^{2}} = \text{RHS},
    \end{aligned}
    $$

    which completes the proof.
    </details>

    <br>

5. Let $X_1,\ \cdots,\ X_n$ be independent $N(\theta,\ \theta^{2}),\ \theta > 0$.

    (a) Find a minimal sufficient statistic for $\theta$,

    <details>
    <summary>Solution:</summary>

    The joint pdf of $X_1,\ \cdots,\ X_n$ is given by 

    $$
    \begin{aligned}
        f(\bm{x};\ \theta) &= (2 \pi \theta^{2})^{-\frac{n}{2}} \exp \left[- \frac{1}{2 \theta^{2}} \sum_{i=1}^{n} (x_i - \theta)^{2} \right] \\
        &= (2 \pi \theta^{2})^{-\frac{n}{2}} \exp \left[- \frac{1}{2 \theta^{2}} \left(\sum_{i=1}^{n} x_i^{2} - 2 \theta \sum_{i=1}^{n}x_i + n \theta^{2} \right) \right] \\
    \end{aligned}
    $$

    Then, for every 2 sample points $\bm{x}$ and $\bm{y}$ the ratio of joint pdfs is 

    $$
    \begin{aligned}
        \frac{f(\bm{x};\ \theta)}{f(\bm{y};\ \theta)} &= \exp \left\{- \frac{1}{2 \theta^{2}} \left[\sum_{i=1}^{n} (x_i^{2} - y_i^{2}) - 2 \theta \sum_{i=1}^{n} (x_i - y_i) \right] \right\}.
    \end{aligned}
    $$

    The ratio does not depend on $\theta$ iff $\sum_{i=1}^{n} x_i^{2} = \sum_{i=1}^{n} y_i^{2}$ and $\sum_{i=1}^{n} x_i = \sum_{i=1}^{n} y_i$, which means $(\sum_{i=1}^{n} X_{i}^{2},\ \sum_{i=1}^{n} X_{i})$ is a minimal sufficient statistic for $\theta$.
    </details>

    <br>

    (b) and show that it is not complete.

    <details>
    <summary>Proof:</summary>

    Since the mgf of $X_{i}$ is $M_{X_{i}}(t) = \E\left[e^{t X_{i}} \right] = \exp \left(\theta t + \frac{\theta^{2}}{2} t^{2} \right)$, the mgf of $\sum_{i=1}^{n} X_{i}$ is $\exp \left(n \theta t + \frac{n \theta^{2}}{2} t^{2} \right)$, which means $\sum_{i=1}^{n} X_{i} \sim N(n \theta,\ n \theta^{2})$.

    Note that $\E\left[\sum_{i=1}^{n} X_{i}^{2} \right] = n (\theta^{2} + \theta^{2}) = 2 n \theta^{2}$, and $\E\left[\left(\sum_{i=1}^{n} X_{i} \right)^{2} \right] = n \theta^{2} + n^{2} \theta^{2} = (n + 1) n \theta^{2}$. Denote $T = (T_1,\ T_2) = (\sum_{i=1}^{n} X_{i}^{2},\ \sum_{i=1}^{n} X_{i})$, we can construct 

    $$
    g(T) = \frac{T_1}{2} - \frac{T_2}{n + 1}
    $$

    to make $\E[g(T) \mid \theta] = 0,\ \forall \theta$. But this does not imply that $g(T) = 0$ a.s.. Therefore, $T = (\sum_{i=1}^{n} X_{i}^{2},\ \sum_{i=1}^{n} X_{i})$ is not complete.
    </details>