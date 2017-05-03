import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'setLoading',
      'setCurrentPag',
      'setScrollPosition',
      'addShot'
    ])
  }
}
