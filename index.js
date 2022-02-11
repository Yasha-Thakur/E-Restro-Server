const data = require('./data')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://quizzical-volhard-2b64ba.netlify.app/")
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})