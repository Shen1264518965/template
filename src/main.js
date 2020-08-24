/*
 * @Author: SHEN
 * @Date: 2020-08-24 09:04:07
 * @LastEditors: SHEN
 * @LastEditTime: 2020-08-24 10:00:31
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);

import "@/assets/style/index.scss"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
