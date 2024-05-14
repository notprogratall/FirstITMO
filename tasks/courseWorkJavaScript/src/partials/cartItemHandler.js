import Handlebars, { logger } from "handlebars";
import { tmplItem, tmplPrice } from "./cartItem.hbs";
import { tmplTotal } from "./cartLayout.hbs";

//ищем из storedID в бд все айтемы, отправляя на сервер все строки и индексы -> сразу при поиске к каждой строке добавляем amount -> результат запроса - массив с amount 
export const cartItems = {
    data: [
        //id, image, name, description, price, discount
        { amount:2, id: '1', image: "https://www.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg", name: "Lorem ipsum dolor sit amet consectetur adipiscing elit", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 35, discount: 13 },
        { amount:1, id: '2', image: "https://images01.military.com/sites/default/files/styles/full/public/2019-09/MightyStocklead1200.jpg", name: "Lorem ipsum dolor sit amet consectetur adipiscing elit", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 200, discount: 0 },
        { amount:5, id: '3', image: "https://i.pinimg.com/736x/43/ef/95/43ef959a9e302e39c095618fc3576d40.jpg", name: "Lorem ipsum dolor sit amet consectetur adipiscing elit dfgegdfdgfgdg", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 1000000, discount: 14 },
    ],
    storedID: [
        {id:"1", amount:2},
        {id:"2", amount:1},
        {id:"3", amount:5},
    ],
    init: async function () {
        Handlebars.registerHelper("discountPrice", function (items) {
            const price = parseFloat(items.price)
            const discount = parseFloat(items.discount)
            const amount = parseFloat(items.amount)
            const discountedPrice = price - (price * discount / 100)
            return discountedPrice * amount
        })
        Handlebars.registerHelper('checkDiscount', function (items) {
            return parseFloat(items.discount) != 0
        }) 
        Handlebars.registerHelper('countPrice', function (items) {
            const price = parseFloat(items.price)
            const amount = parseFloat(items.amount)
            return price * amount
        })
        Handlebars.registerHelper('calculateTotal', function (items) {
            let total = 0;
            items.forEach(function (item) {
                let price = parseFloat(item.price)
                let discount = parseFloat(item.discount)
                let amount = parseFloat(item.amount)
                let discountedPrice = price - (price * discount / 100)
                total += discountedPrice * amount;
            });
            return total.toFixed(1) + '₽';
        })
        let template = Handlebars.compile(tmplItem)
        let htmlCart = template({ itemsData: this.data })
        Handlebars.registerPartial("items", htmlCart)
    },
    extractLocalStorage: function () {
        this.storedID = window.localStorage.getItem('cartItems_onlineStore')
        this.storedID = JSON.parse(this.storedID)
    },
    setLocalStorage: function () {
        window.localStorage.setItem('cartItems_onlineStore', JSON.stringify(this.storedID))
    },
    extractCatalogDB: async function () {
        this.extractLocalStorage()
        let response = await fetch('http://localhost:8081/scandb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.storedID)
        });
        let jsonData = await response.json()
        this.data = jsonData
        console.log(jsonData)
    },
    changeTotalPrice: function () {
        let template = Handlebars.compile(tmplTotal)
        let totalPrice = template({ itemsData: this.data})
        document.querySelector('p[data-id="sum"]').innerHTML = totalPrice
    },
    changeItemPrice: function (itemID) {
        let item = this.findItemInData(itemID)
        let template = Handlebars.compile(tmplPrice)
        let newPrice = template({ itemData: item })
        document.querySelector(`div[data-id="price"][item-id="${itemID}"]`).innerHTML = newPrice
    },
    findItemInData: function (ID) {
        return this.data.find(element => element.id == ID)
    },
    changeItemAmount: function (newAmount, ID) {
        if (newAmount > 0) {
            this.data.forEach(element => {
                if (element.id == ID) {
                    element.amount = newAmount
                }
            })
            this.storedID.forEach(element => {
                if (element.id == ID) {
                    element.amount = newAmount
                }
            })
            this.setLocalStorage()
        }
    },
    removeItem: function (itemID) {
        const index = this.storedID.findIndex(item => item.id === itemID);
        if (index !== -1) {
            this.storedID.splice(index, 1)
            let item = document.querySelector(`li[item-id="${itemID}"]`)
            item.remove()
            this.setLocalStorage()
        }
    },
}