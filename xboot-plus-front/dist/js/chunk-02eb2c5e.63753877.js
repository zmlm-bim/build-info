(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02eb2c5e"],{ac90:function(t,e,a){},b913:function(t,e,a){"use strict";a("ac90")},cb7c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{display:"flex"}},[e("Input",{staticStyle:{"margin-right":"10px"},attrs:{readonly:"",size:t.size,disabled:t.disabled,prefix:t.prefix,suffix:t.suffix,placeholder:t.placeholder,clearable:t.clearable},on:{"on-clear":t.clearSelect},model:{value:t.departmentTitle,callback:function(e){t.departmentTitle=e},expression:"departmentTitle"}}),e("Poptip",{attrs:{transfer:"",trigger:"click",placement:"right",title:"选择部门",width:"250"}},[e("Button",{attrs:{size:t.size,disabled:t.disabled,icon:t.icon,type:t.type,shape:t.shape,ghost:t.ghost}},[t._v(t._s(t.text))]),e("div",{attrs:{slot:"content"},slot:"content"},[e("Input",{attrs:{suffix:"ios-search",placeholder:"输入部门名搜索",clearable:""},on:{"on-change":t.searchDep},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),e("div",{staticClass:"dep-tree-bar"},[e("Tree",{attrs:{data:t.dataDep,"load-data":t.loadData,multiple:t.multiple},on:{"on-select-change":t.selectTree}}),t.depLoading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)],1)])},s=[],l=a("365c"),n={name:"departmentTreeChoose",props:{text:{type:String,default:"选择部门"},icon:{type:String,default:"md-list"},disabled:{type:Boolean,default:!1},size:String,type:String,shape:String,ghost:{type:Boolean,default:!1},prefix:String,suffix:String,multiple:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},placeholder:{type:String,default:"点击选择部门"}},data(){return{depLoading:!1,departmentTitle:"",searchKey:"",dataDep:[],selectDep:[],departmentId:[]}},methods:{initDepartmentData(){Object(l["jc"])().then(t=>{t.success&&(t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[]),-1==t.status&&(t.title="[已禁用] "+t.title,t.disabled=!0)})),this.dataDep=t.result)})},loadData(t,e){Object(l["lc"])(t.id).then(t=>{t.success&&(t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[]),-1==t.status&&(t.title="[已禁用] "+t.title,t.disabled=!0)})),e(t.result))})},searchDep(){this.searchKey?(this.depLoading=!0,Object(l["Bc"])({title:this.searchKey}).then(t=>{this.depLoading=!1,t.success&&(t.result.forEach((function(t){-1==t.status&&(t.title="[已禁用] "+t.title,t.disabled=!0)})),this.dataDep=t.result)})):this.initDepartmentData()},selectTree(t){let e=[],a="";t.forEach(t=>{e.push(t.id),a=""==a?t.title:a+"、"+t.title}),this.departmentId=e,this.departmentTitle=a,this.multiple?this.$emit("on-change",this.departmentId):this.$emit("on-change",this.departmentId[0])},clearSelect(){this.departmentId=[],this.departmentTitle="",this.initDepartmentData(),this.multiple?this.$emit("on-change",[]):this.$emit("on-change",""),this.$emit("on-clear")},setData(t,e){this.departmentTitle=e,this.multiple?this.departmentId=t:(this.departmentId=[],this.departmentId.push(t)),this.$emit("on-change",this.departmentId)}},mounted(){this.initDepartmentData()}},r=n,d=(a("b913"),a("2877")),c=Object(d["a"])(r,i,s,!1,null,null,null);e["default"]=c.exports}}]);