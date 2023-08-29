import { Link } from '@nextui-org/react'

interface Props {
  hashtag: string
  tweetsCount: number
}

export default function TrendingTweet({ hashtag, tweetsCount }: Props) {
  return (
    <div className="flex flex-col">
      <Link as="button" color="foreground" className="text-lg font-extrabold">
        #{hashtag}
      </Link>
      <span className="text-sm text-zinc-400">{tweetsCount}k Tweets</span>
    </div>
  )
}
