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