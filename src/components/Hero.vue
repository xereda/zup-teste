<template>
  <transition name="fade">
    <section class="hero is-small is-primary is-bold">
      <div class="hero-body" id="home">
        <div class="container">
          <img :src="'static/images/dribbble.svg'" class="logo-hero" alt="Bulma logo">
          <!-- <h1 class="title">
            Zup test
          </h1> -->
          <h2 class="subtitle">
            Test developed by <strong>Xereda</strong>.
          </h2>
        </div>
      </div>
      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot" style="margin-left:20px;">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <li class="is-active"><a>Small view</a></li>
              <li><a>Large view</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'DribbbleHero'
}
</script>

<style lang="css">
  .logo-hero {
    width: 200px;
  }
</style>
