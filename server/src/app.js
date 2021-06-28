const cors = require('cors')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const { auth } = require('express-openid-connect')
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
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.AUTH0_DOMAIN,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    secret: process.env.SESSION_SECRET,
  })
)

app.use(itemsRouter)

app.get('/*', (req, res) => {
  res.sendFile(
    req.oidc.isAuthenticated()
      ? path.join(__dirname, '../../client/src', 'home.html')
      : path.join(__dirname, '../../client/src', 'index.html')
  )
})

module.exports = app
