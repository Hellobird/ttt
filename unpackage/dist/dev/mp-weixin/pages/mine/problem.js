require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{182:function(e,t,n){"use strict";var r=s(n(1)),o=s(n(183));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(o.default))},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(185),o=n.n(r),s=n(186),u=!1;var i=function(e){u||n(184)},l=n(0)(o.a,s.a,i,null,null);l.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\problem.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] problem.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},184:function(e,t){},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),s=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{list:[]}},onShow:function(){this.req_problem()},methods:{req_problem:function(){var e=this;s.default.request({url:"common/problem"}).then(function(t){e.list=t})}}}},186:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",e._l(e.list,function(t,r){return n("div",{key:t,staticClass:"columlist"},[n("span",[e._v(e._s(t.title))]),e._m(0,!0)])}))};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("image",{attrs:{src:"../../static/right.jpg"}})])}]};t.a=o}},[182]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/problem.js.map