# 1.2 Basics of Probability Theory

## 1.2.1 Axiomatic Foundations

> [!DEFINITION]
> A collection of subsets of $\mathcal{S}$ is called **sigma algebra** (or **Borel field**), denoted by $\mathcal{B}$, if it satisfies the following three properties:
> 
> - $\emptyset \in \mathcal{B}$;
> - If a set $\mathcal{A} \in \mathcal{B}$, then $\mathcal{A}^{c}=\mathcal{S} \setminus \mathcal{A} \in \mathcal{B}$ ($\mathcal{B}$ is closed under complementation);
> - If sets $\mathcal{A}_1,\ \mathcal{A}_2,\ \cdots \in \mathcal{B}$, then set $\mathcal{A} = \cup_{i=1}^{\infty} \mathcal{A}_i \in \mathcal{B}$ ($\mathcal{B}$ is closed under countable unions).

> [!TIP]
> By basic theorems in [Set Theory](/courses/advanced_statistics/1_probability_theory/1_set_theory.md), we can easily see that $\mathcal{A} = \bigcup_{i = 1}^{\infty} \mathcal{A}_i = \bigcap_{i = 1}^{\infty} \mathcal{A}_i ^{c}$. Thus, $\mathcal{B}$ is also closed under countable intersections.

> [!EXAMPLE]
> 1. Let $\mathcal{S}$ be a finite or countable set and $\mathcal{B}$ be all subsets of $\mathcal{S}$ including $\mathcal{S}$ itself, then $\mathcal{B}$ is a sigma algebra on $\mathcal{S}$.
> 
>     For example, $\mathcal{S} = \left\{1,\ 2,\ 3 \right\} $ and 
> 
>     $$\mathcal{B} = \left\{\empty,\ \left\{1 \right\},\ \left\{2 \right\},\ \left\{3 \right\},\ \left\{1,\ 2 \right\},\ \left\{1,\ 3 \right\},\ \left\{2,\ 3 \right\},\ \left\{1,\ 2,\ 3 \right\} \right\}$$
> 
>     is a sigma algebra on $\mathcal{S}$.
>
> 2. Let $\mathcal{S}$ be the real line, i.e., $\mathcal{S} = (-\infty,\ \infty)$, then $\mathcal{B}$ is chosen to contain all sets of the form 
> 
>     $$[a,\ b],\ (a,\ b],\ (a,\ b) \text{ and } [a,\ b)$$
>
>     for all real numbers $a$ and $b$.

> [!DEFINITION]
> Given a sample space $\mathcal{S}$ and an associated sigma algebra $\mathcal{B}$, a **probability function** is a function $P: \mathcal{B} \to \mathbb{R}$ that satisfies 
> - $P(\mathcal{A}) \geqslant 0,\ \forall \mathcal{A} \in \mathcal{B}$;
> - $P(\mathcal{S}) = 1$;
> - If $\mathcal{A}_1,\ \mathcal{A}_2,\ \cdots \in \mathcal{B}$ are pairwise disjoint, then $P(\bigcup_{i = 1}^{\infty} \mathcal{A}_i) = \sum_{i=1}^{\infty} P(\mathcal{A}_i)$.

> [!THEOREM]
> If $P$ is a probability function and $\mathcal{A}$ and $\mathcal{C}$ are any sets in $\mathcal{B}$, then 
> - $P(\mathcal{C} \cap \mathcal{A} ^{c}) = P(\mathcal{C}) - P(\mathcal{A} \cap \mathcal{C})$;
> - $P(\mathcal{A} \cup \mathcal{C}) = P(\mathcal{A}) + P(\mathcal{C}) - P(\mathcal{A} \cap \mathcal{C})$;
>   - Generally, $\forall \mathcal{A}_i \in \mathcal{B}$ ($i=1,\ 2,\ \cdots,\ n$), we have 
> 
>       $$\begin{aligned}P(\bigcup_{i = 1}^{n} \mathcal{A}_i) &= \sum\limits_{i=1}^{n} \mathcal{A}_i - \sum\limits_{i<j} P(\mathcal{A}_i \cap A_j) \\ &\quad+ \sum\limits_{i < j < k} P(\mathcal{A}_i \cap \mathcal{A}_j \cap \mathcal{A}_k) - \cdots \\ &\quad+ (-1)^{n+1} P(\mathcal{A}_1 \cap  \mathcal{A}_2 \cap \cdots \cap \mathcal{A}_n).\end{aligned}$$
> 
>   - We can also rewrite the formula to be 
> 
>       $$P(\mathcal{A} \cap \mathcal{C}) = P(\mathcal{A}) + P(\mathcal{C}) - P(\mathcal{A} \cup \mathcal{C}),$$
>
>       which is not that intuitive, but sometimes it may be useful.
> - If $\mathcal{A} \sub \mathcal{C}$, then $P(\mathcal{A}) \leqslant P(\mathcal{C})$.

