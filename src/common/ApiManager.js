import axios from "axios";

export class ApiManager {
  constructor() {
    this.loaded = true;
    this.setToken(
      localStorage.getItem("token") || undefined,
      localStorage.getItem("refreshtoken") || undefined
    );
    axios.defaults.baseURL = "http://katerina4cat.ru:8000/";
  }

  setToken(token, refresh) {
    this.token = token;
    this.refreshtoken = refresh;
    localStorage.setItem("refreshtoken", refresh);
    localStorage.setItem("token", token);
    this.config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  }

  clearTokens() {
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("token");
  }

  async refreshToken() {
    if (!this.refreshtoken) return;
    try {
      const result = await axios.post(`/api/v1/token/refresh/`, {
        refresh: this.refreshtoken,
      });
      if (result.status === 200) {
        this.setToken(result.data.access, result.data.refresh);
      }
      this.loaded = true;
    } catch {
      return false;
    }
  }

  async login(login, password) {
    try {
      const result = await axios.post(`/api/v1/token/`, {
        username: login,
        password: password,
      });
      if (result.status !== 200) return false;
      this.setToken(result.data.access, result.data.refresh);
      return true;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }

  async getUserInfo() {
    try {
      const result = await axios.get(`/api/v1/users/profile/`, this.config);
      if (result.status !== 200) return false;
      return result;
    } catch {
      return false;
    }
  }

  async getUserSubscribes(userid) {
    try {
      return (
        await axios.get(
          `/api/v1/events/${userid}/register_on_event/`,
          this.config
        )
      ).data.map((x) => x.id);
    } catch {
      return false;
    }
  }

  async subscribedToEvent(eventID) {
    try {
      return (
        (
          await axios.get(`/api/v1/events/${eventID}/register_on_event/`, {
            ...this.config,
          })
        ).status === 200
      );
    } catch {
      return false;
    }
  }
}
