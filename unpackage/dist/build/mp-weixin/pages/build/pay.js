(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/build/pay"],{"06cb":function(e,t,i){"use strict";i("33f4");var s=a(i("b0ce")),r=a(i("5692"));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(r.default))},"15a4":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(i("701a"));function r(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{buildinf:{},vehiclelist:[],carrylist:[],name:"",date:"",time:"",y:"",m:"",d:"",adress:{},vehicleindex:0,carryindex:0,allprice:"",mallprice:"",sendprice:"",carryprice:"",remark:"",requireCarry:1,floor:"",static:""}},onLoad:function(e){var t=this;this.static=s.default.static,this.name=e.name,this.buildinf=wx.getStorageSync("buildinf"),this.buildinf.forEach(function(e){e.picture&&(e.picture=e.picture.split(",")[0])}),wx.setStorageSync("buildinf",""),this.req_vehiclelist(),this.req_carrylist(),this.req_getdefaddress(),this.buildinf.forEach(function(e){t.mallprice+=e.price,e.goodsSpecId=e.id,e.goodsNumber=e.num})},onShow:function(){wx.getStorageSync("adress")&&(this.adress=wx.getStorageSync("adress"),wx.setStorageSync("adress",""))},methods:{cg_requireCarry:function(e){this.requireCarry=e},getallprice:function(){this.allprice=(Number(this.mallprice)+Number(this.sendprice)+Number(this.carryprice)).toFixed(2)},cg_vehicleindex:function(e){this.vehicleindex=e,this.sendprice=this.vehiclelist[e].startPrice,this.getallprice()},cg_carryindex:function(e){this.carryindex=e,this.carryprice=this.carrylist[e].startPrice,this.getallprice()},go_mine_adress:function(){wx.navigateTo({url:"../mine/adress?src=pay"})},timeChange:function(e){this.time=e.detail.value},dateChange:function(e){this.date=e.detail.value;var t=this.date.split("-");this.y=t[0],this.m=t[1],this.d=t[2]},req_unifiedOrder:function(){this.adress?this.date?this.time?this.floor?s.default.request({data:{addressId:this.adress.id,carryTypeId:this.carrylist[this.carryindex].id,expressTypeId:this.vehiclelist[this.vehicleindex].id,expressTime:this.date+" "+this.time,floor:this.floor,orderGoods:this.buildinf,remark:this.remark,number:1,requireCarry:this.requireCarry},url:"goods/order/unifiedOrder",c:!0}).then(function(e){wx.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:"HMAC-SHA256",success:function(e){},fail:function(e){console.log(e)},complete:function(e){wx.redirectTo({url:"../order/buildingGoods?type=1"})}})}):s.default.totast("请选择楼层"):s.default.totast("请选择时间"):s.default.totast("请选择日期"):s.default.totast("请选择地址")},req_vehiclelist:function(){var e=this;s.default.request({url:"order/vehiclelist"}).then(function(t){e.vehiclelist=t,e.sendprice=e.vehiclelist[0].startPrice,e.getallprice()})},req_carrylist:function(){var e=this;s.default.request({url:"order/carrylist"}).then(function(t){e.carrylist=t,e.carryprice=e.carrylist[0].startPrice,e.getallprice()})},req_getdefaddress:function(){var e=this;s.default.request({url:"address/getdefaddress"}).then(function(t){e.adress=t})}}};t.default=a},"235d":function(e,t,i){},"2a88":function(e,t,i){"use strict";var s=i("235d"),r=i.n(s);r.a},"36b0":function(e,t,i){"use strict";i.r(t);var s=i("15a4"),r=i.n(s);for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);t["default"]=r.a},5692:function(e,t,i){"use strict";i.r(t);var s=i("831c"),r=i("36b0");for(var a in r)"default"!==a&&function(e){i.d(t,e,function(){return r[e]})}(a);i("2a88");var n=i("2877"),c=Object(n["a"])(r["default"],s["a"],s["b"],!1,null,null,null);c.options.__file="pay.vue",t["default"]=c.exports},"831c":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"adress"},[e.adress?i("div",{staticClass:"adressli",attrs:{eventid:"c5bf60f6-1"},on:{click:e.go_mine_adress}},[i("div",[e._v("姓      名："+e._s(e.adress.name))]),i("div",[e._v("联系方式："+e._s(e.adress.phone))]),i("div",{staticClass:"adressinf"},[i("div",[i("div"),i("span",[e._v("收货地址："+e._s(e.adress.provinceName+e.adress.countyAreaName+e.adress.cityName+e.adress.address))])]),i("image",{attrs:{src:"../../static/right.jpg"}})])]):i("div",{staticClass:"adressli center",attrs:{eventid:"c5bf60f6-0"},on:{click:e.go_mine_adress}},[e._v("请选择地址")])]),e._l(e.buildinf,function(t,s){return i("div",{key:t,staticClass:"payinf inff"},[i("div",[i("image",{attrs:{src:e.static+t.picture}}),i("div",[i("p",[i("view",[e._v(e._s(e.name))]),i("view",[i("span",[e._v("规格")]),i("span",[e._v(e._s(t.name))])]),i("view",[i("span",[e._v("数量")]),i("span",[e._v("x"+e._s(t.num))])])])],1)])])}),i("div",{staticClass:"payinf time"},[i("h1",[e._v("配送时间选择")]),i("p",[i("view",[e.disabled?e._e():i("picker",{staticClass:"regionpicker",attrs:{mode:"date",value:"日期","custom-item":e.customItem,eventid:"c5bf60f6-2"},on:{change:e.dateChange}},[i("view",{staticClass:"picker"},[e._v("日期")])]),e.date?i("view",[i("span",[e._v(e._s(e.y))]),i("span",[e._v("年")]),i("span",[e._v(e._s(e.m))]),i("span",[e._v("月")]),i("span",[e._v(e._s(e.d))]),i("span",[e._v("日")])]):i("span",[e._v("请选择日期")])],1),i("view",[e.disabled?e._e():i("picker",{staticClass:"regionpicker",attrs:{mode:"time",value:"时间","custom-item":e.customItem,eventid:"c5bf60f6-3"},on:{change:e.timeChange}},[i("view",{staticClass:"picker"},[e._v("时间")])]),i("span",[e._v("\n\t\t\t\t\t"+e._s(e.time||"请选择时间")+"\n\t\t\t\t")])],1)])],1),i("div",{staticClass:"payinf sendtype"},[i("h1",[e._v("配送方式")]),e._l(e.vehiclelist,function(t,s){return i("p",{key:s,attrs:{eventid:"c5bf60f6-4-"+s},on:{click:function(t){e.cg_vehicleindex(s)}}},[i("span",{class:{active:s==e.vehicleindex}},[e._v(e._s(t.name))]),i("span",[e._v("起步价￥"+e._s(t.startPrice))])])})],2),i("div",{staticClass:"payinf sendtype sendtype1"},[i("h1",[e._v("是否搬运上楼")]),i("p",{staticClass:"carry"},[1==e.requireCarry?i("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):i("image",{attrs:{src:"../../static/mine/check.jpg",eventid:"c5bf60f6-5"},on:{click:function(t){e.cg_requireCarry(1)}}}),i("span",[e._v("是")]),2==e.requireCarry?i("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):i("image",{attrs:{src:"../../static/mine/check.jpg",eventid:"c5bf60f6-6"},on:{click:function(t){e.cg_requireCarry(2)}}}),i("span",[e._v("否")])]),i("p",{staticClass:"floor"},e._l(e.carrylist,function(t,s){return i("view",{key:s,attrs:{eventid:"c5bf60f6-7-"+s},on:{click:function(t){e.cg_carryindex(s)}}},[i("view",{class:{active:s==e.carryindex}}),i("view",[e._v(e._s(t.name))])])})),e.carrylist.length?i("p",{staticClass:"louceng"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.floor,expression:"floor"}],attrs:{placeholder:"请输入楼层",type:"number",eventid:"c5bf60f6-8"},domProps:{value:e.floor},on:{input:function(t){t.target.composing||(e.floor=t.target.value)}}}),e._v("层 起步价"+e._s(e.carrylist[e.carryindex].startPrice))]):e._e()],1),i("div",{staticClass:"payinf remake"},[i("h1",[e._v("订单备注")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],attrs:{eventid:"c5bf60f6-9"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}})],1),i("div",{staticClass:"payinf mingxi"},[i("h1",[e._v("价格明细")]),i("div",{staticClass:"mingxiinf"},[i("p",[e._v("货款："+e._s(e.mallprice))]),i("p",[e._v("配送费："+e._s(e.sendprice))]),i("p",[e._v("搬运费："+e._s(e.carryprice))])],1)],1),i("div",{staticClass:"bgheight"}),i("div",{staticClass:"apply"},[i("span",[e._v("合计："),i("span",[e._v(e._s(e.allprice))])]),i("span",{attrs:{eventid:"c5bf60f6-10"},on:{click:e.req_unifiedOrder}},[e._v("确认支付")])])],2)},r=[];i.d(t,"a",function(){return s}),i.d(t,"b",function(){return r})}},[["06cb","common/runtime","common/vendor"]]]);