<template>
  <div class="">
    <dribbble-card-header :user="user" :shot="shot"></dribbble-card-header>
  </div>
</template>

<script>
import DribbbleCardHeader from './CardHeader.vue'
export default {
  name: 'DribbbleCardDetail',
  props: [
    'user',
    'shot'
  ],
  components: {
    DribbbleCardHeader
  }
}
</script>

<style lang="scss">

</style>
