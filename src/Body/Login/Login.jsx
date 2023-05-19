import React, { useState } from 'react'
import "./Login.scss"
import Input from '../../elements/Input/Input';
import Switch from '../../elements/Switch/Switch';
import accountIcon from '../../assets/icons/account.svg';
import passwordIcon from '../../assets/icons/password.svg';
import Main from '../../Pages/Main';
import { UserInfo } from '../../common/UserInfo';

const Login = (props)=> {
  
  const users=[
    new UserInfo().init2(
        "Lunya",
        "123",
        "Вячеслав",
        "ИСП11-121АП",
        5,
        1
    ),
    //Сюда ещё можно аккаунты
  ]
    const login = useState("");
    const password = useState("");
    const remember = useState(false);

    const authEvent = async ()=>{
      const result = await props.user.login(login[0], password[0], users);
      if(result)
        props.setCurrentPage(<Main {...props} user={result}/>);
      else
        alert("Неправильный логин или пароль!");
    }

  return (
    <div className='Login'>
        <h1>электронный</h1>
        <h1>помощник</h1>
        <div className='userFields'>
          <Input vals={login} src={accountIcon} placeholder="Логин"/>
          <Input vals={password} src={passwordIcon} type="password" placeholder="Пароль"/>
          <div className='forgotPass'>Забыли пароль?</div>
          <div className='twoFields'>
            <Switch value={remember[0]} setValue={remember[1]}/>
            <div className='rememberHint'>Запомнить</div>
            <button className='authButton' onClick={authEvent}>Авторизация</button>
          </div>
        </div>
          <div className='textFields'>
            <h2 style={{textAlign:"end"}}>Ваш цифровой куратор</h2>
            <h2 style={{textAlign:"start"}}>Наглядная статистика успеваемости</h2>
            <h2 style={{textAlign:"end"}}>Мероприятия учебного заведения</h2>
            <h2 style={{textAlign:"start"}}>Удобство использования</h2>
          </div>
    </div>
  )
}

export default Login;
