import React from 'react'
import "./Coin.scss"
import CoinIcon from "../../assets/icons/coin.svg"

const Coin = ({count},props)=> {
  return (
    <div className='Coin'>
        {count}
        <img src={CoinIcon} className='CoinIcon'/>
    </div>
  )
}

export default Coin;
