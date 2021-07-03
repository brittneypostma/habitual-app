const http = require('http')

require('dotenv').config()

const app = require('./app')
const { mongoConnect } = require('./services/mongo')
// const {loadItemData} = require('./models/item.model')
// const {loadCartData} = require('./models/cart.model')

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

async function startServer() {
  await mongoConnect()
  // await models here
  // await loadItemData()
  // await loadCartData()

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
}

startServer()
