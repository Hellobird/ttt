require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],[,,,,,,,,,,function(t,e,i){"use strict";var s=r(i(1)),a=r(i(11));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(13),a=i.n(s),r=i(14),n=!1;var o=function(t){n||i(12)},c=i(0)(a.a,r.a,o,null,null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\index\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=i(2);(s=a)&&s.__esModule;e.default={data:function(){return{swipeList:["../../static/index/banner.jpg","../../static/index/banner.jpg"],indicatorDots:!0,indicatorcolor:"white",indicatoractivecolor:"#FEC200",autoplay:!0,interval:5e3,duration:1e3,circular:!0}},onLoad:function(){},methods:{go_home_server:function(){wx.navigateTo({url:"../home/server"})},go_home_serverinf:function(){wx.navigateTo({url:"../home/serverinf"})}}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[t._m(0),i("swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,"indicator-active-color":t.indicatoractivecolor,"indicator-color":t.indicatorcolor}},t._l(t.swipeList,function(t,e){return i("swiper-item",{key:t,attrs:{mpcomid:"nq4-0-"+e}},[i("image",{attrs:{src:t}})])})),i("div",{staticClass:"server"},t._l(8,function(e,s){return i("div",{key:e,attrs:{eventid:"LhO-0-"+s},on:{click:t.go_home_server}},[i("image",{attrs:{src:"../../static/index/servertype"+s+".jpg",mode:"widthFix"}})])})),i("div",{staticClass:"buju"},[i("button"),i("button"),i("image",{attrs:{src:"../../static/index/buju.jpg",mode:"widthFix"}})],1),i("div",{staticClass:"title1 bg0"},[t._v("推荐服务")]),i("div",{staticClass:"fuwu leftright"},[i("div",{attrs:{eventid:"IQG-1"},on:{click:t.go_home_serverinf}},[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("p",[t._v("电脑维修："),i("span",[t._v("50")]),t._v("起/每次")])],1),i("div",[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("p",[t._v("电脑维修："),i("span",[t._v("50")]),t._v("起/每次")])],1),i("div",[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("p",[t._v("电脑维修："),i("span",[t._v("50")]),t._v("起/每次")])],1),i("div",[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("p",[t._v("电脑维修："),i("span",[t._v("50")]),t._v("起/每次")])],1)]),i("div",{staticClass:"title1 bg1"},[t._v("最新优惠")]),i("div",{staticClass:"fuwu leftright"},[i("div",[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("p",[t._v("电脑维修："),i("span",[t._v("50")]),t._v("起/每次")])],1),i("div",[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("p",[t._v("电脑维修："),i("span",[t._v("50")]),t._v("起/每次")])],1),i("div",[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("p",[t._v("电脑维修："),i("span",[t._v("50")]),t._v("起/每次")])],1),i("div",[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("p",[t._v("电脑维修："),i("span",[t._v("50")]),t._v("起/每次")])],1)])],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"adress"},[e("image",{attrs:{src:"../../static/index/whiteadress.jpg"}}),e("span",[this._v("通州")])]),e("div",{staticClass:"serch"},[e("span",[this._v("请输入所需材料")]),e("image",{attrs:{src:"../../static/index/serch.png"}})]),e("div",{staticClass:"tel"},[e("image",{attrs:{src:"../../static/index/whitetel.jpg"}})])])}]};e.a=a}],[10]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map