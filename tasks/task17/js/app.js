const Game = {
    // свойства
    WORDS: [
        { word: "христарадник", riddle: "Как на Руси называли просящего милостыню нищего?" },
        { word: "гоготалка", riddle: "Как раньше в некоторых частях России дети называли лошадь?" },
        { word: "любомудрие", riddle: "В старину в России обучением детей занимались женщины из привилегированных сословий, потому что были, как тогда говорили, «гораздо грамотными» и «преисполненными...». А вот преисполненными чего?" },
        { word: "рождество", riddle: "Когда девушка желала знать, за кого она выйдет замуж, она в Иванов день срывала розовый бутон, заворачивала его в белую бумагу и прятала до определенного праздника. В этот праздник бутон должен был оставаться свежим и ароматным как ни в чем не бывало. Тогда девушка брала его с собой в церковь. И тот, кому суждено было стать ее мужем, подходил к девушке и брал у нее цветок. Но если оказывалось, что бутон увял и потемнел, ворожба не срабатывала. До какого праздника от Иванова дня надо было хранить этот завернутый в бумагу бутон?" },
        { word: "башмак", riddle: "Из-за кочевого образа жизни скоморохов называли каликами перехожими. Что означает слово «калик»?" },
    ],
    gameField: document.querySelector('div[name="field"]'),
    goButton: document.querySelector('button[name="go"]'),
    checkButton: document.querySelector('button[name="check"]'),
    newGameButton: document.querySelector('button[name="new-game"]'),
    riddleText: document.querySelector('div[name="riddle"]'),
    gameOverText: document.querySelector('div > h1'),
    countField: document.querySelector('div[name="count-field"]'),
    counter: 0,
    attemptsCounter: 0,
    currWord: '',
    wordLetters: [],
    letterIndices: [],

    initGame: function () {
        this.goButton.addEventListener("click", (event) => {
            // Обработчик события для кнопки "Начать игру"
            this.WORDS = this.WORDS.sort(() => Math.random() - 0.5);
            this.changeDisplay()
            this.changeDisplay('screen-1', 'flex')
            this.startGame()
        });

        this.checkButton.addEventListener("click", (event) => {
            // Обработчик события для кнопки "Проверить"
            let sibling = event.target.previousElementSibling;
            this.checkLetter(sibling.value);
        });

        this.newGameButton.addEventListener("click", (event) => {
            // Обработчик события для кнопки "Новая игра"
            this.attemptsCounter = 0
            this.letterIndices = []
            this.changeDisplay('screen-2', 'none')
            this.gameField.innerHTML = ''
            this.startGame()
            this.changeDisplay('screen-1', 'flex')
        });
    },

    changeDisplay: function (screen = 'screen-0', displayState = 'none') {
        container = document.getElementsByClassName(screen)
        for (let i = 0; i < container.length; i++) {
            container[i].style.display = displayState;
        }
    },

    startGame: function () {
        if (this.counter == this.WORDS.length) {
            this.counter = 0
        }
        this.currWord = this.WORDS[this.counter]
        console.log(this.currWord);
        this.wordLetters = this.currWord.word.toUpperCase().split("");
        this.wordLetters.forEach((element, index) => {
            this.createField(index);
        });
        this.riddleText.innerHTML = this.WORDS[this.counter].riddle
        this.counter += 1
        this.countField.innerHTML = 'Попыток: ' + 3
    },

    createField: function (index) {
        // Создание игрового поля
        let field = document.createElement('div');
        field.setAttribute('data-id', index);
        field.classList.add('field');
        this.gameField.appendChild(field);
    },

    checkLetter: function (letter) {
        letter = letter.replaceAll(' ', '').toUpperCase()

        if (letter == this.currWord.word.toUpperCase()) {
            // Проверка слова
            this.endGame(true)
        }
        else {
            //Проверка буквы
            if (!/^[А-Я]$/.test(letter)) {
                this.printError('Необходимо ввести одну букву русского алфавита')
                console.log('Введено неверное значение: ' + letter);
                return
            }
            let attemptIsFailed = true
            this.wordLetters.forEach((element, index) => {
                if (letter == element) {
                    this.letterIndices.push({ index, letter });
                    this.wordLetters[index] = ''
                    attemptIsFailed = false
                }
            });
            this.countAttempt(attemptIsFailed)
            

            if (this.letterIndices.length == this.wordLetters.length) {
                this.endGame(true)
            }
        }
        //Вывод букв
        this.letterIndices.forEach((el) => {
            let node = document.querySelector('div[data-id="' + el.index + '"]');
            node.innerHTML = el.letter;
        });
    }, 

    countAttempt: function (attemptIsFailed) {
        if (attemptIsFailed) {
            this.attemptsCounter += 1
            this.countField.innerHTML = 'Попыток: ' + ( 3 - this.attemptsCounter)
            if (this.attemptsCounter >= 3) {
                this.endGame()
            }
        }
    },

    printError: function (err = 'Unknown error') {
        document.querySelector(".error").textContent = err;
    },

    endGame(gameResult = false) {
        if (gameResult) {
            this.gameOverText.innerHTML = 'Победа' 
        }
        else {
            this.gameOverText.innerHTML = 'Проигрыш'
        }
        this.changeDisplay('screen-1', 'none')
        this.changeDisplay('screen-2', 'flex')
    }

};


Game.initGame();
Game.printError();
