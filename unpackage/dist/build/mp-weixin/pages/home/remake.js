(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/remake"],{"0bb1":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"adress"},[e.adress?a("div",{staticClass:"adressli",attrs:{eventid:"dc27bf62-1"},on:{click:e.go_mine_adress}},[a("div",[e._v("姓      名："+e._s(e.adress.name))]),a("div",[e._v("联系方式："+e._s(e.adress.phone))]),a("div",{staticClass:"adressinf"},[a("div",[e._m(0),a("span",[e._v("收货地址："+e._s(e.adress.provinceName+e.adress.countyAreaName+e.adress.cityName+e.adress.address))])]),a("image",{attrs:{src:"../../static/right.jpg"}})])]):a("div",{staticClass:"adressli center",attrs:{eventid:"dc27bf62-0"},on:{click:e.go_mine_adress}},[e._v("请选择地址")])]),a("div",{staticClass:"bggray"}),a("div",{staticClass:"payinf"},[a("h1",[e._v(e._s(e.remakeinf.name))]),a("div",[a("image",{attrs:{src:e.remakeinf.picture}}),a("div",[a("span",[e._v(e._s(e.remakeinf.name))])])])],1),a("div",{staticClass:"payinf time"},[a("h1",[e._v(e._s(e.remakeinf.name))]),a("p",[a("view",[e.disabled?e._e():a("picker",{staticClass:"regionpicker",attrs:{mode:"date",value:"日期","custom-item":e.customItem,eventid:"dc27bf62-2"},on:{change:e.dateChange}},[a("view",{staticClass:"picker"},[e._v("日期")])]),e.date?a("view",[a("span",[e._v(e._s(e.y))]),a("span",[e._v("年")]),a("span",[e._v(e._s(e.m))]),a("span",[e._v("月")]),a("span",[e._v(e._s(e.d))]),a("span",[e._v("日")])]):a("span",[e._v("请选择日期")])],1),a("view",[e.disabled?e._e():a("picker",{staticClass:"regionpicker",attrs:{mode:"time",value:"时间","custom-item":e.customItem,eventid:"dc27bf62-3"},on:{change:e.timeChange}},[a("view",{staticClass:"picker"},[e._v("时间")])]),a("span",[e._v("\n\t\t\t\t\t"+e._s(e.time||"请选择时间")+"\n\t\t\t\t")])],1)])],1),a("div",{staticClass:"payinf remake"},[a("h1",[e._v("备注")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],attrs:{eventid:"dc27bf62-4"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}})],1),a("div",{staticClass:"apply",attrs:{eventid:"dc27bf62-5"},on:{click:e.req_remake}},[a("div",[e._v("立即预约")])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("image",{attrs:{src:"../../static/index/blackadress.png"}})])}];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},3298:function(e,t,a){"use strict";var s=a("df04"),i=a.n(s);i.a},"93de":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("701a"));function i(e){return e&&e.__esModule?e:{default:e}}var n={data:function(){return{static:"",remakeinf:{},date:"",time:"",y:"",m:"",d:"",adress:"",type:"",remark:""}},onLoad:function(e){this.type=e.type,this.static=s.default.static,this.req_getdefaddress(),this.remakeinf=wx.getStorageSync("remakeinf"),console.log(JSON.stringify(this.remakeinf)),wx.setStorageSync("remakeinf","")},onShow:function(){wx.getStorageSync("adress")&&(this.adress=wx.getStorageSync("adress"),wx.setStorageSync("adress",""))},methods:{go_mine_adress:function(){wx.navigateTo({url:"../mine/adress?src=pay"})},reform:function(){s.default.request({data:{addressId:this.adress.id,makeTime:this.date+" "+this.time,remark:this.remark,reformTypeId:this.remakeinf.reformTypeId,houseTypeId:this.remakeinf.houseTypeId},url:"reform/make"}).then(function(e){wx.showModal({title:"提示",content:"预约成功",showCancel:!1,success:function(e){e.confirm&&wx.navigateBack()}})})},whole:function(){s.default.request({data:{addressId:this.adress.id,makeTime:this.date+" "+this.time,remark:this.remark,wholeHomeTypeId:this.remakeinf.wholeHomeTypeId,houseTypeId:this.remakeinf.houseTypeId,areaTypeId:this.remakeinf.areaTypeId},url:"renovation/make"}).then(function(e){wx.showModal({title:"提示",content:"预约成功",showCancel:!1,success:function(e){e.confirm&&wx.navigateBack()}})})},req_remake:function(){this.adress?this.date?this.time?this.type?this.whole():this.reform():s.default.totast("请选择时间"):s.default.totast("请选择日期"):s.default.totast("请选择地址")},timeChange:function(e){this.time=e.detail.value},dateChange:function(e){this.date=e.detail.value;var t=this.date.split("-");this.y=t[0],this.m=t[1],this.d=t[2]},req_getdefaddress:function(){var e=this;s.default.request({url:"address/getdefaddress"}).then(function(t){e.adress=t})}}};t.default=n},b7f3:function(e,t,a){"use strict";a.r(t);var s=a("93de"),i=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);t["default"]=i.a},bdb2:function(e,t,a){"use strict";a.r(t);var s=a("0bb1"),i=a("b7f3");for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);a("3298");var r=a("2877"),d=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,null,null);d.options.__file="remake.vue",t["default"]=d.exports},df04:function(e,t,a){},e7af:function(e,t,a){"use strict";a("33f4");var s=n(a("b0ce")),i=n(a("bdb2"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))}},[["e7af","common/runtime","common/vendor"]]]);