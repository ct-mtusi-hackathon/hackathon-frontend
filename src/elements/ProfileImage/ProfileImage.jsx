import React from 'react'
import './ProfileImage.scss'
import accountIco from '../../assets/icons/account.svg'

function ProfileImage(props) {
  return (
    <div className='ProfileImage' {...props}>
        <img className='ProfileImageImg' src={props.photo?props.photo:accountIco}/>
    </div>
  )
}

export default ProfileImage