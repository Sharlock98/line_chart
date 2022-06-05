import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)
// import Vuex from 'vuex'
// Vue.use(Vuex)
//
// export default new Vuex({
//   state: {
//     fromFatherInfo: '',
//     fromChildInfo: '',
//     fromBrotherInfo: ''
//   },
// })


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
  router
}).$mount('#app')
