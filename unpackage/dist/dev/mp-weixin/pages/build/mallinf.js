require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([29],{120:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"mallinf1"},[s("image",{staticClass:"mallimage",attrs:{src:t.static+t.mallinf.picture}})]),s("div",{staticClass:"mallinf2"},[s("div",{staticClass:"mallinf2price"},[s("span",[t._v("￥"+t._s(t.mallinf.price))]),s("image",{attrs:{src:"../../static/close.png"}})]),s("div",[t._v(t._s(t.clientGoods.name))]),s("div",{staticClass:"mallinf2s"},[s("span",[t._v("月销："+t._s(t.mallinf.sellStock)+"笔")]),s("span",[t._v("评价﹀")]),s("span",[t._v("北京通州")])])]),s("div",{staticClass:"bggray"}),s("div",{staticClass:"guige"},[s("h1",[t._v("规格")]),s("div",{staticClass:"guigetype"},t._l(t.guigetype,function(i,a){return s("span",{key:a,class:{active:t.type==a},attrs:{eventid:"AXU-0-"+a},on:{click:function(i){t.cg_type(a)}}},[t._v(t._s(i.name))])})),s("div",{staticClass:"add"},[s("div",{staticClass:"addedit"},[s("image",{attrs:{src:"../../static/build/minus.png",eventid:"q25-1"},on:{click:function(i){i.stopPropagation(),t.minus(t.index)}}}),s("span",[t._v(t._s(t.mallinf.num))]),s("image",{attrs:{src:"../../static/build/add.png",eventid:"hGA-2"},on:{click:function(i){i.stopPropagation(),t.add(t.index)}}})]),s("span",[t._v("数量")])])],1),s("div",{staticClass:"bggray"}),t.detailinf?s("div",{staticClass:"detail"},[s("wxParse",{attrs:{content:t.detailinf,mpcomid:"PeA-0"}})],1):t._e(),s("div",{staticClass:"footer"},[s("div",{staticClass:"edit"},[s("span",{attrs:{eventid:"W08-3"},on:{click:t.req_cartadd}},[t._v("加入购物车")]),s("span",{attrs:{eventid:"CJN-4"},on:{click:t.go_build_pay}},[t._v("购买")])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.num,expression:"num"}],staticClass:"num"},[t._v(t._s(t.num))]),s("image",{staticClass:"logo",attrs:{src:"../../static/logo.jpg",eventid:"8FN-5"},on:{click:t.cg_pop}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.num,expression:"num"}],staticClass:"money"},[t._v("￥"+t._s(t.mallprice))])]),t.pop?s("div",{staticClass:"pop",attrs:{eventid:"Ozs-10"},on:{click:t.cg_pop}},[s("div",{staticClass:"popcont"},[s("div",{staticClass:"delbar"},[s("image",{attrs:{src:"../../static/mine/del.png",eventid:"CYR-6"},on:{click:function(i){i.stopPropagation(),t.cleanbar(i)}}}),s("span",{attrs:{eventid:"yqF-7"},on:{click:function(i){i.stopPropagation(),t.cleanbar(i)}}},[t._v("清空购物车")])]),s("div",{staticClass:"barlist"},t._l(t.barlist,function(i,a){return s("div",{key:a,staticClass:"add"},[s("div",{staticClass:"addedit"},[s("image",{attrs:{src:"../../static/build/minus.png",eventid:"fG9-8-"+a},on:{click:function(i){i.stopPropagation(),t.minus(a)}}}),s("span",[t._v(t._s(i.num))]),s("image",{attrs:{src:"../../static/build/add.png",eventid:"hl5-9-"+a},on:{click:function(i){i.stopPropagation(),t.add(a)}}})]),s("span",{staticClass:"barname"},[t._v(t._s(i.name))]),s("span",{staticClass:"barmoney"},[t._v("￥"+t._s(i.price))])])}))])]):t._e()])};a._withStripped=!0;var e={render:a,staticRenderFns:[]};i.a=e},52:function(t,i,s){"use strict";var a=n(s(1)),e=n(s(53));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(e.default))},53:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s(55),e=s.n(a),n=s(120),l=!1;var o=function(t){l||s(54)},c=s(0)(e.a,n.a,o,"data-v-07f02cfd",null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\mallinf.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] mallinf.vue: functional components are not supported with templates, they should use render functions."),i.default=c.exports},54:function(t,i){},55:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=l(s(2)),e=l(s(8)),n=l(s(9));function l(t){return t&&t.__esModule?t:{default:t}}i.default={data:function(){return{static:"",type:0,malllist:[],guigetype:[],num:0,mallinf:{},mallprice:0,barlist:[],pop:!1,clientGoods:{},detailinf:""}},components:{wxParse:n.default},onLoad:function(t){this.static=a.default.static,this.req_detail(t._id)},methods:{onShareAppMessage:function(){return{title:"",success:function(t){console.log("转发成功",t)},fail:function(t){console.log("转发失败",t)}}},cg_type:function(t){this.type=t,this.mallinf=this.guigetype[t]},cg_pop:function(){(this.pop||this.num)&&(this.pop=!this.pop)},go_build_pay:function(){if(wx.getStorageSync("token")){var t=[];if(this.barlist.length)t=this.barlist;else{var i=this.mallinf;i.num=1,t.push(i)}wx.setStorageSync("buildinf",t),wx.navigateTo({url:"../build/pay?name="+this.clientGoods.name})}else wx.navigateTo({url:"../mine/register"})},minus:function(t){0!=this.num&&(this.num-=1,this.mallinf.num-=1,this.mallprice=(Number(this.mallprice)-Number(this.mallinf.price)).toFixed(2),this.barlist[t||0]=this.mallinf,0==this.mallinf.num&&(this.barlist.splice(t||0,1),this.pop=!1))},add:function(t){this.num+=1,this.mallinf.num+=1,this.mallprice=(Number(this.mallprice)+Number(this.mallinf.price)).toFixed(2),this.barlist[t||0]=this.mallinf},cleanbar:function(){this.num=0,this.mallinf.num=0,this.mallprice=0,this.barlist[0]=[],this.pop=!1},req_detail:function(t){var i=this;a.default.request({data:{goodsid:t},url:"goods/goodsdetail"}).then(function(t){i.clientGoods=t.clientGoods,i.detailinf=(0,e.default)(i.clientGoods.detail),t.clientGoodsSpecList[0]&&(t.clientGoodsSpecList.forEach(function(t){t.num=0}),i.mallinf=t.clientGoodsSpecList[0]),i.guigetype=t.clientGoodsSpecList})},filterdate:function(){for(var t=[],i=0;i<this.barlist.length;i++)t[i]={goodsId:this.barlist[i].goodsId,num:this.barlist[i].num,specId:this.barlist[i].id};return t},req_cartadd:function(){var t=this;if(wx.getStorageSync("token"))if(this.barlist.length){var i=this.filterdate();a.default.request({data:i,url:"cart/add",c:!0}).then(function(i){t.cleanbar(),a.default.totast("加入购物车成功")})}else a.default.totast("请先选择商品");else wx.navigateTo({url:"../mine/register"})}}}}},[52]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/build/mallinf.js.map