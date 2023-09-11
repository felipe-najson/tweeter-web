import { Button } from '@nextui-org/react'

import TweeterLogo from '../../assets/tweeter-logo.svg'
import LoginForm from './components/LoginForm'

export default function LoginPage() {

  return (
    <div className="flex flex-row gap-3 flex-auto ">
      <div className="hidden sm:flex  min-h-screen items-center p-8 w-1/2">
        <img src={TweeterLogo} alt="logo" className="w-full max-w-md" />
      </div>
      <div className="w-full sm:w-2/3  flex flex-col justify-evenly p-8 sm:py-16 gap-8 ">
        <h1 className="text-5xl sm:text-6xl tracking-wide max-w-sm">
          Welcome to <span className="text-6xl sm:text-7xl text-primary font-bold">Tweeter.</span>{' '}
        </h1>
        <div className="flex flex-col mt-4 max-w-sm">
          <h3 className="text-2xl mb-4">
            Enter your username and password below
          </h3>
          <LoginForm />
        </div>
        <div className="flex flex-col gap-3">
          <p>{`Don't have an account yet?`}</p>
          <Button color="primary" variant="bordered" className="w-fit px-10">
            Register here
          </Button>
        </div>
      </div>
    </div>
  )
}
