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
