//todo:  Задан произвольный url необходимо получить его домен.

/*Пример:
var url = "http://www.ozon.ru/context/detail/id/19677670/"
Домен: www.ozon.ru
*/
var url = "http://www.ozon.ru/context/detail/id/19677670/"

//Первый вариант
var domArr = url.split('/')
console.log(domArr[2])

//Второй вариант
var domObj = new URL(url)
console.log(domObj.host)
//console.log(url);

//Третий вариант
var domStr = url.slice(url.indexOf("://") + 3);
domStr = domStr.slice(0, domStr.indexOf("/"));
console.log(domStr)
