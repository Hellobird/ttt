(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/problem"],{"0482":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",t._l(t.list,function(e,u){return n("div",{key:e,staticClass:"columlist"},[n("span",[t._v(t._s(e.title))]),t._m(0,!0)])}))},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("image",{attrs:{src:"../../static/right.jpg"}})])}];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},"3ffd":function(t,e,n){"use strict";n.r(e);var u=n("6fd4"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a},"6fd4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("701a"));function r(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{list:[]}},onShow:function(){this.req_problem()},methods:{req_problem:function(){var t=this;u.default.request({url:"common/problem"}).then(function(e){t.list=e})}}};e.default=a},"9cb1":function(t,e,n){"use strict";n.r(e);var u=n("0482"),r=n("3ffd");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("b25e");var i=n("2877"),o=Object(i["a"])(r["default"],u["a"],u["b"],!1,null,null,null);o.options.__file="problem.vue",e["default"]=o.exports},aa99:function(t,e,n){"use strict";n("33f4");var u=a(n("b0ce")),r=a(n("9cb1"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,u.default)(r.default))},aba7:function(t,e,n){},b25e:function(t,e,n){"use strict";var u=n("aba7"),r=n.n(u);r.a}},[["aa99","common/runtime","common/vendor"]]]);