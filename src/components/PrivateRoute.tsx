import { Navigate } from "react-router-dom"
import API from "../services/axios"
import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../contexts/Todo"

function PrivateRoute({ element }: { element: JSX.Element }) {
  const { changeToken } = useContext(TodoContext)
  const token = localStorage.getItem('@react-todo:token')
  const [verified, setVerified] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (token) {
      API.req.get(`/user/verify/${token}`).then(res => {
        if (res.data.verified) {
          setLoading(false)
          setVerified(true)
          changeToken(token)
        } else {
          setLoading(false)
          setVerified(false)
          changeToken()
        }
      }).catch(() => {
        setLoading(false)
        setError(true)
      })
    } else {
      setLoading(false)
      setVerified(false)
    }
  }, [changeToken, token])

  return (
    loading ? <div>Loading...</div> : error ? <div>Error...</div> : verified ? element : <Navigate to="login" />
  )
}

export default PrivateRoute