import React, { useState } from "react";
import "./EventBorder.scss";
import Button from "../Button/Button";
import openLinkIcon from "../../assets/icons/openLink.svg";
import IconButton from "../Button/IconButton";
import Coin from "../Coin/Coin";

const EventBorder = (props) => {
  const ev = props.eventInfo;
  const user = props.user;
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      props.next();
    }

    if (diff < -5) {
      props.prev();
    }

    setTouchPosition(null);
  };
  const subscribed = useState(user.subscribedToEvent(ev.id));
  return (
    <div
      {...props}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="EBTitle">{ev.getNameFront()} мероприятие</div>
      <div className="EventBorder">
        <div className="EBImageBorder">
          <img src={ev.URL} className="EBImage" />
        </div>

        <div className="EBCurrentEvent">
          <div className="EBCurrentEventTitle">{ev.Title}</div>
        </div>

        <div className="EBThemeText">{ev.Text}</div>

        <div className="EBButtons">
          <Button
            className="EBSubscribe"
            onClick={async () => {
              await user.subscribeToEvent(ev.id, subscribed[0]);
              subscribed[1](user.subscribedToEvent(ev.id));
            }}
          >
            {subscribed[0] ? "Отписаться" : "Учавствовать"}
          </Button>
          <IconButton
            className="EBOpenLink"
            src={openLinkIcon}
            onClick={(o) => window.open(ev.eventURL)}
          />
        </div>

        <div className="EBEventRewards">
          <div className="EBRewardInfo">
            {"Начислим "}
            <Coin count={ev.registerReward} />
            {" за участие и ещё "}
            <Coin count={ev.winReward} />
            {" за победу"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBorder;
