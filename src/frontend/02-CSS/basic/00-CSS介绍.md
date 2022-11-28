---
icon: edit
date: 2022-11-23
category:
- fullstack
tag:
- css
---


# CSS介绍

**[CSS](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS)** (层叠样式表) 让你可以创建好看的网页，但是它具体是怎么工作的呢？这篇文章通过一些很简单的例子，告诉我们什么是 CSS，同时还会涉及一些和 CSS 相关的专业术语。

![这是浏览器默认样式](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS/html-example.png)

如果所有网站都像上图那样，互联网就会非常枯燥。但是使用 CSS 就可以完全控制浏览器如何显示 HTML 元素，从而充分展示你喜欢的设计样式。

## [CSS 用来干什么？](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/What_is_CSS#css_用来干什么？)

前文提到过，CSS 是用来指定文档如何展示给用户的一门语言——如网页的样式、布局、等等。

CSS 可以用于给文档添加样式 —— 比如改变标题和链接的[颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)及[大小](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)。它也可用于创建布局 —— 比如将一个单列文本变成包含主要内容区域和存放相关信息的侧边栏区域的[布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_cookbook/Column_layouts)。它甚至还可以用来做一些特效，比如[动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)。查看本段内容中所给出的特定案例。

## [CSS 语法](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/What_is_CSS#css_语法)

CSS 是一门基于规则的语言 —— 你能定义用于你的网页中特定元素样式的一组规则。比如“我希望页面中的主标题是红色的大字”

下面这段代码使用非常简单的 CSS 规则实现了之前提到的效果：

```css
h1 {
    color: red;
    font-size: 5em;
}
```

