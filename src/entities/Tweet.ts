import type User from './User'

export default interface Tweet {
  id: string
  content: string
  likes: number
  createdAt: string
  user: User
  comments: Comment[]
}

interface Comment {
  id: string
  content: string
  likes: number
  createdAt: string
  user: User
}
