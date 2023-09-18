import { Spinner } from '@nextui-org/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import TweetPost from '../../components/TweetPost'
import useTweets from '../../hooks/useTweets'
import TweetContainer from '../HomePage/components/TweetContainer'
import TweetSkeleton from '../HomePage/components/TweetSkeleton'
import SearchInput from './components/SearchInput'
import { useState } from 'react'

export default function ExplorePage() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState({} as any)

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

  const handleSearch = ()  => {
    setQuery({search})
  }

  return (
    <div className="flex justify-center w-full gap-6 md:py-8 ">
      <InfiniteScroll
        dataLength={tweets.length}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={isLoading ? <Spinner /> : null}
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
              <SearchInput handleSearch={handleSearch} search={search} setSearch={setSearch} />
              {tweets.length === 0 && (
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <h1 className="text-2xl font-bold">No tweets yet</h1>
                  <p className="text-md text-center font-light text-zinc-600 max-w-md">
                    When {search} tweets, they will show up here.
                  </p>
                </div>
              )}
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
