import React from 'react'
import "./Button.scss"

const Button = (props)=> {
  return (
      <div className='Button'>
        <button {...props} className='ButtonCustom'/>
      </div>
  )
}

export default Button;
