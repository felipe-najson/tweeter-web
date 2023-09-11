import React from 'react'

export default function TweetContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col w-full gap-4 px-2">{children}</div>
  )
}
