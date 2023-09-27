# 1 Probability Theory

## 1.1 Set Theory

> [!NOTE]
> We are going to use symbols with calligraphic font, e.g., $\mathcal{A},\ \mathcal{B},\ \cdots$ to represent sets.

> [!THEOREM]
> - Commutativity: 
>  
>     $$\begin{aligned}\mathcal{A} \cup \mathcal{B} = \mathcal{B} \cup \mathcal{A} \\ \mathcal{A} \cap \mathcal{B} = \mathcal{B} \cap \mathcal{A} \end{aligned}$$
> 
> - Associativity: 
> 
>     $$\begin{aligned} \mathcal{A} \cup (\mathcal{B} \cup \mathcal{C}) = (\mathcal{A} \cup \mathcal{B}) \cup \mathcal{C} \\ \mathcal{A} \cap (\mathcal{B} \cap \mathcal{C}) = (\mathcal{A} \cap \mathcal{B}) \cap \mathcal{C} \end{aligned}$$
> 
> - Distributive Laws: 
> 
>     $$\begin{aligned} \mathcal{A} \cap (\mathcal{B} \cup \mathcal{C}) = (\mathcal{A} \cap \mathcal{B}) \cup (A \cap \mathcal{C}) \\ \mathcal{A} \cup (\mathcal{B} \cap \mathcal{C}) = (\mathcal{A} \cup \mathcal{B}) \cap (A \cup \mathcal{C}) \\ \end{aligned}$$
> 
> - DeMorgan's Laws: 
> 
>     $$\begin{aligned} (\mathcal{A} \cup \mathcal{B})^{c} = \mathcal{A} ^{c} \cap \mathcal{B} ^{c} \\ (\mathcal{A} \cap \mathcal{B})^{c} = \mathcal{A} ^{c} \cup \mathcal{B} ^{c} \\ \end{aligned}$$

> [!DEFINITION]
> If $\mathcal{A}_1,\ \mathcal{A}_2,\ \cdots$ are pairwise disjoint and $\bigcup_{i = 1}^{\infty} \mathcal{A}_i = \mathcal{S}$, then the collection $\mathcal{A}_{1},\ \mathcal{A}_{2},\ \cdots$ forms a **partition** of $\mathcal{S}$.

> [!DEFINITION]
> A **topological space** $(\mathcal{X},\ \mathcal{T})$ is a set $\mathcal{X}$ and a collection of subsets of $\mathcal{X}$, $\mathcal{T}$, called **open sets**, s.t. 
> 
> 1. $\empty,\ \mathcal{X} \in \mathcal{T}$;
> 2. if $\left\{\mathcal{U}_{\alpha} \in \mathcal{T}: \alpha \in I \right\}$ is an arbitrary collection of open sets, then their union $\bigcup_{\alpha \in I} \mathcal{U}_{\alpha} \in \mathcal{T}$ is open;
> 3. if $\left\{\mathcal{U}_i \in \mathcal{T}: i = 1,\ 2,\ \cdots,\ N \right\}$ is a finite collection of open sets, then their intersection $\bigcap_{i = 1}^{N} \mathcal{U}_{i} \in \mathcal{T}$ is open.
>
> The complement of an open set in $\mathcal{X}$ is called a **closed set**, and $\mathcal{T}$ is called a **topology** on $\mathcal{X}$.

> [!TIP]
> In the definition above, a topological space and the assigned open sets are defined simultaneously. Forget the open sets you have learned in the real space!

## 1.2 Basics of Probability Theory

### 1.2.1 Axiomatic Foundations

> [!DEFINITION]
> A collection of subsets of $\mathcal{S}$ is called **sigma algebra** (or **Borel field**), denoted by $\mathcal{B}$, if it satisfies the following three properties:
> 
> - $\emptyset \in \mathcal{B}$;
> - If a set $\mathcal{A} \in \mathcal{B}$, then $\mathcal{A}^{c}=\mathcal{S} \setminus \mathcal{A} \in \mathcal{B}$ ($\mathcal{B}$ is closed under complementation);
> - If sets $\mathcal{A}_1,\ \mathcal{A}_2,\ \cdots \in \mathcal{B}$, then set $\mathcal{A} = \cup_{i=1}^{\infty} \mathcal{A}_i \in \mathcal{B}$ ($\mathcal{B}$ is closed under countable unions).

