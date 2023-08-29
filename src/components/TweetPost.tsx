import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react'

import TweetReply from './TweetReply'
import TweetComment from './TweetComment'
import TweetActions from './TweetActions'

export default function TweetPost() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          radius="sm"
          alt="user photo"
          className="ms-2"
        />
        <div className="flex flex-col">
          <p className="text-md font-extrabold">Mikael Sang</p>
          <p className="text-small text-default-500">24 August at 20:43</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-2 justify-start">
        <p>
          “We travel, some of us forever, to seek other places, other lives,
          other souls.” – Anais Nin
        </p>
        <div className="flex flex-col gap-2 items-end">
          <Image
            className="w-full"
            src="https://images.unsplash.com/photo-1692617669592-5b0301899216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=20"
          />
          <div className="flex gap-3">
            <p className="text-small text-gray-400">449 Comments</p>
            <p className="text-small text-gray-400">59k Retweets</p>
            <p className="text-small text-gray-400">234 Saved</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start gap-2">
        <TweetActions />
        <TweetReply />
        <TweetComment />
      </CardFooter>
    </Card>
  )
}
