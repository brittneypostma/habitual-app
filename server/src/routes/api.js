const express = require('express')

// require routers here
const itemsRouter = require('./items/items.router')

const api = express.Router()

api.use('/items', itemsRouter)

module.exports = api
