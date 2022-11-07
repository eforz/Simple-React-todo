import cl from './PageButton.module.css'
import React from 'react'

const PageButton = ({children, ...props}) => {
  return (
    <div {...props} className={cl.page__Button} >
        {children}
    </div>
  )
}

export default PageButton