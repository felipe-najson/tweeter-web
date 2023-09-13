import { useMutation, useQueryClient } from 'react-query'
import APIClient from '../services/apiClient'
import type Tweet from '../entities/Tweet'

interface Props {
  userId: string
  tweet: Tweet
}

const useLike = ({ userId, tweet }: Props) => {
  const { likes } = tweet

  const client = new APIClient(`/tweets/like`)
  const queryClient = useQueryClient()

  const isLiked = likes?.findIndex(like => like.id === userId) !== -1

  const likeMutation = useMutation({
    mutationFn: client.put,
    onError: err => {
      console.log(err)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['tweets'])
    },
  })

  return { likeMutation, isLiked }
}

export default useLike
