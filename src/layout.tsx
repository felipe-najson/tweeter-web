import Header from './components/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="flex flex-col p-4 max-w-[1400px] items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
