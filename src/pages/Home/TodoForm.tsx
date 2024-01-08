import React, { useState } from 'react'
import { TodoContext } from '../../contexts/Todo'
import { useContext } from 'react'
import API from '../../services/axios'

function Form() {
  const [input, setInput] = useState<string>('')
  const { addTodo } = useContext(TodoContext)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (input.trim() !== '') {
      API.post('/todo', { title: input }).then(res => {
        if (res.data.created) {
          addTodo({
            id: res.data.todo.id,
            title: res.data.todo.title,
            completed: res.data.todo.completed
          })
        }
      })

      setInput('')
    } else {
      alert('Please type something')
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input className='todoInput' type="text" placeholder="Type something you have to do" value={input} onChange={handleChange} />
    </form>
  )
}

export default Form
