import { TodoItf } from "./TodoList"
// import { useState } from 'react'

function Todo({ info, handleClick, handleChange }: { info: TodoItf, handleClick: (index: number) => void, handleChange: (index: number) => void }) {
  const { index, content, done } = info
  // const [checked, setChecked] = useState<boolean>(done)

  /* function handleChange() {
    setChecked(checked => !checked)
  } */

  return <li className={done ? "todo checked" : "todo"}>
    <input type="checkbox" checked={done} onChange={() => handleChange(index)} />
    <p>{content}</p>
    <button onClick={() => handleClick(index)}>X</button>
  </li>
}

export default Todo