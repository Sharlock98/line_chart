import Vue from 'vue'
import App from './App.vue'
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)


//import VueSocketIO from 'vue-socket.io'

// Vue.use(new VueSocketIO({
//   // 控制台调试 console.log
//   debug: true,
//   // 连接地址 后端提供
//   connection: 'http://192.168.0.109:3000',
// }))


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
