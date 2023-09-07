import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react'

import TweetActions from './TweetActions'
import TweetComment from './TweetComment'
import TweetReply from './TweetReply'

import moment from 'moment'
import type Tweet from '../entities/Tweet'
import type User from '../entities/User'

interface Props {
  tweet: Tweet
  user: User
}

export default function TweetPost({tweet, user} : Props) {
  const {createdAt, content} = tweet

  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <Avatar
          src={user.image}
          radius="sm"
          alt="user photo"
          className="ms-2"
        />
        <div className="flex flex-col">
          <p className="text-md font-extrabold">{user.name}</p>
          <p className="text-small text-default-500">{moment(createdAt).format('LLL')}</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-2 justify-start">
        <p>
          {content}
        </p>
        <div className="flex flex-col gap-2 items-end">
          <Image
            className="w-full"
            src="https://images.unsplash.com/photo-1692617669592-5b0301899216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=20"
          />
          <div className="flex gap-3">
            <p className="text-small text-gray-400">{tweet?.comments?.length ?? "0"} Comments</p>
            <p className="text-small text-gray-400">59k Retweets</p>
            <p className="text-small text-gray-400">234 Saved</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start gap-2">
        <TweetActions />
        <TweetReply user={user} />
        <TweetComment />
      </CardFooter>
    </Card>
  )
}
