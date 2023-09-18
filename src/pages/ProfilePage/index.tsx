
import useUser from '../../hooks/useUser'
import TweetPost from '../../components/TweetPost'
import { useParams } from 'react-router-dom'
import Header from './components/Header'
import { Spinner } from '@nextui-org/react'
import ActionMenu from './components/ActionMenu'

export default function ProfilePage() {
  const {id} = useParams()
  if (id === undefined) return null
  const { data: user, isLoading, isError } = useUser(id)

  if (!user && isError) return <div>failed to load</div>;

  if (isLoading) return <Spinner />;

  return (
    <div className='w-full'>
      <Header user={user}/>
      <div className="flex flex-row gap-8 sm:px-6 pb-6 justify-center">
      
      <ActionMenu/>
        <div className="flex flex-col gap-6">
          {user?.tweets.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-2xl font-bold">No tweets yet</h1>
              <p className="text-md text-center font-light text-zinc-600 max-w-md">
                When {user?.name} tweets, they will show up here.
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
