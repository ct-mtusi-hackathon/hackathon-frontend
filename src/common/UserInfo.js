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
    this.login = result.data.username;
    this.name = result.data.firstName;
    this.lastName = result.data.lastName;
    this.patronymic = result.data.patronymic;
    this.group = result.data.group;
    this.coins = result.data.coins.coins;
    this.id = result.data.id;
    this.email = result.data.email;
    this.phoneNumber = result.data.phoneNumber;
    this.telegram = result.data.telegramUsername;
    this.subscribedEvents = await this.apiManager.getUserSubscribes();
    return true;
  }

  async trylogin(login, password, remember) {
    const result = await this.apiManager.login(login, password, remember);
    if (result.status) {
      const res = await this.init();
      return { status: res, msgs: res ? "" : "Невозможно загрузить профиль!" };
    }
    return { status: false, msgs: result.msgs };
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
    return this.subscribedEvents.includes(eventID);
  };
  subscribeToEvent = async (eventID, subscribed) => {
    console.log(eventID, subscribed);
    console.log(await this.apiManager.subscribeToEvent(eventID, subscribed));
    this.subscribedEvents = await this.apiManager.getUserSubscribes();
  };
}
