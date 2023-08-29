import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import TrendingTweet from './TrendingTweet'

export default function Trends() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col items-start gap-2 p-4 pb-0">
        <h2 className="text-md">Trends for you</h2>
        <Divider />
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <TrendingTweet hashtag="programming" tweetsCount={210} />
        <TrendingTweet hashtag="devchallenges" tweetsCount={123} />
        <TrendingTweet hashtag="frontend" tweetsCount={34} />
        <TrendingTweet hashtag="helsinki" tweetsCount={5} />
      </CardBody>
    </Card>
  )
}
