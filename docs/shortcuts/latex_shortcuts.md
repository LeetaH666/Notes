# LaTeX 指南

## 编译环境

本地安装 TeXLive，才能编译 TeX。

安装 VSCode 插件：LaTeX Workshop，用于在 VSCode 中实时编译及预览。这个插件还提供了很多额外的工具（摸索中）。

## 代码框架与基本元素

通常 LaTeX 代码具有如下框架：

```tex
\documentclass[11pt]{article}

\usepackage{amsmath}

\title{Thesis}
\author{Levi}

\begin{document}
    \maketitle

    Hello $\alpha$ world!
    
    $$
    \alpha + \beta = \gamma
    $$
\end{document}
```

`\documentclass` 声明了一个文档类型（模板），相当于提前对排版有一个风格化处理。`\begin{document}` 和 `\end{document}` 之间是我们写正文的地方，而 `\documentclass` 与 `\begin{document}` 之间的部分被称作导言区，在这里可以调用各种包，比如 `\usepackage{amsmath}` 就是调用了一个名为 amsmath 的包。除此之外在导言区里还可以对正文中用到的命令进行定义，比如 `\title{Thesis}` 就是定义了标题为 Thesis，在正文中使用 `\maketitle` 指令时就会调用这一定义。

### 指令

指令通常由 `\` 开头，`[]` 里写可选参数，`{}` 里写必要参数。比如：`\documentclass[11pt]{article}` 声明了一个文档类 article，里面的字体大小为 11 pt。由于 `[]` 代表可选参数，因此不写也是可以的，会调用默认的参数，比如 `\documentclass{article}` 会声明默认字体大小的 article。

常用的默认指令有：

- `\maketitle`：生成标题
- `\tableofcontents`：生成目录
- `\centering`：居中
- `\raggedright`：左对齐
- `\ldots`：省略号
- `\hspace{length}`：任意长度的空格
- `\vspace{height}`：任意高度的空行
- `\bibliographystyle{bibStyle}`：设置参考文献的风格
- `\bibliography{bibFile}`：生成参考文献 list

### 环境

环境由 `\begin{env}` 和 `\end{env}` 构成，env 代表不同的环境，比如 equation，figure 等，`\begin{document} ... \end{document}` 声明了一个 document 环境。不同的环境下相同的代码可能有不同的展现形式，且不同的环境支持不同的指令。环境中可以嵌套环境。

常用的默认环境有：

- `\begin{document} ... \end{document}`：文档环境，书写正文
- `\begin{titlepage} ... \end{titlepage}`：首页环境
- `\begin{abstract} ... \end{abstract}`：摘要环境
- `\begin{equation} ... \end{equation}`：公式环境，自动编号
- `\begin{figure} ... \end{figure}`：图像环境
- `\begin{enumerate} ... \end{enumerate}`：有序列表环境
- `\begin{itemize} ... \end{itemize}`：无序列表环境

## 包

记录一些常用包以及对应参数或指令：

- amsmath：只要涉及公式就最好把这个包加上
- amsthm：只要涉及定理和证明就最好把这个包加上
- indentfirst：让每个 section 后的第一段文字缩进
- setspace：修改行距
    - `\onehalfspacing`：1.5 倍行距
    - `\singlespacing`：单倍行距
- geometry：修改页边距
    - `\geometry{margin=1in}`：1 inch 页边距
- natbib：自定义引用格式
    - `[longnamefirst]`：第一次引用时写出所有作者，之后再引用时用 et al. 代替

        > [!NOTE|label:注意]
        > 某些 bibstyle 对 `[longnamefist]` 并不生效，比如 econometrica.bst，需要用相似的 style，比如 ecta.bst，才能生效。

    - `\citet{citekey}`：作者（年份）
    - `\citep{citekey}`：（作者，年份）
- graphicx：插入图片
    - `\includegraphics[width=1\linewidth]{graphPath}`：插入某张图片，宽度为 1 倍页宽
- booktabs：三线表
    - `\toprule`：顶线
    - `\midrule`：中线
    - `\bottomrule`：底线
- ragged2e：提供额外对齐方式
    - `\justifying`：左右对齐
- calligra：提供 calligra 字体（一种花体），通常在 beamer 最后一页使用 `\Huge\calligra Thanks` 作为结尾
    - `\calligra`：使用 calligra 字体

## 标点符号

- 半角引号 `'/"` 只会显示右半引号，即 `’/”`，想要正确显示引号需要使用全角引号 `‘’/“”`；
- `-` 的使用：单独使用时为减号或连字符（hyphen），两个连用时为 en dash，用来表示数字范围，三个连用时为破折号（em dash）；
- 省略号：只用三个点 `...` 可以，只是达不到最佳效果，点与点之间的间距太紧，用 `\ldots` 可以解决；

    > [!TIP|label:提示]
    > 如果在句中，`\ldots` 会导致省略号后间距过大，解决方式是使用 `$\ldots$`；而如果在句末，`$\ldots$.` 又会导致省略号和句号之间距离太窄，因此在句末使用 `\ldots.`。

