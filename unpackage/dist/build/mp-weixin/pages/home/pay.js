(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/pay"],{"150f":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("701a"));function i(e){return e&&e.__esModule?e:{default:e}}var n={data:function(){return{static:"",serverinf:{},date:"",time:"",y:"",m:"",d:"",adress:""}},onLoad:function(){this.static=a.default.static,this.req_getdefaddress(),this.serverinf=wx.getStorageSync("serverinf"),console.log(JSON.stringify(this.serverinf)),wx.setStorageSync("serverinf","")},onShow:function(){wx.getStorageSync("adress")&&(this.adress=wx.getStorageSync("adress"),wx.setStorageSync("adress",""))},methods:{go_mine_adress:function(){wx.navigateTo({url:"../mine/adress?src=pay"})},req_unifiedOrder:function(){this.adress?this.date?this.time?a.default.request({data:{addressId:this.adress.id,makeTime:this.date+" "+this.time,remark:"",serviceId:this.serverinf.id},url:"service/order/unifiedOrder",c:!0}).then(function(e){wx.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:"HMAC-SHA256",success:function(e){},fail:function(e){console.log(e)},complete:function(e){wx.redirectTo({url:"../order/checkOrder?type=1"})}})}):a.default.totast("请选择时间"):a.default.totast("请选择日期"):a.default.totast("请选择地址")},timeChange:function(e){this.time=e.detail.value},dateChange:function(e){this.date=e.detail.value;var t=this.date.split("-");this.y=t[0],this.m=t[1],this.d=t[2]},req_getdefaddress:function(){var e=this;a.default.request({url:"address/getdefaddress"}).then(function(t){e.adress=t})}}};t.default=n},2622:function(e,t,s){"use strict";s.r(t);var a=s("fb3d"),i=s("8dd4");for(var n in i)"default"!==n&&function(e){s.d(t,e,function(){return i[e]})}(n);s("baa9");var r=s("2877"),d=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);d.options.__file="pay.vue",t["default"]=d.exports},3922:function(e,t,s){"use strict";s("33f4");var a=n(s("b0ce")),i=n(s("2622"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(i.default))},"3e76":function(e,t,s){},"8dd4":function(e,t,s){"use strict";s.r(t);var a=s("150f"),i=s.n(a);for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);t["default"]=i.a},baa9:function(e,t,s){"use strict";var a=s("3e76"),i=s.n(a);i.a},fb3d:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"adress"},[e.adress?s("div",{staticClass:"adressli",attrs:{eventid:"458ee1ba-1"},on:{click:e.go_mine_adress}},[s("div",[e._v("姓      名："+e._s(e.adress.name))]),s("div",[e._v("联系方式："+e._s(e.adress.phone))]),s("div",{staticClass:"adressinf"},[s("div",[e._m(0),s("span",[e._v("收货地址："+e._s(e.adress.provinceName+e.adress.countyAreaName+e.adress.cityName+e.adress.address))])]),s("image",{attrs:{src:"../../static/right.jpg"}})])]):s("div",{staticClass:"adressli center",attrs:{eventid:"458ee1ba-0"},on:{click:e.go_mine_adress}},[e._v("请选择地址")])]),s("div",{staticClass:"bggray"}),s("div",{staticClass:"payinf"},[s("h1",[e._v(e._s(e.serverinf.name))]),s("div",[s("image",{attrs:{src:e.static+e.serverinf.picture}}),s("div",[s("span",[e._v(e._s(e.serverinf.name))]),s("span",[e._v("￥"+e._s(e.serverinf.bookPrice))])])])],1),s("div",{staticClass:"payinf time"},[s("h1",[e._v(e._s(e.serverinf.name))]),s("p",[s("view",[e.disabled?e._e():s("picker",{staticClass:"regionpicker",attrs:{mode:"date",value:"日期","custom-item":e.customItem,eventid:"458ee1ba-2"},on:{change:e.dateChange}},[s("view",{staticClass:"picker"},[e._v("日期")])]),e.date?s("view",[s("span",[e._v(e._s(e.y))]),s("span",[e._v("年")]),s("span",[e._v(e._s(e.m))]),s("span",[e._v("月")]),s("span",[e._v(e._s(e.d))]),s("span",[e._v("日")])]):s("span",[e._v("请选择日期")])],1),s("view",[e.disabled?e._e():s("picker",{staticClass:"regionpicker",attrs:{mode:"time",value:"时间","custom-item":e.customItem,eventid:"458ee1ba-3"},on:{change:e.timeChange}},[s("view",{staticClass:"picker"},[e._v("时间")])]),s("span",[e._v("\n\t\t\t\t\t"+e._s(e.time||"请选择时间")+"\n\t\t\t\t")])],1)])],1),s("div",{staticClass:"tip"},[s("div",[e._v("注意事项:")]),s("div",[s("p",[e._v("1.本次付款为部分定金支付；")]),s("p",[e._v("2.生活邦服务完工后，需进行尾款支付；")])],1)]),s("div",{staticClass:"apply",attrs:{eventid:"458ee1ba-4"},on:{click:e.req_unifiedOrder}},[s("div",[e._v("确认支付")])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("image",{attrs:{src:"../../static/index/blackadress.png"}})])}];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i})}},[["3922","common/runtime","common/vendor"]]]);