(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a01c58d","chunk-baeed606","chunk-2d0d7882"],{"0a3d":function(t,e,s){"use strict";s("6ce1")},"38be":function(t,e,s){},"3a08":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("Card",[e("Row",{staticClass:"operation",attrs:{align:"middle",justify:"space-between"}},[e("div",[e("Button",{directives:[{name:"show",rawName:"v-show",value:"tree"==t.showType,expression:"showType == 'tree'"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加子节点")]),e("Button",{attrs:{icon:"md-add"},on:{click:t.addRoot}},[t._v("添加顶部菜单")]),e("Button",{attrs:{icon:"md-trash"},on:{click:t.delAll}},[t._v("批量删除")]),e("Button",{directives:[{name:"show",rawName:"v-show",value:"list"==t.showType,expression:"showType == 'list'"}],attrs:{icon:"md-refresh"},on:{click:t.getParentList}},[t._v("刷新")]),e("Dropdown",{directives:[{name:"show",rawName:"v-show",value:"tree"==t.showType,expression:"showType == 'tree'"}],on:{"on-click":t.handleDropdown}},[e("Button",[t._v(" 更多操作 "),e("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e("DropdownItem",{attrs:{name:"refresh"}},[t._v("刷新")]),e("DropdownItem",{attrs:{name:"expandOne"}},[t._v("收合所有")]),e("DropdownItem",{attrs:{name:"expandTwo"}},[t._v("仅展开一级")]),e("DropdownItem",{attrs:{name:"expandThree"}},[t._v("仅展开两级")]),e("DropdownItem",{attrs:{name:"expandAll"}},[t._v("展开所有")])],1)],1),e("Input",{directives:[{name:"show",rawName:"v-show",value:"list"==t.showType,expression:"showType == 'list'"}],staticStyle:{width:"250px"},attrs:{suffix:"ios-search",placeholder:"输入菜单名搜索",clearable:""},on:{"on-change":t.search},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),e("i-switch",{directives:[{name:"show",rawName:"v-show",value:"tree"==t.showType,expression:"showType == 'tree'"}],staticStyle:{"margin-left":"5px"},attrs:{size:"large"},model:{value:t.strict,callback:function(e){t.strict=e},expression:"strict"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("级联")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("单选")])])],1),e("div",[e("RadioGroup",{attrs:{type:"button"},model:{value:t.showType,callback:function(e){t.showType=e},expression:"showType"}},[e("Radio",{attrs:{title:"树结构",label:"tree"}},[e("Icon",{attrs:{type:"md-list"}})],1),e("Radio",{attrs:{title:"列表",label:"list"}},[e("Icon",{attrs:{type:"ios-apps"}})],1)],1)],1)]),e("Alert",{directives:[{name:"show",rawName:"v-show",value:"list"==t.showType,expression:"showType == 'list'"}],attrs:{"show-icon":""}},[t._v(" 已选择 "),e("span",{staticClass:"select-count"},[t._v(t._s(t.selectList.length))]),t._v(" 项 "),e("a",{staticClass:"select-clear",on:{click:t.clearSelectAll}},[t._v("清空")])]),"list"==t.showType?e("Table",{ref:"table",attrs:{"row-key":"title","load-data":t.loadData,columns:t.columns,data:t.tableData,loading:t.loading,border:"","update-show-children":!0},on:{"on-selection-change":t.showSelect}}):t._e(),e("Row",{directives:[{name:"show",rawName:"v-show",value:"tree"==t.showType,expression:"showType == 'tree'"}],attrs:{type:"flex",justify:"start",gutter:16}},[e("Col",{attrs:{sm:8,md:8,lg:8,xl:6}},[e("Alert",{attrs:{"show-icon":""}},[t._v(" 当前选择编辑： "),e("span",{staticClass:"select-title"},[t._v(t._s(t.editTitle))]),e("a",{directives:[{name:"show",rawName:"v-show",value:t.form.id&&t.editTitle,expression:"form.id && editTitle"}],staticClass:"select-clear",on:{click:t.cancelEdit}},[t._v("取消选择")])]),e("Input",{attrs:{suffix:"ios-search",placeholder:"输入菜单名搜索",clearable:""},on:{"on-change":t.search},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),e("div",{staticStyle:{position:"relative"}},[e("div",{staticClass:"tree-bar",style:{maxHeight:t.maxHeight}},[e("Tree",{ref:"tree",attrs:{data:t.data,"show-checkbox":"",render:t.renderContent,"check-strictly":!t.strict},on:{"on-select-change":t.selectTree,"on-check-change":t.changeSelect}})],1),t.loading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1),e("Col",{attrs:{sm:16,md:16,lg:16,xl:9}},[e("Form",{ref:"form",attrs:{model:t.form,"label-width":110}},[e("FormItem",{attrs:{label:"类型",prop:"type"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:-1==t.form.type,expression:"form.type == -1"}]},[e("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"ios-navigate-outline",size:"16"}}),e("span",[t._v("顶部菜单")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.form.type,expression:"form.type == 0"}]},[e("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"ios-list-box-outline",size:"16"}}),e("span",[t._v("页面菜单")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.form.type,expression:"form.type == 1"}]},[e("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-radio-button-on",size:"16"}}),e("span",[t._v("操作按钮")])],1)]),e("FormItem",{staticClass:"form-noheight",attrs:{label:"上级菜单",prop:"parentTitle"}},[e("div",{staticStyle:{display:"flex"}},[e("Input",{staticStyle:{"margin-right":"10px"},attrs:{readonly:""},model:{value:t.form.parentTitle,callback:function(e){t.$set(t.form,"parentTitle",e)},expression:"form.parentTitle"}}),e("Poptip",{attrs:{transfer:"",trigger:"click",placement:"right-start",title:"选择上级菜单",width:"250"}},[e("Button",{attrs:{icon:"md-list"}},[t._v("选择菜单")]),e("div",{staticClass:"tree-bar tree-select",attrs:{slot:"content"},slot:"content"},[e("Tree",{attrs:{data:t.dataEdit},on:{"on-select-change":t.selectTreeEdit}}),t.loading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)]),-1==t.form.type||0==t.form.type?e("FormItem",{attrs:{label:"名称",prop:"title",rules:{required:!0,message:"名称不能为空",trigger:"blur"}}},[e("div",{staticStyle:{display:"flex"}},[e("div",{staticStyle:{width:"100%"}},[e("Input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}},[e("Poptip",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{slot:"append",transfer:"",trigger:"hover",title:"多语言",placement:"right",width:"350"},slot:"append"},[e("Button",{attrs:{icon:"ios-globe-outline"}}),e("div",{attrs:{slot:"content"},slot:"content"},[e("Form",{attrs:{"label-width":80}},[e("FormItem",{attrs:{label:"启用多语言"}},[e("i-switch",{attrs:{size:"large"},model:{value:t.form.localize,callback:function(e){t.$set(t.form,"localize",e)},expression:"form.localize"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),e("FormItem",{attrs:{label:"多语言Key"}},[e("Input",{attrs:{placeholder:"输入用于渲染I18n的$t('KEY')"},model:{value:t.form.i18n,callback:function(e){t.$set(t.form,"i18n",e)},expression:"form.i18n"}})],1)],1)],1)],1)],1)],1)])]):t._e(),1==t.form.type?e("FormItem",{staticClass:"block-tool",attrs:{label:"名称",prop:"title",rules:{required:!0,message:"名称不能为空",trigger:"blur"}}},[e("Tooltip",{attrs:{placement:"right",content:"操作按钮名称不得重复"}},[e("Input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1):t._e(),0==t.form.type?e("FormItem",{attrs:{label:"路径",prop:"path",rules:{required:!0,message:"路径不能为空",trigger:"blur"}}},[e("Input",{model:{value:t.form.path,callback:function(e){t.$set(t.form,"path",e)},expression:"form.path"}})],1):t._e(),1==t.form.type?e("FormItem",{staticClass:"block-tool",attrs:{label:"请求路径",prop:"path",required:!1}},[e("Tooltip",{attrs:{placement:"right","max-width":230,transfer:"",content:"填写后端请求URL，后端将作权限拦截，若无可留空"}},[e("Input",{model:{value:t.form.path,callback:function(e){t.$set(t.form,"path",e)},expression:"form.path"}})],1)],1):t._e(),1==t.form.type?e("FormItem",{attrs:{label:"按钮权限类型",prop:"buttonType"}},[e("dict",{attrs:{dict:"permission_type",placeholder:"请选择或输入搜索",filterable:"",clearable:""},model:{value:t.form.buttonType,callback:function(e){t.$set(t.form,"buttonType",e)},expression:"form.buttonType"}})],1):t._e(),-1==t.form.type?e("FormItem",{staticClass:"block-tool",attrs:{label:"英文名",prop:"name",rules:{required:!0,message:"英文名不能为空",trigger:"blur"}}},[e("Tooltip",{attrs:{placement:"right",content:"需唯一"}},[e("Input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1):t._e(),0==t.form.type?e("FormItem",{staticClass:"block-tool",attrs:{label:"路由英文名",prop:"name",rules:{required:!0,message:"路由英文名不能为空",trigger:"blur"}}},[e("Tooltip",{attrs:{placement:"right",content:"需唯一",transfer:""}},[e("Input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1):t._e(),-1==t.form.type||0==t.form.type?e("FormItem",{attrs:{label:"图标",prop:"icon",rules:{required:!0,message:"图标不能为空",trigger:"blur"}}},[e("icon-choose",{attrs:{showCustom:"",showInput:""},model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}})],1):t._e(),-1==t.form.type?e("FormItem",{attrs:{label:"显示红点",prop:"component"}},[e("i-switch",{attrs:{size:"large","true-value":"hot","false-value":"normal"},model:{value:t.form.component,callback:function(e){t.$set(t.form,"component",e)},expression:"form.component"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1):t._e(),-1==t.form.type?e("FormItem",{attrs:{label:"系统站内菜单",prop:"isMenu"}},[e("i-switch",{attrs:{size:"large"},model:{value:t.form.isMenu,callback:function(e){t.$set(t.form,"isMenu",e)},expression:"form.isMenu"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])],1):t._e(),-1!=t.form.type||t.form.isMenu?t._e():e("FormItem",{attrs:{label:"其他链接",prop:"url",rules:{required:!0,message:"其他链接不能为空",trigger:"blur"}}},[e("Input",{attrs:{placeholder:"Http链接或路由名"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),-1!=t.form.type||t.form.isMenu?t._e():e("FormItem",{attrs:{label:"打开方式",prop:"description",rules:{required:!0,message:"请选择打开方式",trigger:"change"}}},[e("Select",{attrs:{placeholder:"请选择"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}},[e("Option",{attrs:{value:"direct",label:"直接跳转"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("直接跳转")]),e("span",{staticStyle:{color:"#ccc"}},[t._v("其他链接填写完整链接")])]),e("Option",{attrs:{value:"window",label:"新窗口打开"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("新窗口打开")]),e("span",{staticStyle:{color:"#ccc"}},[t._v("其他链接填写完整链接")])]),e("Option",{attrs:{value:"route",label:"站内路由"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("站内路由")]),e("span",{staticStyle:{color:"#ccc"}},[t._v("其他链接填写Vue路由名")])])],1)],1),0==t.form.type?e("FormItem",{attrs:{label:"前端组件",prop:"component",rules:{required:!0,message:"前端组件不能为空",trigger:"blur"}}},[e("Input",{model:{value:t.form.component,callback:function(e){t.$set(t.form,"component",e)},expression:"form.component"}})],1):t._e(),0==t.form.type&&2==t.form.level?e("FormItem",{attrs:{label:"第三方链接",prop:"url",required:!1}},[e("Input",{attrs:{placeholder:"http://"},on:{"on-change":t.changeEditUrl},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}}),e("span",{staticClass:"url-remark"},[t._v("前端组件需为 sys/monitor/monitor 时生效")])],1):t._e(),e("FormItem",{attrs:{label:"排序值",prop:"sortOrder",rules:{required:!0,type:"number",message:"前端组件不能为空",trigger:"blur"}}},[e("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[e("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.form.sortOrder,callback:function(e){t.$set(t.form,"sortOrder",e)},expression:"form.sortOrder"}})],1)],1),1==t.form.level?e("FormItem",{staticClass:"block-tool",attrs:{label:"始终显示",prop:"showAlways"}},[e("i-switch",{attrs:{size:"large"},model:{value:t.form.showAlways,callback:function(e){t.$set(t.form,"showAlways",e)},expression:"form.showAlways"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])]),e("Tooltip",{staticStyle:{display:"inline-block !important"},attrs:{content:"当设为不始终显示时，一级菜单下仅有一个子级菜单只会显示该子级菜单，避免用户多次点击",placement:"right",transfer:"","max-width":"280"}},[e("Icon",{staticStyle:{"margin-left":"10px",cursor:"pointer"},attrs:{type:"md-help-circle",size:"20",color:"#c5c5c5"}})],1)],1):t._e(),e("FormItem",{attrs:{label:"是否启用",prop:"status"}},[e("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1),e("FormItem",[e("Button",{staticStyle:{"margin-right":"5px"},attrs:{loading:t.submitLoading,disabled:!t.form.id||!t.editTitle,type:"primary"},on:{click:t.submitEdit}},[t._v("修改并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)],1)],1),e("add",{attrs:{form:t.form,isRoot:t.isRoot,dataLength:t.data.length},on:{"on-submit":t.addSuccess},model:{value:t.showAdd,callback:function(e){t.showAdd=e},expression:"showAdd"}})],1)},o=[],a=s("365c"),l=s("76e2"),i=s("ad40"),n=s("c276"),c=s("7542"),d={name:"menu-manage",components:{dict:l["default"],IconChoose:i["default"],add:c["default"]},data(){return{showType:"tree",columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"菜单名称",key:"title",minWidth:150,sortable:!0,tree:!0},{title:"英文名",key:"name",minWidth:100,sortable:!0},{title:"类型",key:"type",minWidth:120,sortable:!0,align:"center",render:(t,e)=>{let s="",r="",o=e.row.level;return 0==o?(s="ios-navigate",r="顶部菜单"):1==o?(s="md-list-box",r="页面菜单"):2==o?(s="md-list",r="页面菜单"):3==o?(s="md-radio-button-on",r="操作按钮"):s="md-radio-button-off",t("div",[t("Icon",{props:{type:s},style:{margin:"0 5px 0 0"}}),t("span",r)])}},{title:"图标",key:"icon",minWidth:100,sortable:!0,align:"center",render:(t,e)=>t("div",[t("XIcon",{props:{type:e.row.icon}})])},{title:"路径/URL",minWidth:100,key:"path",tooltip:!0},{title:"排序",key:"sortOrder",minWidth:100,sortable:!0,align:"center",sortType:"asc"},{title:"创建时间",key:"createTime",sortable:!0,width:170},{title:"操作",key:"action",width:200,fixed:"right",align:"center",render:(t,e)=>t("div",[t("a",{on:{click:()=>{this.tableAdd(e.row)}}},"添加子节点"),t("Divider",{props:{type:"vertical"}}),t("a",{on:{click:()=>{this.remove(e.row)}}},"删除")])}],loading:!0,strict:!0,maxHeight:"500px",expandLevel:1,selectList:[],searchKey:"",parentTitle:"",isRoot:!1,showAdd:!1,editTitle:"",form:{id:"",title:"",name:"",icon:"",path:"",component:"",parentId:"",buttonType:"",isMenu:!0,type:-1,sortOrder:0,level:0,status:0,url:"",showAlways:!0,parentTitle:""},submitLoading:!1,data:[],dataEdit:[],tableData:[]}},methods:{init(){this.getAllList(),this.getParentList(null,!0)},getParentList(t,e){e||(this.loading=!0),Object(a["mc"])("0").then(t=>{e||(this.loading=!1),t.success&&(t.result.forEach((function(t){t.isParent&&(t.children=[],t._loading=!1)})),this.tableData=t.result)})},loadData(t,e){Object(a["mc"])(t.id).then(t=>{t.success&&(t.result.forEach((function(t){t.isParent&&(t.children=[],t._loading=!1)})),e(t.result))})},renderContent(t,{root:e,node:s,data:r}){let o="md-radio-button-off";return 0==r.level?o="ios-navigate":1==r.level?o="md-list-box":2==r.level?o="md-list":3==r.level&&(o="md-radio-button-on"),t("span",[t("span",[t("Icon",{props:{type:o,size:"16"},style:{"margin-right":"8px","margin-bottom":"3px"}}),t("span",r.title)])])},handleDropdown(t){"expandOne"==t?this.expandLevel=1:"expandTwo"==t?this.expandLevel=2:"expandThree"==t?this.expandLevel=3:"expandAll"==t&&(this.expandLevel=4),this.getAllList()},getAllList(){this.loading=!0,this.getRequest("/permission/getAllList").then(t=>{if(this.loading=!1,t.success){let e=this.expandLevel;t.result.forEach((function(t){1==e?(0==t.level&&(t.expand=!1),t.children&&t.children.length>0&&t.children.forEach((function(t){1==t.level&&(t.expand=!1),t.children&&t.children.length>0&&t.children.forEach((function(t){2==t.level&&(t.expand=!1)}))}))):2==e?(0==t.level&&(t.expand=!0),t.children&&t.children.length>0&&t.children.forEach((function(t){1==t.level&&(t.expand=!1),t.children&&t.children.length>0&&t.children.forEach((function(t){2==t.level&&(t.expand=!1)}))}))):3==e&&(0==t.level&&(t.expand=!0),t.children&&t.children.length>0&&t.children.forEach((function(t){1==t.level&&(t.expand=!0),t.children&&t.children.length>0&&t.children.forEach((function(t){2==t.level&&(t.expand=!1)}))})))})),this.data=t.result;let s=JSON.stringify(t.result);this.dataEdit=JSON.parse(s);let r={id:"0",level:-1,title:"一级菜单"};this.dataEdit.unshift(r)}})},search(){this.searchKey?(this.loading=!0,Object(a["Ec"])({title:this.searchKey}).then(t=>{this.loading=!1,t.success&&(this.data=t.result,this.tableData=t.result)})):(this.getAllList(),this.getParentList())},selectTree(t){if(t.length>0){this.$refs.form.resetFields();for(let r in t[0])null==t[0][r]&&(t[0][r]="");let e=JSON.stringify(t[0]),s=JSON.parse(e);this.form=s,this.editTitle=s.title}else this.cancelEdit()},selectTreeEdit(t){if(t.length>0){for(let o in t[0])null==t[0][o]&&(t[0][o]="");let e=JSON.stringify(t[0]),s=JSON.parse(e);if(this.form.id==s.id)return this.$Message.warning("请勿选择自己作为父节点"),void(t[0].selected=!1);if(this.form.level-1!=s.level)return this.$Message.warning("请选择一个"+this.form.level+"级菜单节点"),void(t[0].selected=!1);this.form.parentId=s.id;let r=s.level+1;r<0&&(r=0),this.form.level=r,this.form.parentTitle=s.title}},cancelEdit(){let t=this.$refs.tree.getSelectedNodes()[0];t&&(t.selected=!1),this.$refs.form.resetFields(),this.form.id="",this.editTitle=""},handleReset(){let t=this.form.type;this.$refs.form.resetFields(),this.form.icon="",this.form.component="",this.form.type=t},submitEdit(){this.$refs.form.validate(t=>{if(t){if(!this.form.id)return void this.$Message.warning("请先点击选择要修改的菜单节点");this.submitLoading=!0,null==this.form.sortOrder&&(this.form.sortOrder=""),null==this.form.buttonType&&(this.form.buttonType=""),1==this.form.type&&(this.form.name="",this.form.icon="",this.form.component=""),Object(a["gb"])(this.form).then(t=>{this.submitLoading=!1,t.success&&(this.editTitle=this.form.title,this.$Message.success("编辑成功"),this.$store.commit("setAdded",!1),n["a"].initRouter(this),this.init())})}})},changeEditUrl(t){let e=t.target.value;e.indexOf("http")>-1&&(this.form.component="sys/monitor/monitor")},addRoot(){this.isRoot=!0,this.showAdd=!0},add(){this.form.id?3!=this.form.level?(this.isRoot=!1,this.showAdd=!0):this.$Modal.warning({title:"抱歉，无法继续添加",content:"左侧菜单最多仅支持二级菜单目录"}):this.$Message.warning("请先点击选择一个菜单权限节点")},tableAdd(t){this.form=t,this.add(),this.editTitle="";let e=this.$refs.tree.getSelectedNodes()[0];e&&(e.selected=!1)},addSuccess(){this.$store.commit("setAdded",!1),n["a"].initRouter(this),this.init()},changeSelect(t){this.selectList=t},showSelect(t){this.selectList=t},clearSelectAll(){this.$refs.table.selectAll(!1)},remove(t){this.selectList=[],this.selectList.push(t),this.delAll()},delAll(){this.selectList.length<=0?this.$Message.warning("您还未勾选要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectList.length+" 条数据及其下级所有数据?",loading:!0,onOk:()=>{let t="";this.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),Object(a["I"])({ids:t}).then(t=>{this.$Modal.remove(),t.success&&(this.$Message.success("删除成功"),this.$store.commit("setAdded",!1),n["a"].initRouter(this),this.selectList=[],this.cancelEdit(),this.init())})}})}},mounted(){let t=document.documentElement.clientHeight;this.maxHeight=Number(t-287)+"px",this.init()}},m=d,p=(s("ff37"),s("2877")),h=Object(p["a"])(m,r,o,!1,null,null,null);e["default"]=h.exports},"6ce1":function(t,e,s){},7542:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-add"},[e("Drawer",{attrs:{title:t.isRoot?"添加顶部菜单":"添加子节点",width:"500",draggable:"",mask:t.showMask,"mask-closable":!1},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("div",{staticClass:"drawer-content",style:{maxHeight:t.maxHeight}},[e("Form",{attrs:{"label-colon":""}},[e("FormItem",{directives:[{name:"show",rawName:"v-show",value:!t.isRoot,expression:"!isRoot"}],attrs:{label:"上级节点"}},[t._v(t._s(t.parentTitle))]),e("FormItem",{attrs:{label:"类型",prop:"type"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:-1==t.formAdd.type,expression:"formAdd.type == -1"}]},[e("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"ios-navigate-outline",size:"16"}}),e("span",[t._v("顶部菜单")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.formAdd.type,expression:"formAdd.type == 0"}]},[e("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"ios-list-box-outline",size:"16"}}),e("span",[t._v("页面菜单")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.formAdd.type,expression:"formAdd.type == 1"}]},[e("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-radio-button-on",size:"16"}}),e("span",[t._v("操作按钮")])],1)])],1),e("Form",{ref:"formAdd",attrs:{model:t.formAdd,"label-position":"top"}},[-1==t.formAdd.type||0==t.formAdd.type?e("FormItem",{attrs:{label:"名称",prop:"title"}},[e("div",{staticStyle:{display:"flex"}},[e("div",{staticStyle:{width:"100%"}},[e("Input",{model:{value:t.formAdd.title,callback:function(e){t.$set(t.formAdd,"title",e)},expression:"formAdd.title"}},[e("Poptip",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{slot:"append",transfer:"",trigger:"hover",title:"多语言",placement:"right",width:"350"},slot:"append"},[e("Button",{attrs:{icon:"ios-globe-outline"}}),e("div",{attrs:{slot:"content"},slot:"content"},[e("Form",{attrs:{"label-width":80}},[e("FormItem",{attrs:{label:"启用多语言"}},[e("i-switch",{attrs:{size:"large"},model:{value:t.formAdd.localize,callback:function(e){t.$set(t.formAdd,"localize",e)},expression:"formAdd.localize"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),e("FormItem",{attrs:{label:"多语言Key"}},[e("Input",{attrs:{placeholder:"输入用于渲染I18n的$t('KEY')"},model:{value:t.formAdd.i18n,callback:function(e){t.$set(t.formAdd,"i18n",e)},expression:"formAdd.i18n"}})],1)],1)],1)],1)],1)],1)])]):t._e(),1==t.formAdd.type?e("FormItem",{staticClass:"block-tool",attrs:{label:"名称",prop:"title",rules:{required:!0,message:"名称不能为空",trigger:"blur"}}},[e("Tooltip",{attrs:{placement:"right",content:"操作按钮名称不得重复"}},[e("Input",{model:{value:t.formAdd.title,callback:function(e){t.$set(t.formAdd,"title",e)},expression:"formAdd.title"}})],1)],1):t._e(),0==t.formAdd.type?e("FormItem",{attrs:{label:"路径",prop:"path",rules:{required:!0,message:"路径不能为空",trigger:"blur"}}},[e("Input",{model:{value:t.formAdd.path,callback:function(e){t.$set(t.formAdd,"path",e)},expression:"formAdd.path"}})],1):t._e(),1==t.formAdd.type?e("FormItem",{staticClass:"block-tool",attrs:{label:"请求路径",prop:"path",required:!1}},[e("Tooltip",{attrs:{placement:"right","max-width":230,transfer:"",content:"填写后端请求URL，后端将作权限拦截，若无可填写'无'或其他"}},[e("Input",{model:{value:t.formAdd.path,callback:function(e){t.$set(t.formAdd,"path",e)},expression:"formAdd.path"}})],1)],1):t._e(),1==t.formAdd.type?e("FormItem",{attrs:{label:"按钮权限类型",prop:"buttonType"}},[e("dict",{attrs:{dict:"permission_type",placeholder:"请选择或输入搜索",filterable:"",clearable:"",transfer:""},model:{value:t.formAdd.buttonType,callback:function(e){t.$set(t.formAdd,"buttonType",e)},expression:"formAdd.buttonType"}})],1):t._e(),-1==t.formAdd.type?e("FormItem",{staticClass:"block-tool",attrs:{label:"英文名",prop:"name",rules:{required:!0,message:"英文名不能为空",trigger:"blur"}}},[e("Tooltip",{attrs:{placement:"right",content:"需唯一"}},[e("Input",{model:{value:t.formAdd.name,callback:function(e){t.$set(t.formAdd,"name",e)},expression:"formAdd.name"}})],1)],1):t._e(),0==t.formAdd.type?e("FormItem",{staticClass:"block-tool",attrs:{label:"路由英文名",prop:"name",rules:{required:!0,message:"路由英文名不能为空",trigger:"blur"}}},[e("Tooltip",{attrs:{placement:"right",content:"需唯一"}},[e("Input",{model:{value:t.formAdd.name,callback:function(e){t.$set(t.formAdd,"name",e)},expression:"formAdd.name"}})],1)],1):t._e(),-1==t.formAdd.type||0==t.formAdd.type?e("FormItem",{attrs:{label:"图标",prop:"icon",rules:{required:!0,message:"图标不能为空",trigger:"blur"}}},[e("icon-choose",{attrs:{showCustom:"",showInput:""},model:{value:t.formAdd.icon,callback:function(e){t.$set(t.formAdd,"icon",e)},expression:"formAdd.icon"}})],1):t._e(),-1==t.formAdd.type?e("FormItem",{attrs:{label:"显示红点",prop:"component"}},[e("i-switch",{attrs:{size:"large","true-value":"hot","false-value":"normal"},model:{value:t.formAdd.component,callback:function(e){t.$set(t.formAdd,"component",e)},expression:"formAdd.component"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1):t._e(),-1==t.formAdd.type?e("FormItem",{attrs:{label:"系统站内菜单",prop:"isMenu"}},[e("i-switch",{attrs:{size:"large"},model:{value:t.formAdd.isMenu,callback:function(e){t.$set(t.formAdd,"isMenu",e)},expression:"formAdd.isMenu"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])],1):t._e(),-1!=t.formAdd.type||t.formAdd.isMenu?t._e():e("FormItem",{attrs:{label:"其他链接",prop:"url",rules:{required:!0,message:"其他链接不能为空",trigger:"blur"}}},[e("Input",{attrs:{placeholder:"Http链接或路由名"},model:{value:t.formAdd.url,callback:function(e){t.$set(t.formAdd,"url",e)},expression:"formAdd.url"}})],1),-1!=t.formAdd.type||t.formAdd.isMenu?t._e():e("FormItem",{attrs:{label:"打开方式",prop:"description",rules:{required:!0,message:"请选择打开方式",trigger:"change"}}},[e("Select",{attrs:{transfer:"",placeholder:"请选择"},model:{value:t.formAdd.description,callback:function(e){t.$set(t.formAdd,"description",e)},expression:"formAdd.description"}},[e("Option",{attrs:{value:"direct",label:"直接跳转"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("直接跳转")]),e("span",{staticStyle:{color:"#ccc"}},[t._v("其他链接填写完整链接")])]),e("Option",{attrs:{value:"window",label:"新窗口打开"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("新窗口打开")]),e("span",{staticStyle:{color:"#ccc"}},[t._v("其他链接填写完整链接")])]),e("Option",{attrs:{value:"route",label:"站内路由"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("站内路由")]),e("span",{staticStyle:{color:"#ccc"}},[t._v("其他链接填写Vue路由名")])])],1)],1),0==t.formAdd.type?e("FormItem",{attrs:{label:"前端组件",prop:"component",rules:{required:!0,message:"前端组件不能为空",trigger:"blur"}}},[e("Input",{model:{value:t.formAdd.component,callback:function(e){t.$set(t.formAdd,"component",e)},expression:"formAdd.component"}})],1):t._e(),0==t.formAdd.type&&2==t.formAdd.level?e("FormItem",{attrs:{label:"第三方链接",prop:"url",required:!1}},[e("Input",{attrs:{placeholder:"http://"},on:{"on-change":t.changeAddUrl},model:{value:t.formAdd.url,callback:function(e){t.$set(t.formAdd,"url",e)},expression:"formAdd.url"}}),e("span",{staticClass:"url-remark"},[t._v("前端组件需为 sys/monitor/monitor 时生效")])],1):t._e(),e("FormItem",{attrs:{label:"排序值",prop:"sortOrder",rules:{required:!0,type:"number",message:"前端组件不能为空",trigger:"blur"}}},[e("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[e("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.formAdd.sortOrder,callback:function(e){t.$set(t.formAdd,"sortOrder",e)},expression:"formAdd.sortOrder"}})],1)],1),1==t.formAdd.level?e("FormItem",{staticClass:"block-tool",attrs:{label:"始终显示",prop:"showAlways"}},[e("i-switch",{attrs:{size:"large"},model:{value:t.formAdd.showAlways,callback:function(e){t.$set(t.formAdd,"showAlways",e)},expression:"formAdd.showAlways"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])]),e("Tooltip",{staticStyle:{display:"inline-block !important"},attrs:{content:"当设为不始终显示时，一级菜单下仅有一个子级菜单只会显示该子级菜单，避免用户多次点击",placement:"right",transfer:"","max-width":"280"}},[e("Icon",{staticStyle:{"margin-left":"10px",cursor:"pointer"},attrs:{type:"md-help-circle",size:"20",color:"#c5c5c5"}})],1)],1):t._e(),e("FormItem",{attrs:{label:"是否启用",prop:"status"}},[e("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:t.formAdd.status,callback:function(e){t.$set(t.formAdd,"status",e)},expression:"formAdd.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1)],1)],1),e("div",{staticClass:"drawer-footer br"},[e("div",{staticClass:"footer-between"},[e("div",[e("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.submit}},[t._v("提交")]),e("Button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")])],1),e("div",{staticClass:"flex-center"},[e("i-switch",{attrs:{size:"large"},model:{value:t.showMask,callback:function(e){t.showMask=e},expression:"showMask"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("遮罩")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],1)])])])],1)},o=[],a=s("365c"),l=s("76e2"),i=s("ad40"),n={name:"add",components:{dict:l["default"],IconChoose:i["default"]},props:{value:{type:Boolean,default:!1},isRoot:{type:Boolean,default:!1},form:{type:Object},dataLength:{type:Number}},data(){return{showMask:!0,visible:this.value,parentTitle:"",submitLoading:!1,maxHeight:510,formAdd:{}}},methods:{init(){},changeAddUrl(t){let e=t.target.value;e.indexOf("http")>-1&&(this.formAdd.component="sys/monitor/monitor")},submit(){this.$refs.formAdd.validate(t=>{t&&(this.submitLoading=!0,1==this.formAdd.type&&(this.formAdd.name="",this.formAdd.icon="",this.formAdd.component=""),Object(a["f"])(this.formAdd).then(t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.$emit("on-submit",!0),this.visible=!1)}))})},setCurrentValue(t){if(t!==this.visible){if(this.$refs.formAdd.resetFields(),this.isRoot)this.formAdd={type:-1,level:0,parentId:0,isMenu:!0,sortOrder:this.dataLength+1,status:0,component:"normal"};else{this.parentTitle=this.form.title;let t=0;2==this.form.level&&(t=1),this.form.children||(this.form.children=[]),this.formAdd={icon:"",type:t,parentId:this.form.id,level:Number(this.form.level)+1,sortOrder:this.form.children.length+1,buttonType:"",status:0,showAlways:!0},0==this.form.level&&(this.formAdd.path="/",this.formAdd.component="Main")}this.visible=t}}},watch:{value(t){this.setCurrentValue(t)},visible(t){this.$emit("input",t)}},mounted(){this.init(),this.maxHeight=Number(document.documentElement.clientHeight-121)+"px"}},c=n,d=(s("0a3d"),s("2877")),m=Object(d["a"])(c,r,o,!1,null,null,null);e["default"]=m.exports},"76e2":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("Select",{attrs:{size:t.size,loading:t.loading,placeholder:t.placeholder,multiple:t.multiple,disabled:t.disabled,filterable:t.filterable,transfer:t.transfer,clearable:t.clearable,placement:t.placement,"transfer-class-name":t.transferClassName,prefix:t.prefix,"max-tag-count":t.maxTagCount,"max-tag-placeholder":t.maxTagPlaceholder},on:{"on-change":t.handleChange,"on-query-change":t.handleQueryChange,"on-clear":t.handleClear,"on-open-change":t.handleOpenChange,"on-select":t.handleSelect},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},t._l(t.dictData,(function(s,r){return e("Option",{key:r,attrs:{value:s.value}},[t._v(t._s(s.title))])})),1)],1)},o=[],a=s("365c"),l={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(t){this.loading=!0,Object(a["Ab"])(t).then(t=>{this.loading=!1,t.success&&(this.dictData=t.result)})},handleChange(t){this.$emit("input",t),this.$emit("on-change",t)},handleQueryChange(t){this.$emit("on-query-change",t)},handleClear(){this.$emit("on-clear","")},handleOpenChange(t){this.$emit("on-open-change",t)},handleSelect(t){this.$emit("on-select",t)},setCurrentValue(t){t!==this.currentValue&&(this.currentValue=t,this.$emit("on-change",this.currentValue))}},watch:{value(t){this.setCurrentValue(t)},dict(t){this.getData(t)}},mounted(){this.getData(this.dict)}},i=l,n=s("2877"),c=Object(n["a"])(i,r,o,!1,null,null,null);e["default"]=c.exports},ff37:function(t,e,s){"use strict";s("38be")}}]);