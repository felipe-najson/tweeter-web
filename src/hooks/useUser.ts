import { useQuery } from 'react-query'
import APIClient from '../services/apiClient'
import type User from '../entities/User'

const useUser = () => {
  const client = new APIClient<User>('/users')

  return useQuery({
    queryKey: ['users'],
    queryFn: () => client.get('c73f24d7-ef04-4366-8f5e-7ebc5c7797a2'),
  })
}

export default useUser
