import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
Vue.use(Router)



// 路由列表
export default new Router({
  //mode:"history",
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }

  ]
})
