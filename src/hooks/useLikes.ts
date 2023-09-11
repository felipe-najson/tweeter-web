import { useMutation, useQueryClient } from 'react-query'
import APIClient from '../services/apiClient'
import type User from '../entities/User'

interface Props {
  userId: string
  likes: User[]
}

const useLikes = ({ userId, likes }: Props) => {
  const client = new APIClient('/tweets/like')
  const queryClient = useQueryClient()

  const isLiked = likes.findIndex(like => like.id === userId) !== -1

  const mutation = useMutation({
    mutationFn: client.put,
    onError: err => {
      console.log(err)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['tweets'])
    },
  })

  return { mutation, isLiked }
}

export default useLikes
