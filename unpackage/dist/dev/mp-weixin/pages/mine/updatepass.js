require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{169:function(e,t,s){"use strict";var n=o(s(2)),a=o(s(170));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(a.default))},170:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(172),a=s.n(n),o=s(173),d=!1;var u=function(e){d||s(171)},i=s(0)(a.a,o.a,u,null,null);i.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\updatepass.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] updatepass.vue: functional components are not supported with templates, they should use render functions."),t.default=i.exports},171:function(e,t){},172:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=s(1),o=(n=a)&&n.__esModule?n:{default:n};t.default={data:function(){return{opsd:"",npsd:"",nqpsd:""}},onLoad:function(){},methods:{go_mine_adress:function(){wx.navigateTo({url:"../mine/adress"})},uploadimg:function(){var e=this;o.default.uploadimg({callback:function(t){wx.setStorageSync("headurl",t),e.headurl=t}})},req_updatepassword:function(){this.opsd?this.npsd?this.nqpsd?this.npsd==this.nqpsd?o.default.request({data:{opsd:this.opsd,npsd:this.npsd,nqpsd:this.nqpsd},url:"user/updatepassword"}).then(function(e){o.default.totast("更换密码成功"),setTimeout(function(){wx.navigateBack()},1e3)}):o.default.totast("两次密码输入不一致"):o.default.totast("请输入确认密码"):o.default.totast("请输入新密码"):o.default.totast("请输入当前密码")},checkstr:function(e){var t=0,s=new RegExp("[\\u4e00-\\u9fa5]","");return(e=e.split("")).forEach(function(e){s.test(e)?t+=2:t+=1}),t}}}},173:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"updatecont"},[s("div",[e._v("当前密码：")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.opsd,expression:"opsd"}],attrs:{type:"password",eventid:"f6I-0"},domProps:{value:e.opsd},on:{input:function(t){t.target.composing||(e.opsd=t.target.value)}}})]),s("div",[e._v("新密码：")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.npsd,expression:"npsd"}],attrs:{type:"password",eventid:"mAN-1"},domProps:{value:e.npsd},on:{input:function(t){t.target.composing||(e.npsd=t.target.value)}}})]),s("div",[e._v("确认密码：")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.nqpsd,expression:"nqpsd"}],attrs:{type:"password",eventid:"Fp8-2"},domProps:{value:e.nqpsd},on:{input:function(t){t.target.composing||(e.nqpsd=t.target.value)}}})]),s("div",[e._v("长度8~32位须包含数字字母符号至少2种元素")]),s("div",{staticClass:"submit",attrs:{eventid:"OtM-3"},on:{click:e.req_updatepassword}},[e._v("确定")])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a}},[169]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/updatepass.js.map