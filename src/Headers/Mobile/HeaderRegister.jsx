import React from 'react'
import "./HeaderRegister.scss"
import Logo from '../../assets/icons/icon.svg';
import Eye from '../../assets/icons/eye.svg';

const HeaderRegister = (props)=> {
  return (
    <div className='HMHeader'>
      <div className='HMlogo'>
        <img src={Logo} className='HMlogoIcon'></img>
        <div className='HMtitle'>
            <div className='HMTiteText' style={{fontSize:"22.5pt"}}>МТУСИ</div>
            <div className='HMTiteText' style={{fontSize:"5pt"}}>колледж телекоммуникаций</div>
        </div>
      </div>
      <div className='HMbuttonBlock'>
        <button className='HMbuttonBlockBTN'>RU</button>
        <button className='HMbuttonBlockBTN'>FAQ</button>
        <button className='HMbuttonBlockBTN' onClick={()=>{props.setTheme(props.theme=="vimpaired"?"light":"vimpaired")}}><img src={Eye} className='eyeIcon'></img></button>
      </div>
    </div>
  )
}

export default HeaderRegister;
