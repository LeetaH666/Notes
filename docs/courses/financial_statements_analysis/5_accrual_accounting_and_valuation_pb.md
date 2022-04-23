# Chapter 5: Accrual Accounting and Valuation Pricing Book Values

### Residual Earnings and Valuation
$$
\text{Residual Earnings}_{t} = \text{Earnings}_{t} - \text{Investment}_{t-1} \times \text{Required Return}
$$

To valuate a firm anchoring on its book value, we see the book value of common equity as investment, i.e., 
$$
\begin{aligned}
 \text{Residual Earnings}_{t} &= \text{Earnings}_{t} - \text{Book Value of Common Equity}_{t-1} \times \text{Required Return}\\
 &= (\text{ROCE}_{t} - \text{Required Return})\times \text{Book Value of Common Equity}_{t-1}\\
\end{aligned}
$$

where 
$$
\text{ROCE}_{t} = \frac{\text{Comprehensive Earnings to Common}_{t}}{\text{Book Value of Common Equity}_{t-1}}
$$

is called return on common shareholders' equity.

#### Example
The following are earnings and dividend forecasts made at the end of 2012 for a firm with $\text{\textdollar 20.00}$ book value per common share at that time. The firm has a required equity return of $10\%$ per year.

<div class='centertable'>

| $(\text{\textdollar})$ |  2012   |  2013  |  2014  |  2015  |
| :--------------------: | :-----: | :----: | :----: | :----: |
|        **EPS**         |  ${}$   | $3.00$ | $3.60$ | $4.10$ |
|        **DPS**         |  ${}$   | $0.25$ | $0.25$ | $0.30$ |
|        **BPS**         | $20.00$ |  ${}$  |  ${}$  |  ${}$  |
</div class='centertable'>

Given the information above, we can calculate BPS by the formula $\text{BPS}_{t} = \text{BPS}_{t-1} + \text{EPS}_{t} - \text{DPS}_{t}$, which results in 

<div class='centertable'>

| $(\text{\textdollar})$ |  2012   |  2013   |  2014   |  2015   |
| :--------------------: | :-----: | :-----: | :-----: | :-----: |
|        **EPS**         |  ${}$   | $3.00$  | $3.60$  | $4.10$  |
|        **DPS**         |  ${}$   | $0.25$  | $0.25$  | $0.30$  |
|        **BPS**         | $20.00$ | $22.75$ | $26.10$ | $29.90$ |
</div class='centertable'>

Then the <abbr title="Return on Common Shareholders' Equity">ROCE</abbr> can be calculated by the formula $\text{ROCE}_{t} = \frac{\text{EPS}_{t}}{\text{BPS}_{t-1}}$.

<div class='centertable'>

|          | 2012  |   2013    |   2014    |   2015    |
| :------: | :---: | :-------: | :-------: | :-------: |
| **ROCE** | ${}$  | $15.00\%$ | $15.82\%$ | $15.71\%$ |
</div class='centertable'>

The residual earnings per share can be calculated by the formula $(\text{ROCE}_{t} - \text{Required Return})\times \text{BPS}_{t-1}$.

<div class='centertable'>

| $(\text{\textdollar})$ | 2012  |  2013  |  2014  |  2015  |
| :--------------------: | :---: | :----: | :----: | :----: |
|         **RE**         | ${}$  | $1.00$ | $1.32$ | $1.49$ |
</div class='centertable'>

Since the retain earnings are all positive, the firm has a positive extra value. Thus, the intrinsic value of equity per share (assume retain earnings are zero after 2015) is 
$$
\text{\textdollar}20.00 + \frac{\text{\textdollar}1.00}{1+10\%} + \frac{\text{\textdollar}1.32}{(1+10\%)^{2}} + \frac{\text{\textdollar}1.49}{(1+10\%)^{3}} = \text{\textdollar}23.12
$$

#### Advantages of Residual Earnings Valuation
- Focus on value drivers - profitability of investment and growth in investment.
- Using accrual accounting: 
  - Use the properties of accrual accounting that recognize value added ahead of cash flows;
  - Match value added to value given up;
  - Treat investment as an asset rather than a loss of value.
- Aligned with what people forecast - earnings.