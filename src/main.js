import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

import Scroller from '@/components/Scroller'
//全局组件
Vue.component('Scroller',Scroller);

// 过滤器
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})


import Loading from '@/components/Loading'
Vue.component('Loading',Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
