import { Link } from "react-router-dom"
import { useContext } from "react"
import { TodoContext } from "../contexts/Todo"
import { useNavigate } from "react-router-dom"

function Header() {
  const { token, changeToken } = useContext(TodoContext)
  const navigate = useNavigate()

  function logout() {
    changeToken()
    navigate('/login')
  }

  return (
    <header>
      <nav className="navBar">
        <ul className="navList">
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          {!token ? (
            <>
              <li className="navItem">
                <Link to="/login">Login</Link>
              </li>
              <li className="navItem">
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <li className="navItem" onClick={logout}>
              Logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header