<template>
  <transition name="fade">
    <section class="hero is-small is-primary is-bold">
      <div class="hero-body custom-margin-left" id="home">
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
      <div class="hero-foot custom-margin-left">
        <nav class="tabs is-boxed">
          <div class="container is-fluid">
            <ul>
              <li :class="{ 'is-active': isSmallView }"><a @click="updateViewMode('small')">Small view</a></li>
              <li :class="{ 'is-active': isLargeView }"><a @click="updateViewMode('large')">Large view</a></li>
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
    ]),
    updateViewMode (size) {
      console.log('rota: ', this.$route)
      if (this.$route.name !== 'shots') this.$router.push({ name: 'shots' })
      this.updateStateView(size)
    }
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
  .custom-margin-left {
    margin-left: 20px;
  }
</style>
