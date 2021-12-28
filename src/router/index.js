import Vue from 'vue'
import Router from 'vue-router'
import dexscreener from '@/components/dexscreener'
import utilBox from '@/components/utilBox'
import wool from '@/components/wool'
import infura from '@/components/infura'

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
    {
      path: '/wool',
      name: 'wool',
      component: wool
    },
    {
      path: '/infura',
      name: 'infura',
      component: infura
    },
  ]
})
