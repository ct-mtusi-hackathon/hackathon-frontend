import React from "react";
import "./SideMenu.scss";
import IconButton from "../Button/IconButton";
import ExitIcon from "../../assets/icons/exit.svg";
import Coin from "../Coin/Coin";
import ProfileImage from "../ProfileImage/ProfileImage";
import EditProfile from "../../Pages/EditProfile";
import Login from "../../Pages/Login";
import { UserInfo } from "../../common/UserInfo";

const SideMenu = (props) => {
  const user = props.user;
  const buttons = [
    "Главная",
    "Моя группа",
    "Мероприятия",
    "Успеваемость",
    "Магазин",
  ];
  const editProfile = () => {
    props.setCurrentPage(<EditProfile {...props} />);
  };
  const exitProfile = () => {
    props.user.apiManager.clearTokens();
    props.setCurrentPage(
      <Login
        setCurrentPage={props.setCurrentPage}
        user={new UserInfo()}
        theme={props.theme}
        setTheme={props.setTheme}
      />
    );
  };
  return (
    <div className="SideMenu">
      <div className="SMUserInfo">
        <div className="SMUserStats">
          <div className="SMuserName">{user.name}</div>
          <Coin count={user.coins} />
        </div>
        <ProfileImage onClick={editProfile} />
        <IconButton src={ExitIcon} onClick={exitProfile} />
      </div>
      <div className="SMElement SMElementHeader">Меню навигации</div>
      {buttons.map((BtnTitle) => (
        <div className="SMElement">{BtnTitle}</div>
      ))}
    </div>
  );
};

export default SideMenu;
