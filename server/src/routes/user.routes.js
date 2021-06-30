const express = require('express')
const router = express.Router()
// const user = require('../controller/user')
const { ensureAuth } = require('../controllers/auth.controller')

router.get('/profile', ensureAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'profile.html'))
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

// router.get('/',user.getAllUser)
// router.get('/:id',user.getUser)
// router.post('/',user.addUser)
// router.put('/:id',user.editUser)
// router.patch('/:id',user.editUser)
// router.delete('/:id',user.deleteUser)

module.exports = router
