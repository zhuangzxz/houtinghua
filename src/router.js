import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import MeetView from './views/Meet.vue'
import SearchView from './views/Search.vue'
import MessageView from './views/Message.vue'
import VipView from './views/Vip.vue'

import MyInfoView from './views/MyInfo.vue'
import xqym from './views/xqym.vue'
import MainPannel from './views/myinfo/mainpanel.vue'
import profileSetPannel from './views/myinfo/profileset'
import basicinfoPanel from './views/myinfo/basicinfo.vue'
import guildPannel from './views/user/guide'
import loginAndRegisterPannel from './views/user/loginandregister'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: guildPannel
    },
    {
      path: '/userloginandregister',
      name: 'loginandregister',
      component: loginAndRegisterPannel
    },
    {
      path: '/meet',
      name: 'meet',
      component: MeetView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/message',
      name: 'message',
      component: MessageView
    },
    {
      path: '/vip',
      name: 'vip',
      component: VipView
    }, {
      path: '/xqym/:zzid',
      name: 'xqym',
      component: xqym
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: MyInfoView,
      children: [
        {
          path: '',
          name: 'mainpannel',
          redirect: '/myinfo/main'
        },
        {
          path: 'main',
          name: 'mainpannel',
          component: MainPannel
        },
        {
          path: 'profileset',
          name: 'profileset',
          component: profileSetPannel
        },
        {
          path: 'basicinfo',
          name: 'basicinfo',
          component: basicinfoPanel
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
