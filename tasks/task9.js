//todo: Определить, является ли строка полиндромом

'потоп'
'мадам'
'комок'

'Уж истово вот сижу'

37573 - true
23442 - false 

str = String(prompt('Введите слово или фразу')).toLowerCase()
//str = String('Уж истово вот сижу').toLowerCase()

str = str.split(' ').join('')
//console.log(str);
//console.log(str.length / 2);

isPalindrome = true

// Первый вариант
for (let i = 0; i <= Number(str.length / 2); i++) {
    // проверка индексов: console.log(str[Number(i - 1)] + str[Number(str.length) - i]);
    if (str[Number(i-1)] != str[Number(str.length) - i]) {
        isPalindrome = false
        break
    }
}

// Второй вариант
if (str != str.split('').reverse().join('')) {isPalindrome = false}

console.log('Фраза является палиндромом - ' + isPalindrome);
