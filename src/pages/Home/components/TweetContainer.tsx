import React from 'react'

export default function TweetContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col gap-3">{children}</div>
  )
}
