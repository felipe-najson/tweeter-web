import { Avatar } from '@nextui-org/react'

export default function TweetComment() {
  return (
    <div className="flex gap-3 w-full p-1">
      <Avatar
        radius="sm"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
      />
      <div className="flex flex-col gap-1 p-3 bg-zinc-100 rounded-lg">
        <div className="flex gap-2 items-end">
          <p className="text-md font-extrabold">Mikael Sang</p>
          <p className="text-sm text-gray-400">24 August at 20:45</p>
        </div>
        <p className="text-md text-gray-500">
          Make beautiful websites regardless of your design experience.
        </p>
      </div>
    </div>
  )
}
