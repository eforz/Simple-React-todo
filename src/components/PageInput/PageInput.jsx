import cl from './PageInput.module.css'
import React from 'react'

const PageInput = (props) => {
  return (
    <input  className={cl.page__input} {...props}></input>
  )
}

export default PageInput