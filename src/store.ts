import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Token {
  token: string
  exp: number
  iat: number
  id: string
}

interface AuthStore {
  token: string
  setToken: (token: string) => void
  removeToken: () => void
}

const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      token: '',
      setToken: token => {
        set(_ => ({ token }))
      },
      removeToken: () => {
        set(_ => ({ token: '' }))
      },
    }),
    {
      name: 'global',
    },
  ),
)

export default useAuthStore
