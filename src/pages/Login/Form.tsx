import Input from "../../components/Input"
import { UserItf } from "../../common/interfaces"
import { useState } from "react"
import API from "../../services/axios"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { TodoContext } from "../../contexts/Todo"

function Form() {
  const { changeToken } = useContext(TodoContext)
  const [userLogin, setUserLogin] = useState<UserItf>({} as UserItf)
  const navigate = useNavigate()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    API.post('/user/login', userLogin).then(res => {
      if (res.data.authenticated) {
        navigate('/')
        changeToken(res.data.token)
      }
    }).catch(err => {
      alert(err.response.data.message)
    })
  }

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <Input label="Enter your email" type="email" handleChange={handleChange} />
      <Input label="Enter your password" type="password" handleChange={handleChange} />
      <button type="submit">Log In</button>
    </form>
  )
}

export default Form