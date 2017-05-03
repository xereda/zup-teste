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
    limitePerPage: 40,
    defaultImagePreview: 'static/images/backgroundImage.svg',
    urls: {
      linkedin: 'https://www.linkedin.com/in/xereda/',
      facebook: 'https://www.facebook.com/xereda',
      github: 'https://github.com/xereda',
      twitter: 'https://twitter.com/xereda'
    }
  }
}