> [!DEFINITION]
> If a series of events $\left\{\mathcal{A}_n \right\}$ satisfies 
> 
> $$ \mathcal{A}_1 \sub \mathcal{A}_2 \sub \cdots \sub \mathcal{A}_n \sub \cdots ,$$
> 
> then this series of events is called **monotonically rising**. We can easily see that 
>
> $$\lim\limits_{n \to \infty} P(\mathcal{A}_n) = P(\bigcup_{n=1}^{\infty} \mathcal{A}_n).$$
>
> Conversely, if a series of events $\left\{\mathcal{A}_n \right\}$ satisfies 
>
> $$\mathcal{A}_1 \supset \mathcal{A}_2 \supset \cdots \supset \mathcal{A}_n \supset \cdots ,$$
> 
> then this series of events is called **monotonically decreasing** and 
> 
> $$\lim\limits_{n \to \infty} P(\mathcal{A}_n) = P(\bigcap_{n=1}^{\infty} \mathcal{A}_n).$$

### Exercises

1. Prove the following inequality: 

    $$
    P(\bigcap_{i = 1}^{n} \mathcal{A}_i) \geqslant \sum\limits_{i=1}^{n} P(\mathcal{A}_i) - (n - 1).
    $$

    > [!TIP]
    > The left side is $\cap$ while the right side is like $\cup$, so we can try to transform the left side to be of form $\cup$.

    <details>
    <summary>Proof:</summary> 

    $$
    \begin{aligned}
        P(\bigcap_{i = 1}^{n} \mathcal{A}_i) &= 1 - P(\bigcup_{i = 1}^{n} \mathcal{A}_i ^{c}) \\
        &\geqslant 1 - \sum\limits_{i=1}^{n} (1 - P(\mathcal{A}_i)) \\
        &= \sum\limits_{i=1}^{n} P(\mathcal{A}_i) - (n - 1)
    \end{aligned}
    $$
    </details>

2. Prove the following inequality: 

    $$
    \left\vert P(\mathcal{A}_1 \cap \mathcal{A}_2) - P(\mathcal{A}_1) P(\mathcal{A}_2) \right\vert \leqslant \frac{1}{4}.
    $$

    > [!TIP]
    > First ignore $\left\vert \cdot \right\vert $, think about $P(\mathcal{A}_1 \cap \mathcal{A}_2) \leqslant \text{?}$ or $P(\mathcal{A}_1) \geqslant \text{?}$, e.g., $P(\mathcal{A}_1 \cap \mathcal{A}_2) \leqslant P(\mathcal{A}_1)$ (both sides occur in the inequality, which is something we are happy to see).

    <details>
    <summary>Proof:</summary> 

    1. We first prove 

        $$
        P(\mathcal{A}_1 \cap \mathcal{A}_2) - P(\mathcal{A}_1) P(\mathcal{A}_2) \leqslant \frac{1}{4}.
        $$

        Since $P(\mathcal{A}_1) \geqslant P(\mathcal{A}_1 \cap \mathcal{A}_2)$ and $P(\mathcal{A}_2) \geqslant P(\mathcal{A}_1 \cap \mathcal{A}_2)$, we have 
    
        $$
        P(\mathcal{A}_1) P(\mathcal{A}_2) \geqslant P^{2}(\mathcal{A}_1 \cap \mathcal{A}_2),
        $$

        which means 

        $$
        P(\mathcal{A}_1 \cap \mathcal{A}_2) - P(\mathcal{A}_1) P(\mathcal{A}_2) \leqslant P(\mathcal{A}_1 \cap \mathcal{A}_2) - P^{2}(\mathcal{A}_1 \cap \mathcal{A}_2).
        $$

        Let $x := P(\mathcal{A}_1 \cap \mathcal{A}_2)$, the function $f(x) := x - x^{2}$ get maximum at $x = \frac{1}{2}$ and the maximum is $f(\frac{1}{2}) = \frac{1}{4}$. Thus, we have 

        $$
        P(\mathcal{A}_1 \cap \mathcal{A}_2) - P(\mathcal{A}_1) P(\mathcal{A}_2) \leqslant \frac{1}{4}.
        $$
    
    2. Next, we prove 

        $$
        P(\mathcal{A}_1) P(\mathcal{A}_2) - P(\mathcal{A}_1 \cap \mathcal{A}_2) \leqslant \frac{1}{4}.
        $$

        It is easier to prove the above inequality if we can transform it to be the case in 1. Note that 

        $$
        \begin{aligned}
            P(\mathcal{A}_1) P(\mathcal{A}_2) - P(\mathcal{A}_1 \cap \mathcal{A}_2) &= P(\mathcal{A}_1) (1 - P(\mathcal{A}_2 ^{c})) \\ &\quad - (P(\mathcal{A}_1) - P(\mathcal{A}_1 \cap \mathcal{A}_2 ^{c}))\\
            &= P(\mathcal{A}_1 \cap \mathcal{A}_2 ^{c}) - P(\mathcal{A}_1) P(\mathcal{A}_2 ^{c}).
        \end{aligned}
        $$

        Then, using the conclusion in 1 we finish the proof.

    </details>

