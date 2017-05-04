<template>
  <div class="">
    <dribbble-search :total-shots="filteredShots.length"></dribbble-search>
    <div class="columns is-mobile is-multiline">
      <div class="column is-narrow" :ref="shot.id" v-for="shot in filteredShots" :style="'background-color: ' + shot.color">
        <dribbble-card @click.native="openDetail(shot.id)"
                       :shot-id="shot.id"
                       :card-width="getCardWidth"
                       :image="getImagePreview(shot.images)"
                       :likes="shot.likes"
                       :comments="shot.comments"
                       :user-name="shot.user.name"
                       :user-avatar="shot.user.avatar"
                       class="dribbble-card"></dribbble-card>
      </div>
      <div v-infinite-scroll="fetchShots" infinite-scroll-disabled="disabledInfinite" infinite-scroll-distance="10">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { methodsMixins, computedMixins } from '@/mixins/main'
import DribbbleCard from '@/components/Card.vue'
import DribbbleSearch from '@/components/Search.vue'
import { getAllPaged as getShots } from '@/services/shots'

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import { isEmpty } from 'lodash'

export default {
  name: 'DribbbleShotsList',
  mixins: [
    methodsMixins,
    computedMixins
  ],
  data () {
    return {
    }
  },
  computed: {
    disabledInfinite () {
      return this.filter.length > 0
    }
  },
  methods: {
    openDetail (shotId) {
      // console.log(this.stateView)
      this.isSmallView ? this.setScrollPositionSmall(window.scrollY) : this.setScrollPositionLarge(window.scrollY)
      this.$router.push({ name: 'shotDetail', params: { shotId: shotId } })
    },
    getImagePreview (images) {
      if (this.isSmallView && isEmpty(images.small) === false) return images.small
      if (isEmpty(images.large) === false) return images.large
      if (isEmpty(images.normal) === false) return images.normal
      return this.config.defaultImagePreview
      // console.log(isEmpty)
    },
    fetchShots () {
      this.setLoading(true)
      getShots(this.currentPag, this.config.limitePerPage, {})
        .then(response => response.data)
        .then(data => {
          // console.log('data: ', data)
          this.hydrateSchema(data)
          return data
        })
        .then(() => {
          this.setLoading(false)
          this.setCurrentPag(this.currentPag + 1)
        })
        .catch(response => {
          this.setLoading(false)
        })
    },
    hydrateSchema (data) {
      data.forEach((e) => {
        const shotObject = {
          id: e.id,
          title: e.title || '',
          description: e.description || '',
          images: {
            small: e.images.teaser,
            normal: e.images.normal,
            large: e.images.hidpi
          },
          comments: e.comments_count,
          likes: e.likes_count,
          user: {
            id: e.user.id,
            name: e.user.name,
            username: e.user.username,
            avatar: e.user.avatar_url
          }
        }
        this.addShot(shotObject)
      })
    }
  },
  components: {
    DribbbleCard,
    DribbbleSearch
  },
  directives: {
    infiniteScroll
  }
}
</script>

<style lang="scss">
  .dribbble-card {
    cursor: pointer;
  }
</style>
