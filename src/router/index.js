import Vue from 'vue'
import Router from 'vue-router'
import dexscreener from '@/components/dexscreener'
import utilBox from '@/components/utilBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dexscreener',
      name: 'dexscreener',
      component: dexscreener
    },
    {
      path: '/utilBox',
      name: 'utilBox',
      component: utilBox
    },
  ]
})
