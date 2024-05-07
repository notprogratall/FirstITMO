export const Storage = {
    addMessage: function (item) {
        if (!window.sessionStorage['messages']) {
            window.sessionStorage['messages'] = JSON.stringify([item])
        } else {
            const messages = JSON.parse(window.sessionStorage['messages'])
            messages.push(item)
            window.sessionStorage['messages'] = JSON.stringify(messages)
        }
    },
    getListMessage: function () {
        if (!window.sessionStorage['messages']) {
            return []
        }
        return JSON.parse(window.sessionStorage['messages'])
    },
    destroy: function () {
        window.sessionStorage.clear()
    }



}