<template>
  <div>
    <el-row class="dashboard-row-card">
      <el-col :xs="12" :sm="12" :lg="8" class="dashboard-col-card">
        <el-card class="dashboard-box-card">
          <div class='card-panel'>
            <div class="card-panel-icon-wrapper icon-people">
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">New Visits</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="8" class="dashboard-col-card">
        <el-card class="dashboard-box-card">
          <div class='card-panel'>
            <div class="card-panel-icon-wrapper icon-people">
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">New Visits</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="8" class="dashboard-col-card">
        <el-card class="dashboard-box-card">
          <div class='card-panel'>
            <div class="card-panel-icon-wrapper icon-people">
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">New Visits</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="dashboard-col-char">
        <el-card>
          <div id='char1' style="height:300px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  var echarts = require('echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default{
    data () {
      return {msg: '这个是首页模板页'}
    },
    mounted(){
      this.initChar()
    },
    methods: {
        initChar(){
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('char1'));
          // 绘制图表
          myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          });
        }
    }
  }
</script>