- 在数学模式中，冒号 `:` 是前后间隔是一致的，适合用来做定义（`:=`）或表示二元关系（`x:y = 2:3`）。想要用作真正的冒号，应该使用 `\colon`，它的后间距会比前间距略大。

## 空格规矩

不同大小的空格：

- ` `：正常行文间的空格，长度不固定，随一行内的文字多少进行自适应调整，在指令后会被忽略（除非指令以标点结尾）；
- `\ `：同上，但在指令后不会被忽略；
- `~`：同上，但会避免被迫换行；
- `\,`：3/18 em；
- `\enspace`：0.5 em；
- `\quad`：1 em；
- `\qquad`：2 em；
- `\hspace{length}`：任意长度的空格；
- `\hfill`：行内排版后剩余的极限长度；
- amsmath：
    - `\:`：4/18 em；
    - `\;`：5/18 em；
    - `\!`：-3/18 em；

> [!ATTENTION|label:注意]
> 在以标点结尾的指令后不要用空格分隔，因为这会破坏你想要达到的效果。

一些规矩：

- 单引号 `‘/’` 与双引号 `“/”` 连续使用时，中间加 `\,` 进行分隔。

## 图表插入

图像通常在 figure 环境中插入，如果想要插入子图，可以在 figure 环境中嵌套 subfigure 环境；表格则通常在 table 环境中插入。

图表环境都是浮动体（float），可选参数是相似的，接下来介绍浮动体的可选参数以及图表环境中常用的指令。

### 可选参数

- `[h]`：here，允许在上下文之间出现
- `[t]`：top，允许在页面顶部出现
- `[b]`：bottom，允许在页面底部出现
- `[p]`：page，允许独立一页出现
- `[!]`：忽略内部参数对一页中浮动体数量的限制

比如 `[hbp]` 就是不允许浮动体在页面顶部出现。

### 指令

- `\caption{graphName}`：图注

    > [!TIP|label:提示]
    > 可以使用 `\usepackage[option]{caption}` 对图注进行一些设置，比如 `[labelfont=bf]` 会加粗图注中的 label。

- `\begin{minipage}...\end{minipage}%`：minipage 环境，可以实现左右布局

    > [!NOTE|label:注意]
    > 一定要加 `%`，否则会因换行而导致依旧是垂直布局。

## 定理与证明

使用 `\newtheorem{envName}{theoremName}` 对定理环境进行定义，比如 `\newtheorem{thm}{THEOREM}` 定义了一个名为 thm 的定理环境，使用这个环境时显示的标题为 THEOREM 1、THEOREM 2 等等。

amsthm 宏包提供了更细致的定理环境以及证明环境（proof，无需定义，可以直接使用），一般需要写定理和证明时都要调用它。

## 文献引用

引用文献需要有文献库，即 `.bib` 文件，用来放置文献信息。如果使用 Zotero 进行文献管理，这个文件可以通过插件 Better BibTeX for Zotero 来导出。而在 VSCode 中进行引用时，扩展 Zotero LaTeX 可以很方便地从 Zotero 中找到对应的 citekey。

## 计数器

LaTeX 的自动编号是由计数器来实现的，可以对计数器进行修改而达到重新标号或从某值开始编号的目的。比如，`\setcounter{enumi}{3}` 可以让 enumerate 环境中的编号从 4 开始。

### Better BibTeX 设置

在 `Zotero -> 编辑 -> 首选项 -> Better BibTeX` 中可以对导出的文献库进行设置。

#### Citekey 格式

