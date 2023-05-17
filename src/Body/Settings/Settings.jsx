import React, { useState } from 'react'
import "./Settings.scss"
import Button from '../../elements/Button/Button';
import EditIcon from '../../assets/icons/edit.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import LoginIcon from '../../assets/icons/account.svg';
import PasswordIcon from '../../assets/icons/password.svg';
import TwoPasswordIcon from '../../assets/icons/twoPassword.svg';
import TelegramIcon from '../../assets/icons/Telegram.svg';
import Input from '../../elements/Input/Input';

const Settings = (props)=> {
    const email = [...useState(""),...useState(false)];
    const phone = [...useState(""),...useState(false)];
    const login = [...useState(""),...useState(false)];
    const password = [...useState(""),...useState(false)];
    const twopassword = [...useState(""),...useState(false)];
    const telegram = [...useState(""),...useState(false)];

    const nextEvent = ()=>{
        email[3](true);
        phone[3](true);
        password[3](true);
        twopassword[3](true);
    }


  return (
    <div className='Settings'>
      <div className='profile'>
            <div className='profileInfo'>Профиль: {props.user.Login}</div>
            <Button>Выход</Button>
      </div>

      <div className='Bodytitle'>
        <div className='titleText'>
            Для продолжения
            <br/>
            необходимо заполнить данные:
        </div>
      </div>

      <div className='profilePhoto'>
            <img src={LoginIcon} className='photo'/>
            <div className='editPhotoButton' onClick={()=>console.log("test")}>
                <img src={EditIcon} className='editIcon'/>
            </div>
      </div>

      <div className='welcomeText'>
        <div className='welcomeName'>
            Здравствуйте,<br/>
            {props.user.name}
        </div>
        <div className='welcomeStudentInfo'>
            Студент группы {props.user.group}
        </div>
      </div>

      <div className='settingsUserFields'>
        <div className='SettingsFieldsMinimal'>
            <Input placeholder="Email" src={EmailIcon} vals={email} type="email" require={true}/>
            <Input placeholder="Номер телефона" src={PhoneIcon} vals={phone} type="number" require={true}/>
            <Input placeholder="Новый логин" src={LoginIcon} vals={login}/>
            <Input placeholder="Новый пароль" src={PasswordIcon} vals={password} type='password' require={true}/>
            <Input placeholder="Повторите пароль" src={TwoPasswordIcon} vals={twopassword} type='password' pattern={password[0]} require={true}/>
            <Input placeholder="Профиль Telegram" src={TelegramIcon} vals={telegram}/>
            <div className='reuireInfo'>* Обязательно к заполнению</div>
            <Button onClick={nextEvent}>Продолжить</Button>
        </div>
      </div>
    </div>
  )
}

export default Settings;
