import React, { useState } from 'react'
import "./MainPage.scss"
import Modal from '../../elements/Modal/Modal';
import Button from '../../elements/Button/Button';
import Input from '../../elements/Input/Input';
import messageIcon from "../../assets/icons/message.svg"
import EventBorder from '../../elements/EventBorder/EventBorder';
import { EventBase } from '../../common/EventBase';
import RadioButton from '../../elements/RadioButton/RadioButton';

const MainPage = (props)=> {
    const modal = useState(false);
    const skipMessage = useState("");
    const event1 = new EventBase();
  return (
    <div className='MainPage'>
        <EventBorder eventInfo={event1} user={props.user}/>
        <div className='MPattendance'>
            <div className='MPtwoFields'>
                <button className='MPfirst'>Я прийду</button>
                <button className='MPsecond' onClick={x=>modal[1](true)}>Я не прийду</button>
            </div>
            <Modal vals={modal} className="MPSkipsolution">
                <div className='MPSkipInfo'>Выберите причину пропуска из списка<br/>
                    или напишите свою, если её нету в списке.</div>
                    <div className='MPSkipRadio'>
                        <RadioButton>Заболел</RadioButton>
                        <RadioButton>Проспал</RadioButton>
                        <RadioButton>На мероприятии</RadioButton>
                    </div>
                    <Input className='MPSkipInput' src={messageIcon} vals={skipMessage}/>
                    <div className='MPSkipButtons'>
                        <Button onClick={()=>{}}>Подтвердить</Button>
                        <Button onClick={x=>modal[1](false)}>Назад</Button>
                    </div>
            </Modal>
        </div>
    </div>
  )
}

export default MainPage;
