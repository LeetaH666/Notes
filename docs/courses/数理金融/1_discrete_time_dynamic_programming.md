# Discrete-Time Dynamic Programming

### Basic Structure

#### State Transfer System
$$
x_{k+1} = f_k(x_k,\ u_k),\ k=0,\ 1,\ \cdots,\ N-1
$$
- $k$: discrete-time
- $x_k$: state
- $u_k$: control (dicision to be selected), $u_k \in U$ with a control set $U$
- $f_k$: rule (a.k.a. state transfer function)
- $N$: horizon

#### Policy and Value Functional
- Policy $\pi=(\mu_0,\ \mu_1,\ \cdots,\ \mu_{N-1})$ maps states into controls, i.e., $u_k=\mu_k(x_k)$ (can be understood as strategy).
- <mark>Value functional</mark> of $\pi$ starting at $x_0$ is 
  $$
  J_{\pi}(x_0) = g_{N}(x_{N}) + \sum\limits_{k=0}^{N-1} g_k(x_k,\ u_k)
  $$where $g(\cdot)$ is the payoff of control under specific discete-time and state.
- <mark>Value function</mark> $V_0(x_0)=\max_{\pi}\ J_{\pi}(x_0)$ and the corresponding policy is the optimal policy $\pi^{*}$
  > [!NOTE]
  > Difference between functional and function: the independent variable of a functional is function.
  The independent variable of $J_{\pi}(x_0)$ is $\pi$, whose components are functions.

#### Example: The Shortest Path Problem
<div align='center'>

![](image/2022-02-16-12-12-32.png)
</div align='center'>

- $x_0=A,\ x_1 \in \{B_1,\ B_2\},\ \cdots,\ x_6=G$
- $g_5(F_1,\ G)=-4,\ g_4(E_1,\ F_1)=-3,\ \cdots$

### Principle of Optimality
Developed by Richard Bellman (1953).

#### Definition
From any point on an optimal trajectory, the remaining trajectory is optimal for the corresponding problem initiated at that point.
$$
V_k(x_k) = \underset{u_k \in U}{\max}\ \left[ g_k(x_k,\ u_k) + V_{k+1}(f_k(x_k,\ u_k)) \right] 
$$

#### A Solution Template
To solve the optimality is to solve all the tail subproblem. For example, consider [the shortest path problem](#example-the-shortest-path-problem) above, we start at $G$ and then go backwards to get optimal policies at each state.
$$
V_6(G) = 0,\ V_5(F_1) = -4,\ V_5(F_2) = -3 \\
\ \\
\begin{aligned}
 g_4(E_1,\ F_1) + V_5(F_1) &= -7,\ & g_4(E_1,\ F_2) + V_5(F_2) &= -8 \implies & V_4(E_1) &= -7 \\
 g_4(E_2,\ F_1) + V_5(F_1) &= -9,\ & g_4(E_2,\ F_2) + V_5(F_2) &= -5 \implies & V_4(E_2) &= -5 \\
 g_4(E_3,\ F_1) + V_5(F_1) &= -10,\ & g_4(E_3,\ F_2) + V_5(F_2) &= -9 \implies & V_4(E_3) &= -9 \\
 \ \\
 g_3(D_1,\ E_1) + V_4(E_1) &= -9,\ & g_3(D_1,\ E_2) + V_4(E_2) &= -7 \implies & V_3(D_1) &= -7 \\
 g_3(D_2,\ E_2) + V_4(E_2) &= -6,\ & g_3(D_2,\ E_3) + V_4(E_3) &= -11 \implies & V_3(D_2) &= -6 \\
 g_3(D_3,\ E_2) + V_4(E_2) &= -8,\ & g_3(D_3,\ E_3) + V_4(E_3) &= -12 \implies & V_3(D_3) &= -8 \\
 \ \\
 g_2(C_1,\ D_1) + V_3(D_1) &= -13,\ & g_2(C_1,\ D_2) + V_3(D_2) &= -14 \implies & V_2(C_1) &= -13 \\
 g_2(C_2,\ D_1) + V_3(D_1) &= -10,\ & g_2(C_2,\ D_2) + V_3(D_2) &= -11 \implies & V_2(C_2) &= -10 \\
 g_2(C_3,\ D_2) + V_3(D_2) &= -9,\ & g_2(C_3,\ D_3) + V_3(D_3) &= -11 \implies & V_2(C_3) &= -9 \\
 g_2(C_4,\ D_2) + V_3(D_2) &= -14,\ & g_2(C_4,\ D_3) + V_3(D_3) &= -12 \implies & V_2(C_4) &= -12 \\
\end{aligned}\\
 \ \\
\begin{aligned}
 g_1(B_1,\ C_1) + V_2(C_1) &= -14,\ & g_1(B_1,\ C_2) + V_2(C_2) &= -13,\ & g_1(B_1,\ C_3) + V_2(C_3) &= -15 \implies & V_2(B_1) &= -13 \\
 g_1(B_2,\ C_2) + V_2(C_2) &= -18,\ & g_1(B_2,\ C_3) + V_2(C_3) &= -16,\ & g_1(B_2,\ C_4) + V_2(C_4) &= -18 \implies & V_2(B_2) &= -16 \\
\end{aligned}\\
 \ \\
 g_0(A,\ B_1) + V_1(B_1) = -18,\ g_0(A,\ B_2) + V_1(B_2) = -19 \implies V_0(A) = -18
$$which means the optimal path is $A\to B_1\to C_2\to D_1\to E_2\to F_2\to G$.

### Stochastic Dynamic Programming
State $x_{k+1}=f_k(x_k,\ u_k,\ z_k)$ where $z_k$ is a random variable with probability distribution $\mathrm{P}_k(\cdot|x_k,\ u_k)$

#### Value Functional 
$$
\mathrm{E}\left( g_N(x_N)+\sum\limits_{k=0}^{N-1} g_k(x_k,\ u_k,\ z_k) \right) 
$$

#### Formula of Principle of Optimality
$$
V_k(x_k) = \underset{u_k \in U}{\max}\ \mathrm{E}\left[ g_k(x_k,\ u_k,\ z_k) + V_{k+1}(f_k(x_k,\ u_k,\ z_k)) \right] 
$$