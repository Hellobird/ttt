require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([19],{197:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(198));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},198:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(200),a=i.n(s),n=i(201),r=!1;var o=function(t){r||i(199)},l=i(0)(a.a,n.a,o,null,null);l.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\home\\serverinf.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] serverinf.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},199:function(t,e){},200:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(i(2)),a=r(i(8)),n=r(i(9));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{static:"",typeindex:0,typelist:[],serverinf:{},detailinf:""}},components:{wxParse:n.default},onLoad:function(t){this.static=s.default.static,this.req_detail(t._id)},methods:{back_index_build:function(){wx.reLaunch({url:"../index/build"})},cg_typeindex:function(t){this.typeindex=t,this.serverinf=this.typelist[t],this.detailinf=(0,a.default)(this.serverinf.detail)},go_home_pay:function(){wx.setStorageSync("serverinf",this.serverinf),wx.navigateTo({url:"../home/pay"})},req_detail:function(t){var e=this;s.default.request({data:{classid:t},url:"service/detail"}).then(function(t){t[0]?(e.serverinf=t[0],e.typelist=t,e.detailinf=(0,a.default)(t[0].detail)):s.default.totast("服务信息不存在")})}}}},201:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[i("swiper-item",{attrs:{mpcomid:"fOU-0"}},[i("image",{attrs:{src:t.static+t.serverinf.picture}})])],1),i("div",{staticClass:"servertype"},[i("div",{staticClass:"serverinf"},[t._m(0),i("div",[i("span",[t._v("质保期：")]),i("span",[t._v(t._s(t.serverinf.qualityGuaPeriod)+"天")])])]),i("div",{staticClass:"typelist"},t._l(t.typelist,function(e,s){return i("div",{key:s,class:{active:t.typeindex==s},attrs:{eventid:"ew8-0-"+s},on:{click:function(e){t.cg_typeindex(s)}}},[i("div",[i("p",[t._v(t._s(e.name))]),i("p",[t._v("￥"+t._s(e.price)+"/个")])],1)])}))]),i("div",{staticClass:"evaluate"},[t._m(1),i("div",{staticClass:"gobuild"},[i("span",{attrs:{eventid:"MS6-1"},on:{click:t.back_index_build}},[t._v("建材城")])]),i("div",{staticClass:"tip"},[t._v("以上标准价格为上门费，如需材料请点击建材城")])]),i("div",{staticClass:"bggray"}),t.serverinf.detail?i("div",{staticClass:"detail"},[i("wxParse",{attrs:{content:t.detailinf,mpcomid:"jmM-1"}})],1):t._e(),i("div",{staticStyle:{height:"100rpx"}}),i("div",{staticClass:"footer"},[i("div",[i("span",[t._v("预约费")]),i("span",[t._v("￥"+t._s(t.serverinf.bookPrice))])]),i("div",{attrs:{eventid:"iqV-2"},on:{click:t.go_home_pay}},[t._v("立即预约")])])],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("image",{attrs:{src:"../../static/home/share.png"}}),e("span",[this._v("分享")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"evanum"},[e("div",[this._v("评价（6）")]),e("div",[e("span",[this._v("查看全部")]),e("image",{attrs:{src:"../../static/right.jpg"}})])])}]};e.a=a}},[197]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/serverinf.js.map