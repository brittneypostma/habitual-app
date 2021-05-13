const express = require('express');
const cors = require('cors')

const itemsRouter = require('./routes/items/items.router')

const app = express();

app.use(cors({
  // use port of frontend dev server
  origin: 'http://localhost:8080'
}))
app.use(express.json())
app.use(itemsRouter)

module.exports = app