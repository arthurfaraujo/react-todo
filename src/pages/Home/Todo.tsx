import { TodoItf } from "../../common/interfaces"
import { TodoContext } from "../../contexts/Todo"
import { useContext } from "react"

function Todo({ info }: { info: TodoItf }) {
  const { id, title, completed } = info
  const { handleClick, handleChange } = useContext(TodoContext)

  return <li className="todo">
    <input type="checkbox" checked={completed} onChange={() => handleChange(id)} />
    <p className={completed ? 'checked' : ''}>{title}</p>
    <button onClick={() => handleClick(id)}>&times;</button>
  </li>
}

export default Todo