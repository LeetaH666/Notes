## Sequential-Move Games (Extensive Form Games)

### Easy Understanding
Players choose actions in a particular sequence instead of choosing actions simultaneously (normal form games).

#### Example: Enter in the Market
Consider an incumbent $\text{I}$ and an entrant $\text{E}$. The entrant can choose to enter in ($\text{In}$) the market or stay out ($\text{Out}$) of it. If the entrant choose to enter in, the incumbent can choose to accommodate ($\text{A}$) or fight ($\text{F}$).

We use a game tree to represent the payoff pattern where the first number is the payoff of the player who choose actions first while the second one is the payoff of the other player: 

<div align='center'>

![](image/2022-03-21-22-26-04.png)
</div align='center'>

At the node $\text{I}$, the best response of the incumbent is $\text{A}$. The tree starting at node $\text{I}$ is called a <mark>subgame</mark>.

At the node $\text{E}$, if the entrant choose to enter in, then he will get payoff $1$ since the rational incumbent would choose to accommodate ($\text{F}$ is not <mark>sequentially rational</mark>); if the entrant choose to stay out, then he will get payoff $0$. So the best response of the entrant is to enter in the market.

#### Perfect Information
Players have the same and full information.

### Formal Definition
An extensive form game with perfect information has the following components: 
- A set of <mark>players</mark>, $I$.

  In the game above, the set of players $I = \{\text{E},\ \text{I}\}$.
- A set of possible <mark>histories</mark> of previous events, $H$, that satisfies the following properties: 
  - The initial history $\emptyset$ is a member of $H$.
  - If a history of previous events $(a^{k})_{k=1,\ \cdots,\ K} \in H$, then $(a^{k})_{k=1,\ \cdots,\ L} \in H\ (L<K)$.
  - If an infinite sequence $(a^{k})_{k=1,\ \cdots}$ satisfies $(a^{k})_{k=1,\ \cdots,\ L} \in H$, $\forall L>0$, then $(a^{k})_{k=1,\ \cdots} \in H$.
  - Perfect information: After every history $(a^{k})_{k=1,\ \cdots,\ K}$, each player is perfectly informed of $(a^{k})_{k=1,\ \cdots,\ K}$, i.e., all the previous events of the history.

  The set of possible histories $H = \{\emptyset,\ \text{In},\ \text{Out},\ (\text{In},\ \text{A}),\ (\text{In},\ \text{F})\}$.
- A <mark>player function</mark> $P$ that assignsa a player $i\in I$ to each nonterminal history, i.e., $P(h)$ is the player who takes an action after the history $h$.

  > [!TIP]
  > A history $(a^{k})_{k=1,\ \cdots,\ K}$ is <mark>terminal</mark> if it is infinite or if there is no $(a^{k})_{k=1,\ \cdots,\ K+1}$ s.t. $(a^{k})_{k=1,\ \cdots,\ K+1} \in H$.<br>For a set of terminal histories $Z$, $H\setminus Z$ is <mark>nonterminal</mark>. A nonterminal history also denotes a decision node.

  The set of terminal histories $Z = \{\text{Out},\ (\text{In},\ \text{A}),\ (\text{In},\ \text{F})\}$.

  Decision nodes: $\emptyset$ and $\text{In}$.

  $P(\emptyset)=\text{E}$ and $P(\text{In})=\text{I}$.
- <mark>Payoff functions</mark> $\{u_i\}$ for players.
- <mark>Strategy functions</mark> $\{s_i\}$ that assign an action $a\in A(h)$ to every nonterminal history, where $A(h)$ is the action set of player $P(h)=i$.

  $A(\emptyset)=\{\text{In},\ \text{Out}\}$ and $A(\text{In})=\{\text{A},\ \text{F}\}$.

### Subgame

### Backward Induction

### Subgame Perfect Nash Equilibrium (SPNE)

### Information Set

### Games of Incomplete Information