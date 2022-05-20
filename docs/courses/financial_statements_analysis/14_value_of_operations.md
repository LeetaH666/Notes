# Chapter 14: The Value of Operations and the Evaluation of Enterprise PB and PE Ratios

### Valuation of Equity
Remember in [Chapter 5](courses/financial_statements_analysis/5_accrual_accounting_and_valuation_pb.md) we have used an <abbr title='Residual Earnings'>RE</abbr> model for equity valuation: 
$$
V_t^{\text{E}} = \text{CSE}_t + \text{PV of RE}
$$

where $\text{CSE}_t$ is our anchor book value.

Actually we just want to adjust those who are not measured at market value to be market value. Since 
$$
\text{CSE} = \text{NOA} - \text{NFO}
$$

and <abbr title='Net Financial Obligations'>NFO</abbr> are usually at or close to market value, we just need to focus on <abbr title='Net Operating Assets'>NOA</abbr>.

#### Valuation of Operations&mdash;A Modification to RE Model
$$
V_t^{\text{NOA}} = \text{NOA}_t + \text{PV of ReOI}
$$

> [!NOTE]
> The required return used here is firm-level while that used in <abbr title='Residual Earnings'>RE</abbr> valuation is equity-level. We can understand it by comparison: 
> 
> <div class='centertable'>
> 
> | Earnings Component | Book Value Component |                               RE Measure                                |
> | :----------------: | :------------------: | :---------------------------------------------------------------------: |
> |    $\text{OI}$     |     $\text{NOA}$     |   $\text{ReOI}_t = \text{OI}_t - r_{\text{F}}\times \text{NOA}_{t-1}$   |
> |    $\text{NFE}$    |     $\text{NFO}$     |  $\text{ReNFE}_t = \text{NFE}_t - r_{\text{D}}\times \text{NFO}_{t-1}$  |
> |        ${}$        |                      |                                                                         |
> | $\text{Earnings}$  |     $\text{CSE}$     | $\text{RE}_t = \text{Earnings}_t - r_{\text{E}}\times \text{CSE}_{t-1}$ |
> </div class='centertable'>
> 
> where $r_{\text{F}}$, $r_{\text{D}}$ and $r_{\text{E}}$ are required return at firm-, debt- and equity-level respectively.

#### Drivers of ReOI
We can write <abbr title='Residual Operating Income'>ReOI</abbr> as 
$$
\text{ReOI}_t = (\text{RNOA}_t - r_{\text{F}})\times \text{NOA}_{t-1}
$$

which shows the drivers are <abbr title='Return on Net Operating Assets'>RNOA</abbr> this year and <abbr title='Net Operating Assets'>NOA</abbr> last year.

#### Valuation of Operations&mdash;A Modification to AEG Model
Recall that in [Chapter 6](courses/financial_statements_analysis/6_accrual_accounting_and_valuation_pe.md) we also have an <abbr title='Abnormal Earnings Growth'>AEG</abbr> model: 
$$
V_t^{\text{E}} = \frac{\text{Earnings}_{t+1} + (\text{PV of AEG})_{t+1}}{r_{\text{E}}}
$$

We can modify it to value the operations: 
$$
V_t^{\text{NOA}} = \frac{\text{OI}_{t+1} + (\text{PV of AOIG})_{t+1}}{r_{\text{F}}}
$$

where
$$
\begin{aligned}
 \text{AOIG}_t &= \text{Cum-Dividend OI}_t - \text{Normal OI}_t\\
 &= (\text{OI}_t + r_{\text{F}}\times \text{FCF}_{t-1}) - r_{\text{F}}\times \text{OI}_{t-1}\\
\end{aligned}
$$

is <mark>abnormal operating income growth</mark> with <abbr title='Free Cash Flow'>FCF</abbr> as "dividend".

#### Cost of Capital
The cost of capital for equity can be calculated by <abbr title='Capital Asset Pricing Model'>CAPM</abbr>: 
$$
r_{\text{E}} - r_f = \beta_{\text{E}} (r_M - r_f)
$$

where $\beta_{\text{E}}$ is the equity beta instead of the firm beta.

The cost of capital for debt can be estimated by <abbr title='Net Borrowing Cost'>NBC</abbr> and thus, the cost of capital for firm is weighted average cost of capital (WACC): 
$$
r_{\text{F}} = \frac{V_t^{\text{E}}}{V_t^{\text{F}}} r_{\text{E}} + \frac{V_t^{\text{D}}}{V_t^{\text{F}}} r_{\text{D}}
$$

#### Effect of Leverage
We can write $r_{\text{E}}$ as 
$$
\begin{aligned}
 r_{\text{E}} &= \frac{V_t^{\text{F}}}{V_t^{\text{E}}} r_{\text{F}} - \frac{V_t^{\text{D}}}{V_t^{\text{E}}} r_{\text{D}}\\
 &= r_{\text{F}} + \frac{V_t^{\text{D}}}{V_t^{\text{E}}} (r_{\text{F}} - r_{\text{D}})\\
\end{aligned}
$$

which shows that equity risk has 2 components: 
- Operating risk
- Financing risk (leverage)

According to MM theorem, <mark>leverage has no effect on value</mark>. Increasing leverage only increases P/B and decreases P/E.
$$
\text{Leverage} \uparrow \implies \text{P/B} \uparrow,\ \text{P/E} \downarrow
$$

