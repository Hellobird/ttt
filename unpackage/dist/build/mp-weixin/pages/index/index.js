(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"04a8":function(t,e,n){},"14ef":function(t,e,n){"use strict";n.r(e);var a=n("442e"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"194e":function(t,e,n){"use strict";n("33f4");var a=r(n("b0ce")),i=r(n("a7d4"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"1c59":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("SearchBox",{attrs:{type:"1",text:"请输入所需服务",mpcomid:"c0aae85a-0"}}),n("Banner",{attrs:{swipeList:t.swipeList,type:"1",mpcomid:"c0aae85a-1"}}),n("ServerType",{attrs:{list:t.classlist,type:"1",mpcomid:"c0aae85a-2"}}),n("div",{staticClass:"buju"},[n("button",{attrs:{eventid:"c0aae85a-0"},on:{click:t.go_home_reform}}),n("button",{attrs:{eventid:"c0aae85a-1"},on:{click:t.go_home_reform1}}),n("image",{attrs:{src:"../../static/index/buju.jpg",mode:"widthFix"}})],1),t.recomlist.length?n("div",{staticClass:"title1 bg0"},[t._v("推荐服务")]):t._e(),n("Servers",{attrs:{list:t.recomlist,mpcomid:"c0aae85a-3"}}),t.newlist.length?n("div",{staticClass:"title1 bg1"},[t._v("最新优惠")]):t._e(),n("Servers",{attrs:{list:t.newlist,mpcomid:"c0aae85a-4"}})],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},2923:function(t,e,n){"use strict";n.r(e);var a=n("890e"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},4221:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fuwu leftright"},t._l(t.list,function(e,a){return n("div",{key:a,attrs:{eventid:"d2191e64-0-"+a},on:{click:function(n){t.go_home_serverinf(e.classId,e.name)}}},[n("image",{staticClass:"noimage",attrs:{src:t.static+e.picture}}),n("p",[t._v(t._s(e.name)+"："),n("span",[t._v(t._s(e.price))]),t._v("起/每次")])],1)}))},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"442e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("701a"));function i(t){return t&&t.__esModule?t:{default:t}}var r={props:["list"],data:function(){return{static:a.default.static}},methods:{go_home_serverinf:function(t,e){a.default.goto("../home/serverinf?_id=".concat(t,"&title=").concat(e))}}};e.default=r},7219:function(t,e,n){"use strict";var a=n("04a8"),i=n.n(a);i.a},"890e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("701a")),i=c(n("6b5c")),r=c(n("9aed")),s=c(n("6e60")),o=c(n("dd22"));function c(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{static:"",swipeList:wx.getStorageSync("banderindex")||[],newlist:[],recomlist:[],classlist:[],provinceName:"",countyAreaName:"",cityName:"通州"}},components:{Banner:i.default,SearchBox:r.default,ServerType:s.default,Servers:o.default},onLoad:function(){this.static=a.default.static},onShow:function(){var t=a.default.checkPageTime("index_index_time");this.newlist.length&&!t||this.req_new(),this.recomlist.length&&!t||this.req_recom(),this.classlist.length&&!t||this.req_class(),this.swipeList.length&&!t||this.req_banner()},onShareAppMessage:function(){return{title:"",success:function(t){console.log("转发成功",t)},fail:function(t){console.log("转发失败",t)}}},methods:{go_home_reform:function(){wx.navigateTo({url:"../home/reform"})},go_home_reform1:function(){wx.navigateTo({url:"../home/reform1"})},req_class:function(){var t=this;a.default.request({data:{parentid:0},url:"service/class"}).then(function(e){t.classlist=e})},req_new:function(){var t=this;a.default.request({data:{parentid:0},url:"service/newlist"}).then(function(e){t.newlist=e})},req_recom:function(){var t=this;a.default.request({data:{parentid:0},url:"service/recommendlist"}).then(function(e){t.recomlist=e})},req_banner:function(){var t=this;a.default.request({allurl:a.default.uploadimgurl+"common/banner",data:{type:1},method:"GET"}).then(function(e){t.swipeList=e,wx.setStorageSync("banderindex",t.swipeList)})},opensetting:function(){this.wxgetlocation()},wxgetlocation:function(){wx.authorize({scope:"scope.userLocation",success:function(){wx.getLocation({type:"wgs84",success:function(t){console.log(t);t.latitude,t.longitude,t.speed,t.accuracy}})},fail:function(){a.default.totast("获取地址失败")}})}}};e.default=u},"991a":function(t,e,n){"use strict";var a=n("d11a"),i=n.n(a);i.a},a7d4:function(t,e,n){"use strict";n.r(e);var a=n("1c59"),i=n("2923");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("991a");var s=n("2877"),o=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);o.options.__file="index.vue",e["default"]=o.exports},d11a:function(t,e,n){},dd22:function(t,e,n){"use strict";n.r(e);var a=n("4221"),i=n("14ef");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("7219");var s=n("2877"),o=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"bae001a4",null);o.options.__file="servers.vue",e["default"]=o.exports}},[["194e","common/runtime","common/vendor"]]]);