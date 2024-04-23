export const Storage = {
    addMessage: function (item) {
        if (!window.localStorage['messages']) {
            window.localStorage['messages'] = JSON.stringify([item])
        } else {
            const messages = JSON.parse(window.localStorage['messages'])
            messages.push(item)
            window.localStorage['messages'] = JSON.stringify(messages)
        }
    },
    getListMessage: function () {
        if (!window.localStorage['messages']) {
            return []
        }
        return JSON.parse(window.localStorage['messages'])
    },
    destroy: function () {
        window.localStorage.clear()
    }



}