## 1.3 Conditional Probability and Independence

> [!DEFINITION]
> If $\mathcal{A}$ and $\mathcal{C}$ are events in $\mathcal{S}$, and $P(\mathcal{C}) > 0$, then the **conditional probability** of $\mathcal{A}$ given $\mathcal{C}$, written $P(\mathcal{A} \mid \mathcal{C})$, is 
> 
> $$P(\mathcal{A} \mid \mathcal{C}) = \frac{P(\mathcal{A} \cap \mathcal{C})}{P(\mathcal{C})}.$$

> [!THEOREM]
> Let $\mathcal{A}_1,\ \mathcal{A}_2,\ \cdots,\ \mathcal{A}_n$ be a partition of the sample space $\mathcal{S}$, and $\mathcal{C}$ is an event, then we have the follwing formulae: 
> 
> - Law of total probability: 
> 
>     $$ P(\mathcal{C}) = \sum\limits_{i=1}^{n} P(\mathcal{C} \mid \mathcal{A}_{i}) ;$$
> 
> - Bayes formulae: 
> 
>     $$P(\mathcal{A}_{j} \mid \mathcal{C}) = \frac{P(\mathcal{C} \mid \mathcal{A}_{j}) P(\mathcal{A}_{j})}{\sum_{i=1}^{n} P(\mathcal{C} \mid \mathcal{A}_{i}) P(\mathcal{A}_{i})}.$$

## 1.4 Random Variables

> [!DEFINITION]
> A **random variable** $X$ is a function $X : \mathcal{S} \to \mathbb{R}$.

> [!ATTENTION]
> The definition of a random variable is similar to a probability function. Apart from the special properties of a probability function, the difference between a random variable and a probability function is that the domain of definition is different ($\mathcal{S}$ and its sigma algebra $\mathcal{B}$).

## 1.5 Distribution Functions

> [!DEFINITION]
> The **cumulative distribution function (cdf)** of a random variable $X$, denoted by $F_{X}(x)$, is defined by 
> 
> $$F_{X}(x) = P_{X}(X \leqslant x),\quad \forall x.$$

> [!THEOREM]
> A function $F(x)$ is a cdf *iff* the following 3 conditions hold: 
> 
> 1. $\lim\limits_{x \to -\infty} = 0$ and $\lim\limits_{x \to \infty} = 1$;
> 2. $F(x)$ is a non-decreasing function of $x$;
> 3. $F(x)$ is right-continuous, i.e., $\forall x_0$, $\lim\limits_{x \to x_0^{+}} F(x) = F(x_0)$.
> 

<details>
<summary>Proof of 3 ($\implies$): </summary>

We only prove the $\implies$ direction here. From the definition of right limit, we have 

$$
\lim\limits_{x \to x_0^{+}} F(x) = \lim\limits_{n \to \infty} F(x_0 + \frac{1}{n}).
$$

And since $F(x)$ is a cdf, we have 

$$
\lim\limits_{n \to \infty} F(x_0 + \frac{1}{n}) = \lim\limits_{n \to \infty} P(x \leqslant x_0 + \frac{1}{n}).
$$

Note that the series of events $\left\{x \leqslant x_0 + \frac{1}{n} \right\}_{n=1}^{\infty}$ is decreasing, and thus we have 

$$
\lim\limits_{n \to \infty} P(x \leqslant x_0 + \frac{1}{n}) = P\left(\bigcap_{n=1}^{\infty} \left\{x \leqslant x_0 + \frac{1}{n} \right\}\right),
$$

