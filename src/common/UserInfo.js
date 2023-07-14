import { ApiManager } from "./ApiManager";

export class UserInfo {
  constructor() {
    this.apiManager = new ApiManager();
  }

  async restoreSession() {
    if (this.apiManager.token) return await this.init();
    return false;
  }

  async init() {
    const result = await this.apiManager.getUserInfo();
    if (result.status !== 200) return false;
    this.login = result.data.telegramUsername;
    this.name = result.data.firstName;
    this.lastName = result.data.lastName;
    this.patronymic = result.data.patronymic;
    this.group = result.data.group;
    this.coins = result.data.coins;
    this.id = result.data.id;
    this.email = result.data.email;
    this.phoneNumber = result.data.phoneNumber;
    this.subscribedEvents = await this.apiManager.getUserSubscribes();
    return true;
  }

  async trylogin(login, password) {
    const result = await this.apiManager.login(login, password);
    if (result) {
      this.init();
      return { status: true };
    }
    return { status: false, msg: "Неправильный логин или пароль!" };
  }
  async tryEdit(userInfo) {
    const result = await this.apiManager.EditProfile(userInfo);
    if (result.status) {
      this.init();
      return { status: true, msgs: ["Данные успешно сохранены"] };
    }
    return { status: false, msgs: result.msgs };
  }

  subscribedToEvent = (eventID) => {
    // this.apiManager.subscribedToEvent(eventID);
    return false;
  };
}
