import Todo from "./Todo"
import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../../contexts/Todo"
import API from "../../services/axios"

function List() {
  const { list, setList } = useContext(TodoContext)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    API.authReq.get('/todo').then(res => {
      setList(res.data.todos)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
      setError(true)
    })
  }, [setList])

  if (loading) {
    return <p className="loading">Loading...</p>
  }

  if (error) {
    return <p className="error">Error</p>
  }

  return (
    <>
      {list.length ?
        <ul className="todoList">
          {list.map((todo, index) => {
            return <Todo key={index} info={{ ...todo }} />
          })}
        </ul> :
        <p className="noTodos">There is no todo...</p>}
    </>
  )
}

export default List