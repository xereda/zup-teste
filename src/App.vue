<template>
  <div>
    <div id="top"></div>
    <dribbble-header></dribbble-header>
    <dribbble-hero v-show="showHero"></dribbble-hero>
    <dribbble-body></dribbble-body>
  </div>
</template>

<script>
import 'bulma'
import 'font-awesome/scss/font-awesome.scss'
import DribbbleHeader from './components/Header.vue'
import DribbbleHero from './components/Hero.vue'
import DribbbleBody from './components/Body.vue'

export default {
  name: 'Main',
  data () {
    return {
      showHero: false
    }
  },
  mounted () {
    this.showHero = true
  },
  methods: {
  },
  components: {
    DribbbleHeader,
    DribbbleHero,
    DribbbleBody
  }
}
</script>

<style lang="css">
  /*@import url('https://fonts.googleapis.com/css?family=Quando|Happy+Monkey');*/
  .logo-header {
    width: 125px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
