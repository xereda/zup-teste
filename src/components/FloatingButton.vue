<template>
  <transition name="fade">
    <div class="div-floating has-shadow" v-show="scrolled">
      <p class="field">
        <!-- <a class="button is-primary" @click="scrollTo(0, 0)"> -->
        <a class="button is-primary" v-scroll-to="{ el: '#top' }">
        <span class="icon">
          <i class="fa fa-arrow-circle-up"></i>
        </span>
        </a>
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    // scrollTo (x, y) {
    //   window.scrollTo(x, y)
    // },
    handleScroll () {
      // console.log(window.scrollY)
      this.scrolled = window.scrollY > 54
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="css" scoped>
  .div-floating {
   position: fixed;
   right: 30px;
   bottom: 30px;
   z-index: 9999;
   /*box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);*/
  }
</style>
