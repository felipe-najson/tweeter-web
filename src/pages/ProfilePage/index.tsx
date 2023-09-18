import {  Listbox, ListboxItem, Spinner } from '@nextui-org/react'
// import TweetPost from '../components/TweetPost'
import { BiImageAlt } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineModeComment } from 'react-icons/md'
import { TfiReload } from 'react-icons/tfi'
import useUser from '../../hooks/useUser'
import TweetPost from '../../components/TweetPost'
import { useParams } from 'react-router-dom'
import Header from './components/Header'

export default function ProfilePage() {
  const {id} = useParams()
  if (id === undefined) return null
  const { data: user, isLoading, isError } = useUser(id)

  if (!user && isError) return <div>failed to load</div>;

  if (isLoading) return <Spinner />;

  return (
    <div className='w-full'>
      <Header user={user}/>
      <div className="flex flex-row gap-8 sm:px-6 pb-6">
        <div className="hidden sm:block w-[340px] max-w-[400px] min-w-[250px] h-fit bg-white border-small p-2 px-4 rounded-small border-default-200 dark:border-default-100">
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
        <div className="flex flex-col gap-6 w-full">
          {user?.tweets.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-2xl font-bold">No tweets yet</h1>
              <p className="text-md text-center font-light text-zinc-600 max-w-md">
                When {user?.name} tweets, they'll show up here.
              </p>
            </div>
          )}
          {user?.tweets.map((tweet) => (
            <TweetPost key={tweet.id} tweet={tweet} />))
            }
        </div>
      </div>
    </div>
  )
}
