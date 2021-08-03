import axios from 'axios'

axios.interceptors.request.use(request => {
  /**
   * If you want to access the request object,
   * you can use `.data`, `.headers`, `.params`, `.url`
   * 
   * Override the request before it is sent
   * 
   *  const HttpHeaders = {
        withCredentials: true,
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      }
   */
    

  if (request.headers.authorization) {
    HttpHeaders.authorization = request.headers.authorization
  }

  if (request.headers['Content-Type']) {
    HttpHeaders['Content-Type'] = request.headers['Content-Type']
  }

  Object.assign(request.headers, {
    ...HttpHeaders
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
