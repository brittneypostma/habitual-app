const cors = require('cors')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const homeRoutes = require('./routes/home.routes')
const productRoutes = require('./routes/product.routes')
const cartRoutes = require('./routes/cart.routes')
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')

//* Passport
require('./services/passport')(passport)

const app = express()

app.use(helmet())
// app.use(
//   helmet({
//     contentSecurityPolicy: false,
//   })
// );

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
)

//* Logging
app.use(morgan('combined'))
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

//* Static Folder (this is what serves the css/images/js)
app.use(express.static(path.join(__dirname, '../client/src')))

//* Routes
app.use('/auth', authRoutes)
app.use('/', homeRoutes)
app.use('/', userRoutes)
app.use('/', productRoutes)
app.use('/', cartRoutes)

module.exports = app
