import React, { useState } from 'react'
import "./Login.scss"
import Input from '../../elements/Input/Input';
import Switch from '../../elements/Switch/Switch';
import account from '../../assets/icons/account.svg';
import password from '../../assets/icons/password.svg';

const Login = (props)=> {
    const [Login, SetLogin] = useState("");
    const [Password, SetPassword] = useState("");
  return (
    <div className='Login'>
        <h1>электронный</h1>
        <h1>помощник</h1>
        <div className='userFields'>
          <Input setValue={SetLogin} value={Login} src={account} placeholder="Логин"/>
          <Input setValue={SetPassword} value={Password} src={password} placeholder="Пароль"/>
          <a className='forgotPass'>Забыли пароль?</a>
          <div className='twoFields'>
            <Switch></Switch>
            <div className='rememberHint'>Запомнить</div>
            <button className='authButton' onClick={()=>console.log("test")}>Авторизация</button>
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
