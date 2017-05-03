<template>
  <div class="box">
    <h5 class="subtitle is-5">Tags</h5>
    <hr>
    <span class="tag" v-for="tag in shot.tags">{{ tag }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'shot'
  ]
}
</script>

<style lang="scss" scoped>
  .tag {
    margin: 3px;
  }
</style>
