import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import useAuthStore from '../store'

export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

axiosInstance.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

class APIClient<T> {
  endpoint

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getPaginated = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T[]>(this.endpoint, config).then(res => res.data)
  }

  get = (id: string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
  }

  getAuthUser = () => {
    return axiosInstance.get<T>(this.endpoint).then(res => res.data)
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data)
  }

  put = (data: T) => {
    return axiosInstance.put<T>(this.endpoint, data).then(res => res.data)
  }
}

export default APIClient
