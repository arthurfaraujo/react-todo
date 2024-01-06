import { RouterProvider } from 'react-router-dom'
import { Router } from './routes'
import './assets/index.css'
import TodoProvider from './contexts/TodoProvider'

function App() {
  return (
    <TodoProvider>
      <RouterProvider router={Router} />
    </TodoProvider>
  )
}

export default App
