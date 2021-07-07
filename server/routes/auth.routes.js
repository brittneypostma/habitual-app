const express = require('express')
const passport = require('passport')
const router = express.Router()
const { getUser } = require('../controllers/auth.controller')

//! user protected routes
//* Auth with Google
//* route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//* Google auth callback
//* route GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/home')
  }
)

//* Logout user
//* route GET /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/user', getUser)

module.exports = router
