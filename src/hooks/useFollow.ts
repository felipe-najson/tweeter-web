import { useMutation, useQueryClient } from 'react-query'
import APIClient from '../services/apiClient'
import type User from '../entities/User'
import { decodeToken } from '../utils/jwt'
import useAuthStore from '../store'

interface Props {
  user: User
}

const client = new APIClient('/users/follow')

const useFollow = ({ user }: Props) => {
  const { token } = useAuthStore()
  const loggedUser = decodeToken(token)
  const queryClient = useQueryClient()

  const isFollowed =
    user?.followedBy?.findIndex(user => user.id === loggedUser?.id) !== -1

  const mutation = useMutation({
    mutationFn: client.put,
    onError: err => {
      console.log(err)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['users', user.id])
      await queryClient.invalidateQueries(['users'])
    },
  })

  return { mutation, isFollowed }
}

export default useFollow
