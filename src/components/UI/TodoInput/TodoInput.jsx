import cl from './TodoInput.module.css'
import React from 'react'

const TodoInput = (props) => {
  return (
    <input  className={cl.todo__input} {...props}></input>
  )
}

export default TodoInput