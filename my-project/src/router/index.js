import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
   path: '/usuario',
   name: 'Usuario',
   component: () => import('../components/UserView.vue') 
  },
  {
    path: '/chef',
    name: 'Chef',
    component: () => import('../components/ChefView.vue') 
  }
];

const router = new VueRouter({
  routes
});

export default router
