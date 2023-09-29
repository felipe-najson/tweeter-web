import Header from './components/Header'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import useAuthStore from './store'
import { useEffect } from 'react'
import { decodeToken } from './utils/jwt'

export default function Layout() {
  const { token } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
    
    const decodedJwt = decodeToken(token)
    if (decodedJwt && decodedJwt.exp * 1000 < Date.now()) {
      navigate('/login')
    }
  }, [token])

  return (
    <div className="bg-gray-200 flex flex-col items-center min-h-screen overflow-x-hidden">
      <Header />
      <div className="max-w-[1200px]">
        {token ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  )
}