> [!TIP]
> See [Leverage Effect on P/B and P/E](#leverage-effect-on-pb-and-pe).

#### Effect of Stock Repurchase
$$
\text{Repurchase} \implies
\begin{cases}
 \text{NFO}\uparrow,\ \text{CSE}\downarrow \implies \text{FLEV}\uparrow\\
 \text{NFE}\uparrow,\ \text{Shares Outstanding}\downarrow \implies \text{EPS}\uparrow,\ \text{ROCE}\uparrow\\
\end{cases}
$$

<mark>If the repurchase price is lower than the fair market price, then stock repurchase adds value</mark>, i.e., the intrinsic value will increase; <mark>otherwise, stock repurchase has no effect on value</mark>.

> [!TIP]
> We can understand it by considering the extreme case that repurchase at $\text{\textdollar}0$, then <abbr title="Common Stockholders' Equity">CSE</abbr> does not change while <abbr title='Earnings Per Share'>EPS</abbr> increases, which results in higher intrinsic value.

### Leverage Effect on P/B and P/E

#### Levered and Unlevered P/B
$$
\text{Levered P/B} = \frac{V_t^{\text{E}}}{\text{CSE}_t}\\
{}\\
\text{Unlevered P/B} = \frac{V_t^{\text{NOA}}}{\text{NOA}_t}
$$

Similarly, we have 
$$
\begin{aligned}
 \text{Levered P/B} &= \frac{V_t^{\text{NOA}} - \text{NFO}_t}{\text{CSE}_t}\\
 &= \text{Unlevered P/B}\times \text{OLLEV}_t - \text{FLEV}_t\\
 &= \text{Unlevered P/B} + \text{FLEV}_t\times (\text{Unlevered P/B} - 1) \\
\end{aligned}
$$

which means 
$$
\text{FLEV}\uparrow \implies \text{Levered P/B}\uparrow
$$

#### Levered and Unlevered P/E
$$
\text{Levered Forward P/E} = \frac{V_t^{\text{E}}}{\text{Earnings}_{t+1}}\\
{}\\
\text{Unlevered Forward P/E} = \frac{V_t^{\text{NOA}}}{\text{OI}_{t+1}}
$$

Assume $V_t^{\text{NFO}} = \text{NFO}_{t+1}$, we have 
$$
\begin{aligned}
 \text{Levered Forward P/E} &= \frac{V_t^{\text{NOA}} - \text{NFO}_{t}}{\text{Earnings}_{t+1}} \\
 &= \text{Unlevered Forward P/E}\times \frac{\text{OI}_{t+1}}{\text{Earnings}_{t+1}} - \frac{\text{NFO}_{t}}{\text{Earnings}_{t+1}}\\
 &= \text{Unlevered Forward P/E}\times \left(1 + \frac{\text{NFE}_{t+1}}{\text{Earnings}_{t+1}} \right) - \frac{\text{NFE}_{t+1}}{\text{Earnings}_{t+1}}\times \frac{1}{\text{NBC}_{t+1}}\\
 &= \text{Unlevered Forward P/E} + \text{ELEV}_{t+1}\times \left(\text{Unlevered Forward P/E} - \frac{1}{\text{NBC}_{t+1}} \right) \\
\end{aligned}
$$

where $\text{ELEV} = \frac{\text{NFE}}{\text{Earnings}}$ is <mark>earnings leverage</mark>.

We can also find the relationship between levered and unlevered **E/P** is 
$$
\begin{aligned}
 \frac{\text{Earnings}_{t+1}}{V_t^{\text{E}}} &= \frac{\text{OI}_{t+1}}{V_t^{\text{NOA}}}\times \frac{V_t^{\text{NOA}}}{V_t^{\text{E}}} - \frac{\text{NFE}_{t+1}}{V_t^{\text{E}}} \\
 &= \frac{\text{OI}_{t+1}}{V_t^{\text{NOA}}}\times \left(1 + \frac{\text{NFO}_t}{V_t^{\text{E}}} \right)  - \frac{\text{NFO}_{t}}{V_t^{\text{E}}}\times \text{NBC}_{t+1} \\
 &= \frac{\text{OI}_{t+1}}{V_t^{\text{NOA}}} + \frac{\text{NFO}_t}{V_t^{\text{E}}} \left( \frac{\text{OI}_{t+1}}{V_t^{\text{NOA}}} - \text{NBC}_{t+1} \right)  \\
\end{aligned}
$$

which means 
$$
\frac{\text{NFO}_t}{V_t^{\text{E}}}\uparrow \implies \text{Levered Forward P/E}\downarrow
$$

For trailing P/E, we have 
$$
\text{Levered Trailing P/E} = \frac{V_t^{\text{E}} + \text{d}_t}{\text{Earnings}_t}\\
{}\\
\text{Unlevered Trailing P/E} = \frac{V_t^{\text{NOA}} + \text{FCF}_t}{\text{OI}_t}\\
$$

Assume $\text{F}_t = \text{NFE}_t$, we have 
$$
\begin{aligned}
 \text{Levered Trailing P/E} &= \text{Unlevered Trailing P/E}\times \frac{\text{OI}_t}{\text{Earnings}_t} - \frac{\text{NFO}_t + \text{F}_t}{\text{Earnings}_t}\\
 &= \text{Unlevered Forward P/E}\times \left(1 + \frac{\text{NFE}_{t}}{\text{Earnings}_{t}} \right) - \frac{\text{NFE}_{t}}{\text{Earnings}_{t}}\times \left( \frac{1}{\text{NBC}_{t}} + 1 \right) \\
 &= \text{Unlevered Forward P/E} + \text{ELEV}_t\times \left( \text{Unlevered Forward P/E} - \frac{1}{\text{NBC}_{t}} - 1 \right) \\
\end{aligned}
$$

> [!TIP]
> If you do not remember the definition of $\text{d}$ and $\text{F}$, back to [Chapter 8](courses/financial_statements_analysis/8_viewing_the_business_through_the_financial_statements.md).