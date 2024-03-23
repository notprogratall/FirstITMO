//Сложение чисел в цикле
let x = 100
let result = 0
for (let i = 0; i <= 100; i++) { 
    result += i;
}
console.log('result: ' + result);

//Создание объекта
let obj = {
    objName: 'Sanya',
    objAge: 12

}
console.log(obj.objAge);
console.log('objAge' in obj);
console.log('objEge' in obj);

//Создание списка из массива
let data= ['Буратино', 'Карло', 'Пиноккио']
let str = '<ul>'
for (let item of data) {
    str += '<li>' + item + '</li>';
}
str += '</ul>'
console.log(str);
let node = document.querySelector('#name')
node.innerHTML = str

//Создание выпадающего списка
data = [{ id: 1, name: 'Санкт-Петербург' },
    { id: 2, name: 'Сочи' },
    { id: 3, name: 'Самара' }]
str = "<select name='city' id = 'city-select'>"
for (let item of data) {
    str += '<option value="' + item.id + '">' +item.name + '</option>'
    console.log(str)
}
str += '</select>'
node = document.querySelector('#citySelector')
node.innerHTML = str

//Получение значения из выпадающего списка
function getCity() {
    let cityID = document.getElementById('city-select')
    console.log(cityID.value)
}

