const deltaName = {
    0: "Проходящее",
    7: "Предстоящее",
    21: "Будущее",
    9999: "Запланированное"
}

export class EventBase{
    constructor(Title, Description, Date)
    {
        this.Title = Title;
        this.Text = Description;
        this.startDate = Date;
        
        this.test();
    }

    test = ()=>{
        this.id = 1;
        this.URL = "https://img.rl0.ru/afisha/e630x315p0x0f1260x720q85i/s2.afisha.ru/mediastorage/89/90/9a6f49ac22c042c6b13b44f99089.jpeg"
        this.eventURL = "https://mtuci.ru/about_the_university/news/7539/";
        
        this.registerReward = 1150;
        this.winReward = 7500;
    }

    getNameFront = ()=>{
        const deltaTime = (this.startDate - new Date())/86400000;
        for(const index in deltaName)
            if(deltaTime <= index)
                return deltaName[index];
        return "";
    }
}