import { useMutation, useQueryClient } from 'react-query'
import APIClient from '../services/apiClient'
import type User from '../entities/User'

interface Props {
  loggedId: string
  profileUser: User
}

const useFollow = ({ loggedId, profileUser }: Props) => {
  const client = new APIClient(`/users/${loggedId}/follow`)
  const queryClient = useQueryClient()

  const isFollowed =
    profileUser?.followedBy?.findIndex(user => user.id === loggedId) !== -1

  const mutation = useMutation({
    mutationFn: client.put,
    onError: err => {
      console.log(err)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['users', profileUser.id])
    },
  })

  return { mutation, isFollowed }
}

export default useFollow
