(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21ea50ec"],{bfd4:function(e,t,s){"use strict";s("cc9c")},c349:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},[t("Card",[t("Row",{attrs:{type:"flex",justify:"space-between"}},[t("Col",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],attrs:{span:"5"}},[t("Alert",{attrs:{"show-icon":""}},[e._v(" 当前选择： "),t("span",{staticClass:"select-title"},[e._v(e._s(e.editTitle))]),e.editTitle?t("a",{staticClass:"select-clear",on:{click:e.cancelEdit}},[e._v("取消选择")]):e._e()]),t("Input",{attrs:{suffix:"ios-search",placeholder:"输入节点名搜索",clearable:""},on:{"on-change":e.search},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),t("div",{staticStyle:{position:"relative"}},[t("div",{staticClass:"tree-bar",style:{maxHeight:e.maxHeight}},[t("Tree",{ref:"tree",attrs:{data:e.treeData,"load-data":e.loadData},on:{"on-select-change":e.selectTree}})],1),e.treeLoading?t("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1),t("div",{staticClass:"expand"},[t("Icon",{staticClass:"icon",attrs:{type:e.expandIcon,size:"16"},on:{click:e.changeExpand}})],1),t("Col",{attrs:{span:e.span}},[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}]},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":50}},[t("FormItem",{attrs:{label:"名称",prop:"name"}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("FormItem",{attrs:{label:"状态",prop:"status"}},[t("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}},[t("Option",{attrs:{value:"0"}},[e._v("正常")]),t("Option",{attrs:{value:"-1"}},[e._v("禁用")])],1)],1),t("FormItem",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1),t("Row",{staticClass:"operation"},[t("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加")]),t("Button",{attrs:{icon:"md-trash"},on:{click:e.delAll}},[e._v("批量删除")]),t("Button",{attrs:{icon:"md-refresh"},on:{click:e.getDataList}},[e._v("刷新")]),t("Button",{attrs:{type:"dashed"},on:{click:function(t){e.openSearch=!e.openSearch}}},[e._v(e._s(e.openSearch?"关闭搜索":"开启搜索"))]),t("Button",{attrs:{type:"dashed"},on:{click:function(t){e.openTip=!e.openTip}}},[e._v(e._s(e.openTip?"关闭提示":"开启提示"))])],1),t("Alert",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}],attrs:{"show-icon":""}},[e._v(" 已选择 "),t("span",{staticClass:"select-count"},[e._v(e._s(e.selectList.length))]),e._v(" 项 "),t("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])]),t("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,sortable:"custom"},on:{"on-sort-change":e.changeSort,"on-selection-change":e.showSelect}}),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)],1),t("Modal",{attrs:{title:e.modalTitle,"mask-closable":!1,width:500},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[t("Form",{ref:"form",attrs:{model:e.form,"label-width":70,rules:e.formValidate}},[t("FormItem",{attrs:{label:"名称",prop:"name"}},[t("Input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"text"},on:{click:function(t){e.modalVisible=!1}}},[e._v("取消")]),t("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.handelSubmit}},[e._v("提交")])],1)],1)],1)},i=[],r={name:"treeAndTable",data(){return{openSearch:!0,openTip:!0,treeLoading:!1,maxHeight:"500px",loading:!1,editTitle:"",searchKey:"",expand:!0,span:18,expandIcon:"ios-arrow-back",selectNode:{},treeData:[],selectList:[],searchForm:{name:"",status:"",pageNumber:1,pageSize:10,sort:"createTime",order:"desc"},modalType:0,modalVisible:!1,modalTitle:"",form:{name:"",sex:1,type:0},formValidate:{name:[{required:!0,message:"不能为空",trigger:"blur"}]},columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"名称",key:"name",minWidth:200,sortable:!0},{title:"描述",key:"description",minWidth:200,sortable:!0},{title:"状态",key:"status",align:"center",width:150,render:(e,t)=>0==t.row.status?e("div",[e("Badge",{props:{status:"success",text:"启用"}})]):-1==t.row.status?e("div",[e("Badge",{props:{status:"error",text:"禁用"}})]):void 0},{title:"创建时间",key:"createTime",width:200,sortable:!0,sortType:"desc"},{title:"操作",key:"action",width:150,align:"center",fixed:"right",render:(e,t)=>e("div",[e("a",{on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Divider",{props:{type:"vertical"}}),e("a",{on:{click:()=>{this.remove(t.row)}}},"删除")])}],submitLoading:!1,data:[],total:0}},methods:{init(){this.getParentList(),this.getDataList()},getParentList(){this.treeData=[{title:"一级1",id:"1",parentId:"0",parentTitle:"一级节点",status:0,loading:!1,children:[{title:"二级1",id:"2",parentId:"1",status:0,parentTitle:"一级1"}]},{title:"一级2",id:"3",parentId:"0",parentTitle:"一级节点",status:0}]},loadData(e,t){},search(){this.searchKey?this.treeData=[{title:"这里需要请求后端接口",id:"1",parentId:"0",parentTitle:"一级节点",status:0},{title:"所以这里是假数据",id:"4",parentId:"0",parentTitle:"一级节点",status:0},{title:"我是被禁用的节点",id:"5",parentId:"0",parentTitle:"一级节点",status:-1}]:this.getParentList()},selectTree(e){if(e.length>0){for(let a in e[0])null==e[0][a]&&(e[0][a]="");let t=JSON.stringify(e[0]),s=JSON.parse(t);this.selectNode=s,this.editTitle=s.title,this.getDataList()}else this.cancelEdit()},cancelEdit(){let e=this.$refs.tree.getSelectedNodes()[0];e&&(e.selected=!1),this.selectNode={},this.editTitle="",this.getDataList()},changeSelect(e){this.selectList=e},changeExpand(){this.expand=!this.expand,this.expand?(this.expandIcon="ios-arrow-back",this.span=18):(this.expandIcon="ios-arrow-forward",this.span=23)},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},getDataList(){this.loading=!0,this.searchForm.selectId=this.selectNode.id,this.selectNode.id?"1"==this.selectNode.id?this.data=[{id:"1",name:"XBoot",description:"我是一级1的数据",status:0,createTime:"2018-08-08 00:08:00"}]:"2"==this.selectNode.id?this.data=[{id:"2",name:"Exrick",description:"我是二级1的数据",status:0,createTime:"2018-08-08 00:08:00"}]:"3"==this.selectNode.id&&(this.data=[{id:"3",name:"Present By Exrick",description:"我是一级2的数据",status:-1,createTime:"2018-08-08 00:08:00"}]):this.data=[{id:"1",name:"XBoot",description:"我是一级1的数据",status:0,createTime:"2018-08-08 00:08:00"},{id:"2",name:"Exrick",description:"我是二级1的数据",status:0,createTime:"2018-08-08 00:08:00"},{id:"3",name:"XBoot",description:"我是一级2的数据",status:-1,createTime:"2018-08-08 00:08:00"}],this.total=this.data.length,this.loading=!1},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"==e.order&&(this.searchForm.order=""),this.getDataList()},showSelect(e){this.selectList=e},clearSelectAll(){this.$refs.table.selectAll(!1)},add(){this.modalType=0,this.modalTitle="添加",this.$refs.form.resetFields(),this.modalVisible=!0},edit(e){this.modalType=1,this.modalTitle="编辑",this.$refs.form.resetFields();for(let a in e)null==e[a]&&(e[a]="");let t=JSON.stringify(e),s=JSON.parse(t);this.form=s,this.modalVisible=!0},handelSubmit(){this.$refs.form.validate(e=>{e&&(this.submitLoading=!0,0==this.modalType?(delete this.form.id,delete this.form.status,this.submitLoading=!1,this.$Message.success("操作成功"),this.modalVisible=!1):1==this.modalType&&(this.submitLoading=!1,this.$Message.success("操作成功"),this.modalVisible=!1))})},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+e.name+" ?",loading:!0,onOk:()=>{this.$Message.success("操作成功"),this.clearSelectAll(),this.$Modal.remove(),this.getDataList()}})},delAll(){this.selectList.length<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectList.length+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),this.$Message.success("操作成功"),this.$Modal.remove(),this.clearSelectAll(),this.getDataList()}})}},mounted(){let e=document.documentElement.clientHeight;this.maxHeight=Number(e-287)+"px",this.init()}},l=r,o=(s("bfd4"),s("2877")),n=Object(o["a"])(l,a,i,!1,null,null,null);t["default"]=n.exports},cc9c:function(e,t,s){}}]);