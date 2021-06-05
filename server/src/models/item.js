const mongoose = require('mongoose')

const Schema = mongoose.Schema

// id is created by mongo

const Item = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	date_added: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Item', Item)
