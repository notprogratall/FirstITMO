import Handlebars from 'handlebars'
import { catalogLayout } from './partials/catalogLayout.hbs.js'
import { catalogItems } from './partials/catalogItemHandler.js'
import { mainMenuCatalog } from './partials/menu.hbs.js'


try {
    await catalogItems.extractDB();
} catch (error) {
    if (error instanceof TypeError) {
        alert("Произошла ошибка сети или сервера")
    } else {
        console.error("Неизвестная ошибка:", error)
        alert("Что-то пошло не так, пожалуйста, попробуйте позже")
    }
}
catalogItems.init()

let template = Handlebars.compile(catalogLayout)
let htmlApp = template()
let root = document.getElementById("catalog")
root.innerHTML = htmlApp

let templateMenu = Handlebars.compile(mainMenuCatalog)
let htmlCatalogMenu = templateMenu()
root.insertAdjacentHTML("beforeBegin", htmlCatalogMenu)

const addbuttons = document.querySelectorAll('div[data-id="addButton"]')


addbuttons.forEach(button => {
    if (!button.classList.contains('disabled')) {
    const handler = () => {
        catalogItems.storeItem(button)
        button.removeEventListener('click', handler);
    }
    button.addEventListener('click', handler);
    }
})