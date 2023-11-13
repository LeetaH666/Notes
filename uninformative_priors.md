# Uninformative Priors

## Jeffreys Prior

### One-Dimensional Case

Suppose the likelihood function is $p(x|\theta)$, the Jeffreys prior is defined as 

$$
\pi(\theta) \propto \sqrt{I(\theta)}
$$

where

$$
I(\theta) = -\E_{x \sim p(x|\theta)} \left[\frac{\partial^2 \log p(x|\theta)}{\partial \theta^2} \right].
$$

For example, consider a Normal distribution with known variance, i.e., $N(\mu,\ \sigma^{2})$ where $\sigma^{2}$ is known. We are to find the Jeffreys prior for $\mu$. First, the likelihood function is 

$$
p(x|\mu) = \frac{1}{\sqrt{2 \pi \sigma^{2}}} \exp\left(-\frac{(x - \mu)^{2}}{2\sigma^{2}}\right).
$$

Then, the log-likelihood function is 

$$
\log p(x|\mu) = -\frac{1}{2} \log(2 \pi \sigma^{2}) - \frac{(x - \mu)^{2}}{2\sigma^{2}}.
$$

Take the second derivative of the log-likelihood function w.r.t. $\mu$, we have 

$$
\frac{\partial^{2} \log p(x|\mu)}{\partial \mu^{2}} = \frac{\partial}{\partial \mu} \left(\frac{x - \mu}{\sigma^{2}}\right) = - \frac{1}{\sigma^{2}},
$$

which means the Fisher information is just a constant $\frac{1}{\sigma^{2}}$. Hence, the Jeffreys prior of $\mu$ is a uniform distribution, i.e., 

$$
\pi(\mu) \propto 1.
$$

### Multivariate Case

Suppose the likelihood function is $p(x|\bm{\theta})$, the Jeffreys prior is defined as 

$$
\pi(\bm{\theta}) \propto \sqrt{\left\vert I(\bm{\theta}) \right\vert}
$$

where

$$
\left\vert I(\bm{\theta}) \right\vert = -\E_{x \sim p(x|\bm{\theta})} \left[\frac{\partial^2 \log p(x|\bm{\theta})}{\partial \bm{\theta} \partial \bm{\theta}^{\top}} \right].
$$

For example, consider a Normal distribution with parameters unknown, i.e., $N(\mu,\ \sigma^{2})$ where $\mu$ and $\sigma^{2}$ are both unknown. We are to find the Jeffreys prior for $\bm{\theta} = (\mu,\ \sigma^{2})^{\top}$. The log-likelihood function is still 

$$
\log p(x|\bm{\theta}) = -\frac{1}{2} \log(2 \pi \sigma^{2}) - \frac{(x - \mu)^{2}}{2\sigma^{2}}.
$$

Take derivative w.r.t. $\sigma^{2}$, we have 

$$
\frac{\partial \log p(x|\bm{\theta})}{\partial \sigma^{2}} = -\frac{1}{2 \sigma^{2}} + \frac{(x - \mu)^{2}}{2(\sigma^{2})^{2}}.
$$

Take derivative w.r.t. $\sigma^{2}$ again, we have 

$$
\frac{\partial^{2} \log p(x|\bm{\theta})}{\partial (\sigma^{2})^{2}} = \frac{1}{2(\sigma^{2})^{2}} - \frac{(x - \mu)^{2}}{(\sigma^{2})^{3}}.
$$

Take the second derivative of the log-likelihood function w.r.t. $\bm{\theta}$, we have 

$$
\frac{\partial^{2} \log p(x|\bm{\theta})}{\partial \bm{\theta} \partial \bm{\theta}^{T}} = 
\begin{bmatrix}
    \frac{\partial^{2} \log p(x|\bm{\theta})}{\partial \mu^{2}} & \frac{\partial^{2} \log p(x|\bm{\theta})}{\partial \mu \partial \sigma^{2}} \\ 
    \frac{\partial^{2} \log p(x|\bm{\theta})}{\partial \sigma^{2} \partial \mu} & \frac{\partial^{2} \log p(x|\bm{\theta})}{\partial (\sigma^{2})^{2}}
\end{bmatrix} = 
\begin{bmatrix}
    -\frac{1}{\sigma^{2}} & \log(x - \mu) \\
    \frac{\mu - x}{(\sigma^{2})^{2}} & \frac{1}{2(\sigma^{2})^{2}} - \frac{(x - \mu)^{2}}{(\sigma^{2})^{3}}
\end{bmatrix},
$$

which means the Fisher information is

$$
I(\bm{\theta}) = -\E_{x \sim p(x|\bm{\theta})}
\begin{bmatrix}
    -\frac{1}{\sigma^{2}} & \log(x - \mu) \\
    \frac{\mu - x}{(\sigma^{2})^{2}} & \frac{1}{2(\sigma^{2})^{2}} - \frac{(x - \mu)^{2}}{(\sigma^{2})^{3}}
\end{bmatrix} = 
\begin{bmatrix}
    \frac{1}{\sigma^{2}} & \E_{x \sim p(x \mid \bm{\theta})}[\log(x - \mu)] \\
    0 & \frac{1}{2(\sigma^{2})^{2}}
\end{bmatrix}.
$$


Therefore, the Jeffreys prior of $\bm{\theta}$ is

$$
\pi(\bm{\theta}) \propto \sqrt{\left\vert I(\bm{\theta}) \right\vert} \propto \frac{1}{\sigma^{3}}.
$$