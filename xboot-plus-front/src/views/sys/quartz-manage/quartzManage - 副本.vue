<style lang="less">
@import "../../../styles/table-common.less";
@import "./quartzManage.less";
</style>
<template>
  <div class="search">
    <Card>
      <Row class="operation">
        <Button @click="addRole" type="primary" icon="md-add">安排新任务</Button>
        <Button @click="delAll" icon="md-trash">批量删除</Button>
        <Button @click="init" icon="md-refresh">刷新</Button>
        <Button type="dashed" @click="openTip=!openTip">{{openTip ? "关闭提示" : "开启提示"}}</Button>
      </Row>
      <Row v-show="openTip">
        <Alert show-icon>
          已选择
          <span class="select-count">{{selectCount}}</span> 项
          <a class="select-clear" @click="clearSelectAll">清空</a>
        </Alert>
      </Row>
      <Row>
        <Table
          :loading="loading"
          border
          :columns="columns"
          :data="data"
          ref="table"
          sortable="custom"
          @on-sort-change="changeSort"
          @on-selection-change="changeSelect"
        ></Table>
      </Row>
      <Row type="flex" justify="end" class="page">
        <Page
          :current="pageNumber"
          :total="total"
          :page-size="pageSize"
          @on-change="changePage"
          @on-page-size-change="changePageSize"
          :page-size-opts="[10,20,50]"
          size="small"
          show-total
          show-elevator
          show-sizer
        ></Page>
      </Row>
    </Card>

    <Modal draggable :title="modalTitle" v-model="modalVisible" :mask-closable="true" :width="500" style="z-index:1001">
      <Form ref="form" :model="form" :label-width="100" :rules="formValidate">

        <FormItem label="任务类型" prop="jobType">
          <Select
            v-model="form.jobType"
            value="javaclass"
            @on-change="changeJobType"
          >
            <Option label="Java类" value="Java类"/>
            <Option label="Kettle" value="Kettle"/>
            <Option label="Shell" value="Shell"/>
            <Option label="Java" value="Java"/>
            <Option label="Python" value="Python"/>
          </Select>
        </FormItem>
        <FormItem label="执行类型" prop="executeType">
          <Select 
            v-model="form.executeType"
            value="1"
          >
            <Option label="单机执行" value="1"/>
            <Option label="广播执行" value="2"/>
            <Option label="MapReduce" value="3"/>
            <Option label="Map" value="4"/>
          </Select>
        </FormItem>
        <FormItem label="任务类名" prop="jobClassName">
          <Input
            v-model="form.jobClassName"
            placeholder="例如 cn.exrick.xboot.quartz.jobs.Job"
            clearable
          />
        </FormItem>
        <FormItem label="cron表达式" prop="cronExpression">
          <input-cron type="text" v-model="form.cronExpression"
            placeholder="请输入cron表达式"/>
        </FormItem>
        <FormItem label="文件上传" prop="fileInfo">
          <file-upload  v-model="form.fileInfo"></file-upload>
        </FormItem>
        <FormItem label="参数" prop="parameter">
          <Input v-model="form.parameter" />
        </FormItem>
        <FormItem label="备注" prop="description">
          <Input v-model="form.description" />
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="cancelSubmit">取消</Button>
        <Button type="primary" :loading="submitLoading" @click="handleSubmit">保存并安排</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import fileUpload from "@/views/my-components/xboot/file-upload";
