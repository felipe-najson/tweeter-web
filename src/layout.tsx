import Header from './components/Header'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthStore from './store'

export default function Layout() {
  const { token } = useAuthStore()

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="flex flex-colmax-w-[1400px] items-center justify-center">
        {token ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  )
}
