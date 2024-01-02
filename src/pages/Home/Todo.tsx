import { TodoItf } from "../../common/interfaces"
import { TodoContext } from "../../contexts/Todo"
import { useContext } from "react"

function Todo({ info }: { info: TodoItf }) {
  const { index, title, completed } = info
  const { handleClick, handleChange } = useContext(TodoContext)

  return <li className="todo">
    <input type="checkbox" checked={completed} onChange={() => handleChange(index)} />
    <p className={completed ? 'checked' : ''}>{title}</p>
    <button onClick={() => handleClick(index)}>&times;</button>
  </li>
}

export default Todo