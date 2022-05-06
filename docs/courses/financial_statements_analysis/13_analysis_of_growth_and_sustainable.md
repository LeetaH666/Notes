# Chapter 13: The Analysis of Growth and Sustainable

### Value-Added Growth
Book growth and earnings growth are both growth, but <mark>they do not create value</mark>.

The value-added growth is <abbr title='Abnormal Earnings Growth'>AEG</abbr> that we have introduced in [chapter 6](courses/financial_statements_analysis/6_accrual_accounting_and_valuation_pe.md#abnormal-earnings-growth-aeg), which is also called <abbr title='Residual Earnings'>RE</abbr> growth.

### Sustainable Earnings
Sustainable earnings are earnings that can be repeated in the future and which can grow. Also called <mark>core earnings</mark> or <mark>persistent earnings</mark>.

Unsustainable earnings are also called <mark>unusual earnings</mark> or <mark>transitory earnings</mark>.

Thus, <abbr title='Operating Income'>OI</abbr> can be written as 
$$
\begin{aligned}
 \text{OI} &= \text{Core OI} + \text{Unusual Items}\\
 &= (\text{Core OI from Sales} + \text{Core Other OI}) + \text{Unusual Items}\\
\end{aligned}
$$

### Accounting Quality Watch

#### Deferred Revenue
Firms can defer too much earnings to the future and thus create too much earnings growth. Conversely, firms can defer too little earnings and so report unsustainable earnings currently.

#### Restructuring Charges
Firms can make excessive restructuring charges in one year and bleed them back to earnings in future years, giving the appearance of growth.

#### Selling, General and Administrate Expense (SG&A)
<abbr title='Selling, General and Administrate'>SG&A</abbr> expense is a large, aggregated number that covers a multiple of sins. We should penetrate its composition.

#### Gains and Losses on Asset Sales
These are often hidden in <abbr title='Selling, General and Administrate'>SG&A</abbr> expense, but are not a part of the core business.

#### R&D and Advertising
Firms can increase earnings by temporarily reducing <abbr title='Research and Development'>R&D</abbr> and advertising expenditures. This not only inflates current earnings but damages future earnings that the expenditures would otherwise produce.

#### Pension Accounting
Pension accounting brings prices into the income statement with the danger that earnings can reflect price bubbles. Returns on pension plan assets are commingled with core operating income from the business, contaminating profit margins. Expected returns on plan assets can be overestimated.

#### Cherry Picking
Firms can cherry pick realized gains on investments into the income statement and report unrealized losses in the equity statement. Restate the income statement of a comprehensive income basis.

#### Changes in Estimates
Firms can affect earnings by changes in	estimates (of bad debts, warranty liabilities, and accrued expenses).

### Analysis of Changes in ROCE
Note that we can write 
$$
\begin{aligned}
 \text{RNOA} &= \frac{\text{OI}}{\text{NOA}}\\
 {}\\
 &= \frac{\text{Core OI from Sales}}{\text{NOA}} + \frac{\text{Core Other OI}}{\text{NOA}} + \frac{\text{Unusual Items}}{\text{NOA}}\\ 
 {}\\
 &= \text{Core Sales PM}\times \text{ATO} + \frac{\text{Core Other OI}}{\text{NOA}} + \frac{\text{Unusual Items}}{\text{NOA}}
\end{aligned}
$$

and thus change of <abbr title='Return on Net Operating Assets'>RNOA</abbr> should be 
$$
\begin{aligned}
 \Delta \text{RNOA}_{t+1} = &\Delta \text{Core Sales PM}_{t+1} \times \text{ATO}_{t} + \text{Core Sales PM}_{t+1} \times \Delta \text{ATO}_{t+1}\\
 &+ \Delta \left( \frac{\text{Core Other OI}}{\text{NOA}} \right)_{t+1} + \Delta \left( \frac{\text{Unusual Items}}{\text{NOA}} \right)_{t+1}
 \\
\end{aligned}
$$

> [!TIP]
> Suppose $z_t = x_t \cdot y_t$, we have 
> $$
> \begin{aligned}
>  z_{t+1} - z_t &= x_{t+1}\cdot y_{t+1} - x_t\cdot y_t\\
>  &= (x_{t+1}-x_t)\cdot y_{t+1} + x_t\cdot y_{t+1} + x_t\cdot (y_{t+1}-y_t) - x_t\cdot y_{t+1}\\
>  &= (x_{t+1}-x_t)\cdot y_{t+1} + x_t\cdot (y_{t+1}-y_t)\\
> \end{aligned}
> $$

#### Fixed Costs VS. Variable Costs
$$
\text{Sales PM} = \frac{\text{Gross Margin}}{\text{Sales}} = \frac{\text{Sales}-\text{Variable Costs}-\text{Fixed Costs}}{\text{Sales}} = \frac{\text{Contribution Margin}}{\text{Sales}} - \frac{\text{Fixed Costs}}{\text{Sales}}
$$

where $\text{Contribution Margin}=\text{Sales}-\text{Variable Costs}$ measures the change income from a change in one dollar of sales, and $\frac{\text{Contribution Margin}}{\text{Sales}}$ is called <mark>contribution margin ratio</mark>.

#### Operating Leverage Measures
There are 2 measures of operating leverage (OLEV), one is the sensitivity of income to changes in sales: 
$$
\text{OLEV} = \frac{\text{Contribution Margin}}{\text{OI}} = \frac{\text{Contribution Margin Ratio}}{\text{PM}}
$$

> [!NOTE]
> <abbr title='Operating Leverage'>OLEV</abbr> is not <abbr title='Operating Liability Leverage'>OLLEV</abbr>!

The other measure is the ratio of fixed costs to variable costs: 
$$
\text{OLEV} = \frac{\text{Fixed Costs}}{\text{Variable Costs}}
$$

Under this measure, we have 
$$
\% \Delta \text{Core OI} = \text{OLEV} \times \% \Delta \text{Core Sales}
$$

#### Effect of Changes in Financing
Remember 
$$
\text{ROCE} = \text{RNOA} + \text{FLEV}\times \text{Operating Spread}
$$

Similar to $\Delta \text{RNOA}$, we have 
$$
\Delta \text{ROCE}_{t+1} = \Delta \text{RNOA}_{t+1} + \Delta \text{FLEV}_{t+1} \times \text{Operating Spread}_{t} + \text{FLEV}_{t+1} \times \Delta \text{Operating Spread}_{t+1}
$$

where the sum of last 2 terms is the effect of changes in financing.

In $\Delta \text{Operating Spread}$, we have explained $\Delta \text{RNOA}$. Similarly, the change in <abbr title='Net Borrowing Cost'>NBC</abbr> can be written as 
$$
\text{NBC} = \frac{\text{Core NFE}}{\text{NFO}} + \frac{\text{Unusual NFE}}{\text{NFO}}
$$

to distinguish sustainable part and unsustainable part.

### Growth in CSE
Since $\text{CSE} = \text{NOA} - \text{NFO}$, we have 
$$
\begin{aligned}
 \Delta \text{CSE}_{t+1} &= \Delta \text{NOA}_{t+1} - \Delta \text{NFO}_{t+1}\\
 &= \Delta \left( \text{Sales}\times \frac{1}{\text{ATO}} \right)_{t+1} - \Delta \text{NFO}_{t+1}\\
 &= \Delta \text{Sales}_{t+1} \times \left( \frac{1}{\text{ATO}} \right) _{t} + \text{Sales}_{t+1} \times \Delta \left( \frac{1}{\text{ATO}} \right) _{t+1}
 \\
\end{aligned}
$$

### Procedure of Valuation
1. Identify dirty surplus and calculate <abbr title='Return on Common Equity'>ROCE</abbr> from statement of shareholders' equity;
2. Reformulate balance sheet;
3. Reformulate income statement;
4. Decompose <abbr title='Return on Common Equity'>ROCE</abbr>&mdash;profitability analysis;
5. Analyze change in <abbr title='Return on Common Equity'>ROCE</abbr>&mdash;sustainability of earnings;
6. Analyze growth;
7. Forecast future <abbr title='Return on Common Equity'>ROCE</abbr> and growth;
8. Valuation.

### Understanding P/B and P/E through RE

#### Normal P/B and Normal P/E
Normal P/B ($\text{P/B}=1$) means book values are expected to grow at equity cost of capital, i.e., $\text{RE}=0$.

Normal P/E (see [Chapter 6](/courses/financial_statements_analysis/6_accrual_accounting_and_valuation_pe.md#normal-pe)) means earnings are expected to grow at equity cost of capital, i.e., $\text{AEG}=0$.

#### The Molodovsky Effect and Growth Effect
In 1953, Molodovsky discovered that <mark>P/E ratios are higher at the bottom of the business cycle than at the top of the cycle</mark>. The figure below can explain this counterintuitive observation: 

<div align='center'>

![](image/2022-05-06-19-26-54.png)
</div align='center'>

From the blue cells B and H we can see that, at the bottom of the business cycle, a firm that with a normal P/B has negative current <abbr title='Residual Earnings'>RE</abbr>, but this results in a high P/E; conversely, at the top of the cycle, this firm has positive current <abbr title='Residual Earnings'>RE</abbr> while P/E is low.

Similarly, the pattern in green cells A, C, G and I are affected by the Molodovsky effect. But these cells are also affected by growth. <mark>Stocks in cells A and C are growth stocks but those in C are starting at a very low base.</mark>