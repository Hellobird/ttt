require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{94:function(e,t,s){"use strict";var a=i(s(1)),n=i(s(95));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},95:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(97),n=s.n(a),i=s(98),r=!1;var d=function(e){r||s(96)},o=s(0)(n.a,i.a,d,null,null);o.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] addadress.vue: functional components are not supported with templates, they should use render functions."),t.default=o.exports},96:function(e,t){},97:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=s(2),i=(a=n)&&a.__esModule?a:{default:a};t.default={data:function(){return{adressinf:{address:"",cityCode:"",cityName:"",countyAreaCode:"",countyAreaName:"",defaultType:0,name:"",phone:"",provinceCode:"",provinceName:""},id:""}},onLoad:function(e){e._id&&(this.id=e._id,this.req_addressInf(e._id))},methods:{bindRegionChange:function(e){this.adressinf.provinceName=e.target.value[0],this.adressinf.countyAreaName=e.target.value[1],this.adressinf.cityName=e.target.value[2]},cg_active:function(){this.adressinf.defaultType?this.adressinf.defaultType=0:this.adressinf.defaultType=1},req_addaddress:function(){var e="address/add";this.id&&(e="address/update"),this.adressinf.name?i.default.checkmobile(this.adressinf.phone)?this.adressinf.provinceName?this.adressinf.adress?i.default.request({data:this.adressinf,url:e,c:!0}).then(function(e){wx.navigateBack()}):i.default.totast("请输入详细地址"):i.default.totast("请选择所在城市"):i.default.totast("请输入正确的手机号"):i.default.totast("请输入姓名")},req_addressInf:function(e){var t=this;i.default.request({data:{id:e},url:"address/detail"}).then(function(e){t.adressinf=e})}}}},98:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"setinput"},[s("div",[s("span",[e._v("姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.name,expression:"adressinf.name"}],attrs:{type:"text",placeholder:"最少2个,最多15个字",eventid:"CVe-0"},domProps:{value:e.adressinf.name},on:{input:function(t){t.target.composing||(e.adressinf.name=t.target.value)}}})]),s("div",[s("span",[e._v("电话")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.phone,expression:"adressinf.phone"}],attrs:{type:"text",placeholder:"请输入手机号",eventid:"4l3-1"},domProps:{value:e.adressinf.phone},on:{input:function(t){t.target.composing||(e.adressinf.phone=t.target.value)}}})]),s("div",[s("span",[e._v("地区")]),s("div",{staticClass:"inputall"},[e.disabled?e._e():s("picker",{staticClass:"regionpicker",attrs:{mode:"region",value:"请选择所在城市","custom-item":e.customItem,eventid:"UTr-2"},on:{change:e.bindRegionChange}},[s("view",{staticClass:"picker"},[e._v("\n\t\t\t\t\t      "+e._s(e.adressinf.provinceName||"")+"，"+e._s(e.adressinf.countyAreaName||"")+"，"+e._s(e.adressinf.cityName||"")+"\n\t\t\t\t\t    ")])]),e._v("\n\t\t\t"+e._s(e.adressinf.provinceName+e.adressinf.countyAreaName+e.adressinf.cityName||"请选择所在城市")+"\n\t\t")],1)]),s("div",[s("span",[e._v("地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.address,expression:"adressinf.address"}],attrs:{type:"text",placeholder:"请填写详细地址,5~60个字",eventid:"ifL-3"},domProps:{value:e.adressinf.address},on:{input:function(t){t.target.composing||(e.adressinf.address=t.target.value)}}})]),e._m(0),s("p",{staticClass:"xieyi"},[s("span",{attrs:{eventid:"jo4-4"},on:{click:e.cg_active}},[e.adressinf.defaultType?e._e():s("image",{attrs:{src:"../../static/mine/check.jpg"}}),e.adressinf.defaultType?s("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):e._e()]),s("span",[e._v("设置成默认地址")])]),s("p",{staticClass:"submit",attrs:{eventid:"FVE-5"},on:{click:function(t){e.req_addaddress()}}},[e._v("\n\t\t保存\n\t")])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",[this._v("邮编")]),t("input",{attrs:{type:"text",placeholder:"6位邮政编码"}})])}]};t.a=n}},[94]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/addadress.js.map