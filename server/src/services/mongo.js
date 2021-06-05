const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

// const MONGO_URL = 'mongodb+srv://habitual:kZ9eQgSIYw1lGw29@habitualcluster.apjhq.mongodb.net/habitual?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
	console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', e => {
	console.error(e)
})

async function mongoConnect() {
	await mongoose.connect(MONGO_URL, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
}

async function mongoDisconnect() {
	await mongoose.disconnect()
}

module.exports = {
	mongoConnect,
	mongoDisconnect
}
