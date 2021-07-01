const express = require('express')
const home = require('../controllers/home.controller')
const router = express.Router()
const { ensureAuth } = require('../controllers/auth.controller')

//* Home
//* route /home
router.get('/home', ensureAuth, home.homePage)

module.exports = router