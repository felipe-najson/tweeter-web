import { useInfiniteQuery } from 'react-query'
import APIClient, { type FetchResponse } from '../services/apiClient'
import type Tweet from '../entities/Tweet'
import type TweetQuery from '../entities/TweetQuery'

const client = new APIClient<Tweet>('/tweets')

const useTweets = (tweetQuery: TweetQuery = {}) => {
  return useInfiniteQuery<FetchResponse<Tweet>, Error>({
    queryKey: ['tweets', tweetQuery],
    queryFn: ({ pageParam = 1 }) =>
      client.getPaginated({
        params: {
          bookmarked: tweetQuery.bookmarked,
          following: tweetQuery.following,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, _pages) => {
      return lastPage.next ?? undefined
    },
  })
}

export default useTweets

// const useTweets = (tweetQuery: TweetQuery = {}) => {
//   const client = new APIClient<Tweet>('/tweets')

//   return useQuery({
//     queryKey: ['tweets', tweetQuery],
//     queryFn: () =>
//       client.getAll({
//         params: {
//           bookmarked: tweetQuery.bookmarked,
//           following: tweetQuery.following,
//         },
//       }),
//   })
// }

// export default useTweets
