(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{377:function(t,e,r){"use strict";r.r(e);var a=r(25),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("blockquote",[r("p",[t._v("“任何一个傻瓜都能写出计算机可以理解的代码，唯有写出人类容易理解的代码，才是优秀的程序员。”")])]),t._v(" "),r("p",[t._v("几乎每个项目，每家公司都会定义自己的编码规范。但在真正实施时，却在有意或无意地违背编码规范。程序员不喜欢改变自己的编程习惯。加之管理者对质量控制不足，导致编码规范往往形同虚设。有些人会认为：遵守编码规范不能给项目带来利益，也不能让客户看到我们为此付出的努力，其完全是团队自发的行为，没有必要做硬性的要求。还有些人有更好的理由：编码规范会破坏创造性和程序质量。"),r("br"),t._v("\n我认为，编码规范，在软件构件以及项目管理中，甚至是个人成长方面，都发挥着重要的作用，好的编码规范是提高我们代码质量的最有效的工具之一。")]),t._v(" "),r("h2",{attrs:{id:"编码规范的重要作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编码规范的重要作用"}},[t._v("#")]),t._v(" 编码规范的重要作用")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("一、规范的代码可以促进团队合作 一个项目大多都是由一个团队来完成，如果没有统一的代码规范，那么每个人的代码必定会风格迥异。且不说会存在多个人同时开发同一模块的情况，即使是分工十分明晰的，等到要整合代码的时候也有够头疼的了。大多数情况下，并非程序中有复杂的算法或是复杂的逻辑，而是去读别人的代码实在是一件痛苦的事情。统一的风格使得代码可读性大大提高了，人们看到任何一段代码都会觉得异常熟悉。显然的，规范的代码在团队的合作开发中是非常有益而且必要的。")])]),t._v(" "),r("li",[r("p",[t._v("二、规范的代码可以减少bug处理 很多IT人士将程序员比做民工，这也的确非常的形象。就像刚才提到的，复杂的算法或逻辑只占项目中很小的比例，大多仅仅是垒代码的工作。可是越是简单，测试的bug反而是越多，而且是无穷无尽的bug。这里很大的程度上是由于代码不规范所致。 没有规范的对输入输出参数的规范，没有规范的异常处理，没有规范的日志处理等等，不但导致了我们总是出现类似空指针这样低级的bug而且还很难找到引起bug的原因。相反，在规范的开发中，bug不但可以有效减少，查找bug也变得轻而易举。 规范不是对开发的制约，而确实是有助于提高开发效率的。")])]),t._v(" "),r("li",[r("p",[t._v("三、规范的代码可以降低维护成本 随着我们项目经验的累积，会越来越重视后期维护的成本。而开发过程中的代码质量直接影响着维护的成本。因此，我们不得不从开发时便小心翼翼。 在第一点中曾提到，规范的代码大大提高了程序的可读性，几乎所有的程序员都曾做过维护的工作，不用多说，可读性高的代码维护成本必然会大大降低。 但是，维护工作不仅仅是读懂原有代码，而是需要在原有代码基础上作出修改。我们可以先想像没有统一风格的情况下，A完成开发以后，B进行维护加一段代码，过一段时间C又加一段代码。。。。。。直到有一天X看到那一大堆乱码想死的心都有了，维护也就进行不下去了。因此，统一的风格有利于长期的维护。另外，好的代码规范会对方法的度量、类的度量以及程序耦合性作出约束。这样不会出现需要修改一个上千行的方法或者去扩展一个没有接口的类的情况。规范的代码对程序的扩展性提高，无疑也是对维护人员的一个奖励。")])]),t._v(" "),r("li",[r("p",[t._v("四、规范的代码有助于代码审查 我个人是比较赞同进行代码审查的，这样可以及时纠正一些错误，而且可以对开发人员的代码规范作出监督。团队的代码审查同时也是一个很好的学习机会，对成员的进步也是很有益的。但是，开发随意，加重的代码审查的工作量及难度，并且使得代码审查工作没有根据，浪费了大量的时间却收效甚微。代码规范不仅使得开发统一，减少审查拿督，而且让代码审查有据可查，大大提高了审查效率和效果，同时代码审查也有助于代码规范的实施。一举多得，何乐而不为呢。")])]),t._v(" "),r("li",[r("p",[t._v("五、养成代码规范的习惯，有助于程序员自身的成长 即使明白代码规范的好处，但是有的迫于项目压力，有的因为繁琐的规范作出很多额外的工作，更有的不重视维护的问题，而很难贯彻代码规范。那么，我们需要了解，规范开发最大的受益人其实是自己！你有没有花费很多的时候查找自己的代码呢？尤其是出现bug的时候需要逐行的debug？自己写的代码乱了头绪的确实也见了不少。我们应该做的就是规范开发，减少自己出现的错误。很多时候项目的压力一部分也是由于前期开发中遗留的众多的问题。还有的人觉得自己可以完成高难度的算法，就认为自己能力很强，不把规范放在眼里。很多人确实是这样，追求个性，大概让别人看他的代码一头雾水更觉得得意。殊不知复杂的算法确实可以体现你个人的逻辑能力，但是绝不代表你的开发水平。我们知道一些开源项目，一些大师级人物写得程序都是极其规范的。并非规范了就代表高水平，实际上是规范的代码更有利于帮助你理解开发语言理解模式理解架构，能够帮助你快速提升开发水平。不明白这点，即使你写的再高明的算法，没准哪天也被当作乱码别处理掉。记住！每天垒乱码（或许你不觉得，但是大多时候在别人眼中确实就是乱码）并不能使你获得更多的进步，相反要达到高水平的程序员，养成良好的开发习惯是绝对必需的。不要沉迷表面的得失，看似无用的东西要经过慢慢的累积由量变达到质变的时候，你才能感受到其价值所在。")])]),t._v(" "),r("li",[r("p",[t._v("本文摘取自"),r("a",{attrs:{href:"https://www.cnblogs.com/xiaxianfei/p/5275022.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=n.exports}}]);