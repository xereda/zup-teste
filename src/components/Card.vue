<template>
  <transition name="fade">
    <div class="card" :id="anchorName"  v-show="showCard">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="image" alt="Image">
        </figure>
      </div>
      <header class="card-header">
        <p class="card-header-title">{{ title }}</p>
      </header>
      <div class="card-content">
        <div class="content" v-html="content">

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      showCard: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.showCard = true
    }, this.lazyTime)
  },
  computed: {
  },
  props: [
    'image',
    'title',
    'content',
    'anchorName',
    'lazyTime'
  ]
}
</script>

<style lang="css">
</style>
