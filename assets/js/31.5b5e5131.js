(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{345:function(t,a,s){"use strict";s.r(a);var _=s(25),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"权限文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限文档"}},[t._v("#")]),t._v(" 权限文档")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#关于user用户管理"}},[t._v("关于User用户管理")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("这部分主要讲解关于系统中权限相关的说明")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("注意：超级管理员用户不受权限限制，默认拥有所有权限")])]),t._v(" "),a("h3",{attrs:{id:"关于user用户管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于user用户管理"}},[t._v("#")]),t._v(" 关于User用户管理")]),t._v(" "),a("p",[a("strong",[t._v("关于超级管理员")])]),t._v(" "),a("p",[t._v("默认登陆用户"),a("code",[t._v("admin")]),t._v("已经是超级管理员权限了"),a("br"),t._v("\n若想要其余用户也赋权超级管理员进行以下操作(不建议多个超管)")]),t._v(" "),a("p",[t._v("在数据库"),a("code",[t._v("codo-admin")]),t._v("中"),a("code",[t._v("codo_a_users")]),t._v("表字段 superuser")]),t._v(" "),a("ul",[a("li",[t._v("0：代表超级管理员")]),t._v(" "),a("li",[t._v("10：代表普通用户")])]),t._v(" "),a("h2",{attrs:{id:"业务、用户、权限配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务、用户、权限配置"}},[t._v("#")]),t._v(" 业务、用户、权限配置")]),t._v(" "),a("p",[t._v("https://github.com/opendevops-cn/codo-admin/blob/main/docs/codo-admin.md")]),t._v(" "),a("p",[a("strong",[t._v("管理员如何创建一个带MFA的用户")])]),t._v(" "),a("p",[a("code",[t._v("注意： 平台设计的时候为了安全考虑创建/注册用户都是需要绑定MFA的，若你实在想要取消，需要自己去update数据库")])]),t._v(" "),a("ul",[a("li",[t._v("点击菜单栏"),a("code",[t._v("用户管理")]),t._v("-"),a("code",[t._v("用户列表")]),t._v("-"),a("code",[t._v("新建用户")]),t._v("， MFA使用参考"),a("a",{attrs:{href:"https://docs.opendevops.cn/zh/guide/more/faq/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FAQ"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"/create_user01.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/create_user02.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/create_user03.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/create_user04.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/create_user05.png",alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"关于mail邮箱注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于mail邮箱注册"}},[t._v("#")]),t._v(" 关于Mail邮箱注册")]),t._v(" "),a("blockquote",[a("p",[t._v("管理员一个个创建用户太过麻烦，我们支持邮箱注册，比如你是企业邮箱，你只需轻松2步，你就可以实现邮箱注册，让企业用户自己注册，管理员只管赋权就Ok，是不是很方便。")])]),t._v(" "),a("ul",[a("li",[t._v("首先用超级管理员账户在平台上填写邮箱相关信息")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/create_email01.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("然后在登陆界面直接用设置后的邮箱后缀为结尾的有效邮箱进行登陆，密码为邮箱登陆密码，确认相关信息，关于邮箱设置相关的也可参考FAQ")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/create_email02.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"关于ldap认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于ldap认证"}},[t._v("#")]),t._v(" 关于LDAP认证")]),t._v(" "),a("blockquote",[a("p",[t._v("既然支持了邮箱注册，那么肯定也要支持LDAP认证方式")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("LDAP地址： 你的LDAP地址")])]),t._v(" "),a("li",[a("p",[t._v("LDAP端口： 默认389 SSL端口：636")])]),t._v(" "),a("li",[a("p",[t._v("绑定DN： "),a("code",[t._v("cn=Manager,DC=opendevops,DC=cn")]),t._v("，这里是设置认证用户的信息, 系统会使用这个用户去校验ldap的信息是否正确")])]),t._v(" "),a("li",[a("p",[t._v("密码： 上面认证用户的密码")])]),t._v(" "),a("li",[a("p",[t._v("用户OU： "),a("code",[t._v("ou=opendevops,dc=opendevops,dc=cn")]),t._v("，这里是设置用来登录codo的组织单元, 比如我要用某个ou的用户来登录codo")])]),t._v(" "),a("li",[a("p",[t._v("用户过滤器: cn 这里是设置认证用户的信息, 系统会使用这个用户去校验ldap的信息是否正确 一般使用cn 或者 sAMAccountName")])]),t._v(" "),a("li",[a("p",[t._v('LADP属性映射： {"username": "cn", "email": "mail"}或者{"username": "cn", "email": "email"}')]),t._v(" "),a("ul",[a("li",[a("code",[t._v("系统用户名 usernmae 映射LDAP的cn。 系统用户邮箱映射LDAP的email或者mail属性，取存在的，强制关联，如果缺失报错， 这里的意思是, 把ldap用户的属性映射到系统上，如果都不存在的 认证无法通过，系统用户的email是必填项")])])])]),t._v(" "),a("li",[a("p",[t._v("启动LDAP认证：如果需要使用LDAP登录 codo, 则必选")])])]),t._v(" "),a("p",[a("code",[t._v("最后配置好以上内容后，请切记先保存再测试，测试通过登陆请使用ldap映射来的cn用户名+你LDAP密码来登陆")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/LDAP.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"关于menu菜单组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于menu菜单组件"}},[t._v("#")]),t._v(" 关于menu菜单组件")]),t._v(" "),a("blockquote",[a("p",[t._v("注意： 菜单组件都是我们内置好的，基于角色关联赋权的时候用到，详细请参考图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/menu_subassembly01.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/rear-end.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"关于role角色管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于role角色管理"}},[t._v("#")]),t._v(" 关于Role角色管理")]),t._v(" "),a("ul",[a("li",[t._v("基于RBAC角色管理，用来权限划分, 根据个人需求对创建的角色添加相对应的用户、菜单、组件和权限")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/role-permission01.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/role-permission02.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/role-permission03.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/role-permission04.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/role-permission05.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/role-permission06.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"关于cmdb资产管理授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于cmdb资产管理授权"}},[t._v("#")]),t._v(" 关于CMDB资产管理授权")]),t._v(" "),a("blockquote",[a("p",[t._v("资产管理是支持针对Tag标签对普通用户授权 展示不同的资产")])]),t._v(" "),a("ul",[a("li",[t._v("选择一个新建/已存在的标签，选择授权用户")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/asset_management01.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/asset_management0102.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("最后，普通用拥有哪些标签的权限，主机就只能看到哪些")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/asset_management03.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"关于tag标签树授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于tag标签树授权"}},[t._v("#")]),t._v(" 关于Tag标签树授权")]),t._v(" "),a("blockquote",[a("p",[t._v("标签树里面的标签： 可以理解为任务标签，做任务的时候要用到的，这里需要对用户授权 用户才可以对此标签进行提交任务，"),a("br"),t._v("\n举个例子：我要对xxx游戏的数据库执行SQL审核的操作，前提是我对这款游戏的数据库已经做好了Tag分类，我需要在这个Tag上授权上我的用户"),a("br"),t._v("\n这样子我就可以通过"),a("code",[t._v("自定义任务")]),t._v("---\x3e"),a("code",[t._v("选择目标标签")]),t._v("的时候就可以下拉看到你的标签，如果这时候你对xx标签没赋权，你是下拉看不到的。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/20190606134817.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("授权操作")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/task_tag01.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/task_tag02.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"关于task任务模板授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于task任务模板授权"}},[t._v("#")]),t._v(" 关于Task任务模板授权")]),t._v(" "),a("blockquote",[a("p",[t._v("我们的任务模板都是有权限之分的，当管理创建好了一个任务模板需要相关用户进行授权，否则其余用户是不能对模板操作/显示此模板的任务的")])]),t._v(" "),a("ul",[a("li",[t._v("模板授权很简单，选择你创建好的模板，授权相关用户即可")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/task_template.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"关于config配置中心授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于config配置中心授权"}},[t._v("#")]),t._v(" 关于Config配置中心授权")]),t._v(" "),a("blockquote",[a("p",[t._v("配置中心是支持多项目多环境的，那么如何针对一个用户对不同的项目/不同的环境进行授权呢？  这里我们授权设计的也很简单，点击项目/环境 即可授权")])]),t._v(" "),a("ul",[a("li",[t._v("对整个项目进行授权，可以管理此项目")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/configuration_center03.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("对单个环境授权(当项目下有多个环境，只想让指定用户查看指定的环境时候用)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/configuration_center04.png",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);