import { Avatar, Divider, Link, Input } from '@nextui-org/react'
import { BiImageAlt } from 'react-icons/bi'
import type User from '../entities/User'

export default function TweetReply({user}: {user: User}) {
  return (
    <div className="flex flex-col w-full gap-1 mb-2">
      <Divider />
      <div className="flex gap-3 p-1">
        <Avatar
          radius="sm"
          src={user?.image}
        />
        <Input
          placeholder="Tweet your reply"
          fullWidth
          endContent={
            <Link as={'button'} color='foreground'>
              <BiImageAlt />
            </Link>
          }
        />
      </div>
      <Divider />
    </div>
  )
}
