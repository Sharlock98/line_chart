<template>
  <div style="width: 100vw;height: 100vh">
    <img style="width: 25%;margin: 20px 50px 0;" src="../assets/img.png"/>
<!--    <div id="chartLineBox" style="width: 100%;height: 70vh;"></div>-->
    <router-view></router-view>
    <div style="width: 100%;display: flex;justify-content: center">
      <router-link style="margin-right: 10px" :to="{path:'/Ch0'}">
        <Button size="large" type="warning">ch0</Button>
      </router-link>
      <router-link style="margin-right: 10px" :to="{path:'/Ch0'}">
        <Button size="large" type="success">ch1</Button>
      </router-link>
      <router-link style="margin-right: 100px" :to="{path:'/Ch0'}">
        <Button size="large" type="error">ch2</Button>
      </router-link>
      <download-excel
          style="width: 100px"
          class="export-excel-wrapper"
          :data="excel_data"
          :fields="json_fields"
          name="数据导出.xls">
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <Button size="large" type="success">导出为Excel</Button>
      </download-excel>
    </div>
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
      path: "ws://106.53.132.183:8080/myWs",
      // path: "ws://localhost:8080/myWs",
      socket: "",
      params: [],
      flag: false,
      maxShow: 10000,
      i: 0,
      num: [0],
      data1: [],
      data2: [],
      data3: [],
      data: 0,
      json_fields: {
        "时间": "time",
        "端口0": "ch0",    //常规字段
        "端口1": "ch1",    //常规字段
        "端口2": "ch2",    //常规字段
      },
      excel_data: [],
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
      console.log(arr)
      if (this.data1.length < this.maxShow / 50) {
        this.addData(false, parseInt(arr[1]), parseInt(arr[3]), parseInt(arr[5]));
      } else {
        this.flag = true;
        this.addData(true, parseInt(arr[1]), parseInt(arr[3]), parseInt(arr[5]));
      }

    },
    send: function () {
      this.socket.send(this.params)
    },
    close: function () {
      console.log("socket已经关闭")
    },
    addData(shift, msg0, msg1, msg2) {
      //判断是否需要进行图像的移动
      if (this.flag === true)
        this.num.push(this.i += 50);
      this.data1.push(msg0);
      this.data2.push(msg1);
      this.data3.push(msg2);
      if (shift) {
        this.num.shift();
        this.data1.shift();
        this.data2.shift();
        this.data3.shift();
        // this.data2.shift();
      }
      //生成excel，字符串转成JSON
      let arr;
      if (this.i <= this.maxShow)
        arr = "{\"time\":" + (this.data1.length - 1) * 50 + "," + "\"ch0\":" + msg0 + "," + "\"ch1\":" + msg1 + "," + "\"ch2\":" + msg2 + "}"
      else
        arr = "{\"time\":" + this.i + "," + "\"ch0\":" + msg0 + "," + "\"ch1\":" + msg1 + "," + "\"ch2\":" + msg2 + "}"
      this.excel_data.push(JSON.parse(arr))
    },
  },
  mounted() {
    // 初始化
    this.init()
    while (this.i < this.maxShow) {
      this.num.push(this.i += 50);
    }
    this.creatChart();

    //随机生成数据（可作为效果展示）
    const that = this;
    setInterval(function () {
      if (that.data1.length < that.maxShow / 50) {
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
