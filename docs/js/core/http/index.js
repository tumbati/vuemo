import axios from 'axios'

axios.interceptors.request.use(request => {
  /**
   * If you want to access the request object,
   * you can use `.data`, `.headers`, `.params`, `.url`
   *
   * Override the request before it is sent
   *
   * @example
   *  const HttpHeaders = {
        withCredentials: true,
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      }
   */

  const modifiedHeaders = {
    withCredentials: true,
    'Content-Type': 'application/json',
    authorization: 'Bearer ', // authorization token
    ...request.headers // Allow Override headers custom headers
  }

  Object.assign(request.headers, {
    ...modifiedHeaders
  })

  return request
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  // Do something with response error
  return error
})

export const HttpClient = axios

const http = {
  HttpClient
}

export default http
