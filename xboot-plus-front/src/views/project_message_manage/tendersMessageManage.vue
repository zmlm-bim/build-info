<template>
  <div class="search">
    <Card>
      <div style="font-size: large;margin-bottom: -1rem;margin-top: -1rem;font-weight: bold;">项目信息管理</div>
      <Divider style="margin-bottom: -1rem;"></Divider>
      <div style="margin-top: -2rem;">
      <Row :gutter="20" style="justify-content: center; margin-top: 50px">
      <Col :sm="4">
        <cardInfo :img="imgs.icon1" title="项目信息添加" class="" :onclick="add2"/>
      </Col>
      <Col :sm="3">
      </Col>
      <Col :sm="4">
        <cardInfo :img="imgs.icon2" title="项目信息编辑" class="" :onclick="edit2"/>
      </Col>
      <Col :sm="3">
      </Col>
      <Col :sm="4">
        <cardInfo :img="imgs.icon4" title="查看详细" class="" :onclick="edit2"/>
      </Col>
      </Row>
    </div>
    <Divider style="margin-bottom: 0rem;"></Divider>
      <div>
      <div style="font-size: large;margin-bottom: 1rem;font-weight: bold;">项目概要信息</div>
      <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目编号" prop="xmbh" >
                <Input v-model="form.xmbh" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目名称" prop="xmmc" >
                <Input v-model="form.xmmc" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目牵头部门" prop="xmqtbm" >
                <Input v-model="form.xmqtbm" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目总负责人" prop="xmzfzr" >
                <Input v-model="form.xmzfzr" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目立项时间" prop="xmlxsj" >
                <DatePicker type="date" v-model="form.xmlxsj" clearable style="width:100%"></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目总工期" prop="xmzgq" >
                <Input v-model="form.xmzgq" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="项目建设内容" prop="xmjsnr" >
                <Input v-model="form.xmjsnr" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="项目建设目标" prop="xmjsmb" >
                <Input v-model="form.xmjsmb" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目立项文件" prop="xmlxwj" >
                <!-- <Input v-model="form.xmlxwj" clearable/> -->
                <a>上传</a>
              </FormItem>
            </Col>
          </Row>
        </Form>
     </div>
     <Divider style="margin-bottom: 0rem;"></Divider>
     <div style="font-size: large;margin-bottom: 1rem;font-weight: bold;">项目标段计划</div>
      <Row v-show="openSearch" @keydown.enter.native="handleSearch">
        <Form ref="searchForm" :model="searchForm" inline :label-width="70">
            <FormItem label="标段编号" prop="bdbh">
              <Input type="text" v-model="searchForm.bdbh" placeholder="请输入标段编号" clearable style="width: 200px"/>
            </FormItem>
            <FormItem label="标段名称" prop="bdmc">
              <Input type="text" v-model="searchForm.bdmc" placeholder="请输入标段名称" clearable style="width: 200px"/>
            </FormItem>
            <FormItem label="标段状态" prop="bdzt">
              <Input type="text" v-model="searchForm.bdzt" placeholder="请输入标段状态" clearable style="width: 200px"/>
            </FormItem>
          <FormItem style="margin-left:-35px;" class="br">
            <Button @click="handleSearch" type="primary" icon="ios-search">搜索</Button>
            <Button @click="handleReset">重置</Button>
          </FormItem>
        </Form>
      </Row>
      <Row align="middle" justify="space-between" class="operation">
        <div>
          <Button @click="add" type="primary" icon="md-add">添加</Button>
          <Button @click="delAll" icon="md-trash">批量删除</Button>
        </div>
        <div class="icons">
          <Tooltip content="刷新" placement="top" transfer>
            <Icon
              type="md-refresh"
              size="18"
              class="item"
              @click="getDataList"
            />
          </Tooltip>
          <Tooltip
            :content="openSearch ? '关闭搜索' : '开启搜索'"
            placement="top"
            transfer
          >
            <Icon
              type="ios-search"
              size="18"
              class="item tip"
              @click="openSearch = !openSearch"
            />
          </Tooltip>
          <Tooltip
            :content="openTip ? '关闭提示' : '开启提示'"
            placement="top"
            transfer
          >
            <Icon
              type="md-bulb"
              size="18"
              class="item tip"
              @click="openTip = !openTip"
            />
          </Tooltip>
          <Tooltip content="表格密度" placement="top" transfer>
            <Dropdown @on-click="changeTableSize" trigger="click">
              <Icon type="md-list" size="18" class="item" />
              <DropdownMenu slot="list">
                <DropdownItem :selected="tableSize == 'default'" name="default"
                  >默认</DropdownItem
                >
                <DropdownItem :selected="tableSize == 'large'" name="large"
                  >宽松</DropdownItem
                >
                <DropdownItem :selected="tableSize == 'small'" name="small"
                  >紧密</DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </Tooltip>
          <Tooltip content="导出数据" placement="top" transfer>
            <Icon
              type="md-download"
              size="18"
              class="item"
              @click="exportData"
            />
          </Tooltip>
        </div>
      </Row>
      <Alert show-icon v-show="openTip">
        已选择 <span class="select-count">{{selectList.length}}</span> 项
        <a class="select-clear" @click="clearSelectAll">清空</a>
      </Alert>
      <Table :loading="loading" border :columns="columns" :data="data" :size="tableSize" ref="table" sortable="custom" @on-sort-change="changeSort" @on-selection-change="changeSelect"></Table>
      <Row type="flex" justify="end" class="page">
        <Page :current="searchForm.pageNumber" :total="total" :page-size="searchForm.pageSize" @on-change="changePage" @on-page-size-change="changePageSize" :page-size-opts="[10,20,50]" size="small" show-total show-elevator show-sizer></Page>
      </Row>
    </Card>
    <Modal :title="modalTitle" v-model="modalVisible" :mask-closable='false' :width="720">
      <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="标段编号" prop="bdbh" >
                <Input v-model="form.bdbh" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="标段名称" prop="bdmc" >
                <Input v-model="form.bdmc" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="标段责任部门" prop="bdzrbm" >
                <Input v-model="form.bdzrbm" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="标段责任人" prop="bdfzr" >
                <Input v-model="form.bdfzr" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="标段状态" prop="bdzt" >
                <Input v-model="form.bdzt" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="标段计划工期" prop="bdjhgq" >
                <Input v-model="form.bdjhgq" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="标段计划启动时间" prop="bdjhqdsj" >
                <DatePicker type="date" v-model="form.bdjhqdsj" clearable style="width:100%"></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="标段计划完成时间" prop="bdjhwcsj" >
                <DatePicker type="date" v-model="form.bdjhwcsj" clearable style="width:100%"></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="标段建设需求" prop="bdjsxq" >
                <Input v-model="form.bdjsxq" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
            </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="标段建设需求文件" prop="bdjsxqwj" >
                <!-- <Input v-model="form.bdjsxqwj" clearable/> -->
                <a>上传</a>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="标段建设内容" prop="bdjsnr" >
                <Input v-model="form.bdjsnr" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="标段建设目标" prop="bdjsmb" >
                <Input v-model="form.bdjsmb" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="标段建设计划文件" prop="bdjsjhwj" >
                <!-- <Input v-model="form.bdjsjhwj" clearable/> -->
                <a>上传</a>
              </FormItem>
            </Col>
          </Row>
        </Form>
      <div slot="footer">
        <Button type="text" @click="modalVisible=false">取消</Button>
        <Button type="primary" :loading="submitLoading" @click="handleSubmit">提交</Button>
      </div>
    </Modal>
    <Modal :title="modalTitle" v-model="modalVisible2" :mask-closable='false' :width="720">
      <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目编号" prop="xmbh" >
                <Input v-model="form.xmbh" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目名称" prop="xmmc" >
                <Input v-model="form.xmmc" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目牵头部门" prop="xmqtbm" >
                <Input v-model="form.xmqtbm" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目总负责人" prop="xmzfzr" >
                <Input v-model="form.xmzfzr" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目立项时间" prop="xmlxsj" >
                <DatePicker type="date" v-model="form.xmlxsj" clearable style="width:100%"></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目总工期" prop="xmzgq" >
                <Input v-model="form.xmzgq" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="咨询公司名称" prop="zxgsmc" >
                <Input v-model="form.zxgsmc" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="咨询负责人" prop="zxfzr" >
                <Input v-model="form.zxfzr" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目期数" prop="xmqs" >
                <Input v-model="form.xmqs" clearable/>
              </FormItem>
            </Col>
            <Col span="12">
            </Col>
          </Row>
           <Row :gutter="32">
            <Col span="24">
              <FormItem label="项目建设需求" prop="xmjsxq" >
                <Input v-model="form.xmjsxq" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目建设需求文件" prop="xmjsxqwj" >
                <!-- <Input v-model="form.xmjsxqwj" clearable/> -->
                <a>上传</a>
              </FormItem>
            </Col>
            </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="项目建设内容" prop="xmjsnr" >
                <Input v-model="form.xmjsnr" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="项目建设目标" prop="xmjsmb" >
                <Input v-model="form.xmjsmb" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目立项文件" prop="xmlxwj" >
                <!-- <Input v-model="form.xmlxwj" clearable/> -->
                <a>上传</a>
              </FormItem>
            </Col>
          </Row>
        </Form>
      <div slot="footer">
        <Button type="text" @click="modalVisible2=false">取消</Button>
        <Button type="primary" :loading="submitLoading" @click="handleSubmit">提交</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
