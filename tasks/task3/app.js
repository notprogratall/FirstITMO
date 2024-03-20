console.log('-- Третье задание --');
a = prompt('Введите год');
console.log('Вы ввели ' + a + ' год');
if (a % 100 > 0) {
    a = Math.ceil(a / 100);
}
else {
    a = a / 100;
}
console.log('Это ' + a + ' столетие');