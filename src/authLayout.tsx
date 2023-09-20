import { Outlet } from 'react-router-dom'

// Only for auth pages
export default function AuthLayout() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-colmax-w-[1400px] items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
