import { ApiManager } from "./ApiManager";

export class UserInfo {
  constructor() {
    this.apiManager = new ApiManager();
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
    this.Login = result.telegramUsername;
    this.name = result.firstName;
    this.lastName = result.lastName;
    this.patronymic = result.patronymic;
    this.group = result.group;
    this.coins = result.coins;
    this.id = result.id;
    this.email = result.email;
    this.phoneNumber = result.phoneNumber;
    this.subscribedEvents = await this.apiManager.getUserSubscribes();
  }

  async login(login, password) {
    const result = await this.apiManager.login(login, password);
    if (result) {
      this.init();
      return true;
    }
    return false;
  }

  subscribeToEvent = (eventID) => {
    this.apiManager.subscribeToEvent(eventID);
  };
}
