# The Analysis of Profitability

### Two Drivers of Residual Earnings
Recall that in [Chapter 5](courses/financial_statements_analysis/5_accrual_accounting_and_valuation_pb.md#residual-earnings-and-valuation) we have 
$$
\text{RE}_t = \left( \text{ROCE}_t - \text{Required Return} \right) \text{CSE}_{t-1}
$$

which means 2 drivers of <abbr title='Residual Earnings'>RE</abbr> are 
- <abbr title="Return on Common Shareholders' Equity">ROCE</abbr>
- Growth (<abbr title="Common Shareholders' Equity">CSE</abbr>)

In this chapter we will discuss the drivers of <abbr title="Return on Common Shareholders' Equity">ROCE</abbr>.

### What Drives ROCE
$$
\text{ROCE} = \frac{\text{CI}}{\text{CSE}} = \frac{\text{OI}-\text{NFE}}{\text{CSE}} = \frac{\text{OI}}{\text{NOA}} \times \frac{\text{NOA}}{\text{CSE}} - \frac{\text{NFE}}{\text{NFO}} \times \frac{\text{NFO}}{\text{CSE}} = \text{RNOA} \times \text{Capitalization Ratio} - \text{NBC} \times \text{FLEV}
$$

which means <mark><abbr title="Return on Common Shareholders' Equity">ROCE</abbr> is a weighted average between <abbr title='Return on Net Operating Assets'>RNOA</abbr> and <abbr title='Net Borrowing Cost'>NBC</abbr></mark>.

We continue to decompose it: 
$$
\begin{aligned}
 \text{ROCE} &= \text{RNOA} \times (1+\text{FLEV}) - \text{NBC} \times \text{FLEV}\\
 &= \text{RNOA} + \text{FLEV} \times (\text{RNOA}-\text{NBC})\\
 &= \text{RNOA} + \text{FLEV} \times \text{Operating Spread}\\
\end{aligned}
$$

which means <mark><abbr title="Return on Common Shareholders' Equity">ROCE</abbr> would be greater than <abbr title='Return on Net Operating Assets'>RNOA</abbr> only when the company has positve <abbr title='Net Financial Obligations'>NFO</abbr> and operating spread</mark>.

Futhermore, we can decompose <abbr title='Return on Net Operating Assets'>RNOA</abbr> to have 
$$
\begin{aligned}
 \text{ROCE} &= \frac{\text{OI}}{\text{Sales}} \times \frac{\text{Sales}}{\text{NOA}} + \text{FLEV} \times \text{Operating Spread}\\
 &= \text{PM} \times \text{ATO} + \text{FLEV} \times \text{Operating Spread}\\
 \\
\end{aligned}
$$

where $\text{PM}$ is <mark>profit margin</mark> and $\text{ATO}$ is <mark>asset turnover ratio</mark>.

Usually, <mark><abbr title='Profit Margin'>PM</abbr> and <abbr title='Asset Turnover Ratio'>ATO</abbr> have negative correlation</mark>, e.g., real estate companies have high <abbr title='Profit Margin'>PM</abbr> and low <abbr title='Asset Turnover Ratio'>ATO</abbr> while supermarkets have low <abbr title='Profit Margin'>PM</abbr> and high <abbr title='Asset Turnover Ratio'>ATO</abbr>.

### Power of Leverage

#### Financial Leverage (FLEV)
Suppose a company has positive operating spread.

Since we have 
$$
\text{ROCE} = \text{RNOA} + \text{FLEV} \times \text{Operating Spread}\\
$$

<mark>higher <abbr title='Financial Leverage'>FLEV</abbr> leads to higher <abbr title="Return on Common Shareholders' Equity">ROCE</abbr></mark>.

If the company has negative <abbr title='Net Financial Obligations'>NFO</abbr>, i.e., it has positive <abbr title='Net Financial Assets'>NFA</abbr>, it can pay dividends to shareholders to increase its negative <abbr title='Financial Leverage'>FLEV</abbr> and to increase its <abbr title="Return on Common Shareholders' Equity">ROCE</abbr>.

#### Operating Liability Leverage (OLLEV)
Note that we have 
$$
\text{RNOA} = \frac{\text{OI}}{\text{NOA}}
$$

and we can decompose it like <abbr title="Return on Common Shareholders' Equity">ROCE</abbr>: 
$$
\begin{aligned}
 \text{ROCE} &\implies \text{RNOA}\\
 \text{CI} &\implies \text{OI}\\
 \text{CSE} &\implies \text{NOA}\\
 \text{NOA} &\implies \text{OA}\\
 \text{NFO} &\implies \text{OL}\\
\end{aligned}
$$

The operating profitability without operating liabilities would be 
$$
\text{Return on Operating Assets (ROOA)} = \frac{\text{OI}+\text{Implicit Interest (After Tax)}}{\text{OA}}
$$

where 
$$
\text{Implicit Interest (After Tax)} = \text{Short-Term Borrowing Rate (After Tax)} \times \text{OL}
$$

Through the similar decomposition we have 
$$
\text{RNOA} = \text{ROOA} + \text{OLLEV} \times \text{OL Spread}
$$

where 
$$
\text{OLLEV} = \frac{\text{OL}}{\text{NOA}}\\
{}\\
\text{OL Spread} = \text{ROOA} - \text{Short-Term Borrowing Rate (After Tax)}
$$

Suppose a company has positive <abbr title='Operating Liabilities'>OL</abbr> spread, <mark>higher <abbr title='Operating Liability Leverage'>OLLEV</abbr> leads to higher <abbr title='Return on Net Operating Assets'>RNOA</abbr></mark>.

#### Leverage Effects on ROCE
We can write <abbr title="Return on Common Shareholders' Equity">ROCE</abbr> as 
$$
\begin{aligned}
 \text{ROCE} &= \text{ROOA} + (\text{RNOA}-\text{ROOA}) + (\text{ROCE}-\text{RNOA})\\
 &= \text{Return with No Leverage} + \text{Effect of OL} + \text{Effect of FLEV}\\
\end{aligned}
$$

### Example: Relationship between Rates of Return and Leverage
Suppose a firm has a return on common equity of $13.4$ percent, a net after-tax borrowing cost of $4.5$ percent, and a return of $11.2$ percent on net operating assets of $\text{\textdollar}405 \text{ million}$.

We can calculate its financial leverage as follows: 
$$
\begin{aligned}
 \text{ROCE} &= \text{RNOA} + \text{FLEV} \times (\text{RNOA} - \text{NBC})\\
 13.4\% &= 11.2\% + \text{FLEV} \times (11.2\% - 4.5\%)\\
\end{aligned}\implies
\text{FLEV} = 0.3284
$$

Also, suppose the firm has a short-term borrowing rate of $4.0$ percent after tax and a return on operating assets of $8.5$ percent.

We can calculate its operating liability leverage as follows: 
$$
\begin{aligned}
 \text{RNOA} &= \text{ROOA} + \text{OLLEV} \times (\text{ROOA} - \text{Short-Term Borrowing Rate (After Tax)})\\
 11.2\% &= 8.5\% + \text{OLLEV} \times (8.5\% - 4.0\%)\\
\end{aligned}\\
 \implies \text{OLLEV} = 0.6
$$

Now the firm reports its total assets is $\text{\textdollar}715 \text{ million}$.

We can calculate items in reformulated balance sheet as follows (amounts in million): 
$$
\begin{aligned}
 \begin{aligned}
  \text{FLEV} &= \frac{\text{NFO}}{\text{CSE}}\\
  0.3284 &= \frac{\text{NFO}}{\text{\textdollar}405-\text{NFO}} 
 \end{aligned}&\implies
 \text{NFO} \approx \text{\textdollar}100\\
 {}\\
 \begin{aligned}
  \text{OLLEV} &= \frac{\text{OL}}{\text{NOA}}\\
  0.6 &= \frac{\text{OL}}{\text{\textdollar}405}\\
 \end{aligned}&\implies
 \text{OL} = \text{\textdollar}243\\
\end{aligned}\\
\begin{aligned}\\
 \text{CSE} &= \text{NOA} - \text{NFO} = \text{\textdollar}405 - \text{\textdollar}100 = \text{\textdollar}305\\
 \text{OA} &= \text{NOA} + \text{OL} = \text{\textdollar}405 + \text{\textdollar}243 = \text{\textdollar}648\\
 {}\\
 \text{FA} &= \text{Total Assets} - \text{OA} = \text{\textdollar}715 - \text{\textdollar}648 = \text{\textdollar}67\\
 {}\\
 \text{FO} &= \text{NFO} + \text{FA} = \text{\textdollar}100 + \text{\textdollar}67 = \text{\textdollar}167
\end{aligned}
$$

### Comparison to Traditional Ratio

#### RNOA VS. ROA
$$
\text{RNOA} = \frac{\text{OI}}{\text{NOA}}\\
{}\\
\text{ROA} = \frac{\text{NI}}{\text{Total Assets}}
$$

- <abbr title='Return on Net Operating Assets'>RNOA</abbr> focuses on operation while <abbr title='Return on Assets'>ROA</abbr> mixes both operation and financing;
- <abbr title='Return on Assets'>ROA</abbr> uses net income instead of comprehensive income as numerator.

#### FLEV VS. Debt-to-Equity Ratio
$$
\text{FLEV} = \frac{\text{NFO}}{\text{CSE}} = \frac{\text{FO} - \text{FA}}{\text{CSE}}\\
{}\\
\text{Debt-to-Equity Ratio} = \frac{\text{Total Debt}}{\text{Equity}} = \frac{\text{OL} + \text{FO}}{\text{CSE}}
$$

<abbr title='Financial Leverage'>FLEV</abbr> focuses on financing while debt-to-equity ratio mixes both operation and financing.

### Further Breakdown

#### Profit Margin
We can write <abbr title='Profit Margin'>PM</abbr> as 
$$
\text{PM} = \text{Sales PM} + \text{Other OI PM}
$$

Sales <abbr title='Profit Margin'>PM</abbr> is sustainable while some items in other operating income <abbr title='Profit Margin'>PM</abbr> are unsustainable.

#### Asset Turnover Ratio
We can invert <abbr title='Asset Turnover Ratio'>ATO</abbr> to be 
$$
\frac{1}{\text{ATO}} = \frac{\text{NOA}}{\text{Sales}}
$$

and we can break down <abbr title='Net Operating Assets'>NOA</abbr> to do further analysis.

#### Net Borrowing Cost
We can write <abbr title='Net Borrowing Cost'>NBC</abbr> as 
$$
\begin{aligned}
 \text{NBC} &= \frac{\text{NFE}}{\text{NFO}} = \frac{\text{FE} - \text{FI}}{\text{NFO}} = \frac{\text{After-Tax Interest on FO} - \text{After-Tax Interest on FA} + \cdots}{\text{NFO}}\\
 {}\\
 &\approx \frac{\text{After-Tax Interest on FO}}{\text{NFO}} - \frac{\text{After-Tax Interest on FA}}{\text{NFO}}\\
 {}\\
 &= \frac{\text{FO}}{\text{NFO}}\times \frac{\text{After-Tax Interest on FO}}{\text{FO}} - \frac{\text{FA}}{\text{NFO}}\times \frac{\text{After-Tax Interest on FA}}{\text{FA}}\\
 {}\\
 &= \frac{\text{FO}}{\text{NFO}}\times \text{After-Tax Borrowing Cost} - \frac{\text{FA}}{\text{NFO}}\times \text{After-Tax Return of FA}\\
\end{aligned}
$$

which is <mark>a weighted average between after-tax borrowing cost and after-tax return of financial assets</mark>.