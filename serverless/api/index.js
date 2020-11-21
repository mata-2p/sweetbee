const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const ads = require('./routes/ads')
const myads = require('./routes/myads')
const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/ads', ads)
app.use('/api/myads', myads)

module.exports = app
