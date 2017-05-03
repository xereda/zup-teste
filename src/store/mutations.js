export default {
  'UPDATE_STATE_VIEW' (state, size) {
    state.states.view = size
  },
  'UPDATE_FILTER' (state, filter) {
    state.states.filter = filter
  },
  'SET_LOADING' (state, control) {
    state.states.loading = control
  },
  'SET_CURRENT_PAG' (state, pag) {
    state.states.currentPag = pag
  },
  'SET_SCROLL_POSITION_SMALL' (state, pos) {
    state.states.scrollPosition.small = pos
  },
  'SET_SCROLL_POSITION_LARGE' (state, pos) {
    state.states.scrollPosition.large = pos
  },
  'ADD_SHOT' (state, shot) {
    state.shots.push(shot)
  }
}
