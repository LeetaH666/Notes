# Games of Incomplete Information

Players in a game of incomplete information have different <mark>types</mark>, i.e., they can be in different states.

The set of types of player $i$ is $\Theta_i$ and $\theta_i\in \Theta_i$ is a specific type of player $i$. The set of states of the game is $\Theta = \times_{i=1}^{n}\Theta_i$, i.e., $\Theta_1\times \Theta_2\times \cdots \times \Theta_n$, and $\theta = (\theta_1,\ \theta_2,\ \cdots,\ \theta_n)$ is a specific state of the game. For player $i$, a state of the game can be written as $(\theta_i,\ \theta_{-i})$ where $\theta_{-i}$ denotes others' types.

### Example: Cournot with Uncertain Demand
Recall the [Cournot Equilibrium](courses/game_theory/3_nash_equilibrium.md#cournot-equilibrium) we have discussed before. In the previous discussion, the inverse demand function is fixed. Now we assume there is uncertainty on the demand and the inverse demand function becomes 
$$
P(Q) = k - Q
$$where $k$ is a random variable that $k=1$ with probability $\mu$ and $k=2$ with probability $1-\mu$, and $Q=q_1+q_2$ is the total quantity of production.

Furthermore, we assume that firm 1 has done some market research and thus has learned the value of $k$ while firm 2 has no information about this. The strategy of firm 1 is $q_1=q_{L}$ if the demand is low, i.e., $k=1$, and would be $q_1=q_{H}$ if the demand is high, i.e., $k=2$.

We also assume that the cost is $0$ (for simplicity).

Thus, the expected profit of firm 2 is 
$$
\mathrm{E}(\pi_2(q_2)) = \mathrm{E}(P(Q)\cdot q_2) = \mu (1-q_{L}-q_2)q_2 + (1-\mu)(2-q_{H}-q_2)q_2
$$To maximize the expected profit, we check the <abbr title='First Order Condition'>FOC</abbr>: 
$$
\begin{aligned}
 \mu (-q_2+1-q_L-q_2) + (1-\mu) (-q_2+2-q_H-q_2) &= 0\\
 q_2^{*} &= \frac{\mu(1-q_{L})+(1-\mu)(2-q_{H})}{2} \\
\end{aligned}
$$The profit of firm 1 is 
$$
\pi_1(q_1) = (k-q_1-q_2)q_1
$$with <abbr title='First Order Condition'>FOC</abbr>
$$
\begin{aligned}
 -q_1 + k - q_1 - q_2 &= 0\\
 q_1^{*} &= \frac{k-q_2}{2}
\end{aligned}
$$which in turn implies 
$$
q_{L} = \frac{1-q_2}{2} \qquad q_{H} = \frac{2-q_2}{2}
$$Substitute these 2 solutions into $q_2^{*}$, we have 
$$
\begin{aligned}
 q_2^{*} &= \frac{\mu\left( 1- \frac{1-q_2^{*}}{2} \right) + (1-\mu)\left( 2- \frac{2-q_2^{*}}{2} \right) }{2}\\
 \left(2-\frac{\mu}{2}-\frac{1-\mu}{2}\right)q_2^{*} &= \frac{\mu}{2} + (1-\mu)\\
 \frac{3}{2}q_2^{*} &= \frac{\mathrm{E}(k)}{2}\\
 q_2^{*} &= \frac{\mathrm{E}(k)}{3}
\end{aligned}
$$Substitute this solution into $q_1^{*}$, we have 
$$
q_{L} = \frac{1}{2} - \frac{\mathrm{E}(k)}{6} \qquad q_{H} = 1 - \frac{\mathrm{E}(k)}{6}
$$

### General Cases
In a game of incomplete information, the payoff of a player $i$ depends both on the strategy chosen and the state of the game, i.e., $u_i:\ S \times \Theta \to \mathbb{R}$. Player $i$ only knows his type $\theta_i$ and thus has to take expectations over $\theta_{-i}$.

Since the types should be assigned a probability distribution, we assume that all players hold the same prior $\mu$ over $\Theta$. Thus, a player of type $\theta_i$ assigns a probability $\mu(\theta_{-i}|\theta_i)$.

To sum up, a game of incomplete information is a collection 
$$
\Gamma = \{I,\ \{S_i\},\ \{u_i\},\ \{\Theta_i\},\ \mu\}
$$Now if a player $i$ with type $\theta_i$ choose a strategy $\hat{s}_i = s_i(\theta_i)$, then the expected payoff of this strategy is 
$$
U^{i}(\hat{s}_i,\ s_{-i}(\cdot)|\theta_i) = \sum\limits_{\theta_{-i}\in \Theta_{-i}} \mu(\theta_{-i}|\theta_i)\cdot u_i((\hat{s}_{i},\ s_{-i}(\theta_{-i})),\ (\theta_{-i},\ \theta_i))
$$

#### Incomplete Information with Mixed Strategies
If we consider mixed strategies in a game of incomplete information, i.e., let $\sigma_{-i}(s_{-i}|\theta_{-i})$ be the probability distribution of players in $I\setminus \{i\}$ to choose strategies $s_{-i}$ when their type is $\theta_{-i}$, then the expected payoff of player $i$ to choose $\hat{s}_i$ becomes 
$$
U^{i}(\hat{s}_i,\ \sigma_{-i}(\cdot)|\theta_i) = \sum\limits_{\theta_{-i}\in \Theta_{-i}} \mu(\theta_{-i}|\theta_i)\cdot \left( \sum\limits_{s_{-i}\in S_{-i}} \sigma_{-i}(s_{-i}|\theta_{-i})\cdot u_i((\hat{s}_{i},\ s_{-i}(\theta_{-i})),\ (\theta_{-i},\ \theta_i)) \right) 
$$and the expected payoff of player $i$ with mixed strategy $\sigma_i(s_i|\theta_i)$ is 
$$
U^{i}(\sigma_i(\cdot),\ \sigma_{-i}(\cdot)|\theta_i) = \sum\limits_{s_i\in S_i} \sigma_i(s_i|\theta_i)\cdot U^{i}(s_i,\ \sigma_{-i}(\cdot)|\theta_i)
$$

### Bayesian Equilibrium
Given a normal form game with incomplete information $\Gamma = \{I,\ \{S_i\},\ \{u_i\},\ \{\Theta_i\},\ \mu\}$, a Bayesian equilibrium is a strategy profile 
$$
\sigma^{*}(\cdot) = (\sigma_1^{*}(\cdot),\ \sigma_2^{*}(\cdot),\ \cdots,\ \sigma_n^{*}(\cdot))
$$s.t. for each player $i$ and each type $\theta_i \in \Theta_i$, the expected payoff 
$$
U^{i}(\sigma_i^{*}(\cdot),\ \sigma_{-i}^{*}(\cdot)|\theta_i) \geqslant U^{i}(\sigma_i(\cdot),\ \sigma_{-i}^{*}(\cdot)|\theta_i)
$$for each $\sigma_i(\cdot)\in \Sigma_i$.