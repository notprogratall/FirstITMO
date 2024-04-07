let user = {
    login: 'admin@mail.ru',
    passw: 12345678
}

const checkLogin = (login) => {
    if (!login) return false;
    if (login.includes('@') && login.length > 6 && user.login == login) {
        return true
    }
    else {
        return false
    }
}

const checkPassw = (passw) => {
    if (!passw) return false;
    if (user.passw ===passwd && String(passw).length >= 8) {
        return true
    }
    else {
        return false
    }
}

const checkForm = () => {
    let login = document.querySelector('input[name="login"]')
    let passw = document.querySelector('input[name="password"]')
    if (checkLogin(login.value)) {
        checkPassw(passw.value) ? true : passw.classList.add('border-red-500')
    }
    else {
        login.classList.toggle('border-red-500')
    }
}