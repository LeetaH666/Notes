# Pricing Corporate Securities

### Cash Flow Model
Assume a firm has assets generating continuously instantaneous earnings $X$ before interest and taxes (EBIT) driven by the following <abbr title='Geometric Brownian Motion'>GBM</abbr>: 
$$
\mathrm{d}X_t = \mu X_t \mathrm{d}t + \sigma X_t \mathrm{d} W_t
$$

where $\mu$ is the <mark>risk-adjusted</mark> expected growth rate, i.e., it is an expected growth rate under the risk-neutral measure. $\sigma$ is volatility and $W$ is a standard Wiener process on $(\Omega,\ \mathcal{F},\ \mathbb{P})$ equipped with a filtration $\{\mathcal{F}_t:\ t\geqslant 0\}$.

### Standard Asset
A standard asset has cash flow that is a linear function of the total cash flow of a firm, i.e., $a X_t + K$ for some constant $a$ and $K$, up to a stopping time (bankrupt time) $\tau_{\mathcal{D}}:=\mathrm{inf}\left\{ t\geqslant 0:\ X_t \notin \mathcal{D} \right\}$ for a given domain $\mathcal{D}$. Thus, $X_{\tau_{\mathcal{D}}}\in \partial \mathcal{D}$ where $\partial \mathcal{D}$ is the boundary of $\mathcal{D}$.

At the stopping time $\tau_{\mathcal{D}}$, the owner of the asset obtains nothing but a claim, of which the value is $g(X_{\tau_{\mathcal{D}}})$ for some function $g(\cdot)$.

The price of the standard asset at the current time is given by 
$$
V(x) = \mathrm{E}\left[ \int_{0}^{\tau_{\mathcal{D}}} e^{-rt}(a X_t + K) ~\mathrm{d}t + e^{-r \tau_{\mathcal{D}}}g(X_{\tau_{\mathcal{D}}}) \Bigg| X_0=x \right]
$$

for some $x\in \mathcal{D}$, where $r\geqslant 0$ is the risk-free rate and we assume $r>\mu$.

> [!NOTE]
> If $\mu\geqslant r$, then the unlevered firm's value is infinite.

The function $V(\cdot)$ satisfies the following <abbr title='Ordinary Diffrential Equation'>ODE</abbr>: 
$$
\mu x V_x(x) + \frac{1}{2} \sigma^{2} x^{2} V_{xx}(x) + (ax + K) - r V(x) = 0,\qquad x\in \mathcal{D}
$$

with boundary condition 
$$
V(x) = g(x),\qquad x\in \partial \mathcal{D}
$$

<details>
<summary>Proof</summary>

Consider $\Delta \to 0^{+}$, we have 
$$
\begin{aligned}
 V(x) &= \mathrm{E} \left[ \int_{0}^{\Delta}e^{-rt}(a X_t + K) ~\mathrm{d}t + \int_{\Delta}^{\tau_{\mathcal{D}}}e^{-rt}(a X_t + K) ~\mathrm{d}t + e^{-r \tau_{\mathcal{D}}}g(X_{\tau_{\mathcal{D}}}) \Bigg| X_0=x  \right]\\
 &= \mathrm{E} \left[ \int_{0}^{\Delta}e^{-rt}(a X_t + K) ~\mathrm{d}t \Bigg| X_0=x \right] + \mathrm{E} \left\{\mathrm{E} \left[ \int_{\Delta}^{\tau_{\mathcal{D}}}e^{-rt}(a X_t + K) ~\mathrm{d}t + e^{-r \tau_{\mathcal{D}}}g(X_{\tau_{\mathcal{D}}}) \Bigg| \mathcal{F}_{\Delta} \right]  \Bigg| \mathcal{F}_0 \right\}\\
 &= \mathrm{E} \left[ \int_{0}^{\Delta}e^{-rt}(a X_t + K) ~\mathrm{d}t + e^{-r \Delta}V(X_{\Delta}) \Bigg| X_0=x \right]\\
 &= \mathrm{E} \left[ (ax + K)\Delta + \omicron(\Delta) + (1-r \Delta + \omicron(\Delta))\left(V(x)+V^{\prime}(x)(X_{\Delta}-x)+\frac{1}{2}V^{\prime\prime}(x)(X_{\Delta}-x)^{2} + \omicron(\Delta)\right) \right]\\
\end{aligned}
$$

> [!TIP]
> As $\Delta \to 0$, $e^{\Delta} = 1 + \Delta + \omicron(\Delta)$.

