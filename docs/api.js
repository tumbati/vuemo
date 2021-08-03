import AppConfig from './config'

const dev = AppConfig.development
const prod = AppConfig.production

export const createAPI = (name = '') => {
  if (!name) {
    if (process.env.NODE_ENV === 'production') {
      if ('protocol' in prod.api.v1) {
        return `${prod.api.v1.protocol}://${prod.api.v1.protocol}`
      }

      return `${prod.api.v1.host}`
    }

    return `${dev.api.v1.protocol}://${dev.api.v1.host}:${dev.api.v1.port}/api/v1`
  }

  // Add custom apis
}

const API = {
  createAPI
}

export default API
