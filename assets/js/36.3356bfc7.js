(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{351:function(s,a,t){"use strict";t.r(a);var r=t(25),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sqladvisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqladvisor"}},[s._v("#")]),s._v(" SQLAdvisor")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#sqladvisor部署文档"}},[s._v("SQLAdvisor部署文档")])])])]),a("p"),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("插件部署提供参考")])]),s._v(" "),a("h3",{attrs:{id:"sqladvisor部署文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqladvisor部署文档"}},[s._v("#")]),s._v(" SQLAdvisor部署文档")]),s._v(" "),a("blockquote",[a("p",[s._v("opendevops平台所用插件SQLAdvisor部署文档， 部分文档会因为版本迭代不可用，此文档只作为参考文档，谢谢。")])]),s._v(" "),a("p",[a("strong",[s._v("简介")])]),s._v(" "),a("blockquote",[a("p",[s._v("SQLAdvisor是一个分析SQL给出索引优化建议的工具。它基于MySQL原生态词法解析，结合分析SQL中的where条件、聚合条件、多表Join关系 给出索引优化建议。  主要功能：输出SQL索引优化建议,"),a("a",{attrs:{href:"https://github.com/Meituan-Dianping/SQLAdvisor/blob/master/doc/THEORY_PRACTICES.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多介绍"),a("OutboundLink")],1)])]),s._v(" "),a("p",[a("strong",[s._v("安装使用")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编译依赖项sqlparser")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/Meituan-Dianping/SQLAdvisor.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" SQLAdvisor\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".cmake "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DBUILD_CONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DCMAKE_BUILD_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("debug "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DCMAKE_INSTALL_PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/sqlparser ./\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".make "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装SQLAdvisor源码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" SQLAdvisor/sqladvisor/\ncmake "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DCMAKE_BUILD_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("debug ./\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" sqladvisor  /usr/bin/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用帮助")]),s._v("\nsqladvisor  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#举个栗子")]),s._v("\nsqladvisor  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.24 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select permission_id from base_server_user_group_permission_relation;"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" work_permission_0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("编译完成后可删除整个sqladvisor目录，仅保留可执行文件sqladvisor。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);