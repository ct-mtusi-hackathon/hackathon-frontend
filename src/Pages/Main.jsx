import React, { useState } from 'react'
import HeaderMain from '../Headers/Mobile/HeaderMain'
import MainPage from '../Body/Main/MainPage'

const Main = (props) => {
  const menu = useState(false);
  return (
    <div>
        <HeaderMain {...props} menu={menu}/>
        <MainPage {...props} menu={menu}/>
    </div>
  )
}

export default Main