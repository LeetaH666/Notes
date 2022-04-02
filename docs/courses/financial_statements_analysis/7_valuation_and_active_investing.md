# Chapter 7: Valuation and Active Investing

### Reverse Engineering
Suppose the market price of a company is $\text{\textdollar}133.71$ with book value of common equity per share $\text{\textdollar}100$.

Assume that we know the required return is $10\%$ and the residual earnings is $\text{\textdollar}2.36$ with a fixed growth rate. Then we have
$$
\text{\textdollar}133.71 = \text{\textdollar}100 + \frac{\text{\textdollar}2.36}{10\%-\text{Growth Rate}}
$$
which means the growth rate is $3\%$.

Conversely, assume that we only know the growth rate, then we can calculate the expected return (not the required return). We write the price per share as 
$$
\begin{aligned}
 \text{Price}_0 &= \text{Book Value of Equity}_0 + \frac{\text{RE}_1}{\text{Expected Return}-\text{Growth Rate}}\\
 {}\\
 \text{Price}_0\times (\text{Expected Return}-\text{Growth Rate}) &= \text{Book Value of Equity}_0\times  (\text{Expected Return}-\text{Growth Rate})\\ &\quad + (\text{ROCE}_1-\text{Expected Return})\times \text{Book Value of Equity}_0{}\\
 {}\\
 \text{Price}_0\times \text{Expected Return} &= (\text{Price}_0-\text{Book Value of Equity}_0)\times \text{Growth Rate}\\ &\quad + \text{ROCE}_1 \times \text{Book Value of Equity}_0
 {}\\
 \text{Expected Return} &= \left( 1-\frac{\text{Book Value of Equity}_0}{\text{Price}_0} \right) \times \text{Growth Rate}\\ &\quad + \text{ROCE}_1 \times \frac{\text{Book Value of Equity}_0}{\text{Price}_0}
\end{aligned}
$$
We can see that the expected return is a weighted average of the forward ROCE and growth rate, where the weights are given by book-to-price ratio (B/P).

In the case above, given the growth rate $3\%$, the expected return is $9.57\%$.