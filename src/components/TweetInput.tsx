import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Link,
  Textarea,
} from '@nextui-org/react'
import { BiWorld, BiImageAlt } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { useState } from 'react'
import usePostTweet from '../hooks/usePostTweet'
import useAuthenticatedUser from '../hooks/useAuthenticatedUser'


export default function TweetInput() {
  const [tweet, setTweet] = useState('')
  const {mutate, isLoading} = usePostTweet()
  const { data: user } = useAuthenticatedUser()


  const handleSubmit = () => {
    if (tweet !== '' )
      mutate({content: tweet})
      setTweet('')
  }

  return (
    <div className="flex flex-col max-w-3xl w-full gap-2 bg-white p-3 rounded-lg drop-shadow-md items-start">
      <span className="text-sm">Tweet something</span>
      <Divider className="bg-black/5" />
      <div className="flex gap-2 items-start w-full">
        <Avatar
          radius="sm"
          className="mt-2"
          src={user?.image}
        />
        <div className="flex flex-col w-full gap-3">
          <Textarea value={tweet} onValueChange={setTweet} placeholder="What's happening?" />
          <div className="flex flex-row justify-between">
            <div className="flex items-center gap-2">
              <Link as={'button'}>
                <BiImageAlt />
              </Link>
              <Dropdown className="p-2">
                <DropdownTrigger>
                  <Button
                    startContent={<BiWorld />}
                    variant="light"
                    color="primary"
                    className="text-sm"
                  >
                    Everyone can reply
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  variant="faded"
                  aria-label="Dropdown menu with icons"
                >
                  <DropdownSection title="Choose who can reply to this Tweet.">
                    <DropdownItem
                      key="new"
                      variant="light"
                      startContent={<BiWorld />}
                    >
                      Everyone
                    </DropdownItem>
                    <DropdownItem
                      key="copy"
                      variant="light"
                      startContent={<BsFillPeopleFill />}
                    >
                      People you follow
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </div>
            <Button isLoading={isLoading} color="primary" onClick={handleSubmit}>Tweet</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
