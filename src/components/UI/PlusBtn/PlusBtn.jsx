import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import cl from './PlusBtn.module.css'

const PlusBtn = ({...props}) => {
  return (
    <div {...props} className={cl.add__btn}><AddIcon></AddIcon></div>
  )
}

export default PlusBtn