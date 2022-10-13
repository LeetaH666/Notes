# Auto-Encoding Variational Bayes

### 论文信息

#### 作者

Diederik P. Kingma, Max Welling

均来自阿姆斯特丹大学。

#### 收录情况

收录于2014ICLR。

### 解决什么问题

假设数据 $x$ 由某个包含隐变量 $z$ 的随机过程生成，$z$ 符合先验分布 $p_{\theta}(z)$，$x$ 则符合条件分布 $p_{\theta}(x|z)$。有以下两个问题：

1. 当 $p_{\theta}(x|z)$ 比较复杂时（比如非线性神经网络），数据 $x$ 的先验分布 $p_{\theta}(x) = \int p_{\theta}(z) p_{\theta}(x|z) ~ \mathrm{d}z$ 和后验分布 $p_{\theta}(z|x) = \frac{p_{\theta}(x|z) p_{\theta}(z)}{p_{\theta}(x)}$ 都难以获得；
2. 当数据集比较大时，用蒙特卡洛采样的方法来优化参数会很慢。

在这种情况下，使用VAE（Variational Auto-Encoder）能

1. 高效估计参数 $\theta$，这样可以模拟这个未知的随机过程；
2. 高效估计后验分布 $p_{\theta}(z|x)$，这对于对数据$x$编码的任务有用；
3. 高效估计先验分布 $p_{\theta}(x)$，比如图片降噪、修补、提高分辨率任务。

### 变分贝叶斯（Variational Bayes）

- 泛函：函数中的自变量不是具体数值而是函数；
- 变分：对泛函求微分。

变分贝叶斯的目的是用一个识别模型（recognition model）$q_{\phi}(z|x)$ 来估计难以获得的真实后验分布 $p_{\theta}(z|x)$。

> 假设输入数据 $x$ 和输出数据 $y$ ，生成式模型（generative model）和判别式模型（discriminative model）的目标都是得到条件分布 $p(y|x)$，但生成式模型通过拟合联合分布 $p(x,\ y)$，即拟合 $p(x|y)$ 和 $p(y)$，再通过贝叶斯定理——$p(y|x) = \frac{p(x|y) p(y)}{p(x)}$ 得到，而判别式模型则直接拟合目标条件分布 $p(y|x)$。识别模型则是生成式模型中用来估计 $p(x|y)$ 的模型。

识别模型和真实后验分布的KL散度为

$$
D_{\text{KL}}(q_{\phi}(z|x)||p_{\theta}(z|x)) = \mathrm{E}_{q_{\phi}(z|x)} \left( \log \frac{q_{\phi}(z)}{p_{\theta}(z|x)} \right) = \mathrm{E}_{q_{\phi}(z|x)} \left( \log \left( \frac{q_{\phi}(z)}{p_{\theta}(z,\ x)} p_{\theta}(x) \right) \right) = \mathrm{E}_{q_{\phi}(z|x)} \left( \log \frac{q_{\phi}(z)}{p_{\theta}(z,\ x)} \right) + \log p_{\theta}(x)
$$

上式可以移项后写成

$$
\log p_{\theta}(x) = \mathrm{E}_{q_{\phi}(z|x)} \left( \log \frac{p_{\theta}(z,\ x)}{q_{\phi}(z)} \right) + D_{\text{KL}}(q_{\phi}(z)||p_{\theta}(z|x))
$$

当给定数据 $x$，最小化KL散度即最大化变分下界 $\mathrm{E}_{q_{\phi}(z|x)} \left( \log \frac{p_{\theta}(z,\ x)}{q_{\phi}(z)} \right)$。

> KL散度是非负的，因此有 $\log p_{\theta}(x) \geqslant \mathrm{E}_{q_{\phi}(z|x)} \left( \log \frac{p_{\theta}(z,\ x)}{q_{\phi}(z)} \right)$，故称变分下界。

变分下界可以进一步写成

$$
\mathrm{E}_{q_{\phi}(z|x)} \left( \log \frac{p_{\theta}(z,\ x)}{q_{\phi}(z)} \right) = - \mathrm{E}_{q_{\phi}(z|x)} \left( \log \frac{q_{\phi}(z)}{p_{\theta}(x|z) p_{\theta}(z)} \right) = - D_{\text{KL}}(q_{\phi}(z|x)||p_{\theta}(z)) + \mathrm{E}_{q_{\phi}(z|x)} \left( \log p_{\theta}(x|z) \right) 
$$

则需要最小化的目标函数是

$$
D_{\text{KL}}(q_{\phi}(z|x)||p_{\theta}(z)) - \mathrm{E}_{q_{\phi}(z|x)} \left( \log p_{\theta}(x|z) \right)
$$


上式第一项是 $z$ 的先验与后验分布的KL散度，第二项则是重构误差。如果我们把识别模型 $q_{\phi}(z|x)$ 看作一个概率编码器（probabilistic encoder），即输入 $x$ 得到编码 $z$ 的分布，则 $p_{\theta}(x|z)$ 就是一个概率解码器（probabilistic decoder），而第二项就是衡量了概率编码器给出的 $z$ 能从概率解码器中恢复出 $x$ 的概率大小。通常第一项是可以正常积分得到的，因此整个目标函数可以看作是带正则化的重构误差。

### 重参数化（The reparametrization trick）

由于概率编码器给出的是编码 $z$ 的分布，并不是一个确切的值，如果直接进行采样（比如蒙特卡洛），反向传播的时候是没有梯度信息的（因为采样是个离散的动作），而且费时费力，因此使用重参数化的技巧来生成 $z$，即将 $z$ 与一个可微变换 $g_{\phi}(\epsilon,\ x)$ 等价起来，其中 $\epsilon \sim p(\epsilon)$ 是一个服从噪声分布的辅助变量。

因为 $z = g_{\phi}(\epsilon,\ x)$，我们有 $q_{\phi}(z|x) \mathrm{d}z = p(\epsilon) \mathrm{d}\epsilon$，则对于某一函数 $f(z)$，

$$
\mathrm{E}_{q_{\phi}(z|x)} (f(z)) = \int q_{\phi}(z|x) f(z) ~ \mathrm{d}z = \int p(\epsilon) f\left( g_{\phi}(\epsilon,\ x) \right) ~ \mathrm{d}\epsilon
$$

即可以用 $\frac{1}{L}\sum\limits_{l=1}^{L} f\left( g_{\phi}\left( \epsilon^{(l)},\ x \right) \right) $ 来估计 $\mathrm{E}_{q_{\phi}(z|x)} (f(z))$。令 $f(z) = \log p_{\theta}(x|z)$，我们可以得到重构误差的估计。