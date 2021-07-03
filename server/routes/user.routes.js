const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const { ensureAuth } = require('../controllers/auth.controller')

userRouter.get('/profile', ensureAuth, userController.getUserPage)
userRouter.get('/profile/:userId', ensureAuth, userController.getUserProfile)
userRouter.get('/wishlist', ensureAuth, userController.getWishlistPage)
userRouter.get('/wishlist/:userId', ensureAuth, userController.getUserWishlist)
userRouter.get('/interests', ensureAuth, userController.getInterestsPage)
userRouter.get(
  '/interests/:userId',
  ensureAuth,
  userController.getUserInterests
)
userRouter.get('/orders', ensureAuth, userController.getOrdersPage)
userRouter.get('/orders/:userId', ensureAuth, userController.getUserOrders)

module.exports = userRouter

//* taken care of by /services/passport
// router.post('/',user.addUser)

// TODO user, wishlist, interests, orders
//! router.post('/:id', user.add)
//! router.patch('/:id',user.edit)
//! router.delete('/:id',user.delete)