which means 

$$
\lim\limits_{x \to x_0^{+}} F(x) = P\left(\bigcap_{n=1}^{\infty} \left\{x \leqslant x_0 + \frac{1}{n} \right\}\right) = P(x \leqslant x_0) = F(x_0).
$$

> [!TIP]
> You may wonder why left-continuity cannot hold. It seems like using the same method we can prove the left-continuity. The key point is 
> 
> $$\bigcap_{n=1}^{\infty} \left\{x \leqslant x_0 + \frac{1}{n} \right\} = \left\{x \leqslant x_0 \right\},$$
> 
> while
> 
> $$\bigcup_{n=1}^{\infty} \left\{x \leqslant x_0 - \frac{1}{n} \right\} \neq \left\{x \leqslant x_0 \right\}.$$
> 
> Instead, we have 
> 
> $$\bigcup_{n=1}^{\infty} \left\{x \leqslant x_0 - \frac{1}{n} \right\} = \bigcup_{n=1}^{\infty} \left\{x < x_0 - \frac{1}{n} \right\} = \left\{x < x_0 \right\}.$$
>
> So if we change the definition of cdf, we can get the left-continuity (see [Exercises](#exercises-1)).

</details>

### Exercises

1. Prove that the cdf $F(x)$ is left-continuous if $F(x) = P(X < x)$.

    <details>
    <summary>Proof: </summary> 

    From the definition of left limit, we have 

    $$
    \lim\limits_{x \to x_0^{-}} F(x) = \lim\limits_{n \to \infty} F(x_0 - \frac{1}{n}) = \lim\limits_{n \to \infty} P(x < x_0 - \frac{1}{n})
    $$

    Note that the series of events $\left\{x < x_0 - \frac{1}{n} \right\}_{n=1}^{\infty}$ is rising, and thus we have 

    $$
    \lim\limits_{n \to \infty} P(x < x_0 - \frac{1}{n}) = P\left(\bigcup_{n=1}^{\infty} \left\{x < x_0 - \frac{1}{n} \right\}\right),
    $$

    which means 

    $$
    \lim\limits_{x \to x_0^{-}} F(x) = P\left(\bigcup_{n=1}^{\infty} \left\{x < x_0 - \frac{1}{n} \right\}\right) = P(x < x_0) = F(x_0).
    $$
    </details>

## 1.6 Density and Mass Functions

> [!DEFINITION]
> The **probability mass function (pmf)** of a *discrete* random variable $X$ is given by 
> 
> $$f_{X}(x) = P(X = x),\quad \forall x.$$
> 
> The **probability density function (pdf)**, $f_{X}(x)$, of a *continuous* random variable $X$ is the function that satisfies 
> 
> $$F_{X}(x) = \int_{-\infty}^{x} f_{X}(t) ~ \mathrm{d}t,\quad \forall x.$$

## Assignments

### Textbook Exercises

*1.34* (p.41) Two litters of a particular rodent species have been born, one with two brown-haired and one gray-haired (litter 1), and the other with three brown-haired and two gray-haired (litter 2). We select a litter at random and then select an offspring at random from the selected litter.

(a) What is the probability that the animal chosen is brown-haired?



(b) Given that brown-haired offspring selected, what is the probability that the sampling was from litter 1?


*1.41* (p.42-43) As in Example 1.3.6, consider telegraph signals “dot” and “dash” sent in the proportion 3:4, where erratic transmissions cause a dot to become a dash with probability $\frac{1}{4}$ and a dash to become a dot with probability $\frac{1}{3}$.

(a) If a dash is received, what is the probability that a dash has been sent?

(b) Assuming independence between signals, if the message dot-dot was received, what is the probability distribution of the four possible messages that could have been sent?

### Additional Exercises

1. Prove the following inequality.

    $$
    \left\vert P(\mathcal{A}_1 \cap \mathcal{A}_2) - P(\mathcal{A}_1) P(\mathcal{A}_2) \right\vert \leqslant \frac{1}{4}.
    $$

    See [previous exercises](#exercises).

2. Let $X$ have pdf $f_{X}(x) = \frac{2}{9}(x + 1),\ -1 \leqslant x \leqslant 2$.

   (a) Find the pdf of $Y = X^{2}$ by proper partition using Theorem 2.1.8.

   (b) Find a monotone function $u(y)$ such that random variable $Z = u(Y)$ has a $\text{uniform}(0,\ 1)$ distribution.