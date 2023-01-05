import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import axios from './axios/index-dev'
// import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import './assets/style/common.css'
import './assets/style/editor.css'
import './assets/font/iconfont'
// import animated from 'animate.css'
// 网站统计
/* eslint-disable */
// var _hmt = _hmt || []
// window._hmt = _hmt; // 将_hmt挂载到window下
// (function () {
//   var hm = document.createElement('script')
//   hm.src = 'https://hm.baidu.com/hm.js?xxxxxxxxx'
//   var s = document.getElementsByTagName('script')[0]
//   s.parentNode.insertBefore(hm, s)
// })()
/* eslint-enable */

Vue.use(ElementUI)

// Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
