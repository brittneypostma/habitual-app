const mongoose = require('mongoose')
const path = require('path')
const User = require('../models/user.mongo')
const Product = require('../models/product.mongo')

exports.getUserPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/user', 'profile.html')
  )
}

exports.getWishlistPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/user', 'wishlist.html')
  )
}

exports.getInterestsPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/user', 'interests.html')
  )
}

exports.getOrdersPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/user', 'orders.html')
  )
}

exports.getUserProfile = (req, res, next) => {
  console.log(req.user._id)
  User.findById(req.user._id)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found.',
        })
      }
      return res.status(201).json(user)
    })
    .catch((e) => {
      next(e)
    })
}

exports.getUserWishlist = (req, res, next) => {
  User.findById(req.user._id)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found.',
        })
      }
      user.wishlist?.map((list) => {
        return res.status(201).json(list)
      })
    })
    .catch((e) => {
      next(e)
    })
}

exports.getUserInterests = (req, res, next) => {
  User.findById(req.user._id)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found.',
        })
      }
      user.interests?.map((interest) => {
        return res.status(201).json(interest)
      })
    })
    .catch((e) => {
      next(e)
    })
}

exports.getUserOrders = (req, res, next) => {
  User.findById(req.user._id)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found.',
        })
      }
      user.orders?.map((order) => {
        return res.status(201).json(order)
      })
    })
    .catch((e) => {
      next(e)
    })
}

//TODO
//!! add, edit, order
//! add, edit, delete list item
//! add, edit, delete interest
