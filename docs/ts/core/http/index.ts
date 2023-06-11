import axios from 'axios'

axios.interceptors.request.use((request) => {
  const modifiedHeaders = {
    withCredentials: true,
    'Content-Type': 'application/json',
    authorization: `Bearer `, // Add authorization token
    ...request.headers // Allow overwrite on ['withCredentials', 'authorization', 'Content-Type']
  }

  Object.assign(request.headers, {
    ...modifiedHeaders
  })

  return request
})

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return error
  }
)

export const http = axios
export default http
