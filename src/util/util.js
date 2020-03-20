export const _ = {
     date(lang) {
        let date = {
            'ru': [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Ноябрь',
                'Октябрь',
                'Декабрь'
            ],
            'en': [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Nov",
                "Oct",
                "Dec"
            ]
        }
        return date[lang]
     },
    toNormalDate : (date) => {
        let day,month,year
        day = date.getDate()
        month = date.getMonth() + 1
        year = date.getFullYear()
        day = day >= 10 ? day : "0" + day.toString()
        month = month >= 10 ? month : "0" + (month)
        return `${month}/${day}/${year}`
    },
    // defaultRouterPosition : '/ModusReactApp/',
    defaultRouterPosition : '/'
}