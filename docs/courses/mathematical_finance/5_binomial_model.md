# Binomial Model

### Single-Period Binomial Model

There are only 2 time states in a single-period binomial model, initial time $t=0$ and terminal time $t=1$. The uncertainty is described by the probability space $(\Omega,\ \mathcal{F},\ \mathbb{P})$ where $\Omega = \{u,\ d\}$, $\mathcal{F} = 2^{\Omega}$, $0<\mathbb{P}(u)=p_u<1$ and $\mathbb{P}(\text{d})=p_d=1-p_u$.

There are 3 assets: 

- A risk-free asset with interest rate $r>0$. The price process is denoted by $B_1=B_0(1+r)$.
- A stock with random price process $S_1 = S_0\, u$ or $S_0\, d$ for known constant $S_0$.
- An European call option with terminal payoff $V_1 = (S_1-K)^{+}$ for strike price $K$.

Our purpose is to valuate the option at $t=0$.

Suppose at $t=0$ we sell the call option to get $V_0$ and we have to pay $V_1$ at $t=1$. Also assume that we buy $\Delta_0$ shares of the stock to hedge our short position. Note that we can use the remaining money, i.e., $V_0-\Delta_0 S_0$ to buy the risk-free asset (if the number is negative, that means we sell the risk-free asset). Thus, for fair valuation, we have 

$$
(V_0-\Delta_0 S_0)(1+r) + \Delta_0 S_1 = V_1
$$

Since we only consider 2 states $u$ and $d$ for the stock, the equation can be rewritten as follow: 

$$
\begin{cases}
    (V_0-\Delta_0 S_0)(1+r) + \Delta_0 S_1(u) = V_1(u) \\
    {}\\
    (V_0-\Delta_0 S_0)(1+r) + \Delta_0 S_1(d) = V_1(d) \\
\end{cases}\implies 
\begin{cases}
    \Delta_0 = \frac{V_1(u)-V_1(d)}{S_1(u)-S_1(d)} \\
    {}\\
    V_0 = \frac{\widetilde{p}_u V_1(u) + \widetilde{p}_d V_1(d)}{1+r}
\end{cases}
$$

where $S_1(u)=S_0\, u$, $S_1(d)=S_0\, d$, $V_1(u)=(S_0\, u-K)^{+}$, $V_1(d)=(S_0\, d-K)^{+}$ and 

$$
\widetilde{p}_u = \frac{1+r-d}{u-d}, \qquad \widetilde{p}_d = 1 - \widetilde{p}_u
$$

where $d<1+r<u$ to ensure the positive probability.

For a probability measure $\widetilde{\mathbb{P}}$ with $\widetilde{\mathbb{P}}(u)=\widetilde{p}_u$ and $\widetilde{\mathbb{P}}(d)=\widetilde{p}_d$, we have 

$$
V_0 = \frac{\mathrm{E}^{\widetilde{\mathbb{P}}}(V_1)}{1+r}
$$

and thus $\widetilde{\mathbb{P}}$ is called <mark>risk-neutral probability measure</mark>.

#### State Prices and Stochastic Discount Factor (SDF)

In the model above, there are 2 states $u$ and $d$, and thus there are 2 special claims with unit payoff at either state $u$ or $d$ and zero payoff at the other state, we denote them by 

$$
\begin{bmatrix}	1 \\0 \\\end{bmatrix}, \qquad \begin{bmatrix}	0 \\	1 \\\end{bmatrix}
$$

respectively. The 2 special claims are called <mark>Arrow securities</mark>. The prices at $t=0$ is 

$$
\psi_u = \frac{\widetilde{p}_u}{1+r}, \qquad \psi_d = \frac{\widetilde{p}_d}{1+r}
$$

and are called <mark>state prices</mark>.

Thus, the price of any claim $X=\begin{bmatrix}	x_u & x_d \\\end{bmatrix}^{\prime}$ at $t=0$ can be represented by 

$$
V_x = x_u \psi_u + x_d \psi_d
$$

We call the vector $\pi = \begin{bmatrix}	\pi_u & \pi_d \\\end{bmatrix}^{\prime} := \begin{bmatrix}	\frac{\psi_u}{p_u} & \frac{\psi_d}{p_d} \\\end{bmatrix}^{\prime}$ <mark>stochastic discount factor (SDF)</mark>. Using SDF we can write the price of any claim $X$ as 

$$
V_x = x_u \pi_u \cdot p_u + x_d \pi_d \cdot p_d = \mathrm{E}(X \pi)
$$

Hence, it suffices to know one of the following: 

