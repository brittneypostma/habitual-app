const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Item = require('./item.model')
const { schema } = require('./user.model')
const User = require('./user.model')

const CartSchema = new Schema({
  userId: {
    type: schema.Types.Number,
    ref: User,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  items: [
    {
      itemId: {
        type: schema.Types.Number,
        ref: Item,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.'],
        default: 1,
      },
      name: String,
      price: Number,
    },
  ],
  total: {
    type: Number,
    required: true,
    default: 0,
  },
})

module.exports = mongoose.model('Cart', CartSchema)
