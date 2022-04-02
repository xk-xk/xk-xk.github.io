(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{368:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"airbnb-css-sass-指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airbnb-css-sass-指南"}},[t._v("#")]),t._v(" Airbnb CSS / Sass 指南")]),t._v(" "),a("p",[a("em",[t._v("用更合理的方式写 CSS 和 Sass")])]),t._v(" "),a("p",[t._v("翻译自 "),a("a",{attrs:{href:"https://github.com/airbnb/css",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbnb CSS / Sass Styleguide"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#terminology"}},[t._v("术语")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- [规则声明](#rule-declaration)\n- [选择器](#selectors)\n- [属性](#properties)\n")])])]),a("ol",[a("li",[a("a",{attrs:{href:"#css"}},[t._v("CSS")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- [格式](#formatting)\n- [注释](#comments)\n- [OOCSS 和 BEM](#oocss-and-bem)\n- [ID 选择器](#id-selectors)\n- [JavaScript 钩子](#javascript-hooks)\n- [边框](#border)\n")])])]),a("ol",[a("li",[a("a",{attrs:{href:"#sass"}},[t._v("Sass")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- [语法](#syntax)\n- [排序](#ordering-of-property-declarations)\n- [变量](#variables)\n- [Mixins](#mixins)\n- [扩展指令](#extend-directive)\n- [嵌套选择器](#nested-selectors)\n")])])]),a("p",[a("a",{attrs:{name:"terminology"}})]),t._v(" "),a("h2",{attrs:{id:"术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[t._v("#")]),t._v(" 术语")]),t._v(" "),a("p",[a("a",{attrs:{name:"rule-declaration"}})]),t._v(" "),a("h3",{attrs:{id:"规则声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则声明"}},[t._v("#")]),t._v(" 规则声明")]),t._v(" "),a("p",[t._v("我们把一个（或一组）选择器和一组属性称之为 “规则声明”。举个例子：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".listing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 18px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"selectors"}})]),t._v(" "),a("h3",{attrs:{id:"选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),a("p",[t._v("在规则声明中，“选择器” 负责选取 DOM 树中的元素，这些元素将被定义的属性所修饰。选择器可以匹配 HTML 元素，也可以匹配一个元素的类名、ID, 或者元素拥有的属性。以下是选择器的例子：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-element-class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[aria-hidden]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"properties"}})]),t._v(" "),a("h3",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("p",[t._v("最后，属性决定了规则声明里被选择的元素将得到何种样式。属性以键值对形式存在，一个规则声明可以包含一或多个属性定义。以下是属性定义的例子：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* some selector */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f1f1f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"css"}})]),t._v(" "),a("h2",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("p",[a("a",{attrs:{name:"formatting"}})]),t._v(" "),a("h3",{attrs:{id:"格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),a("ul",[a("li",[t._v("使用 2 个空格作为缩进。")]),t._v(" "),a("li",[t._v("类名建议使用破折号代替驼峰法。如果你使用 BEM，也可以使用下划线（参见下面的 "),a("a",{attrs:{href:"#oocss-and-bem"}},[t._v("OOCSS 和 BEM")]),t._v("）。")]),t._v(" "),a("li",[t._v("不要使用 ID 选择器。")]),t._v(" "),a("li",[t._v("在一个规则声明中应用了多个选择器时，每个选择器独占一行。")]),t._v(" "),a("li",[t._v("在规则声明的左大括号 "),a("code",[t._v("{")]),t._v(" 前加上一个空格。")]),t._v(" "),a("li",[t._v("在属性的冒号 "),a("code",[t._v(":")]),t._v(" 后面加上一个空格，前面不加空格。")]),t._v(" "),a("li",[t._v("规则声明的右大括号 "),a("code",[t._v("}")]),t._v(" 独占一行。")]),t._v(" "),a("li",[t._v("规则声明之间用空行分隔开。")])]),t._v(" "),a("p",[a("strong",[t._v("Bad")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2px solid white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".no, .nope, .not_good")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    // ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#lol-no")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  // ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Good")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".avatar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".one,\n.selector,\n.per-line")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  // ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"comments"}})]),t._v(" "),a("h3",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),a("ul",[a("li",[t._v("建议使用行注释 (在 Sass 中是 "),a("code",[t._v("//")]),t._v(") 代替块注释。")]),t._v(" "),a("li",[t._v("建议注释独占一行。避免行末注释。")]),t._v(" "),a("li",[t._v("给没有自注释的代码写上详细说明，比如：\n"),a("ul",[a("li",[t._v("为什么用到了 z-index")]),t._v(" "),a("li",[t._v("兼容性处理或者针对特定浏览器的 hack")])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"oocss-and-bem"}})]),t._v(" "),a("h3",{attrs:{id:"oocss-和-bem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oocss-和-bem"}},[t._v("#")]),t._v(" OOCSS 和 BEM")]),t._v(" "),a("p",[t._v("出于以下原因，我们鼓励使用 OOCSS 和 BEM 的某种组合：")]),t._v(" "),a("ul",[a("li",[t._v("可以帮助我们理清 CSS 和 HTML 之间清晰且严谨的关系。")]),t._v(" "),a("li",[t._v("可以帮助我们创建出可重用、易装配的组件。")]),t._v(" "),a("li",[t._v("可以减少嵌套，降低特定性。")]),t._v(" "),a("li",[t._v("可以帮助我们创建出可扩展的样式表。")])]),t._v(" "),a("p",[a("strong",[t._v("OOCSS")]),t._v("，也就是 “Object Oriented CSS（面向对象的CSS）”，是一种写 CSS 的方法，其思想就是鼓励你把样式表看作“对象”的集合：创建可重用性、可重复性的代码段让你可以在整个网站中多次使用。")]),t._v(" "),a("p",[t._v("参考资料：")]),t._v(" "),a("ul",[a("li",[t._v("Nicole Sullivan 的 "),a("a",{attrs:{href:"https://github.com/stubbornella/oocss/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("OOCSS wiki"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Smashing Magazine 的 "),a("a",{attrs:{href:"http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to OOCSS"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("BEM")]),t._v("，也就是 “Block-Element-Modifier”，是一种用于 HTML 和 CSS 类名的_命名约定_。BEM 最初是由 Yandex 提出的，要知道他们拥有巨大的代码库和可伸缩性，BEM 就是为此而生的，并且可以作为一套遵循 OOCSS 的参考指导规范。")]),t._v(" "),a("ul",[a("li",[t._v("CSS Trick 的 "),a("a",{attrs:{href:"https://css-tricks.com/bem-101/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEM 101"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Harry Roberts 的 "),a("a",{attrs:{href:"http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/",target:"_blank",rel:"noopener noreferrer"}},[t._v("introduction to BEM"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("article")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listing-card listing-card--featured"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listing-card__title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Adorable 2BR in the sunny Mission"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listing-card__content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Vestibulum id ligula porta felis euismod semper."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".listing-card")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".listing-card--featured")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".listing-card__title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".listing-card__content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v(".listing-card")]),t._v(" 是一个块（block），表示高层次的组件。")]),t._v(" "),a("li",[a("code",[t._v(".listing-card__title")]),t._v(" 是一个元素（element），它属于 "),a("code",[t._v(".listing-card")]),t._v(" 的一部分，因此块是由元素组成的。")]),t._v(" "),a("li",[a("code",[t._v(".listing-card--featured")]),t._v(" 是一个修饰符（modifier），表示这个块与 "),a("code",[t._v(".listing-card")]),t._v(" 有着不同的状态或者变化。")])]),t._v(" "),a("p",[a("a",{attrs:{name:"id-selectors"}})]),t._v(" "),a("h3",{attrs:{id:"id-选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id-选择器"}},[t._v("#")]),t._v(" ID 选择器")]),t._v(" "),a("p",[t._v("在 CSS 中，虽然可以通过 ID 选择元素，但大家通常都会把这种方式列为反面教材。ID 选择器给你的规则声明带来了不必要的高"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer"}},[t._v("优先级"),a("OutboundLink")],1),t._v("，而且 ID 选择器是不可重用的。")]),t._v(" "),a("p",[t._v("想要了解关于这个主题的更多内容，参见 "),a("a",{attrs:{href:"http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Wizardry 的文章"),a("OutboundLink")],1),t._v("，文章中有关于如何处理优先级的内容。")]),t._v(" "),a("p",[a("a",{attrs:{name:"javascript-hooks"}})]),t._v(" "),a("h3",{attrs:{id:"javascript-钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-钩子"}},[t._v("#")]),t._v(" JavaScript 钩子")]),t._v(" "),a("p",[t._v("避免在 CSS 和 JavaScript 中绑定相同的类。否则开发者在重构时通常会出现以下情况：轻则浪费时间在对照查找每个要改变的类，重则因为害怕破坏功能而不敢作出更改。")]),t._v(" "),a("p",[t._v("我们推荐在创建用于特定 JavaScript 的类名时，添加 "),a("code",[t._v(".js-")]),t._v(" 前缀：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn btn-primary js-request-to-book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Request to Book"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"border"}})]),t._v(" "),a("h3",{attrs:{id:"边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框"}},[t._v("#")]),t._v(" 边框")]),t._v(" "),a("p",[t._v("在定义无边框样式时，使用 "),a("code",[t._v("0")]),t._v(" 代替 "),a("code",[t._v("none")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("Bad")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Good")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"sass"}})]),t._v(" "),a("h2",{attrs:{id:"sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass"}},[t._v("#")]),t._v(" Sass")]),t._v(" "),a("p",[a("a",{attrs:{name:"syntax"}})]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v(".scss")]),t._v(" 的语法，不使用 "),a("code",[t._v(".sass")]),t._v(" 原本的语法。")]),t._v(" "),a("li",[t._v("CSS 和 "),a("code",[t._v("@include")]),t._v(" 声明按照以下逻辑排序（参见下文）")])]),t._v(" "),a("p",[a("a",{attrs:{name:"ordering-of-property-declarations"}})]),t._v(" "),a("h3",{attrs:{id:"属性声明的排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性声明的排序"}},[t._v("#")]),t._v(" 属性声明的排序")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("属性声明")]),t._v(" "),a("p",[t._v("首先列出除去 "),a("code",[t._v("@include")]),t._v(" 和嵌套选择器之外的所有属性声明。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn-green ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("@include")]),t._v(" 声明")]),t._v(" "),a("p",[t._v("紧随后面的是 "),a("code",[t._v("@include")]),t._v("，这样可以使得整个选择器的可读性更高。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn-green ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("background 0.5s ease"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("嵌套选择器")]),t._v(" "),a("p",[t._v("_如果有必要_用到嵌套选择器，把它们放到最后，在规则声明和嵌套选择器之间要加上空白，相邻嵌套选择器之间也要加上空白。嵌套选择器中的内容也要遵循上述指引。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("background 0.5s ease"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"variables"}})]),t._v(" "),a("h3",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),a("p",[t._v("变量名应使用破折号（例如 "),a("code",[t._v("$my-variable")]),t._v("）代替 camelCased 和 snake_cased 风格。对于仅用在当前文件的变量，可以在变量名之前添加下划线前缀（例如 "),a("code",[t._v("$_my-variable")]),t._v("）。")]),t._v(" "),a("p",[a("a",{attrs:{name:"mixins"}})]),t._v(" "),a("h3",{attrs:{id:"mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixins"}},[t._v("#")]),t._v(" Mixins")]),t._v(" "),a("p",[t._v("为了让代码遵循 DRY 原则（Don't Repeat Yourself）、增强清晰性或抽象化复杂性，应该使用 mixin，这与那些命名良好的函数的作用是异曲同工的。虽然 mixin 可以不接收参数，但要注意，假如你不压缩负载（比如通过 gzip），这样会导致最终的样式包含不必要的代码重复。")]),t._v(" "),a("p",[a("a",{attrs:{name:"extend-directive"}})]),t._v(" "),a("h3",{attrs:{id:"扩展指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展指令"}},[t._v("#")]),t._v(" 扩展指令")]),t._v(" "),a("p",[t._v("应避免使用 "),a("code",[t._v("@extend")]),t._v(" 指令，因为它并不直观，而且具有潜在风险，特别是用在嵌套选择器的时候。即便是在顶层占位符选择器使用扩展，如果选择器的顺序最终会改变，也可能会导致问题。（比如，如果它们存在于其他文件，而加载顺序发生了变化）。其实，使用 @extend 所获得的大部分优化效果，gzip 压缩已经帮助你做到了，因此你只需要通过 mixin 让样式表更符合 DRY 原则就足够了。")]),t._v(" "),a("p",[a("a",{attrs:{name:"nested-selectors"}})]),t._v(" "),a("h3",{attrs:{id:"嵌套选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套选择器"}},[t._v("#")]),t._v(" 嵌套选择器")]),t._v(" "),a("p",[a("strong",[t._v("请不要让嵌套选择器的深度超过 3 层！")])]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".page-container ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".profile ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// STOP!")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当遇到以上情况的时候，你也许是这样写 CSS 的：")]),t._v(" "),a("ul",[a("li",[t._v("与 HTML 强耦合的（也是脆弱的）"),a("em",[t._v("—或者—")])]),t._v(" "),a("li",[t._v("过于具体（强大）"),a("em",[t._v("—或者—")])]),t._v(" "),a("li",[t._v("没有重用")])]),t._v(" "),a("p",[t._v("再说一遍: "),a("strong",[t._v("永远不要嵌套 ID 选择器！")])]),t._v(" "),a("p",[t._v("如果你始终坚持要使用 ID 选择器（劝你三思），那也不应该嵌套它们。如果你正打算这么做，你需要先重新检查你的标签，或者指明原因。如果你想要写出风格良好的 HTML 和 CSS，你是"),a("strong",[t._v("不")]),t._v("应该这样做的。")])])}),[],!1,null,null,null);s.default=e.exports}}]);