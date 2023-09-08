import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import Layout from './layout'
import ErrorPage from './pages/ErrorPage'
import ProfilePage from './pages/ProfilePage'
import NotFound from './pages/NotFound'

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
])

export default router
