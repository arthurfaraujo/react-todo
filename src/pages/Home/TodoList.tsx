import Todo from "./Todo"

export interface TodoItf {
  index: number
  content: string
  done: boolean
}

function List({ list, handleClick }: { list: TodoItf[], handleClick: (index: number) => void }) {

  return (
    <ul className="todoList">
      {list.map((todo, index) => {
        return <Todo key={index} info={{...todo}} handleClick={handleClick} />
      })}
    </ul>
  )
}

export default List