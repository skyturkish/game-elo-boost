const express = require('express')
const indexRouter = require('./src/routes/index')
const boosterRouter = require('./src/routes/booster')
const customerRouter = require('./src/routes/customer')
const orderRouter = require('./src/routes/order/order')

var cors = require('cors')

// body-parser helps to understand this file send with post is JSON
const bodyParser = require('body-parser')

require('./src/routes/mongo-connection')

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use('/', indexRouter)
app.use('/booster', boosterRouter)
app.use('/customer', customerRouter)
app.use('/order', orderRouter)

module.exports = app
