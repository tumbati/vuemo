import CacheService from './cache.service'

/**
 * Example service
 */
class SessionService {
  private cache: typeof CacheService

  constructor() {
    this.cache = CacheService
  }

  startSession<T>(data: T, key = 'core'): void {
    this.cache.setItem(key, data)
  }
}

const instance = new SessionService()
export default instance as SessionService
