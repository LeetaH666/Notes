# Dominated Strategies

> [!NOTE]
> In this notes, we use $a$ to denote action and $s$ to denote strategy.<br>Strategy is a contingent action plan, i.e., it is a plan that the player consider based on different future states (conditional).<br>In simultaneous games, i.e., players decide their actions at the same time, strategy and action are the same thing because players only consider the fixed history states. But they will be different in [sequential-move games](/courses/game_theory/4_sequential_move_games.md#formal-definition).

### Dominance

#### Strict Dominance
Strategy $\overline{s}_i \in S_i$ is <mark>strictly dominated</mark> if there is <mark>some</mark> strategy $\hat{s}_i \in S_i$ s.t. $u_i((\hat{s}_i,\ s_{-i}))>u_i((\overline{s}_i,\ s_{-i}))$ for each $s_{-i} \in S_{-i}$.

#### Weak Dominance
Strategy $\overline{s}_i \in S_i$ is <mark>weakly dominated</mark> if there is some strategy $\hat{s}_i \in S_i$ s.t. $u_i((\hat{s}_i,\ s_{-i}))\geqslant u_i((\overline{s}_i,\ s_{-i}))$ for each $s_{-i} \in S_{-i}$ and $u_i((\hat{s}_i,\ s_{-i}))>u_i((\overline{s}_i,\ s_{-i}))$ for some $s_{-i}$.

#### Example: Second Price Auction
There is one indivisible unit of an object for sale and there are $n$ potential buyers with commonly known valuations $0<v_1<v_2<\cdots<v_{n}$ for the object.

Buyers bid simultaneously and each submits bid $s_i \in [0,\ +\infty)$. The bidder with the highest bid wins the auction and pays the second highest bid (if there are several winners, then randomly choose one).

Thus, bidder $i$'s payoff ($i=1,\ 2,\ \cdots,\ n$) is given by 
$$
u_i = \begin{cases}
  0,& s_i<\underset{j\neq i}{\mathrm{max}}\ s_j \\
  \frac{v_i-\underset{j\neq i}{\mathrm{max}}\ s_j}{k},& s_i=\underset{j\neq i}{\mathrm{max}}\ s_j \\
  v_i-\underset{j\neq i}{\mathrm{max}}\ s_j,& s_i>\underset{j\neq i}{\mathrm{max}}\ s_j
\end{cases}
$$
where $k$ is the num of winners.

Let $r=\underset{j\neq i}{\mathrm{max}}\ s_j$, we can see the choice of $r$ as the actions of buyers except $i$. The game between buyer $i$ and other buyers can be written as the following payoff matrix: 

<div align='center'>

![](image/2022-02-28-09-10-56.png)
</div align='center'>

Note that bidding $s_i = v_i$ is a <mark>weakly dominant</mark> strategy even if buyer $i$ does not know others' valuations.

### Method of Eliminating
Except for using method of scoring, we can also get Nash equilibrium by eliminating <mark>strictly dominated</mark> strategies iteratively.

#### Example
<div align='center'>

![](image/2022-03-02-10-46-34.png)
</div align='center'>

We can easily find that for column player, $\text{Left}$ and $\text{Right}$ are both strictly dominated by $\text{Center}$, which means we can eliminate them. Then, the matrix becomes $3\times 1$ as follows: 

<div align='center'>

![](image/2022-03-02-10-51-15.png)
</div align='center'>

Now we can see that for row player, $\text{Up}$ and $\text{Down}$ are both strictly dominated by $\text{Middle}$. By eliminating these strategies we get the Nash equilibrium $(\text{Middle},\ \text{Center})$.

> [!NOTE]
> The method of eliminating is to eliminate strictly dominated strategies. By eliminating weakly dominated strategies iteratively, we do not always get the Nash equilibrium because the <mark>order of eliminating matters</mark>.