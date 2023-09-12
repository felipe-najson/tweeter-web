import jwt from 'jwt-decode'
import { type Token } from '../store'

export const decodeToken = (token: string): Token | null => {
  try {
    const decoded = jwt<Token>(token)
    return decoded
  } catch (error) {
    console.error('Error decoding token:', error)
    return null
  }
}
