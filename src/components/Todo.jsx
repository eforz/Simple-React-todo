import React from 'react'
import '../styles/todo.css'
import IsDoneBtn from './UI/IsDoneBtn/IsDoneBtn'


const Todo = ({toggleTask, removeTask, todo, ...props}) => {
  return (
    <div className={todo.complete ? 'strike' : ''}>
        <div className='todo__item' key={todo.id} {...props}>
            <IsDoneBtn onClick={() => removeTask(todo.id)}></IsDoneBtn>
            <div className='todo__item-text' onClick={() => toggleTask(todo.id)}>{todo.taskText}</div>
        </div>
    </div>    
  )
}

export default Todo