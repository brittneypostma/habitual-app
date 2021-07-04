const express = require('express')
const passport = require('passport')
const router = express.Router()

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
    // check if new user
    res.redirect('/home')
  }
)

//* Logout user
//* route GET /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
