require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{172:function(e,t,n){"use strict";var a=u(n(1)),s=u(n(173));function u(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(s.default))},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(175),s=n.n(a),u=n(176),r=!1;var i=function(e){r||n(174)},o=n(0)(s.a,u.a,i,null,null);o.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\updatename.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] updatename.vue: functional components are not supported with templates, they should use render functions."),t.default=o.exports},174:function(e,t){},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(2),u=(a=s)&&a.__esModule?a:{default:a};t.default={data:function(){return{name:""}},onLoad:function(){},methods:{go_mine_adress:function(){wx.navigateTo({url:"../mine/adress"})},uploadimg:function(){var e=this;u.default.uploadimg({callback:function(t){wx.setStorageSync("headurl",t),e.headurl=t}})},req_updateName:function(){var e=this,t=new RegExp("[\\u4e00-\\u9fa5]",""),n=new RegExp("^[a-zA-Z]+$");this.name?!t.test(this.name.split("")[0])&&!n.test(this.name.split("")[0])||this.checkstr(this.name)<4||this.checkstr(this.name)>16?u.default.totast("昵称不符合规则"):u.default.request({data:{name:this.name},url:"user/updateName"}).then(function(t){var n=wx.getStorageSync("userinf");n.name=e.name,wx.setStorageSync("userinf",n),wx.navigateBack()}):u.default.totast("请输入昵称")},checkstr:function(e){var t=0,n=new RegExp("[\\u4e00-\\u9fa5]","");return(e=e.split("")).forEach(function(e){n.test(e)?t+=2:t+=1}),t}}}},176:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"updatecont"},[n("div",[e._v("昵称：")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",eventid:"tZO-0"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",[e._v("以中文或英文字母开头，限4到16个字符")]),n("div",{staticClass:"submit",attrs:{eventid:"xCN-1"},on:{click:e.req_updateName}},[e._v("确定")])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};t.a=s}},[172]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/updatename.js.map