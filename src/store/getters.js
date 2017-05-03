export default {
  shots: state => {
    const { shots } = state
    return shots
  },
  stateView: state => {
    const { states } = state
    return states.view
  },
  filter: state => {
    const { states } = state
    return states.filter
  },
  loading: state => {
    const { states } = state
    return states.loading
  },
  currentPag: state => {
    const { states } = state
    return states.currentPag
  },
  scrollPosition: state => {
    const { states } = state
    return states.scrollPosition
  },
  isSmallView: state => {
    const { states } = state
    return states.view === 'small'
  },
  isLargeView: state => {
    const { states } = state
    return states.view === 'large'
  },
  config: state => {
    const { config } = state
    return config
  }
}
