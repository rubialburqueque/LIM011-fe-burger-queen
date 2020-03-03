import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  VueRouter

}).$mount('#app')


