(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f739"],{b44e:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",[t("Row",[t("Col",{attrs:{span:"12"}},[t("apexchart",{ref:"memoryInfo",attrs:{type:"area",height:"350",options:e.memory.chartOptions,series:e.memory.series}})],1),t("Col",{attrs:{span:"12"}},[t("apexchart",{ref:"keySize",attrs:{type:"area",height:"350",options:e.key.chartOptions,series:e.key.series}})],1)],1),t("Divider",{attrs:{orientation:"left"}},[e._v("Redis详细信息")]),t("Table",{attrs:{columns:e.columns,data:e.redisInfo,"show-header":!1,size:"small"}})],1)},s=[],r=a("365c"),n={name:"redisMonitor",data(){return{memory:{series:[{name:"内存(KB)",data:[0]}],chartOptions:{chart:{animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:5e3}},toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},title:{text:"Redis内存实时占用情况（KB）",align:"left"},markers:{size:0},xaxis:{},yaxis:{},legend:{show:!1}},data:[],xdata:[]},key:{series:[{name:"key数量",data:[0]}],chartOptions:{chart:{animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:5e3}},toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},colors:["#f5564e"],stroke:{curve:"smooth"},title:{text:"Redis key实时数量（个）",align:"left"},markers:{size:0},xaxis:{},yaxis:{},legend:{show:!1}},data:[],xdata:[]},columns:[{key:"key",minWidth:200},{key:"description",minWidth:500},{key:"value",width:400}],redisInfo:[],timer:null,minMemory:1e10,maxMemory:-1e10,minSize:1e10,maxSize:-1e10}},methods:{init(){this.getData(),this.getInfo()},getData(){this.getRequestData(),this.timer=setInterval(()=>{this.getRequestData()},5e3)},getRequestData(){Object(r["Xb"])().then(e=>{let t=Number(e.result.memory)/1024;t<this.minMemory&&(this.minMemory=t),t>this.maxMemory&&(this.maxMemory=t),this.memory.data.push(Number(t.toFixed(2))),this.memory.xdata.push(e.result.time),this.memory.data.length>=6&&(this.memory.data.shift(),this.memory.xdata.shift()),this.$refs.memoryInfo.updateSeries([{name:"内存(KB)",data:this.memory.data}]),this.$refs.memoryInfo.updateOptions({xaxis:{categories:this.memory.xdata},yaxis:{min:this.minMemory-2,max:this.maxMemory+2}},!0,!0)}),Object(r["Wb"])().then(e=>{let t=e.result.keySize;t<this.minSize&&(this.minSize=t),t>this.maxSize&&(this.maxSize=t),this.key.data.push(t),this.key.xdata.push(e.result.time),this.key.data.length>=6&&(this.key.data.shift(),this.key.xdata.shift()),this.$refs.keySize.updateSeries([{name:"key数量",data:this.key.data}]),this.$refs.keySize.updateOptions({xaxis:{categories:this.key.xdata},yaxis:{min:this.minSize-2,max:this.maxSize+2}},!0,!0)})},getInfo(){Object(r["Vb"])().then(e=>{let t=[];e.result.forEach(e=>{e.description&&t.push(e)}),this.redisInfo=t})}},beforeDestroy(){this.timer&&clearInterval(this.timer)},mounted(){this.init()}},o=n,m=a("2877"),h=Object(m["a"])(o,i,s,!1,null,null,null);t["default"]=h.exports}}]);