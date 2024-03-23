//alert('Угадай число')
let random = getRandomInt(1, 100)
let counter = 0
let answer = document.getElementById('_number')

function check() {
    counter++
    if (Number(answer.value) === Number(random)) {
        alert('Выиграл')
        console.log('Количество попыток: ' + counter);
    }
    else {
        alert ('Проиграл')
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

console.log(random)