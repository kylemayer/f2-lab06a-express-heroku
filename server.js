const express = require('express')
const cors = require('cors')
const app = express()
const port = 777

app.use(cors())

app.get('/duck', (req, res) => {
    res.send('Hello World!')
})

app.get('/other', (req, res) => {
    res.send('Pilgrim')
})

app.listen(port, () => {
    console.log(`Testing at http://localhost:${port}`)
})