const express = require('express')
const path = require('path')
const router = express.Router()

//* Login/Landing Page
//* route GET / index or home
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'home.html'))
})

//* Onboarding
//* route GET /welcome
router.get('/welcome', (req, res) => {
  res.send('welcome')
})

//* Registration
//* route GET /register
router.get('/register', (req, res) => {
  res.send('register')
})

//* Cart
//* route GET /cart
router.get('/cart', (req, res) => {
  res.send('cart')
})

//* Checkout
//* route GET /checkout
router.get('/checkout', (req, res) => {
  res.send('checkout')
})

//! user protected routes

//* Profile
//* route GET /profile
router.get('/profile', (req, res) => {
  res.send('Login')
})

// could live under profile

//* Wishlist
//* route GET /wishlist
router.get('/wishlist', (req, res) => {
  res.send('Login')
})

//* Orders
//* route GET /orders
router.get('/orders', (req, res) => {
  res.send('Login')
})

//* Interests
//* route GET /interests
router.get('/interests', (req, res) => {
  res.send('Login')
})

module.exports = router