语法由一个 [选择器 (selector)](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_Selector)起头。它 *选择 (selects)* 了我们将要用来添加样式的 HTML 元素。在这个例子中我们为一级标题（主标题[`` (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)）添加样式。

接着输入一对大括号`{ }`。在大括号内部定义一个或多个形式为 **属性 (property):值 (value);** 的 **声明 (declarations)**。每个声明都指定了我们所选择元素的一个属性，之后跟一个我们想赋给这个属性的值。

冒号之前是属性，冒号之后是值。不同的 CSS [属性 (properties) (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/property/CSS) 对应不同的合法值。在这个例子中，我们指定了 `color` 属性，它可以接受许多[颜色值](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#颜色)；还有 `font-size` 属性，它可以接收许多 [size units](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#数字，长度和百分比) 值。

一个 CSS 样式表可以包含很多个规则。

```css
h1 {
    color: red;
    font-size: 5em;
}

p {
    color: black;
}
```

你会发现你已经很快掌握了一些属性的值，但是属性可以接受的值远不止这些

### [CSS 规范](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/What_is_CSS#css_规范)

所有的标准 Web 技术 (HTML, CSS, JavaScript 等) 都被定义在一个巨大的文档中，称作 规范 specifications (或者简称为 "specs")，它是由 (像是 [W3C (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/W3C), [WHATWG](https://developer.mozilla.org/zh-CN/docs/Glossary/WHATWG), [ECMA](https://developer.mozilla.org/zh-CN/docs/Glossary/ECMA) 或 [Khronos (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Khronos)) 这些规范化组织所发布的，其中还定义了各种技术是如何工作的。

CSS 也不例外——它是由 W3C(万维网联盟) 中的一个名叫 [CSS Working Group](https://www.w3.org/Style/CSS/) 团体发展起来的。这个团体是由浏览器厂商和其他公司中对 CSS 感兴趣的人作为代表组成的。也有其他的人员，比如*受邀专家 (invited experts)*，他们作为不从属于任何组织的独立声音加入团体。

新的 CSS 特性被开发出来，或是因为某个浏览器热衷于开发新功能，或是因为 Web 设计人员与开发者要求增加一个新特性，又或是 CSS Working Group 内部的讨论决定。CSS 始终在发展，并伴随着新的特性。然而，有一件事情从始至终都未改变，那就是不让新的改变破坏旧的网站，即使是 2000 年建立的网站，如今也能正常访问！

## [CSS 究竟是怎么工作的？](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works#css_究竟是怎么工作的？)

当浏览器展示一个文件的时候，它必须兼顾文件的内容和文件的样式信息，下面我们会了解到它处理文件的标准的流程。需要知道的是，下面的步骤是浏览加载网页的简化版本，而且不同的浏览器在处理文件的时候会有不同的方式，但是下面的步骤基本都会出现。

1. 浏览器载入 HTML 文件（比如从网络上获取）。
2. 将 HTML 文件转化成一个 DOM（Document Object Model），DOM 是文件在计算机内存中的表现形式，下一节将更加详细的解释 DOM。
3. 接下来，浏览器会拉取该 HTML 相关的大部分资源，比如嵌入到页面的图片、视频和 CSS 样式。JavaScript 则会稍后进行处理，简单起见，同时此节主讲 CSS，所以这里对如何加载 JavaScript 不会展开叙述。
4. 浏览器拉取到 CSS 之后会进行解析，根据选择器的不同类型（比如 element、class、id 等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id 选择器等）应用在对应的 DOM 的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。
5. 上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行布局。
6. 网页展示在屏幕上（这一步被称为着色）。

结合下面的图示更形象：

![img](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)

## [关于 DOM](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works#关于_dom)

一个 DOM 有一个树形结构，标记语言中的每一个元素、属性以及每一段文字都对应着结构树中的一个节点（Node/DOM 或 DOM node）。节点由节点本身和其他 DOM 节点的关系定义，有些节点有父节点，有些节点有兄弟节点（同级节点）。

对于 DOM 的理解会很大程度上帮助你设计、调试和维护你的 CSS，因为 DOM 是你的 CSS 样式和文件内容的结合。当你使用浏览器 F12 调试的时候你需要操作 DOM 以查看使用了哪些规则。

## [一个真实的 DOM 案例](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works#一个真实的_dom_案例)

不同于很长且枯燥的案例，这里我们通过一个 HTML 片段来了解 HTML 怎么转化成 DOM

以下列 HTML 代码为例：

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Copy to Clipboard

在这个 DOM 中，`<p>`元素对应了父节点，它的子节点是一个 text 节点和三个对应了`<span>`元素的节点，`SPAN`节点同时也是他们中的 Text 节点的父节点。

```bash
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
    └─ "Sheets"
```

上图就是浏览器怎么解析之前那个 HTML 片段——它生成上图的 DOM 树形结构并将它按照如下输出到浏览器：

<iframe class="sample-code-frame" title="一个真实的 DOM 案例 sample" id="frame_一个真实的_dom_案例" width="100%" height="60" src="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works/_sample_.%E4%B8%80%E4%B8%AA%E7%9C%9F%E5%AE%9E%E7%9A%84_dom_%E6%A1%88%E4%BE%8B.html" loading="lazy" style="box-sizing: content-box; border: 1px solid var(--border-primary); max-width: 100%; width: calc((100% - 2rem) - 2px); background: rgb(255, 255, 255); border-radius: var(--elem-radius); padding: 1rem;"></iframe>

## [应用 CSS 到 DOM](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works#应用_css_到_dom)

接下来让我们看看添加一些 CSS 到文件里加以渲染，同样的 HTML 代码：

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Copy to Clipboard

以下为 CSS 代码：

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

Copy to Clipboard

浏览器会解析 HTML 并创造一个 DOM，然后解析 CSS。可以看到唯一的选择器就是`span`元素选择器，浏览器处理规则会非常快！把同样的规则直接使用在三个`<span>`标签上，然后渲染出图像到屏幕。

现在的显示如下：

<iframe class="sample-code-frame" title="应用 CSS 到 DOM sample" id="frame_应用_css_到_dom" width="100%" height="60" src="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works/_sample_.%E5%BA%94%E7%94%A8_css_%E5%88%B0_dom.html" loading="lazy" style="box-sizing: content-box; border: 1px solid var(--border-primary); max-width: 100%; width: calc((100% - 2rem) - 2px); background: rgb(255, 255, 255); border-radius: var(--elem-radius); padding: 1rem;"></iframe>

在我们下一个模块的 [Debugging CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Debugging_CSS) 文章中我们将会使用 F12 调试 CSS 的问题并且更进一步的了解浏览器如何解析 CSS。

## [当浏览器遇到无法解析的 CSS 代码会发生什么](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works#当浏览器遇到无法解析的_css_代码会发生什么)

鉴于 CSS 一直不断的开发，因此领先于浏览器可以识别的范围，那么你也许会好奇当浏览器遇到无法解析的 CSS 选择器或声明的时候会发生什么呢？

答案就是浏览器什么也不会做，继续解析下一个 CSS 样式！

如果一个浏览器在解析你所书写的 CSS 规则的过程中遇到了无法理解的属性或者值，它会忽略这些并继续解析下面的 CSS 声明。在你书写了错误的 CSS 代码（或者误拼写），又或者当浏览器遇到对于它来说很新的还没有支持的 CSS 代码的时候上述的情况同样会发生（直接忽略）。

相似的，当浏览器遇到无法解析的选择器的时候，他会直接忽略整个选择器规则，然后解析下一个 CSS 选择器。

在下面的案例中，我使用会导致属性错误的英式拼写来书写"color"，所以我的段落没有被渲染成蓝色，而其他的 CSS 代码会正常执行，只有错误的部分会被忽略。

```html
<p>I want this text to be large, bold and blue.</p>
```

Copy to Clipboard

```css
p {
  font-weight: bold;
  colour: blue; /* incorrect spelling of the color property */
  font-size: 200%;
}
```

Copy to Clipboard

<iframe class="sample-code-frame" title="当浏览器遇到无法解析的 CSS 代码会发生什么" id="frame_skipping_example" width="100%" height="200" src="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works/_sample_.skipping_example.html" loading="lazy" style="box-sizing: content-box; border: 1px solid var(--border-primary); max-width: 100%; width: calc((100% - 2rem) - 2px); background: rgb(255, 255, 255); border-radius: var(--elem-radius); padding: 1rem;"></iframe>

这样做好处多多，代表着你使用最新的 CSS 优化的过程中浏览器遇到无法解析的规则也不会报错。当你为一个元素指定多个 CSS 样式的时候，浏览器会加载样式表中的最后的 CSS 代码进行渲染（样式表，优先级等请读者自行了解），也正因为如此，你可以为同一个元素指定多个 CSS 样式来解决有些浏览器不兼容新特性的问题（比如指定两个`width`）。

这一特点在你想使用一个很新的 CSS 特性但是不是所有浏览器都支持的时候（浏览器兼容）非常有用，举例来说，一些老的浏览器不接收`calc()`(calculate 的缩写，CSS3 新增，为元素指定动态宽度、长度等，注意此处的动态是计算之后得一个值) 作为一个值。我可能使用它结合像素为一个元素设置了动态宽度（如下），老式的浏览器由于无法解析忽略这一行；新式的浏览器则会把这一行解析成像素值，并且覆盖第一行指定的宽度。

```
.box {
  width: 500px;
  width: calc(100% - 50px);
}
```
