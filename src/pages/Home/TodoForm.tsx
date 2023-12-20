import React, { useState } from 'react'
import { TodoContext } from '../../contexts/Todo'
import { useContext } from 'react'

function Form() {
  const [input, setInput] = useState<string>('')
  const { addTodo } = useContext(TodoContext)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, content: string) {
    e.preventDefault()

    if (content) {
      addTodo({
        index: new Date().getTime(),
        content,
        done: false
      })

      setInput('')
    } else {
      alert('Please type something')
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e, input)}>
      <input className='todoInput' type="text" placeholder="Type something you have to do" value={input} onChange={handleChange} />
    </form>
  )
}

export default Form
