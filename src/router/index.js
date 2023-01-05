import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import desc from '../views/desc'
import news from '../views/news'
import newsDetail from '../views/newsDetail'
import nowAnnualMeeting from '../views/nowAnnualMeeting'
import development from '../views/development'
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
    path: '/development',
    name: 'development',
    component: development
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/news/:id',
    name: 'newsDetail',
    component: newsDetail
  },
  // {
  //   path: '/news/:cate',
  //   name: 'newsCate',
  //   component: news
  // },
  // {
  //   path: '/news/:cate/:id',
  //   name: 'newsDetail',
  //   component: newsDetail
  // },
  {
    path: '/research',
    name: 'research',
    component: news
  },
  {
    path: '/research/:cate',
    name: 'researchCate',
    component: news
  },
  {
    path: '/research/:cate/:id',
    name: 'researchDetail',
    component: newsDetail
  },
  {
    path: '/now',
    name: 'now',
    component: nowAnnualMeeting
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/historyAM.vue')
  },
  {
    path: '/history/:id',
    name: 'AMDetail',
    component: () => import(/* webpackChunkName: "history" */ '../views/AMDetail.vue')
  },
  {
    path: '/people',
    name: 'people',
    component: () => import(/* webpackChunkName: "people" */ '../views/people.vue')
  },
  {
    path: '/people/:id',
    name: 'peopleDetail',
    component: () => import(/* webpackChunkName: "people" */ '../views/peopleDetail.vue')
  },
  {
    path: '/hire',
    name: 'hire',
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/hire.vue')
  },
  {
    path: '/conUs',
    name: 'conUs',
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/newsView/contactUs.vue')
  },
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
