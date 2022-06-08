# Wiener Process (Brownian Motion)

### Symmetric Random Walk

Repeatedly toss a fair coin, denote the successive outcomes of the tosses by $\omega_1,\ \omega_2,\ \cdots$.

Let $X_j=\begin{cases}1,& \omega_j = \text{H} \\ -1,& \omega_j = \text{T} \\ \end{cases}$ for outcome "Head" or "Tail" and define 

$$
M_k = \sum\limits_{j=1}^{k} X_j \quad (k=1,\ 2,\ \cdots)
$$

with $M_0=0$, then the process $M$ is a symmetric random walk.

A symmetric random walk has the following properties: 

- <mark>independent increments</mark>;
- each increment $M_{k_{i+1}} - M_{k_i}$ has <mark>expected value $0$ and variance $k_{i+1}-k_i$</mark> since $M_{k_{i+1}} - M_{k_i} = X_{k_i+1} + X_{k_i+2} + \cdots + X_{k_{i+1}}$;
- a symmetric random walk is a <mark>martingale</mark> since $\mathrm{E}(M_{k_{i+1}}|\mathcal{F}_{k_i})=M_{k_i}$;
- the <mark>quadratic variation</mark> $[M,\ M]_k = \sum\limits_{j=1}^{k} (M_j-M_{j-1})^{2} = \sum\limits_{j=1}^{k} X_j^{2} = k$.

### Scaled Symmetric Random Walk

$$
W^{n}(t) = \frac{1}{\sqrt{n}}M_{nt}\quad (t\geqslant 0)
$$

where $n$ is a fixed integer.

If $nt$ is not an integer, we define $W^{n}(t)$ by linear interpolation between its values at the nearest points $s$ and $u$ to the left and right of $t$ for which $ns$ and $nu$ are integers.

By the CLT (Central Limit Theorem), when $n\to \infty$, $M_{nt} \sim N(0,\ nt)$ since $\mathrm{E}(M_{nt}) = 0$ and $\mathrm{Var}(M_{nt})=nt$. Thus, <mark>$W^{n}(t)\sim N(0,\ t)$ as $n\to \infty$</mark>.

### Wiener Process

$W(t)$ with $W(0)=0$ is a Wiener process if all the increments $\{W(t_i) - W(t_{i-1})\}_{i=1}^{n}$ are independent and each is normally distributed with expeceted value $0$ and variance $t_i - t_{i-1}$.

A Wiener process has the following properties: 

- $\mathrm{Cov}(W(t_1),\ W(t_2)) = \mathrm{Cov}(W(t_1),\ W(t_1) + (W(t_2)-W(t_1))) = t_1$;
- a Wiener process is a martingale since $\mathrm{E}(W(t_2)|\mathcal{F}_1) = W(t_1) + \mathrm{E}(W(t_2)-W(t_1)|\mathcal{F}_1) = W(t_1)$;
- the quadratic variation $[W,\ W]_T = T$ and thus $(\mathrm{d}W(t))^{2}=\mathrm{d}t$;
- $\mathrm{d}W(t)\mathrm{d}t=0$, $(\mathrm{d}t)^{2}=0$ and $\mathrm{d}W(t)=\phi \sqrt{\mathrm{d}t}$ where $\phi \sim N(0,\ 1)$.

### Arithmetic and Geometric Brownian Motion

#### Arithmetic Brownian Motion

$$
S(t) = at + b W(t)\quad (t\geqslant 0)
$$

where $W(t)\sim N(0,\ t)$.

> Under this model, the asset prices can be negative. Thus, the geometric Brownian motion came out.

#### Geometric Brownian Motion (GBM)

$$
S(t) = S(0)e^{\left( \mu-\frac{1}{2}\sigma^{2} \right) t + \sigma W(t)}
$$

GBM is a limit of a binomial model.

<details>
<summary>Proof</summary>

Consider a binomial model with $n$ steps per unit time and expected return rate per unit time, $\mu$. The up factor $u_n=e^{\frac{\sigma}{\sqrt{n}}}$ with probablility $p_n=\frac{\left( 1+\frac{\mu}{n} \right) - d_n}{u_n-d_n}$ and the down factor $d_n=e^{-\frac{\sigma}{\sqrt{n}}}$ with probability $1-p_n=\frac{u_n-\left( 1+\frac{\mu}{n} \right) }{u_n-d_n}$.

Let $nt$ be an integer, define 

$$
M_{nt} = \sum\limits_{k=1}^{nt} X_{k,\ n}
$$

where $\{X_{k,\ n} \}$ are i.i.d. random variables representing the rise or decrease of the stock price with $\mathbb{P}(X_{k,\ n}=1)=p_n$ and $\mathbb{P}(X_{k,\ n}=-1)=1-p_n$. 
  
When $p_n=\frac{1}{2}$, $\frac{1}{\sqrt{n}}M_{nt}$ is a scaled symmetric random walk and tends to be a Wiener process $W(t)$ as $n\to \infty$. Generally, for any $p_n$, the mgf of $\frac{1}{\sqrt{n}}M_{nt}$ is 

$$
M_{\frac{1}{\sqrt{n}}M_{nt}}(\theta) = \mathrm{E}\left( e^{\theta \frac{1}{\sqrt{n}}M_{nt}} \right) = \mathrm{E}\left( \prod_{k=1}^{nt} e^{\theta \frac{1}{\sqrt{n}}X_{k,\ n} } \right) = \left[ e^{\frac{\theta}{\sqrt{n}}}\frac{\left( 1+\frac{\mu}{n} \right) - e^{-\frac{\sigma}{\sqrt{n}}}}{e^{\frac{\sigma}{\sqrt{n}}}-e^{-\frac{\sigma}{\sqrt{n}}}} + e^{-\frac{\theta}{\sqrt{n}}}\frac{e^{\frac{\sigma}{\sqrt{n}}}-\left( 1+\frac{\mu}{n} \right) }{e^{\frac{\sigma}{\sqrt{n}}}-e^{-\frac{\sigma}{\sqrt{n}}}} \right]^{nt}
$$

