import React from 'react'
import {Route, Routes} from "react-router-dom";
import Login from '../pages/LoginPage';
import TodoPage from '../pages/TodoPage';

const PagesRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}> </Route>
        <Route path='/todo' element={<TodoPage/>}> </Route>
    </Routes>
  )
}

export default PagesRouter