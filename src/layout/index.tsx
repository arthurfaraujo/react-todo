import { Outlet } from "react-router-dom"
import Header from "./Header"
import '../assets/Layout.css'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout