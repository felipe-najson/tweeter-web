import { Avatar, Button, Listbox, ListboxItem } from '@nextui-org/react'
import { IoMdPersonAdd } from 'react-icons/io'
// import TweetPost from '../components/TweetPost'
import { BiImageAlt } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineModeComment } from 'react-icons/md'
import { TfiReload } from 'react-icons/tfi'
import useUser from '../hooks/useUser'
import TweetPost from '../components/TweetPost'

export default function ProfilePage() {
  const { data: user } = useUser()

  return (
    <>
      <div className="flex items-end justify-center relative h-[630px] md:h-[400px] w-full">
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
                <div className="flex gap-2">
                  <span className="text-sm font-bold">{user?.following.length}</span>
                  <span className="text-sm font-light text-zinc-400">
                    Following
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-sm font-bold">{user?.followedBy.length}</span>
                  <span className="text-sm font-light text-zinc-400">
                    Following
                  </span>
                </div>
              </div>
              <p className="text-md text-center md:text-start font-light text-zinc-600 max-w-md">
                {user?.description}
              </p>
            </div>
            <Button color="primary" startContent={<IoMdPersonAdd />}>
              Follow
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col gap-8">
        <div className="hidden sm:block w-[240px] max-w-[300px] min-w-[180px] h-fit bg-white border-small p-2 px-4 rounded-small border-default-200 dark:border-default-100">
          <Listbox
            variant="solid"
            color="primary"
            aria-label="Listbox menu with icons"
          >
            <ListboxItem
              key="new"
              showDivider
              startContent={<MdOutlineModeComment />}
            >
              Tweets
            </ListboxItem>
            <ListboxItem key="tweets" showDivider startContent={<TfiReload />}>
              Tweets & replies
            </ListboxItem>
            <ListboxItem key="media" showDivider startContent={<BiImageAlt />}>
              Media
            </ListboxItem>
            <ListboxItem key="likes" startContent={<FiHeart />}>
              Likes
            </ListboxItem>
          </Listbox>
        </div>
        <div className="flex flex-col gap-6">
          {user?.tweets.map((tweet) => (
            <TweetPost key={tweet.id} tweet={tweet} user={user} />))
            }
        </div>
      </div>
    </>
  )
}
