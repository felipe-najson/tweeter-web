import { Button, ButtonGroup } from '@nextui-org/react'
import { FiBookmark, FiHeart } from 'react-icons/fi'
import { MdOutlineModeComment } from 'react-icons/md'
import { TfiReload } from 'react-icons/tfi'

export default function TweetActions() {
  return (
    <ButtonGroup className="flex w-full">
      <Button fullWidth variant="light" startContent={<MdOutlineModeComment />}>
        Comment
      </Button>
      <Button
        fullWidth
        color="success"
        variant="light"
        startContent={<TfiReload />}
      >
        Retweeted
      </Button>
      <Button
        fullWidth
        color="danger"
        variant="light"
        startContent={<FiHeart />}
      >
        Liked
      </Button>
      <Button
        fullWidth
        color="primary"
        variant="light"
        startContent={<FiBookmark />}
      >
        Saved
      </Button>
    </ButtonGroup>
  )
}
