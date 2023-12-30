import { createContext, ReactNode, useEffect, useState } from 'react'
import { TodoItf, TodoContextItf } from '../common/interfaces'

export const TodoContext = createContext<TodoContextItf>({} as TodoContextItf)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<TodoItf[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/todos')
        const data = await response.json()

        console.log(data)

        setList(data.todos)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

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