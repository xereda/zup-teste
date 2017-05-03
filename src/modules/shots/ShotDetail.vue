<template>
  <div class="">
    <breadcrumbs :objectLinks="breadcrumbsLinks" @after-action="setScrollPosition"></breadcrumbs>
    <dribbble-card-detail :user="user" :shot="shot"></dribbble-card-detail>

  </div>
</template>

<script>
import { getShot } from '@/services/shots'
import { methodsMixins, computedMixins } from '@/mixins/main'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import DribbbleCardDetail from './components/CardDetail.vue'

export default {
  data () {
    return {
      user: {
        name: '',
        username: '',
        avatar: ''
      },
      shot: {
        id: '',
        title: '',
        description: '',
        views: 0,
        likes: 0,
        comments: 0,
        data: new Date(),
        tags: []
      },
      breadcrumbsLinks: [
        { go: -1, name: 'Shots', activedLink: true, afterAction: 'after-action' },
        { name: 'Detalhes', activedLink: false }
      ]
    }
  },
  mixins: [
    methodsMixins,
    computedMixins
  ],
  mounted () {
    this.getShotDetail()
  },
  methods: {
    getShotDetail () {
      this.setLoading(true)
      getShot(this.$route.params.shotId)
        .then(response => response.data)
        .then(data => {
          this.hydrateSchemaShotDetail(data)
          return data
        })
        .then(() => {
          this.setLoading(false)
        })
        .catch(response => {
          this.setLoading(false)
        })
    },
    hydrateSchemaShotDetail (data) {
      console.log(data)
      this.user.id = data.user.id
      this.user.name = data.user.name
      this.user.username = data.user.username
      this.user.avatar = data.user.avatar_url
      this.shot.id = data.id
      this.shot.title = data.title
      this.shot.description = data.description
    }
  },
  components: {
    Breadcrumbs,
    DribbbleCardDetail
  }
}
</script>

<style lang="scss">
  .custom-avatar {
    border-radius: 50%;
  }
</style>
