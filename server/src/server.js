const fs = require('fs')
const http = require('http')

require('dotenv').config()

const app = require('./app')
const { mongoConnect } = require('./services/mongo')
// load models here

const PORT = process.env.PORT || 8000

const server = http.createServer(
  {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
  },
  app
)

async function startServer() {
  await mongoConnect()
  // await models here

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
}

startServer()
