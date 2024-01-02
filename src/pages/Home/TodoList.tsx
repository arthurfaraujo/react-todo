import Todo from "./Todo"
import { useContext } from "react"
import { TodoContext } from "../../contexts/Todo"

function List() {
  const { list } = useContext(TodoContext)

  return (
    <ul className="todoList">
      {list?.map((todo, index) => {
        return <Todo key={index} info={{ ...todo }} />
      })}
    </ul>
  )
}

export default List