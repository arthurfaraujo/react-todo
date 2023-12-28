import Input from '../../components/Input'

function Form() {
  return (
    <form className="authForm">
      <Input label="Enter your email" type="email" />
      <Input label="Enter your nickname" type="text" />
      <Input label="Enter your password" type="password" />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default Form