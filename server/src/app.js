const cors = require('cors')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
// const { auth } = require('express-openid-connect')
// const itemsRouter = require('./routes/item/item.router')
const routes = require('./routes/index.routes')
const auth = require('./routes/auth.routes')

//* Passport
require('./services/passport')(passport)

const app = express()

app.use(helmet())

app.use(
  cors({
    // use port of frontend dev server
    origin: 'http://localhost:3000',
  })
)

//* Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan(dev))
} else app.use(morgan('combined'))

//* Express Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
)

//* Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//* Static Folder
app.use(express.static(path.join(__dirname, '../../public')))

//* Routes
app.use('/', routes)
app.use('/auth', auth)

// app.use(express.json())
// app.use(express.static(path.join(__dirname, '../client/src')))
// app.use(
//   auth({
//     authRequired: false,
//     auth0Logout: true,
//     issuerBaseURL: process.env.AUTH0_DOMAIN,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.AUTH0_CLIENT_ID,
//     secret: process.env.SESSION_SECRET,
//   })
// )

// app.use(itemsRouter)

// app.get('/*', (req, res) => {
//   res.sendFile(
//     req.oidc.isAuthenticated()
//       ? path.join(__dirname, '../../client/src', 'home.html')
//       : path.join(__dirname, '../../client/src', 'index.html')
//   )
// })

module.exports = app
