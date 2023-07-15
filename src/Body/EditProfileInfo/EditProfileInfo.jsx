import React, { useState } from "react";
import "./EditProfileInfo.scss";
import Button from "../../elements/Button/Button";
import EditIcon from "../../assets/icons/edit.svg";
import EmailIcon from "../../assets/icons/email.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import LoginIcon from "../../assets/icons/account.svg";
import PasswordIcon from "../../assets/icons/password.svg";
import TwoPasswordIcon from "../../assets/icons/twoPassword.svg";
import TelegramIcon from "../../assets/icons/Telegram.svg";
import Input from "../../elements/Input/Input";
import Main from "../../Pages/Main";
import Login from "../../Pages/Login";

const EditProfileInfo = (props) => {
  const email = [...useState(props?.user?.email || ""), ...useState(false)];
  const phone = [
    ...useState(props?.user?.phoneNumber || ""),
    ...useState(false),
  ];
  const login = [...useState(props?.user?.login || ""), ...useState(false)];
  const password = [...useState(""), ...useState(false)];
  const twopassword = [...useState(""), ...useState(false)];
  const telegram = [
    ...useState(props?.user?.telegram || ""),
    ...useState(false),
  ];
  const photoOpened = useState(false);

  const nextEvent = async () => {
    const new_login = login[0] || email[0];
    if (email[0] && phone[0] && password[0] && twopassword[0]) {
      if (password[0] === twopassword[0]) {
        const result = await props.user.tryEdit({
          email: email[0],
          phoneNumber: phone[0],
          username: new_login,
          newPassword: password[0],
          confirmNewPassword: password[0],
          telegramUsername: telegram[0],
        });
        if (result.status) {
          props.setCurrentPage(<Main {...props} />);
        }
        for (const errs of result.msgs)
          props.addNotify.current(errs, !result.status, "", 5000);
      } else props.addNotify.current("Пароли не совпадают!");
    } else props.addNotify.current("Вы не ввели данные!");
  };
  const exitEvent = () => {
    props.user.apiManager.clearTokens();
    props.setCurrentPage(<Login {...props} />);
  };
  const openPhoto = () => {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png, image/jpg, image/jpeg";
    input.onchange = (ev) => {
      var reader = new FileReader();
      const file = ev.target.files[0];
      reader.readAsDataURL(file, "UTF-8");

      reader.onload = (readerEvent) => {
        const photo = document.getElementById("photo");
        photoOpened[1](true);
        photo.setAttribute("src", readerEvent.target.result);
      };
    };
    input.click();
  };

  return (
    <div className="Settings">
      <div className="profile">
        <Button onClick={exitEvent}>Выйти</Button>
        <div className="profileInfo">Профиль: {props.user.id}</div>
      </div>

      <div className="Bodytitle">
        <div className="titleText">
          Для продолжения
          <br />
          необходимо заполнить данные:
        </div>
      </div>

      <div className="profilePhoto">
        <img
          src={LoginIcon}
          className={photoOpened[0] ? "CustomPhoto" : "photo"}
          id="photo"
        />
        <div className="editPhotoButton" onClick={openPhoto}>
          <img src={EditIcon} className="editIcon" />
        </div>
      </div>

      <div className="welcomeText">
        <div className="welcomeName">
          Здравствуйте,
          <br />
          {props.user.name}
        </div>
        <div className="welcomeStudentInfo">
          Студент группы {props.user.group}
        </div>
      </div>

      <div className="settingsUserFields">
        <div className="SettingsFieldsMinimal">
          <Input
            placeholder="Email"
            src={EmailIcon}
            vals={email}
            type="email"
            require={true}
          />
          <Input
            placeholder="Номер телефона"
            src={PhoneIcon}
            vals={phone}
            type="phone"
            require={true}
          />
          <Input placeholder="Новый логин" src={LoginIcon} vals={login} />
          <Input
            placeholder="Новый пароль"
            src={PasswordIcon}
            vals={password}
            type="password"
            require={true}
          />
          <Input
            placeholder="Повторите пароль"
            src={TwoPasswordIcon}
            vals={twopassword}
            type="password"
            pattern={password[0]}
            require={true}
          />
          <Input
            placeholder="Профиль Telegram"
            src={TelegramIcon}
            vals={telegram}
          />
          <div className="reuireInfo">* Обязательно к заполнению</div>
          <Button onClick={nextEvent}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileInfo;
