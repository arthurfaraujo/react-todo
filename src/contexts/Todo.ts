import { createContext } from 'react'
import { TodoContextItf } from '../common/interfaces'

export const TodoContext = createContext<TodoContextItf>({} as TodoContextItf)
