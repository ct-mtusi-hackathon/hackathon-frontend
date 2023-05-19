import React from 'react'
import HeaderRegister from '../Headers/Mobile/HeaderRegister'
import LoginBody from '../Body/Login/Login'

const Login = (props) => {
  return (
    <div>
        <HeaderRegister {...props}/>
        <LoginBody {...props}/>
    </div>
  )
}

export default Login