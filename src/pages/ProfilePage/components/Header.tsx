import { Avatar, Button, Link, useDisclosure } from '@nextui-org/react'
import { IoMdPersonAdd } from 'react-icons/io'
import type User from '../../../entities/User'
import useAuthStore from '../../../store'
import { decodeToken } from '../../../utils/jwt'
import useFollow from '../../../hooks/useFollow'
import FollowModal from './FollowModal'

export default function Header({ user }: { user: User }) {
  const { token } = useAuthStore()
  const loggedUser = decodeToken(token)

  const { isOpen: isOpenFollowing, onOpen: openFollowing, onClose: onCloseFollowing} = useDisclosure()
  const { isOpen: isOpenFollowers, onOpen: openFollowers, onClose: onCloseFollowers } = useDisclosure()

  const { mutation, isFollowed } = useFollow({
    loggedId: loggedUser?.id,
    profileUser: user,
  })

  const handleFollow = () => {
    mutation.mutate({ userFollowingId: user?.id, isFollowed })
  }

  return (
    <>
    <div className="flex items-end justify-center relative h-[630px] md:h-[400px] w-full mb-4">
      <img
        className="w-full pb-20 h-[400px] object-cover rounded absolute top-0 left-0 right-0 z-1"
        src="https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        />
      <div className="relative flex flex-col items-center md:flex-row md:items-start gap bg-white shadow-md rounded-md p-6 w-full m-4 mx-4 md:mx-6 ">
        <Avatar
          src={user?.image}
          className="w-36 h-36 text-large -top-10"
          isBordered
          radius="sm"
          />
        <div className="flex flex-col md:flex-row gap-4 md:pl-8 w-full justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
              <h1 className="text-2xl font-bold">{user?.name}</h1>
              <Link as='button' color='foreground' className="flex gap-2" onClick={openFollowing}>
                <span className="text-sm font-bold">
                  {user?.following.length}
                </span>
                <span className="text-sm font-light text-zinc-400">
                  Following
                </span>
              </Link>
              <Link as='button' color='foreground' className="flex gap-2" onClick={openFollowers}>
                <span className="text-sm font-bold">
                  {user?.followedBy.length}
                </span>
                <span className="text-sm font-light text-zinc-400">
                  Followers
                </span>
              </Link>
            </div>
            <p className="text-md text-center md:text-start font-light text-zinc-600 max-w-md">
              {user?.description}
            </p>
          </div>

          {user?.id !== loggedUser?.id && (
            <Button
              color="primary"
              startContent={<IoMdPersonAdd />}
              onClick={handleFollow}
            >
              {isFollowed ? 'Unfollow' : 'Follow'}
            </Button>
          )}
        </div>
      </div>
    </div>
    <FollowModal isOpen={isOpenFollowing} onClose={onCloseFollowing} userList={user?.following} title='Following'/>
    <FollowModal isOpen={isOpenFollowers} onClose={onCloseFollowers} userList={user?.followedBy} title='Followers' />
    </>

  )
}
