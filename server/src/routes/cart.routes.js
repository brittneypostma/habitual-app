const express = require('express')
const router = express.Router()
// const cart = require('../controller/cart')
const { ensureGuest } = require('../controllers/auth.controller')

//* Cart
//* route /cart
router.get('/cart', ensureGuest, (req, res) => {
  res.send('cart')
})

//* Checkout
//* route /checkout
router.get('/checkout', ensureGuest, (req, res) => {
  res.send('checkout')
})

// router.get('/',cart.getAllCarts)
// router.get('/:id',cart.getSingleCart)
// router.get('/user/:userid',cart.getCartsbyUserid)

// router.post('/',cart.addCart)
// //router.post('/:id',cart.addtoCart)

// router.put('/:id',cart.editCart)
// router.patch('/:id',cart.editCart)
// router.delete('/:id',cart.deleteCart)

module.exports = router
