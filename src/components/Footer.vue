<template>
  <div class="">
    <footer class="footer custom-footer">
      <div class="container is-fluid">
        <nav class="nav custom-nav-center">
          <div class="nav-center">
            <figure class="image footer-image-logo">
              <img :src="'static/images/transparentLogo.svg'">
            </figure>
          </div>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .footer-image-logo {
    width: 300px;
    margin-top: 100px;
  }
  .custom-nav-center {
    background-color: rgba(255, 255, 255, 0) !important;
  }
</style>
