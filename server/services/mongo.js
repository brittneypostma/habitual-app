require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

// const mongoConnect = async () => {
//   try {
//     const connection = await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     })
//     console.log(`MongoDB connected: ${connection.connection.host}`)
//   } catch (e) {
//     console.error(e)
//     process.exit(1)
//   }
// }

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (e) => {
  console.error(e)
})

async function mongoConnect() {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
}

async function mongoDisconnect() {
  await mongoose.disconnect()
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}
