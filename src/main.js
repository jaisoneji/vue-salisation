import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router';
import VueNumber from 'vue-number-animation'


Vue.use(VueRouter)
Vue.use(VueNumber)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
