# Equilibrium Pricing Theory and a Jump-Diffusion Model

### A Jump-Diffusion Model
Remember in [last chapter](courses/mathematical_finance/7_pricing_corporate_securities.md#cash-flow-model) we have consider a cash flow model under <abbr title='Geometric Brownian Motion'>GBM</abbr>, now we consider a jump-diffusion model.
$$
\mathrm{d} \delta_{t} = \mu_{\delta} \mathrm{d} t + \rho \sigma \mathrm{d} Z_{t}^{1} + \sqrt{1-\rho^{2}} \sigma \mathrm{d} Z_{t}^{2} + \mathrm{d}\left(\sum_{i=1}^{N_{t}} Z_{i}\right)
$$

where $\delta_0$ is given, $\mu_{\delta}$ is the mean growth rate, $\sigma$ is the volatility rate, $Z_t^{1}$ and $Z_t^{2}$ are 2 standard Brownian motions, jumps $Z_i \ (i=1,\ 2,\ \cdots)$ are i.i.d. random variables following a double exponential distribution and the number of jumps $N_t$ is a Poisson process with intensity $\lambda$.

> [!NOTE]
> $\rho \sigma \mathrm{d} Z_{t}^{1} + \sqrt{1-\rho^{2}} \sigma \mathrm{d} Z_{t}^{2}$ is also a standard Brownian motion. Thus, <mark>when there is no jump, the cash flow model is an <abbr title='Simple Brownian Motion'>SBM</abbr>, not <abbr title='Geometric Brownian Motion'>GBM</abbr></mark>.
> 
> In a time period $[t,\ t+\mathrm{d}t]$, the number of jumps is a Poisson prcess with intensity $\lambda \mathrm{d}t$, which means $\mathbb{P}(N=n)=\frac{(\lambda \mathrm{d}t)^{n}}{n!}e^{-\lambda \mathrm{d}t}$. For $n=0$, the probability is $e^{-\lambda \mathrm{d}t} = 1 - \lambda \mathrm{d}t + \omicron(\mathrm{d}t)$; for $n=1$, the probability is $\lambda \mathrm{d}t\cdot e^{-\lambda \mathrm{d}t} = \lambda \mathrm{d}t\cdot(1 - \lambda \mathrm{d}t + \omicron(\mathrm{d}t)) = \lambda \mathrm{d}t + \omicron(\mathrm{d}t)$; for $n>1$, the probabilities are all $\omicron(\mathrm{d}t)$. Thus, we only consider one jump or no jump in a small enough time period.

$Z_t^{1}$, $Z_t^{2}$ and $N_t$ are independent with each other and are defined on a complete filtered probability space $(\Omega,\ \mathcal{F},\ (\mathcal{F}_t)_{t\geqslant 0},\ \mathbb{P})$ with $\mathcal{F}_t = \sigma\left( \left\{ Z_s^{1},\ Z_s^{2},\ N_s,\ \sum\limits_{i=1}^{N_s} Z_i;\ 0\leqslant s\leqslant t \right\}  \right) $.

The density function of double exponential distribution is given by 
$$
h(z) = p \cdot \eta_{1} e^{-\eta_{1} z} \mathbf{1}_{\{z \geqslant 0\}} + q \cdot \eta_{2} e^{\eta_{2} z} \mathbf{1}_{\{z<0\}}
$$

where $p,\ q \geqslant 0$ are the probabilities of upward and downward jumps respectively and thus $p+q=1$, and $\eta_1,\ \eta_2 > 0$.

> [!TIP]
> The double exponential distribution is a combination of 2 exponential distributions. The mean of each is $\frac{1}{\eta_i} \ (i=1,\ 2)$ and thus $\mathrm{E}(Z_i)=\frac{p}{\eta_1}+\frac{q}{\eta_2}$.

### Pricing Corporate Securities

#### Dynamic Programming&mdash;SDF Derivation
Suppose investors have standard liquid financial opportunities which involve a risk-free asset with risk-free rate $r>0$ and a risky market portfolio governed by the following equation: 
$$
\mathrm{d}M_t = \mu_m M_t \mathrm{d}t + \sigma_m M_t \mathrm{d} Z_t^{1}
$$

where $M_0$ is given, $\mu_m$ and $\sigma_m$ are the expected return and the volatility rate of the market respectively.

Note that here we assume the market portfolio is only related to $Z^{1}$, which means <mark>$Z^{1}$ is the systematic risk while $Z^{2}$ is the nonsystematic risk.</mark>

Also assume that we have a representative agent who invests in the standard liquid financial market with some given initial wealth $w_0$. Therefore, the dynamics of the agent's wealth $W$ is given by 
$$
\mathrm{d} W_t = \theta_t \mathrm{d}M_t + r(W_t - \theta_t M_t) \mathrm{d}t - C_t \mathrm{d}t
$$

where $\theta_t$ is the number of shares of the market portfolio and $C_t$ is represents the consumption rate at time $t$.

The strategy $\left( \theta_t,\ C_t \right)_{t\geqslant 0} $ is said to be admissible for initial wealth $w_0$ if the wealth process $W\geqslant 0$ at all time. The set of all admissible strategies is denoted by $\mathcal{A}(w_0)$.

The agent aims to maximize his expected total discounted utility of consumption over an infinite planning horizon: 
$$
V(0,\ w_0;\ \theta,\ C) = \underset{\left( \theta,\ C \right)\in \mathcal{A}(w_0)}{\sup} \mathrm{E}\left[ \int_{0}^{\infty} U(t,\ C_t) ~\mathrm{d}t  \right]
$$

Remember the [Merton's Problem](courses/mathematical_finance/6_stochastic_process_and_control.md#example-merton39s-problem) we have discussed, we set the utility function as 
$$
U(t,\ c) = e^{-\rho t}\frac{c^{1-\gamma}}{1-\gamma}
$$

where $\rho,\ \gamma > 0$ and $\gamma\neq 1$.

Using the same method in [Merton's Problem](courses/mathematical_finance/6_stochastic_process_and_control.md#example-merton39s-problem), we can derive that 
$$
\begin{aligned}
 \theta_t^{*} &= \frac{\mu_m-r}{\sigma_m^{2}\gamma}\frac{W_t}{M_t}\\
 C_t^{*} &= \kappa W_t
\end{aligned}
$$

with 
$$
\kappa = \frac{\rho + (\gamma-1)\left( r+\frac{\eta^{2}}{2\gamma} \right) }{\gamma}
$$

where 
$$
\eta = \frac{\mu_m-r}{\sigma_m}
$$

is the market Sharpe ratio.

By substituting the optimal strategy into the dynamics of wealth $W$, we have 
$$
\begin{aligned}
 \mathrm{d} W_t &= \frac{\mu_m-r}{\sigma_m^{2}\gamma}\frac{W_t}{M_t} \mathrm{d}M_t + r\left( W_t - \frac{\mu_m-r}{\sigma_m^{2}\gamma}W_t \right)  \mathrm{d}t - \kappa W_t \mathrm{d}t\\
 \mathrm{d} W_t &= \frac{\mu_m-r}{\sigma_m^{2}\gamma}W_t \left( \mu_m \mathrm{d}t + \sigma_m \mathrm{d} Z_t^{1} \right)  + r\left( W_t - \frac{\mu_m-r}{\sigma_m^{2}\gamma}W_t \right)  \mathrm{d}t - \kappa W_t \mathrm{d}t\\
 \mathrm{d} W_t &= \left( \frac{\eta^{2}}{\gamma} + r - \kappa \right) W_t \mathrm{d}t + \frac{\eta}{\gamma}W_t \mathrm{d} Z_t^{1} \\
\end{aligned}
$$

which means $W_t$ is a <abbr title='Geometric Brownian Motion'>GBM</abbr>: 
$$
W_t = w_0 e^{\left( \frac{\eta^{2}}{\gamma} + r - \kappa - \frac{1}{2}\frac{\eta^{2}}{\gamma^{2}} \right)t + \frac{\eta}{\gamma}Z_t^{1}} = w_0 e^{\left[ r - \kappa + \frac{1}{2}\frac{\eta^{2}}{\gamma^{2}}(2\gamma-1) \right]t + \frac{\eta}{\gamma}Z_t^{1}}
$$

The <abbr title='Stochastic Discounted Factor'>SDF</abbr> is given by 
$$
\pi_t = \left. \frac{\partial U(t,\ C_t)}{\partial C_t} \right|_{C_t=C_t^{*}} = e^{-\rho t} (\kappa W_t)^{-\gamma} = (\kappa w_0)^{-\gamma} e^{\left( -r-\frac{1}{2}\eta^{2} \right)t - \eta Z_t^{1} }
$$

> [!TIP]
> Consider an one-period investment and consumption problem. There is an asset with price $p_t$ at time $t$ and payoff $x_{t+1}$ at time $t+1$. We have endowment $e_t$ at time $t$ and buy $\xi$ shares of the asset. Thus, the consumption would be $c_t = e_t - p_t \xi$ at time $t$ and $c_{t+1} = e_t + x_{t+1} \xi$ at time $t+1$.
> 
> We aim to maximize our total utility, i.e., 
> $$
> \underset{\xi}{\max} ~ [u(c_t) + \mathrm{E}_t(u(c_{t+1}))]
> $$
> 
> The <abbr title='First Order Condition'>FOC</abbr> is 
> $$
> \begin{aligned}
>  u^{\prime}(c_t) (-p_t) + \mathrm{E}_t(u^{\prime}(c_{t+1}) x_{t+1})  &= 0\\
>  p_t &= \mathrm{E}_t\left( \frac{u^{\prime}(c_{t+1})}{u^{\prime}(c_t)} x_{t+1}\right)\\
> \end{aligned}
> $$
> 
> which means the <abbr title='Stochastic Discounted Factor'>SDF</abbr> is $\frac{u^{\prime}(c_{t+1})}{u^{\prime}(c_t)}$.

#### From SDF to Equivalent Martingale Measure
The <abbr title='Stochastic Discounted Factor'>SDF</abbr> $\pi$ corresponds to an equivalent martingale measure $\mathbb{Q}$, for which <mark>density process</mark> $\psi$ is given by 
$$
\psi_t = e^{rt}\frac{\pi_t}{\pi_0} = e^{-\frac{1}{2}\eta^{2}t - \eta Z_t^{1}}
$$

which is also the Radon-Nikodym derivative $\frac{\mathrm{d}\mathbb{Q}}{\mathrm{d}\mathbb{P}}$.

The Radon-Nikodym derivative is a <abbr title='Geometric Brownian Motion'>GBM</abbr> satisfying 
$$
\mathrm{d}\psi_t = -\eta \psi_t \mathrm{d}Z_t^{1}
$$

Using [Girsanov theorem](courses/mathematical_finance/4_probability_theory.md#girsanov-theorem), the standard Brownian motion based on $Z^{1}$ under the measure $\mathbb{Q}$ satisfies 
$$
\mathrm{d}Z_t^{\mathbb{Q}} = \mathrm{d}Z_t^{1} + \eta \mathrm{d}t
$$

Thus, under the martingale measure $\mathbb{Q}$, the jump-diffusion model becomes 
$$
\begin{aligned}
 \mathrm{d} \delta_{t} &= \mu_{\delta} \mathrm{d} t + \rho \sigma \left( \mathrm{d}Z_t^{\mathbb{Q}} - \eta \mathrm{d}t \right)  + \sqrt{1-\rho^{2}} \sigma \mathrm{d} Z_{t}^{2} + \mathrm{d}\left(\sum_{i=1}^{N_{t}} Z_{i}\right)\\
 &= \mu \mathrm{d} t + \rho \sigma \mathrm{d}Z_t^{\mathbb{Q}} + \sqrt{1-\rho^{2}} \sigma \mathrm{d} Z_{t}^{2} + \mathrm{d}\left(\sum_{i=1}^{N_{t}} Z_{i}\right)\\
\end{aligned}
$$

where $\mu = \mu_{\delta}-\rho \sigma \eta$ is the risk-adjusted expected growth rate.

> [!NOTE]
> Under the martingale measure $\mathbb{Q}$, $Z^{2}$ is still a standard Brownian motion.
> 
> The equilibrium pricing is unrelated with the risk-averse coefficient $\gamma$ of the representative agent.

#### Dynamic Programming&mdash;General Pricing Formula
Consider a standard asset with cash flow $a \delta_t + K$ and a boundary payoff $g(\delta_{\tau_{\mathcal{D}}})$ where stopping time $\tau_{\mathcal{D}}=\mathrm{inf}\left\{ t\geqslant 0:\ \delta_t \notin \mathcal{D} \right\}$ for a given domain $\mathcal{D}$.

The value of the standard asset is given by 
$$
V(\delta_t) = \mathrm{E}_{t}^{\mathbb{Q}}\left( \int_{t}^{\tau_{\mathcal{D}}} e^{-r(s-t)} (a \delta_s + K) ~\mathrm{d}s + e^{-r(\tau_{\mathcal{D}}-t)} g(\delta_{\tau_{\mathcal{D}}}) \right)
$$

which results in 
$$
\begin{cases}
 \mu V_x(x) + \frac{1}{2} \sigma^{2} V_{xx}(x) + (ax + K) - r V(x) + \lambda \int_{-\infty}^{\infty} (V(x+z) - V(x)) h(z) ~\mathrm{d}z  = 0,& x\in \mathcal{D}\\
 V(x) = g(x),& x\in \partial \mathcal{D}
\end{cases}
$$

The proof is similar with [previous proof](courses/mathematical_finance/7_pricing_corporate_securities.md#standard-asset) in last chapter. The additional integral term comes from the jump.

> [!TIP]
> The probability of jump in a small time difference $\Delta$ is $\lambda \Delta$, and the expected jump size is $\int_{-\infty}^{\infty} (V(x+z) - V(x)) h(z) ~\mathrm{d}z$. Remember that we divide the equation by $\Delta$ in [previous proof](courses/mathematical_finance/7_pricing_corporate_securities.md#standard-asset). So the additional term is $\lambda \int_{-\infty}^{\infty} (V(x+z) - V(x)) h(z) ~\mathrm{d}z$.

The solution is given by 
$$
V(x) = \overline{A}_{1} e^{\beta_{1}(x-h)} + \overline{A}_{2} e^{\beta_{2}(x-h)} + \overline{A}_{3} e^{-\beta_{3}(x-l)} + \overline{A}_{4} e^{-\beta_{4}(x-l)}+\frac{a x + K}{r} + a \frac{\mu+\lambda \xi}{r^{2}}
$$

for $\mathcal{D}=(l,\ h)$, $\xi=\mathrm{E}(Z_i)=\frac{p}{\eta_1}+\frac{q}{\eta_2}$, $\left\{ \beta_1,\ \beta_2,\ -\beta_3,\ -\beta_4 \right\} $ are roots derived from equation 
$$
\frac{1}{2}\sigma^{2}\beta^{2} + \mu \beta + \lambda \left( \frac{p \eta_1}{\eta_1 - \beta} + \frac{q \eta_2}{\eta_2 + \beta} - 1 \right) = r
$$

satisfiying $0<\beta_1<\eta_1<\beta_2<\infty$ and $0<\beta_3<\eta_2<\beta_4<\infty$, and $\left\{\overline{A}_1,\ \overline{A}_2,\ \overline{A}_3,\ \overline{A}_4 \right\} $ are constants determined by boundary conditions.

The sum of last 2 terms, i.e., $\frac{ax+K}{r}+a\frac{\mu+\lambda \xi}{r^{2}}$, is the value of a claim at any time $t\geqslant 0$ to the perpetual cash flow $a \delta_s+K$ where $s\in[0,\ \infty)$ and $\delta_t=x$.

<details>
<summary>Proof</summary>

The value of the claim is given by 
$$
\begin{aligned}
 \mathrm{E}^{\mathbb{Q}}\left[ \int_{t}^{\infty} e^{-r(s-t)}(a \delta_s+K) ~\mathrm{d}s \bigg| \mathcal{F}_t \right] &= a \int_{t}^{\infty} e^{-r(s-t)} \mathrm{E}^{\mathbb{Q}}(\delta_s | \mathcal{F}_t) ~\mathrm{d}s + \frac{K}{r}\\
 &= a \int_{t}^{\infty} e^{-r(s-t)} \mathrm{E}^{\mathbb{Q}}\left[ \delta_t + \mu (s-t) + \sigma \left( Z^{\prime}_s - Z^{\prime}_t \right) + \sum\limits_{i=1}^{N_s-N_t} Z_i  \bigg| \mathcal{F}_t \right]  ~\mathrm{d}s + \frac{K}{r}\\
 &= a \int_{t}^{\infty} e^{-r(s-t)} \left[ x + \mu(s-t) + \lambda(s-t) \xi \right] ~\mathrm{d}s + \frac{K}{r}\\
 &= a\left( \frac{x}{r} + \frac{\mu + \lambda \xi}{r^{2}} \right)  + \frac{K}{r}\\
 &= \frac{ax+K}{r} + a\frac{\mu + \lambda \xi}{r^{2}}\\
\end{aligned}
$$

where $Z^{\prime}$ is a standard Brownian motion satisfying $\mathrm{d}Z_t^{\prime} = \rho \sigma \mathrm{d}Z_t^{\mathbb{Q}} + \sqrt{1-\rho^{2}} \sigma \mathrm{d}Z_t^{2}$ and $\xi=\mathrm{E}(Z_i)=\frac{p}{\eta_1}+\frac{q}{\eta_2}$.

> [!TIP]
> $$
> \int_{0}^{\infty} x e^{-rx} ~\mathrm{d}x = - \frac{1}{r} \int_{0}^{\infty} x ~\mathrm{d}e^{-rx} = - \frac{1}{r} \left( \left. x e^{-rx} \right|_{0}^{\infty} - \int_{0}^{\infty} e^{-rx} ~\mathrm{d}x \right) = -\frac{1}{r}\cdot \left. \frac{1}{r} e^{-rx}\right|_{0}^{\infty} = \frac{1}{r^{2}}
> $$
</details>

