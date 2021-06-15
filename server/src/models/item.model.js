const mongoose = require('mongoose')

const Schema = mongoose.Schema

// id is created by mongo

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: String,
  description: String,
  image: String,
})

module.exports = mongoose.model('Item', ItemSchema)
