import Handlebars from 'handlebars'
import { v4 as uuidv4 } from 'uuid';

import { cartLayout } from './partials/cartLayout.hbs.js'
import { cartItems } from './partials/cartItemHandler.js'
import { mainMenuCart } from './partials/menu.hbs.js'
import { popWindow } from './partials/popWindow.hbs.js'

try {
    await cartItems.extractCatalogDB()
} catch (error) {
    if (error instanceof TypeError) {
        alert("Произошла ошибка сети или сервера")
    } else {
        console.error("Неизвестная ошибка:", error)
        alert("Что-то пошло не так, пожалуйста, попробуйте позже")
    }
}

cartItems.init()
let templateLayout = Handlebars.compile(cartLayout)
let htmlApp = templateLayout({ itemsData: cartItems.data })
let root = document.getElementById("cart")
root.innerHTML = htmlApp

let templateMenu = Handlebars.compile(mainMenuCart)
let htmlCartMenu = templateMenu()
root.insertAdjacentHTML("beforeBegin", htmlCartMenu)

let templatePopWindow = Handlebars.compile(popWindow)
let htmlPopWindow = templatePopWindow()
root.insertAdjacentHTML("beforeBegin", htmlPopWindow)

const deleteButtons = document.querySelectorAll('div[data-id="delButton"]')
const nextButtons = document.querySelectorAll('p[data-id="nextButton"]')
const previousButtons = document.querySelectorAll('p[data-id="previousButton"]')
const amountText = document.querySelectorAll('input[data-id="amountInput"]')
const orderButton = document.querySelector('div[data-id="orderButton"]')
const popOrderWindow = document.getElementById("info-popup")
const popOrderButton = document.getElementById("close-modal")


deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
        let id = button.getAttribute("item-id")
        cartItems.removeItem(id)
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', function () {
        let itemAmount = button.previousElementSibling
        let content = Number(itemAmount.value)
        content += 1
        itemAmount.value = content
        let itemID = itemAmount.getAttribute("item-id")
        cartItems.changeItemAmount(content, itemID)
        cartItems.changeItemPrice(itemID)
        cartItems.changeTotalPrice()

    });
});

previousButtons.forEach(button => {
    button.addEventListener('click', function () {
        let itemAmount = button.nextElementSibling
        let content = Number(itemAmount.value)
        if (content > 1) {
            content -= 1
            itemAmount.value = content
            let itemID = itemAmount.getAttribute("item-id")
            cartItems.changeItemAmount(content, itemID)
            cartItems.changeItemPrice(itemID)
            cartItems.changeTotalPrice()

        }
        
    });
});

amountText.forEach(text => {
    text.addEventListener("change", (event) => {
        let itemID = text.getAttribute("item-id")
        if (Number(text.value) <= 0) {
            text.value = 1
        }
        cartItems.changeItemAmount(text.value, itemID)
        cartItems.changeItemPrice(itemID)
        cartItems.changeTotalPrice()
    });
});


orderButton.addEventListener('click', function () {
    cartItems.data = []
    cartItems.storedID = []
    cartItems.setLocalStorage()
    popOrderWindow.classList.remove('hidden')
    document.querySelector("p[data-id='generatedNumber']").innerHTML = uuidv4()

});


popOrderButton.addEventListener('click', function () {
    popOrderWindow.classList.add('hidden')
    location.reload()
});


