class CacheService {
  private db: Storage

  constructor() {
    this.db = localStorage
  }

  setItem<T>(key: string, data: T): void {
    this.db.setItem(key, data as string)
  }

  getItem<T>(key: string): T | null {
    return this.db.getItem(key) as T
  }

  remove(key: string) {
    return this.db.removeItem(key)
  }
}

const instance = new CacheService()
export default instance as CacheService
