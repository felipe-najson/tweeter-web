import Trends from '../../components/Trends'
import TweetInput from '../../components/TweetInput'
import TweetPost from '../../components/TweetPost'
import WhoFollow from '../../components/WhoFollow'

export default function HomePage() {
  return (
    <div className="grid grid-flow-col justify-center gap-4">
      <div className=" flex flex-col gap-3 w-auto">
        <TweetInput />
        <TweetPost />
      </div>
      <div className="hidden sm:flex w-60 md:w-80 h-screen flex-col gap-3">
        <Trends />
        <WhoFollow />
      </div>
    </div>
  )
}
