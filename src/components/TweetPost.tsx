import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  useDisclosure,
} from '@nextui-org/react'

import TweetActions from './TweetActions'
import TweetComment from './TweetComment'
import TweetReply from './TweetReply'

import moment from 'moment'
import type Tweet from '../entities/Tweet'
import LikesModal from './LikesModal'
import { useNavigate } from 'react-router-dom'
import useAuthenticatedUser from '../hooks/useAuthenticatedUser'

interface Props {
  tweet: Tweet
}

export default function TweetPost({ tweet}: Props) {
  const { createdAt, content, comments, likes } = tweet
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const { data: user } = useAuthenticatedUser()


  return (
    <>
      <Card className='max-w-3xl w-full'>
        <CardHeader className="flex gap-3">
          <Avatar
            as='button'
            onClick={() => { navigate(`/profile/${tweet.user?.id}`); }}
            src={tweet.user?.image}
            radius="sm"
            alt="user photo"
            className="ms-2"
          />
          <div className="flex flex-col">
            <p className="text-md font-extrabold">{tweet.user?.name}</p>
            <p className="text-small text-default-500">
              {moment(createdAt).format('LLL')}
            </p>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-2 justify-start">
          <p>{content}</p>
          <div className="flex flex-col gap-2 items-end">
            <div className="flex gap-3">
              {tweet?.likes?.length !== 0 && (
                <Link
                  onClick={onOpen}
                  as="button"
                  className="text-small text-gray-400"
                >
                  {tweet?.likes?.length ?? '0'} Likes
                </Link>
              )}
              <p className="text-small text-gray-400">{tweet?.retweets?.length ?? '0'} Retweets</p>
              <p className="text-small text-gray-400">{tweet?.bookmarks?.length ?? '0'} Saved</p>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col items-start gap-2">
          <TweetActions tweet={tweet} userId={user?.id ?? ''} />
          <TweetReply tweetId={tweet.id} user={user}/>
          {comments?.map(comment => (
            <TweetComment key={comment.id} comment={comment} />
          ))}
        </CardFooter>
      </Card>
      <LikesModal isOpen={isOpen} onClose={onClose} likes={likes}/>
    </>
  )
}
