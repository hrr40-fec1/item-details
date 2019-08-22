const express = require('express')
const app = express()
const port = 3000
const db = require('../db/index.js')


app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Item details service listening on port ${port}!`))