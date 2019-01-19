require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([20],{17:function(t,e,i){"use strict";var s=n(i(2)),a=n(i(18));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},18:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(20),a=i.n(s),n=i(21),o=!1;var r=function(t){o||i(19)},c=i(0)(a.a,n.a,r,null,null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\index\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},19:function(t,e){},20:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=i(1),n=(s=a)&&s.__esModule?s:{default:s};e.default={data:function(){return{static:"",swipeList:["../../static/index/banner.jpg","../../static/index/banner.jpg"],indicatorDots:!0,indicatorcolor:"white",indicatoractivecolor:"#FEC200",autoplay:!0,interval:5e3,duration:1e3,circular:!0,newlist:[],recomlist:[],classlist:[],provinceName:"",countyAreaName:"",cityName:""}},onLoad:function(){this.static=n.default.static,this.req_class(),this.req_new(),this.req_recom()},methods:{bindRegionChange:function(t){this.provinceName=t.target.value[0],this.countyAreaName=t.target.value[1],this.cityName=t.target.value[2]},go_home_serch:function(){wx.navigateTo({url:"../home/serch"})},go_home_server:function(t,e){console.log(t),wx.navigateTo({url:"../home/server?_id="+t+"&title="+e})},go_home_serverinf:function(t,e){wx.navigateTo({url:"../home/serverinf?_id="+t+"&title="+e})},go_home_reform:function(){wx.navigateTo({url:"../home/reform"})},go_home_reform1:function(){wx.navigateTo({url:"../home/reform1"})},call:function(){n.default.call()},req_class:function(){var t=this;n.default.request({data:{parentid:0},url:"service/class"}).then(function(e){t.classlist=e})},req_new:function(){var t=this;n.default.request({data:{parentid:0},url:"service/newlist"}).then(function(e){t.newlist=e})},req_recom:function(){var t=this;n.default.request({data:{parentid:0},url:"service/recommendlist"}).then(function(e){t.recomlist=e})},opensetting:function(){this.wxgetlocation()},wxgetlocation:function(){wx.authorize({scope:"scope.userLocation",success:function(){wx.getLocation({type:"wgs84",success:function(t){console.log(t);t.latitude,t.longitude,t.speed,t.accuracy}})},fail:function(){n.default.totast("获取地址失败")}})}}}},21:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("div",{staticClass:"header"},[i("div",{staticClass:"adress"},[t.disabled?t._e():i("picker",{staticClass:"regionpicker",attrs:{mode:"region",value:"请选择所在城市","custom-item":t.customItem,eventid:"xGd-0"},on:{change:t.bindRegionChange}},[i("view",{staticClass:"picker"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.provinceName||"")+"，"+t._s(t.countyAreaName||"")+"，"+t._s(t.cityName||"")+"\n\t\t\t\t\t\t\t")])]),i("image",{attrs:{src:"../../static/index/whiteadress.jpg"}}),i("span",[t._v(t._s(t.cityName||"朝阳"))])],1),i("div",{staticClass:"serch",attrs:{eventid:"7S6-1"},on:{click:t.go_home_serch}},[i("span",[t._v("请输入所需材料")]),i("image",{attrs:{src:"../../static/index/serch.png"}})]),i("div",{staticClass:"tel"},[i("image",{attrs:{src:"../../static/index/whitetel.jpg",eventid:"E6p-2"},on:{click:t.call}})])]),i("swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,"indicator-active-color":t.indicatoractivecolor,"indicator-color":t.indicatorcolor}},t._l(t.swipeList,function(t,e){return i("swiper-item",{key:t,attrs:{mpcomid:"aIQ-0-"+e}},[i("image",{attrs:{src:t}})])})),i("div",{staticClass:"server"},t._l(t.classlist,function(e,s){return i("div",{key:s,attrs:{eventid:"azX-3-"+s},on:{click:function(i){t.go_home_server(e.id,e.name)}}},[i("image",{staticClass:"noimage",attrs:{src:t.static+e.picture,mode:"widthFix"}}),i("view",[t._v(t._s(e.name))])])})),i("div",{staticClass:"buju"},[i("button",{attrs:{eventid:"Nvd-4"},on:{click:t.go_home_reform}}),i("button",{attrs:{eventid:"vML-5"},on:{click:t.go_home_reform1}}),i("image",{attrs:{src:"../../static/index/buju.jpg",mode:"widthFix"}})],1),t.recomlist.length?i("div",{staticClass:"title1 bg0"},[t._v("推荐服务")]):t._e(),i("div",{staticClass:"fuwu leftright"},t._l(t.recomlist,function(e,s){return i("div",{key:s,attrs:{eventid:"5P3-6-"+s},on:{click:function(i){t.go_home_serverinf(e.classId,e.name)}}},[i("image",{staticClass:"noimage",attrs:{src:t.static+e.picture}}),i("p",[t._v(t._s(e.name)+"："),i("span",[t._v(t._s(e.price))]),t._v("起/每次")])],1)})),t.newlist.length?i("div",{staticClass:"title1 bg1"},[t._v("最新优惠")]):t._e(),i("div",{staticClass:"fuwu leftright"},t._l(t.newlist,function(e,s){return i("div",{key:s,attrs:{eventid:"YoQ-7-"+s},on:{click:function(i){t.go_home_serverinf(e.classId,e.name)}}},[i("image",{staticClass:"noimage",attrs:{src:t.static+e.picture}}),i("p",[t._v(t._s(e.name)+"："),i("span",[t._v(t._s(e.price))]),t._v("起/每次")])],1)}))],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a}},[17]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map