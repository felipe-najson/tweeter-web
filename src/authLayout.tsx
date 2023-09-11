import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-colmax-w-[1400px] items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
