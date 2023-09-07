import { useQuery } from 'react-query'
import APIClient from '../services/apiClient'
import type Tweet from '../entities/Tweet'

const useTweets = () => {
  const client = new APIClient<Tweet>('/tweets')

  return useQuery({
    queryKey: ['tweets'],
    queryFn: client.getAll,
  })
}

export default useTweets
