<template>
  <!-- Main container -->
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">

      <div class="level-item is-hidden-mobile">
        <p class="subtitle is-5">
          <strong>{{ totalShots }}</strong> shots
        </p>
      </div>

      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <input class="input" @keyup="setFilter()" v-model="searchString" type="text" placeholder="Pesquise um shot">
          </p>
          <p class="control">
            <button class="button" @click="setFilter()">
              Filtrar
            </button>
          </p>
        </div>
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right is-hidden-mobile">
      <p class="level-item"><strong>Popular</strong></p>
      <p class="level-item"><a>Shots</a></p>
      <p class="level-item"><a>Now</a></p>
    </div>
  </nav>
</template>

<script>
import { computedMixins, methodsMixins } from '@/mixins/main'

export default {
  name: 'DribbbleSearch',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  data () {
    return {
      searchString: ''
    }
  },
  mounted () {
    this.searchString = this.filter
  },
  methods: {
    setFilter () {
      this.updateFilter(this.searchString)
    }
  },
  props: {
    totalShots: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="css">
</style>
