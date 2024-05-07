import Handlebars, { log } from "handlebars";
import { v4 as uuidv4 } from 'uuid';
import { Chat } from "./partials/chat.hbs.js"
import { tmplLayout } from './layout.hbs.js'
import "./partials/button.hbs.js"
import { Reader } from "./reader.js"


Chat.init()
let template = Handlebars.compile(tmplLayout)
let htmlApp = template()
let root = document.getElementById("app")
root.innerHTML = htmlApp
Chat.addChildsEvent()

Chat.init()
renderReciverMessages()
setInterval(renderReciverMessages, 10000);

const delbutton = document.querySelector('button[data-id="deleteButton"]')
const button = document.querySelector('button[data-id="sendButton"]')
const inputDOM = document.querySelector('input[data-id="message"]')
const chatRoot = document.getElementById('chat')

button.addEventListener('click', function () {
    if (inputDOM.value) {
        let myuuid = uuidv4()
        let item = { id: myuuid, id_sender: 100, id_reciever: 200, name: 'L', message: String(inputDOM.value) }
        sendMessage(item)
        Chat.addMessage(item)


        //Chat.addMessage(item)
        inputDOM.value = ''
        chatRoot.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" })
    }
})

async function sendMessage(item) {
    let response = await fetch('http://localhost:8081/tasks/task22/server/db.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(item)
    });
    if (!response.ok) { // если HTTP-статус не в диапазоне 200-299 получаем тело ответа
        alert("Ошибка HTTP: " + response.status);
    }
    
    
}



delbutton.addEventListener('click', function () {
        Chat.deleteMessages()
});

inputDOM.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // код клавиши Enter
        button.click();
    }
});

async function renderReciverMessages() {
    let data = await Reader.findReaderMessages()
    data.forEach(msg => {
        Chat.addMessage(msg)
    });
}
