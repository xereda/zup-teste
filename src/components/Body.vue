<template>
  <section class="section">
    <div class="container">
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
  }
}
</script>

<style lang="css">
</style>
