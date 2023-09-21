import { Button, Input } from '@nextui-org/react'
import { Toaster, toast } from 'sonner'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useMutation } from 'react-query'
import APIClient from '../../../services/apiClient'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../../store'

export default function LoginForm() {
  const { setToken } = useAuthStore()

  const navigate = useNavigate()
  const client = new APIClient<{ token: string }>('/auth/login')
  const [username, setUsername] = useState('jhondoe12')
  const [password, setPassword] = useState('password1234')

  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: client.post,
    onSuccess: data => {
      setToken(data.token)
      navigate('/')
    },
    onError: () => {
      toast.error('Login failed')
    },
  })

  const handleLogin = () => {
    if (username === '' || password === '') {
      toast.error('Please fill in all fields')
      return
    }
    mutate({ username, password })
  }

  return (
    <>
      <div className="flex flex-col gap-3 mt-4 max-w-sm">
        <Input
          isClearable
          value={username}
          onValueChange={setUsername}
          label="Username"
          placeholder="Enter your username"
          className="max-w-sm"
        />
        <Input
          label="Password"
          value={password}
          onValueChange={setPassword}
          placeholder="Enter your password"
          endContent={
            <button onClick={toggleVisibility}>
              {isVisible ? (
                <AiFillEyeInvisible className="text-2xl pointer-events-none text-zinc-600" />
              ) : (
                <AiFillEye className="text-2xl pointer-events-none text-zinc-600" />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
          className="max-w-sm"
        />
        <Button
          isLoading={isLoading}
          color="primary"
          className="max-w-sm px-10"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
      <Toaster />
    </>
  )
}
