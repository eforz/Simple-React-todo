import React, { useState, useEffect } from 'react'
import PageButton from '../components/PageButton/PageButton'
import PageInput from '../components/PageInput/PageInput'
import {Link} from "react-router-dom";


const LoginPage = () => {
  const [login, setLogin] = useState({title: ''})
  const [pass, setPass] = useState({title: ''})

  // set link
  let isWrong = '/'
  const trueLogin = () => {
    if (login.title === 'Admin' && pass.title === 'Admin') {
      isWrong = '/todo'
      return (<Link to='/todo'>Login</Link>)
    } else {
      return (<Link to='/'>Login</Link> )
    }
  }

  useEffect(() => {
    trueLogin()
    console.log(isWrong)
  }, [login, pass])

  return (
    <div className='form__container'>
        <form className='form'>
            <h2>Login please</h2>
            <h5>Admin:Admin</h5>
            <PageInput 
            value={login.title}
            type="text"
            placeholder="Username"
            onChange={e => setLogin({...login, title: e.target.value})}
            />
            <PageInput 
            value={pass.title}
            type="password"
            placeholder="Password"
            onChange={e => setPass({...pass, title: e.target.value})}
            />
            <PageButton>  
              {trueLogin()}
            </PageButton>
        </form>
    </div>
  )
}

export default LoginPage