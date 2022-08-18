<template>
  <div class="search">
    <Card>
      <Row v-show="openSearch" @keydown.enter.native="handleSearch">
        <Form ref="searchForm" :model="searchForm" inline :label-width="70" class="search-form">
          <FormItem label="项目名称" prop="xmmc">
            <Input type="text" v-model="searchForm.xmmc" placeholder="请输入项目名称" clearable style="width: 200px"/>
          </FormItem>
          <FormItem label="立项时间" prop="lxsj">
            <DatePicker :options="options" v-model="selectDate" type="daterange" format="yyyy-MM-dd" clearable @on-change="selectDateRange" placeholder="选择起始时间" style="width: 200px"></DatePicker>
          </FormItem>
          <span v-if="drop">
            <FormItem label="项目负责人" prop="xmfzr">
              <Input type="text" v-model="searchForm.xmfzr" placeholder="请输入项目负责人" clearable style="width: 200px"/>
            </FormItem>
            <FormItem label="开工时间" prop="kgsj">
              <DatePicker :options="options" v-model="selectDate" type="daterange" format="yyyy-MM-dd" clearable @on-change="selectDateRange" placeholder="选择起始时间" style="width: 200px"></DatePicker>
            </FormItem>
            <FormItem label="标段名称" prop="bdmc">
              <Input type="text" v-model="searchForm.bdmc" placeholder="请输入标段名称" clearable style="width: 200px"/>
            </FormItem>
          </span>
          <FormItem style="margin-left:-35px;" class="br">
            <Button @click="handleSearch" type="primary" icon="ios-search">搜索</Button>
            <Button @click="handleReset">重置</Button>
            <a class="drop-down" @click="dropDown">
              {{dropDownContent}}
              <Icon :type="dropDownIcon"></Icon>
            </a>
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
    <Modal :title="modalTitle" v-model="modalVisible" :mask-closable='false' :width="920">
      <Form ref="form" :model="form" :rules="formValidate"  label-position="top">
          <Row :gutter="32">
            <Col span="8">
              <FormItem label="项目名称" prop="xmmc" >
                <Input v-model="form.xmmc" clearable/>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="立项时间" prop="lxsj" >
                <DatePicker type="date" v-model="form.lxsj" clearable style="width:100%"></DatePicker>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="项目负责人" prop="xmfzr" >
                <Input v-model="form.xmfzr" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="8">
              <FormItem label="开工时间" prop="kgsj" >
                <DatePicker type="date" v-model="form.kgsj" clearable style="width:100%"></DatePicker>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="计划完工时间" prop="jhwgsj" >
                <DatePicker type="date" v-model="form.jhwgsj" clearable style="width:100%"></DatePicker>
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="项目建设内容" prop="xmjsnr" >
                <Input v-model="form.xmjsnr" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="8">
              <FormItem label="标段名称" prop="bdmc" >
                <Input v-model="form.bdmc" clearable/>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="中标人" prop="zbr" >
                <Input v-model="form.zbr" clearable/>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="标段负责人" prop="bdfzr" >
                <Input v-model="form.bdfzr" clearable/>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="24">
              <FormItem label="标段建设内容" prop="bdjsnr" >
                <Input v-model="form.bdjsnr" type="textarea" :rows="4" maxlength="250" show-word-limit/>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="标段开工时间" prop="bdkgsj" >
                <DatePicker type="date" v-model="form.bdkgsj" clearable style="width:100%"></DatePicker>
              </FormItem>
            </Col>
          </Row>
        </Form>
      <div slot="footer">
        <Button type="text" @click="modalVisible=false">取消</Button>
        <Button type="primary" :loading="submitLoading" @click="handleSubmit">提交</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
