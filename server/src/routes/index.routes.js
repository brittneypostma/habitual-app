const express = require('express')
const path = require('path')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth.middleware')

//* Login/Landing Page
//* route /index
router.get('/', ensureGuest, (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'index.html'))
})

//* Onboarding
//* route /welcome
router.get('/welcome', ensureGuest, (req, res) => {
  res.send('welcome')
})

//* Registration
//* route /register
router.get('/register', ensureGuest, (req, res) => {
  res.send('register')
})

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

// TODO search :id, modal, category page
//! User protected routes

//* Home
//* route /home
router.get('/home', ensureAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'home.html'))
})

//* Profile
//* route /profile
router.get('/profile', ensureAuth, (req, res) => {
  res.send('Login')
})

//* Wishlist
//* route /wishlist
router.get('/wishlist', ensureAuth, (req, res) => {
  res.send('Login')
})

//* Orders
//* route /orders
router.get('/orders', ensureAuth, (req, res) => {
  res.send('Login')
})

//* Interests
//* route /interests
router.get('/interests', ensureAuth, (req, res) => {
  res.send('Login')
})

module.exports = router
