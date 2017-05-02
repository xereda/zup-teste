<template>
  <div class="container">
    <nav class="nav is-medium">
      <div class="nav-left">
        <a class="nav-item">
          <img :src="'static/images/dribbble_color.svg'" class="logo-header" alt="Bulma logo">
        </a>
      </div>

      <div class="nav-center is-hidden-tablet-only">
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-facebook"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-linkedin"></i>
          </span>
        </a>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span :class="{ 'nav-toggle': true, 'is-active': isActiveSideMenu }" @click="setActiveMenu()">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div id="side-menu" :class="{ 'nav-right': true, 'nav-menu': true, 'is-active': isActiveSideMenu, 'animated': true, 'slideInRight': true, 'slideOutRight': slideOut, }">
        <a class="nav-item is-hidden-tablet" v-scroll-to="{ el: '#top', onDone: sideBarClose }">
          Home
        </a>
        <a class="nav-item" v-scroll-to="{ el: '#atelie', onDone: sideBarClose }">
          Trabalhe conosco
        </a>
        <a class="nav-item" v-scroll-to="{ el: '#atelie', onDone: sideBarClose }">
          Ateliê de software
        </a>
        <a class="nav-item is-hidden-tablet" v-scroll-to="{ el: '#javascript', onDone: sideBarClose }">
          Javascript
        </a>
        <a class="nav-item is-hidden-tablet" v-scroll-to="{ el: '#knowhow', onDone: sideBarClose }">
          Know-how
        </a>
        <a class="nav-item is-hidden-tablet" href="#" v-scroll-to="{ el: '#atuacao', onDone: sideBarClose }">
          Atuação
        </a>

        <span class="nav-item">
          <a class="button is-primary" v-scroll-to="{ el: '#contato', onDone: sideBarClose }">
            <span class="icon is-small">
              <i class="fa fa-envelope"></i>
            </span>
            <span>Contato</span>
          </a>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default {
  name: 'DribbbleHeader',
  data () {
    return {
      isActiveSideMenu: false,
      slideOut: false
    }
  },
  methods: {
    sideBarClose () {
      this.setActiveMenu()
    },
    setActiveMenu () {
      if (this.isActiveSideMenu === true) this.slideOut = true
      setTimeout(() => {
        this.isActiveSideMenu = !this.isActiveSideMenu
        this.slideOut = false
      }, 200)
    }
  }
}
</script>

<style lang="css">
  @import '~animate.css';

  #side-menu {
    animation-duration: 0.2s;
    animation-delay: 0s;
    /*animation-iteration-count: infinite;*/
  }

</style>
