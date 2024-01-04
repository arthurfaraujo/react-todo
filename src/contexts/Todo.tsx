import { createContext, ReactNode, useEffect, useState } from 'react'
import { TodoItf, TodoContextItf } from '../common/interfaces'

export const TodoContext = createContext<TodoContextItf>({} as TodoContextItf)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<TodoItf[]>([])
  const [token, setToken] = useState<string | null>(localStorage.getItem('@react-todo:token'))

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/todo')
        const data = await response.json()

        setList(data.todos)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  function handleClick(todoIndex: number) {
    setList(list => list.filter((todo) => todo.id !== todoIndex))
  }

  function handleChange(todoIndex: number) {
    setList(list => list.map((todo) => {
      if (todo.id === todoIndex) {
        return {
          ...todo,
          done: !todo.completed
        }
      } else {
        return todo
      }
    }))
  }

  function addTodo(todo: TodoItf) {
    setList(list => [...list, todo])
  }

  function getToken() {
    return token
  }

  function changeToken(token?: string) {
    if (token) {
      localStorage.setItem('@react-todo:token', token)
      setToken(token)
    } else {
      localStorage.removeItem('@react-todo:token')
      setToken(null)
    }
  }

  return (
    <TodoContext.Provider value={{ list, addTodo, handleClick, handleChange, token, getToken, changeToken }}>
      {children}
    </TodoContext.Provider>)
}