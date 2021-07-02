const mongoose = require('mongoose')

const Schema = mongoose.Schema

// mongoose will automatically set id

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
  description: String,
  image: String,
})

module.exports = mongoose.model('Item', ItemSchema)
