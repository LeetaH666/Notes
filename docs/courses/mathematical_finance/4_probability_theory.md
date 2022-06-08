# Probability Theory

### Probability Space

#### $\sigma$-Algebra

If $\Omega$ a given set, then a $\sigma$-algebra $\mathcal{F}$ on $\Omega$ is a family of subsets of $\Omega$ with the following properties: 

- $\emptyset \in \mathcal{F}$;
- If a set $A \in \mathcal{F}$, then $A^{c}=\Omega \setminus A \in \mathcal{F}$;
- If sets $A_1,\ A_2,\ \cdots \in \mathcal{F}$, then set $A = \cup_{i=1}^{\infty} A_i \in \mathcal{F}$.

The pair $(\Omega,\ \mathcal{F})$ is called a <mark>measurable space</mark>.

> [!NOTE]
> A $\sigma$-algebra is a field (since a field is a special ring, it is also a ring), so we also called it a $\sigma$-field. Borel field $\mathcal{B}$ is a common $\sigma$-field.

#### Probability Measure

A probability measure $\mathbb{P}$ on a measurable space $(\Omega,\ \mathcal{F})$ is a function $\mathbb{P}:\ \mathcal{F} \to [0,\ 1]$ s.t. 

- $\mathbb{P}(\emptyset)=0$ and $\mathbb{P}(\Omega)=1$;
- If $A_1,\ A_2,\ \cdots \in \mathcal{F}$ and $A_i \cap A_j = \emptyset \ (i\neq j)$, then $\mathbb{P}\left( \cup_{i=1}^{\infty} A_i \right) = \sum\limits_{i=1}^{\infty} \mathbb{P}(A_i) $.

The triple $(\Omega,\ \mathcal{F},\ \mathbb{P})$ is called a <mark>probability space</mark>.

#### Equivalent Probability Measure

Let $(\Omega,\ \mathcal{F})$ be a measurable space. Two Probability measures $\mathbb{P}$ and $\widetilde{\mathbb{P}}$ on $(\Omega,\ \mathcal{F})$ are equivalent if they agree on zero probability events, i.e., $\mathbb{P}(A)=0 \iff \widetilde{\mathbb{P}}(A)=0$ for any event $A$.

#### $\mathcal{F}$-Measurable

Given a probability space $(\Omega,\ \mathcal{F},\ \mathbb{P})$, a function $f:\ \Omega \to \mathbb{R}^{n}$ is $\mathcal{F}$-measurable if $\forall $ open sets $U \in \mathbb{R}^{n}$, $f ^{-1} (U) := \{\omega \in \Omega; f(\omega)\in U\} \in \mathcal{F}$.

A <mark>random variable</mark> $X$ is an $\mathcal{F}$-measurable function $X:\ \Omega \to \mathbb{R}^{n}$.

A random variable $X$ induces a probability measure $\mu_{X}$ on $\mathbb{R}^{n}$, defined by $\mu_{X}(U) = \mathbb{P}(X ^{-1}(U))$. $\mu_{X}$ is called the <mark>distribution</mark> of $X$.

#### Example: Rolling a Dice

Rolling a dice gives a sample space

$$
\Omega = \{1,\ 2,\ 3,\ 4,\ 5,\ 6\}
$$

The set of all subsets $\mathcal{F}=2^{\Omega}$ is a $\sigma$-algebra.

Define a random variable

$$
X(\omega) = \omega + 1,\ \forall \omega\in \Omega
$$

We can easily verify that it is $\mathcal{F}$-measurable through the definition.

However, given another $\sigma$-algebra $\mathcal{G}=\{\empty,\ \Omega,\ \{1,\ 3,\ 5\},\ \{2,\ 4,\ 6\}\}$, $X(\omega)$ is not a random variable with it because $X(\omega)$ is not $\mathcal{G}$-measurable. For example, choose an open interval $U=(0.5,\ 1.5)$, $X ^{-1}(U) = \{1\} \nsubseteq \mathcal{G}$.

