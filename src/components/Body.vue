<template>
  <section class="section">
    <div class="container is-fluid">
      <router-view></router-view>
      <dribbble-floating-button></dribbble-floating-button>
    </div>
  </section>
</template>

<script>
import DribbbleFloatingButton from './FloatingButton.vue'

export default {
  name: 'DribbbleBody',
  components: {
    DribbbleFloatingButton
  },
  mounted () {
    console.log('Body.vue')
  }
}
</script>

<style lang="css">
</style>
