import TodoForm from './TodoForm'
import '../../assets/Home.css'
import TodoList from './TodoList'

function Home() {

  return (
    <div className="homePage">
      <h1>To-Do</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Home
