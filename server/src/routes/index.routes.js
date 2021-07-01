const express = require('express')
const router = express.Router()
const index = require('../controllers/index.controller')
const { ensureGuest } = require('../controllers/auth.controller')

//* Login/Landing Page
//* route /index
// router.get('/', ensureGuest, (req, res) => {
//   res.sendFile(path.join(__dirname, '../../../client/src', 'index.html'))
// })

router.get('/', ensureGuest, index.indexPage)
// router.get('/welcome', index.welcomePage)
// router.get('/register', index.registerPage)

// //* Onboarding
// //* route /welcome
// router.get('/welcome', ensureGuest, (req, res) => {
//   res.send('welcome')
// })

// //* Registration
// //* route /register
// router.get('/register', ensureGuest, (req, res) => {
//   res.send('register')
// })


module.exports = router
