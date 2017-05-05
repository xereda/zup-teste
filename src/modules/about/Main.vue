<template>
  <div class="has-text-centered">
    <h1 class="title">About The Developer</h1>
    <hr>
    <h2 class="subtitle">Jackson Ricardo Schroeder</h2>
    <hr>
    <pre class="has-text-left">
      E-mail:
      jacksonrs@gmail.com

      Linkedin:
      linkedin.com/in/xereda/

      Made with the following
      technologies and methodologies:

      - Yarn Modules Manager
      - Ecmascript 6
      - Vue.js 2
        . vue-cli / webpack
        . vuex (Flux Architecture)
        . vue-router (SPA and Routes)
      - Bulma Framework (Flexbox)
      - Responsive Sidemenu
      - Font Awesome (Icons)
      - SCSS (scss/config.scss)
      - SVG Vector Images
      - Responsive Layout
      - Infinite Scroll
      - Axios

    </pre>
    <hr>
    <div class="content has-text-left">
      <a class="button is-primary" @click="goTo('shots')">
        <span class="icon">
          <i :class="{ 'fa': true, 'fa-list': true }"></i>
        </span>
        <span class="">Shot list</span>
      </a>
    </div>
  </div>
</template>

<script>
import { methodsMixins } from '@/mixins/main'

export default {
  name: 'DribbbleAboutDeveloper',
  mixins: [
    methodsMixins
  ],
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
  },
  directives: {
  }
}
</script>

<style lang="scss">
</style>
