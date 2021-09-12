<template>
  <div>
    <div id="chartLineBox" style="width: 100%;height: 70vh;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return{
      flag:false,
      maxShow:200,
      i:0,
      num:[],
      data1 : [],
      data2 : []
    }
  },
  watch:{
    data1(){
      this.creatChart();
    }
  },
  methods:{
    addData(shift){
      if (this.flag==true)
        this.num.push(this.i++);
      this.data1.push(parseInt(Math.random()*100000000));
      if (shift) {
        this.num.shift();
        this.data1.shift();
        this.data2.shift();
      }
    },
    creatChart(){
      this.chartLine = echarts.init(document.getElementById('chartLineBox'));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {              //设置tip提示
          trigger: 'axis'
        },
        legend: {               //设置区分（哪条线属于什么）
          data: ['心率1',]
        },
        color: ['#FA6F53', ],       //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: {                //设置x轴
          type: 'category',
          boundaryGap: false,     //坐标轴两边不留白
          data: this.num,
          name: '',           //X轴 name
          nameTextStyle: {        //坐标轴名称的文字样式
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 0, 20]
          },
        },
        yAxis: {
          name: '从传感器获取到的值',
          nameTextStyle: {
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          type: 'value'
        },
        series: [
          {
            name: '心率1',
            data: this.data1,
            type: 'line',               // 类型为折线图
            lineStyle: {                // 线条样式 => 必须使用normal属性
              normal: {
                color: '#FA6F53',
              }
            },
            symbol: 'none',
          },
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
    }
  },
   mounted(){
    while (this.i<this.maxShow){
      this.num.push(this.i++);
    }
    this.creatChart();

    const that=this;
    setInterval(function () {
      if (that.data1.length<that.maxShow){
        that.addData();
      }else {
        that.flag=true;
        that.addData(true);
      }
    }, 500);


  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
