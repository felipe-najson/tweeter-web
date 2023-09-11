import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

class APIClient<T> {
  endpoint

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T[]>(this.endpoint, config).then(res => res.data)
  }

  get = (id: string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data)
  }

  put = (data: T) => {
    return axiosInstance.put<T>(this.endpoint, data).then(res => res.data)
  }
}

export default APIClient
