import Todo from "./Todo"

export interface TodoItf {
  index: number
  content: string
  done: boolean
}

function List({ list, handleClick, handleChange }: { list: TodoItf[], handleClick: (index: number) => void, handleChange: (index: number) => void }) {

  return (
    <ul className="todoList">
      {list.map((todo, index) => { 
        console.log('todo', todo)
        return <Todo key={index} info={{...todo}} handleClick={handleClick} handleChange={handleChange} />
      })}
    </ul>
  )
}

export default List