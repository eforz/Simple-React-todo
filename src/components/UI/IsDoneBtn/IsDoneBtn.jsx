import React from 'react'
import cl from './IsDoneBtn.module.css'
import DoneIcon from '@mui/icons-material/Done';

const IsDoneBtn = ({...props}) => {
  return (
    <div {...props} className={cl.done__btn}>
        <DoneIcon className={cl.done__icon}></DoneIcon>
    </div>
  )
}

export default IsDoneBtn