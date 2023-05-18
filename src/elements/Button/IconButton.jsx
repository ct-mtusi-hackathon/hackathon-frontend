import React from 'react'
import "./IconButton.scss"

const IconButton = (props)=> {
  return (
    <button {...props} className='IconButton'>
        {props.src?<img src={props.src} className='ButtonIconImage'/>:undefined}
    </button>
  )
}

export default IconButton;
