import TweetPost from '../../components/TweetPost'
import useTweets from '../../hooks/useTweets'
import useUser from '../../hooks/useUser'
import useAuthStore from '../../store'
import { decodeToken } from '../../utils/jwt'
import TweetContainer from '../HomePage/components/TweetContainer'
import TweetSkeleton from '../HomePage/components/TweetSkeleton'

export default function BookmarkPage() {
  const { token } = useAuthStore()
  const decoded = decodeToken(token)
  const { data: user, isSuccess: userSuccess, isError: userError } = useUser(decoded?.id ?? "")
  const query = {bookmarked: true}
  const { data: tweets, isLoading, isSuccess, isError } = useTweets(query)

  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <div className="flex justify-center items-center w-full gap-6 md:py-8 ">
      <TweetContainer >
        {isLoading &&
          skeletons.map(skeleton => <TweetSkeleton key={skeleton} />)}
        {(isError || userError) && <p className='text-md'>An error ocurred fetching tweets...</p>}

        {isSuccess && userSuccess && (
          <>
            {tweets?.map(tweet => (
              <TweetPost key={tweet.id} tweet={tweet} user={user} />
            ))}
            {tweets.length === 0 && <p className='text-xl max-w-md text-center'>Oops! It looks like you do not have any saved tweets.</p>}
          </>
        )}
      </TweetContainer>
    </div>
  )
}
