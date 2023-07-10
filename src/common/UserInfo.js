import { ApiManager } from "./ApiManager";

export class UserInfo {
  constructor() {
    this.apiManager = new ApiManager();
  }

  async restoreSession() {
    if (this.apiManager.token) return await this.init();
    return false;
  }

  init2(l, p, n, g, c, i) {
    this.Login = l;
    this.pass = p;
    this.name = n;
    this.group = g;
    this.coins = c;
    this.id = i;
    return this;
  }

  async init() {
    const result = await this.apiManager.getUserInfo();
    if (result.status !== 200) return false;
    this.Login = result.data.telegramUsername;
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

  async login(login, password) {
    const result = await this.apiManager.login(login, password);
    if (result) {
      this.init();
      return true;
    }
    return false;
  }

  subscribedToEvent = (eventID) => {
    // this.apiManager.subscribedToEvent(eventID);
    return false;
  };
}
