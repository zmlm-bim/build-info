(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2565e03c","chunk-b1747afa"],{"1a23":function(t,i,a){"use strict";a.d(i,"a",(function(){return n}));var s=function(){return(s=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},n=function(){function t(t,i,a){var n=this;this.endVal=i,this.options=a,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){n.startTime||(n.startTime=t);var i=t-n.startTime;n.remaining=n.duration-i,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(i,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(i,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(i/n.duration);var a=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=a?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),i<n.duration?n.rAF=requestAnimationFrame(n.count):null!==n.finalEndVal?n.update(n.finalEndVal):n.callback&&n.callback()},this.formatNumber=function(t){var i,a,s,e,r=t<0?"-":"";i=Math.abs(t).toFixed(n.options.decimalPlaces);var o=(i+="").split(".");if(a=o[0],s=o.length>1?n.options.decimal+o[1]:"",n.options.useGrouping){e="";for(var l=0,u=a.length;l<u;++l)0!==l&&l%3==0&&(e=n.options.separator+e),e=a[u-l-1]+e;a=e}return n.options.numerals&&n.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(t){return n.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return n.options.numerals[+t]}))),r+n.options.prefix+a+s+n.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=s(s({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return n.handleScroll(n)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,a=t.el.getBoundingClientRect(),s=a.top+a.height+window.pageYOffset;s<i&&s>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>s&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},"69b6":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t._self._c;return i("div",[i("div",{class:t.className,style:{color:t.color,fontSize:t.countSize,fontWeight:t.countWeight,display:t.display}},[i("span",[t._v(t._s(t.prefix))]),i("span",{attrs:{id:t.id}}),i("span",[t._v(t._s(t.unit))]),i("span",[t._v(t._s(t.suffix))])]),t._t("intro")],2)},n=[],e=a("1a23"),r={data(){return{unit:"",count:null}},name:"countUp",props:{id:{type:String,default:"countUp"},className:String,prefix:String,suffix:String,display:{type:String,default:"inline-block"},endVal:{type:Number,required:!0},delay:{type:Number,default:0},decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:()=>({startVal:0,useEasing:!0,useGrouping:!0,separator:",",decimal:"."})},color:String,countSize:{type:String,default:"18px"},countWeight:{type:[Number,String],default:500}},methods:{transformValue(t){let i=0,a="";return t<1e6?i=t:t>=1e6&&t<1e10?(i=parseInt(t/1e6),a="M+"):t>=1e10&&(i=parseInt(t/1e9),a="B+"),{val:i,unit:a}},start(){this.$nextTick(()=>{setTimeout(()=>{let t=this.transformValue(this.endVal),i=t.val;this.unit=t.unit,this.options.decimalPlaces=this.decimalPlaces,this.options.duration=this.duration,this.count=new e["a"](this.id,i,this.options),this.count.error||this.count.start()},this.delay)})}},mounted(){this.start()},watch:{endVal(t){if(!this.count)return;let i=this.transformValue(t),a=i.val;this.unit=i.unit,this.count.update(a)}}},o=r,l=a("2877"),u=Object(l["a"])(o,s,n,!1,null,null,null);i["default"]=u.exports},7745:function(t,i,a){"use strict";a("c104")},c104:function(t,i,a){},e6ba:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t._self._c;return i("div",[i("Card",{staticClass:"card-area",attrs:{padding:0}},[i("div",{staticClass:"info-wrap"},[i("div",{staticClass:"top"},[i("div",{staticClass:"left"},[i("countUp",{attrs:{id:t.id,prefix:t.prefix,suffix:t.suffix,endVal:t.value,decimalPlaces:t.decimalPlaces,countSize:"22px",countWeight:"500"}}),i("h6",{staticClass:"text"},[t._v(t._s(t.title))])],1),i("div",{staticClass:"right-chart"},[i("apexchart",{attrs:{type:"area",height:"40",width:"70",options:t.chartOptions,series:t.series}})],1)]),i("div",{staticClass:"bottom"},["up"==t.status?i("Icon",{attrs:{type:"md-arrow-round-up",color:"#34c38f",size:"20"}}):i("Icon",{attrs:{type:"md-arrow-round-down",size:"20",color:"#f46a6a"}}),i("span",{class:"compare-"+t.status},[t._v(t._s(t.compare))]),i("span",{staticClass:"since"},[t._v(t._s(t.since))])],1)])])],1)},n=[],e=a("69b6"),r={name:"card-area",components:{countUp:e["default"]},props:{id:{type:String,default:"countup"},title:{type:String,default:"-"},value:{type:Number,default:0},decimalPlaces:{type:Number,default:0},prefix:String,suffix:String,status:{type:String,default:"up"},compare:String,since:{type:String,default:"与上周相比"}},data(){return{series:[{data:[]}],chartOptions:{colors:["#34c38f"],chart:{sparkline:{enabled:!0}},stroke:{width:2,curve:"smooth"},fill:{opacity:.3},xaxis:{crosshairs:{width:1}},yaxis:{min:0,max:8},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(t){return""}}},marker:{show:!1}}}}},methods:{init(){this.series=[{data:[2,3,4,3,5,4,5,6,5]}]}},mounted(){this.init()}},o=r,l=(a("7745"),a("2877")),u=Object(l["a"])(o,s,n,!1,null,"523331e0",null);i["default"]=u.exports}}]);