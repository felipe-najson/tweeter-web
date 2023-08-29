import { Avatar, Button, Image } from '@nextui-org/react'
import { IoMdPersonAdd } from 'react-icons/io'

export default function FollowCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center" id="header">
        <Avatar
          size="md"
          radius="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm">Mikael Stanley</span>
          <p className="text-sm text-zinc-500">230k Followers</p>
        </div>
        <Button
          color="primary"
          size="sm"
          startContent={<IoMdPersonAdd />}
          className="text-sm"
        >
          Follow
        </Button>
      </div>
      <p className="text-sm text-zinc-400">
        Photographer and traveler. I love to capture moments.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1692617669592-5b0301899216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=20"
        className="rounded-lg h-28 w-72 object-cover"
      />
    </div>
  )
}
