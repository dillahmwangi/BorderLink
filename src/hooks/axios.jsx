import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

export const axios = setupCache(
  Axios.create({
    baseURL: 'https://border-link.vercel.app/',
  })
)

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  console.log('token: ', token)
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
