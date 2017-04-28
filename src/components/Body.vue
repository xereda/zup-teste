<template>
  <section class="section">
    <div class="container">
      <jmob-introduction></jmob-introduction>
      <jmob-expertise></jmob-expertise>
      <hr>
      <jmob-contact></jmob-contact>
      <jmob-floating-button></jmob-floating-button>
    </div>
  </section>
</template>

<script>
import JmobIntroduction from './Introduction.vue'
import JmobExpertise from './Expertise.vue'
import JmobContact from './Contact.vue'
import JmobFloatingButton from './FloatingButton.vue'

export default {
  components: {
    JmobIntroduction,
    JmobExpertise,
    JmobContact,
    JmobFloatingButton
  }
}
</script>

<style lang="css">
</style>
