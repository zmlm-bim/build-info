(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03d07c4c","chunk-1e6e206c","chunk-48bb1b53","chunk-2d0ceda3"],{"10fd":function(t,e,s){"use strict";s.d(e,"c",(function(){return o})),s.d(e,"b",(function(){return r})),s.d(e,"a",(function(){return i}));const o=(t,e,s)=>{var o=/^[a-zA-Z0-9_]{1,16}$/;e.length>16?s(new Error("长度不能超过16个字符")):o.test(e)?s():s(new Error("仅支持大小写英文、数字和下划线_"))},r=(t,e,s)=>{e.length<6?s(new Error("密码长度不得小于6位")):s()},i=(t,e,s)=>{var o=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;o.test(e)?s():s(new Error("手机号格式错误"))}},1338:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"header"},["darkMode"==t.mainTheme?e("img",{attrs:{src:s("d939"),width:"220px"}}):e("img",{attrs:{src:s("9279"),width:"220px"}}),e("div",{staticClass:"description"},[t._v(t._s(t.$t("xboot")))])])])},r=[],i={name:"xboot-header",computed:{mainTheme(){return this.$store.state.theme.theme.mainTheme}}},n=i,a=(s("bf60"),s("2877")),l=Object(a["a"])(n,o,r,!1,null,"eb7d1ad6",null);e["default"]=l.exports},"4de4":function(t,e,s){"use strict";s("f03a")},"529b":function(t,e,s){},"60e8":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("Button",{attrs:{countTime:t.countTime,loading:t.loading,type:t.type,size:t.size,ghost:t.ghost,disabled:t.disabled||t.clicked,icon:t.icon,shape:t.shape,long:t.long},on:{click:t.handleClick}},[t._v(t._s(t.buttonText))])],1)},r=[],i={name:"iconChoose",props:{text:{type:String,default:"提交"},autoCountDown:{type:Boolean,default:!0},countTime:{type:[Number,String],default:60},suffixText:{type:String,default:"秒后重试"},type:String,size:String,loading:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:String,shape:String,long:{type:Boolean,default:!1}},data(){return{buttonText:this.text,count:Number(this.countTime),clicked:!1}},methods:{init(){},handleClick(){this.autoCountDown&&(this.clicked=!0,this.countDown()),this.$emit("on-click",!0)},startCountDown(){this.clicked=!0,this.countDown()},countDown(){if(0==this.count)return this.clicked=!1,this.count=this.countTime,void(this.buttonText=this.text);this.buttonText=this.count+" "+this.suffixText,this.count--,setTimeout(()=>{this.countDown()},1e3)},setText(t){t!==this.buttonText&&(this.buttonText=t)}},watch:{text(t){this.setText(t)}},mounted(){this.init()}},n=i,a=s("2877"),l=Object(a["a"])(n,o,r,!1,null,null,null);e["default"]=l.exports},ab7e:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"lang-icon"},[e("Dropdown",{attrs:{transfer:""},on:{"on-click":t.langChange}},[e("Icon",{attrs:{type:"md-globe",size:"26"}}),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e("DropdownItem",{attrs:{name:"zh-CN",selected:"zh-CN"==t.currLang}},[e("div",{staticClass:"lan-logo-content"},[e("img",{staticClass:"country-logo",attrs:{src:s("6336")}}),t._v("简体中文 ")])]),e("DropdownItem",{attrs:{name:"en-US",selected:"en-US"==t.currLang}},[e("div",{staticClass:"lan-logo-content"},[e("img",{staticClass:"country-logo",attrs:{src:s("38f6")}}),t._v("English ")])])],1)],1)],1)},r=[],i={name:"langSwitch",data(){return{currLang:"zh-CN"}},methods:{langChange(t){this.currLang=t,this.$i18n.locale=t,this.$store.commit("switchLang",t)}},mounted(){localStorage.lang&&(this.currLang=localStorage.lang)}},n=i,a=(s("4de4"),s("2877")),l=Object(a["a"])(n,o,r,!1,null,null,null);e["default"]=l.exports},bf60:function(t,e,s){"use strict";s("529b")},c24a:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reset-wrap"},[e("Row",{staticStyle:{height:"100%"},attrs:{type:"flex",justify:"center",align:"middle"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitReset.apply(null,arguments)}}},[e("Col",{staticClass:"content"},[e("div",[e("Header"),e("div",{staticClass:"reset"},[e("Tabs",{attrs:{value:"1"}},[e("TabPane",{attrs:{label:t.label,name:"1",icon:t.icon}})],1),e("Form",{ref:"resetForm",staticClass:"form",attrs:{model:t.form,rules:t.rules}},["0"==t.type?e("div",[e("FormItem",{attrs:{prop:"mobile",error:t.errorMobile}},[e("Input",{attrs:{size:"large",clearable:"",placeholder:"请输入注册绑定手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),e("FormItem",{attrs:{prop:"code"}},[e("Row",{attrs:{type:"flex",justify:"space-between"}},[e("Input",{staticClass:"input-verify",attrs:{size:"large",clearable:"",placeholder:"请输入短信验证码",maxlength:10},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),e("CountDownButton",{ref:"countDown",attrs:{autoCountDown:!1,size:"large",loading:t.sending,text:t.getSms},on:{"on-click":t.showVaptcha}})],1)],1)],1):e("div",[e("FormItem",{attrs:{prop:"email",error:t.errorEmail}},[e("Input",{attrs:{size:"large",clearable:"",placeholder:"请输入绑定邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("FormItem",{attrs:{prop:"code"}},[e("Row",{attrs:{type:"flex",justify:"space-between"}},[e("Input",{staticClass:"input-verify",attrs:{size:"large",clearable:"",placeholder:"请输入您收到的邮件中的验证码",maxlength:10},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),e("CountDownButton",{ref:"countDownEmail",attrs:{autoCountDown:!1,size:"large",loading:t.sending,text:t.getSms},on:{"on-click":t.showVaptcha}})],1)],1)],1),e("FormItem",{attrs:{prop:"password"}},[e("SetPassword",{attrs:{size:"large",placeholder:"请输入新的密码，长度为6-20个字符"},on:{"on-change":t.changeInputPass},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("FormItem",{attrs:{prop:"confirmPass"}},[e("Input",{attrs:{type:"password",maxlength:20,size:"large",clearable:"",placeholder:"请再次输入确认新的密码"},model:{value:t.form.confirmPass,callback:function(e){t.$set(t.form,"confirmPass",e)},expression:"form.confirmPass"}})],1)],1),e("Button",{staticStyle:{"margin-bottom":"3vh"},attrs:{type:"primary",size:"large",loading:t.loading,long:""},on:{click:t.submitReset}},[t._v("重置密码")]),e("Row",{attrs:{type:"flex"}},[e("a",{staticClass:"back",on:{click:function(e){return t.$router.go(-1)}}},[e("Icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"md-arrow-round-back"}}),t._v("返回 ")],1)])],1)],1),e("Footer")],1),e("LangSwitch")],1)],1)},r=[],i=s("365c"),n=s("10fd"),a=s("1338"),l=s("c9d5"),c=s("ab7e"),u=s("60e8"),d=s("5e58"),h={components:{CountDownButton:u["default"],LangSwitch:c["default"],SetPassword:d["default"],Header:a["default"],Footer:l["default"]},data(){const t=(t,e,s)=>{e.length<6?s(new Error("密码长度不得小于6位")):e!==this.form.password?s(new Error("两次输入的密码不一致")):s()};return{label:"使用手机号重置密码",icon:"md-phone-portrait",loading:!1,type:"0",form:{mobile:"",email:"",token:"",password:"",passStrength:""},sended:!1,sending:!1,getSms:"获取验证码",select:"86",errorMobile:"",errorEmail:"",rules:{mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:n["a"],trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{validator:n["b"],trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"}],confirmPass:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{validator:t,trigger:"blur"}]},vaptchaObject:null}},methods:{initVaptcha(){let t=this;vaptcha({vid:i["Wc"],type:"invisible",offline_server:i["Xc"]}).then((function(e){t.vaptchaObject=e,e.listen("pass",(function(){t.form.token=e.getToken(),"0"==t.type?t.sendSmsCode():"1"==t.type&&t.sendEmailCode()}))}))},showVaptcha(){if("0"==this.type){var t=/^[1][3,4,5,6,7,8][0-9]{9}$/;if(!t.test(this.form.mobile))return void(this.errorMobile="手机号格式错误");this.errorMobile=""}else if("1"==this.type){t=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;if(!t.test(this.form.email))return void(this.errorEmail="邮箱格式错误");this.errorEmail=""}this.vaptchaObject.validate()},sendSmsCode(){this.sending=!0,this.getSms="发送中",Object(i["Mc"])(this.form.mobile,this.form).then(t=>{this.getSms="获取验证码",this.sending=!1,this.vaptchaObject.reset(),t.success&&(this.$Message.success("发送短信验证码成功"),this.$refs.countDown.startCountDown())})},sendEmailCode(){this.sending=!0,this.getSms="发送中",Object(i["Lc"])(this.form.email,this.form).then(t=>{this.getSms="获取验证码",this.sending=!1,this.vaptchaObject.reset(),t.success&&(this.$Message.success("发送邮件验证码成功，请注意查收"),this.$refs.countDownEmail.startCountDown())})},changeInputPass(t,e,s){this.form.passStrength=s},submitReset(){this.$refs.resetForm.validate(t=>{t&&(this.loading=!0,"0"==this.type?Object(i["xc"])(this.form).then(t=>{this.loading=!1,t.success?(this.$Message.success("重置密码成功，请牢记您的新密码"),this.$router.push({name:"login"})):this.vaptchaObject.reset()}):"1"==this.type&&Object(i["wc"])(this.form).then(t=>{this.loading=!1,t.success?(this.$Message.success("重置密码成功，请牢记您的新密码"),this.$router.push({name:"login"})):this.vaptchaObject.reset()}))})}},mounted(){let t=this.$route.query.type;"1"==t&&(this.type=t,this.label="使用邮箱重置密码",this.icon="ios-mail-outline"),this.initVaptcha()}},m=h,g=(s("e3c3"),s("2877")),f=Object(g["a"])(m,o,r,!1,null,null,null);e["default"]=f.exports},e3c3:function(t,e,s){"use strict";s("f183")},f03a:function(t,e,s){},f183:function(t,e,s){}}]);