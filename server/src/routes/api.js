const express = require('express')

// require routers here
const itemRouter = require('./item/item.router')

const api = express.Router()

api.use('/items', itemRouter)

module.exports = api
