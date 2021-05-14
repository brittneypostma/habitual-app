const http = require('http')
const mongoose = require('mongoose')

const app = require('./app')

const PORT = process.env.PORT || 3000

const MONGO_URL = 'mongodb+srv://habitual:kZ9eQgSIYw1lGw29@habitualcluster.apjhq.mongodb.net/habitual?retryWrites=true&w=majority'

const server = http.createServer(app)

mongoose.connection.on('open', () => {
  console.log('MongoDB connection open')
})

mongoose.connection.on('error', (e) => {
  console.error(e)
})

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  // await data here

  server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
  })
}

startServer()