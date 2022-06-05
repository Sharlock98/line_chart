<template>
<div>
<!--  <div id="chartLineBox" style="width: 100%;height: 70vh;"></div>-->
  <p>1222222</p>
</div>
</template>

<script>

// import * as echarts from "echarts";

export default {
  name: 'Ch0',
  data(){
    return{
      // data1: localStorage.getItem('data1'),
    }
  },
  mounted() {

  },




  // creatChart() {
  //   this.chartLine = echarts.init(document.getElementById('chartLineBox'));
  //   // 指定图表的配置项和数据
  //   var option = {
  //     tooltip: {              //设置tip提示
  //       trigger: 'axis'
  //     },
  //     legend: {               //设置区分（哪条线属于什么）
  //       data: ['ch0', 'ch1', 'ch2'],
  //       textStyle: {
  //         color: "rgb(255,255,255)",
  //         fontWeight: "bold",
  //         fontSize: 16
  //       }
  //     },
  //     color: ['#efb805', '#05ef24', '#ef059d'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
  //     xAxis: {                //设置x轴
  //       type: 'category',
  //       boundaryGap: false,     //坐标轴两边不留白
  //       data: this.num,
  //       name: 'ms',           //X轴 name
  //       nameTextStyle: {        //坐标轴名称的文字样式
  //         color: '#fff',
  //         fontSize: 40,
  //         padding: [0, 0, 0, 0]
  //       },
  //       axisLine: {
  //         lineStyle: {
  //           color: '#fff'
  //         }
  //       },
  //       axisLabel: {
  //         textStyle: {
  //           color: '#fff'
  //         },
  //       },
  //     },
  //     yAxis: {
  //       name: '幅值',
  //       scale: true,
  //       axisLabel: {
  //         textStyle: {
  //           color: '#fff'
  //         }
  //       },
  //       nameTextStyle: {
  //         color: '#fff',
  //         fontSize: 24,
  //         padding: [0, 0, 10, 0]
  //       },
  //       type: 'value'
  //     },
  //     series: [
  //       {
  //         name: 'ch0',
  //         data: this.data1,
  //         type: 'line',               // 类型为折线图
  //         lineStyle: {                // 线条样式 => 必须使用normal属性
  //           normal: {
  //             color: '#efb805',
  //           }
  //         },
  //         symbol: 'none',
  //       },
  //       {
  //         name: 'ch1',
  //         data: this.data2,
  //         type: 'line',               // 类型为折线图
  //         lineStyle: {                // 线条样式 => 必须使用normal属性
  //           normal: {
  //             color: '#05ef24',
  //           }
  //         },
  //         symbol: 'none',
  //       },
  //       {
  //         name: 'ch2',
  //         data: this.data3,
  //         type: 'line',               // 类型为折线图
  //         lineStyle: {                // 线条样式 => 必须使用normal属性
  /*          normal: {*/
  //             color: '#ef059d',
  //           }
  //         },
  //         symbol: 'none',
  //       },
  //     ],
  //   };
  //   // 使用刚指定的配置项和数据显示图表。
  //   this.chartLine.setOption(option);
  // }

}
</script>

<style scoped>

</style>