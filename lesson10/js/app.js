// todo: Проверить что буква одна и что это не цифра, удалить пробелы при их наличии.
// todo: Реализовать подсчет неудачных попыток и проигрыша в случае 10 попыток.
// todo: Реализовать выдачу приза и конца игры в случае открытия всех букв.


const Game = {

    wordArray: [
        { word: "Фома", Riddle: "... неверующий" }
    ],
    gameField: document.querySelector('div[name="field"]'),
    buttonGo: document.querySelector('button[name="go"]'),
    buttonInspect: document.querySelector('button[name="checkLetters"]'),
    
    initGame: function () {
        this.buttonInspect.addEventListener("click", (event) => {
            let prevSibling = event.target.previousElementSibling
            console.log(prevSibling)
            checkLetter(prevSibling.value);
        })

        this.buttonGo.addEventListener("click", (event) => {
            event.target.style.visibility = 'hidden';
            startGame();
        })
    },

    createField: function (index) {
        let field = document.createElement('div')
        field.setAttribute('data-id', index)
        field.classList.add('field')
        this.gameField.appendChild(field)
    },

    startGame: function () {
        let elem = this.wordArray[0]
        letterArr = elem.word.split("")
        console.log(letterArr)
        letterArr.forEach((element, index) => {
            createField(index)
        })
    },

    checkLetter: function (letter) {
        let indexArr = []
        let letterArr = wordArray[0].word.split("")
        letterArr.forEach((element, index) => {
            console.log(element)
            if (letter == element) {
                indexArr.push(index)
            }
        })
            if (indexArr.length != 0) {
                indexArr.forEach((index) => {
                    let node = document.querySelector('div[data-id="' + index + '"]')
                    node.innerHTML = letter
                })
            }
            console.log(indexArr);
            console.log('Буква', letter)
}
    

}

//const gameField = document.querySelector('div[name="field"]');
// console.log(gameField);

// const wordArray = [
//     { word: "Фома", Riddle: "... неверующий" }
// ]

// let buttonGo = document.querySelector('button[name="go"]');
// let buttonInspect = document.querySelector('button[name="checkLetters"]');

// buttonInspect.addEventListener("click", (event) => {
//     let prevSibling = event.target.previousElementSibling
//     console.log(prevSibling)
//     checkLetter(prevSibling.value);
// })

// buttonGo.addEventListener("click", (event) => {
//     event.target.style.visibility = 'hidden';
//     startGame();
// })

// фабрика
// function createField(index) { 
//     let field = document.createElement('div')
//     field.setAttribute('data-id', index)
//     field.classList.add('field')
//     gameField.appendChild(field)
// }



// function checkLetter(letter) { 
//     let indexArr = []
//     let letterArr = wordArray[0].word.split("")
//     letterArr.forEach((element, index) => {
//         console.log(element)
//         if (letter == element) { 
//             indexArr.push(index)
//         }
       
//     })
//     if (indexArr.length != 0) { 
//         indexArr.forEach((index) => {
//             let node = document.querySelector('div[data-id="' + index + '"]')
//             node.innerHTML = letter
//         })
//     }
//     console.log(indexArr);
//     console.log('Буква', letter)
// }

// function startGame() { 
//     let elem = wordArray[0]
//     letterArr = elem.word.split("")
//     console.log(letterArr)
//     letterArr.forEach((element, index) => {
//         createField(index)    
//     });
// }

function checkIsLetter(input = '') {
    input = input.replaceAll(' ', '')
    if (input && input.length == 1 && input.search(/[0-9]/) == -1 ) {
        return true
    }
    return false
}

console.log(checkIsLetter());