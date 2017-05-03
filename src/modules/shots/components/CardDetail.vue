<template>
  <div class="">
    <dribbble-card-detail-header :user="user" :shot="shot"></dribbble-card-detail-header>
    <dribbble-card-detail-body :user="user" :shot="shot"></dribbble-card-detail-body>
  </div>
</template>

<script>
import DribbbleCardDetailHeader from './CardDetailHeader.vue'
import DribbbleCardDetailBody from './CardDetailBody.vue'
export default {
  name: 'DribbbleCardDetail',
  props: [
    'user',
    'shot'
  ],
  components: {
    DribbbleCardDetailHeader,
    DribbbleCardDetailBody
  }
}
</script>

<style lang="scss">

</style>