Then, let $x=\frac{1}{\sqrt{n}}$, when $n\to \infty$, we have 

$$
\begin{aligned}
 \lim\limits_{n \to \infty} \log M_{\frac{1}{\sqrt{n}}M_{nt}}(\theta) &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[ e^{\theta x} \frac{(1+\mu x^{2})-e^{-\sigma x}}{e^{\sigma x}-e^{-\sigma x}} + e^{-\theta x} \frac{e^{\sigma x}-(1+\mu x^{2})}{e^{\sigma x}-e^{-\sigma x}} \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[ \frac{(1+\mu x^{2})(e^{\theta x}-e^{-\theta x})+e^{(\sigma-\theta) x}-e^{-(\sigma-\theta) x}}{e^{\sigma x}-e^{-\sigma x}} \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[ \frac{(1+\mu x^{2})\sinh \theta x+\sinh (\sigma-\theta)}{\sinh \sigma x} \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[ \frac{(1+\mu x^{2})\sinh \theta x+\sinh \sigma x \cosh \theta x - \cosh \sigma x \sinh \theta x}{\sinh \sigma x} \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[\cosh \theta x + \frac{(1+\mu x^{2} - \cosh \sigma x)\sinh \theta x}{\sinh \sigma x} \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[1+\frac{1}{2}\theta^{2}x^{2} + \omicron(x^{4}) + \frac{\left[1+\mu x^{2} - \left( 1+\frac{1}{2}\sigma^{2}x^{2}+\omicron(x^{4}) \right) \right](\theta x + \omicron(x^{3}))}{\sigma x + \omicron(x^{3})} \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[1+\frac{1}{2}\theta^{2}x^{2} + \omicron(x^{4}) + \frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)\theta x^{3} + \omicron(x^{5})}{\sigma x + \omicron(x^{3})} \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[1+\frac{1}{2}\theta^{2}x^{2} + \omicron(x^{4}) + \frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)\theta x^{3}(1 + \omicron(x^{2}))}{\sigma x(1 + \omicron(x^{2}))} \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \log \left[1+\frac{1}{2}\theta^{2}x^{2}  + \frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)\theta x^{2}}{\sigma}+ \omicron(x^{4}) \right]\\
 &= \lim\limits_{x \to 0^{+}} \frac{t}{x^{2}} \left[\frac{1}{2}\theta^{2}x^{2}  + \frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)\theta x^{2}}{\sigma}+ \omicron(x^{4}) \right]\\
 &= \left[\frac{1}{2}\theta^{2}  + \frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)\theta }{\sigma} \right]t\\
 &= \frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)t }{\sigma}\theta + \frac{1}{2}t \theta^{2}\\
\end{aligned}
$$

> [!TIP]
> $\sinh x = \frac{e^{x} - e^{-x}}{2}$, $\cosh x = \frac{e^{x} + e^{-x}}{2}$ and $\sinh (x-y) = \sinh x \cosh y - \cosh x \sinh y$.<br>
When $x\to 0$, we have $\sinh x = x + \omicron(x^{3})$, $\cosh x = 1+\frac{1}{2}x^{2}+\omicron(x^{4})$ and $\log (1+x) = x + \omicron(x^{2})$.

Thus, $\lim\limits_{n \to \infty} M_{\frac{1}{\sqrt{n}}M_{nt}}(\theta) = e^{\frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)t }{\sigma}\theta + \frac{1}{2}t \theta^{2}}$ is the mgf of $N\left( \frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)t }{\sigma},\ t \right)$, which means $\frac{1}{\sqrt{n}}M_{nt} \sim N\left( \frac{\left( \mu - \frac{1}{2}\sigma^{2} \right)t }{\sigma},\ t \right)$ as $n\to \infty$.

Assume the stock price rises $x$ times, then it decreases $nt-x$ times. Note that $x-(nt-x)=M_{nt}$, which means $x=\frac{1}{2}(nt-M_{nt})$ and $nt-x=\frac{1}{2}(nt-M_{nt})$. Thus, the stock price at time $t$ satisfies  

$$
\begin{aligned}
 S_n(t) &= S(0) u_n^{\frac{1}{2}(nt+M_{nt})}d_n^{\frac{1}{2}(nt-M_{nt})}\\
 &= S(0) e^{\frac{1}{2\sqrt{n}}\sigma(nt+M_{nt})}e^{-\frac{1}{2\sqrt{n}}\sigma(nt-M_{nt})}\\
 &= S(0) e^{\sigma\frac{1}{\sqrt{n}} M_{nt}}\\
 &= S(0) e^{\left( \mu - \frac{1}{2}\sigma^{2} \right)t + \sigma W(t)}\quad (n\to \infty)
\end{aligned}
$$
</details>

In a <mark>risk-neutral</mark> world, the $\mu$ is just the risk-free rate per unit time, $r$.

### It$\mathrm{\hat{o}}$'s Formula

$$
\mathrm{d}f(t,\ W(t)) = f_t(t,\ W(t))\mathrm{d}t + f_x(t,\ W(t))\mathrm{d}W(t) + \frac{1}{2}f_{xx}(t,\ W(t))\mathrm{d}t
$$