### Expectation

#### Definition

Let $X$ be a random variable on a probability space $(\Omega,\ \mathcal{F},\ \mathbb{P})$. The expectation of $X$ is 

$$
\mathrm{E}(X) = \int_\Omega X(\omega)\ \mathrm{d}\mathbb{P}(\omega)
$$

if 

$$
\mathrm{E}(\left\vert X \right\vert ) = \int_\Omega \left\vert X(\omega) \right\vert\ \mathrm{d}\mathbb{P}(\omega) < \infty
$$

or 

$$
X \geqslant 0 \quad \text{a.s.}
$$

> [!NOTE]
> $\text{a.s.}$ means <mark>almost surely</mark>, i.e., the event happens with probability $1$. But this does not mean the set of possible exceptions is empty. Instead, we only need the set of possible exceptions to be with probability $0$.

#### Jensen's Inequality

For a convex, real-valued function $\varphi$ defined on $\mathbb{R}$, if $\mathrm{E}(\left\vert X \right\vert ) < \infty$ and $\mathrm{E}(\varphi(X)) < \infty$, then 

$$
\varphi(\mathrm{E}(X)) \leqslant \mathrm{E}(\varphi(X))
$$

### Change of Measure

Consider a random variable $Z$, let $\mathrm{E}(Z) = 1$ and $Z \geqslant 0$. For event $A \in \mathcal{F}$, define 
$$
\widetilde{\mathbb{P}}(A) = \int_A Z(\omega)\ \mathrm{d}\mathbb{P}(\omega)
$$

Then $\widetilde{\mathbb{P}}$ is a probability measure and $\widetilde{\mathrm{E}}(X) = \mathrm{E}(XZ)$.

If $Z > 0$, then 

$$
\mathrm{E}(Y) = \widetilde{\mathrm{E}}\left(\frac{Y}{Z}\right)
$$

If $\mathbb{P}$ and $\widetilde{\mathbb{P}}$ are 2 equivalent probability measures on $(\Omega,\ \mathcal{F})$ and $Z$ is a.s. positive, then $Z$ is called the <mark>Radon-Nikodym derivative</mark> of $\widetilde{\mathbb{P}}$ w.r.t. $\mathbb{P}$ and we write 

$$
Z = \frac{\mathrm{d}\widetilde{\mathbb{P}}}{\mathrm{d}\mathbb{P}}
$$

#### Example: Normal Random Variable

Let $X$ be a standard normal random variable on $(\Omega,\ \mathcal{F},\ \mathbb{P})$. Our target is to find an equivalent probability measure $\widetilde{\mathbb{P}}$ of $\mathbb{P}$ s.t. $X+\theta$ ($\theta>0$) is standard normal on $(\Omega,\ \mathcal{F},\ \widetilde{\mathbb{P}})$.

If $X+\theta$ is standard normal on $(\Omega,\ \mathcal{F},\ \widetilde{\mathbb{P}})$, then we have 

$$
\widetilde{\mathrm{E}}(X+\theta) = \int_\Omega \frac{1}{\sqrt{2\pi}} e^{-\frac{(X(\omega)+\theta)^{2}}{2}}\ \mathrm{d}\omega
$$

Note that we need 

$$
\widetilde{\mathrm{E}}(X+\theta) = \mathrm{E}(XZ) = \int_\Omega \frac{1}{\sqrt{2\pi}} e^{-\frac{(X(\omega))^{2}}{2}}\cdot Z(\omega)\ \mathrm{d}\omega
$$

where $Z$ is the Radon-Nikodym derevative of $\widetilde{\mathbb{P}}$ w.r.t. $\mathbb{P}$.

This means we need 

$$
Z(\omega) = e^{-\frac{1}{2}\theta^{2}-\theta X(\omega)}
$$

