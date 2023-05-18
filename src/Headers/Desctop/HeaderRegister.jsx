import React from 'react'
import "./HeaderRegister.scss"
import Logo from '../../assets/icons/icon.svg';
import Eye from '../../assets/icons/eye.svg';
import Button from '../../elements/Button/Button';


const HeaderRegister = (props)=> {
    const changeThemeEvent = ()=>props.setTheme(props.theme=="vimpaired"?"light":"vimpaired");
  return (
    <div className='DHheaderRegister'>
        <div className='DHInfoHeaderBorder'>
            <div className='DHInfoHeader'>
                <div className='DHlogo'>
                    <img src={Logo} className='DHlogoIcon'></img>
                    <div className='DHtitle'>
                        <div className='DHmainWord'>МТУСИ</div>
                        <div className='DHsecondoWord'>колледж телекоммуникаций</div>
                    </div>
                </div>
                <div className='DHbuttonBlock'>
                    <Button>RU</Button>
                    <Button>FAQ</Button>
                    <Button onClick={changeThemeEvent}>
                        <img src={Eye} className='eyeIcon'/>
                        </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderRegister;
