<template lang="html">
  <div class="main">
    <span>Voce está em:</span><br class="is-hidden-tablet" />
    <a v-for="(link, index) in links"
       @click="goTo(link)"
       :class="{ 'is-link': isLast(index), 'uppercase': true, 'current': isLast(index) }">
         {{ link.name }}
         <span class="separator" v-if="!isLast(index)"> / </span>
     </a>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data () {
    return {
    }
  },
  methods: {
    isLast (index) {
      return (this.links.length - 1) === index
    },
    goTo (link) {
      if (link.route !== undefined) this.$router.push({ path: link.route })
      if (link.go !== undefined) this.$router.go(link.go)
    }
  },
  computed: {
    links () {
      if (this.state === 'new') return this.objectLinks.new
      if (this.state === 'update') return this.objectLinks.update
      return this.objectLinks
    }
  },
  props: {
    objectLinks: {
      required: true
    },
    state: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  $separatorColor: rgb(162, 162, 162);
  $currentColor: $separatorColor;
  .main {
    margin-bottom: 20px;
  }
  .current {
    color: $currentColor;
    cursor: default;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .separator {
    color: $separatorColor;
  }
</style>
