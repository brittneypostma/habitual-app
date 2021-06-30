const express = require('express')
const path = require('path')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth.middleware')

//* Login/Landing Page
//* route GET /index
router.get('/', ensureGuest, (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'index.html'))
})

//* Onboarding
//* route GET /welcome
router.get('/welcome', ensureGuest, (req, res) => {
  res.send('welcome')
})

//* Registration
//* route GET /register
router.get('/register', ensureGuest, (req, res) => {
  res.send('register')
})

//* Cart
//* route GET /cart
router.get('/cart', ensureGuest, (req, res) => {
  res.send('cart')
})

//* Checkout
//* route GET /checkout
router.get('/checkout', ensureGuest, (req, res) => {
  res.send('checkout')
})

// TODO search :id, modal, category page
//! User protected routes

//* Home
//* route GET /home
router.get('/home', ensureAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'home.html'))
})

//* Profile
//* route GET /profile
router.get('/profile', ensureAuth, (req, res) => {
  res.send('Login')
})

// could live under profile

//* Wishlist
//* route GET /wishlist
router.get('/wishlist', ensureAuth, (req, res) => {
  res.send('Login')
})

//* Orders
//* route GET /orders
router.get('/orders', ensureAuth, (req, res) => {
  res.send('Login')
})

//* Interests
//* route GET /interests
router.get('/interests', ensureAuth, (req, res) => {
  res.send('Login')
})

module.exports = router