> [!TIP]
> By basic theorems in [Set Theory](#_11-set-theory), we can easily see that $\mathcal{A} = \bigcup_{i = 1}^{\infty} \mathcal{A}_i = \bigcap_{i = 1}^{\infty} \mathcal{A}_i ^{c}$. Thus, $\mathcal{B}$ is also closed under countable intersections.

> [!NOTE]
> Associated with sample space $\mathcal{S}$ we can have many different sigma algebras such as $\left\{\empty,\ \mathcal{S} \right\}$, which is not our concern. The only sigma algebra we will be concerned with is the smallest one that contains all of the open sets in a given sample space $\mathcal{S}$.

<span id='example'></span>

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

### 1.2.2 The Calculus of Probabilities

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
>     $$ P(\mathcal{C}) = \sum\limits_{i=1}^{n} P(\mathcal{C} \mid \mathcal{A}_{i});$$
> 
> - Bayes formulae: 
> 
>     $$P(\mathcal{A}_{j} \mid \mathcal{C}) = \frac{P(\mathcal{C} \mid \mathcal{A}_{j}) P(\mathcal{A}_{j})}{\sum_{i=1}^{n} P(\mathcal{C} \mid \mathcal{A}_{i}) P(\mathcal{A}_{i})}.$$

## 1.4 Random Variables

> [!DEFINITION]
> A **random variable** $X$ is a function $X : \mathcal{S} \to \mathbb{R}$.

> [!ATTENTION]
> A random variable and a probability function are both a function. Apart from the special properties of a probability function, another difference between them is that the domain of definition is different ($\mathcal{S}$ for a random variable and $\mathcal{B}$ for a probability function).

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
> So if we change the definition of cdf, we can get the left-continuity (see the following exercise).
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

<details>
<summary>Solution: </summary>

Using the following symbols to denote the events: 

- $\mathcal{A}$: the animal chosen is brown-haired;
- $\mathcal{L}_1 (\mathcal{L}_2)$: litter 1 (2) is chosen.

Since we know that $P(\mathcal{A} \mid \mathcal{L}_1) = \frac{2}{3}$ and $P(\mathcal{A} \mid \mathcal{L}_2) = \frac{3}{5}$, by the law of total probability, we have 

$$
P(\mathcal{A}) = P(\mathcal{A} \mid \mathcal{L}_1) P(\mathcal{L}_1) + P(\mathcal{A} \mid \mathcal{L}_2) P(\mathcal{L}_2) = \frac{2}{3} \times \frac{1}{2} + \frac{3}{5} \times \frac{1}{2} = \frac{19}{30}.
$$
</details>

(b) Given that brown-haired offspring selected, what is the probability that the sampling was from litter 1?

<details>
<summary>Solution: </summary>

From the Bayes formula, we have 

$$
P(\mathcal{L}_{1} \mid \mathcal{A}) = \frac{P(\mathcal{A} \mid \mathcal{L}_{1}) P(\mathcal{L}_{1})}{P(\mathcal{A})} = \frac{2 / 3 \times 1 / 2}{19 / 30} = \frac{10}{19}.
$$
</details>

*1.41* (p.42-43) As in Example 1.3.6, consider telegraph signals “dot” and “dash” sent in the proportion 3:4, where erratic transmissions cause a dot to become a dash with probability $\frac{1}{4}$ and a dash to become a dot with probability $\frac{1}{3}$.

(a) If a dash is received, what is the probability that a dash has been sent?

<details>
<summary>Solution: </summary>

Using the following symbols to denote the events: 

- $\mathcal{R}_{\text{dot}} (\mathcal{R}_{\text{dash}})$: a dot (dash) is received;
- $\mathcal{S}_{\text{dot}} (\mathcal{S}_{\text{dash}})$: a dot (dash) has been sent.

We know that 

$$
P(\mathcal{S}_{\text{dot}}) = \frac{3}{7},\ P(\mathcal{S}_{\text{dash}}) = \frac{4}{7},
$$

$$
P(\mathcal{R}_{\text{dash}} \mid \mathcal{S}_{\text{dot}}) = \frac{1}{4},\ P(\mathcal{R}_{\text{dot}} \mid \mathcal{S}_{\text{dash}}) = \frac{1}{3}.
$$

From the raw of total probability, we have 

$$
\begin{aligned}
    P(\mathcal{R}_{\text{dash}}) &= P(\mathcal{R}_{\text{dash}} \mid \mathcal{S}_{\text{dash}}) P(\mathcal{S}_{\text{dash}}) + P(\mathcal{R}_{\text{dash}} \mid \mathcal{S}_{\text{dot}}) P(\mathcal{S}_{\text{dot}}) \\
    &= \left(1 - \frac{1}{3} \right) \times \frac{4}{7} + \frac{1}{4} \times \frac{3}{7} \\
    &= \frac{41}{84}.
\end{aligned}
$$

Then, from the Bayes formula, we have 

$$
P(\mathcal{S}_{\text{dash}} \mid \mathcal{R}_{\text{dash}}) = \frac{P(\mathcal{R}_{\text{dash}} \mid \mathcal{S}_{\text{dash}}) P(\mathcal{S}_{\text{dash}})}{P(\mathcal{R}_{\text{dash}})} = \frac{(1 - 1 / 3) \times 4 / 7}{41 / 84} = \frac{32}{41}.
$$
</details>

(b) Assuming independence between signals, if the message dot-dot was received, what is the probability distribution of the four possible messages that could have been sent?

<details>
<summary>Solution: </summary>

Using the similar notations as (a), we have 

$$
P(\mathcal{R}_{\text{dot-dot}}) = P^{2}(\mathcal{R}_{\text{dot}}) = \left(1 - \frac{41}{84} \right)^{2} = \frac{1849}{7056},
$$

$$
P(\mathcal{R}_{\text{dot-dot}} \mid \mathcal{S}_{\text{dot-dot}}) = P^{2}(R_{\text{dot}} \mid \mathcal{S}_{\text{dot}}) = \left(1 - \frac{1}{4} \right)^{2} = \frac{9}{16},
$$

$$
P(\mathcal{R}_{\text{dot-dot}} \mid \mathcal{S}_{\text{dot-dash}}) = P(R_{\text{dot}} \mid \mathcal{S}_{\text{dot}}) P(R_{\text{dot}} \mid \mathcal{S}_{\text{dash}}) = \left(1 - \frac{1}{4} \right) \times \frac{1}{3} = \frac{1}{4},
$$

$$
P(\mathcal{R}_{\text{dot-dot}} \mid \mathcal{S}_{\text{dash-dot}}) = P(R_{\text{dot}} \mid \mathcal{S}_{\text{dash}}) P(R_{\text{dot}} \mid \mathcal{S}_{\text{dot}}) = \frac{1}{3} \times \left(1 - \frac{1}{4} \right) = \frac{1}{4},
$$

$$
P(\mathcal{R}_{\text{dot-dot}} \mid \mathcal{S}_{\text{dash-dash}}) = P^{2}(R_{\text{dot}} \mid \mathcal{S}_{\text{dash}}) = \left(\frac{1}{3} \right)^{2} = \frac{1}{9}.
$$

Thus, from the Bayes formula, we have 

$$
\begin{aligned}
    P(\mathcal{S}_{\text{dot-dot}} \mid \mathcal{R}_{\text{dot-dot}}) &= \frac{P(\mathcal{R}_{\text{dot-dot}} \mid \mathcal{S}_{\text{dot-dot}}) P(\mathcal{S}_{\text{dot-dot}})}{P(\mathcal{R}_{\text{dot-dot}})} \\
    &= \frac{9 / 16 \times (3 / 7)^{2}}{1849 / 7056} \\
    &= \frac{729}{1849},
\end{aligned}
$$

$$
\begin{aligned}
    P(\mathcal{S}_{\text{dot-dash}} \mid \mathcal{R}_{\text{dot-dot}}) &= \frac{P(\mathcal{R}_{\text{dot-dot}} \mid \mathcal{S}_{\text{dot-dash}}) P(\mathcal{S}_{\text{dot-dash}})}{P(\mathcal{R}_{\text{dot-dot}})} \\
    &= \frac{1 / 4 \times (3 / 7 \times 4 / 7)}{1849 / 7056} \\
    &= \frac{432}{1849},
\end{aligned}
$$

$$
\begin{aligned}
    P(\mathcal{S}_{\text{dash-dot}} \mid \mathcal{R}_{\text{dot-dot}}) &= \frac{P(\mathcal{R}_{\text{dot-dot}} \mid \mathcal{S}_{\text{dash-dot}}) P(\mathcal{S}_{\text{dash-dot}})}{P(\mathcal{R}_{\text{dot-dot}})} \\
    &= \frac{1 / 4 \times (4 / 7 \times 3 / 7)}{1849 / 7056} \\
    &= \frac{432}{1849},
\end{aligned}
$$

$$
\begin{aligned}
    P(\mathcal{S}_{\text{dash-dash}} \mid \mathcal{R}_{\text{dot-dot}}) &= \frac{P(\mathcal{R}_{\text{dot-dot}} \mid \mathcal{S}_{\text{dash-dash}}) P(\mathcal{S}_{\text{dash-dash}})}{P(\mathcal{R}_{\text{dot-dot}})} \\
    &= \frac{1 / 9 \times (4 / 7)^{2}}{1849 / 7056} \\
    &= \frac{256}{1849}.
\end{aligned}
$$

> [!NOTE]
> Actually the independence condition would lead us to a shortcut &mdash; $P(\mathcal{S}_{\text{dot-dot}} \mid \mathcal{R}_{\text{dot-dot}}) = P^{2}(\mathcal{S}_{\text{dot}} \mid \mathcal{R}_{\text{dot}})$ (others are similar). Thus, we only need to calculate $P(\mathcal{S}_{\text{dot}} \mid \mathcal{R}_{\text{dot}})$ and $P(\mathcal{S}_{\text{dash}} \mid \mathcal{R}_{\text{dot}})$ to get the solution, which would be quicker and easier than using the method above.
</details>

### Additional Exercises

1. Prove the following inequality.

    $$
    \left\vert P(\mathcal{A}_1 \cap \mathcal{A}_2) - P(\mathcal{A}_1) P(\mathcal{A}_2) \right\vert \leqslant \frac{1}{4}.
    $$

    <details>
    <summary>Proof: </summary>

    See [Exercises in 1.2](#exercises).
    </details>
