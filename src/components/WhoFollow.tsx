import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import FollowCard from './FollowCard'
import useUsers from '../hooks/useUsers'

export default function WhoFollow() {
  const {data: users} = useUsers()

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col items-start gap-2 p-4">
        <h2 className="text-md">Who to follow</h2>
        <Divider />
      </CardHeader>
      <CardBody className="flex flex-col gap-7">
        {users?.map(user => (
          <FollowCard key={user.id} user={user} />
        ))}
      </CardBody>
    </Card>
  )
}
