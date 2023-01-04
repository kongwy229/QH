import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import './assets/style/common.css'
import './assets/style/editor.css'
import './assets/font/iconfont'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
