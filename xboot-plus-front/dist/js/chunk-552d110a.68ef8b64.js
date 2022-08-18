(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-552d110a"],{6420:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("Card",[e("Row",{staticClass:"operation",attrs:{align:"middle",justify:"space-between"}},[e("div",[e("Button",{directives:[{name:"show",rawName:"v-show",value:"tree"==t.showType,expression:"showType == 'tree'"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加子类别")]),e("Button",{attrs:{icon:"md-add"},on:{click:t.addRoot}},[t._v("添加一级类别")]),e("Button",{attrs:{icon:"md-trash"},on:{click:t.delAll}},[t._v("批量删除")]),e("Button",{attrs:{icon:"md-refresh"},on:{click:t.getParentList}},[t._v("刷新")]),e("Input",{directives:[{name:"show",rawName:"v-show",value:"list"==t.showType,expression:"showType == 'list'"}],staticStyle:{width:"250px"},attrs:{suffix:"ios-search",placeholder:"输入名称搜索",clearable:""},on:{"on-change":t.search},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),e("i-switch",{directives:[{name:"show",rawName:"v-show",value:"tree"==t.showType,expression:"showType == 'tree'"}],staticStyle:{"margin-left":"5px"},attrs:{size:"large"},model:{value:t.strict,callback:function(e){t.strict=e},expression:"strict"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("级联")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("单选")])])],1),e("div",[e("RadioGroup",{attrs:{type:"button"},model:{value:t.showType,callback:function(e){t.showType=e},expression:"showType"}},[e("Radio",{attrs:{title:"树结构",label:"tree"}},[e("Icon",{attrs:{type:"md-list"}})],1),e("Radio",{attrs:{title:"列表",label:"list"}},[e("Icon",{attrs:{type:"ios-apps"}})],1)],1)],1)]),e("Row",{directives:[{name:"show",rawName:"v-show",value:"tree"==t.showType,expression:"showType == 'tree'"}],attrs:{type:"flex",justify:"start",gutter:16}},[e("Col",{attrs:{sm:8,md:8,lg:8,xl:6}},[e("Alert",{attrs:{"show-icon":""}},[t._v(" 当前选择编辑： "),e("span",{staticClass:"select-title"},[t._v(t._s(t.editTitle))]),e("a",{directives:[{name:"show",rawName:"v-show",value:t.form.id&&t.editTitle,expression:"form.id && editTitle"}],staticClass:"select-clear",on:{click:t.cancelEdit}},[t._v("取消选择")])]),e("Input",{attrs:{suffix:"ios-search",placeholder:"输入节点名搜索",clearable:""},on:{"on-change":t.search},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),e("div",{staticStyle:{position:"relative"}},[e("div",{staticClass:"tree-bar"},[e("Tree",{ref:"tree",attrs:{data:t.data,"load-data":t.loadData,render:t.renderContent,"show-checkbox":"","check-strictly":!t.strict},on:{"on-check-change":t.changeSelect,"on-select-change":t.selectTree}})],1),t.loading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1),e("Col",{attrs:{sm:16,md:16,lg:16,xl:9}},[e("Form",{ref:"form",attrs:{model:t.form,"label-width":85,rules:t.formValidate}},[e("FormItem",{staticClass:"form-noheight",attrs:{label:"上级节点",prop:"parentTitle"}},[e("div",{staticStyle:{display:"flex"}},[e("Input",{staticStyle:{"margin-right":"10px"},attrs:{readonly:""},model:{value:t.form.parentTitle,callback:function(e){t.$set(t.form,"parentTitle",e)},expression:"form.parentTitle"}}),e("Poptip",{attrs:{transfer:"",trigger:"click",placement:"right-start",title:"选择上级节点",width:"250"}},[e("Button",{attrs:{icon:"md-list"}},[t._v("选择分类")]),e("div",{staticClass:"tree-bar tree-select",attrs:{slot:"content"},slot:"content"},[e("Tree",{attrs:{data:t.dataEdit,"load-data":t.loadData},on:{"on-select-change":t.selectTreeEdit}}),t.loadingEdit?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)]),e("FormItem",{attrs:{label:"节点类型",prop:"type"}},[e("Select",{attrs:{placeholder:"请选择"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[e("Option",{attrs:{value:"0"}},[t._v("分组")]),e("Option",{attrs:{value:"1"}},[t._v("类别")])],1)],1),e("FormItem",{attrs:{label:"类别名称",prop:"title"}},[e("Input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[e("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[e("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.form.sortOrder,callback:function(e){t.$set(t.form,"sortOrder",e)},expression:"form.sortOrder"}})],1)],1),e("FormItem",{attrs:{label:"是否启用",prop:"status"}},[e("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1),e("FormItem",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,disabled:!t.form.id||!t.editTitle,type:"primary"},on:{click:t.submitEdit}},[t._v("修改并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)],1),e("Alert",{directives:[{name:"show",rawName:"v-show",value:"list"==t.showType,expression:"showType == 'list'"}],attrs:{"show-icon":""}},[t._v(" 已选择 "),e("span",{staticClass:"select-count"},[t._v(t._s(t.selectList.length))]),t._v(" 项 "),e("a",{staticClass:"select-clear",on:{click:t.clearSelectAll}},[t._v("清空")])]),"list"==t.showType?e("Table",{ref:"table",attrs:{"row-key":"title","load-data":t.loadData,columns:t.columns,data:t.data,loading:t.loading,border:"","update-show-children":!0},on:{"on-selection-change":t.showSelect}}):t._e()],1),e("Modal",{attrs:{title:t.modalTitle,"mask-closable":!1,width:500},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("Form",{ref:"formAdd",attrs:{model:t.formAdd,"label-width":85,rules:t.formValidate}},[t.showParent?e("div",[e("FormItem",{attrs:{label:"上级节点："}},[t._v(t._s(t.form.title))])],1):t._e(),e("FormItem",{attrs:{label:"节点类型",prop:"type"}},[e("Select",{attrs:{placeholder:"请选择"},model:{value:t.formAdd.type,callback:function(e){t.$set(t.formAdd,"type",e)},expression:"formAdd.type"}},[e("Option",{attrs:{value:"0"}},[t._v("分组")]),e("Option",{attrs:{value:"1"}},[t._v("类别")])],1)],1),e("FormItem",{attrs:{label:"类别名称",prop:"title"}},[e("Input",{model:{value:t.formAdd.title,callback:function(e){t.$set(t.formAdd,"title",e)},expression:"formAdd.title"}})],1),e("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[e("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[e("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.formAdd.sortOrder,callback:function(e){t.$set(t.formAdd,"sortOrder",e)},expression:"formAdd.sortOrder"}})],1)],1),e("FormItem",{attrs:{label:"是否启用",prop:"status"}},[e("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:t.formAdd.status,callback:function(e){t.$set(t.formAdd,"status",e)},expression:"formAdd.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:t.cancelAdd}},[t._v("取消")]),e("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.submitAdd}},[t._v("提交")])],1)],1)],1)},i=[],a=s("81c1"),o={name:"category-manage",data(){return{showType:"tree",strict:!0,loading:!0,loadingEdit:!0,modalVisible:!1,selectList:[],showParent:!1,modalTitle:"",editTitle:"",searchKey:"",form:{id:"",title:"",parentId:"",parentTitle:"",type:"0",sortOrder:0,status:0,url:""},formAdd:{type:null},formValidate:{title:[{required:!0,message:"名称不能为空",trigger:"blur"}],type:[{required:!0,message:"类型不能为空",trigger:"change"}],sortOrder:[{required:!0,type:"number",message:"排序值不能为空",trigger:"change"}]},submitLoading:!1,data:[],dataEdit:[],columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"名称",key:"title",minWidth:120,sortable:!0,tree:!0,render:(t,e)=>{let s="";return"0"==e.row.type?s="md-folder-open":"1"==e.row.type&&(s="ios-bookmark-outline"),t("span",[t("span",[t("Icon",{props:{type:s,size:"16"},style:{"margin-right":"8px"}}),t("span",e.row.title)])])}},{title:"排序",key:"sortOrder",width:150,sortable:!0,align:"center",sortType:"asc"},{title:"创建时间",key:"createTime",sortable:!0,width:200},{title:"操作",key:"action",width:300,align:"center",render:(t,e)=>t("div",[t("a",{on:{click:()=>{this.tableAdd(e.row)}}},"添加子类别"),t("Divider",{props:{type:"vertical"}}),t("a",{on:{click:()=>{this.remove(e.row)}}},"删除")])}]}},methods:{init(){this.getParentList(),this.getParentListEdit()},renderContent(t,{root:e,node:s,data:r}){let i="";return"0"==r.type?i="md-folder-open":"1"==r.type&&(i="ios-bookmark-outline"),t("span",[t("span",[t("Icon",{props:{type:i,size:"16"},style:{"margin-right":"8px"}}),t("span",r.title)])])},getParentList(){this.loading=!0,Object(a["N"])().then(t=>{this.loading=!1,t.success&&(t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[],t._loading=!1)})),this.data=t.result)})},getParentListEdit(){this.loadingEdit=!0,Object(a["N"])().then(t=>{if(this.loadingEdit=!1,t.success){t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[])}));let e={id:"0",title:"一级节点"};t.result.unshift(e),this.dataEdit=t.result}})},loadData(t,e){Object(a["O"])(t.id).then(t=>{t.success&&(t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[],t._loading=!1)})),e(t.result))})},search(){this.searchKey?(this.loading=!0,Object(a["R"])({title:this.searchKey}).then(t=>{this.loading=!1,t.success&&(t.result.forEach((function(t){t.isParent&&(t.loading=!1,t.children=[],t._loading=!1)})),this.data=t.result)})):this.getParentList()},selectTree(t){if(t.length>0){this.$refs.form.resetFields();for(let r in t[0])null==t[0][r]&&(t[0][r]="");let e=JSON.stringify(t[0]),s=JSON.parse(e);s.type+="",this.form=s,this.editTitle=s.title}else this.cancelEdit()},cancelEdit(){let t=this.$refs.tree.getSelectedNodes()[0];t&&(t.selected=!1),this.$refs.form.resetFields(),this.form.id="",delete this.form.id,this.editTitle=""},selectTreeEdit(t){if(t){for(let r in t[0])null==t[0][r]&&(t[0][r]="");let e=JSON.stringify(t[0]),s=JSON.parse(e);if(this.form.id==s.id)return this.$Message.warning("请勿选择自己作为父节点"),void(t[0].selected=!1);this.form.parentId=s.id,this.form.parentTitle=s.title}},cancelAdd(){this.modalVisible=!1},handleReset(){this.$refs.form.resetFields(),this.form.status=0},submitEdit(){this.$refs.form.validate(t=>{if(t){if(!this.form.id)return void this.$Message.warning("请先点击选择要修改的节点");this.submitLoading=!0,Object(a["u"])(this.form).then(t=>{this.submitLoading=!1,t.success&&(this.editTitle=this.form.title,this.$Message.success("编辑成功"),this.init(),this.modalVisible=!1)})}})},submitAdd(){this.$refs.formAdd.validate(t=>{t&&(this.submitLoading=!0,Object(a["a"])(this.formAdd).then(t=>{this.submitLoading=!1,t.success&&(this.$Message.success("添加成功"),this.init(),this.modalVisible=!1)}))})},add(){""!=this.form.id&&null!=this.form.id?(this.modalTitle="添加子类别",this.showParent=!0,this.form.children||(this.form.children=[]),this.formAdd={parentId:this.form.id,sortOrder:this.form.children.length+1,status:0,icon:"",type:"0"},this.modalVisible=!0):this.$Message.warning("请先点击选择一个节点")},addRoot(){this.modalTitle="添加一级类别",this.showParent=!1,this.formAdd={parentId:0,sortOrder:this.data.length+1,status:0,icon:"",type:"0"},this.modalVisible=!0},changeSelect(t){this.selectList=t},clearSelectAll(){this.$refs.table.selectAll(!1)},tableAdd(t){this.form=t,this.add(),this.editTitle="";let e=this.$refs.tree.getSelectedNodes()[0];e&&(e.selected=!1)},showSelect(t){this.selectList=t},remove(t){this.selectList=[],this.selectList.push(t),this.delAll()},delAll(){this.selectList.length<=0?this.$Message.warning("您还未勾选要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectList.length+" 条数据及其下级所有数据?",loading:!0,onOk:()=>{let t="";this.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(a["l"])({ids:t}).then(t=>{this.$Modal.remove(),t.success&&(this.$Message.success("删除成功"),this.selectList=[],this.cancelEdit(),this.init())})}})}},mounted(){this.init()}},n=o,l=(s("e885"),s("2877")),c=Object(l["a"])(n,r,i,!1,null,null,null);e["default"]=c.exports},"81c1":function(t,e,s){"use strict";s.d(e,"x",(function(){return i})),s.d(e,"r",(function(){return a})),s.d(e,"y",(function(){return o})),s.d(e,"D",(function(){return n})),s.d(e,"F",(function(){return l})),s.d(e,"c",(function(){return c})),s.d(e,"s",(function(){return d})),s.d(e,"o",(function(){return u})),s.d(e,"J",(function(){return h})),s.d(e,"U",(function(){return f})),s.d(e,"X",(function(){return m})),s.d(e,"i",(function(){return p})),s.d(e,"K",(function(){return b})),s.d(e,"v",(function(){return g})),s.d(e,"w",(function(){return y})),s.d(e,"p",(function(){return v})),s.d(e,"L",(function(){return O})),s.d(e,"B",(function(){return w})),s.d(e,"I",(function(){return k})),s.d(e,"C",(function(){return T})),s.d(e,"G",(function(){return j})),s.d(e,"H",(function(){return x})),s.d(e,"V",(function(){return I})),s.d(e,"q",(function(){return P})),s.d(e,"j",(function(){return _})),s.d(e,"T",(function(){return A})),s.d(e,"t",(function(){return B})),s.d(e,"M",(function(){return $})),s.d(e,"k",(function(){return L})),s.d(e,"P",(function(){return C})),s.d(e,"Q",(function(){return S})),s.d(e,"z",(function(){return E})),s.d(e,"e",(function(){return N})),s.d(e,"f",(function(){return F})),s.d(e,"g",(function(){return M})),s.d(e,"n",(function(){return V})),s.d(e,"N",(function(){return R})),s.d(e,"O",(function(){return K})),s.d(e,"a",(function(){return z})),s.d(e,"u",(function(){return J})),s.d(e,"l",(function(){return D})),s.d(e,"R",(function(){return q})),s.d(e,"A",(function(){return H})),s.d(e,"d",(function(){return U})),s.d(e,"S",(function(){return G})),s.d(e,"h",(function(){return W})),s.d(e,"m",(function(){return Q})),s.d(e,"E",(function(){return X})),s.d(e,"b",(function(){return Y})),s.d(e,"W",(function(){return Z}));var r=s("7f80");const i="/xboot/actModel/export/",a="/xboot/actModel/deployByFile",o="/xboot/actProcess/export",n="/xboot/actProcess/getHighlightImg/",l=t=>Object(r["b"])("/actModel/getByCondition",t),c=t=>Object(r["e"])("/actModel/add",t),d=(t,e)=>Object(r["b"])("/actModel/deploy/"+t,e),u=t=>Object(r["e"])("/actModel/delByIds",t),h=t=>Object(r["b"])("/actProcess/getByCondition",t),f=t=>Object(r["e"])("/actProcess/updateInfo",t),m=t=>Object(r["e"])("/actProcess/updateStatus",t),p=(t,e)=>Object(r["b"])("/actProcess/convertToModel/"+t,e),b=(t,e)=>Object(r["b"])("/actProcess/getProcessNode/"+t,e),g=t=>Object(r["e"])("/actProcess/editNodeUser",t),y=t=>Object(r["e"])("/actProcess/editStartUser",t),v=t=>Object(r["e"])("/actProcess/delByIds",t),O=t=>Object(r["b"])("/actProcess/getRunningProcess",t),w=t=>Object(r["b"])("/actProcess/getFinishedProcess",t),k=(t,e)=>Object(r["b"])("/actProcess/getByKey/"+t,e),T=(t,e)=>Object(r["b"])("/actProcess/getFirstNode/"+t,e),j=(t,e,s)=>Object(r["b"])(`/actProcess/getNextNode/${t}/${e}`,s),x=(t,e)=>Object(r["b"])("/actProcess/getNode/"+t,e),I=t=>Object(r["e"])("/actProcess/updateInsStatus",t),P=t=>Object(r["e"])("/actProcess/delInsByIds",t),_=t=>Object(r["e"])("/actProcess/delHistoricInsByIds",t),A=t=>Object(r["b"])("/actTask/todoList",t),B=t=>Object(r["b"])("/actTask/doneList",t),$=(t,e)=>Object(r["b"])("/actTask/historicFlow/"+t,e),L=t=>Object(r["e"])("/actTask/delegate",t),C=t=>Object(r["e"])("/actTask/pass",t),S=t=>Object(r["e"])("/actTask/passAll",t),E=(t,e)=>Object(r["b"])("/actTask/getBackList/"+t,e),N=t=>Object(r["e"])("/actTask/back",t),F=t=>Object(r["e"])("/actTask/backAll",t),M=t=>Object(r["e"])("/actTask/backToTask",t),V=t=>Object(r["e"])("/actTask/deleteHistoric",t),R=t=>Object(r["b"])("/actCategory/getByParentId/0",t),K=(t,e)=>Object(r["b"])("/actCategory/getByParentId/"+t,e),z=t=>Object(r["e"])("/actCategory/add",t),J=t=>Object(r["e"])("/actCategory/edit",t),D=t=>Object(r["e"])("/actCategory/delByIds",t),q=t=>Object(r["b"])("/actCategory/search",t),H=t=>Object(r["b"])("/actBusiness/getByCondition",t),U=t=>Object(r["e"])("/actBusiness/apply",t),G=t=>Object(r["e"])("/actBusiness/start",t),W=t=>Object(r["e"])("/actBusiness/cancel",t),Q=t=>Object(r["e"])("/actBusiness/delByIds",t),X=(t,e)=>Object(r["b"])("/leave/get/"+t,e),Y=t=>Object(r["e"])("/leave/add",t),Z=t=>Object(r["f"])("/leave/update",t)},"9c27":function(t,e,s){},e885:function(t,e,s){"use strict";s("9c27")}}]);