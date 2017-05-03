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
      console.log('passou... ', new Date())
      console.log('rota: ', this.$route.name)
      jump(this.isSmallView ? this.scrollPosition.small : this.scrollPosition.large)
    }
  }
}