Note that $\mathrm{d}X_t = \mu \mathrm{d}t + \sigma X_t \mathrm{d}W_t$, thus we have $X_{\Delta}-x = \mu x \Delta + \sigma x (W_{\Delta}-W_0)$, which means 
$$
\mathrm{E}(X_{\Delta}-x) = \mu x \Delta + \omicron(\Delta)\\
{}\\
\mathrm{E}\left[ (X_{\Delta}-x)^{2} \right] = \mu^{2} x^{2} \Delta^{2} + \sigma^{2} x^{2} \Delta + \omicron(\Delta) = \sigma^{2}x^{2}\Delta + \omicron(\Delta)
$$

Thus, we have 
$$
\begin{aligned}
V(x) &= (ax + K)\Delta + \omicron(\Delta) + (1-r \Delta + \omicron(\Delta))\left[V(x)+V^{\prime}(x)\left( \mu x \Delta + \omicron(\Delta) \right) +\frac{1}{2}V^{\prime\prime}(x)\left( \sigma^{2} x^{2} \Delta + \omicron(\Delta) \right)  + \omicron(\Delta)\right]\\
0 &= (ax + K) + V^{\prime}(x)\mu x \Delta + \frac{1}{2}V^{\prime\prime}(x)\sigma^{2}x^{2} - r V(x) 
\end{aligned}
$$

and we finish our proof.
</details>

The solution of the <abbr title='Ordinary Diffrential Equation'>ODE</abbr> is given by 
$$
V(x) = A_1 x^{\gamma_{+}} + A_2 x^{\gamma_{-}} + \frac{ax}{r-\mu} + \frac{K}{r},\qquad x\in \mathcal{D}
$$

where $A_1$ and $A_2$ are constants to be determined by the boundary condition, and $\gamma_{+}$ and $\gamma_{-}$ are solutions of the quadratic equation
$$
\frac{1}{2}\sigma^{2}y^{2} + \left( \mu - \frac{1}{2}\sigma^{2} \right) y - r = 0
$$

i.e., 
$$
\gamma_{\pm} = \frac{-\left( \mu - \frac{1}{2} \sigma^{2} \right) \pm \sqrt{\left( \mu - \frac{1}{2}\sigma^{2} \right)^{2} + 2r \sigma^{2} } }{\sigma^{2}}
$$

and we can easily see that $\gamma_{+}>1$ and $\gamma_{-}<0$.

#### Example: Value of Equity
Consider a company with constant debt $c$ and cash flow $X_t$ satisfying the cash flow model above with initial cash $x$. It will go bankrupt when cash reaches $\delta_b < x$. 

If there is no bankrupt, the equity can be represented by a standard asset $a X_t + K$ with $a=1$ and $K=-c$. The value is given by 
$$
\begin{aligned}
 V(x) &= \mathrm{E}\left[ \int_{0}^{\infty} e^{-rt} (X_t - c) ~\mathrm{d}t \bigg| X_0=x \right]\\
 &= \int_{0}^{\infty} e^{-rt}\mathrm{E}\left( X_t - c | X_0=x \right) ~\mathrm{d}t\\
 &= \int_{0}^{\infty} e^{-rt}\mathrm{E}\left( x e^{\left( \mu-\frac{\sigma^{2}}{2} \right) t + \sigma W_t} - c \bigg| X_0=x \right) ~\mathrm{d}t\\
 &= \int_{0}^{\infty} x e^{-(r-\mu)t} - c e^{-rt} ~\mathrm{d}t\\
 &= \frac{x}{r-\mu} - \frac{c}{r}\\
\end{aligned}
$$

> [!TIP]
> The mgf of $X\sim N(\mu,\ \sigma^{2})$ is $M_X(\theta) = \mathrm{E}\left( e^{\theta X} \right)  = e^{\mu \theta + \frac{1}{2}\sigma^{2}\theta^{2}}$.

When the company goes bankrupt, shareholders lose all their equity, which means there is a boundary condition
$$
V(\delta_b) = 0
$$

According to the general solution above, we have 

$$
\begin{cases}
 A_1 x^{\gamma_{+}} + A_2 x^{\gamma_{-}} + \frac{x}{r-\mu} - \frac{c}{r} = \frac{x}{r-\mu} - \frac{c}{r}\\
 A_1 \delta_b^{\gamma_{+}} + A_2 \delta_b^{\gamma_{-}} + \frac{\delta_b}{r-\mu} - \frac{c}{r} = 0\\
\end{cases}
$$

Since $\gamma_{+}>1$ and $\gamma_{-}<0$, we have $A_1=0$ (consider $x\to \infty$) and $A_2=-\left( \frac{\delta_b}{r-\mu} - \frac{c}{r} \right) \left( \frac{1}{\delta_b} \right)^{\gamma_{-}}$.

Thus, the value of equity is given by
$$
E(x,\ c) = \left( \frac{x}{r-\mu} - \frac{c}{r} \right) - \left( \frac{\delta_b}{r-\mu} - \frac{c}{r} \right) \left( \frac{x}{\delta_b} \right) ^{\gamma_{-}}
$$