import { useMutation, useQueryClient } from 'react-query'
import APIClient from '../services/apiClient'
import type Tweet from '../entities/Tweet'

interface Props {
  userId: string
  tweet: Tweet
}

const useRetweet = ({ userId, tweet }: Props) => {
  const { retweets } = tweet

  const client = new APIClient(`/tweets/retweet`)
  const queryClient = useQueryClient()

  const isRetweeted = retweets?.findIndex(like => like.id === userId) > -1

  const retweetMutation = useMutation({
    mutationFn: client.put,
    onError: err => {
      console.log(err)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['tweets'])
      await queryClient.invalidateQueries(['user'])
    },
  })

  return { retweetMutation, isRetweeted }
}

export default useRetweet
