console.log('-- Четвертое задание --');
a = prompt('Введите трехзначное число');
console.log('Вы ввели ' + a);
b = true;
c = 0;
a = a.split('');
a.forEach(function (i) {
    c += Number(i);
});
if (c % 2 > 0) {
    b = false;
}
console.log('Сумма цифр четная - ' + b);