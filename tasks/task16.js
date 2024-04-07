//Используется задание массива без функций, чтобы было читаемо. 
//Массив взят из консоли при выполнении task15.js
let grid = [
    [
        { day: '26', month: 'Aug', year: '2024' },
        { day: '27', month: 'Aug', year: '2024' },
        { day: '28', month: 'Aug', year: '2024' },
        { day: '29', month: 'Aug', year: '2024' },
        { day: '30', month: 'Aug', year: '2024' },
        { day: '31', month: 'Aug', year: '2024' },
        { day: '01', month: 'Sep', year: '2024' }
    ],
    [
        { day: '02', month: 'Sep', year: '2024' },
        { day: '03', month: 'Sep', year: '2024' },
        { day: '04', month: 'Sep', year: '2024' },
        { day: '05', month: 'Sep', year: '2024' },
        { day: '06', month: 'Sep', year: '2024' },
        { day: '07', month: 'Sep', year: '2024' },
        { day: '08', month: 'Sep', year: '2024' }
    ],
    [
        { day: '09', month: 'Sep', year: '2024' },
        { day: '10', month: 'Sep', year: '2024' },
        { day: '11', month: 'Sep', year: '2024' },
        { day: '12', month: 'Sep', year: '2024' },
        { day: '13', month: 'Sep', year: '2024' },
        { day: '14', month: 'Sep', year: '2024' },
        { day: '15', month: 'Sep', year: '2024' }
    ],
    [
        { day: '16', month: 'Sep', year: '2024' },
        { day: '17', month: 'Sep', year: '2024' },
        { day: '18', month: 'Sep', year: '2024' },
        { day: '19', month: 'Sep', year: '2024' },
        { day: '20', month: 'Sep', year: '2024' },
        { day: '21', month: 'Sep', year: '2024' },
        { day: '22', month: 'Sep', year: '2024' }
    ],
    [
        { day: '23', month: 'Sep', year: '2024' },
        { day: '24', month: 'Sep', year: '2024' },
        { day: '25', month: 'Sep', year: '2024' },
        { day: '26', month: 'Sep', year: '2024' },
        { day: '27', month: 'Sep', year: '2024' },
        { day: '28', month: 'Sep', year: '2024' },
        { day: '29', month: 'Sep', year: '2024' }
    ],
    [
        { day: '30', month: 'Sep', year: '2024' },
        { day: '01', month: 'Oct', year: '2024' },
        { day: '02', month: 'Oct', year: '2024' },
        { day: '03', month: 'Oct', year: '2024' },
        { day: '04', month: 'Oct', year: '2024' },
        { day: '05', month: 'Oct', year: '2024' },
        { day: '06', month: 'Oct', year: '2024' }
    ]
]

const root = document.querySelector('#field')
root.className = 'grid grid-cols-7 grid-rows-[20px_repeat(6,_100px)] gap-0 divide-x divide-y border border-slate-200 border-solid border-1 mx-2.5'
root.setAttribute('data-id', grid[2][0].month)



function createHeader() {
    let header = document.querySelector('#header')
    header.className = 'h-10 mx-2.5 mb-1.5 flex justify-between align-middle items-center'
    
    // function createButton(text, twClass) {
    //     let el = document.createElement('button')
    //     el.setAttribute('type', "button")
    //     let buttonClasses = 'text-white h-6 min-w-7 rounded truncate flex-nowrap font-sans text-xs p-1.5 flex items-center align-middle'
    //     el.className = buttonClasses
    //     let textNode = document.createTextNode(text)
    //     el.appendChild(textNode)
    //     header.appendChild(el)
    // }

    let createHorizontalMenu = (array, styles) => {
        let menu = document.createElement('ul')
        for (let i = 0; i < array.length; i++) {
            let li = document.createElement('li');
            li.className = 'text-white min-w-7 truncate font-sans text-xs p-1.5 flex flex-nowrap items-center align-middle focus:bg-slate-900'
            let textNode = document.createTextNode(array[i])
            li.appendChild(textNode)
            menu.appendChild(li);
        }
        menu.className = styles
        addTailwindClasses(menu, 'bg-slate-700', 'h-6', 'rounded', 'flex', 'items-center', 'align-middle')
        header.appendChild(menu)
    }
    
    createHorizontalMenu(['\x3C', '\x3E'], 'mr-0 font-semibold')
    let button = document.createElement('button')
    button.setAttribute('type', "button")
    button.className = 'bg-slate-500 text-white h-6 min-w-7 rounded truncate flex-nowrap font-sans text-xs p-1.5 flex items-center align-middle ml-1.5 mr-auto'
    let textNode = document.createTextNode('Сегодня')
    button.appendChild(textNode)
    header.appendChild(button)

    let title = document.createTextNode(grid[1][0].month + ' ' + grid[1][0].year)
    header.appendChild(title)
    createHorizontalMenu(['Месяц', 'Неделя', 'День', "Повестка дня"], 'mr-0 ml-auto')

}

//Создание основных элементов (дат), еще без подзадач
function render(data) {
    data.forEach(week => {
        week.forEach(element => {
            let node = createField(element.day) //Определение поля
            addTailwindClasses(node, 'p-2', 'text-right', 'font-sans', 'text-xs', 'align-top', 'min-h-24', 'p-1')
            if (element.month == root.getAttribute('data-id')) {
                addTailwindClasses(node, 'text-sky-500')
            }
            else {
                addTailwindClasses(node, 'text-sky-200')
            }
            root.appendChild(node) //Добавление в элемент
        });
    });  
}


function renderDaysOfWeek() {
    days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    days.forEach(day => {
        let node = createField(day) //Определение поля
        addTailwindClasses(node, 'p-2', 'text-sky-500', 'text-center', 'font-sans', 'text-xs', 'max-h-5', 'p-0', 'font-semibold')
        root.appendChild(node) //Добавление в элемент
    });
}


//Создание и возвращение элемента
function createField(currDate = '26.03.2024') {
    let el = document.createElement('div')
    el.setAttribute('data-id', currDate) //Задаем id (не CSS)
    let textNode = document.createTextNode(currDate)
    el.appendChild(textNode)
    return el
}


function addTailwindClasses(element, twClass) {
    for (let i = 1; i <= arguments.length; i++) {
        if (arguments[i]) {
            element.classList.add(arguments[i])
        }
    }
}

createHeader()
renderDaysOfWeek()
render(grid)



// npx tailwindcss -i ./lesson9/input.css -o ./tasks/task16.css
