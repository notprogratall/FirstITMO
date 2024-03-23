console.log('-- Второе задание --');
let c = prompt('Введите три числа через пробел');
let arr = [];
arr = c.split(' ');
console.log('Числа: ' + arr);
arr = arr.sort(function (a, b) {
    return a - b;
});
console.log('Отсортированные числа: ' + arr);