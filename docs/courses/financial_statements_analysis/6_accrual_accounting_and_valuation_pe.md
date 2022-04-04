# Chapter 6: Accrual Accounting and valuation: Pricing Earnings

### Normal P/E
Remember that the forward P/E is 
$$
\text{Forward P/E} = \frac{\text{Price}_0}{\text{Earnings Forecast}_1}
$$

and the trailing P/E (dividend-adjusted) is 
$$
\text{Trailing P/E} = \frac{\text{Price}_0 + \text{Dividend}_0}{\text{Earnings}_0}
$$

Then the normal forward P/E is 
$$
\text{Normal Forward P/E} = \frac{1}{\text{Required Return}}
$$

and the normal trailing P/E is 
$$
\text{Normal Trailing P/E} = \frac{1+\text{Required Return}}{\text{Required Return}} = \text{Normal Forward P/E} + 1
$$

### Abnormal Earnings Growth (AEG)
Abnormal earnings growth (AEG) is the <mark>growth in earnings over the required growth rate</mark>: 
$$
\text{AEG}_t = \text{Earnings}_t - \text{Earnings}_{t-1} - \text{Change in Book Value of Equity}_{t-1}\times \text{Required Return}
$$

Remember that 
$$
\text{Residual Earnings}_{t} = \text{Earnings}_{t} - \text{Book Value of Equity}_{t-1} \times \text{Required Return}\\
$$

so 
$$
\begin{aligned}
 \text{AEG}_t &= \text{Earnings}_t - \text{Earnings}_{t-1} - \text{Change in Book Value of Equity}_t\times \text{Required Return}\\
 &= (\text{Earnings}_t - \text{Book Value of Equity}_{t-1}\times \text{Required Return})\\
 &\qquad - (\text{Earnings}_{t-1} - \text{Book Value of Equity}_{t-2}\times \text{Required Return})\\
 &= \text{Residual Earnings}_t - \text{Residual Earnings}_{t-1}
\end{aligned}
$$

is also the <mark>change in residual earnings</mark>.

#### P/E Valuation Using AEG
The book value of equity at time $0$ can be forecast as follow: 
$$
\text{Book Value of Equity}_0 = \frac{1}{\text{Required Return}}\left( \text{Earnings}_1 + \frac{\text{AEG}_2}{1+\text{Required Return}} + \frac{\text{AEG}_3}{(1+\text{Required Return})^{2}} + \cdots\right)
$$

#### Example: Valuation of IBM
Analysts' forecast of IBM is shown below:

<div class='center'>

| $\text{\textdollar}$ |  2010   |  2011   |  2012   | Next Three Years |
| :------------------: | :-----: | :-----: | :-----: | :--------------: |
|       **EPS**        |  ${}$   | $13.22$ | $14.61$ | Growth at $11\%$ |
|       **DPS**        |  ${}$   | $3.00$  | $3.30$  | Growth at $11\%$ |
|       **BPS**        | $18.77$ |  ${}$   |  ${}$   |       ${}$       |
</div class='center'>

Assume the required return for equity is $10\%$.

We first calculate the BPS using $\text{BPS}_t=\text{BPS}_{t-1}+\text{EPS}_t-\text{DPS}_t$, 

<div class='center'>

| $\text{\textdollar}$ |  2010   |  2011   |  2012   |  2013   |  2014   |  2015   |
| :------------------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|       **EPS**        |  ${}$   | $13.22$ | $14.61$ | $16.22$ |  $18$   | $19.98$ |
|       **DPS**        |  ${}$   | $3.00$  | $3.30$  | $3.66$  | $4.07$  | $4.51$  |
|       **BPS**        | $18.77$ | $28.99$ | $40.30$ | $52.86$ | $66.79$ | $82.26$ |
</div class='center'>

Then, the residual earnings is calculated by $\text{RE}_t = \text{EPS}_t - \text{BPS}_{t-1}\times \text{Required Return}$, 

<div class='center'>

| $\text{\textdollar}$ |  2010   |  2011   |  2012   |  2013   |  2014   |  2015   |
| :------------------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|       **EPS**        |  ${}$   | $13.22$ | $14.61$ | $16.22$ |  $18$   | $19.98$ |
|       **DPS**        |  ${}$   | $3.00$  | $3.30$  | $3.66$  | $4.07$  | $4.51$  |
|       **BPS**        | $18.77$ | $28.99$ | $40.30$ | $52.86$ | $66.79$ | $82.26$ |
|        **RE**        |  ${}$   | $11.34$ | $11.71$ | $12.19$ | $12.71$ | $13.30$ |
</div class='center'>

