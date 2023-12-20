import { TodoItf } from "../../common/interfaces"
import { TodoContext } from "../../contexts/Todo"
import { useContext } from "react"

function Todo({ info }: { info: TodoItf }) {
  const { index, content, done } = info
  const { handleClick, handleChange } = useContext(TodoContext)

  return <li className="todo">
    <input type="checkbox" checked={done} onChange={() => handleChange(index)} />
    <p className={done ? 'checked' : ''}>{content}</p>
    <button onClick={() => handleClick(index)}>&times;</button>
  </li>
}

export default Todo