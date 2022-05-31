# Disclosure Game and Cheap Talk

### Disclosure Game

- Players: sender (expert) and receiver (decision maker)
- States of the world (sender's types): $\theta\in \Theta = [0,\ 1]$ (after standardization)
- Prior belief of receiver: $\theta\sim f(\theta)\in \Delta(\Theta)$
- Disclosure rule: the message $m$ sended by sender to receiver should satisfy $m\subset \Theta$ s.t. $\theta\in m$
- Action: receiver takes an action $a\in A$ after receiving $m$
- Sender's payoff: $u(a)$ (strictly increasing)
- Receiver's payoff: $v(a,\ \theta) = -(a-\theta)^{2}$ (<mark>quadratic loss utility function</mark>, where $a=\theta$ is the best response)
- Equilibrium concept: <abbr title='Perfect Bayesian Equilibrium'>PBE</abbr>

#### Example: Discrete Case

Suppose $\Theta=\left\{ \text{L},\ \text{M},\ \text{H} \right\} $ representing low, middle and high respectively, then 

- if $\theta=\text{H}$, the rational message of sender is $m = \left\{ \text{H} \right\} $;
- if $\theta=\text{M}$, the rational message of sender is $m = \left\{ \text{M} \right\} $ or $m = \left\{ \text{M},\ \text{H} \right\} $;
- if $\theta=\text{L}$, the rational message of sender is $m = \left\{ \text{L} \right\} $, $m = \left\{ \text{L},\ \text{M} \right\} $ or $m = \left\{ \text{L},\ \text{M},\ \text{H} \right\} $.

Thus, receiver can know which type the sender is based on the message.

#### PBE of Continuous Case
Given receiver's belief $f(\theta) = \rho$, its target is 

$$
\underset{a\in A}{\max} ~ \mathrm{E}_{\rho} (v(a,\ \theta))
$$

Since 

$$
\begin{aligned}
 \mathrm{E}_{\rho} (v(a,\ \theta)) &= \mathrm{E}_{\rho} \left[ -(a-\theta)^{2} \right] \\
 &= -\mathrm{E}_{\rho} \left[ (a - \mathrm{E}_{\rho}(\theta) + \mathrm{E}_{\rho}(\theta) - \theta)^{2} \right] \\
 &= -\mathrm{E}_{\rho} \left[ (a - \mathrm{E}_{\rho}(\theta))^{2} + 2 (a - \mathrm{E}_{\rho}(\theta)) (\mathrm{E}_{\rho}(\theta) - \theta) + (\mathrm{E}_{\rho}(\theta) - \theta)^{2} \right] \\
 &= -(a - \mathrm{E}_{\rho}(\theta))^{2} - \mathrm{E}_{\rho} \left[(\mathrm{E}_{\rho}(\theta) - \theta)^{2} \right] \\
\end{aligned}
$$

the best response $a = \mathrm{E}_{\rho}(\theta)$.

<mark>In any PBE, receiver's belief is skeptical</mark>, i.e., 

$$
\rho\left( \min \left\{ \theta|\theta\in m \right\}  \right) = 1
$$

<details>
<summary>Proof</summary>

Given receiver's skeptical belief, $a(m) = \mathrm{E}_{\rho} (\theta|\theta\in m) = \min \left\{ \theta|\theta\in m \right\} := \underline{\theta}$. If his belief is not skeptical, then $a(m) > \underline{\theta}$.

Under the belief that is not skeptical, if sender sends a message $m = \left[ \underline{\theta},\ \overline{\theta} \right]  $, then $\theta$ should satisfy $\theta \leqslant a(m)$ for rationality. Knowing about this, the receiver should have a belief $\rho^{\prime}$ s.t. $a(m) = \mathrm{E}_{\rho^{\prime}}(\theta) \geqslant \theta$

$$
\implies a(m) = \mathrm{E}_{\rho} (\theta|\theta\in m) < a(m)
$$
</details>

Sender's information is fully revealed to receiver in any PBE.

Proof:

Since receiver has skeptical belief, 

$$
\forall \theta \text{ and } \forall \overline{\theta}\geqslant \theta \implies m = [\theta,\ \overline{\theta}] \implies a = \theta
$$

### Cheap Talk

- costless
- unverifiable
- cannot be contracted

#### Example: Uniform-Quadratic Example

- Players: Sender and receiver
- States (sender's types): $\theta \in \Theta=[0,\ 1]$
- Sender's payoff: $u = - (a - \theta - b)^{2}$ where $b>0$ is a constant, which means sender hopes receiver to act $\theta + b$
- Receiver's payoff: $v = -(a - \theta)^{2}$, which means the best response of receiver is $\theta$
- PBE
  - babbling equilibrium (no matter what message sender sends, receiver does not utilize the information given, just based on his own belief)
  - partition equilibrium ($\begin{cases}
      m_1,\ \theta\in [0,\ \theta_1] \\
      m_2,\ \theta\in [\theta_1,\ 1] \\
  \end{cases}$, can have more partition instead of 2) (receiver has uniformly distributed belief, thus $a(m_1)=\frac{\theta_1}{2}$ and $a(m_2)=\frac{\theta_1 + 1}{2}$) (verify by urself)