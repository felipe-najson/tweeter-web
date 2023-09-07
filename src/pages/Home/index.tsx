import Trends from '../../components/Trends'
import TweetInput from '../../components/TweetInput'
import TweetPost from '../../components/TweetPost'
import WhoFollow from '../../components/WhoFollow'
import useTweets from '../../hooks/useTweets'
import useUser from '../../hooks/useUser'


export default function HomePage() {
  const {data: tweets} = useTweets()
  const {data: user} = useUser('c73f24d7-ef04-4366-8f5e-7ebc5c7797a2')



  return (
    <div className="grid grid-flow-col justify-center gap-4">
      <div className="flex flex-col gap-3 w-auto">
        <TweetInput user={user}/>
        {tweets?.map((tweet) => (
          <TweetPost key={tweet.id} tweet={tweet} user={tweet.user}/>))
        }
      </div>
      <div className="hidden sm:flex w-60 md:w-80 h-screen flex-col gap-3">
        <Trends />
        <WhoFollow />
      </div>
    </div>
  )
}