import InputCron from '@/components/easy-cron/input-cron';
import {
  getQuartzListData,
  addQuartz,
  editQuartz,
  pauseQuartz,
  resumeQuartz,
  deleteQuartz
} from "@/api/index";
export default {
  name: "quartz-manage",
  components:{fileUpload,InputCron},
  data() {
    return {
      openTip: true,
      loading: true,
      sortColumn: "createTime",
      sortType: "desc",
      modalType: 0,
      modalVisible: false,
      modalTitle: "",
      form: {
        id: "",
        JobType:"",
        ExecuteType:"",
        jobClassName: "",
        cronExpression: "",
        paramter: "",
        description: "",
        fileInfo: {
          value:{},
          accept:"*.ktr,*.kjb"
        },
        fileInfoStr:""
      },
      formValidate: {
        JobType: [
          { required: true, message: "任务类型不能为空", trigger: "blur" }
        ],
        ExecuteType: [
          { required: true, message: "执行类型不能为空", trigger: "blur" }
        ],
        jobClassName: [
          { required: true, message: "任务类名不能为空", trigger: "blur" }
        ],
        cronExpression: [
          { required: true, message: "cron表达式不能为空", trigger: "blur" }
        ]
      },
      submitLoading: false,
      selectList: [],
      selectCount: 0,
      columns: [
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
          title: "任务类型",
          key: "jobType",
          sortable: true,
          minWidth: 50
        },
        {
          title: "执行类型",
          key: "executeType",
          minWidth: 80,
          align: "center",
          
          render: (h, params) => {
            let re = "";
            if (params.row.executeType == 1) {
              return h("div", [
                h("Badge", {
                  props: {
                    status: "default",
                    text: "单机执行"
                  }
                })
              ]);
            } else if (params.row.executeType == 2) {
              return h("div", [
                h("Badge", {
                  props: {
                    status: "success",
                    text: "广播执行"
                  }
                })
              ]);
            }else if (params.row.executeType == 3) {
              return h("div", [
                h("Badge", {
                  props: {
                    status: "success",
                    text: "MapReduce"
                  }
                })
              ]);
            }else if (params.row.executeType == 4) {
              return h("div", [
                h("Badge", {
                  props: {
                    status: "success",
                    text: "Map"
                  }
                })
              ]);
            }
          },
          filters: [
            {
              label: "单机执行",
              value: 1
            },
            {
              label: "广播执行",
              value: 2
            },                        {
            label: "MapReduce",
              value: 3
            },
            {
              label: "Map",
              value: 4
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value == 1) {
              return row.executeType == 1;
            } else if (value == 2) {
              return row.executeType == 2;
            }else if (value == 3) {
              return row.executeType == 3;
            }else if (value == 4) {
              return row.executeType == 4;
            }
          }
        },
        {
          title: "任务类",
          key: "jobClassName",
          sortable: true,
          minWidth: 200
        },
        {
          title: "cron表达式",
          key: "cronExpression",
          sortable: true,
          minWidth: 100
        },
        {
          title: "参数",
          key: "parameter",
          sortable: true,
          minWidth: 100
        },
        {
          title: "备注",
          key: "description",
          sortable: true,
          minWidth: 100
        },
        {
          title: "状态",
          key: "status",
          align: "center",
          width: 100,
          render: (h, params) => {
            let re = "";
            if (params.row.status == 0) {
              return h("div", [
                h("Badge", {
                  props: {
                    status: "success",
                    text: "执行中"
                  }
                })
              ]);
            } else if (params.row.status == -1) {
              return h("div", [
                h("Badge", {
                  props: {
                    status: "error",
                    text: "已停止"
                  }
                })
              ]);
            }
          },
          filters: [
            {
              label: "执行中",
              value: 0
            },
            {
              label: "已停止",
              value: -1
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value == 0) {
              return row.status == 0;
            } else if (value == -1) {
              return row.status == -1;
            }
          }
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          width: 280,
          render: (h, params) => {
            let runOrResume = "";
            if (params.row.status == 0) {
              runOrResume = h(
                "Button",
                {
                  props: {
                    type: "warning",
                    size: "small",
                    icon: "md-pause"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.pause(params.row);
                    }
                  }
                },
                "暂停"
              );
            } else {
              runOrResume = h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small",
                    icon: "md-play"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.resume(params.row);
                    }
                  }
                },
                "恢复执行"
              );
            }
            return h("div", [
              runOrResume,
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.edit(params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
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
      data: [],
      pageNumber: 1,
      pageSize: 10,
      total: 0
    };
  },
  methods: {
    init() {
      this.getQuartzList();
    },
    changePage(v) {
      this.pageNumber = v;
      this.getQuartzList();
      this.clearSelectAll();
    },
    changePageSize(v) {
      this.pageSize = v;
      this.getQuartzList();
    },
    changeSort(e) {
      this.sortColumn = e.key;
      this.sortType = e.order;
      if (e.order == "normal") {
        this.sortType = "";
      }
      this.getQuartzList();
    },
    changeJobType(){
    if (this.form.jobType == "Kettle")
      this.form.jobClassName = "cn.exrick.xboot.quartz.jobs.KettleJob";
    else
      this.form.jobClassName = "";
    },
    getQuartzList() {
      this.loading = true;
      let params = {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        sort: this.sortColumn,
        order: this.sortType
      };
      getQuartzListData(params).then(res => {
        this.loading = false;
        if (res.success) {
          this.data = res.result.content;
          this.total = res.result.totalElements;
        }
      });
    },
    cancelSubmit() {
      this.modalVisible = false;
    },
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.form.fileInfoStr = JSON.stringify(this.form.fileInfo);
          if (this.modalType == 0) {
            // 添加
            this.submitLoading = true;
            addQuartz(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.getQuartzList();
                this.modalVisible = false;
              }
            });
          } else {
            this.submitLoading = true;
            editQuartz(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.getQuartzList();
                this.modalVisible = false;
              }
            });
          }
        }
      });
    },
    addRole() {
      this.modalType = 0;
      this.modalTitle = "添加任务";
      this.$refs.form.resetFields();
      (this.form = {
        paramter: "",
        description: ""
      }),
        (this.modalVisible = true);
    },
    edit(v) {
      this.modalType = 1;
      this.modalTitle = "编辑任务";
      this.$refs.form.resetFields();
      // 转换null为""
      for (let attr in v) {
        if (v[attr] == null) {
          v[attr] = "";
        }
      }
      let str = JSON.stringify(v);
      let data = JSON.parse(str);
      this.form = data;
      if (this.form.fileInfoStr !="" && this.form.fileInfoStr != undefined ) 
        this.form.fileInfo = JSON.parse(this.form.fileInfoStr);
      else
        this.form.fileInfo = {};
      this.modalVisible = true;
    },
    pause(v) {
      this.$Modal.confirm({
        title: "确认停止",
        content: "您确认要停止任务 " + v.jobClassName + " ?",
        loading: true,
        onOk: () => {
          pauseQuartz(v).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.getQuartzList();
            }
          });
        }
      });
    },
    resume(v) {
      this.$Modal.confirm({
        title: "确认恢复",
        content: "您确认要恢复任务 " + v.jobClassName + " ?",
        loading: true,
        onOk: () => {
          resumeQuartz(v).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.getQuartzList();
            }
          });
        }
      });
    },
    remove(v) {
      this.$Modal.confirm({
        title: "确认删除",
        content: "您确认要删除任务 " + v.jobClassName + " ?",
        loading: true,
        onOk: () => {
          deleteQuartz({ids: v.id}).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.getQuartzList();
            }
          });
        }
      });
    },
    clearSelectAll() {
      this.$refs.table.selectAll(false);
    },
    changeSelect(e) {
      this.selectList = e;
      this.selectCount = e.length;
    },
    delAll() {
      if (this.selectCount <= 0) {
        this.$Message.warning("您还未选择要删除的数据");
        return;
      }
      this.$Modal.confirm({
        title: "确认删除",
        content: "您确认要删除所选的 " + this.selectCount + " 条数据?",
        loading: true,
        onOk: () => {
          let ids = "";
          this.selectList.forEach(function(e) {
            ids += e.id + ",";
          });
          ids = ids.substring(0, ids.length - 1);
          deleteQuartz({ids: ids}).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("删除成功");
              this.clearSelectAll();
              this.getQuartzList();
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
.ivu-table-cell > span {
  width: 200px;
  height:40;overflow: hidden;  
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
}

#cronModal .ivu-modal-wrap{
z-index: 9968 !important;
}
</style>