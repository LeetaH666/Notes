# Equilibrium Pricing Theory and a Jump-Diffusion Model

### A Jump-Diffusion Model
Remember in [last chapter](courses/mathematical_finance/7_pricing_corporate_securities.md#cash-flow-model) we have consider a cash flow model under <abbr title='Geometric Brownian Motion'>GBM</abbr>, now we consider a jump-diffusion model.
$$
\mathrm{d} \delta_{t} = \mu_{\delta} \mathrm{d} t + \rho \sigma \mathrm{d} Z_{t}^{1} + \sqrt{1-\rho^{2}} \sigma \mathrm{d} Z_{t}^{2} + \mathrm{d}\left(\sum_{i=1}^{N_{t}} Z_{i}\right)
$$

where $\delta_0$ is given, $\mu_{\delta}$ is the mean growth rate, $\sigma$ is the volatility rate, $Z_t^{1}$ and $Z_t^{2}$ are 2 standard Brownian motions, $N_t$ is a Poisson process with intensity $\lambda$ and $Z_i \ (i=1,\ 2,\ \cdots)$ are i.i.d. random variables following a double exponential distribution.

$Z_t^{1}$, $Z_t^{2}$ and $N_t$ are independent with each other and are defined on a complete filtered probability space $(\Omega,\ \mathcal{F},\ (\mathcal{F}_t)_{t\geqslant 0},\ \mathbb{P})$ with $\mathcal{F}_t = \sigma\left( \left\{ Z_s^{1},\ Z_s^{2},\ N_s,\ \sum\limits_{i=1}^{N_s} Z_i;\ 0\leqslant s\leqslant t \right\}  \right) $.

The density function of double exponential distribution is given by 
$$
h(z) = p \cdot \eta_{1} e^{-\eta_{1} z} \mathbf{1}_{\{z \geqslant 0\}} + q \cdot \eta_{2} e^{\eta_{2} z} \mathbf{1}_{\{z<0\}}
$$

where $p,\ q \geqslant 0$ are the probabilities of upward and downward jumps respectively and thus $p+q=1$, and $\eta_1,\ \eta_2 > 0$.

> [!TIP]
> The double exponential distribution is a combination of 2 exponential distributions. The mean of exponential distribution is 