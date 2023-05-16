import React from 'react'
import "./Input.scss"

const Input = (props)=> {
  return (
    <div className='Input'>
        <div className='iconBase'>
            <img src={props.src} className='inputIcon'/>
        </div>
        <input {...props} className='inputText' onChange={e=>props.setValue(e.target.value)} value={props.value}/>
    </div>
  )
}

export default Input;
