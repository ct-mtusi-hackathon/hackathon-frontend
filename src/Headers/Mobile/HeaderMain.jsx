import React from 'react'
import "./HeaderMain.scss"
import "./HeaderRegister.scss"
import Logo from '../../assets/icons/icon.svg';
import Button from '../../elements/Button/Button';
import BurgerIcon from '../../assets/icons/burger.svg'

const HeaderMain = (props)=> {
  return (
    <div className='HMHeader'>
        <div className='HMlogo'>
            <img src={Logo} className='HMlogoIcon'></img>
            <div className='HMtitle'>
                <div className='HMTiteText' style={{fontSize:"22.5pt"}}>МТУСИ</div>
                <div className='HMTiteText' style={{fontSize:"5pt"}}>колледж телекоммуникаций</div>
            </div>
            <div className='HMLine'/>
            <div className='HMhelperTitle'>
                <div className='HMhelperTitleText'>электронный</div>
                <div className='HMhelperTitleText'>помощник</div>
            </div>
        </div>
        <div className='HMBurgerMenu' onClick={x=>console.log("testse")}>
            <img src={BurgerIcon} style={{alignSelf:"center"}}></img>
        </div>
    </div>
  )
}

export default HeaderMain;
