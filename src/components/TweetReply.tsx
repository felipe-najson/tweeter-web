import { Avatar, Divider, Link, Input, Button } from '@nextui-org/react'
import { BiImageAlt } from 'react-icons/bi'
import type User from '../entities/User'

import { useMutation, useQueryClient } from 'react-query'
import APIClient from '../services/apiClient'
import { useState } from 'react'
import {BsFillSendFill} from 'react-icons/bs'

const client = new APIClient('/comments')

export default function TweetReply({user, tweetId}: {user: User | undefined, tweetId: string}) {
  const [content, setContent] = useState('')
  const queryClient = useQueryClient()

  const  {mutate, isLoading} = useMutation({
    mutationFn: client.post,
    onError: (err) => {
      console.log(err)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['tweets'])
      setContent('')
    },
  })

  const handleSubmit = () => {
    if (content !== '' )
      mutate({content, userId: user?.id, tweetId})
  }

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
          value={content}
          onValueChange={setContent}
          endContent={
            <Link as={'button'} color='foreground'>
              <BiImageAlt />
            </Link>
          }
        />
        <Button isLoading={isLoading} isIconOnly onClick={handleSubmit} color='primary'>
          {isLoading ? null :  <BsFillSendFill />}
        </Button>
      </div>
      <Divider />
    </div>
  )
}
