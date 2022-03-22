# Probability Theory

### Probability Space

#### $\sigma$-algebra
If $\Omega$ a given set, then a $\sigma$-algebra $\mathcal{F}$ on $\Omega$ is a family of subsets of $\Omega$ with the following properties: 
- $\emptyset \in \mathcal{F}$;
- If a set $F \in \mathcal{F}$, then $F^{c}=\Omega \setminus F \in \mathcal{F}$;
- If sets $A_1,\ A_2,\ \cdots \in \mathcal{F}$, then set $A = \cup_{i=1}^{\infty} A_i \in \mathcal{F}$.
The pair $(\Omega,\ \mathcal{F})$ is called a <mark>measurable space</mark>.

> [!NOTE]
> A $\sigma$-algebra is a field (since a field is a special ring, it is also a ring), so we also called it a $\sigma$-field. Borel field $\mathcal{B}$ is a common $\sigma$-field.

#### Probability measure
A probability measure $\mathrm{P}$ on a measurable space $(\Omega,\ \mathcal{F})$ is a function $\mathrm{P}:\ \mathcal{F} \to [0,\ 1]$ s.t. 
- $\mathrm{P}(\emptyset)=0$ and $\mathrm{P}(\Omega)=1$;
- If $A_1,\ A_2,\ \cdots \in \mathcal{F}$ and $A_i \cap A_j = \emptyset \ (i\neq j)$, then $\mathrm{P}\left( \cup_{i=1}^{\infty} A_i \right) = \sum\limits_{i=1}^{\infty} \mathrm{P}(A_i) $.

The triple $(\Omega,\ \mathcal{F},\ \mathrm{P})$ is called a <mark>probability space</mark>.

#### $\mathcal{F}$-measurable
Given a probability space $(\Omega,\ \mathcal{F},\ \mathrm{P})$, a function $f:\ \Omega \to \mathbb{R}^{n}$ is $\mathcal{F}$-measurable if $\forall $ open sets $U \in \mathbb{R}^{n}$, $f ^{-1} (U) := \{\omega \in \Omega; f(\omega)\in U\} \in \mathcal{F}$.

A <mark>random variable</mark> $X$ is an $\mathcal{F}$-measurable function $X:\ \Omega \to \mathbb{R}^{n}$.

A random variable $X$ induces a probability measure $\mu_{X}$ on $\mathbb{R}^{n}$, defined by $\mu_{X}(U) = \mathrm{P}(X ^{-1}(U))$. $\mu_{X}$ is called the <mark>distribution</mark> of $X$.

### Expectation

#### Definition
Let $X$ be a random variable on a probability space $(\Omega,\ \mathcal{F},\ \mathrm{P})$. The expectation of $X$ is 
$$
\mathrm{E}(X) = \int_\Omega X(\omega) \mathrm{d}\mathrm{P}(\omega)
$$if 
$$
\mathrm{E}(\left\vert X \right\vert ) = \int_\Omega \left\vert X(\omega) \right\vert \mathrm{d}\mathrm{P}(\omega) < \infty
$$

#### Jensen's Inequality

For a convex, real-valued function $\varphi$ defined on $\mathbb{R}$, if $\mathrm{E}(\left\vert X \right\vert ) < \infty$ and $\mathrm{E}(\varphi(X)) < \infty$, then 
$$
\varphi(\mathrm{E}(X)) \leqslant \mathrm{E}(\varphi(X))
$$

### Change of Measure
Consider a random variable $Z$, let $\mathrm{E}(Z) = 1$ and $Z \geqslant 0$. For event $A \in \mathcal{F}$, define 
$$
\tilde{\mathrm{P}}(A) = \int_A Z(\omega) \mathrm{d}\mathrm{P}(\omega)
$$Then $\tilde{\mathrm{P}}$ is a probability measure and $\tilde{\mathrm{E}}(X) = \mathrm{E}(XZ)$.

If $Z > 0$, then 
$$
\mathrm{E}(Y) = \tilde{\mathrm{E}}\left(\frac{Y}{Z}\right)
$$

#### Equivalent Probability Measure
Let $(\Omega,\ \mathcal{F})$ be a measurable space. Two Probability measures $\mathrm{P}$ and $\tilde{\mathrm{P}}$ on $(\Omega,\ \mathcal{F})$ are equivalent if they agree on zero probability events, i.e., $\mathrm{P}(A)=0 \iff $.