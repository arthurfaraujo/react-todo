import { useRef } from 'react'

function Form() {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (inputRef.current?.value) {
      console.log(inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Type something you have to do" />
    </form>
  )
}

export default Form
