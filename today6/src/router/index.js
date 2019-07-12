import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../views/home.vue')
const My=()=>import('../views/my.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
        path:"/",
        redirect:'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }


  ]
})
