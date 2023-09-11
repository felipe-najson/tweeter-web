import { Button, ButtonGroup } from '@nextui-org/react'
import { FiBookmark, FiHeart } from 'react-icons/fi'
import { TfiReload } from 'react-icons/tfi'

import type User from '../entities/User'
import useLikes from '../hooks/useLikes'

interface Props {
  tweetId: string
  userId: string
  likes: User[]
}

export default function TweetActions({tweetId, userId, likes}: Props) {
  const {mutation, isLiked} = useLikes({userId, likes})

  const handleLike = () => {
    mutation.mutate({tweetId, userId, isLiked})
  }

  return (
    <ButtonGroup className="flex w-full">
      <Button
        fullWidth
        color="default"
        variant="light"
        startContent={<TfiReload />}
      >
        Retweeted
      </Button>
      <Button
        fullWidth
        onClick={handleLike}
        color={isLiked ? "danger" : "default"}
        variant="light"
        startContent={<FiHeart />}
      >
        {isLiked ? 'Liked' : 'Like'}
      </Button>
      <Button
        fullWidth
        color="default"
        variant="light"
        startContent={<FiBookmark />}
      >
        Saved
      </Button>
    </ButtonGroup>
  )
}
