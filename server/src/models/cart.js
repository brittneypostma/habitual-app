const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CartSchema = new Schema({
  userId: {
      type: String,
  },
  items: [{
      productId: {
          type: String,
      },
      name: String,
      quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity can not be less then 1.'],
          deafult: 1
      },
      price: Number
  }],
  total: {
      type: Number,
      required: true,
      default: 0
  }
});

module.exports =  mongoose.model('Cart', CartSchema);