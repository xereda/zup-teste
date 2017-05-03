<template>
  <div class="card" :style="'width:' + cardWidth + ';'">
    <div class="card-image custom-card-background">
      <figure class="image is-4by3">
        <img :src="image" alt="Image">
      </figure>
    </div>
    <div class="card-content card-content-custom">
      <div class="media">
        <div class="media-left">
          <figure class="image is-24x24">
            <img class="image-custom" :src="userAvatar" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content is-small">
            <p class="">{{ userName }}</p>
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
          <span>{{ likes }}</span>
        </a>
      </p>
      <p class="card-footer-item">
        <a class="button is-small">
          <span class="icon is-small">
            <i class="fa fa-comment-o"></i>
          </span>
          <span>{{ comments }}</span>
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DribbbleCard',
  methods: {
  },
  props: [
    'shotId',
    'cardWidth',
    'image',
    'likes',
    'comments',
    'userName',
    'userAvatar'
  ]
}
</script>

<style lang="scss">
  .card-content-custom {
    padding: 10px !important;
  }
  .image-custom {
    border-radius: 50%;
  }
  .custom-card-background {
    background-image: url('../../static/images/backgroundImage.svg');
  }
</style>
