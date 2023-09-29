import { Card, Skeleton } from '@nextui-org/react'

export default function TweetSkeleton() {
  return (
    <Card className="max-w-3xl min-w-[310px] w-full flex flex-row p-5 py-12 items-center gap-3">
      <div>
        <Skeleton className="rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </Card>
  )
}
