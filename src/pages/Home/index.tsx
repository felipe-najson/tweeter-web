import TweetInput from '../../components/TweetInput'
import TweetPost from '../../components/TweetPost'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <TweetInput />
      <TweetPost />
    </div>
  )
}
