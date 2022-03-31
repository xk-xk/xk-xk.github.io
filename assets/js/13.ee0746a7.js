(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{386:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"商家端h5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#商家端h5"}},[t._v("#")]),t._v(" 商家端H5")]),t._v(" "),n("p",[t._v("此项目采用 "),n("a",{attrs:{href:"https://uniapp.dcloud.io/component/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp"),n("OutboundLink")],1),t._v(" 作为开发框架，开发过程中使用 "),n("code",[t._v("HbuilderX")]),t._v(" 编辑器编写代码，运行到本地浏览器进行调试。")]),t._v(" "),n("p",[t._v("仓库地址："),n("a",{attrs:{href:"http://192.168.25.117/front/ego-merchant-mobile",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.25.117/front/ego-merchant-mobile"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),n("ol",[n("li",[t._v("使用 "),n("code",[t._v("HbuilderX")]),t._v(" 导入项目：点击工具栏 "),n("strong",[t._v("文件")]),t._v(" => "),n("strong",[t._v("导入")]),t._v(" => "),n("strong",[t._v("从本地目录导入")])]),t._v(" "),n("li",[t._v("导入成功后点击工具栏  "),n("strong",[t._v("运行")]),t._v(" => "),n("strong",[t._v("运行到浏览器")]),t._v(" => "),n("strong",[t._v("Chrome")]),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"打包发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包发布"}},[t._v("#")]),t._v(" 打包发布")]),t._v(" "),n("ol",[n("li",[t._v("点击 "),n("code",[t._v("HbuilderX")]),t._v(" 工具栏 "),n("strong",[t._v("发行")]),t._v(" => "),n("strong",[t._v("网站-PC")])]),t._v(" "),n("li",[t._v("网站标题设为一个空格（具体为什么我也不记得了），其他都不用操作，点击 "),n("code",[t._v("发行")])]),t._v(" "),n("li",[t._v("待控制台编译完成后会生成打包文件 "),n("code",[t._v("/unpackage/dist/build/h5")])]),t._v(" "),n("li",[t._v("登录 "),n("code",[t._v("Xftp")]),t._v("，开发环境：192.168.25.141，测试环境：192.168.25.145")]),t._v(" "),n("li",[t._v("进入 "),n("code",[t._v("/opt/html")]),t._v(" 目录下，用第三步打包生成的 "),n("code",[t._v("h5")]),t._v(" 文件夹进行替换")])]),t._v(" "),n("h2",{attrs:{id:"技术要点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#技术要点"}},[t._v("#")]),t._v(" 技术要点")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("项目打包发布前要确认 "),n("code",[t._v("config/app-config.js")]),t._v(" 中配置正确：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扫描二维码跳转到买家端小程序的地址前缀，发布前根据环境进行调整")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开发： https://egodev.relaysogo.com/openMp?i=")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试： https://egotest.relaysogo.com/772051/openMp?i=")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生产： https://ego.relaysogo.com/${tenantId}/openMp?i=")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("redirectUrl")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tenantId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uni"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStorageSync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userInfo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tenant_id\n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'租户id配置'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tenantId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://egodev.relaysogo.com/openMp?i=")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开发")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return `https://egotest.relaysogo.com/${tenantId}/openMp?i=` // 测试")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return `https://ego.relaysogo.com/${tenantId}/openMp?i=` // 生产")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tredirectUrl\t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);