for all $\omega\in \Omega$.

#### Girsanov Theorem

Assume that process $W(t)$ ($0\leqslant t\leqslant T$) is a Wiener process on the porbability space $(\Omega,\ \mathcal{F},\ \mathbb{P})$. Define a random variable 

$$
Z = e^{-\frac{1}{2}\frac{(\mu-r)^{2}}{\sigma^{2}}T - \frac{\mu-r}{\sigma}W(T)}
$$

and we have 

$$
\mathrm{E}(Z) = e^{-\frac{1}{2}\frac{(\mu-r)^{2}}{\sigma^{2}}T}\mathrm{E}(e^{-\frac{\mu-r}{\sigma}W(T)}) = 1
$$

> [!TIP]
> The mgf of standard normal distribution is $M_X(\theta) = \mathrm{E}(e^{\theta X}) = e^{\frac{1}{2}\theta^{2}}$.

Define a probability measure $\widetilde{\mathbb{P}}$ s.t. $\frac{\mathrm{d}\widetilde{\mathbb{P}}}{\mathrm{d}\mathbb{P}} = Z$, then the process 

$$
\widetilde{W} := W(t) + \frac{\mu-r}{\sigma}t
$$

is a Wiener process under $\widetilde{\mathbb{P}}$.

The theorem can be easily shown like the [example](#example-normal-random-variable) above.

Suppose the stock price follows the <abbr title='Geometric Brownian Motion'>GBM</abbr> under the physical probability measure $\widetilde{\mathbb{P}}$, then we have 

$$
\mathrm{d}S(t) = \mu S(t) \mathrm{d}t + \sigma S(t) \mathrm{d}W(t)
$$

In the risk-neutral world, i.e., under the probability $\widetilde{\mathbb{P}}$, we have 

$$
\mathrm{d}S(t) = r S(t) \mathrm{d}t + \sigma S(t) \mathrm{d}\widetilde{W}(t)
$$

by the Girsanov theorem.

### Information and Partition

A set of non-empty subsets $f=\{f_1,\ \cdots,\ f_u\}$ of a sample space $\Omega = \{\omega_1,\ \cdots,\ \omega_K\}$ is called a <mark>partition</mark> of $\Omega$ iff 

- $f_i \cap f_j = \emptyset$
- $f_1 \cup \cdots \cup f_u = \Omega$

The <mark>null partition</mark> $f = \{\Omega\}$ means <mark>no information</mark>; the <mark>full partition</mark> $f = \{\{\omega_1\},\ \cdots,\ \{\omega_K\}\}$ means <mark>full information</mark>.

Two states in the same subset of $f$ are called <mark>indistinguishable</mark>.

$f(\omega)$ denotes the subset of of the partition $f$ that contains the state $\omega$.

#### Example: Toss of 2 Coins

The toss of 2 coins has a sample space with 4 states:

$$
\Omega = \{\text{HH},\ \text{HT},\ \text{TH},\ \text{TT}\}
$$

The information of the head count can be represented by the partition 

$$
f = \{\{\text{HH}\},\ \{\text{HT},\ \text{TH}\},\ \{\text{TT}\}\}
$$

since there are only 3 events: 2 heads, 1 head and no head.

#### Unique Relation between $\sigma$-Algebra and Partition

In a finite space, a $\sigma$-algebra corresponds to a partition, i.e., suppose there is a $\sigma$-algebra $\mathcal{F}$ on finite $\Omega$, then 

$$
f = \{A\neq \empty | A\in \mathcal{F} \text{ and if } \exists B\in \mathcal{F} \text{ and } B \sub A,\ \text{then } B=A \text{ or } B=\empty \}
$$

is a partition on $\Omega$.

Meanwhile, <mark>each partition $f$ generates an unique $\sigma$-algebra denoted by $\sigma(f)$</mark>.

#### Measurable Theorem

Let $f$ be a partition, then a random variable $X$ is measurable with $\sigma(f)$ iff $X$ is <mark>constant at any element of the set $f$</mark>.

For example, let $\Omega=\{\omega_1,\ \cdots,\ \omega_K\}$, 

- for the null partition $f=\{\Omega\}$, $X$ is $\sigma(f)$-measurable iff $X(\omega)$ is a constant, $\forall \omega\in \Omega$;
- for the full partition $g=\{\{\omega_1\},\ \cdots,\ \{\omega_K\}\}$, every function defined on $\Omega$ is $\sigma(g)$-measurable.

> [!TIP]
> For the null partition $f$, if $X(\omega)=0$ for some $\omega$ and $X(\omega)=1$ for others, then $\empty \subsetneq X ^{-1}((0.5,\ 1.5)) \subsetneq \Omega$ and thus $X ^{-1}((0.5,\ 1.5)) \notin \sigma(f)$.

Similarly, <mark>a random variable $X$ can generate a $\sigma$-algebra denoted by $\sigma(X)$</mark> (need not to be unique). Note that $\sigma(X)$ is the smallest $\sigma$-algebra where $X$ is measurable.

#### Example: Rolling a Dice - Odd or Even

Rolling a dice gives a sample space

$$
\Omega = \{1,\ 2,\ 3,\ 4,\ 5,\ 6\}
$$

Define a random variable 

$$
X(\omega) = \begin{cases}
    1,& \omega=1,\ 3,\ 5 \\
    0,& \omega=2,\ 4,\ 6 \\
\end{cases}
$$

Then $\sigma(X)=\{\empty,\ \Omega,\ \{1,\ 3,\ 5\},\ \{2,\ 4,\ 6\}\}$.

For the null partition $f=\{\Omega\}$, $X$ is not $\sigma(f)$ measurable since it is not constant at $\Omega$.

### Filtration

Let $\Omega$ be a nonempty sample space and $T$ be a fixed positive number. Assume that for each $t\in [0,\ T]$ there is a $\sigma$-algebra $\mathcal{F}(t)$ and $\mathcal{F}(s) \sub \mathcal{F}(t)$ for any $s<t$. Then we call the collection of $\sigma$-algebra $\{\mathcal{F}(t)\}_{t=0}^{T}$ a filtration.

### Conditional Probability

#### Conditional Probability on Partition

For an event $A$ on $(\Omega,\ \mathbb{P})$ and a partition $f$ of $\Omega$, the conditional probability $\mathbb{P}(A|f)$ is a random variable given by 

$$
\mathbb{P}(A|f)(\omega) = \frac{\mathbb{P}(A \cap f(\omega))}{\mathbb{P}(f(\omega))}
$$

Recall the [example of rolling a dice](#example-rolling-a-dice-odd-or-even) above, suppose $A=\{1,\ 2\}$ and $f = \{\{1,\ 3,\ 5\},\ \{2,\ 4,\ 6\}\}$, then 

$$
\mathbb{P}(A|f)(\omega) = \begin{cases}
    \frac{\mathbb{P}(\{1\})}{\mathbb{P}(\{1,\ 3,\ 5\})}=\frac{1}{3},& \omega\in \{1,\ 3,\ 5\}\\
    {}\\
    \frac{\mathbb{P}(\{2\})}{\mathbb{P}(\{2,\ 4,\ 6\})}=\frac{1}{3},& \omega\in \{2,\ 4,\ 6\}\\
\end{cases}
$$

which is $\sigma(f)$-measurable since it is constant at each element in $f$.

#### Conditional Expectation on Partition

For a random variable $X$ on $(\Omega,\ \mathbb{P})$ and a partition $f$ of $\Omega$, the conditional expectation $\mathrm{E}(X|f)$ is a random variable given by 

$$
\mathrm{E}(X|f)(\omega) = \frac{\sum\limits_{\omega^{\prime} \in f(\omega)} \mathbb{P}(\omega^{\prime})X(\omega^{\prime})}{\mathbb{P}(f(\omega))}
$$

Recall the [example of rolling a dice](#example-rolling-a-dice-odd-or-even) above, suppose $f = \{\{1,\ 2,\ 3\},\ \{4,\ 5,\ 6\}\}$, then 

$$
\mathrm{E}(X|f)(\omega) = \begin{cases}
    \frac{\sum\limits_{\omega^{\prime} \in \{1,\ 2,\ 3\}} \frac{1}{6}X(\omega^{\prime})}{\mathbb{P}(\{1,\ 2,\ 3\})}=\frac{2}{3},& \omega\in \{1,\ 2,\ 3\}\\
    {}\\
    \frac{\sum\limits_{\omega^{\prime} \in \{4,\ 5,\ 6\}} \frac{1}{6}X(\omega^{\prime})}{\mathbb{P}(\{4,\ 5,\ 6\})}=\frac{1}{3},& \omega\in \{4,\ 5,\ 6\}\\
\end{cases}
$$

which is $\sigma(f)$-measurable since it is constant at each element in $f$.

#### General Conditional Expectation

Let $(\Omega,\ \mathcal{F},\ \mathbb{P})$ be a probability space and $\mathcal{G}$ be a sub-$\sigma$-algebra of $\mathcal{F}$. Assume $X$ is a random variable that is either nonnegative or integrable, then the conditional expectation of $X$ given $\mathcal{G}$, denoted by $\mathrm{E}(X|\mathcal{G})$, is a random variable that satisfies

- <mark>Measurability</mark>: $\mathrm{E}(X|\mathcal{G})$ is $\mathcal{G}$-measurable.
- <mark>Partial averaging</mark>: $\int_g \mathrm{E}(X|\mathcal{G})(\omega)\ \mathrm{d}\mathbb{P}(\omega) = \int_g X(\omega)\ \mathrm{d} \mathbb{P}(\omega),\ \forall g\in \mathcal{G}$.

> [!NOTE]
> If $\mathcal{G}$ is a $\sigma$-algebra that generated by some other random variable $Y$, i.e., $\mathcal{G}=\sigma(Y)$, then we write $\mathrm{E}(X|Y)$ rather than $\mathrm{E}(X|\sigma(Y))$.

General conditional expectations have the following properties:

- <mark>Linearity of conditional expectations</mark>: If $X$ and $Y$ are integrable random variables, then 

    $$
    \mathrm{E}(c_1X+c_2Y|\mathcal{G}) = c_1 \mathrm{E}(X|\mathcal{G}) + c_2 \mathrm{E}(Y|\mathcal{G})
    $$

    where $c_1$ and $c_2$ are 2 constants.

- <mark>Taking out what is known</mark>: If X, Y and $XY$ are integrable random variables, and $X$ is $\mathcal{G}$-measurable, then 

    $$
    \mathrm{E}(XY|\mathcal{G}) = X \mathrm{E}(Y|\mathcal{G})
    $$

- <mark>Tower equality</mark>: If $\mathcal{H}$ is a sub-$\sigma$-algebra of $\mathcal{G}$ and $X$ is an integrable random variable, then 

    $$
    \mathrm{E}[\mathrm{E}(X|\mathcal{G})|\mathcal{H}] = \mathrm{E}(X|\mathcal{H})
    $$

- <mark>Independence</mark>: If $X$ is integrable and independent with $\mathcal{G}$, then 

    $$
    \mathrm{E}(X|\mathcal{G}) = \mathrm{E}(X)
    $$

- <mark>Conditional Jenson's inequality</mark>: If $\varphi(x)$ is a convex function of a dummy variable $x$ and $X$ is integrable, then 

    $$
    \varphi(\mathrm{E}(X|\mathcal{G})) \leqslant \mathrm{E}(\varphi(X)|\mathcal{G})
    $$