import { NextUIProvider } from '@nextui-org/react'
import Header from './components/Header'
import VerticalTabs from './components/VerticalTabs'

function App() {
  return (
    <NextUIProvider>
      <Header />
      <VerticalTabs />
    </NextUIProvider>
  )
}

export default App
