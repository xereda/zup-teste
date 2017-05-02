import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Shots from './modules/shots/route'

const routes = [
  ...Shots,
  { path: '*', redirect: '/shots' }
]

const router = new VueRouter({
  routes
})

export default router
