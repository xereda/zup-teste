import Main from './Main.vue'
import ShotDetail from './ShotDetail.vue'

export default [
  {
    path: '/shots',
    name: 'shots',
    component: Main
  },
  {
    path: '/shots/:shotId',
    name: 'shotDetail',
    component: ShotDetail
  }
]
