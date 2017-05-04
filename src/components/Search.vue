<template>
  <nav class="level">
    <div class="level-left" v-show="filter.length === 0">
      <div class="level-item is-hidden-mobile">
        <p class="subtitle is-5">
          <strong>{{ totalShots }}</strong> shots
        </p>
      </div>
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <input :class="{ 'input': true, 'is-disabled': false }" @keyup.enter="setFilter()" v-model="searchString" type="text" placeholder="Pesquise um shot">
          </p>
          <p class="control">
            <button :class="{ 'button': true, 'is-primary': true, 'is-disabled': searchString.length === 0 }" @click="setFilter()">
              Filtrar
            </button>
          </p>
        </div>
      </div>
    </div>

    <div class="level-left" v-show="filter.length > 0">
      <div class="level-item">
        <span>Filtro aplicado: </span>
        <span class="tag is-warning is-medium">
          {{ filter }}
          <button class="delete is-small" @click="clearFilter()"></button>
        </span>
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
    },
    clearFilter () {
      this.searchString = ''
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