在 `... -> Citation keys` 中的 Citation key formula 可以设置 citekey 的格式，默认是 `首位作者的姓 + 标题前三个单词 + 年份`，我的习惯是 `各个作者的姓的开头字母 + 年份 + 标题前三个单词`，比如 `KNS2020ShrinkingCrosssection`，于是使用 `authIni(1, sep="") + year + shorttitle(3, 3)` 来实现。更多函数可以参考 Better BibTeX 的[官方文档](https://retorque.re/zotero-better-bibtex/citing/)。

如果修改了 citekey 的格式，需要在 Zotero 中全选所有文献，右键 `Better BibTeX -> Refresh BibTeX key` 才能生效。

#### 导出内容忽略

为了避免导出的文献库过于臃肿（有的信息对引用是无用的），可以在 `... -> Export -> Fields` 中修改 Fields to omit from export，比如 `abstract, note, file, keywords` 就是在导出文献库时不包括这些信息。

#### 

### 参考文献排版

参考文献的排版可以通过 `\bibliographystyle{styleName}` 来指定风格，而 `\bibliography{mybib}` 则是生成参考文献表的指令，其中 `mybib` 是我们 `.bib` 文件的文件名。

通常我们会希望参考文献表中的字体小一点，且使用单倍行距（正文一般是 1.5 倍行距），可以通过以下代码实现：

```tex
\singlespacing
{\small
\bibliography{mybib}
}
```

## 幻灯片

LaTeX 的幻灯片由文档类 beamer 实现，即 `\documentclass{beamer}`。幻灯片的每一帧由环境 `frame` 实现，即每个 frame 环境中是一帧的内容。每一帧的内容会自动居中，除非没有写在 frame 环境里。

与大多数文档类相同，beamer 同样可以定义 title，author，institute 等，但不是用 `\maketitle` 命令来制作标题，而是用下面这段代码实现标题帧：

```tex
\begin{frame}
    \titlepage
\end{frame}
```

> [!TIP|label:提示]
> 通常 beamer 主题中会通过一些指令插入 shorttitle、shortauthor、shortdate 等，这些内容可以通过对应定义的 option 来指定，比如 `\title[shorttitle]{title}` 就明确了 shorttitle 应该是什么，否则默认 shorttitle = title。

同样地，section 和 subsection 也可以在 beamer 中定义，但需要在 figure 环境外定义。目录的生成也与其他文档类相同，用 `\tableofcontents` 即可。


### 自定义主题

beamer 的主题由四部分构成：内部元素主题 innertheme、外部框架主题 outertheme、颜色主题 colortheme 以及字体主题 fonttheme。一个主题 theme 一般都是调用不同的 innertheme、outertheme、colortheme 或 fonttheme。TeXLive 自带了许多主题，使用 `\usetheme{themeName}` 即可直接调用，也可以对主题进行部分修改，比如 `\usecolortheme{colorthemeName}` 可以对主题的颜色进行修改。

当然，如果想要制作一个长期使用的自定义模板，最好是自己仿照着写一个。TeXLive 中的 beamer 主题源码在 `C:\texlive\2023\texmf-dist\tex\latex\beamer` 下（如果版本不同或者安装位置不同自行寻找）。

> [!TIP|label:提示]
> colortheme 中一般会定义调色盘 palette，即事先定义好一些颜色组合，方便后面调用或是在 innertheme 和 outertheme 中调用。

如果想要把自定义的主题放在其他文件夹，需要在使用主题的文档内写如下代码：

```tex
\makeatletter
    \def\beamer@calltheme#1#2#3{%
        \def\beamer@themelist{#2}
        \@for\beamer@themename:=\beamer@themelist\do
        {\usepackage[{#1}]{\beamer@themelocation/#3\beamer@themename}}}

    \def\usefolder#1{
        \def\beamer@themelocation{#1}
    }
    \def\beamer@themelocation{}
\makeatother

\usefolder{folderName}
\usetheme{themeName}
```

上面这段代码指定了主题放置的位置，如果不这么做，直接在 `\usetheme{}` 中使用绝对路径，会导致报错。

> [!TIP|label:提示]
> `\makeatletter` 指令是对 `@` 进行编码转换，因为在 `.tex` 文件中，`@` 的编码与在 `.sty` 文件中不同；而 `\makeatother` 则是将编码转换回来。


### Logo

在主题模板中想要在任意位置添加一个 logo 是十分困难的，因此用一个非常 dirty 的方式实现在右上角插入 logo 的功能。以 SUSTech 的英文 logo 为例：

```tex
\usepackage{beamerfoils}
\usepackage{pgf}
\MyLogo{\pgfputat{\pgfxy(0.7, 6.5)}{\pgfbox[right, base]{%
    \includegraphics[height=3.5cm]{sustechlogo.png}}}}

\begin{document}
    ...
    \LogoOn
    ...
    \LogoOff
    ...
\end{document}
```

这段代码中，beamerfoils 起的作用是提供 `\LogoOn` 和 `\LogoOff` 的命令，这两个命令可以让我们在任意页插入或不插入 logo，而如果是单纯使用 `\logo{logoName}` 则会在每一帧都插入 logo；pgf 起的作用是对 logo 的位置进行自定义，`\pgfxy(x, y)` 声明了以左下角为零点的直角坐标系的坐标，而 `pgfbox[option]{anything}` 则是声明了一个居右的 box，用来放 logo，`\pgfputat{coordinate}{box}` 是将 pgfbox 放在了声明的坐标处。

## LaTeX Workshop 功能

### 源码与编译结果互寻

LaTeX Workshop 自带 pdf 阅读器，支持源码和编译结果之间的互寻，即光标在源码处时，`Ctrl + Shift + P` 调用 `LaTeX Workshop: Synctex from cursor` 或是使用快捷键 `Ctrl + Alt + J` 即可在 pdf 中找到对应的页面；而在 pdf 中按住 `Ctrl` 点击某个元素，即可在源码中找到对应的代码。

## HyperSnips for Math 自定义快捷输入

使用扩展 HyperSnips for Math 可以实现一些自定义的快捷输入。

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
- **=**: 改写成 LaTex 格式的小于等于号
- **!=**: 改写成 LaTex 格式的不等于号
- **-**: 改写成 LaTex 格式的箭头
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
