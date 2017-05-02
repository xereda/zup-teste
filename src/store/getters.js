export default {
  stateView: state => {
    const { states } = state
    return states.view
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
