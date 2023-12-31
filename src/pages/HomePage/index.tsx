import { Skeleton, Spinner } from '@nextui-org/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Trends from '../../components/Trends'
import TweetInput from '../../components/TweetInput'
import TweetPost from '../../components/TweetPost'
import WhoFollow from '../../components/WhoFollow'
import useTweets from '../../hooks/useTweets'
import TweetContainer from './components/TweetContainer'
import TweetSkeleton from './components/TweetSkeleton'

export default function HomePage() {
  const query = { following: true }
  const {
    data: tweetPages,
    isLoading,
    isSuccess,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useTweets(query)

  const skeletons = [1, 2, 3, 4, 5, 6]
  const tweets = tweetPages?.pages.flatMap(page => page.results) ?? []

  return (
    <div className="flex flex-col sm:flex-row justify-center w-full py-4 md:py-8 ">
      <InfiniteScroll
        dataLength={tweets.length}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <Spinner className='m-2'/>
        }
        className="sm:w-[400px] md:w-[470px] lg:w-[600px] px-4 py-4 sm:py-0"
      >
        <TweetContainer>
          {isLoading &&
            skeletons.map(skeleton => <TweetSkeleton key={skeleton} />)}
          {isError && (
            <p className="text-md">An error ocurred fetching tweets...</p>
          )}
          {isSuccess && (
            <>
              <TweetInput />
              {tweets.map(tweet => (
                <TweetPost key={tweet.id} tweet={tweet} />
              ))}
            </>
          )}
        </TweetContainer>
      </InfiniteScroll>
      <Skeleton isLoaded={!isLoading} className="rounded-lg h-full shadow-none">
        <div className="hidden lg:px-4 md:flex w-72 lg:w-80 h-screen flex-col gap-3">
          <Trends />
          <WhoFollow />
        </div>
      </Skeleton>
    </div>
  )
}
