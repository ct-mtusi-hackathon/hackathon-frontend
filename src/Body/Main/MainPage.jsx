import React, { useState } from "react";
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

  const events = [
    new EventBase(
      "ЦИПР-2023 Пройдёт с 31 мая по 2 июня  в КТ МТУСИ",
      `VIII ежегодная конференция «Цифровая индустрия промышленной России» (ЦИПР) пройдетв Нижнем Новгороде с 31 мая по 2 июня 2023года. На ЦИПР представители органов государственной власти и бизнес-сообщества обсудятнаиболее актуальные вопросы развития цифровых технологий в современных условиях.`,
      new Date(2023, 5, 24),
      "https://i.imgur.com/NT2cTLB.png",
      "https://mtuci.ru/about_the_university/news/7561/",
      150,
      250
    ),
    new EventBase(
      "В МТУСИ пройдут «Навыки будущего»",
      `18 мая в 14:00 в Конгресс-центре МТУСИ состоится Фестиваль «Цифровая трансформация. Какие навыки и компетенции нужны для успеха?» в рамках проекта «Навыки будущего» для старшеклассников и обучающихся образовательных организаций среднего профессионального и высшего образования.`,
      new Date(2023, 6, 1),
      "https://i.imgur.com/iX0hAQf.png",
      "https://mtuci.ru/about_the_university/news/7555/",
      300,
      500
    ),
  ];

  const prev = () => {
    if (selectedEvent[0] > 0) selectedEvent[1](selectedEvent[0] - 1);
  };
  const next = () => {
    if (selectedEvent[0] < events.length - 1)
      selectedEvent[1](selectedEvent[0] + 1);
  };

  return (
    <div className="MainPage">
      {
        <EventBorder
          eventInfo={events[selectedEvent[0]]}
          user={props.user}
          prev={prev}
          next={next}
        />
      }
      <div className="MPEventsSlider">
        {events.map((e, i) => (
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
