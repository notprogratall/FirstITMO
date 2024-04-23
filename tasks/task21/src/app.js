//На контейнер сообщения повесить элемент удаления.
//ри наведении на сообщение всплывает "X", при его нажатии удалятся сообщение.

/*<span class="ml-2">
    <svg class="w-2 h-2" fill="#ff0000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
        <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />
    </svg>
</span>*/

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

