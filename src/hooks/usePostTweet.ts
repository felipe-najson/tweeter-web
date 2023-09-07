import { useMutation, useQueryClient } from 'react-query'
import APIClient from '../services/apiClient'
import type Tweet from '../entities/Tweet'

const client = new APIClient<Tweet>('/tweets')

const usePostTweet = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: client.post,
    // onMutate: async newTweet => {
    //   await queryClient.cancelQueries(['tweets'])
    //   const previousTweets = queryClient.getQueryData<Tweet[]>(['tweets'])

    //   queryClient.setQueryData(['tweets'], (old?: Tweet[]) => {
    //     const newCommentWithState = structuredClone(newTweet)
    //     newCommentWithState.preview = true

    //     if (old == null) return [newCommentWithState]
    //     return [...old, newCommentWithState]
    //   })

    //   return { previousTweets } // --> Context
    // },
    onError: (err, newTweet, context) => {
      console.log(err)

      //   if (context?.previousTweets != null) {
      //     queryClient.setQueryData(['tweets'], context.previousTweets)
    },
    // },
    // onSettled: async () => {
    //   await queryClient.invalidateQueries(['tweets'])
    // },
    onSuccess: async () => {
      // 1. Invalidate the tweets query
      await queryClient.invalidateQueries(['tweets'])
    },
  })
}

export default usePostTweet
