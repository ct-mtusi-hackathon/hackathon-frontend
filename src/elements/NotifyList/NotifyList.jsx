import React, { useEffect, useState } from "react";
import cl from "./NotifyList.module.scss";
import NotifyBlock from "./ErrorBlock/NotifyBlock";

const NotifyList = ({ addNotify }) => {
  const notifys = useState([]);
  useEffect(() => {
    addNotify.current = (message, error = true, picture = "", time = 2500) => {
      if (!message) return;
      const newElement = (
        <NotifyBlock message={message} error={error} picture={picture} />
      );
      notifys[1]((prev) => [newElement, ...prev]);
      setTimeout(() => {
        notifys[1]((prev) => prev.filter((x) => x !== newElement));
      }, time);
    };
  }, []);
  return <div className={cl.NotifyList}>{notifys}</div>;
};

export default NotifyList;
