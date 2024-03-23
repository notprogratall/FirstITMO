//Динамическое добавление класса
let user = {
    login: 'lis',
    password: 123

}

function checkLogin(event) {
    console.log('Event: ' + event)
    let login = document.querySelector("input[name = 'email']")
    let password = document.querySelector("input[name = 'password']")
    console.log(login.value + password.value)
    if (user.login == login.value) {
        if (user.password == Number(login.password)) {
            location.href = './admin.html'
        }
        else {
            password.classList.add('border-red-500')
        }
    }
    else {
        login.classList.add('border-red-500')
    }
}

//Создание ивента
function game(event) {
    console.log('Event: ' + event);
    console.log('Target: ' + event.target);
    let node = event.target
    node.append(document.createElement('div')) //Создает элемент внутри родительского контейнера #field
}

let root = document.querySelector('#field')
root.addEventListener("click", game)

