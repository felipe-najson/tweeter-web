import Trends from '../../components/Trends'
import TweetInput from '../../components/TweetInput'
import TweetPost from '../../components/TweetPost'
import WhoFollow from '../../components/WhoFollow'
import useTweets from '../../hooks/useTweets'
import useUser from '../../hooks/useUser'
import TweetContainer from './components/TweetContainer'
import TweetSkeleton from './components/TweetSkeleton'

export default function HomePage() {
  const { data: tweets, isLoading, isSuccess, isError } = useTweets()
  const { data: user } = useUser('c73f24d7-ef04-4366-8f5e-7ebc5c7797a2')

  const skeletons = [1, 2, 3, 4, 5, 6]


  return (
    <div className="flex flex-row justify-center w-full gap-4">
      <TweetContainer>
        {isLoading &&
          skeletons.map(skeleton => <TweetSkeleton key={skeleton} />)}
        {isError && <p className='text-md'>An error ocurred fetching tweets...</p>}
        {isSuccess && (
          <>
            <TweetInput user={user} />
            {tweets?.map(tweet => (
              <TweetPost key={tweet.id} tweet={tweet} user={tweet.user} />
            ))}
          </>
        )}
      </TweetContainer>
      <div className="hidden sm:flex w-60 md:w-80 h-screen flex-col gap-3">
        <Trends />
        <WhoFollow />
      </div>
    </div>
  )
}
