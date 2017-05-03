import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import store from './store/store'
// import jump from 'jump.js'

import Shots from './modules/shots/route'

const routes = [
  ...Shots,
  { path: '*', redirect: '/shots' }
]

const router = new VueRouter({
  routes
})

// router.afterEach((to, from) => {
//   const states = store.state.states
//   console.log(states)
//   jump(states.view === 'small' ? states.scrollPosition.small : states.scrollPosition.large)
// })

export default router
