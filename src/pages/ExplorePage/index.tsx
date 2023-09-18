import { Spinner } from '@nextui-org/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import TweetPost from '../../components/TweetPost'
import useTweets from '../../hooks/useTweets'
import TweetContainer from '../HomePage/components/TweetContainer'
import TweetSkeleton from '../HomePage/components/TweetSkeleton'
import SearchInput from './components/SearchInput'

export default function ExplorePage() {
  const {
    data: tweetPages,
    isLoading,
    isSuccess,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useTweets()

  const skeletons = [1, 2, 3, 4, 5, 6]
  const tweets = tweetPages?.pages.flatMap(page => page.results) ?? []

  return (
    <div className="flex justify-center w-full gap-6 md:py-8 ">
      <InfiniteScroll
        dataLength={tweets.length}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
        className="md:w-[680px] sm:w-[500px] py-4 sm:px-4 sm:py-0"
      >
        <TweetContainer>
          {isLoading &&
            skeletons.map(skeleton => <TweetSkeleton key={skeleton} />)}
          {(isError) && (
            <p className="text-md">An error ocurred fetching tweets...</p>
          )}
          {isSuccess && (
            <>
              <SearchInput/>
              {tweets.map(tweet => (
                <TweetPost key={tweet.id} tweet={tweet}/>
              ))}
            </>
          )}
        </TweetContainer>
      </InfiniteScroll>
    </div>
  )
}
