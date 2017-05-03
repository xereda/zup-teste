export default {
  'UPDATE_STATE_VIEW' (state, size) {
    state.states.view = size
  },
  'SET_LOADING' (state, control) {
    state.states.loading = control
  },
  'SET_CURRENT_PAG' (state, pag) {
    state.states.currentPag = pag
  },
  'SET_SCROLL_POSITION' (state, pos) {
    state.states.scrollPosition = pos
  },
  'ADD_SHOT' (state, shot) {
    state.shots.push(shot)
  }
}
