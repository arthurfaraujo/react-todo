import { TodoItf } from "../../common/interfaces"
import { TodoContext } from "../../contexts/Todo"
import { useContext, useState } from "react"

function Todo({ info }: { info: TodoItf }) {
  const { id, title, completed } = info
  const { removeTodo, completeTodo } = useContext(TodoContext)
  const [checked, setChecked] = useState<boolean>(completed)

  return <li className="todo">
    <input type="checkbox" checked={checked} onChange={() => {
      setChecked(!checked)
      completeTodo(id)
    }} />
    <p className={checked ? 'checked' : ''}>{title}</p>
    <button onClick={() => removeTodo(id)}>&times;</button>
  </li>
}

export default Todo