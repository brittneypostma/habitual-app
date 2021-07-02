const path = require('path')
const Cart = require('../models/cart.model')

module.exports.getCart = (req, res) => {
  const id = req.params.id
  Cart.findOne({ id })
    .select('-_id -items._id')
    .then((cart) => res.json(cart))
    .catch((e) => console.error(e))
}
