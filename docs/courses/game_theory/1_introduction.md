# Introduction

### Guessing Game
- Everyone choose a number between $[0,\ 100]$.
- The one whose number is close to $\frac{2}{3}$ of the average win.
- If you assume all other people choose the average of the range, i.e., $50$, then you may choose $50\times \frac{2}{3}\approx 33$. If you assume all other people have thought about this, i.e., they will choose $33$, then you may choose $33\times \frac{2}{3}= 22$, and so on.
- Another prospective: the answer cannot exceed $100\times \frac{2}{3}\approx 67$, similarly we can repeat the process to get $67\times \frac{2}{3}\approx 45$, $45\times \frac{2}{3}=30$, and so on.
- <mark>Both ways of thinking will derive $0$ ultimately, but choosing $0$ must not be the optimal strategy.</mark>

### Concepts in Game Theory

#### Players
$$
I = \{1,\ \cdots,\ n\}
$$

#### Actions
$$
a = (a_1,\ \cdots,\ a_n) \in A = A_1 \times \cdots \times A_n
$$

#### Payoff Function (Utility Function)
$$
u_i:A \to \mathbb{R} \text{ for player } i
$$

#### Example: Prisoner's Dilemma
<div align='center'>

![](image/2022-02-16-11-07-15.png)
</div align='center'>

where action $\text{C}$ means "Cooperate" while $\text{D}$ means "Defect". The numbers in each cell are payoffs (the former one is the payoff of Person 1 and the latter is the payoff of Person 2).

There are 2 players in this example.

$$
A_1=A_2=\{\text{C},\ \text{D}\},\ A=A_1\times A_2=\{(\text{C},\ \text{C}),\ (\text{C},\ \text{D}),\ (\text{D},\ \text{C}),\ (\text{D},\ \text{D})\}
$$

$$
u_1(a)=\begin{cases}
  2, & a=(\text{C},\ \text{C}) \\
  0, & a=(\text{C},\ \text{D}) \\
  3, & a=(\text{D},\ \text{C}) \\
  1, & a=(\text{D},\ \text{D}) \\
\end{cases},\ 
u_2(a)=\begin{cases}
  2, & a=(\text{C},\ \text{C}) \\
  3, & a=(\text{C},\ \text{D}) \\
  0, & a=(\text{D},\ \text{C}) \\
  1, & a=(\text{D},\ \text{D}) \\
\end{cases}
$$

### Best Response
Denote $a_{-i}=(a_1,\ \cdots,\ a_{i-1},\ a_{i+1},\ \cdots,\ a_n)$ which is others' actions for player $i$. Now $a=(a_i,\ a_{-i})$. Also denote $B_i(a_{-i})$ as the best response set of player $i$. Then a best response
$$
a_i^{*} \in B_i(a_{-i})\ \text{iff}\ \forall a_i \in A_i,\ u_i\left( \left( a_i^{*},\ a_{-i} \right)  \right)\geqslant u_i\left( \left( a_i,\ a_{-i} \right)  \right).
$$

### Nash Equilibrium

#### Definition
$a$ is a Nash equilibrium iff $\forall i$, $a_i \in B_i(a_{-i})$, we can write it as $a \in B(a)$.

#### Discrete Example: Prisoner's Dilemma
In the [Prisoner's Dilemma](#example-prisoners-dilemma) described above, consider the following cases: 
- if $a_2=\text{C}$, then $a_1^{*}$ should be $D$ since $u_1(\text{D},\ \text{C}) > u_1(\text{C},\ \text{C})$ and similarly for $a_2^{*}$;
- if $a_2=\text{D}$, then $a_1^{*}$ is still $D$ since $u_1(\text{D},\ \text{D}) > u_1(\text{C},\ \text{D})$ and similarly for $a_2^{*}$.

Thus, $(\text{D},\ \text{D})$ is a Nash equilibrium.

#### Continuous Example: Price Competition
There are 2 restaurants with prices $P_x$ and $P_y$. The number of customers for each restaurant is given by 
$$
Q_x = 44 - 2P_x + P_y \\
Q_y = 44 - 2P_y + P_x
$$

The cost of serving each customer is $8$. Each restaurant's goal is to maximize its profit and they set prices simultaneously. Since the quantity functions are the same form, 2 restaurants are <mark>substitute</mark>.

Thus, the profit of restaurant $x$ is 
$$
\Pi_x = (P_x-8)(44-2P_x+P_y)=-2P_x^2+(P_y+60)P_x-8(P_y+44)
$$

By letting $\frac{\partial \Pi_x}{\partial P_x}=0$ (<abbr title='First Order Condition'>FOC</abbr>), we get the best response function for $x$: 
$$
P_x^{*} = \frac{P_y+60}{4} = \frac{P_y}{4} + 15
$$

Similarly for $y$, the best response function is $P_y^{*} = \frac{P_x}{4} + 15$.

According to the definition of Nash equilibrium, the prices should satisfy 
$$
\begin{cases}
  P_x = \frac{P_y}{4} + 15 \\
  P_y = \frac{P_x}{4} + 15 \\
\end{cases}
$$

which means $(P_x^{*},\ P_y^{*})=(20,\ 20)$.

### Method of Scoring
Control $a_{-i}$ and underline the best response of $i$.

#### Example: Street Garden Game
Emily, Nina and Talia have to choose simultaneously whether to contribute toward the creation of a flower garden for their small street. The payoff pattern is shown below.

<div align='center'>

![](image/2022-02-23-15-19-18.png)
</div align='center'>

The numbers in each cell represent their utility respectively.

After scoring the best responses, we can see the Nash equilibrium is that they all choose to not contribute.