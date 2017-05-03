export default {
  shots: [],
  states: {
    loading: false,
    filter: '',
    currentPag: 1,
    view: 'small',
    scrollPosition: {
      small: 0,
      large: 0
    }
  },
  config: {
    smallSize: '200px',
    largeSize: '400px',
    limitePerPage: 50,
    defaultImagePreview: 'static/images/backgroundImage.svg'
  }
}
