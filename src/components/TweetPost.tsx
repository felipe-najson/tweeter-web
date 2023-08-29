import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  ButtonGroup,
  Button,
  Avatar,
  Input,
  Link,
  Divider,
} from '@nextui-org/react'

import { MdOutlineModeComment } from 'react-icons/md'
import { FiHeart, FiBookmark } from 'react-icons/fi'
import { TfiReload } from 'react-icons/tfi'
import { BiImageAlt } from 'react-icons/bi'

export default function TweetPost() {
  return (
    <Card className="w-full max-w-[800px]">
      <CardHeader className="flex gap-3">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          radius="sm"
          alt="user photo"
          className="ms-2"
        />
        <div className="flex flex-col">
          <p className="text-md font-extrabold">Mikael Sang</p>
          <p className="text-small text-default-500">24 August at 20:43</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-2 justify-start">
        <p>
          “We travel, some of us forever, to seek other places, other lives,
          other souls.” – Anais Nin
        </p>
        <div className="flex flex-col gap-2 items-end">
          <Image
            className="w-full"
            src="https://images.unsplash.com/photo-1692617669592-5b0301899216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=20"
          />
          <div className="flex gap-3">
            <p className="text-small text-gray-400">449 Comments</p>
            <p className="text-small text-gray-400">59k Retweets</p>
            <p className="text-small text-gray-400">234 Saved</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start gap-2">
        <ButtonGroup className="flex w-full">
          <Button
            fullWidth
            variant="light"
            startContent={<MdOutlineModeComment />}
          >
            Comment
          </Button>
          <Button
            fullWidth
            color="success"
            variant="light"
            startContent={<TfiReload />}
          >
            Retweeted
          </Button>
          <Button
            fullWidth
            color="danger"
            variant="light"
            startContent={<FiHeart />}
          >
            Liked
          </Button>
          <Button
            fullWidth
            color="primary"
            variant="light"
            startContent={<FiBookmark />}
          >
            Saved
          </Button>
        </ButtonGroup>
        <div className="flex flex-col w-full gap-1 mb-2">
          <Divider />
          <div className="flex gap-3 p-1">
            <Avatar
              radius="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <Input
              placeholder="Tweet your reply"
              fullWidth
              endContent={
                <Link as={'button'}>
                  <BiImageAlt />
                </Link>
              }
            />
          </div>
          <Divider />
        </div>
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
      </CardFooter>
    </Card>
  )
}
