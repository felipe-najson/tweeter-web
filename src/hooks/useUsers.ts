import { useQuery } from 'react-query'
import APIClient from '../services/apiClient'
import type User from '../entities/User'

const client = new APIClient<User>('/users')

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: client.getAll,
  })
}

export default useUsers
