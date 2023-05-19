const deltaName = {
    0: "Проходящее",
    7: "Предстоящее",
    21: "Будущее",
    9999: "Запланированное"
}

export class EventBase{
    constructor(Title, Description, date, picture, site, coinReg, coinWin)
    {
        this.Title = Title;
        this.Text = Description;
        this.startDate = date;

        this.URL = picture
        this.eventURL = site;
        
        this.registerReward = coinReg;
        this.winReward = coinWin;
        this.id = Date.now()-date;
    }

    getNameFront = ()=>{
        const deltaTime = (this.startDate - new Date())/86400000;
        for(const index in deltaName)
            if(deltaTime <= index)
                return deltaName[index];
        return "";
    }
}