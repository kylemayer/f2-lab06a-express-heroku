const express = require('express')
const ducks = require('./data.js')
const cors = require('cors')
const app = express()
const port = 777

app.use(cors())

app.get('/ducks', (req, res) => {
    res.json(ducks)
})

app.get('/ducks/:id', (req, res) => {
    const id = Number(req.params.id)
    const duck = ducks.results.find((duck) => duck.id === id)
    res.json(duck)
})

module.exports = app