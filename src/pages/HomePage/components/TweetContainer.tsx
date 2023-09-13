import React from 'react'

export default function TweetContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-4 px-2 items-center">{children}</div>
  )
}
