import Http from './http'

export const getAllPaged = (page = 0, limitePerPage = 20, extraParams = {}) => {
  const params = {
    page,
    'per_page': limitePerPage,
    ...extraParams
  }
  return Http.get('/shots', { params })
}

export const getShot = (shotId) => {
  const params = {
  }
  return Http.get('/shots/' + shotId, { params })
}
