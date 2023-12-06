# Big Data Analytics and Application

Sandro Claudio Lera

2023 Fall

## PhD Entrance Exam Syllabus

### 1. Overview of Data Science

- Definition and characteristics of data science, big data, and statistics
    - *Data science*: an **interdisciplinary** academic **field** that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to **extract** or extrapolate knowledge and **insights from** noisy, structured, and unstructured **data** (source: [WIKIPEDIA](https://en.wikipedia.org/wiki/Data_science)).
    - *Big data*
        - Helps us to **answer big questions**
            - “small” question: How many people live in Shenzhen?
                - Traditional statistics can answer this question.
            - “big” question: How is the possibility to work from home going to affect people’s decision to move to cities?
                - Traditional statistics hard to answer this question.
        - 4 V: 
            - **V**olume: Scale of data is big
            - **V**elocity: Speed of data generation is high (streaming data)
            - **V**ariety: Many different forms of data
            - **V**eracity: Much uncertainty of data
    - *Statistics*: **discipline** that concerns the **collection**, organization, **analysis**, **interpretation**, and **presentation** of **data** (source: [WIKIPEDIA](https://en.wikipedia.org/wiki/Statistics)).
- The difference between statistics and machine learning
    - **Machine learning is based on statistics**, but **not all** machine learning model **have good statistical properties**.
    - Statistics is more on **inference** and **interpretation** of data, while machine learning is more on **prediction**. In other words, traditional statistical methods may be **less accurate on prediction but more interpretable**, while machine learning methods may be **more accurate on prediction but less interpretable**.
    - Machine learning can easily have **more complex models** than traditional statistical methods.
- The difference between artificial intelligence and machine learning
    - **AI includes machine learning** which is based on statistics, but also includes methods based on other fields, e.g., **biology**.
- Different categories of data

    <div align='center'>

    ![](image/2023-12-05-15-09-16.png)
    </div align='center'>

- Key steps in data mining
    - SEMMA: 
        - **S**ample: Take a sample from the dataset; partition into training, validation, and test datasets.
        - **E**xplore: Examine the dataset statistically and graphically.
        - **M**odify: Transform the variables and impute missing values.
        - **M**odel: Fit predictive models (e.g., regression tree, neural network).
        - **A**ssess: Compare models using a validation dataset.
- Data sampling
    - *Bootstrapping*
        - **Sampling with replacement**: We want to generate $N$ datasets from one original dataset with $K$ datapoints. For each bootstrapped dataset, we sample $K$ times with replacement from the original dataset.
        - A straightforward way to **get error bars**: We can calculate the statistics on each of the $N$ bootstrapped datasets, and use the standard deviation of the statistics as the error bars.
        - **Do not** calculate the mean of an original dataset! Bootstrap it and show the error bars (standard deviations).
        - The probability of any datapoint being selected in a bootstrapped dataset: 

            $$
            \begin{aligned}
            &1 - \text{Prob. of not being selected} = 1 - \left(1 - \frac{1}{K} \right)^{K} \\
            &\xlongequal{K \to \infty} 1 - e^{-1} \approx 63\%.
            \end{aligned}
            $$

            Actually, when $K = 2$, the probability is $75\%$ and decreases as $K$ increases.
        - The probability of any datapoint being selected in $N$ bootstrapped datasets: from above we know that the probability of any datapoint not being selected in a bootstrapped dataset is roughly $37\%$, so the probability of any datapoint being selected in $N$ bootstrapped datasets is roughly $1 - 0.37^{N}$. As $N$ increases, the probability approaches $1$.

    - *Under- and oversampling*

        - Class imbalance

            <div align='center'>

            ![](image/2023-12-05-15-23-31.png)
            </div align='center'>

- Opportunities and pitfalls of big data analysis
    - Opportunities
        - more data may lead to better models
        - complex systems may lead to “emergence phenomena”
    - Pitfalls
        - Interpretability
        - Ethics problems, e.g., data discrimination and privacy
        - Environmental impact, e.g., energy consumption

### 2. Data Exploration

- Data visualization
    - Different types of data require different types of visualization
        - *Qualitative data*
            - bar chart (*ordinal data*)

                <div align='center'>

                ![](image/2023-12-05-16-58-37.png)
                </div align='center'>

        - *Quantitative data*
            - histogram (*discrete data*)

                <div align='center'>

                ![](image/2023-12-05-16-59-54.png)
                </div align='center'>

            - pdf (*continuous data*)
            - cdf (or sf, survival function, i.e., 1 - cdf)

                <div align='center'>

                ![](image/2023-12-05-17-01-09.png)
                </div align='center'>

            - quantile function (inverse of cdf)

                <div align='center'>

                ![](image/2023-12-05-17-01-51.png)
                </div align='center'>

            - box plot (graphically shows min, max, mean, median, other quantiles, and inter-quantile range (IQR, e.g., 75\% quantile - 25\% quantile))
                
                <div align='center'>

                ![](image/2023-12-05-17-02-46.png)
                </div align='center'>

            - violin plot (box plot + pdf, the left and right sides of the violin plot can be pdfs of different classes)

                <div align='center'>

                ![](image/2023-12-05-17-03-18.png)
                </div align='center'>

        - *Both*
            - heatmap (easier to read than 3D-plots)

                <div align='center'>

                ![](image/2023-12-05-17-04-05.png)
                </div align='center'>

        - *Others*
            - visualizing networks (nodes, edges)
    - Focus on different statistics, e.g. mean or median, for data with different distributions.
    - Ranking changes data from quantitative to qualitative (ordinal).
- Dimensionality reduction
    - **Embedding via unsupervised learning**
        - PCA (linear)
        - neural networks (non-linear)

### 3. Probability Distributions

- Basics of probability distributions
- The importance of heavy-tailed distributions

### 4. Optimization

- Taylor Approximations
- Newton’s Method
    - *Intuition*: the root of a **complicated function** is hard to find, so we **approximate the function with a simpler function** (e.g., a linear function or tangent line) and find the root of it. At the approximate root, we can approximate the function again and iterate to approach the true root.
    - Since we approximate the function with a linear function, we need to use the first-order derivative. If it is hard to get, we can use a **first-order difference to approximate** it, which is called **Quasi-Newton method**.
- Gradient Descent
    - Gradient is **a vector of partial derivatives**, so it has **direction** (points into the direction of steepest ascent).
    - Hyper-parameter: step size or learning rate
    - Many extensions
        - Allow for boundary constraints
        - smart choices of the step size
        - add noise (to not get stuck)
        - add momentum (to not get stuck)
        - smart approximations of the gradient (simplifies the calculation)
        - include higher-order derivatives (to speed up convergence)
        - ...
- Non-Gradient based Metaheuristics
    - Simulated Annealing
        - *Intuition*: Accept updates in **loss-decreasing** direction while accept updates in **loss-increasing** direction with a **probability** (**higher loss-increasing, lower probability**). The probability is also related to the **temperature** (**lower temperature, lower probability**) that decreases over iterations (exploring first).
    - Genetic Algorithm
        - *Settings*: Each code is called a **chromosome**. Every binary (0 or 1) in a chromosome is called a **gene**. The set of all chromosomes is called a **population**.
        - *Steps*: 
            - Initialize the population;
            - Randomly choose **parents** in the initial population (lower loss, higher probability to be chosen);
            - **Crossover** (divide the chromosome into 2 parts and exchange) parents to get **offspring**;
            - **Mutation** (flip 0 to 1 or 1 to 0) the offspring to get **mutated offspring** in some probability;
            - The initial population, offspring, and mutated offspring consists the next generation (population), but there is an upper bound for the population, i.e., somebody will be eliminated. So the last step is to **select** the best ones (lower loss) to form the next generation;
            - Back to the second step.
    - Brute Force Optimization
        - Grid Search
        - To improve efficiency, we can start on a coarse grid and find the optimum. Then we can start on a finer grid around the optimum and find the optimum again. This iterative process is called **hierachical brute force**.

### 5. Linear Regression

- Least Squares
- Multivariate Linear Regression
    - Categorial data would be handled via **dummy** variables or **indicator** variables (but only need $n - 1$ variables for $n$ categories, or we will meet the multi-collinearity problem).
- Regression coefficient estimation
    - It is **faster** to calculate $(X^{\top} X) \beta = X^{\top} y$ than $\beta = (X^{\top} X)^{-1} X^{\top} y$ because the latter needs to calculate the **inverse** of a matrix. The former can be calculated via some numerical methods.
- Regularization
    - *Motivation*: When 2 independent variables are highly correlated, the regression coefficients are not stable. This is called **multi-collinearity**. Under this situation, small changes in the data can lead to large changes in the regression coefficients. So we need to **penalize** the regression coefficients to make them more stable.
    - Ridge, Lasso, Elastic Net (Ridge + Lasso)
    - *Single perturbation*: The analytical solution of the Ridge regression is $\widehat{\beta} = (X^{\top} X + \lambda I)^{-1} X^{\top} y$. However, the solution that $\lambda \to 0$ **does not equal to** the solution of the original least squares problem, i.e. $\lambda = 0$. Maybe the loss function is **not continuous** at $\lambda = 0$.
- Regression performance evaluation
    - Evaluation metrics
        - MSE, RMSE, MAE
        - *R-squared*
            - **Explained variance**
            - **How much better than the most naive model &mdash; the mean**: 

                $$
                R^{2}(y,\ \widehat{y}) = 1 - \frac{\sum_{i=1}^{n} (y_i - \widehat{y}_{i})^{2}}{\sum_{i=1}^{n} (y_i - \overline{y}_{i})^{2}}.
                $$

                For the mean model, $\widehat{y}_{i} = \overline{y}_{i}$, and thus $R^{2}(y,\ \widehat{y}) = 0$. Better model has smaller MSE (the nominator) and thus has higher $R^{2}$.

    - K-Fold Cross-Validation
        - Split training data into training and validation datasets. Train the model on the training dataset and evaluate the model on the validation dataset. Repeat this process for $K$ times and **average** the evaluation metrics for robustness.
        - **Do not** use the testing data!
        - *Implicit assumption*: the training data and testing data are from the **same distribution**.

### 6. Logistic Regression

- Logistic Regression estimation
    - The outcome variable, $y$, is **binary** (0 or 1).
    - The estimated results, $\widehat{y}$, are **probabilities**.
    - Using a **threshold** to classify $\widehat{y}$ into 0 or 1, e.g., larger than 0.7 is 1 and otherwise 0.
    - *Specific form*: 

        Using the **sigmoid functions** of $k$ independent variables as predictors of probability $p$, i.e.,

        $$
        p = \frac{1}{1 + \exp[-(\beta_0 + \beta_1 x_1 + \cdots + \beta_k x_k)]}.
        $$

        The **odds** of belonging to class 1 is just the ratio of the probability of belonging to class 1 to the probability of belonging to class 0, i.e., 

        $$
        \text{Odds}(y = 1) = \frac{p}{1 - p} = \exp(\beta_0 + \beta_1 x_1 + \cdots + \beta_k x_k).
        $$

        Taking the log on both sides, we get the **logistic model**: 

        $$
        \text{logit} := \log p - \log (1 - p) = \beta_0 + \beta_1 x_1 + \cdots + \beta_k x_k.
        $$

    - *Objective function*:

        The parameter $\beta_0,\ \cdots,\ \beta_k$ in the logistic model are determined s.t. they **minimize the cross-entropy** 

        $$
        \sum_{i=1}^{n} -[y_i \log p_{i} + (1 - y_i) \log (1 - p_{i})].
        $$

        Since $y_i$ is binary and $0 \leqslant p_{i} \leqslant 1$, the objective is **zero or positive**, which means the **minimum is zero**. When $y_i = 1$, we only need to consider the first term, and larger $p_{i}$ results in smaller objective; when $y_i = 0$, we only need to consider the second term, and smaller $p_{i}$ results in smaller objective.

- Classification performance evaluation
    - F1 Score
        - **Confusion Matrix**

            <div align='center'>

            ![](image/2023-12-05-20-04-13.png)
            </div align='center'>

        - **Precision** talks about how many positive predictions are correct (true).
        - **Recall** talks about how many true predictions are made among all positive labels.
        - **Accuracy** talks about how many predictions are correct (true).
        - If we care more about **false positives**, we should use **precision** rather than recall; conversely, if we care more about **false negatives**, we should use **recall** rather than precision.
        - We can also consider both. **F1 score** is the **weighted average** of precision and recall: 

            $$
            \text{F1} = 2 \times \frac{\text{precision} \times \text{recall}}{\text{precision} + \text{recall}}.
            $$

        - When classes are **imbalanced**, e.g., 

            <div class='centertable'>

            |              | Positive | Negative |
            | :----------: | :------: | :------: |
            | **Positive** |    1     |    0     |
            | **Negative** |    1     |   998    |

            </div class='centertable'>
            
            Although the accuracy is high, the model is bad for positive labels since there is a large recall.

    - ROC-Curves
        - **Recall** is also called **true positive rate (TPR)**: $\frac{\text{TP}}{\text{TP} + \text{FN}}$.
        - We can also define **false positive rate (FPR)** by $\frac{\text{FP}}{\text{FP} + \text{TN}}$.
        - Given **different thresholds**, we can get different TPR and FPR. Let **TPR be the y-axis** and **FPR be the x-axis**, we can get a curve called **ROC curve**.
- Generalization to multiple classes

### 7. From Linear to Non-Linear Methods

- Inductive Bias
    - $f$, the algorithm, or the model, is called the inductive bias.

### 8. Tree-Based Methods

- Decision Trees
    - Overfit prevention
    - Impurity measures
    - Advantages and shortcomings
- Ensembles and Bagging
- Random Forest
    - Hyper-parameters and K-Fold Cross-Validation
    - Random forest is just **ensembling bootstrapped decision trees**
- Non-Greedy Trees
- Boosting

### 9. Overfitting

- Definition of overfitting
- Bias-Variance Tradeoff
- Benign Overfits
- Generalization to real life
    - Goodhart’s Law

### 10. Classification Methods

- K-Nearest Neighbors
- The Naïve Bayes Classifier

### 11. Neural Nets

- Basics and architectures
    - Activation functions
    - Backpropagation
    - Epochs
    - Dropout
- Deep Learning
- Convolutional Neural Networks
- Advantages and shortcomings
    - Structured vs unstructured data

### 12. Autoencoders

- Generative Adversarial (neural) Network
- Deepfakes

### 13. Feature Selection

- Regularization
- Feature Selection with Random Forests
- Feature Selection with Boruta
- Principle Component Analysis
- Pipelines and Model Stacking

### 14. Shapley Values

- Shapley Values in Game Theory
- Feature Selection with Shapley Values
- Explainable AI

### 15. Text Mining

- Text preprocessing
- TF-IDF
- N-Grams
- Word2vec
    - Limitations
    - Beyond word2vec

### 16. Concept Drift

- Feature drift or covariate shift
- Real concept drift

### 17. Time-Series

- Temporal data
- Descriptive vs. Predictive Modeling
- Time Series components
- Benchmark
- Stationarity
- Autocorrelation
- Smoothing Methods

### 18. Cluster Analysis

- Supervised vs. Unsupervised machine learning
- Distance metrics
- Hierarchical (Agglomerative) Clustering
    - Dendrogram
- Validating clusters
- The K-Means Algorithm
- DBSCAN

### 19. Complex Networks

- Network basics
- Shortest path
- Node-level centrality metrics
- Edge centrality
    - Line graphs
- Network metrics
- Erdos-Renyi Graph
- Power-Laws
- Small-World Networks
- Clustering
- The Friendship Paradox (FP)
- Bipartite Graphs
- Meaning of Complexity

### 20. Machine Learning on Networks

- Node2vec
- Generalized network embeddings
- Graph Convolutional Neural Networks

### 21. Applications to Finance

- Challenge of price prediction
- Backtest and performance measures
- Common pitfalls
- Survivorship Bias
