import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/account'
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
      path: '/menu',
      component: r => require(['../components/common/menu.vue'], r)
    },
    {
      path: '/account',
      component: r => require(['../components/common/account.vue'], r)
    },
    {
      path: '/test',
      component: r => require(['../test/test.vue'], r)
    }
  ]
})
