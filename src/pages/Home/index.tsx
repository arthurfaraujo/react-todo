import TodoForm from './TodoForm'
import '../../assets/Home.css'
import { useState } from 'react'
import TodoList, { TodoItf } from './TodoList'

function Home() {
  const [list, setList] = useState<TodoItf[]>([])

  function handleClick(todoIndex: number) {
    setList(list => list.filter((todo) => todo.index !== todoIndex))
  }

  function handleChange(todoIndex: number) {
    setList(list => list.map((todo) => {
      if (todo.index === todoIndex) {
        return {
          ...todo,
          done: !todo.done
        }
      } else {
        return todo
      }
    }))
  }

  return (
    <div className="homePage">
      <h1>To-Do</h1>
      <TodoForm updateList={setList} />
      <TodoList list={list} handleClick={handleClick} handleChange={handleChange} />
    </div>
  )
}

export default Home
