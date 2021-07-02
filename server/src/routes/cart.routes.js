const express = require('express')
const router = express.Router()
const cart = require('../controllers/cart.controller')
// const { ensureGuest } = require('../controllers/auth.controller')

//* Cart
//* route /cart
// router.get('/', cart.cartPage)
router.get('/', cart.cartPage)

//* Checkout
//* route /checkout
// router.get('/checkout', cart.checkoutPage)

// router.get('/',cart.getAllCarts)
// router.get('/:id',cart.getSingleCart)
// router.get('/user/:userid',cart.getCartsbyUserid)

// router.post('/',cart.addCart)
// //router.post('/:id',cart.addtoCart)

// router.put('/:id',cart.editCart)
// router.patch('/:id',cart.editCart)
// router.delete('/:id',cart.deleteCart)

module.exports = router
