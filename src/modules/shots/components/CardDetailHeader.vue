<template>
  <div class="">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img class="custom-avatar" :src="user.avatar">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong class="shot-title">{{ shot.title }}</strong><br class="is-hidden-tablet"> - <span class="user-name">by {{ user.name }} (@{{ user.username }}) em {{ shotDate }}</span>
          </p>
        </div>
        <div class="content" v-show="showDescription || shot.description.length <= 200">
          <p>
            <span class="custom-description-html" v-html="shot.description"></span>
          </p>
        </div>
        <div class="content" v-show="shot.description.length > 200">
          <a class="button is-primary custom-button-show-description" @click="setShowDescription()">
            <span class="icon">
              <i :class="{ 'fa': true, 'fa-eye': !showDescription, 'fa fa-eye-slash': showDescription }"></i>
            </span>
            <span>{{ labelButton }}</span>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DribbbleCardDetailHeader',
  data () {
    return {
      showDescription: false
    }
  },
  methods: {
    setShowDescription () {
      this.showDescription = !this.showDescription
    }
  },
  computed: {
    shotDate () {
      return moment.utc(this.shot.date).format('DD/MM/YYYY')
    },
    labelButton () {
      if (this.showDescription) return 'ocultar descrição...'
      return 'mostrar descrição...'
    }
  },
  props: [
    'user',
    'shot'
  ]
}
</script>

<style lang="scss">
  .user-name {
    font-style: italic;
    color: rgb(55, 187, 124);
  }
  .shot-title {
    font-size: 1.5em;
  },
  .custom-description-html {
    font-size: 90%;
  }
  .custom-button-show-description {
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
