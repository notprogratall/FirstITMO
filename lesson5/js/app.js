//console.log('Hello')
//let x = prompt('Input')
//window.alert('Value ' + x * 5)
let x = 4
let str = 'Pawel'
let str2 = "Paawel"
console.log('ST1')
let bool = true
console.log('ST2')
let PI = 3.14
let small = 32134567890876543213456578997865432435465760000
let big = 32134567890876543213456578997865432435465760000n

console.log(typeof(x))
console.log(typeof(str))
console.log(typeof(str2))
console.log(typeof(bool))
console.log(typeof (small) + ' ' + small)
console.log(typeof (big) + ' ' + big)

if (true > 0) {
    console.log('Yes')

}
else {
    console.log('No')
    
}

//тернарный оператор
let rezult = (PI > x) ? 'Da' : 'Net' 
console.log(rezult)

/* 
console.log('Домашняя работа:');

console.log('-- Первое задание --');
let a = prompt('Введите а');
let b = prompt('Введите б');
console.log('а = ' + a + ' б = ' + b);
a = Number(a) + Number(b); b = Number(a) - Number(b); a = Number(a) - Number(b) ;
console.log('а = ' + a + ' б = ' + b);

console.log('-- Второе задание --');
let c = prompt('Введите три числа через пробел');
let arr = [];
arr = c.split(' ');
console.log('Числа: ' + arr);
arr = arr.sort(function (a, b) {
    return a - b;
});
console.log('Отсортированные числа: ' + arr);

console.log('-- Третье задание --');
a = prompt('Введите год');
console.log('Вы ввели ' + a + ' год');
if (a%100 > 0) {
    a = Math.ceil(a / 100);
}
else {
    a = a / 100;
}
console.log('Это ' + a + ' столетие');

console.log('-- Четвертое задание --');
a = prompt('Введите трехзначное число');
console.log('Вы ввели ' + a);
b = true;
c = 0;
a = a.split('');
a.forEach(function (i) {
    c += Number(i);
});
if (c%2 > 0) {
    b = false;
}
console.log('Сумма цифр четная - ' + b);

console.log('-- Пятое задание --');
a = prompt('Введите номер месяца');
console.log('Вы ввели ' + a);

switch (a) {
    case '12':
    case '1':
    case '2':
        console.log('Это зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Это весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Это лето');
        break;    
    case '9':
    case '10':
    case '11':
        console.log('Это осень');
        break;    
    default:
        console.log('Неподходящее значение')
}
*/