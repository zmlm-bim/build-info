<template>
  <div>
    <Row :gutter="20" style="justify-content: center; margin-top: 50px">
      <Col :sm="4">
        <cardInfo :img="imgs.icon1" title="项目信息" class="" />
      </Col>
      <Col :sm="4">
        <cardInfo :img="imgs.icon2" title="项目设计" class="" />
      </Col>
      <Col :sm="4">
        <cardInfo :img="imgs.icon3" title="施工管理" class="" />
      </Col>
      <Col :sm="4">
        <cardInfo :img="imgs.icon4" title="监理管理" class="" />
      </Col>
      <Col :sm="4">
        <cardInfo :img="imgs.icon5" title="造价管理" class="" />
      </Col>
    </Row>
    <Row :gutter="20" style="margin-top: 50px">
      <Col :sm="12"> <h3>项目里程碑</h3> </Col>
      <Col :sm="12"> <h3>项目施工进度</h3> </Col>
    </Row>
    <Row :gutter="20">
      <Col style="border: 1px solid black;display: flex;flex-direction: column;justify-content: center;border-right: 0;" :sm="12"
        ><Row :gutter="20" >
          <Col :sm="24">
            <Card>
              <div class="projectCard">
                <h3 style="width: 100px">项目一期</h3>
                <Steps :current="4">
                  <Step title="立项"></Step>
                  <Step title="设计"></Step>
                  <Step title="采购"></Step>
                  <Step title="施工"></Step>
                  <Step title="验收"></Step>
                </Steps>
              </div>
            </Card>
          </Col>
        </Row>
        <Row :gutter="20" style="margin-top: 30px">
          <Col :sm="24" style="margin-bottom: 30px">
            <Card>
              <div class="projectCard">
                <h3 style="width: 100px">项目二期</h3>
                <Steps :current="2">
                  <Step title="立项"></Step>
                  <Step title="设计"></Step>
                  <Step title="采购"></Step>
                  <Step title="施工"></Step>
                  <Step title="验收"></Step>
                </Steps>
              </div>
            </Card>
          </Col> </Row
      >
       <Row :gutter="20" >
          <Col :sm="24" >
            <Card>
              <div class="projectCard">
                <h3 style="width: 100px">项目三期</h3>
                <Steps :current="0">
                  <Step title="立项"></Step>
                  <Step title="设计"></Step>
                  <Step title="采购"></Step>
                  <Step title="施工"></Step>
                  <Step title="验收"></Step>
                </Steps>
              </div>
            </Card>
          </Col> </Row
      >
      </Col>
      <Col style="border: 1px solid black" :sm="12">
        <div id="chart" style="height: 350px"></div>
      </Col>
    </Row>
  </div>
</template>

<script>
import * as echarts from "echarts";
import cardInfo from "./components/cardInfo.vue";

export default {
  components: {
    cardInfo,
  },
  data() {
    return {
      imgs: {
        icon1: require("@/assets/bf/项目信息.png"),
        icon2: require("@/assets/bf/项目设计.jpg"),
        icon3: require("@/assets/bf/施工管理.jpg"),
        icon4: require("@/assets/bf/监理管理.jpg"),
        icon5: require("@/assets/bf/造价管理.jpg"),
      },
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let myChart = echarts.init(document.getElementById("chart"));
      let option = {
        xAxis: {
          type: "category",
          data: ["A分标", "B分标", "C分标", "D分标", "E分标"],
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
            data: [45, 85, 55, 100, 23],
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
  },
};
</script>

<style lang="less" scoped>
.projectCard {
  display: flex;
}
</style>