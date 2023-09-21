import { useQuery } from 'react-query'
import APIClient from '../services/apiClient'
import type User from '../entities/User'

const client = new APIClient<User>('/users')

const useUser = (id: string) => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => client.get(id),
  })
}

export default useUser
