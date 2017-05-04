<template>
  <div class="custom-card-detail-body">
    <div class="columns">
      <div class="column is-8">
        <div class="card">
          <div class="card-image custom-card-background">
            <figure class="image is-4by3">
              <img :src="shot.image" alt="Image">
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div class="column">
            <dribbble-card-detail-table :shot="shot"></dribbble-card-detail-table>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column">
            <dribbble-card-detail-tags :shot="shot"></dribbble-card-detail-tags>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column">
            <a class="button is-primary" @click="closeShotDetail()">
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
              <span>Sair</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computedMixins, methodsMixins } from '@/mixins/main'
import DribbbleCardDetailTable from './DribbbleCardDetailTable.vue'
import DribbbleCardDetailTags from './DribbbleCardDetailTags.vue'

export default {
  name: 'DribbbleCardDetailBody',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  components: {
    DribbbleCardDetailTable,
    DribbbleCardDetailTags
  },
  methods: {
    closeShotDetail () {
      this.setScrollPosition()
      this.$router.push({ name: 'shots' })
    }
  },
  props: [
    'user',
    'shot'
  ]
}
</script>

<style lang="scss">
  .custom-card-detail-body {
    margin-top: 30px;
  }

</style>
