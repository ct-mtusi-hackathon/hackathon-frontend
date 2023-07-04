import axios from "axios";

export class ApiManager {
  constructor() {
    this.refreshtoken = localStorage.getItem("refreshtoken") || undefined;
    this.loaded = false;
    this.refreshToken();
    axios.defaults.baseURL = "http://localhost:8000/";
  }

  setToken(token) {
    this.token = token;
    this.config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    // axios.defaults.params = { headers: { Authorization: `Bearer ${token}` } };
  }

  async refreshToken() {
    if (!this.refreshtoken) return;
    try {
      const result = await axios.post(`/api/v1/token/refresh/`, {
        refresh: this.refreshtoken,
      });
      if (result.status === 200) {
        this.setToken(result.access);
        localStorage.setItem("refreshtoken");
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
      this.setToken(result.access);
      this.refreshtoken = result.resfresh;
      localStorage.setItem("refreshtoken");
      return true;
    } catch {
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

  async subscribeToEvent(eventID) {
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
