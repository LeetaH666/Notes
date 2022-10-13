### Established by Usage

Uppercase for random variables and lowercase for specific values.

### Terminology

- State $S$: a state $S=s$ describes current environment;
- Action $A$: an action $A=a$ can get response from the environment and may change the environment;
- Agent: an agent is the one who takes action at a given state.
- Policy (function) $\pi: (s,\ a) \to [0,\ 1]$: probability of taking action $a$ given state $s$, i.e., 

  $$
  \pi(a|s) = \mathrm{P}(A=a|S=s)
  $$

    > Actions have randomness!

- Reward $R$: reward is set to encourage the agent to take some actions;
- State transition (can be random):

  $$
  p(s^{\prime}|s,\ a) = \mathrm{P}(S^{\prime}=s^{\prime}|S=s,\ A=a)
  $$

  where $s^{\prime}$ is a new state after taking action $a$ at the old state $s$.

- Discounted return $U$ at time $t$: 
  
  $$
  U_t = R_t + \gamma R_{t+1} + \gamma^{2} R_{t+2} + \cdots
  $$

  is the present value of the following return, where $\gamma$ is the discount factor.

- Action-value function $Q(s,\ a)$