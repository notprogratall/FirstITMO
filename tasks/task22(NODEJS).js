const express = require('express')
const app = express()
app.use(express.json()); //Применяется для автоматического парсинга тела запроса в объект json
const redis = require('redis');

// todo: Написать два роутера (GET, PUT) который принимают данные и записывают их в Redis

//  GET /{ receiver_id: {id1}, sender_id: {id2}, message: {messageText} } (JSON)
//  PUT ?

app.get('/', async (req, res) => {
    const messageBody = req.body; // Обращение к разобранному  body
    const { receiver_id, sender_id, message } = messageBody
    const key = `message:${receiver_id}:${sender_id}`;
    const client = await redis.createClient()
        .on('error', err => console.log('Redis Client Error', err))
        .connect();
    await client.rPush(key, message);
    const value = await client.lRange(key, 0, -1)
    console.log(key + " - " + value)
    await client.disconnect();
})
app.put('/', (req, res) => {
    
})
app.listen(3000)


//JSON.stringify({ receiver_id: 100, sender_id: 200, message: "qwery" })
//{"receiver_id":100,"sender_id":200,"message":"qwery"}