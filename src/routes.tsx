import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './layout'
import ErrorPage from './pages/ErrorPage'
import ProfilePage from './pages/ProfilePage'
import NotFound from './pages/NotFound'
import AuthLayout from './authLayout'
import LoginPage from './pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'profile/:id', element: <ProfilePage /> },
      { path: '*', element: <NotFound />}
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
    ],
  },
])

export default router
