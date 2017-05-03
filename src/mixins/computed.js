import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'shots',
      'isSmallView',
      'config',
      'loading',
      'currentPag',
      'scrollPosition'
    ]),
    getCardWidth () {
      if (this.isSmallView === true) return this.config.smallSize
      return this.config.largeSize
    }
  }
}
