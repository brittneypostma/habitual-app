const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = require('./product.mongo')
const User = require('./user.mongo')

// mongoose will automatically set id

const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: Product,
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
