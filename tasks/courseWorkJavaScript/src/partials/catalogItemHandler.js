import Handlebars, { logger } from "handlebars";
import { tmplItem } from "./catalogItem.hbs"


export const catalogItems = {
    data: [
        //id, image, name, description, price, discount
        { id: 1, image: "https://www.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg", name: "Lorem ipsum dolor sit amet consectetur adipiscing elit", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 35, discount: 13 },
        { id: 2, image: "https://images01.military.com/sites/default/files/styles/full/public/2019-09/MightyStocklead1200.jpg", name: "Lorem ipsum dolor sit amet consectetur adipiscing elit", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 200, discount: 50 },
        { id: 3, image: "https://i.pinimg.com/736x/43/ef/95/43ef959a9e302e39c095618fc3576d40.jpg", name: "Lorem ipsum dolor sit amet consectetur adipiscing elit", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 10000, discount: 14 },
    ],
    storedID: [],
    init: function () {
        Handlebars.registerHelper("discount_price", function (items) {
            const price = parseFloat(items.price)
            const discount = parseFloat(items.discount)
            const discountedPrice = Number(price) - (price * discount / 100)
            return discountedPrice;
        })
        Handlebars.registerHelper('checkDiscount', function (items) {
            return parseFloat(items.discount) != 0
        })
        Handlebars.registerHelper('checkLocalStorage', function (items) {
            return (!catalogItems.storedID.includes(String(items.id)))
        })
        this.extractStorageIDs()
        console.log(this.storedID)
        let template = Handlebars.compile(tmplItem)
        let htmlCatalog = template({ itemsData: this.data })
        Handlebars.registerPartial("items", htmlCatalog)

    },
    extractDB: async function() {
        let response = await fetch('http://localhost:8081/database.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        let jsonData = await response.json()
        this.data = jsonData
        console.log(jsonData)
    },
    extractStorageIDs: function () {
        let cartItems_onlineStore = window.localStorage.getItem('cartItems_onlineStore')
        if (cartItems_onlineStore) {
            let tmpArr = JSON.parse(cartItems_onlineStore)
            tmpArr.forEach(element => {
                this.storedID.push(String(element.id))
            });
        }
    },
    storeItem: function (addbutton) {
        let cartItems_onlineStore = window.localStorage.getItem('cartItems_onlineStore')
        if (cartItems_onlineStore) {
            cartItems_onlineStore = JSON.parse(cartItems_onlineStore)
            cartItems_onlineStore.push({ id: addbutton.getAttribute("item-id"), amount: 1 })
        }   
        else {
            cartItems_onlineStore = [{ id: addbutton.getAttribute("item-id"), amount: 1 }]
        }
        window.localStorage.setItem('cartItems_onlineStore', JSON.stringify(cartItems_onlineStore))
        addbutton.className = "disabled text-balance font-mono lg:font-sans text-xs text-white mt-4 mx-12 block rounded-lg bg-gray-300 py-2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
        addbutton.textContent = "Добавлено"
        let cartCircle = addbutton.parentNode.parentNode.firstElementChild
        cartCircle.className = "flex justify-center items-center rounded-full h-7 w-7 bg-teal-600 absolute top-4 left-4 z-10"
    },
}
