import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/newsView/index'
import desc from '../views/newsView/desc'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/desc',
    name: 'desc',
    component: desc
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "about" */ '../views/newsView/history.vue')
  },
  {
    path: '/people',
    name: 'people',
    component: () => import(/* webpackChunkName: "people" */ '../views/newsView/people.vue')
  },
  // {
  //   path: '/news/:id',
  //   name: 'newsDetail',
  //   component: () => import(/* webpackChunkName: "newsDetail" */ '../views/web/newsDetail.vue')
  // },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/newsView/contactUs.vue')
  },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: signup
  // },
  {
    path: '*',
    redirect: '/'
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 网站统计
  /* eslint-disable */
  // if (_hmt) {
  //   if (to.path) {
  //     _hmt.push(['_trackPageview', to.fullPath])
  //   }
  // }
  next()
  /* eslint-enable */
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router
