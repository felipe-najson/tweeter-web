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

export default function TweetInput() {
  return (
    <div className="flex flex-col gap-2 bg-white max-w-[800px] p-3 rounded-lg drop-shadow-md items-start">
      <span className="text-sm">Tweet something</span>
      <Divider className="bg-black/5" />
      <div className="flex gap-2 items-start w-full">
        <Avatar
          radius="sm"
          className="mt-2"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        <div className="flex flex-col w-full gap-3">
          <Textarea placeholder="What's happening?" />
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
            <Button color="primary">Tweet</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
