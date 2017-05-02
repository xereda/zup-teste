<template>
  <div class="">
    <div class="columns is-mobile is-multiline">
      <div class="column is-narrow" v-for="shot in shots" :style="'background-color: ' + shot.color">
        <dribbble-card @click.native="openDetail(shot.index)"
                       :card-width="getCardWidth"
                       :image="isSmallView ? shot.images.small : shot.images.large"
                       :likes="shot.likes"
                       :comments="shot.comments"
                       :user-name="shot.user.name"
                       :user-avatar="shot.user.avatar"
                       class="dribbble-card"></dribbble-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DribbbleCard from '@/components/Card.vue'
import { getAllPaged as getShots } from '@/services/shots'

export default {
  name: 'DribbbleShotsList',
  data () {
    return {
      shots: [
      ],
      filters: {},
      currentPage: 0,
      loading: false
    }
  },
  mounted () {
    console.log('modulo shots')
    this.fetchShots()
  },
  methods: {
    openDetail (shot) {
      console.log('vai abrir os detalhes do shot: ', shot)
    },
    fetchShots () {
      this.loading = true
      getShots(this.currentPage, this.config.limitePerPage, this.filters)
        .then(response => response.data)
        .then(data => {
          // console.log('data: ', data)
          this.hydrateSchema(data)
          return data
        })
        .then(() => {
          this.loading = false
        })
    },
    hydrateSchema (data) {
      data.forEach((e) => {
        const shotObject = {
          id: e.id,
          title: e.title,
          description: e.description,
          images: {
            small: e.images.teaser,
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
        console.log('vai dar push nisso aqui: ', shotObject)
        this.shots.push(shotObject)
      })
    }
  },
  computed: {
    ...mapGetters([
      'isSmallView',
      'config'
    ]),
    getCardWidth () {
      if (this.isSmallView === true) return this.config.smallSize
      return this.config.largeSize
    }
  },
  components: {
    DribbbleCard
  }
}
</script>

<style lang="scss">
  .dribbble-card {
    cursor: pointer;
  }
</style>
