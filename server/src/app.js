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

app.use(
  cors({
    // use port of frontend dev server
    origin: 'http://localhost:3000',
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

//* Static Folder
app.use(express.static(path.join(__dirname, '../../public')))

//* Routes
app.use('/auth', authRoutes)
app.use('/', homeRoutes)
app.use('/', userRoutes)
app.use('/shop', productRoutes)
app.use('/cart', cartRoutes)

module.exports = app
