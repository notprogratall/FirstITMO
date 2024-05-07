export let Reader = {
    userData: {
        senderID: 100,
        lastReaderMsgID: 1,
    },
    findlastReaderMsgID: function () {
        let sessionStorageData = sessionStorage.getItem('messages')
        let result = { id: 'not found' }
        if (sessionStorageData) {
            sessionStorageData = JSON.parse(sessionStorageData)
            result = sessionStorageData.findLast(({ id_sender }) => id_sender != this.userData.senderID); 
        }

        const { id } = result
        //console.log("ID of last reader message " + id)
        return id
    },
    findReaderMessages: async function () {
        this.userData.lastReaderMsgID = this.findlastReaderMsgID()
        //console.log(JSON.stringify(this.userData));
        let response = await fetch('http://localhost:8081/tasks/task22/server/data.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.userData)
        });
        if (!response.ok) { // если HTTP-статус не в диапазоне 200-299 получаем тело ответа
            alert("Ошибка HTTP: " + response.status);
        }
        else {
            const readerMessages = await response.json();
            console.log(readerMessages);
            return readerMessages
        }
    },



}