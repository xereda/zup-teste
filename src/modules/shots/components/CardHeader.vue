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
            <strong class="shot-title">{{ shot.title }}</strong><br class="is-hidden-tablet"> - <span class="user-name">by {{ user.name }} (@{{ user.username }})</span>
            <br>
            <span v-html="shot.description"></span>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'DribbbleHeader',
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
  }
</style>
