import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: r => require(['../components/page/home.vue'], r)
    },
    {
      path: '/title',
      component: r => require(['../components/common/commontitle.vue'], r)
    },
    {
      path: '/sidebar',
      component: r => require(['../components/common/sidebar.vue'], r)
    },
    {
      path: '/test',
      component: r => require(['../test/test.vue'], r)
    }
  ]
})
