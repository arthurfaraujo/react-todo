import { ReactNode, useEffect, useState } from 'react'
import { TodoItf } from '../common/interfaces'
import API from '../services/axios'
import { TodoContext } from './Todo'

function TodoProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<TodoItf[]>([])
  const [token, setToken] = useState<string | null>(localStorage.getItem('@react-todo:token'))

  useEffect(() => {
    function fetchData() {
      try {
        API.get('http://localhost:3000/api/todo').then(res => {
          setList(res.data.todos)
        })
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  }, [token])

  function removeTodo(todoId: number) {
    API.delete(`/todo/${todoId}`).then(res => {
      if (res.data.removed) {
        setList(list => list.filter((todo) => todo.id !== todoId))
      }
    })
  }

  function completeTodo(todoId: number) {
    API.patch(`/todo/${todoId}`).then(res => {
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
    API.post('/todo', { title }).then(res => {
      if (res.data.created) {
        setList(list => [...list, { id: res.data.todo.id, title, completed: false}])
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
    <TodoContext.Provider value={{ list, addTodo, removeTodo, completeTodo, token, getToken, changeToken }}>
      {children}
    </TodoContext.Provider>)
}

export default TodoProvider