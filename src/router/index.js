import Vue from 'vue'
import Router from 'vue-router'
import vuescroll from "vuescroll"
import airJordon from '@/components/airJordon'
import chrome from '@/components/chrome'
import givenchy from '@/components/givenchy'
import index from '@/pages/index'
import search from '@/pages/search'
import "vuescroll/dist/vuescroll.css";
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(vuescroll); // install the vuescroll first

Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/airJordon',
      name: 'airJordon',
      component: airJordon
    },
    {
      path: '/chrome',
      name: 'chrome',
      component: chrome
    },
    {
      path: '/givenchy',
      name: 'givenchy',
      component: givenchy
    },
    {
      path: '/search',
        name: 'search',
        component: search,
    }
  ]
})
