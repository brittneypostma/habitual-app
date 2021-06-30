const express = require('express')
const path = require('path')
const router = express.Router()
const { ensureGuest, ensureAuth } = require('../controllers/auth.controller')

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

//* Home
//* route /home
router.get('/home', ensureAuth, (req, res) => {
  console.log('home')
  res.sendFile(path.join(__dirname, '../../../client/src', 'home.html'))
})

module.exports = router
