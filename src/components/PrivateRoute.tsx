import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { TodoContext } from "../contexts/Todo"

function PrivateRoute({ element }: { element: JSX.Element }) {
  const { getToken } = useContext(TodoContext)
  if (getToken()) {
    return element
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute