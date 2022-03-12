---
html:
    toc: true
---

# Markdown Preview Enhanced (MPE) {ignore}

### 目录
`Ctrl + Shift + P`打开功能搜索，输入`toc`可以看到`Markdown Preview Enhanced: Create TOC`，回车并`Ctrl + S`保存即可。在标题后加`{ignore}`即可忽略该标题不放入目录。


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Markdown Preview Enhanced (MPE) {ignore}](#markdown-preview-enhanced-mpe-ignore)
    - [目录](#目录)
    - [打印分页 {ignore}](#打印分页-ignore)
    - [语言规则](#语言规则)
    - [结构体](#结构体)
      - [列表](#列表)
      - [引用](#引用)
      - [警告](#警告)
      - [表格](#表格)
      - [代码块](#代码块)
      - [行内代码](#行内代码)
    - [文字效果](#文字效果)
      - [斜体](#斜体)
      - [加粗](#加粗)
      - [删除线](#删除线)
      - [高亮](#高亮)
      - [下划线](#下划线)
      - [分割线](#分割线)
      - [上标](#上标)
      - [下标](#下标)
      - [定义缩写](#定义缩写)
      - [LaTeX](#latex)
      - [Emoji](#emoji)
    - [快捷键](#快捷键)
    - [链接](#链接)
      - [网页](#网页)
      - [标题](#标题)
      - [图片](#图片)
    - [导入外部文件](#导入外部文件)
    - [其他常用HTML语言](#其他常用html语言)
      - [空行](#空行)
      - [占位符](#占位符)
    - [输出文件](#输出文件)
      - [HTML（推荐）](#html推荐)
      - [PDF](#pdf)

<!-- /code_chunk_output -->

!!! note 注意
    *[TOC]: Table of Contents
    当需要输出为 HTML 文件时，`{ignore}`对主体的 TOC 失效，即仍会显示被忽略的标题，但对侧边栏依旧生效。

### 打印分页 {ignore}
    <div STYLE='page-break-after: always;'></div>
或者
输入pagebreak并`Ctrl + /`注释，可以达到同样的效果。

    <!-- pagebreak -->
<!-- pagebreak -->

### 语言规则
`Enter`起到换行或结构体分块的作用，但不能实现空行，也就是多次`Enter`是无效的。
`Space`只能空一格，不能连续空格。
`Tab`用来改变结构体层级。
实现其他的需求需要使用[HTML语言](#其他常用html语言)。

<!-- pagebreak -->

### 结构体

#### 列表
- **无序列表**

      - 无序列表
      - 用横杠表示
        - 用`Tab`控制层级
  - 无序列表
  - 用横杠表示
    - 用`Tab`控制层级

- **有序列表**

        1. 数字标号
        2. `Enter`自动编号
    1. 数字标号
    2. `Enter`自动编号

#### 引用
    > 一个大于号
> 一个大于号

#### 警告
    !!! note 标题
        标题前不要忘了加`note`
!!! note 标题
    标题前不要忘了加`note`

#### 表格
    |         表头1          | 表头2          |          表头3 |
    | :--------------------: | :------------- | -------------: |
    |          居中          | 左对齐         |         右对齐 |
    |           >            | 合并左边单元格 | 合并下方单元格 |
    | 空着不写合并右边单元格 |                |              ^ |
|         表头1          | 表头2          |          表头3 |
| :--------------------: | :------------- | -------------: |
|          居中          | 左对齐         |         右对齐 |
|           >            | 合并左边单元格 | 合并下方单元格 |
| 空着不写合并右边单元格 |                |              ^ |

#### 代码块
    ```python
    print('三个键盘左上角类似顿号的符号，后面接语言类型。')
    ```
```python
print('三个键盘左上角类似顿号的符号，后面接语言类型。')
```
> 支持语言类型后自定义`class`和`attribute`。

- **添加行号**

        ```python {.line-numbers}
            def add(x, y):
            return x+y
        ```
    ```python {.line-numbers}
    def add(x, y):
        return x+y
    ```

- **高亮某几行**

        ```python {highlight=1-3}
        def add(x, y):
            return x+y

        def multiply(x, y):
            return x*y
        ```
    ```python {highlight=1-3}
    def add(x, y):
        return x+y

    def multiply(x, y):
        return x*y
    ```
    或者

        ```python {highlight=[1-3, 5]}
        def add(x, y):
            return x+y

        def multiply(x, y):
            return x*y
        ```
    ```python {highlight=[1-3, 5]}
    def add(x, y):
        return x+y

    def multiply(x, y):
        return x*y
    ```

> 添加了`cmd`后可以`Ctrl + Shift + P`搜索`code chunk`执行代码（需要在 VSCode 设置中开启`Markdown-preview-enhanced: Enable Script Execution`）。

- **执行代码**

        ```python {.line-numbers cmd}
            def add(x, y):
            return x+y
        ```
    ```python {.line-numbers cmd}
    def add(x, y):
        return x+y

    print(add(1, 2))
    ```

#### 行内代码
    代码两边加键盘左上角类似顿号的符号即可：`print('Hello World!')`
代码两边加键盘左上角类似顿号的符号即可：`print('Hello World!')`

<!-- pagebreak -->

### 文字效果

#### 斜体
    *一个星号* 或者 _一个下划线_
*一个星号* 或者 _一个下划线_

#### 加粗
    **两个星号** 或者 __两个下划线__
**两个星号** 或者 __两个下划线__
> 平时单独加粗或者单独斜体用`*`，如果要组合，即既要加粗又要斜体则`*`与`_`组合使用。

#### 删除线
    ~~两个波浪线~~
~~两个波浪线~~

#### 高亮
    ==两个等于号==
==两个等于号==

#### 下划线
    <u>html u 标签</u>
<u>html u 标签</u>

#### 分割线
    ---

---

#### 上标
    2^th^
2^th^

#### 下标
    x~1~
x~1~

#### 定义缩写
    *[CNN]: Convolutional Neuraul Network
    Chairman Zheng is proficient in CNN.
*[CNN]: Convolutional Neuraul Network
Chairman Zheng is proficient in CNN.
> 鼠标悬浮即可看到全称（pdf不支持该效果）。

#### LaTeX
    $\text{行内公式}$
    $$
    \text{块公式}
    $$
$\text{行内公式}$
$$
\text{块公式}
$$


#### Emoji
:smile: :flushed: :sweat: :sob: :joy:
:+1: :ok_hand: :point_down: :clap: :muscle: :pray:
:heart: :fire: :boom: :star2: :shit: :zzz:
更多emoji可查找[emoji表](https://www.webfx.com/tools/emoji-cheat-sheet/)。

<!-- pagebreak -->

### 快捷键

- **Ctrl + B**: 选中的文本加粗
- **Ctrl + I**: 选中的文本斜体
- **Ctrl + M**: 进入数学模式（一下行内，两下块）
- **lm**: 进入行内数学模式
- **dm**: 进入块数学模式
- **Ctrl + Alt + V**: 将剪贴板的图片粘贴到笔记中 
- **table + m + n**: 生成mxn的表格（行数不包括表头）
- **Shift + Alt + F**: 代码整理
> 其中某些快捷键需要安装 *HyperSnipts for Math* 与 *Paste Image* 。

<!-- pagebreak -->

### 链接

#### 网页
    [想显示的文字](https://www.baidu.com)
[想显示的文字](https://www.baidu.com)

#### 标题
    [想显示的文字](#代码块)
[想显示的文字](#代码块)

#### 图片
    !\[](图片地址)
> 用[快捷键](#快捷键)粘贴图片即可。

### 导入外部文件
```markdown
@import "test.py" {.line-numbers}
```
@import "test.py" {.line-numbers}
> 还支持图片，csv，html，js，pdf（需要装 *pdf2svg*），md等格式的文件，也就是可以直接嵌入别人的笔记:grin:。


### 其他常用HTML语言

#### 空行
    第一行
    第二行<br>
    第四行
第一行
第二行<br>
第四行

#### 占位符

- **半方占位符（一个英文字符大小）**

        ab
        &ensp;a
    ab
    &ensp;a

- **全方占位符（一个中文字符大小）**

        哈哈
        &emsp;哈哈
    哈哈
    &emsp;哈哈

- **折叠内容**

        <details>
        <summary>展开查看</summary>

        内容要与上面空一行！
        </details>
    <details>
    <summary>展开查看</summary>
    
    内容要与上面空一行！
    </details>
    
    > pdf 不适用。

### 输出文件

#### HTML（推荐）
在`Preview`中右键选择`HTML`中的`HTML (cdn hosted)`。

- **侧边栏设置**
    输出 HTML 时默认侧边栏收缩，如果需要默认展开，则可以在 md 文件顶端输入如下 yaml 语言：
        
        ---
        html:
            toc: true
        ---
    如果不需要侧边栏，则为`false`。默认是`undefined`。

#### PDF
在`Preview`中右键选择`Chrome (Puppeteer)`中的`PDF`。
`Puppeteer`默认`printBackground`的属性是`false`，即在`Preview`中设置的主题并不会打印出来，如果想要打印主题，可以`Ctrl + Shift + P`输入`setting json`选择`Prefrences: Open Settings (JSON)`，在里面加入`"markdown-preview-enhanced.printBackground": true`的设置。
如果设置的主题是除白色以外的其他颜色，打印出来的 PDF 四周会有空白，一种解决办法是`Ctrl + Shift + P`输入`css`选择`Markdown Preview Enhanced: Customize CSS`，在其中加入如下代码：
```less
@media print {
    @page {
        margin: 0;
    }
}
```
但是出来的效果有点丑。欢迎使用HTML:grin:！