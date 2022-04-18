# Repeated Games

### Cooperation Outcome
In the previous example [Prisoner's Dilemma](courses/game_theory/1_introduction.md#example-prisoner39s-dilemma), the Nash equilibrium outcome is $(\text{D}, \text{D})$, i.e., 2 prisoners both choose to defect. But is there any possibility that the outcome is cooperation ($(\text{C},\ \text{C})$)?

There are several solutions to leading the outcome to cooperation: 
- Repitition
- Penalties and Rewards
- Leadership
- Asymmetric Information

We will discuss repitition in this chapter.

There are 2 kinds of repitition: 
- Finite Repitition
- Infinite Repitition: The repitition is infinite or there is a probability that the next game will happen.

### Finite Repitition
A finite repeated game can be seen as a sequential-move game. Suppose there are only 2 stages in a finite repeated game.

Through backward induction, the Nash equilibrium outcome of the last stage is $(\text{D},\ \text{D})$ and thus the previous stage yields the same outcome.

Similarly, we can get the similar results for any finite repeated game. Thus, finite repitition cannot solve the problem.

### Infinite Repitition

#### Contingent Strategy
In repeated games, the sequential nature of the relationship means that players can adopt <mark>contingent strategies</mark> that depend on behavior in preceding plays of the games.

Most contingent strategies are <mark>trigger strategies</mark>. A player using a trigger strategy plays cooperatively as long as his rival do so, but any defection on himself triggers a period of punishment, of specified length, in which he plays noncooperatively in response.

Two best-known trigger strategies are: 
- <mark>Grim Strategy</mark>: Punish the rival <mark>forever</mark> once a defection has occurred, e.g., 

    | Stage | Player 1 using some strategy | Player 2 using a grim strategy |
    | :---: | :--------------------------: | :----------------------------: |
    |   1   |          $\text{C}$          |           $\text{C}$           |
    |   2   |          $\text{C}$          |           $\text{C}$           |
    |   3   |          $\text{D}$          |           $\text{C}$           |
    |   4   |          $\text{D}$          |           $\text{D}$           |
    |   5   |          $\text{C}$          |           $\text{D}$           |
    |   6   |          $\text{C}$          |           $\text{D}$           |
    
- <mark>Tit-for-Tat (TFT)</mark>: Punish the rival if a defection occurred at last stage until the rival cooperates, e.g., 

    | Stage | Player 1 using some strategy | Player 2 using a TFT strategy |
    | :---: | :--------------------------: | :---------------------------: |
    |   1   |          $\text{C}$          |          $\text{C}$           |
    |   2   |          $\text{C}$          |          $\text{C}$           |
    |   3   |          $\text{D}$          |          $\text{C}$           |
    |   4   |          $\text{D}$          |          $\text{D}$           |
    |   5   |          $\text{C}$          |          $\text{D}$           |
    |   6   |          $\text{C}$          |          $\text{C}$           |

    which is a <mark>one-stage shift</mark> of the rival's strategy.

#### Example: Price Competition
Two firms Toys "R" Us and Kmart have only 2 possible prices that they can charge for a particular toy - $\text{Low}$ or $\text{High}$. They are the only 2 competitors in the toy market in a particular city. The payoff diagram is shown below.

<div align='center'>

![](image/2022-04-11-15-41-40.png)
</div align='center'>

Suppose they are interacting for infinitely many periods. In each month, they play the original price competition game and the outcome of each stage game is observable for both players at the end of the month. The monthly discount rate is $r$.

If Kmart adopts a TFT strategy, then the gain of Toys "R" Us from one-period defection is 
$$
4,000 - 3,000 = 1,000
$$

and the loss next month is 
$$
3,000-0=3,000
$$

To let the one-period defection worthwhile we need
$$
1,000>\frac{3,000}{1+r} \implies r>2
$$

However, this is very unlikely in the real world. Thus, one-period defection is not worthwhile for Toys "R" Us.

Similarly, for defecting forever, the gain is still 
$$
4,000-3,000=1,000
$$

in the first month and the present value of loss is
$$
\frac{3,000-1,000}{r}
$$

To let the forever defection worthwhile we need 
$$
1,000>\frac{2,000}{r} \implies r>2
$$

Thus, defecting forever is not worthwhile for Toys "R" Us, too.

Hence, a TFT strategy is a best response of Toys "R" Us. Conversely, if we fix Toys "R" Us with a TFT strategy, we can also derive that a TFT is a best response of Kmart. So playing TFT strategy for both players reaches a Nash equilibrium.

### Folk Theorem
