import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,

}).$mount('#app')


