import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

export const axiosBC = setupCache(
  Axios.create({
    baseURL: 'https://bctest.dayliff.com:7048/BC160/ODataV4',
  })
)
axiosBC.interceptors.request.use((config) => {
  config.auth = {
    username: 'deliveryapp',
    password: 'i6qfFDAaBVQOjCQ9PQ+ZtTkb89krgQvufm/KcQ37i04=',
  }
  return config
})

export const axios = setupCache(
  Axios.create({
    baseURL: " http://localhost:3000/",
  })
)

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const catchAxiosError = (error) => {
  if (Axios.isCancel(error)) {
    return new Error('Request cancelled')
  }

  if (error.response) {
    return new Error(
      error.response.data?.message ||
        error.response.data ||
        'Something went wrong'
    )
  }

  if (error.request) {
    return new Error('Something went wrong')
  }

  return error
}