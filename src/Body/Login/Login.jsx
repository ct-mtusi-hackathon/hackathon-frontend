import React, { useState } from 'react'
import "./Login.scss"
import Input from '../../elements/Input/Input';
import Switch from '../../elements/Switch/Switch';
import accountIcon from '../../assets/icons/account.svg';
import passwordIcon from '../../assets/icons/password.svg';

const Login = (props)=> {
    const login = useState("");
    const password = useState("");
    const remember = useState(false);

    const authEvent = ()=>{
      console.log(remember[0]);
    }

  return (
    <div className='Login'>
        <h1>электронный</h1>
        <h1>помощник</h1>
        <div className='userFields'>
          <Input vals={login} src={accountIcon} placeholder="Логин"/>
          <Input vals={password} src={passwordIcon} type="password" placeholder="Пароль"/>
          <a className='forgotPass'>Забыли пароль?</a>
          <div className='twoFields'>
            <Switch value={remember[0]} setValue={remember[1]}/>
            <div className='rememberHint'>Запомнить</div>
            <button className='authButton' onClick={authEvent}>Авторизация</button>
          </div>
        </div>
        <div style={{position:"fixed", bottom:"3vh", width:"100%"}}>
          <div className='textFields'>
            <h2 style={{textAlign:"end"}}>Ваш цифровой куратор</h2>
            <h2 style={{textAlign:"start"}}>Наглядная статистика успеваемости</h2>
            <h2 style={{textAlign:"end"}}>Мероприятия учебного заведения</h2>
            <h2 style={{textAlign:"start"}}>Удобство использования</h2>
          </div>
        </div>
    </div>
  )
}

export default Login;
