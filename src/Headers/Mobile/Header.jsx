import React from 'react'
import "./Header.scss"
import Logo from '../../assets/icons/icon.svg';
import Eye from '../../assets/icons/eye.svg';

const header = (props)=> {
  return (
    <div className='Header'>
      <div className='logo'>
        <img src={Logo} className='logoIcon'></img>
        <div className='title'>
          <a style={{fontSize:"250%", }}>МТУСИ</a>
          <a style={{fontSize:"60%"}}>колледж телекоммуникаций</a>
        </div>
      </div>
      <div className='buttonBlock'>
        <button>RU</button>
        <button>FAQ</button>
        <button onClick={()=>{props.setTheme(props.theme=="vimpaired"?"light":"vimpaired")}}><img src={Eye} className='eyeIcon'></img></button>
      </div>
    </div>
  )
}

export default header;
