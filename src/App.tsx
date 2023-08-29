import { NextUIProvider } from '@nextui-org/react'
import HomePage from './pages/Home'
import Layout from './layout'

function App() {
  return (
    <NextUIProvider>
      <Layout>
        <HomePage />
      </Layout>
    </NextUIProvider>
  )
}

export default App
