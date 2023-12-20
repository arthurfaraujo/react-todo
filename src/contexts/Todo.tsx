import { createContext, ReactNode, useState } from 'react'
import { TodoItf, TodoContextItf } from '../common/interfaces'

export const TodoContext = createContext<TodoContextItf>({} as TodoContextItf)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<TodoItf[]>([])

  function handleClick(todoIndex: number) {
    setList(list => list.filter((todo) => todo.index !== todoIndex))
  }

  function handleChange(todoIndex: number) {
    setList(list => list.map((todo) => {
      if (todo.index === todoIndex) {
        return {
          ...todo,
          done: !todo.done
        }
      } else {
        return todo
      }
    }))
  }

  function addTodo(todo: TodoItf) {
    setList(list => [...list, todo])
  }
  return (
    <TodoContext.Provider value={{ list, addTodo, handleClick, handleChange }}>
      {children}
    </TodoContext.Provider>)
}