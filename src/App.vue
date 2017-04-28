<template>
  <div>
    <div id="top"></div>
    <jmob-header></jmob-header>
    <jmob-hero v-show="showHero"></jmob-hero>
    <jmob-body></jmob-body>
  </div>
</template>

<script>
import 'bulma'
import 'font-awesome/scss/font-awesome.scss'
import JmobHeader from './components/Header.vue'
import JmobHero from './components/Hero.vue'
import JmobBody from './components/Body.vue'

export default {
  name: 'JmobMain',
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
    JmobHeader,
    JmobHero,
    JmobBody
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
