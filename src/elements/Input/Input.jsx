import React from 'react'
import "./Input.scss"

const Input = (props)=> {
  const setValue = props.setValue || (props.vals?props.vals[1]:((e)=>{}));
  const value = props.value || (props.vals?props.vals[0]:"");
  return (
    <div className='Input'>
        <div className='iconBase'>
            {props.require?
              <div className='requireStarIcon'>
                *
              </div>
            :undefined}
            <img src={props.src} className='inputIcon'/>
        </div>
        <input {...props} required={props.vals?(props.vals[2]||false):false} className='inputText' onChange={e=>setValue(e.target.value)} value={value}/>
    </div>
  )
}

export default Input;
