import React from "react";
import cl from "./NotifyBlock.module.scss";
import ErrorIcon from "../../../assets/icons/cross.svg";
import WarningIcon from "../../../assets/icons/warning.svg";

const NotifyBlock = ({ message, error, picture }) => {
  return (
    <div className={cl.NotifyBlock}>
      <img src={error ? ErrorIcon : WarningIcon} className={cl.Picture}></img>
      <div className={cl.Message}>{message}</div>
    </div>
  );
};

export default NotifyBlock;
