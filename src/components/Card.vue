<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
      </figure>
    </div>
    <div class="card-content card-content-custom">
      <div class="media">
        <div class="media-left">
          <figure class="image is-24x24">
            <img class="image-custom" src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content is-small">
            <p class="">John Smith</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <a class="button is-small">
          <span class="icon is-small">
            <i class="fa fa-heart-o"></i>
          </span>
          <span>222</span>
        </a>
      </p>
      <p class="card-footer-item">
        <a class="button is-small">
          <span class="icon is-small">
            <i class="fa fa-comment-o"></i>
          </span>
          <span>222</span>
        </a>
      </p>
    </footer>
  </div></template>

<script>
export default {
  name: 'DribbbleCard',
  methods: {
  }
}
</script>

<style lang="scss">
  .card-content-custom {
    padding: 10px !important;
  }
  .image-custom {
    border-radius: 50%;
  }
</style>
