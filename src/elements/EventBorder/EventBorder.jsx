import React from "react"
import "./EventBorder.scss"
import Button from "../Button/Button";
import openLinkIcon from "../../assets/icons/openLink.svg"
import IconButton from "../Button/IconButton";

const EventBorder = (props)=> {
    const ev = props.eventInfo;
    const user = props.user;
  return (
    <div>    
        <div className='EBTitle'>
            {ev.getNameFront()} мероприятие
        </div>
        <div className="EventBorder">
            <div className="EBImageBorder">
                <img src={ev.URL} className="EBImage"/>
            </div>

            <div className='EBCurrentEvent'>
                <div className='EBCurrentEventTitle'>
                    {ev.Title}
                </div>
            </div>

            <div className="EBThemeText">
                {ev.Text}
            </div>

            <div className="EBButtons">
                <Button className="EBSubscribe">{user.subscribedToEvent(ev.id)?"Учавствовать":"Отписаться"}</Button>
                <IconButton className="EBOpenLink" src={openLinkIcon}/>
            </div>

            <div className='EBEventScrollList'>

            </div>
        </div>
    </div>
  )
}

export default EventBorder;
