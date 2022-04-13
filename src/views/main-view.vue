<template>
  <div id="main-div">
    <welcome>
      <el-carousel :autoplay="false" @change="doAfterChange">
        <el-carousel-item>
          <div class="my-chart"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="my-chart"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="my-chart"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="my-chart"></div>
        </el-carousel-item>
        <el-carousel-item style="background-color: #FFFFFF;">
          <div style="width: 38.2%; height: 100%; float: left;">
            <el-input type="textarea" :rows="8" :value="JSON.stringify(conditionGroup, undefined, 2)">
            </el-input>
          </div>
          <div style="width: 61.8%; height: 100%; float: left; overflow: auto;">
            <condition-group v-bind:condition-group="conditionGroup">
              <template slot-scope="scope">
                <el-input v-model="scope.condition.name"></el-input>
              </template>
            </condition-group>
          </div>
        </el-carousel-item>
      </el-carousel>
    </welcome>
  </div>
</template>

<script>
  import axios from 'axios';
  import Welcome from '../components/welcome';
  import ConditionGroup from '../components/condition/condition-group';

  export default {
    name: 'main-view',
    components: {welcome: Welcome, conditionGroup: ConditionGroup},
    data() {
      return {
        chartList: [],
        conditionGroup: {
          logic: true, conditions: []
        }
      };
    },
    mounted() {
      const chartOption = {
        xAxis: {
          type: 'category',
          axisLabel: {
            fontSize: 18
          },
          axisLine: {
            lineStyle: {
              color: '#FFF'
            }
          },
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 18
          },
          axisLine: {
            lineStyle: {
              color: '#FFF'
            }
          }
        },
        series: [
          {
            type: 'line',
            smooth: true,
            symbolSize: 10,
            data: [480, 680, 360, 580, 420, 740, 300]
          },
          {
            type: 'line',
            smooth: true,
            symbolSize: 10,
            data: [380, 480, 300, 520, 280, 420, 180]
          }
        ]
      };
      // 重要！页面渲染完成后再绘制图表！！！
      this.$nextTick(() => {
        const elements = document.getElementsByClassName('my-chart');
        for (const e of elements) {
          const myChart = this.$echarts.init(e);
          myChart.setOption(chartOption);
          this.chartList.push(myChart);
        }
      });
    },
    beforeDestroy() {
      for (const chart of this.chartList) {
        chart.dispose();
      }
    },
    methods: {
      doAfterChange(current) {
        axios.get('/spiritual-domain-example/welcome').then(value => {
          this.$message.success(value.data + '　' + (current + 1));
        }).catch(reason => {
          this.$message.error(reason.message);
        }).finally(() => {
          this.$message.info('请求完成！');
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  #main-div {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    .my-chart {
      height: 100%;
    }
    /deep/ .el-carousel {
      height: calc(100% - 16px);
      padding: 8px;
      .el-carousel__container {
        height: 100%;
        background-color: #364d79;
      }
      .el-carousel__item {
        height: 100%;
      }
      .el-carousel__button {
        height: 8px;
      }
      .el-textarea, .el-textarea__inner {
        height: 100%;
      }
    }
  }
</style>
