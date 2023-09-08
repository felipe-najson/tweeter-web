import { Avatar } from '@nextui-org/react'
import { type Comment } from '../entities/Tweet'
import moment from 'moment'

export default function TweetComment({comment}: {comment: Comment}) {
  return (
    <div className="flex gap-3 w-full p-1">
      <Avatar
        radius="sm"
        src={comment.user.image}
      />
      <div className="flex flex-col gap-1 p-3 bg-zinc-100 rounded-lg w-full">
        <div className="flex gap-2 items-end justify-between">
          <p className="text-md font-extrabold">{comment.user.name}</p>
          <p className="text-sm text-gray-400">{moment(comment.createdAt).format('LLL')}</p>
        </div>
        <p className="text-md text-gray-500">
          {comment.content}
        </p>
      </div>
    </div>
  )
}