The <abbr title='Abnormal Earnings Growth'>AEG</abbr> is just the change in <abbr title='Residual Earnings'>RE</abbr>, 

<div class='center'>

| $\text{\textdollar}$ |  2010   |  2011   |  2012   |  2013   |  2014   |  2015   |
| :------------------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|       **EPS**        |  ${}$   | $13.22$ | $14.61$ | $16.22$ |  $18$   | $19.98$ |
|       **DPS**        |  ${}$   | $3.00$  | $3.30$  | $3.66$  | $4.07$  | $4.51$  |
|       **BPS**        | $18.77$ | $28.99$ | $40.30$ | $52.86$ | $66.79$ | $82.26$ |
|        **RE**        |  ${}$   | $11.34$ | $11.71$ | $12.19$ | $12.71$ | $13.30$ |
|       **AEG**        |  ${}$   |  ${}$   | $0.37$  | $0.48$  | $0.52$  | $0.59$  |
</div class='center'>

which means the current value of IBM's common equity should be
$$
\frac{1}{10\%}\left( \text{\textdollar}13.22 + \frac{\text{\textdollar}0.37}{1+10\%} + \frac{\text{\textdollar}0.48}{(1+10\%)^{2}} + \frac{\text{\textdollar}0.52}{(1+10\%)^{3}}+ \frac{\text{\textdollar}0.59}{(1+10\%)^{4}}\right) \approx \text{\textdollar}147.47
$$
Note that at the beginning of 2011, the price of IBM is $\text{\textdollar}147.14$, which is close to our valuation.

### Cum-Dividend Earnings and Normal Earnings

#### Cum-Dividend Earnings
Cum-dividend earnings is earnings with the prior year's dividend reinvested.

There are 2 methods of calculation: 
- Compound interest of several years' dividend

    $$
    \text{Cum-Dividend Earnings}_t = \text{Earnings}_t + \text{Dividend}_{t-1}\times \text{Required Return}\\
    {}+ \text{Dividend}_{t-2}\times (1+\text{Required Return})\times \text{Required Return} + \cdots
    $$

- Simple interest of last year's dividend

    $$
    \text{Cum-Dividend Earnings}_t = \text{Earnings}_t + \text{Dividend}_{t-1}\times \text{Required Return}
    $$

We can derive some conclusions using the compounding method, however, using the second method would be more convenient for calculation.

#### Example: The Prototype Savings Account
Consider a company pays all its earnings as dividend (assume the required return is $5\%$): 

<div class='center'>

|  $(\text{\textdollar})$   |   0   |   1   |           2            |                           3                            |
| :-----------------------: | :---: | :---: | :--------------------: | :----------------------------------------------------: |
|          **EPS**          | ${}$  |  $5$  |          $5$           |                          $5$                           |
|          **DPS**          | ${}$  |  $5$  |          $5$           |                          $5$                           |
|          **BPS**          | $100$ | $100$ |         $100$          |                         $100$                          |
| **Cum-Dividend Earnings** | ${}$  |  $5$  | $5+5\times 5\% = 5.25$ | $5+5\times 5\%+5\times (1+5\%)\times 5\% \approx 5.51$ |
</div class='center'>

> [!NOTE]
> Here we use the compounding method.

Also consider a company pays zero as dividend (with the same earnings and required return): 

<div class='center'>

|  $(\text{\textdollar})$   |   0   |   1   |           2            |                3                |
| :-----------------------: | :---: | :---: | :--------------------: | :-----------------------------: |
|          **EPS**          | ${}$  |  $5$  | $105\times 5\% = 5.25$ | $110.25\times 5\% \approx 5.51$ |
|          **DPS**          | ${}$  |  $0$  |          $0$           |               $0$               |
|          **BPS**          | $100$ | $105$ |        $110.25$        |            $115.76$             |
| **Cum-Dividend Earnings** | ${}$  |  $5$  |         $5.25$         |             $5.51$              |
</div class='center'>

Note that 2 companies with totally different payout plan have the same cum-dividend earnings, which means <mark>dividend do not affect cum-dividend earnings, and thus do not affect value</mark>.

#### Normal Earnings
Normal earnings is earnings growing at the required return: 
$$
\text{Normal Earnings}_t = \text{Cum-Dividend Earnings}_{t-1}\times (1+\text{Required Return})
$$

Consider the example above, the normal earnings and cum-dividend earnings are equal.

