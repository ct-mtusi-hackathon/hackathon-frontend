import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import Modal from "../../elements/Modal/Modal";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import messageIcon from "../../assets/icons/message.svg";
import EventBorder from "../../elements/EventBorder/EventBorder";
import { EventBase } from "../../common/EventBase";
import RadioButton from "../../elements/RadioButton/RadioButton";
import SideMenu from "../../elements/SideMenu/SideMenu";

const MainPage = (props) => {
  const modal = useState(false);
  const skipMessage = useState("");
  const selectedEvent = useState(0);

  const events = useState([
    new EventBase("Нет активных мероприятий", ``, 0, "", "", 0, 0),
  ]);

  const loadEvents = async () => {
    const result = await props.user.apiManager.getEvents();
    if (result.status)
      if (result.data.length != 0) {
        events[1](
          result.data.map(
            (event) =>
              new EventBase(
                event.id,
                event.title,
                event.description,
                Date.parse(event.startDate),
                event.image.photo,
                "",
                event.coinsForRegistration,
                event.coinsForVictory
              )
          )
        );
        selectedEvent[1](0);
      } else {
        props.addNotify.current(result.msgs);
        console.log("Повторная попытка загрузить мероприятия");
        setTimeout(loadEvents, 2500);
      }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const prev = () => {
    if (selectedEvent[0] > 0) selectedEvent[1](selectedEvent[0] - 1);
  };
  const next = () => {
    if (selectedEvent[0] < events[0].length - 1)
      selectedEvent[1](selectedEvent[0] + 1);
  };

  return (
    <div className="MainPage">
      {
        <EventBorder
          eventInfo={events[0][selectedEvent[0]]}
          user={props.user}
          prev={prev}
          next={next}
        />
      }
      <div className="MPEventsSlider">
        {events[0].map((e, i) => (
          <div
            className={`MPEventSliderDot ${
              i == selectedEvent[0] ? "MPEventSliderDotSelected" : ""
            }`}
            onClick={(o) => selectedEvent[1](i)}
          />
        ))}
      </div>
      <div className="MPattendance">
        <div className="MPtwoFields">
          <button className="MPfirst">Я прийду</button>
          <button className="MPsecond" onClick={(x) => modal[1](true)}>
            Я не прийду
          </button>
        </div>
        <Modal vals={modal} className="MPSkipsolution">
          <div className="MPSkipInfo">
            Выберите причину пропуска из списка
            <br />
            или напишите свою, если её нету в списке.
          </div>
          <div className="MPSkipRadio">
            <RadioButton>Заболел</RadioButton>
            <RadioButton>Проспал</RadioButton>
            <RadioButton>На мероприятии</RadioButton>
            <RadioButton>Семейные обстоятельства</RadioButton>
          </div>
          <Input
            className="MPSkipInput"
            placeholder="Своя причина"
            src={messageIcon}
            vals={skipMessage}
          />
          <div className="MPSkipButtons">
            <Button onClick={(x) => modal[1](false)}>Назад</Button>
            <Button onClick={() => {}}>Подтвердить</Button>
          </div>
        </Modal>
      </div>
      <div className={`MPRightMenu ${props.menu[0] ? "MPRigthMenuOpen" : ""}`}>
        <SideMenu {...props} />
      </div>
    </div>
  );
};

export default MainPage;
