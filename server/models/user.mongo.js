const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = require('./product.mongo')

// mongoose will automatically set id

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profile: {
    displayName: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    image: {
      type: String,
    },
    address: {
      number: Number,
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
  },
  interests: [
    {
      name: String,
    },
  ],
  orders: [
    {
      _id: String,
      placedAt: Date,
      items: [
        {
          item: {
            name: String,
            price: Number,
          },
        },
      ],
    },
  ],
  wishlist: [
    {
      products: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: Product,
            required: true,
          },
        },
      ],
    },
  ],
})

module.exports = mongoose.model('User', UserSchema)
