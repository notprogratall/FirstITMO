import Handlebars, { log } from "handlebars";
import { Storage } from "./data";


const tplMessage = `{{#each messages}}
{{#if (checkUser id_user)}}
<div data-id="{{ id }}" class="col-start-1 col-end-8 p-3 rounded-lg">

                                    <div class="flex flex-row items-center">
                                        <div
                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                            {{ name }}
                                        </div>
                                        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                            <div>{{ message }}</div>
                                        </div>
                                        <div class="ml-2 hidden" data-id="deleteMessageButton">
                                            <svg class="w-2 h-2" fill="#ff0000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
                                                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />
                                            </svg>
                                        </div>
                                    </div>
</div>
{{else}}
<div data-id="{{ id }}" class="col-start-6 col-end-13 p-3 rounded-lg">
                                    <div class="flex items-center justify-start flex-row-reverse">
                                        <div
                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-red-500 flex-shrink-0">
                                            {{ name }}
                                        </div>
                                        <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                            <div>{{ message }}</div>
                                        </div>
                                        <div class="mr-2 hidden" data-id="deleteMessageButton">
                                            <svg class="w-2 h-2" fill="#ff0000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
                                                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
{{/if}}
{{/each}}`

const userId = 200
export const Chat = {
    data: Storage.getListMessage,
    tmpl: tplMessage,
    init: function () {
        Handlebars.registerHelper('checkUser', function (currIdUser) {
            return currIdUser == userId
        })
        Chat.render()
    },

    addMessage: function (item) {
        Storage.addMessage(item)
        Chat.partialRender(item)
    },

    render: function () {
        let template = Handlebars.compile(Chat.tmpl)
        let htmlChat = template({ id: Chat.data.id, messages: Chat.data, userId: userId })
        console.log(Chat.data);
        Handlebars.registerPartial("chat", htmlChat)
        
    },

    partialRender: function (item) {
        let template = Handlebars.compile(Chat.tmpl)
        let htmlItem = template({ messages: [item] })
        
        let root = document.querySelector('div[data-id="chat"]')
        root.innerHTML = root.innerHTML + htmlItem


        let lastChild = root.lastElementChild;
        this.addChildsEvent()
        
    },

    addMouseEvent: function (message) {
        let button = message.querySelector('[data-id="deleteMessageButton"]')
        message.addEventListener("mouseenter", function () {
            button.classList.remove('hidden');
        })
        message.addEventListener("mouseleave", function () {
            button.classList.add('hidden');
        })
        button.addEventListener("click", function () {
            let storage = Storage.getListMessage()
            for (let i = 0; i < storage.length; i++) {
                if (storage[i].id === message.getAttribute("data-id")) {
                    storage.splice(i, 1);
                    break
                }
            }
            message.remove()
            window.localStorage['messages'] = JSON.stringify(storage)
            console.log(storage);

        })

    },

    addChildsEvent: function () {
        let root = document.querySelector('div[data-id="chat"]')
        console.log(root)
        if (root.children) {
            for (const child of root.children) {
                this.addMouseEvent(child)
            }
        }
    },

    deleteMessages: function () {
        Storage.destroy()
        document.getElementById('chat').innerHTML = "";
    },
}
