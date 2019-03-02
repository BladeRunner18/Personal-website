import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/Home'
import contact from '../pages/Contact'
import about from '../pages/About'
import project from '../pages/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: home
    },
    {
      path:'/contact',
      component:contact
    },
    {
      path:'/about',
      component:about
    },
    {
      path:'/project',
      component:project,
    }
  ],
  mode:"history",
})
