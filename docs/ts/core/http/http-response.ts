import type { AxiosResponse } from 'axios'
import type { HttpResponse } from 'src/core/interfaces/api-response.interface'

export function httpResponse<T>(response: AxiosResponse): HttpResponse<T> {
  return {
    status: response.status,
    code: response.statusText,
    data: response.data as T
  }
}
