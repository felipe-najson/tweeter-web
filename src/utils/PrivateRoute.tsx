import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
    const auth = {token: '123'}

  return (
    auth.token ? <Outlet /> : <Navigate to="/login" />
  )
}
