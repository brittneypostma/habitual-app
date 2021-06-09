const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Item = require('./item')
const { schema } = require('./user')
const User = require('./user')

const CartSchema = new Schema({
	userId: {
		type: schema.Types.Number,
		ref: User,
		required: true
	},
	items: [
		{
			itemId: {
				type: schema.Types.Number,
				ref: Item,
				required: true
			},
			quantity: {
				type: Number,
				required: true,
				min: [1, 'Quantity can not be less then 1.'],
				default: 1
			},
			name: String,
			price: Number
		}
	],
	total: {
		type: Number,
		required: true,
		default: 0
	}
})

module.exports = mongoose.model('Cart', CartSchema)
