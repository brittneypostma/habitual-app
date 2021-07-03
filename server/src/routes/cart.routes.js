const express = require('express')
const cartRouter = express.Router()
const cartController = require('../controllers/cart.controller')
// const { ensureGuest } = require('../controllers/auth.controller')

module.exports = cartRouter

//* Cart
//* route /cart
cartRouter.get('/', cartController.cartPage)
cartRouter.get('/:cartId', cartController.getCart)
cartRouter.post('/', cartController.addCart)
cartRouter.patch('/:id', cartController.editCart)
cartRouter.delete('/:id', cartController.deleteCart)

//TODO
//* Checkout
//* route /checkout
