const cors = require('cors')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')

const itemsRouter = require('./routes/item/item.router')

const app = express()

app.use(helmet())

app.use(
  cors({
    // use port of frontend dev server
    origin: 'http://localhost:3000',
  })
)
app.use(morgan('combined'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/src')))
app.use(itemsRouter)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/src', 'index.html'))
})

module.exports = app