If the cum-dividend earnings is calculated using only the simple interest of last year's dividend instead of compound interest of several years, the normal earnings can be simply calculated by 
$$
\text{Normal Earnings}_t = \text{Earnings}_{t-1}\times (1+\text{Required Return})
$$

<mark>We use the method of simple interest by default</mark>.

Actually, there is a relation between <abbr title='Abnormal Earnings Growth'>AEG</abbr> and these 2 types of earnings: 
$$
\begin{aligned}
 \text{AEG}_t &= \text{Cum-Dividend Earnings}_t - \text{Normal Earnings}_t\\
 &= \text{Earnings}_{t-1}\times (1+\text{Cum-Dividend Growth Rate}) -\text{Earnings}_{t-1}\times (1+\text{Required Return})\\
 &= \text{Earnings}_{t-1}\times (\text{Cum-Dividend Growth Rate}-\text{Required Return}) 
\end{aligned}
$$

where
$$
\text{Cum-Dividend Growth Rate}_t = \frac{\text{Cum-Dividend Earnings}_t}{\text{Earnings}_{t-1}} - 1
$$

Thus, the example above shows <mark>zero <abbr title='Abnormal Earnings Growth'>AEG</abbr></mark>, which means the company should have a <mark>normal P/E</mark>.

#### Example (Continued): Valuation of IBM
Recall the [example of valuating IBM](#example-valuation-of-ibm), the information is shown below: 

<div class='center'>

| $\text{\textdollar}$ |  2010   |  2011   |  2012   |  2013   |  2014   |  2015   |
| :------------------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|       **EPS**        |  ${}$   | $13.22$ | $14.61$ | $16.22$ |  $18$   | $19.98$ |
|       **DPS**        |  ${}$   | $3.00$  | $3.30$  | $3.66$  | $4.07$  | $4.51$  |
|       **BPS**        | $18.77$ | $28.99$ | $40.30$ | $52.86$ | $66.79$ | $82.26$ |
|        **RE**        |  ${}$   | $11.34$ | $11.71$ | $12.19$ | $12.71$ | $13.30$ |
|       **AEG**        |  ${}$   |  ${}$   | $0.37$  | $0.48$  | $0.52$  | $0.59$  |
</div class='center'>

Now we try to calculate the cum-dividend earnings and the normal earnings to chek the relation with <abbr title='Abnormal Earnings Growth'>AEG</abbr>. We use the simple interest of last year's dividend to calculate: $\text{Cum-Dividend Earnings}_t = \text{Earnings}_t + \text{Dividend}_{t-1}\times \text{Required Return}$ and $\text{Normal Earnings}_t = \text{Earnings}_{t-1}\times (1+\text{Required Return})$.

<div class='center'>

|   $\text{\textdollar}$    |  2010   |  2011   |  2012   |  2013   |  2014   |  2015   |
| :-----------------------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|          **EPS**          |  ${}$   | $13.22$ | $14.61$ | $16.22$ |  $18$   | $19.98$ |
|          **DPS**          |  ${}$   | $3.00$  | $3.30$  | $3.66$  | $4.07$  | $4.51$  |
|          **BPS**          | $18.77$ | $28.99$ | $40.30$ | $52.86$ | $66.79$ | $82.26$ |
| **Cum-Dividend Earnings** |  ${}$   |  ${}$   | $14.91$ | $16.55$ | $18.37$ | $20.39$ |
|    **Normal Earnings**    |  ${}$   |  ${}$   | $14.54$ | $16.07$ | $17.84$ | $19.80$ |
|  **Earnings Difference**  |  ${}$   |  ${}$   | $0.37$  | $0.48$  | $0.53$  | $0.59$  |
</div class='center'>

We can see that the earnings difference between cum-dividend earnings and normal earnings is just the <abbr title='Abnormal Earnings Growth'>AEG</abbr>.

### Price Earnings to Growth (PEG) Ratio
$$
\text{PEG} = \frac{\text{Forward P/E}}{\text{Forward Earnings Growth Rate}\times 100}
$$

where forward earnings growth rate is 1-year ahead earnings growth rate.

If earnings of a company grows at the required return, then the normal PEG is 
$$
\text{Normal PEG} = \frac{\frac{1}{\text{Required Return}}}{\text{Required Return}\times 100} = \frac{1}{\text{Required Return}^{2}\times 100}
$$

Thus, only when the required return is $10\%$, we have normal PEG $1$.

#### Disadvantages
- The 1-year ahead growth rate does not capture the long-term growth. Use an average 5-year growth rate may be better.
- The earnings growth rate does not consider the reinvestment of dividend and thus should be cum-dividend earnings growth rate.