# 测试/比较资产定价模型

## 资产定价模型

资产定价模型是对资产的（超额）收益率建模，以解释资产的期望收益率在截面上的差异。比如最广为人知的 CAPM 模型，它假设

$$
\E[\tilde{r}] - r_f = \frac{\Cov(\tilde{r},\ \tilde{r}_{m})}{\Var(\tilde{r}_{m})} (\E[\tilde{r}_{m}] - r_f),
$$

其中 $\tilde{r}$ 是任意资产的收益率，$\tilde{r}_{m}$ 是市场组合的收益率，$r_f$ 是无风险利率。带波浪线表示是一个随机变量，不带的则是一个常数。通常真正的市场组合是不为人知的，我们只能找到一个 proxy 来代替，比如市场指数。而如果不存在无风险资产的话，上式的无风险利率还可以用 zero-beta rate $r_z$ 来代替：

$$
\E[\tilde{r}] - r_z=  + \frac{\Cov(\tilde{r},\ \tilde{r}_{m})}{\Var(\tilde{r}_{m})} (\E[\tilde{r}_{m}] - r_z),
$$

意思是如果存在和市场组合无关的资产（协方差为 $0$），那么它的期望收益率就是 $r_z$。

## 可交易因子与不可交易因子

问题：

- $\alpha$ 的截面相关性
    - GRS
- test assets 如何选择
    - A Skeptical Appraisal of Asset Pricing Tests
    - Which Alpha、Choosing Factors
    - 不需要选择（贝叶斯）：Comparing Asset Pricing Models、On Comparing Asset Pricing Models
- 因子动物园
    - Taming the Factor Zoo
- EIV 问题
    - Optimal Cross-Sectional Regression
- 遗漏变量

## 时序回归

## 截面回归

## Fama-MacBeth 两步回归

## GMM

## Shanken’s T^2^ Test

## GRS Test

## HJ Bound

## A Skeptical Appraisal of Asset Pricing Tests

## ... and the Cross-Section of Expected Returns

## Which Alpha

## Choosing Factors

## Comparing Asset Pricing Models

## Taming the Factor Zoo

## Omitted Factors

## Optimal Cross-Sectional Regression