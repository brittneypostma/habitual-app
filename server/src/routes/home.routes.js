const express = require('express')
const router = express.Router()
const home = require('../controllers/home.controller')
const { ensureGuest, ensureAuth } = require('../controllers/auth.controller')

router.get('/', ensureGuest, home.indexPage)
router.get('/home', ensureAuth, home.homePage)
router.get('/welcome', ensureGuest, home.welcomePage)
router.get('/register', ensureGuest, home.registerPage)

module.exports = router
