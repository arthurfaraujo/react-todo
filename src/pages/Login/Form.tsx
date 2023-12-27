function Form() {
  return (
    <form className="loginForm">
      <div className="inputDiv">
        <input type="email" />
        <div className="placeholderDiv">Enter your e-mail</div>
      </div>
      <div className="inputDiv">
        <input type="password" />
        <div className="placeholderDiv">Enter your password</div>
      </div>
      <button type="submit">Log in</button>
    </form>
  )
}

export default Form