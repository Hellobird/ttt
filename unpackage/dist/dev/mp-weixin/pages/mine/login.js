require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{133:function(e,t,s){"use strict";var n=o(s(1)),a=o(s(134));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(a.default))},134:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(136),a=s.n(n),o=s(137),i=!1;var r=function(e){i||s(135)},u=s(0)(a.a,o.a,r,null,null);u.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\login.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},135:function(e,t){},136:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=s(2),o=(n=a)&&n.__esModule?n:{default:n};t.default={data:function(){return{username:"",password:""}},onLoad:function(){},methods:{go_mine_login:function(){wx.navigateTo({url:"../mine/login"})},cg_active:function(){console.log(1),this.check=!this.check},req_login:function(){var e=this;this.username?this.password?wx.login({success:function(t){o.default.request({data:{username:e.username,password:e.password,code:t.code},url:"user/login"}).then(function(e){wx.setStorageSync("token",e.token),wx.navigateBack()})}}):o.default.totast("请输入密码"):o.default.totast("请输入用户名")}}}},137:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"setinput"},[s("p",{staticClass:"logo"},[s("image",{attrs:{src:"../../static/logo.jpg"}})]),s("div",[s("image",{attrs:{src:"../../static/mine/user.jpg"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入用户名",eventid:"FiV-0"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",[s("image",{attrs:{src:"../../static/mine/pas.jpg"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码",eventid:"9aL-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("p",{staticClass:"submit",attrs:{eventid:"DYB-2"},on:{click:e.req_login}},[e._v("\t\t\t\t\n\t\t\t登陆\n\t\t")])],1),e._m(0)])};n._withStripped=!0;var a={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"qlogin"},[t("image",{attrs:{src:"../../static/mine/qlogin.jpg",mode:"widthFix"}}),t("div",[t("image",{attrs:{src:"../../static/mine/wx.jpg"}})])])}]};t.a=a}},[133]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/login.js.map