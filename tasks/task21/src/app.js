import Handlebars, { log } from "handlebars";
import { v4 as uuidv4 } from 'uuid';
import { Chat } from "./partials/chat.hbs.js"

import { tmplLayout } from './layout.hbs.js'
import "./partials/button.hbs.js"

Chat.init()
let template = Handlebars.compile(tmplLayout)
let htmlApp = template()
let root = document.getElementById("app")
root.innerHTML = htmlApp
Chat.addChildsEvent()

const delbutton = document.querySelector('button[data-id="deleteButton"]')
const button = document.querySelector('button[data-id="sendButton"]')
const inputDOM = document.querySelector('input[data-id="message"]')
const chatRoot = document.getElementById('chat')

button.addEventListener('click', function () {
    if (inputDOM.value) {
        let myuuid = uuidv4()
        let item = { id: myuuid, id_user: 100, name: 'L', message: inputDOM.value }
        Chat.addMessage(item)
        inputDOM.value = ''
        chatRoot.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" })
    }
})


delbutton.addEventListener('click', function () {
        Chat.deleteMessages()
});

inputDOM.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // код клавиши Enter
        button.click();
    }
});


Chat.init()

