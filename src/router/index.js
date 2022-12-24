import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/newsView/index'
import desc from '../views/newsView/desc'
import news from '../views/newsView/news'
import newsDetail from '../views/newsView/newsDetail'
import nowAnnualMeeting from '../views/newsView/nowAnnualMeeting'
import development from '../views/newsView/development'
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
    path: '/news/:cate',
    name: 'newsCate',
    component: news
  },
  {
    path: '/news/:cate/:id',
    name: 'newsDetail',
    component: newsDetail
  },
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
    component: () => import(/* webpackChunkName: "history" */ '../views/newsView/historyAM.vue')
  },
  {
    path: '/history/:id',
    name: 'AMDetail',
    component: () => import(/* webpackChunkName: "history" */ '../views/newsView/AMDetail.vue')
  },
  {
    path: '/people',
    name: 'people',
    component: () => import(/* webpackChunkName: "people" */ '../views/newsView/people.vue')
  },
  {
    path: '/people/:id',
    name: 'peopleDetail',
    component: () => import(/* webpackChunkName: "people" */ '../views/newsView/peopleDetail.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
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
