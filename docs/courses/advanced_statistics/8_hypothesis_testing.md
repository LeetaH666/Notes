# 8 Hypothesis Testing

## 8.1 Introduction

> [!DEFINITION]
> A **hypothesis** is a statement about a population parameter.

> [!DEFINITION]
> The 2 complementary hypotheses in a hypothesis testing problem are called the **null hypothesis** and the **alternative hypothesis**. They are denoted by $H_0$ and $H_1$, respectively.

> [!DEFINITION]
> A **hypothesis testing procedure** or **hypothesis test** is a rule that specifies: 
> 
> 1. For which sample values the decision is made to accept $H_0$ as true.
> 2. For which sample values $H_0$ is rejected and $H_1$ is accepted as true.
>
> The subset of the sample space for which $H_0$ will be rejected is called the **rejection region** or **critical region**. The complement of the rejection region is called the **acceptance region**.

## 8.2 Methods of Finding Tests

### 8.2.1 Likelihood Ratio Tests

> [!DEFINITION]
> The **likelihood ratio test statistic** for testing $H_0: \theta \in \Theta_0$ versus $H_1: \theta \in \Theta_0^{c}$ is 
>
> $$\lambda(\bm{x}) = \frac{\sup_{\Theta_0} L(\theta \mid \bm{x})}{\sup_{\Theta} L(\theta \mid \bm{x})},$$
>
> where $\Theta$ is the whole parameter space and $L(\theta \mid \bm{x})$ is the likelihood function. A **likelihood ratio test (LRT)** is any test that has a rejection region of the form $\left\{\bm{x}: \lambda(\bm{x}) \leqslant c \right\}$, where $c$ is any number satisfying $0 \leqslant c \leqslant 1$.

> [!EXAMPLE|label:Normal LRT]