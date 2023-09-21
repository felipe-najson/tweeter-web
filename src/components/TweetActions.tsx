import { Button, ButtonGroup } from '@nextui-org/react'
import { FiBookmark, FiHeart } from 'react-icons/fi'
import { TfiReload } from 'react-icons/tfi'

import type Tweet from '../entities/Tweet'
import useLike from '../hooks/useLike'
import useRetweet from '../hooks/useRetweet'
import useBookmark from '../hooks/useBookmark'

interface Props {
  tweet: Tweet
  userId: string
}

export default function TweetActions({tweet, userId}: Props) {
  const {likeMutation, isLiked } = useLike({userId, tweet})
  const {retweetMutation, isRetweeted}  = useRetweet({tweet, userId})
  const {bookmarkMutation, isBookmarked}  = useBookmark({tweet, userId})

  const handleAction = (action: string) => {
    if (action === 'retweet') {
      retweetMutation.mutate({tweetId: tweet.id, isRetweeted})
    } else if (action === 'like') {
      likeMutation.mutate({tweetId: tweet.id, isLiked})
    } else if (action === 'bookmark') {
      bookmarkMutation.mutate({tweetId: tweet.id, isBookmarked})
    }
  }

  return (
    <ButtonGroup className="flex w-full">
      <Button
        fullWidth
        color={isRetweeted ? "success" : "default"}
        variant="light"
        isLoading={retweetMutation.isLoading}
        onClick={() => { handleAction('retweet'); }}
        startContent={retweetMutation.isLoading ? null : <TfiReload />}
      >
        {isRetweeted ? 'Retweeted' : 'Retweet'}
      </Button>
      <Button
        fullWidth
        isLoading={likeMutation.isLoading}
        onClick={() => { handleAction('like'); }}
        color={isLiked ? "danger" : "default"}
        variant="light"
        startContent={likeMutation.isLoading ? null :  <FiHeart />}
      >
        {isLiked ? 'Liked' : 'Like'}
      </Button>
      <Button
        fullWidth
        isLoading={bookmarkMutation.isLoading}
        color={isBookmarked ? "primary" : "default"}
        variant="light"
        onClick={() => { handleAction('bookmark'); }}
        startContent={bookmarkMutation.isLoading ? null : <FiBookmark />}
      >
        {isBookmarked ? 'Saved' : 'Save'}
      </Button>
    </ButtonGroup>
  )
}