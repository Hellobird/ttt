require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{136:function(e,t,n){"use strict";var o=i(n(2)),s=i(n(137));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(s.default))},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(139),s=n.n(o),i=n(143),u=!1;var r=function(e){u||n(138)},a=n(0)(s.a,i.a,r,null,null);a.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\updatephone.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] updatephone.vue: functional components are not supported with templates, they should use render functions."),t.default=a.exports},138:function(e,t){},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(1)),s=i(n(10));function i(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{check:!1,codemsg:"获取验证码",userinf:{phone:"",code:""}}},components:{login:s.default},onLoad:function(){},methods:{go_mine_login:function(){wx.redirectTo({url:"../mine/login"})},cg_active:function(){console.log(1),this.check=!this.check},req_register:function(){o.default.checkmobile(this.userinf.phone)?this.userinf.code?o.default.request({data:this.userinf,url:"user/updatephone"}).then(function(e){o.default.totast("更换手机号成功"),setTimeout(function(){wx.navigateBack()},1e3)}):o.default.totast("请输入验证码"):o.default.totast("请输入正确的手机号")},req_sendCode:function(){var e=this;if("获取验证码"==this.codemsg||"重新获取"==this.codemsg)if(this.userinf.phone){var t=120,n=setInterval(function(){t--,e.codemsg=t+"s后重新获取",0==t&&(clearInterval(n),e.codemsg="重新获取")},1e3);o.default.request({data:{phone:this.userinf.phone},url:"user/sendCode"}).then(function(e){}).catch(function(t){clearInterval(n),e.codemsg="重新获取"})}else o.default.totast("请输入正确的手机号")}}}},143:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setinput"},[n("div",[n("span",[e._v("手机号")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userinf.phone,expression:"userinf.phone"}],attrs:{type:"text",placeholder:"请输入手机号",eventid:"iN9-0"},domProps:{value:e.userinf.phone},on:{input:function(t){t.target.composing||(e.userinf.phone=t.target.value)}}})]),n("div",[n("span",[e._v("验证码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userinf.code,expression:"userinf.code"}],attrs:{type:"text",placeholder:"请输入验证码",eventid:"j8l-1"},domProps:{value:e.userinf.code},on:{input:function(t){t.target.composing||(e.userinf.code=t.target.value)}}}),n("label",{staticClass:"getcode",attrs:{eventid:"mlF-2"},on:{click:e.req_sendCode}},[e._v(e._s(e.codemsg))])],1),n("p",{staticClass:"submit"},[n("view",{attrs:{eventid:"NFv-3"},on:{click:e.req_register}},[e._v("更换手机号")])])],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};t.a=s}},[136]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/updatephone.js.map