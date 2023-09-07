import type User from './User'

export default interface Tweet {
  id: string
  content: string
  likes: number
  createdAt: string
  userId: string
  user: User
  comments: Comment[]
}

export type TweetEntry = Pick<Tweet, 'content' | 'userId'>

interface Comment {
  id: string
  content: string
  likes: number
  createdAt: string
  user: User
}
