const deltaName = {
    0: "Проходящее",
    7: "Предстоящее",
    21: "Будущее",
    9999: "Запланированное"
}

export class EventBase{
    constructor()
    {
        this.test();
    }

    test = ()=>{
        this.id = 1;
        this.Title = "ЦИПР-2023 Пройдёт с 31 мая по 2 июня  в КТ МТУСИ"
        this.Text = `VIII ежегодная конференция «Цифровая индустрия промышленной России» (ЦИПР) пройдетв Нижнем Новгороде с 31 мая по 2 июня 2023года. На ЦИПР представители органов государственной власти и бизнес-сообщества обсудятнаиболее актуальные вопросы развития цифровых технологий в современных условиях.`
        this.URL = "https://img.rl0.ru/afisha/e630x315p0x0f1260x720q85i/s2.afisha.ru/mediastorage/89/90/9a6f49ac22c042c6b13b44f99089.jpeg"
        this.eventURL = "https://mtuci.ru/about_the_university/news/7539/";
        this.startDate = new Date(2023, 6, 7);
    }

    getNameFront = ()=>{
        const deltaTime = (this.startDate - new Date())/86400000;
        for(const index in deltaName)
            if(deltaTime <= index)
                return deltaName[index];
        return "";
    }
}