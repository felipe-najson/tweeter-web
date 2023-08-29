import { Avatar, Divider, Link, Input } from '@nextui-org/react'
import { BiImageAlt } from 'react-icons/bi'

export default function TweetReply() {
  return (
    <div className="flex flex-col w-full gap-1 mb-2">
      <Divider />
      <div className="flex gap-3 p-1">
        <Avatar
          radius="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <Input
          placeholder="Tweet your reply"
          fullWidth
          endContent={
            <Link as={'button'}>
              <BiImageAlt />
            </Link>
          }
        />
      </div>
      <Divider />
    </div>
  )
}
