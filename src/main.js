// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './lib/global.vue'


Vue.config.productionTip = false
Vue.prototype.global=global;//原型方法

/* eslint-disable no-new */
var app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
