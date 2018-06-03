<template>
  <div class="test-trans">
    <div class="trans-content" :class="{'a':isT}">{{msg}}</div>
    <el-button type="primary" plain @click="trans">主要按钮</el-button>
    <div id="main" style="height: 200px">

    </div>
  </div>
</template>

<style scoped>
  .test-trans .trans-content {
    width: 400px;
    height: 200px;
    background-color: red;
    margin: 0px auto;
    transform: rotate(0deg);
    transition: .38s;
  }
  .a{
    background-color: green !important;
    transform: rotate(90deg) !important;
    transition: .38s;
  }
</style>

<script>
  var echarts = require('echarts');
  export default{
    data () {
      return {
        msg: '这个是Home模板页',
        isT: false
      }
    },
    mounted(){
     this.initChar();
    },
    methods:{
        trans(){
            this.isT = !this.isT;
        },
      initChar(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
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
