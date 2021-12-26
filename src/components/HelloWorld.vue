<template>
  <div>
    <div id="chartLineBox" style="width: 100%;height: 70vh;"></div>
    <download-excel
        class="export-excel-wrapper"
        :data="excel_data"
        :fields="json_fields"
        name="数据导出.xls">
      <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
      <button style="font-size: 30px;margin: 20px">导出为Excel</button>
    </download-excel>
  </div>
</template>

<script>

import * as echarts from 'echarts';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      path: "ws://localhost:8080/myWs",
      socket: "",
      params: [],
      flag: false,
      maxShow: 1000,
      i: 0,
      num: [0],
      data1: [],
      data2: [],
      data: 0,
      json_fields: {
        "时间":"time",
        "端口0": "ch0",    //常规字段
      },
      excel_data:[],
    }
  },
  watch: {
    data1() {
      this.creatChart();
    }
  },
  methods: {
    init: function () {
      if (typeof (WebSocket) === "undefined") {
        alert("您的浏览器不支持socket")
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function () {
      console.log("websocket连接成功")
    },
    error: function () {
      console.log("连接错误")
    },
    getMessage: function (msg) {
      let arr = msg.data.split(/[:,\n]/)
      if (this.data1.length < this.maxShow) {
        this.addData(false, parseInt(arr[1]));
      } else {
        this.flag = true;
        this.addData(true, parseInt(arr[1]));
      }
      console.log(arr[1])
    },
    send: function () {
      this.socket.send(this.params)
    },
    close: function () {
      console.log("socket已经关闭")
    },
    addData(shift, msg) {
      //判断是否需要进行图像的移动
      if (this.flag === true)
        this.num.push(this.i+=20);
      this.data1.push(msg);
      if (shift) {
        this.num.shift();
        this.data1.shift();
        // this.data2.shift();
      }
      //生成excel，字符串转成JSON
      let arr;
      if (this.i <= this.maxShow)
        arr="{\"time\":"+(this.data1.length-1)*20+","+"\"ch0\":"+msg+"}"
      else
        arr="{\"time\":"+this.i+","+"\"ch0\":"+msg+"}"
      this.excel_data.push(JSON.parse(arr))
    },
    creatChart() {
      this.chartLine = echarts.init(document.getElementById('chartLineBox'));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {              //设置tip提示
          trigger: 'axis'
        },
        legend: {               //设置区分（哪条线属于什么）
          data: ['ch0',]
        },
        color: ['#FA6F53',],       //设置区分（每条线是什么颜色，和 legend 一一对应）
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
          name: '脑血流',
          scale: true,
          nameTextStyle: {
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          type: 'value'
        },
        series: [
          {
            name: 'ch0',
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
  mounted() {
    // 初始化
    this.init()
    while (this.i < this.maxShow) {
      this.num.push(this.i+=20);
    }
    this.creatChart();

    const that = this;
    setInterval(function () {
      if (that.data1.length < that.maxShow/20) {
        that.addData(false, Math.random() * 1000);
      } else {
        that.flag = true;
        that.addData(true, Math.random() * 1000);
      }
    }, 50);
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
