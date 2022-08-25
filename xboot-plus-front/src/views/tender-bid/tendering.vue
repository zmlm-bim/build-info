<template>
  <div class="search">
    <Card>
      <Row v-show="openSearch" @keydown.enter.native="handleSearch">
        <Form ref="searchForm" :model="searchForm" inline :label-width="100">
          <FormItem label="项目名称" prop="xmmc">
            <Input
              type="text"
              v-model="searchForm.xmmc"
              placeholder="请输入项目名称"
              clearable
              style="width: 200px"
            />
          </FormItem>
          <FormItem label="项目分标号数" prop="xmfbhs">
            <Input
              type="text"
              v-model="searchForm.xmfbhs"
              placeholder="请输入项目分标号数"
              clearable
              style="width: 200px"
            />
          </FormItem>
          <FormItem style="margin-left: -35px" class="br">
            <Button @click="handleSearch" type="primary" icon="ios-search"
              >搜索</Button
            >
            <Button @click="handleReset">重置</Button>
          </FormItem>
        </Form>
      </Row>
    </Card>
    <div style="border: 1px solid royalblue" :sm="12" class="search_table">
      <h3>招标概况</h3>
      <Row :gutter="20">
        <Col
          style="
            border: 0px solid black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-right: 0;
          "
          :sm="12"
          ><Row :gutter="20">
            <Col :sm="24">
              <Card>
                <div class="projectCard">
                  <table border="1" style="width: 40em;height: 20em;text-align: center;">
                    <tr>
                      <th v-for="item in tableHeader" :key="item">{{ item }}</th>
                    </tr>
                    <tr v-for="item in dat" :key="item">
                      <td>{{ item.name }}</td>
                      <td>{{ item.zbz }}</td>
                      <td>{{ item.zbjs }}</td>
                      <td>{{ item.wzb }}</td>
                    </tr>
                  </table>
                </div>
              </Card>
            </Col>
          </Row>
          <Row :gutter="20" style="margin-top: 30px">
            <Col :sm="24" style="margin-bottom: 30px"> </Col>
          </Row>
          <Row :gutter="20"> <Col :sm="24"> </Col> </Row>
        </Col>
        <Col style="border: 0px solid black" :sm="12">
          <div id="chart" style="height: 350px"></div>
        </Col>
      </Row>
    </div>
    <div style="border: 1px solid rebeccapurple" :sm="12" class="search_plan">
      <h3>招标计划</h3>
      <Card>
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
                  <DropdownItem
                    :selected="tableSize == 'default'"
                    name="default"
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
          已选择 <span class="select-count">{{ selectList.length }}</span> 项
          <a class="select-clear" @click="clearSelectAll">清空</a>
        </Alert>
        <Table
          :loading="loading"
          border
          :columns="columns"
          :data="data"
          :size="tableSize"
          ref="table"
          sortable="custom"
          @on-sort-change="changeSort"
          @on-selection-change="changeSelect"
        ></Table>
        <Row type="flex" justify="end" class="page">
          <Page
            :current="searchForm.pageNumber"
            :total="total"
            :page-size="searchForm.pageSize"
            @on-change="changePage"
            @on-page-size-change="changePageSize"
            :page-size-opts="[10, 20, 50]"
            size="small"
            show-total
            show-elevator
            show-sizer
          ></Page>
        </Row>
      </Card>
      <Modal
        :title="modalTitle"
        v-model="modalVisible"
        :mask-closable="false"
        :width="720"
      >
        <Form
          ref="form"
          :model="form"
          :rules="formValidate"
          label-position="top"
        >
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目名称" prop="xmmc">
                <Input v-model="form.xmmc" clearable />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目分标号数" prop="xmfbhs">
                <InputNumber
                  v-model="form.xmfbhs"
                  style="width: 100%"
                ></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="招标负责人" prop="zbfzr">
                <Input v-model="form.zbfzr" clearable />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="所属部门" prop="ssbm">
                <Input v-model="form.ssbm" clearable />
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="计划招标时间" prop="jhzbsj">
                <DatePicker
                  type="date"
                  v-model="form.jhzbsj"
                  clearable
                  style="width: 100%"
                ></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="计划招标方式" prop="jhzbfs">
                <Input v-model="form.jhzbfs" clearable />
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="计划招标预算" prop="jhzbys">
                <Input v-model="form.jhzbys" clearable />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目阶段 1设计 2施工 3监理" prop="xmjd">
                <InputNumber
                  v-model="form.xmjd"
                  style="width: 100%"
                ></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="招标状态 1招标中 2招标结束 3未招标" prop="zbzt">
                <InputNumber
                  v-model="form.zbzt"
                  style="width: 100%"
                ></InputNumber>
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div slot="footer">
          <Button type="text" @click="modalVisible = false">取消</Button>
          <Button type="primary" :loading="submitLoading" @click="handleSubmit"
            >提交</Button
          >
        </div>
      </Modal>
    </div>
    <div style="border: 1px solid tomato" :sm="12" class="search_info">
      <h3>招标记录</h3>
      <Card>
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
                  <DropdownItem
                    :selected="tableSize == 'default'"
                    name="default"
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
          已选择 <span class="select-count">{{ selectList.length }}</span> 项
          <a class="select-clear" @click="clearSelectAll">清空</a>
        </Alert>
        <Table
          :loading="loading"
          border
          :columns="columns"
          :data="data"
          :size="tableSize"
          ref="table"
          sortable="custom"
          @on-sort-change="changeSort"
          @on-selection-change="changeSelect"
        ></Table>
        <Row type="flex" justify="end" class="page">
          <Page
            :current="searchForm.pageNumber"
            :total="total"
            :page-size="searchForm.pageSize"
            @on-change="changePage"
            @on-page-size-change="changePageSize"
            :page-size-opts="[10, 20, 50]"
            size="small"
            show-total
            show-elevator
            show-sizer
          ></Page>
        </Row>
      </Card>
      <Modal
        :title="modalTitle"
        v-model="modalVisible"
        :mask-closable="false"
        :width="720"
      >
        <Form
          ref="form"
          :model="form"
          :rules="formValidate"
          label-position="top"
        >
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="项目名称" prop="xmmc">
                <Input v-model="form.xmmc" clearable />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="项目分标号数" prop="xmfbhs">
                <InputNumber
                  v-model="form.xmfbhs"
                  style="width: 100%"
                ></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="招标负责人" prop="zbfzr">
                <Input v-model="form.zbfzr" clearable />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="招标方式" prop="zbfs">
                <Input v-model="form.zbfs" clearable />
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="开始招标时间" prop="kszbsj">
                <DatePicker
                  type="date"
                  v-model="form.kszbsj"
                  clearable
                  style="width: 100%"
                ></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="结束招标时间" prop="jszbsj">
                <DatePicker
                  type="date"
                  v-model="form.jszbsj"
                  clearable
                  style="width: 100%"
                ></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="招标金额" prop="zbje">
                <Input v-model="form.zbje" clearable />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="招标代理机构" prop="zbdljg">
                <Input v-model="form.zbdljg" clearable />
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
              <FormItem label="代理机构负责人" prop="dljgfzr">
                <Input v-model="form.dljgfzr" clearable />
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div slot="footer">
          <Button type="text" @click="modalVisible = false">取消</Button>
          <Button type="primary" :loading="submitLoading" @click="handleSubmit"
            >提交</Button
          >
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
// 根据你的实际请求api.js位置路径修改
import {
  getTenderingInfoList,
  addTenderingInfo,
  editTenderingInfo,
  deleteTenderingInfo,
} from "@/api/index";
import { shortcuts } from "@/libs/shortcuts";
export default {
  name: "tenderingInfo",
  components: {},
  data() {
    return {
      tableSize: "default",
      openSearch: true, // 显示搜索
      openTip: true, // 显示提示
      loading: true, // 表单加载状态
      modalType: 0, // 添加或编辑标识
      modalVisible: false, // 添加或编辑显示
      modalTitle: "", // 添加或编辑标题
      searchForm: {
        // 搜索框初始化对象
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "createTime", // 默认排序字段
        order: "desc", // 默认排序方式
      },
      form: {
        // 添加或编辑表单对象初始化数据
        xmmc: "",
        xmfbhs: 0,
        zbfzr: "",
        zbfs: "",
        kszbsj: "",
        jszbsj: "",
        zbje: "",
        zbdljg: "",
        dljgfzr: "",
      },
      // 表单验证规则
      formValidate: {},
      submitLoading: false, // 添加或编辑提交状态
      selectList: [], // 多选数据
      columns: [
        // 表头
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          type: "index",
          width: 60,
          align: "center",
        },
        {
          title: "项目名称",
          key: "xmmc",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "项目分标号数",
          key: "xmfbhs",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "招标负责人",
          key: "zbfzr",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "招标方式",
          key: "zbfs",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "开始招标时间",
          key: "kszbsj",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "结束招标时间",
          key: "jszbsj",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "招标金额",
          key: "zbje",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "招标代理机构",
          key: "zbdljg",
          minWidth: 120,
          sortable: false,
        },
        {
          title: "代理机构负责人",
          key: "dljgfzr",
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
                    },
                  },
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
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ],
       tableHeader:["过程名称","未招标","招标中","招标结束"],
       dat:[
                {name:"设计",zbz:"1",zbjs:"0",wzb:"1"},
                {name:"施工",zbz:"0",zbjs:"0",wzb:"3"},
                {name:"监理",zbz:"0",zbjs:"0",wzb:"3"},
                {name:"造价",zbz:"0",zbjs:"0",wzb:"1"}
            ],
      data: [], // 表单数据
      total: 0, // 表单数据总数
    };
  },
  methods: {
    init() {
      this.getDataList();
    },
    initChart() {
      let myChart = echarts.init(document.getElementById("chart"));
      let option = {
        xAxis: {
          type: "category",
          data: ["设计", "施工", "监理", "造价"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            // 显示百分比
            show: true,
            interval: "auto",
            formatter: "{value} %",
          },
          show: true,
          scale: true, // Y轴起始值为数据的最小值
        },
        series: [
          {
            data: [100, 25, 55, 0],
            type: "bar",
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = [
                    "#4CD964",
                    "#5AC8FA",
                    "#007AFF",
                    "#5856D6",
                    "#FF2D70",
                    "#FF3B30",
                    "#FF9500",
                    "#FFCC00",
                    "#8E8E93",
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
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
      getTenderingInfoList(this.searchForm).then((res) => {
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
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (typeof this.form.kszbsj == "object") {
            this.form.kszbsj = this.format(this.form.kszbsj, "yyyy-MM-dd");
          }
          if (typeof this.form.jszbsj == "object") {
            this.form.jszbsj = this.format(this.form.jszbsj, "yyyy-MM-dd");
          }
          this.submitLoading = true;
          if (this.modalType === 0) {
            // 添加 避免编辑后传入id等数据 记得删除
            delete this.form.id;
            addTenderingInfo(this.form).then((res) => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.getDataList();
                this.modalVisible = false;
              }
            });
          } else {
            // 编辑
            editTenderingInfo(this.form).then((res) => {
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
          deleteTenderingInfo({ ids: v.id }).then((res) => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.clearSelectAll();
              this.getDataList();
            }
          });
        },
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
          this.selectList.forEach(function (e) {
            ids += e.id + ",";
          });
          ids = ids.substring(0, ids.length - 1);
          // 批量删除
          deleteTenderingInfo({ ids: ids }).then((res) => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.clearSelectAll();
              this.getDataList();
            }
          });
        },
      });
    },
  },
  mounted() {
    this.init();
    this.initChart();
  },
};
</script>
<style lang="less">
@import "@/styles/table-common.less";
</style>