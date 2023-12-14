import { TodoItf } from "./TodoList"
import { useState } from 'react'

function Todo({ info, handleClick }: { info: TodoItf, handleClick: (index: number) => void }) {
  const { index, content, done } = info
  const [checked, setChecked] = useState<boolean>(done)

  function handleChange() {
    setChecked(checked => !checked)
  }

  return <li className={checked ? "todo checked" : "todo"}>
    <input type="checkbox" checked={checked} onChange={handleChange} />
    <p>{content}</p>
    <button onClick={() => handleClick(index)}>X</button>
  </li>
}

export default Todo