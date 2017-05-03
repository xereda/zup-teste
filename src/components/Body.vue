<template>
  <section class="section">
    <div class="container is-fluid">
      <dribbble-loading v-show="loading"></dribbble-loading>
      <router-view></router-view>
      <dribbble-floating-button></dribbble-floating-button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import DribbbleFloatingButton from './FloatingButton.vue'
import DribbbleLoading from './Loading.vue'

export default {
  name: 'DribbbleBody',
  components: {
    DribbbleLoading,
    DribbbleFloatingButton
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  },
  mounted () {
  }
}
</script>

<style lang="css">
</style>
