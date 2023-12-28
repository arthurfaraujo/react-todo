import Input from "../../components/Input"

function Form() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = Object.fromEntries(new FormData(form)) 

    console.log(formData)
  }

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <Input label="Enter your email" type="email" />
      <Input label="Enter your password" type="password" />
      <button type="submit">Log In</button>
    </form>
  )
}

export default Form