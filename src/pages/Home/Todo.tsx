import { TodoItf } from "../../common/interfaces"
import { TodoContext } from "../../contexts/Todo"
import { useContext, useState } from "react"

function Todo({ info }: { info: TodoItf }) {
  const { id, title, completed } = info
  const [todo, setTodo] = useState<string>(title)
  const { removeTodo, completeTodo, changeTodo } = useContext(TodoContext)
  const [checked, setChecked] = useState<boolean>(completed)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.currentTarget.value)
  }

  function handleBlur() {
    if (todo.trim() === '') {
      setTodo(title)
    } else {
      changeTodo(id, todo)
    }
  }

    return <li className="todo">
      <input type="checkbox" checked={checked} onChange={() => {
        setChecked(!checked)
        completeTodo(id)
      }} />
      <input className={checked ? 'todoTitle checked' : 'todoTitle'} value={todo} onChange={handleChange} onBlur={handleBlur} />
      <button onClick={() => removeTodo(id)}>&times;</button>
    </li>
  }

  export default Todo