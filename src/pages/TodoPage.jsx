import '../styles/todo.css'
import React, { useState } from 'react'
import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'

const TodoPage = () => {

  const [todos, setTodos] = useState([
    {id:1, taskText:'Hello'},
    {id:2, taskText:'This is'},
    {id:3, taskText:'Todo list'},
  ])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id:Date.now().toString(30),
        taskText: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
      console.log(todos)
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map(todo => todo.id === id 
        ? {...todo, complete: !todo.complete}
        : {...todo}
        )
    ])
  }

  return (
    <div className='container'>
        <div className='todo__container'>
          <h1 className='todo__header'>Todo List</h1>
          <TodoForm addTask={addTask}></TodoForm>
          <h2>Todos - {todos.length}</h2>
          {todos.map((todo) => {
            return (
              <Todo 
                key={todo.id} 
                todo={todo} 
                toggleTask={handleToggle}
                removeTask={removeTask}
                />
            )
          })}
        </div>
    </div>
  )
}

export default TodoPage