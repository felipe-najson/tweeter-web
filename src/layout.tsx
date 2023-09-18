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
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="flex flex-colmax-w-[1400px] items-center justify-center">
        {token ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  )
}
