import { useQuery } from 'react-query'
import APIClient from '../services/apiClient'
import type User from '../entities/User'

const client = new APIClient<User>('/auth/user')

const useAuthenticatedUser = () => {
  return useQuery({
    queryKey: ['authUser'],
    queryFn: client.getAuthUser,
  })
}

export default useAuthenticatedUser
