# Docsify Issues

## 强调渲染失效

以下几种情况会导致强调渲染失效：

- 强调符包裹的文字当中开头（结尾）为英文**符号**且强调符前（后）为中文**字符**；
- 当前行中以 latex 公式开头。

### 例子

```markup
**()**例子
```

**()**例子

### 解决方案

1. 在强调符前（后）进行空格将中英文隔开；
2. 中英文统一；
3. 使用`<strong>`标签。

```markup
1. **()** 例子
2. **（）** 例子
3. <strong>()</strong>例子
```

1. **()** 例子
2. **（）** 例子
3. <strong>()</strong>例子

## 图片渲染失败

将图片放在容器中时，如果中间空行中有空格，图片渲染会失败。

### 例子

```markup
<div align='center'>

![上面一行没空格](九尾.png)
</div align='center'>

<div align='center'>
 
![上面一行有空格](九尾.png)
</div align='center'>
```

<div align='center'>

![上面一行没空格](九尾.png)
</div align='center'>

<div align='center'>
 
![上面一行有空格](九尾.png)
</div align='center'>

## docsify-latex 与 docsify-katex 语法区别

在引用块中，docsify-latex 不支持对行间公式每一行前加 `>` 而 docsify-katex 支持。

### 例子

```markup
> $$
1 + 1 = 2
$$

> $$
> 1 + 1 = 2
> $$
```

> $$
1 + 1 = 2
$$

> $$
> 1 + 1 = 2
> $$

> 以上用 docsify-latex 渲染，如果是 docsify-katex 则没有问题。

### 解决方案

建议在引用块中使用 docsify-latex 时使用以下写法：

```markup
> $$1 + 1 = 2$$
```

> $$1 + 1 = 2$$