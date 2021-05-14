const mongoose = require('mongoose')

const Schema = mongoose.Schema

/* Need an id, name, description, price,//Id is created by default in mongodb */

const product = new Schema({ id: String, name: String, description: String, price: Number })
