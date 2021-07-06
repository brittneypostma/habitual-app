const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    items: { 
      type: Array, 
      required: true, 
      item: {
        type: Object, 
        required: true
    } },
  }
  // items: [ItemsSchema]
  // item: [ItemSchema]
  //   {
  //   _id: mongoose.Schema.Types.ObjectId,
  //   name: { type: String, required: true },
  //   category: { type: String, required: true },
  //   price: { type: Number, required: true },
  //   description: String,
  //   image: String,
  // }
)

module.exports = mongoose.model('Product', ProductSchema)
