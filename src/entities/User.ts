import type Tweet from './Tweet'

export default interface User {
  id: string
  username: string
  name: string
  email: string
  birthDate: string
  description: string
  image: string
  background: string
  createdAt: string
  tweets: Tweet[]
  followedBy: User[]
  following: User[]
}
