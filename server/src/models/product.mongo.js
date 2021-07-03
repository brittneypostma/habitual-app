const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String,
})

module.exports = mongoose.model('Product', ProductSchema)
