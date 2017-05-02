<template>
  <transition name="fade">
    <section class="hero is-small is-primary is-bold">
      <div class="hero-body" id="home">
        <div class="container is-fluid">
          <img :src="'static/images/dribbble.svg'" class="logo-hero" alt="Bulma logo">
          <!-- <h1 class="title">
            Zup test
          </h1> -->
          <h2 class="subtitle">
            Test developed by <strong>Xereda</strong>.
          </h2>
        </div>
      </div>
      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot" style="margin-left:20px;">
        <nav class="tabs is-boxed">
          <div class="container is-fluid">
            <ul>
              <li :class="{ 'is-active': isSmallView }"><a @click="updateStateView('small')">Small view</a></li>
              <li :class="{ 'is-active': isLargeView }"><a @click="updateStateView('large')">Large view</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'DribbbleHero',
  methods: {
    ...mapActions([
      'updateStateView'
    ])
  },
  computed: {
    ...mapGetters([
      'stateView',
      'isSmallView',
      'isLargeView'
    ])
  }
}
</script>

<style lang="css">
  .logo-hero {
    width: 200px;
  }
</style>
