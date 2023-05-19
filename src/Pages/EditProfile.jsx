import React from 'react'
import HeaderRegister from '../Headers/Mobile/HeaderRegister'
import EditProfileInfo from '../Body/EditProfileInfo/EditProfileInfo'

const EditProfile = (props) => {
  return (
    <div>
        <HeaderRegister {...props}/>
        <EditProfileInfo {...props}/>
    </div>
  )
}

export default EditProfile