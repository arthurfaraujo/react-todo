import { ReactNode, useState } from 'react'
import { TodoItf } from '../common/interfaces'
import API from '../services/axios'
import { TodoContext } from './Todo'

function TodoProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<TodoItf[]>([])
  const [token, setToken] = useState<string | null>(null)

  function removeTodo(todoId: string) {
    API.authReq.delete(`/todo/${todoId}`).then(res => {
      if (res.data.removed) {
        setList(list => list.filter((todo) => todo.id !== todoId))
      }
    })
  }

  function completeTodo(todoId: string) {
    API.authReq.patch(`/todo/${todoId}`).then(res => {
      if (res.data.updated) {
        setList(list => list.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              done: !todo.completed
            }
          } else {
            return todo
          }
        }))
      }
    })
  }

  function addTodo(title: string) {
    API.authReq.post('/todo', { title }).then(res => {
      if (res.data.created) {
        setList(list => [...list, { id: res.data.todo.id, title, completed: false }])
      }
    })
  }

  function changeTodo(id: string, title: string) {
    API.authReq.patch(`/todo/${id}`, { title }).then(res => {
      if (res.data.updated) {
        setList(list => list.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              title
            }
          } else {
            return todo
          }
        }))
      }
    })
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
    <TodoContext.Provider value={{ list, setList, addTodo, removeTodo, completeTodo, changeTodo, token, getToken, changeToken }}>
      {children}
    </TodoContext.Provider>)
}

export default TodoProvider