import { ApiManager } from "./ApiManager";

export class UserInfo{
    constructor(){
        this.apiManager = new ApiManager();
    }

    async init(){
        const result = await this.apiManager.getUserInfo();
        this.Login = result.username;
        this.name = result.firstName;
        this.lastName = result.lastName;
        this.patronymic = result.patronymic;
        this.group = result.group[0];
        this.coins = result.coins;
        this.id = result.id;
        this.subscribedEvents = await this.apiManager.getUserSubscribes();
    }

    async login(login, password)
    {
        const result = this.apiManager.login(login, password);
        if(result.status==200){
            this.init();
            return true;
        }
        return false;
    }
    
    subscribedToEvent = (eventID)=>{
        return this.subscribedEvent.includes(eventID);
    }

    subscribeToEvent = (eventID)=>{
        this.apiManager.subscribeToEvent(eventID);
    }
}