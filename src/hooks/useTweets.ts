import { useQuery } from 'react-query'
import APIClient from '../services/apiClient'
import type Tweet from '../entities/Tweet'
import type TweetQuery from '../entities/TweetQuery'

const useTweets = (tweetQuery: TweetQuery = {}) => {
  const client = new APIClient<Tweet>('/tweets')

  return useQuery({
    queryKey: ['tweets', tweetQuery],
    queryFn: () =>
      client.getAll({
        params: {
          bookmarked: tweetQuery.bookmarked,
          following: tweetQuery.following,
        },
      }),
  })
}

export default useTweets

// const useGames = () => {
//   const gameQuery = useGameQueryStore((s) => s.gameQuery);

//   return useInfiniteQuery<FetchResponse<Game>, Error>({
//     queryKey: ['games', gameQuery],
//     queryFn: ({ pageParam = 1 }) =>
//       apiClient.getAll({
//         params: {
//           genres: gameQuery.genreId,
//           parent_platforms: gameQuery.platformId,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//           page: pageParam,
//         },
//       }),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.next ? allPages.length + 1 : undefined;
//     },
//     staleTime: ms('24h'),
//   });
// };
