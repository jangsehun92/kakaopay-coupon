webpackJsonp([1],{"9GkK":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("관리자 쿠폰 발급")]),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:14}},[s("div",{staticClass:"grid-content"},[s("el-input",{attrs:{placeholder:"user@email.com",clearable:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)]),e._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content"},[s("el-button",{attrs:{plain:""},on:{click:e.issueCoupon}},[e._v("발급")])],1)])],1),e._v(" "),e.hasMsg?s("div",{staticClass:"msg-content"},[s("el-alert",{attrs:{title:e.msg,type:e.isError,closable:!1,"show-icon":""}})],1):e._e()],1)},staticRenderFns:[]};var o=s("VU/8")({name:"CouponIssue",data:function(){return{email:"",msg:"",errorCode:""}},computed:{hasMsg:function(){return this.msg.length>0},isError:function(){return this.errorCode.length>0?"error":"success"}},methods:{issueCoupon:function(){var e=this,t={email:this.email};this.$http.post("http://localhost:8080/api/v1/coupon",t).then(function(t){e.msg=e.email+"으로 쿠폰이 발급 되었습니다.",e.errorCode="",e.$emit("coupon-issued")}).catch(function(t){e.msg=t.response.data.msg,e.errorCode=t.response.data.errorCode})}}},r,!1,function(e){s("J60Y")},null,null);t.default=o.exports},J60Y:function(e,t){}});
//# sourceMappingURL=1.2147832e6e15e6a4d9e3.js.map