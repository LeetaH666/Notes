# QE Questions

2023 Fall

Overall 26 questions, 1 are missing

- Suppose you have down 12-fold cross validation for a task and get average RMSE is xxxxx.xxxxxx. How many digits should you report? Explain how to determine naturally. 
- Consider you are using gradient boost algorithm. Write down 2 hyperparameters that you think are the most important and explain why.
- Why training an autoencoder is a self-supervised task?
- Suppose you are training a naive model (for a regression task) that output constant $c$ for all datapoints. Write down the objective function of the model and give an explicit solution of $c$.
- Suppose you are doing muliple linear regression with one categorial feature with $K$ classes. Why do we use $K-1$ regression variables to represent the categorial feature? If we want to include all $K$ regression variables, how can we achieve that by modifying the objective function?
- Consider an **undirected** friendship network. Alice is a friend of Bob, Bob is a friend of Charlie, and Charlie is a friend of Denis. Which **line** has the highest degree in the network? Why?
- In what cases you will use the $k$-nearest neighbor algorithm?
- What is the intuition explanation of R-squared?
- Consider you are analyzing texts on Weibo. You want to train a model to predict the depression level, from $0$ to $10$. Give the detailed steps of how you would do it.
- Consider you have $n$ datapoints and $5$ features: age, gender, whether to attend school, height, and xxx. What is the maximum number of questions can be asked in all independent splits?
- Both Naive Bayes and Logistic Regression have inductive bias. Explain the inductive bias of each model.
- Suppose you are predicting returns for $12,500$ stocks. Instead of dealing with the returns directly, you rank them into $10$ deciles, i.e., the first $10\%$ are stocks with lowest returns and the last $10\%$ are stocks with highest returns. Would you treat this as a classification or regression task? Why?
- Why a model with zero training error is not overfitting?
- Suppose you train a decision tree with $n$ balanced data, i.e., the numbers of “+” and “-” are the same. $n \% 4 = 0$. Now $\frac{1}{4}$-th data go to the left leaf, and $\frac{1}{4}$-th data are “+” in the left leaf. What is the sample-weighted Gini impurity?
- What is the difference between covariate drift and concept drift? Which one is more problematic?
- If all-else-equal, a social network firm $A$ is twice as large as another social network firm $B$. How much more valuable is firm $A$ than firm $B$?
- Write down an objective function of logistic regression and explain each terms.
- Describe a case of network that the node degree distribution is heavy-tailed.
- Suppose you are predicting the number of passengers in the subway in Shenzhen using monthly data. Using an $\text{AR}(n)$ model with trend term and a monthly seasonal effect and write down the objective function.
- Express the temperature both mathematically and qualitively in the Simulated Annealing algorithm.
- Suppose you are training a multi-layer perceptron to classify datapoints with $n$ features into $k$ classes. The model has 2 hidden layers, with $r$ and $s$ neurons respectively. How many trainable parameters are there in the model?
- Wirte down the detailed steps of training a regression tree, including the objective function.
- Consider you are doing $N$ bagging for a regression task. Which is/are correct in the following statements:
    1. We train $N$ models on $N$ bootstrapped samples.
    2. Using average of the $N$ predictions as the final prediction.
    3. Each model has a high variance and a low bias.

    For incorrect statements, explain why.
- Which one do you think has a higher node degree variance, a Erdos-Renyi graph or a Barabasi-Albert graph? Why?
- Increasing $k$ in $k$-nearest neighbor algorithm will increase or decrease the bias? Why?