import { mapActions } from 'vuex'
import jump from 'jump.js'

export default {
  methods: {
    ...mapActions([
      'updateFilter',
      'updateStateView',
      'setLoading',
      'setCurrentPag',
      'setScrollPositionSmall',
      'setScrollPositionLarge',
      'addShot'
    ]),
    setScrollPosition () {
      jump(this.isSmallView ? this.scrollPosition.small : this.scrollPosition.large)
    },
    goTo (route) {
      this.$router.push({ name: route })
    }
  }
}
