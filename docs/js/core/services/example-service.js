import { createAPI } from '@/core/api'
import { HttpClient } from '@/core/http'
import Logger from '@/core/logger'

export default class ExampleService {
  constructor() {
    this.api = createAPI()
    this.http = HttpClient
  }

  async getTodoList() {
    try {
      return [
        {
          title: 'Writing Code',
          time: '2 am'
        },
        {
          title: 'Shopping',
          time: '8 am'
        }
      ]
    } catch (error) {
      Logger.log(error)
    }
  }
}
