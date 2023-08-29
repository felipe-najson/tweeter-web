import React from 'react'
import Header from './components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="p-4 max-w-[1400px]">{children}</div>
    </div>
  )
}
