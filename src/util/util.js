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
    // defaultRouterPosition : '/modusreactapp/',
    defaultRouterPosition : '/'
}