// 根据你的实际请求api.js位置路径修改
import { getProjectListList, addProjectList, editProjectList, deleteProjectList } from "@/api/index";
import { shortcuts } from "@/libs/shortcuts";
export default {
  name: "projectList",
  components: {
  },
  data() {
    return {
      tableSize: "default",
      openSearch: true, // 显示搜索
      openTip: true, // 显示提示
      loading: true, // 表单加载状态
      modalType: 0, // 添加或编辑标识
      modalVisible: false, // 添加或编辑显示
      modalTitle: "", // 添加或编辑标题
      drop: false,
      dropDownContent: "展开",
      dropDownIcon: "ios-arrow-down",
      searchForm: { // 搜索框初始化对象
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "createTime", // 默认排序字段
        order: "desc", // 默认排序方式
        startDate: "", // 起始时间
        endDate: "", // 终止时间
      },
      selectDate: null,
      options: {
        shortcuts: shortcuts,
      },
      form: { // 添加或编辑表单对象初始化数据
        xmmc: "",
        lxsj: "",
        xmfzr: "",
        kgsj: "",
        jhwgsj: "",
        xmjsnr: "",
        bdmc: "",
        zbr: "",
        bdfzr: "",
        bdjsnr: "",
        bdkgsj: "",
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
          title: "项目名称",
          key: "xmmc",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "立项时间",
          key: "lxsj",
          minWidth: 120,
          sortable: true,
        },
        {
          title: "项目负责人",
          key: "xmfzr",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "开工时间",
          key: "kgsj",
          minWidth: 120,
          sortable: true,
        },
        {
          title: "计划完工时间",
          key: "jhwgsj",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "项目建设内容",
          key: "xmjsnr",
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
          title: "中标人",
          key: "zbr",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段负责人",
          key: "bdfzr",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段建设内容",
          key: "bdjsnr",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "标段开工时间",
          key: "bdkgsj",
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
      this.selectDate = null;
      this.searchForm.startDate = "";
      this.searchForm.endDate = "";
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
    selectDateRange(v) {
      if (v) {
        this.searchForm.startDate = v[0];
        this.searchForm.endDate = v[1];
      }
    },
    dropDown() {
      if (this.drop) {
        this.dropDownContent = "展开";
        this.dropDownIcon = "ios-arrow-down";
      } else {
        this.dropDownContent = "收起";
        this.dropDownIcon = "ios-arrow-up";
      }
      this.drop = !this.drop;
    },
    getDataList() {
      this.loading = true;
      getProjectListList(this.searchForm).then(res => {
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
          if (typeof this.form.lxsj == "object") {
            this.form.lxsj = this.format(this.form.lxsj, "yyyy-MM-dd");
          }
          if (typeof this.form.kgsj == "object") {
            this.form.kgsj = this.format(this.form.kgsj, "yyyy-MM-dd");
          }
          if (typeof this.form.jhwgsj == "object") {
            this.form.jhwgsj = this.format(this.form.jhwgsj, "yyyy-MM-dd");
          }
          if (typeof this.form.bdkgsj == "object") {
            this.form.bdkgsj = this.format(this.form.bdkgsj, "yyyy-MM-dd");
          }
          this.submitLoading = true;
          if (this.modalType === 0) {
            // 添加 避免编辑后传入id等数据 记得删除
            delete this.form.id;
            addProjectList(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.getDataList();
                this.modalVisible = false;
              }
            });
          } else {
            // 编辑
            editProjectList(this.form).then(res => {
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
    add() {
      this.modalType = 0;
      this.modalTitle = "添加";
      this.$refs.form.resetFields();
      delete this.form.id;
      this.modalVisible = true;
    },
    edit(v) {
      this.modalType = 1;
      this.modalTitle = "编辑";
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
    remove(v) {
      this.$Modal.confirm({
        title: "确认删除",
        // 记得确认修改此处
        content: "您确认要删除该条数据?",
        loading: true,
        onOk: () => {
          // 删除
          deleteProjectList({ids: v.id}).then(res => {
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
          deleteProjectList({ids: ids}).then(res => {
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
</style>