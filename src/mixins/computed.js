import { isEmpty } from 'lodash'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'shots',
      'filter',
      'isSmallView',
      'isLargeView',
      'config',
      'loading',
      'currentPag',
      'scrollPosition'
    ]),
    getCardWidth () {
      if (this.isSmallView === true) return this.config.smallSize
      return this.config.largeSize
    },
    filteredShots () {
      const _filtered = this.shots.filter(e => {
        if (this.filter.length === 0) return true
        if (!isEmpty(e.user.name) && e.user.name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1) return true
        if (!isEmpty(e.title) && e.title.toLowerCase().indexOf(this.filter.toLowerCase()) > -1) return true
        // if (!isEmpty(e.description) && e.description.toLowerCase().indexOf(this.filter.toLowerCase()) > -1) return true
        return false
      })
      return _filtered
    }
  }
}
