import type User from './User'

export default interface Tweet {
  id: string
  content: string
  createdAt: string
  userId: string
  user: User
  likes: User[]
  bookmarks: User[]
  retweets: User[]
  comments: Comment[]
}

export type TweetEntry = Pick<Tweet, 'content' | 'userId'>

export interface Comment {
  id: string
  content: string
  likes: number
  createdAt: string
  user: User
}
