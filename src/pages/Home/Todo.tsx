import { TodoItf } from "../../common/interfaces"
import { TodoContext } from "../../contexts/Todo"
import { useContext, useState } from "react"

function Todo({ info }: { info: TodoItf }) {
  const { id, title, completed } = info
  const { handleClick, handleChange } = useContext(TodoContext)
  const [checked, setChecked] = useState<boolean>(completed)

  return <li className="todo">
    <input type="checkbox" checked={checked} onChange={() => {
      setChecked(!checked)
      handleChange(id)
    }} />
    <p className={checked ? 'checked' : ''}>{title}</p>
    <button onClick={() => handleClick(id)}>&times;</button>
  </li>
}

export default Todo