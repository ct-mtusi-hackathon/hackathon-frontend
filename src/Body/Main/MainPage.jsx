import React, { useState } from 'react'
import "./MainPage.scss"
import Modal from '../../elements/Modal/Modal';
import Button from '../../elements/Button/Button';
import Input from '../../elements/Input/Input';
import messageIcon from "../../assets/icons/message.svg"

const MainPage = (props)=> {
    const modal = useState(false);
    const skipMessage = useState("");
  return (
    <div className='MainPage'>
        <div className='MPattendance'>
            <div className='MPtwoFields'>
                <button className='MPfirst'>Я прийду</button>
                <button className='MPsecond' onClick={x=>modal[1](true)}>Я не прийду</button>
            </div>
            <Modal vals={modal} className="MPSkipsolution">
                <div className='MPSkipInfo'>Выберите причину пропуска из списка<br/>
                    или напишите свою, если её нету в списке.</div>
                <Input className='MPSkipInput' src={messageIcon} vals={skipMessage}/>
                <div className='MPSkipButtons'>
                    <Button onClick={x=>modal[1](false)}>Подтвердить</Button>
                    <Button onClick={x=>modal[1](false)}>Назад</Button>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default MainPage;
