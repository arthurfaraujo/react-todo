import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav className="navBar">
        <ul className="navList">
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/login">Login</Link>
          </li>
          <li className="navItem">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header