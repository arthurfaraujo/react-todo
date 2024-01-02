import Input from '../../components/Input'
import React, { useState } from 'react'
import { UserItf } from '../../common/interfaces'
import API from '../../services/axios'
import { useNavigate } from 'react-router-dom'

function Form() {
  const [user, setUser] = useState<UserItf>({} as UserItf)
  const navigate = useNavigate()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, userInfo: UserItf) {
    e.preventDefault()

    API.post('/user', userInfo).then(res => {
      if (res.data.created) {
        console.log(res.data)
        navigate('/login')
      }
    }).catch(() => {
      alert('There was an error creating your account, please try again')
    })
  }

  return (
    <form className="authForm" onSubmit={(e) => handleSubmit(e, user)}>
      <Input label="Enter your email" type="email" handleChange={handleChange} />
      <Input label="Enter your nickname" type="text" name="nickname" handleChange={handleChange} />
      <Input label="Enter your password" type="password" handleChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default Form