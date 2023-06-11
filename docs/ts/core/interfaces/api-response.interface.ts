type HttpStatus = 200 | 201 | 202 | 304 | 400 | 401 | 403 | 404 | 405 | 408 | 500 | number

type HttpCode =
  | 'ERR_UNKNOWN'
  | 'ERR_NETWORK'
  | '200 OK'
  | '201 Created'
  | '202 Accepted'
  | '304 Not Modified'
  | '400 Bad Request'
  | '401 Unauthorized'
  | '403 Forbidden'
  | '404 Not Found'
  | '405 Method Not Allowed'
  | '408 Request Timeout'
  | '500 Internal Server Error'
  | string

export interface HttpResponse<T> {
  status: HttpStatus
  code: HttpCode
  data: T
}