// 根据你的实际请求api.js位置路径修改
import { getTendersMessageManageList, addTendersMessageManage, editTendersMessageManage, deleteTendersMessageManage } from "@/api/index";
import { shortcuts } from "@/libs/shortcuts";
import cardInfo from "../build-info-home/components/cardInfo.vue";
export default {
  name: "tendersMessageManage",
  components: {
    cardInfo,
  },
  data() {
    return {
      tableSize: "default",
      openSearch: true, // 显示搜索
      openTip: true, // 显示提示
      loading: true, // 表单加载状态
      modalType: 0, // 添加或编辑标识
      modalVisible: false, // 添加或编辑显示
      modalVisible2: false, // 添加或编辑显示
      modalTitle: "", // 添加或编辑标题
      searchForm: { // 搜索框初始化对象
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "createTime", // 默认排序字段
        order: "desc", // 默认排序方式
      },
      imgs: {
        icon1: require("@/assets/bf/项目信息.png"),
        icon2: require("@/assets/bf/项目设计.jpg"),
        icon3: require("@/assets/bf/施工管理.jpg"),
        icon4: require("@/assets/bf/监理管理.jpg"),
        icon5: require("@/assets/bf/造价管理.jpg"),
      },
      form: { // 添加或编辑表单对象初始化数据
        bdbh: "",
        bdmc: "",
        bdzrbm: "",
        bdfzr: "",
        bdzt: "",
        bdjhgq: "",
        bdjhqdsj: "",
        bdjhwcsj: "",
        bdjsxq: "",
        bdjsxqwj: "",
        bdjsnr: "",
        bdjsmb: "",
        bdjsjhwj: "",
      },
      // 表单验证规则
      formValidate: {
      },
      submitLoading: false, // 添加或编辑提交状态
      selectList: [], // 多选数据
      columns: [
        // 表头
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "标段编号",
          key: "bdbh",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段名称",
          key: "bdmc",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段责任部门",
          key: "bdzrbm",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段责任人",
          key: "bdfzr",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段状态",
          key: "bdzt",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段计划工期",
          key: "bdjhgq",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段计划启动时间",
          key: "bdjhqdsj",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段计划完成时间",
          key: "bdjhwcsj",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          width: 150,
          render: (h, params) => {
            return h("div", [
              h(
                "a",
                {
                  on: {
                    click: () => {
                      this.edit(params.row);
                    }
                  }
                },
                "编辑"
              ),
              h("Divider", {
                props: {
                  type: "vertical",
                },
              }),
              h(
                "a",
                {
                  on: {
                    click: () => {
                      this.remove(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data: [], // 表单数据
      total: 0 // 表单数据总数
    };
  },
  methods: {
    init() {
      this.getDataList();
    },
    changePage(v) {
      this.searchForm.pageNumber = v;
      this.getDataList();
      this.clearSelectAll();
    },
    changePageSize(v) {
      this.searchForm.pageSize = v;
      this.getDataList();
    },
    handleSearch() {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.getDataList();
    },
    handleReset() {
      this.$refs.searchForm.resetFields();
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      // 重新加载数据
      this.getDataList();
    },
    changeSort(e) {
      this.searchForm.sort = e.key;
      this.searchForm.order = e.order;
      if (e.order === "normal") {
        this.searchForm.order = "";
      }
      this.getDataList();
    },
    clearSelectAll() {
      this.$refs.table.selectAll(false);
    },
    changeSelect(e) {
      this.selectList = e;
    },
    changeTableSize(v) {
      this.tableSize = v;
    },
    exportData() {
      this.$refs.table.exportCsv({
        filename: "数据",
      });
    },
    getDataList() {
      this.loading = true;
      getTendersMessageManageList(this.searchForm).then(res => {
        this.loading = false;
        if (res.success) {
          this.data = res.result.content;
          this.total = res.result.totalElements;
          if (this.data.length == 0 && this.searchForm.pageNumber > 1) {
            this.searchForm.pageNumber -= 1;
            this.getDataList();
          }
        }
      });
    },
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (typeof this.form.bdjhqdsj == "object") {
            this.form.bdjhqdsj = this.format(this.form.bdjhqdsj, "yyyy-MM-dd");
          }
          if (typeof this.form.bdjhwcsj == "object") {
            this.form.bdjhwcsj = this.format(this.form.bdjhwcsj, "yyyy-MM-dd");
          }
          this.submitLoading = true;
          if (this.modalType === 0) {
            // 添加 避免编辑后传入id等数据 记得删除
            delete this.form.id;
            addTendersMessageManage(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.getDataList();
                this.modalVisible = false;
              }
            });
          } else {
            // 编辑
            editTendersMessageManage(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.getDataList();
                this.modalVisible = false;
              }
            });
          }
        }
      });
    },
    close() {
      this.$emit("close", true);
    },
    add() {
      this.modalType = 0;
      this.modalTitle = "标段信息添加";
      this.$refs.form.resetFields();
      delete this.form.id;
      this.modalVisible = true;
    },
    add2() {
      this.modalType = 0;
      this.modalTitle = "项目信息添加";
      this.$refs.form.resetFields();
      delete this.form.id;
      this.modalVisible2 = true;
    },
    edit(v) {
      this.modalType = 1;
      this.modalTitle = "标段信息编辑";
      this.$refs.form.resetFields();
      // 转换null为""
      for (let attr in v) {
        if (v[attr] === null) {
          v[attr] = "";
        }
      }
      let str = JSON.stringify(v);
      let data = JSON.parse(str);
      this.form = data;
      this.modalVisible = true;
    },
    edit2() {
      this.modalType = 1;
      this.modalTitle = "项目信息编辑";
      // this.$refs.form.resetFields();
      // // 转换null为""
      // for (let attr in v) {
      //   if (v[attr] === null) {
      //     v[attr] = "";
      //   }
      // }
      // let str = JSON.stringify(v);
      // let data = JSON.parse(str);
      // this.form = data;
      this.modalVisible2 = true;
    },
    remove(v) {
      this.$Modal.confirm({
        title: "确认删除",
        // 记得确认修改此处
        content: "您确认要删除该条数据?",
        loading: true,
        onOk: () => {
          // 删除
          deleteTendersMessageManage({ids: v.id}).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.clearSelectAll();
              this.getDataList();
            }
          });
        }
      });
    },
    delAll() {
      if (this.selectList.length <= 0) {
        this.$Message.warning("您还未选择要删除的数据");
        return;
      }
      this.$Modal.confirm({
        title: "确认删除",
        content: "您确认要删除所选的 " + this.selectList.length + " 条数据?",
        loading: true,
        onOk: () => {
          let ids = "";
          this.selectList.forEach(function(e) {
            ids += e.id + ",";
          });
          ids = ids.substring(0, ids.length - 1);
          // 批量删除
          deleteTendersMessageManage({ids: ids}).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.clearSelectAll();
              this.getDataList();
            }
          });
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="less">
@import "@/styles/table-common.less";
@import "@/styles/single-common.less";
</style>