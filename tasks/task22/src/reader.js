export let Reader = {
    userData: {
        senderID: 100,
        lastReaderMsgID: 1,
    },
    findlastReaderMsgID: function () {
        let localStorageData = localStorage.getItem('messages')
        let result = { id: 'not found' }
        if (localStorageData) {
            localStorageData = JSON.parse(localStorageData)
            let tmpResult = localStorageData.findLast(({ id_sender }) => id_sender != this.userData.senderID); 
            result = tmpResult ? tmpResult : result;
        }

        const { id } = result
        console.log("ID of last reader message " + id)
        return id
    },
    findReaderMessages: async function () {
        this.userData.lastReaderMsgID = this.findlastReaderMsgID()
        //console.log(JSON.stringify(this.userData));
        let response = await fetch('http://localhost:8081/data.php', {
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
            //console.log(readerMessages);
            return readerMessages
        }
    },
    removeContent: async function (ID) {
        let response = await fetch('http://localhost:8081/sweeper.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(ID)
        });
        if (!response.ok) { // если HTTP-статус не в диапазоне 200-299 получаем тело ответа
            alert("Ошибка HTTP: " + response.status)
        }
        else {
            response = await response.json()
            console.log(response)
        }
    },


}