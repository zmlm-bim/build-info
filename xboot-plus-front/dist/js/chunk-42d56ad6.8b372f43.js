(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42d56ad6","chunk-b1747afa"],{"184d":function(t,i,n){t.exports=n.p+"img/empty.c7219e46.png"},"1a23":function(t,i,n){"use strict";n.d(i,"a",(function(){return a}));var e=function(){return(e=Object.assign||function(t){for(var i,n=1,e=arguments.length;n<e;n++)for(var a in i=arguments[n])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t}).apply(this,arguments)},a=function(){function t(t,i,n){var a=this;this.endVal=i,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var i=t-a.startTime;a.remaining=a.duration-i,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(i,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(i,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(i/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),i<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(t){var i,n,e,s,r=t<0?"-":"";i=Math.abs(t).toFixed(a.options.decimalPlaces);var o=(i+="").split(".");if(n=o[0],e=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){s="";for(var l=0,u=n.length;l<u;++l)0!==l&&l%3==0&&(s=a.options.separator+s),s=n[u-l-1]+s;n=s}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),e=e.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),r+a.options.prefix+n+e+a.options.suffix},this.easeOutExpo=function(t,i,n,e){return n*(1-Math.pow(2,-10*t/e))*1024/1023+i},this.options=e(e({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),e=n.top+n.height+window.pageYOffset;e<i&&e>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>e&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},"69b6":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t._self._c;return i("div",[i("div",{class:t.className,style:{color:t.color,fontSize:t.countSize,fontWeight:t.countWeight,display:t.display}},[i("span",[t._v(t._s(t.prefix))]),i("span",{attrs:{id:t.id}}),i("span",[t._v(t._s(t.unit))]),i("span",[t._v(t._s(t.suffix))])]),t._t("intro")],2)},a=[],s=n("1a23"),r={data(){return{unit:"",count:null}},name:"countUp",props:{id:{type:String,default:"countUp"},className:String,prefix:String,suffix:String,display:{type:String,default:"inline-block"},endVal:{type:Number,required:!0},delay:{type:Number,default:0},decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:()=>({startVal:0,useEasing:!0,useGrouping:!0,separator:",",decimal:"."})},color:String,countSize:{type:String,default:"18px"},countWeight:{type:[Number,String],default:500}},methods:{transformValue(t){let i=0,n="";return t<1e6?i=t:t>=1e6&&t<1e10?(i=parseInt(t/1e6),n="M+"):t>=1e10&&(i=parseInt(t/1e9),n="B+"),{val:i,unit:n}},start(){this.$nextTick(()=>{setTimeout(()=>{let t=this.transformValue(this.endVal),i=t.val;this.unit=t.unit,this.options.decimalPlaces=this.decimalPlaces,this.options.duration=this.duration,this.count=new s["a"](this.id,i,this.options),this.count.error||this.count.start()},this.delay)})}},mounted(){this.start()},watch:{endVal(t){if(!this.count)return;let i=this.transformValue(t),n=i.val;this.unit=i.unit,this.count.update(n)}}},o=r,l=n("2877"),u=Object(l["a"])(o,e,a,!1,null,null,null);i["default"]=u.exports},aa8a:function(t,i,n){"use strict";n("b9ad")},b4cc:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t._self._c;return i("div",[i("Card",{staticClass:"card-info"},[i("span",{staticClass:"lstick"}),i("div",{staticClass:"info-wrap"},[t.icon?i("Icon",{staticClass:"icon",attrs:{type:t.icon,color:t.iconColor,size:t.iconSize}}):i("img",{staticClass:"icon",attrs:{src:t.image,width:t.width,height:t.height}}),i("div",{staticClass:"content"},[i("span",{style:{color:t.titleColor,fontSize:t.titleSize,fontWeight:t.titleWeight}},[t._v(t._s(t.title))]),i("countUp",{staticClass:"mt",attrs:{prefix:t.prefix,suffix:t.suffix,id:t.id,"end-val":t.endVal,color:t.countColor,countSize:t.countSize,countWeight:t.countWeight,decimalPlaces:t.decimalPlaces,duration:t.duration,delay:t.delay,options:t.options}})],1)],1)])],1)},a=[],s=n("69b6"),r={name:"card2",components:{countUp:s["default"]},props:{id:String,icon:String,iconSize:{type:[Number,String],default:50},iconColor:{type:String,default:"#478ef9"},image:{type:String,default:n("184d")},width:{type:String,default:"55px"},height:{type:String,default:"55px"},prefix:String,suffix:String,endVal:Number,decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},delay:{type:Number,default:0},options:{type:Object,default:()=>({startVal:0,useEasing:!0,useGrouping:!0,separator:",",decimal:"."})},countColor:{type:String,default:"#3f4255"},countSize:{type:String,default:"24px"},countWeight:{type:Number,default:400},title:String,titleColor:{type:String,default:"#99abb4"},titleSize:{type:String,default:"14px"},titleWeight:{type:Number,default:600}},data(){return{}},methods:{init(){}},mounted(){this.init()}},o=r,l=(n("aa8a"),n("2877")),u=Object(l["a"])(o,e,a,!1,null,"b79ec8fc",null);i["default"]=u.exports},b9ad:function(t,i,n){}}]);