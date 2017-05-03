export default {
  updateStateView (context, size) {
    context.commit('UPDATE_STATE_VIEW', size)
  },
  setLoading (context, control) {
    context.commit('SET_LOADING', control)
  },
  setCurrentPag (context, pag) {
    context.commit('SET_CURRENT_PAG', pag)
  },
  setScrollPosition (context, pos) {
    context.commit('SET_SCROLL_POSITION', pos)
  },
  addShot (context, shot) {
    context.commit('ADD_SHOT', shot)
  }
}