- risk neutral probability measure $\widetilde{\mathbb{P}}$
- state price vector $\psi$
- SDF $\pi$

to determine the price of a claim.

### Multi-Period Binomial Model

Instead of just considering 2 time states, now we consider $N$ periods with initial time $t=0$ and terminal time $t=N$.

There are still 3 assets: 

- A risk-free asset with interest rate $r>0$. The price process is denoted by $B_{t+1}=B_t(1+r)$.
- A stock with random price process $S_{t+1} = S_t\, u$ or $S_t\, d$ for known constant $S_0$.
- An European call option with terminal payoff $V_N = (S_N-K)^{+}$ for strike price $K$.

Suppose at $t=0$ we sell the call option to get $V_0$ and we have to pay $V_N$ at $t=N$. Also assume that we buy $\Delta_0$ shares of the stock to hedge our short position. Note that we can use the remaining money, i.e., $V_0-\Delta_0 S_0$ to buy the risk-free asset (if the number is negative, that means we sell the risk-free asset). Thus, for fair valuation, at $t=1$, we have 

$$
(V_0-\Delta_0 S_0)(1+r) + \Delta_0 S_1 = V_1
$$

Since we only consider 2 states $u$ and $d$ for the stock, the equation can be rewritten as follow: 

$$
\begin{cases}
    (V_0-\Delta_0 S_0)(1+r) + \Delta_0 S_1(u) = V_1(u) \\
    {}\\
    (V_0-\Delta_0 S_0)(1+r) + \Delta_0 S_1(d) = V_1(d) \\
\end{cases}\implies 
\begin{cases}
    \Delta_0 = \frac{V_1(u)-V_1(d)}{S_1(u)-S_1(d)} \\
    {}\\
    V_0 = \frac{\widetilde{p}_u V_1(u) + \widetilde{p}_d V_1(d)}{1+r}
\end{cases}
$$

We buy $\Delta_1(u)$ or $\Delta_1(d)$ shares of the stock if the state is $u$ or $d$ to continue to hedge our short position in the option. We still use the remaining money to buy the risk-free asset. There would be 4 states at $t=2$: $uu$, $ud$, $du$ and $dd$. Thus, the no-arbitrage equations are 

$$
\begin{cases}
    (V_1(u)-\Delta_1(u) S_1(u))(1+r) + \Delta_1(u) S_2(uu) = V_2(uu) \\
    {}\\
    (V_1(u)-\Delta_1(u) S_1(u))(1+r) + \Delta_1(u) S_2(ud) = V_2(ud) \\
    {}\\
    (V_1(d)-\Delta_1(d) S_1(d))(1+r) + \Delta_1(d) S_2(du) = V_2(du) \\
    {}\\
    (V_1(d)-\Delta_1(d) S_1(d))(1+r) + \Delta_1(d) S_2(dd) = V_2(dd) \\
\end{cases}\implies 
\begin{cases}
    \Delta_1(u) = \frac{V_2(uu)-V_1(ud)}{S_2(uu)-S_2(ud)} \\
    {}\\
    \Delta_1(d) = \frac{V_2(du)-V_1(dd)}{S_2(du)-S_2(dd)} \\
    {}\\
    V_1(u) = \frac{\widetilde{p}_u V_2(uu) + \widetilde{p}_d V_2(ud)}{1+r}\\
    {}\\
    V_1(d) = \frac{\widetilde{p}_u V_2(du) + \widetilde{p}_d V_2(dd)}{1+r}
\end{cases}
$$

...

Then we can obtain a similar result as in the single-period model: 

$$
\begin{aligned}
 V_0 &= \mathrm{E}_0^{\widetilde{\mathbb{P}}}(V_1)\\
 V_1 &= \mathrm{E}_1^{\widetilde{\mathbb{P}}}(V_2)\\
 &\cdots\\
 V_{N-1} &= \mathrm{E}_N^{\widetilde{\mathbb{P}}}(V_N)\\
\end{aligned}
$$

> [!TIP]
> At every time step $n$, we use $\Delta_n(S_n) = \frac{V_{n+1}(u\, S_n)-V_{n+1}(d\, S_n)}{u\, S_n - d\, S_n}$ to hedge our portfolio.

Through this iterative process, the fair value of the call option is given by

$$
V_0 = \frac{1}{(1+r)^{N}} \sum\limits_{k=0}^{N} \begin{pmatrix}	N \\ k  \\\end{pmatrix} \widetilde{p}_u^{k}\ \widetilde{p}_d^{N-k} \left( S_0 u^{k} d^{N-k},\ K \right) ^{+}
$$

Actually, any contingent claim can be valuated using the formula above with different payoff function.