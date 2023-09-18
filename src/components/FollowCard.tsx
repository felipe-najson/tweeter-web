import { Avatar, Button, Image } from '@nextui-org/react'
import { IoMdPersonAdd } from 'react-icons/io'
import type User from '../entities/User'
import useFollow from '../hooks/useFollow'
import { useNavigate } from 'react-router-dom'

export default function FollowCard({user} : {user: User}) {
  const { mutation, isFollowed } = useFollow({user})
  const navigate = useNavigate()

  const handleFollow = () => {
    mutation.mutate({ userFollowingId: user?.id, isFollowed })
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center justify-between" id="header">
        <div className='flex gap-2'>
        <Avatar
          as="button"
          onClick={() => { navigate(`/profile/${user?.id}`) }}
          size="md"
          radius="sm"
          src={user?.image}
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm">{user?.name}</span>
          <p className="text-sm text-zinc-500">{user?.followedBy?.length} followers</p>
        </div>
        </div>
        <Button
          onClick={handleFollow}
          color="primary"
          size="sm"
          startContent={<IoMdPersonAdd />}
          className="text-sm"
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
      <p className="text-sm text-zinc-400">
        Photographer and traveler. I love to capture moments.
      </p>
      <Image
        src={user?.background}
        className="rounded-lg h-28 w-72 object-cover"
      />
    </div>
  )
}
