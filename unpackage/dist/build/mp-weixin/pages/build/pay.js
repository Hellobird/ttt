(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/build/pay"],{"06cb":function(e,t,i){"use strict";i("33f4");var r=s(i("b0ce")),a=s(i("5692"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(a.default))},"15a4":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(i("701a")),a=c(i("fc4b")),s=c(i("1d49")),n=i("2f62");function c(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),r.forEach(function(t){d(e,t,i[t])})}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var u={data:function(){return{buildinf:{},vehiclelist:[],carrylist:[],name:"",date:"",time:"",y:"",m:"",d:"",vehicleindex:0,carryindex:0,allprice:"",mallprice:"",sendprice:"",carryprice:"",remark:"",requireCarry:1,floor:"",static:"",start:r.default.date(),end:r.default.enddate()}},computed:l({},(0,n.mapState)(["adress"])),components:{Adress:a.default,precautions:s.default},onLoad:function(e){var t=this;this.static=r.default.static,this.name=e.name,this.buildinf=wx.getStorageSync("buildinf"),this.buildinf.forEach(function(e){e.picture&&(e.picture=e.picture.split(",")[0])}),console.log(this.buildinf),wx.setStorageSync("buildinf",""),this.req_vehiclelist(),this.req_carrylist(),this.req_getdefaddress(),this.buildinf.forEach(function(e){t.mallprice=(e.price*e.num.toFixed(2)+Number(t.mallprice)).toFixed(2),e.goodsSpecId=e.specId?e.specId:e.id,e.goodsNumber=e.num,e.name=e.goodsSpecName?e.goodsSpecName:e.name})},methods:{cg_requireCarry:function(e){this.requireCarry=e,this.getallprice()},getallprice:function(){1==this.requireCarry?this.allprice=(Number(this.mallprice)+Number(this.sendprice)+Number(this.carryprice)).toFixed(2):this.allprice=(Number(this.mallprice)+Number(this.sendprice)).toFixed(2)},cg_vehicleindex:function(e){this.vehicleindex=e,this.sendprice=this.vehiclelist[e].startPrice,this.getallprice()},cg_carryindex:function(e){this.carryindex=e,this.carryprice=this.carrylist[e].startPrice,this.getallprice()},go_mine_adress:function(){wx.navigateTo({url:"../mine/adress?src=pay"})},timeChange:function(e){this.time=e.detail.value},dateChange:function(e){this.date=e.detail.value;var t=this.date.split("-");this.y=t[0],this.m=t[1],this.d=t[2]},req_unifiedOrder:function(){this.adress?this.date?this.time?r.default.timespace(this.date+" "+this.time)?1!=this.requireCarry||this.floor?(this.$store.commit("clean"),r.default.request({data:{addressId:this.adress.id,carryTypeId:this.carrylist[this.carryindex].id,expressTypeId:this.vehiclelist[this.vehicleindex].id,expressTime:this.date+" "+this.time,floor:this.floor,orderGoods:this.buildinf,remark:this.remark,number:1,requireCarry:this.requireCarry},url:"goods/order/unifiedOrder",c:!0}).then(function(e){r.default.pay(e,{complete:function(e){wx.redirectTo({url:"../order/buildingGoods?type=1"})}})})):r.default.totast("请填写楼层信息"):r.default.totast("请选择两小时后"):r.default.totast("请选择时间"):r.default.totast("请选择日期"):r.default.totast("请选择地址")},req_vehiclelist:function(){var e=this;r.default.request({url:"order/vehiclelist"}).then(function(t){e.vehiclelist=t,e.sendprice=e.vehiclelist[0].startPrice,e.getallprice()})},req_carrylist:function(){var e=this;r.default.request({url:"order/carrylist"}).then(function(t){e.carrylist=t,e.carryprice=e.carrylist[0].startPrice,e.getallprice()})},req_getdefaddress:function(){var e=this;r.default.request({url:"address/getdefaddress"}).then(function(t){e.adress=t})}}};t.default=u},"235d":function(e,t,i){},"2a88":function(e,t,i){"use strict";var r=i("235d"),a=i.n(r);a.a},"2dfd":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Adress",{attrs:{mpcomid:"c5bf60f6-0"}}),e._l(e.buildinf,function(t,r){return i("div",{key:t,staticClass:"payinf inff"},[i("div",[i("image",{attrs:{src:e.static+t.picture}}),i("div",[i("p",[i("view",[e._v(e._s(t.goodsName||e.name))]),i("view",[i("span",[e._v("规格")]),i("span",[e._v(e._s(t.name))])]),i("view",[i("span",[e._v("数量")]),i("span",[e._v("x"+e._s(t.num))])])])],1)])])}),i("div",{staticClass:"payinf time"},[i("h1",[e._v("配送时间选择")]),i("p",[i("view",[e.disabled?e._e():i("picker",{staticClass:"regionpicker",attrs:{mode:"date",value:"日期","custom-item":e.customItem,start:e.start,end:e.end,eventid:"c5bf60f6-0"},on:{change:e.dateChange}},[i("view",{staticClass:"picker"},[e._v("日期")])]),e.date?i("view",[i("span",[e._v(e._s(e.y))]),i("span",[e._v("年")]),i("span",[e._v(e._s(e.m))]),i("span",[e._v("月")]),i("span",[e._v(e._s(e.d))]),i("span",[e._v("日")])]):i("span",[e._v("请选择日期")])],1),i("view",[e.disabled?e._e():i("picker",{staticClass:"regionpicker",attrs:{mode:"time",value:"时间","custom-item":e.customItem,eventid:"c5bf60f6-1"},on:{change:e.timeChange}},[i("view",{staticClass:"picker"},[e._v("时间")])]),i("span",[e._v("\n\t\t\t\t\t"+e._s(e.time||"请选择时间")+"\n\t\t\t\t")])],1)])],1),i("div",{staticClass:"payinf sendtype"},[i("h1",[e._v("配送方式")]),e._l(e.vehiclelist,function(t,r){return i("p",{key:r,attrs:{eventid:"c5bf60f6-2-"+r},on:{click:function(t){e.cg_vehicleindex(r)}}},[i("span",{class:{active:r==e.vehicleindex}},[e._v(e._s(t.name))]),i("span",[e._v("起步价￥"+e._s(t.startPrice))])])})],2),i("div",{staticClass:"payinf sendtype sendtype1"},[i("h1",[e._v("是否搬运上楼")]),i("p",{staticClass:"carry"},[1==e.requireCarry?i("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):i("image",{attrs:{src:"../../static/mine/check.jpg",eventid:"c5bf60f6-3"},on:{click:function(t){e.cg_requireCarry(1)}}}),i("span",[e._v("是")]),2==e.requireCarry?i("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):i("image",{attrs:{src:"../../static/mine/check.jpg",eventid:"c5bf60f6-4"},on:{click:function(t){e.cg_requireCarry(2)}}}),i("span",[e._v("否")])]),1==e.requireCarry?i("p",{staticClass:"floor"},e._l(e.carrylist,function(t,r){return i("view",{key:r,attrs:{eventid:"c5bf60f6-5-"+r},on:{click:function(t){e.cg_carryindex(r)}}},[i("view",{class:{active:r==e.carryindex}}),i("view",[e._v(e._s(t.name))])])})):e._e(),e.carrylist.length&&1==e.requireCarry?i("p",{staticClass:"louceng"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.floor,expression:"floor"}],attrs:{placeholder:"请输入楼层",type:"number",eventid:"c5bf60f6-6"},domProps:{value:e.floor},on:{input:function(t){t.target.composing||(e.floor=t.target.value)}}}),e._v("层 起步价¥"+e._s(e.carrylist[e.carryindex].startPrice))]):e._e(),i("p",[e._v("50kg以下电梯7层以内包括7层免费搬运上门")])],1),i("div",{staticClass:"payinf remake"},[i("h1",[e._v("订单备注")]),i("div",[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],attrs:{placeholder:"如有其它需求请写明",eventid:"c5bf60f6-7"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}})])],1),i("div",{staticClass:"payinf mingxi"},[i("h1",[e._v("价格明细")]),i("div",{staticClass:"mingxiinf"},[i("p",[e._v("货款：¥"+e._s(e.mallprice))]),i("p",[e._v("配送费：¥"+e._s(e.sendprice))]),1==e.requireCarry?i("p",[e._v("搬运费：¥"+e._s(e.carryprice))]):e._e()],1)],1),i("precautions",{attrs:{type:"1",mpcomid:"c5bf60f6-1"}}),i("div",{staticClass:"apply"},[i("span",[e._v("合计："),i("span",[e._v("¥"+e._s(e.allprice))])]),i("span",{attrs:{eventid:"c5bf60f6-8"},on:{click:e.req_unifiedOrder}},[e._v("确认支付")])])],2)},a=[];i.d(t,"a",function(){return r}),i.d(t,"b",function(){return a})},"36b0":function(e,t,i){"use strict";i.r(t);var r=i("15a4"),a=i.n(r);for(var s in r)"default"!==s&&function(e){i.d(t,e,function(){return r[e]})}(s);t["default"]=a.a},5692:function(e,t,i){"use strict";i.r(t);var r=i("2dfd"),a=i("36b0");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("2a88");var n=i("2877"),c=Object(n["a"])(a["default"],r["a"],r["b"],!1,null,null,null);c.options.__file="pay.vue",t["default"]=c.exports}},[["06cb","common/runtime","common/vendor"]]]);