const root = document.querySelector('#field')
root.addEventListener('click', callback)


let grid = [
    
    {
        id: '28.03.2024',
        event: [
            { id: 1, time: '10:00', name: 'Завтрак' },
            { id: 2, time: '10:00', name: 'Уборка' },
            { id: 3, time: '14:00', name: 'Обед' },
        ]
    },
    {
        id: '29.03.2024',
        event: [
            { id: 1, time: '10:00', name: 'Завтрак' },
            { id: 2, time: '10:00', name: 'Уборка' },
            { id: 3, time: '14:00', name: 'Обед' },
        ]

    },
    {
        id: '30.03.2024',
        event: [
            { id: 1, time: '10:00', name: 'Завтрак' },
            { id: 2, time: '10:00', name: 'Уборка' },
            { id: 3, time: '14:00', name: 'Обед' },
        ]

    },
    {
        id: '31.03.2024',
        event: [
            { id: 1, time: '10:00', name: 'Завтрак' },
            { id: 2, time: '10:00', name: 'Уборка' },
            { id: 3, time: '14:00', name: 'Обед' },
        ]

    }
]


//Создание основных элементов (дат), еще без подзадач
function render(data) {
    data.forEach(element => {
        let node = createField(element.id) //Определение поля
        addCssField(node) //Применение стилей
        root.appendChild(node) //Добавление даты в файл
        createChildNode(node, element.event) //Добавление подзадач
    });
}

//Дбавляет child элементы (планы из массива)
function createChildNode(parent, childAction) { //Parent - элемент даты, Action - это подзадача
    if (childAction.length == 0) return //Проверка на наличие подзадачи
        childAction.forEach((element) => { //Перебор элементов в элементе даты
        let elm = document.createElement('div')
        elm.setAttribute('data-id', element.id) //Создает отдельный id атрибут в элементе
        let textNode = document.createTextNode(element.time + ': ' + element.name) //Создание текстовой ноды
        elm.appendChild(textNode) //Добавляет в элемент подзадачи текст
        parent.appendChild(elm) //Добавляет подзадачу в дату
    })
}

//Создание и возвращение элемента
function createField(currDate = '26.03.2024') {
    let el = document.createElement('div')
    el.setAttribute('data-id', currDate) //Задаем id (не CSS)
    let textNode = document.createTextNode(currDate)
    el.appendChild(textNode)
    return  el
}

//Применение стилей
function addCssField(el) {
    el.classList.add('bg-gray-500')
    el.classList.add('w-32')
    el.classList.add('p-2')
    el.classList.add('ml-3')
    el.classList.add('text-white')
}

//Функция, обрабатывающая клик
function callback(event) {
    event.stopPropagation()
    let time = prompt('Введите событие')
    let ch = createField(time)
    event.target.appendChild(ch)
}
//render(grid)

//class="flex bg-gray-500 h-12 p-2 w-32 text-white ml-3" - применяемые стили


// npx tailwindcss -i ./lesson9/input.css -o ./lesson9/style.css --watch (если надо обновлять при сохранении)
// поменять файл html tailwind.config.js




let el = document.querySelector('#info')

//Первый способ получения данных
fetch('/server/modal.html', {
    method: 'GET', // Здесь так же могут быть GET, PUT, DELETE
    headers: {
        // Добавляем необходимые заголовки
        'Content-type': 'text/html; charset=UTF-8',
    }
})
    .then((response) => response.text())
    .then((data) => {
        console.log(data)
        el.innerHTML = data
    })


/* 
// Второй способ получения данных
async function getElement() {
    let response = await fetch('/server/data.json')
    let data = await response.json()
    el.innerHTML = data.name
}
getElement()
*/