import React, { useState } from 'react'
import "./RadioButton.scss"

const RadioButton = (props)=> {
  return (
    <div className='RadioButton'>
        <input className='RadioSwitch' type='radio' name="solution" value={props.id}/>
        <label className='RadioText'>{props.children}</label>
    </div>
  )
}

export default RadioButton;
