# LaTeX 快捷输入

> 用 HyperSnips for Math 实现的。

- **变量名后接数字**: 补全成下标形式，最多支持2位数
- **变量名后连续键入字母**：补全成下标形式
- **td**: 补全成下标形式

---

- **pow**: 补全成2上标，即平方
- **invs**: 补全成-1上标，即逆
- **TR**: 补全成T上标，即转置

---

- **变量名后接 bm**: 加粗
- **变量名后接 rm**: 使用正体（E、Var、max等）

---

- **\*\***: 补全成点乘符号
- **xx**: 补全成叉乘符号
- **...**: 补全成半省略号
- **abs**: 补全成绝对值
- **hbar**: 补全成 `bar`
- **hat**: 补全成 `hat`
- **hsq**: 补全成根号
- **oo**: 补全成无穷
- **eps**: 补全成 `\epsilon`

---

- **>=**: 改写成 LaTex 格式的大于等于号
- **<=**: 改写成 LaTex 格式的小于等于号
- **!=**: 改写成 LaTex 格式的不等于号
- **->**: 改写成 LaTex 格式的箭头
- **=>**: 改写成 LaTex 格式的推导符号
- **=<**: 改写成 LaTex 格式的反向推导符号

---

- **//**: 补全成分数形式，输入分子后按 `Tab` 跳到分母
- **case**: 补全 `\begin{cases}` 代码块，即联立
- **ali**: 补全 `\begin{aligned}` 代码块，即等号对齐
- **sum**: 补全成加和形式，按 `Tab` 修改参数（下同）
- **prod**: 补全成连乘形式
- **lim**: 补全成极限形式
- **diff**: 补全成导数形式
- **part**: 补全成偏导数形式
- **dint**: 补全成定积分形式
- **int**: 补全成不定积分形式
- **comma**: 补全成 $\alpha_1$ 到 $\alpha_n$ 的形式并进入 MULTICURSOR 模式（在这个模式下以上补全无法实现）
- **plus**: 补全成级数展开式并进入 MULTICURSOR 模式

---

- **vec + m**: 补全成 mx1的列向量
- **vecr + m**: 补全成 mx1的行向量
- **bmat + m**: 补全成 mxm 的矩阵
- **vecC**: 补全成省略列向量并进入 MULTICURSOR 模式
- **vecR**: 补全成省略行向量并进入 MULTICURSOR 模式
- **omis**: 补全成省略矩阵
- **jacobi**: 补全成jacobi矩阵并进入 MULTICURSOR 模式

---

- **Ctrl + Shift + Alt + E**: sympy 简化

---

`align` 与 `alignat` 对每一行都自动编号，`aligned` 不编号，在 `equation` 中嵌套 `split` 对整个 `split` 编号，想要取消某一行编号在对应行添加 `\notag`。

当只用单列对齐时，即只需要一个 `&`，用 `align` 和用 `alignat` 是相同的，用 `align` 更方便因为 `alignat` 需要额外的参数（对齐列数）；但对于多列对齐，用 `alignat` 更为美观，不会像 `align` 一样有额外的空格。

某些字母用 `\bm` 加粗后，如果下标不加粗，下标与字母之间的距离会过大，可以使用 `\!` 为下标添加负距离。目前已知的字母有：$\bm{C},\ \bm{D},\ \bm{f},\ \bm{I},\ \bm{Y}$。

大写字母和大写希腊字母用 `\widetilde`，小写字母和小写希腊字母用 `\tilde`；对于 bar 和 hat，统一使用 `\overline` 和 `\widehat`，因为 `\overline` 和 `\bar` 的 lineweight 差别很大，`\widehat` 和 `\hat` 在小写字母上差别不大。
