//todo: Задан произвольный url необходимо получить router, action и id
/*Пример:
var url = "http://www.ozon.ru/context/detail/id/19677670/"
router: context
action: detail
id: 19677670 */

var url = "http://www.ozon.ru/context/detail/id/19677670/"
//Первый вариант
urlArr = url.split('/')
urlObj = {
    router: urlArr[3],
    action: urlArr[4],
    id: urlArr[6],
}
console.log(urlObj)

//Второй вариант
regexp = /[^\/]+/g
all = url.match(regexp)
urlReg = {
    router: all[2],
    action: all[3],
    id: url.match(/\d+/)[0]
}
    url.match(regexp)

console.log(urlReg)
