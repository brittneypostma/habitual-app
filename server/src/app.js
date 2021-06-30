const cors = require('cors')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const homeRoute = require('./routes/home.routes')
const itemRoute = require('./routes/item.routes')
const cartRoute = require('./routes/cart.routes')
const userRoute = require('./routes/user.routes')
const authRoute = require('./routes/auth.routes')

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
app.use('/auth', authRoute)
app.use('/', homeRoute)
app.use('/item', itemRoute)
app.use('/carts', cartRoute)
app.use('/users', userRoute)

module.exports = app
