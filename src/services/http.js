import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.dribbble.com/v1/',
  timeout: 10000,
  headers: {'Authorization': 'Bearer 802a076a36a1171afdc1e165f323dd3f4b963987a1451922585b5caf92bb4ab6'}
})

export default client
