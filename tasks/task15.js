// Cгенерировать массив 6(строк) на 7(колонок),  который должнем быть заполнен днями в текущем месяце (календарь на месяц).
// Месяц задается произвольно. Календарь должен включать дни недели предыдущего месяца и последующего.
// В решении задачи воспользоваться стандартными функциями работы с датой и временем.
// https://learn.javascript.ru/datetime


//Функция, определяющая месяц
let changeMonth = () => {
    let moment = new Date() //Создает объект времени с текущей системную дату и время
    //moment.setMonth(Number(prompt('Введите номер месяца'))-1)
    moment.setMonth(8)
    moment.setDate(1)
    return moment
}


//Функция, определяющая дату последнего дня месяца
let monthLength = (month) => { 
    let lastDay = new Date()
    lastDay.setMonth(month.getMonth() + 1)
    lastDay.setDate(0)// Создает объект для последнего дня указанного месяца (0 след. месяца == последний день этого месяца)
    //console.log(lastDay);
    let monthLength = lastDay.getDate(); // Получает число последнего дня месяца
    //console.log(monthLength);
    return monthLength
}

//Функция, добавляющая даты за прошлый месяц в массив
let addPrevious = (startingDay, month) => {
    console.log('prevMonthStratingDay is ' + startingDay);
    let week = []
    let prevMonth = new Date(month)
    prevMonth.setDate(0) //устанавливает дату последнего дня предыдущего месяца
    let prevMonthLastDate = prevMonth.getDate() //Нахождение номера последнего дня предыдущего месяца

    let prevMonthStratingDay = prevMonthLastDate - startingDay + 1;
    console.log(startingDay);
    for (let i = 0; i < startingDay; i++) { //Понедельник считаем за 0
        console.log('prevMonthStratingDay works');
        prevMonth.setDate(prevMonthStratingDay + i)
        week.push({ id: prevMonth.toDateString() }) //раньше было { month: prevMonth.getMonth(), date: prevMonthStratingDay + i}
    }
    return week
}


//Функция, добавляющая в массив даты за этот и следующий месяц
let addCurrentMonth = (week, startingDay, month) => { 
    let Length = monthLength(month)
    const calendar = []
    startingDay++
    for (let weekCount = 0; weekCount <= Math.ceil(Length / 7); weekCount++) {
        //console.log(weekCount + ' ' + (monthLength - weekCount * 7));
        for (let day = startingDay; day % 8 != 0 || day == 0; day++) {
            week.push({ id: month.toDateString() }) //раньше было {month: prevMonth.getMonth(), date: prevMonthStratingDay}
            month.setDate(month.getDate() + 1)
        }
        startingDay = 1
        //console.log(week);
        calendar.push(week)
        week = []
    }
    return calendar

}


//Main
let createCalendar = () => {
    let month = changeMonth()
    let startingDay = month.getDay()
    if (startingDay != 0) {
        startingDay = month.getDay() - 1 //Понедельник считаем за 0
    }
    else {
        startingDay = 6 //Меняем номер, если первый день - это воскресенье
    }
    let startOfWeek = addPrevious(startingDay, month)
    let calendar = addCurrentMonth(startOfWeek, startingDay, month)
    return calendar
}


console.log(createCalendar());