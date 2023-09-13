import { useMutation, useQueryClient } from 'react-query'
import APIClient from '../services/apiClient'
import type Tweet from '../entities/Tweet'

interface Props {
  userId: string
  tweet: Tweet
}

const useBookmark = ({ userId, tweet }: Props) => {
  const { bookmarks } = tweet

  const client = new APIClient(`/tweets/bookmark`)
  const queryClient = useQueryClient()

  const isBookmarked = bookmarks?.findIndex(like => like.id === userId) !== -1

  const bookmarkMutation = useMutation({
    mutationFn: client.put,
    onError: err => {
      console.log(err)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['tweets'])
    },
  })

  return { bookmarkMutation, isBookmarked }
}

export default useBookmark
