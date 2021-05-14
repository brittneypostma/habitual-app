const path = require('path')
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const itemsRouter = require('./routes/items/items.router')

const app = express();

app.use(cors({
  // use port of frontend dev server
  origin: 'http://localhost:8080'
}))
// app.use(morgan('combined'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'build')))
app.use(itemsRouter)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

module.exports = app