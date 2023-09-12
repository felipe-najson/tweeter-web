import { Avatar } from '@nextui-org/react'
import { type Comment } from '../entities/Tweet'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export default function TweetComment({ comment }: { comment: Comment }) {
  const navigate = useNavigate()

  return (
    <div className="flex gap-3 w-full p-1">
      <Avatar as="button" radius="sm" src={comment.user.image} onClick={() => { navigate(`/profile/${comment.user.id}`); }}/>
      <div className="flex flex-col gap-1 p-3 bg-zinc-100 rounded-lg w-full">
        <div className="flex gap-2 items-end justify-between">
          <p className="text-md font-extrabold">{comment.user.name}</p>
          <p className="text-sm text-gray-400">
            {moment(comment.createdAt).format('LLL')}
          </p>
        </div>
        <p className="text-md text-gray-500">{comment.content}</p>
      </div>
    </div>
  )
}
