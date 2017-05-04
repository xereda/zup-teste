<template>
  <div>
    <div id="top"></div>
    <dribbble-header></dribbble-header>
    <dribbble-hero v-show="showHero"></dribbble-hero>
    <dribbble-body></dribbble-body>
    <dribbble-footer></dribbble-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import 'bulma'
import 'font-awesome/scss/font-awesome.scss'
import DribbbleHeader from './components/Header.vue'
import DribbbleHero from './components/Hero.vue'
import DribbbleBody from './components/Body.vue'
import DribbbleFooter from './components/Footer.vue'

export default {
  name: 'Main',
  data () {
    return {
      showHero: false
    }
  },
  mounted () {
    console.log('app.vue ---')
    this.showHero = true
  },
  methods: {
  },
  components: {
    DribbbleHeader,
    DribbbleHero,
    DribbbleBody,
    DribbbleFooter
  }
}
</script>

<style lang="scss">
  @import './scss/config';

  .logo-header {
    width: 125px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-time
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
