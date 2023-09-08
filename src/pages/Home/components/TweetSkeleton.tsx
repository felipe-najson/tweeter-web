import { Card, Skeleton } from '@nextui-org/react'

export default function TweetSkeleton() {
  return (
    <Card className="max-w-[800px] md:w-[500px] sm:w-[450px] w-[380px]  flex flex-row p-5 py-12 items-center gap-3">
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
