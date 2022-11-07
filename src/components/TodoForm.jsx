import React, { useState } from 'react'
import PlusBtn from '../components/UI/PlusBtn/PlusBtn'
import TodoInput from '../components/UI/TodoInput/TodoInput'

const TodoForm = ({addTask, ...props}) => {
    
  const [userInput, setUserInput] = useState('')
  const handleClick = (e) => {
    addTask(userInput)
    console.log('Клик')
    setUserInput('')
  }

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleClick(e)
        setUserInput('')
    }
  }

  return (
    <div className='add__todo' {...props}>
        <PlusBtn onClick={handleClick}/>
        <TodoInput 
            placeholder="Add a task" 
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        >
        </TodoInput>
    </div>
  )
}

export default TodoForm