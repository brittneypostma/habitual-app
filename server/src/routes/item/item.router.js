const express = require('express')

const { getItems } = require('./item.controller')

const itemRouter = express.Router()

itemRouter.get('/items', getItems)

module.exports = itemRouter
