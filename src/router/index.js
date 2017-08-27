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
      path: '/',
      component: r => require(['../components/page/home.vue'], r),
      children: [
        {
          path: '/android',
          component: r => require(['../components/page/form.vue'], r)
        },
        {
          path: '/wear',
          component: r => require(['../test/wear.vue'], r)
        },
        {
          path: '/tv',
          component: r => require(['../test/tv.vue'], r)
        },
        {
          path: '/things',
          component: r => require(['../test/things.vue'], r)
        },
        {
          path: '/train',
          component: r => require(['../test/train.vue'], r)
        }
      ]
    }
    // 参考：https://router.vuejs.org/zh-cn/essentials/nested-routes.html
  ]
})

