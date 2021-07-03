const path = require('path')
const Cart = require('../models/cart.mongo')

exports.cartPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/src/pages/cart', 'cart.html'))
}

// exports.checkoutPage = (req, res) => {
//   res.sendFile(
//     path.join(__dirname, '../../client/src/pages/cart', 'checkout.html')
//   )
// }

exports.getCart = async (req, res) => {
  try {
    const id = req.params.id
    const cart = await Cart.findOne({ id })
      .select('-_id -items._id')
      .then((cart) => res.json(cart))
      .catch((e) => console.error(e))
  } catch (e) {
    console.error(e)
    res.sendFile(path.join(__dirname, '../../client/src/pages', 'error.html'))
  }
}

exports.addCart = async (req, res) => {
  try {
    req.body.user = req.user.id
    console.log(req.body)
    await Cart.create(req.body)
  } catch (e) {
    console.error(e)
    res.sendFile(path.join(__dirname, '../../client/src/pages', 'error.html'))
  }
}

exports.editCart = async (req, res) => {
  try {
    let cart = await Cart.findById(req.params.id).lean()
    if (!cart) {
      return res.send('No items in cart')
    }
    if (cart.user !== req.user.id) {
      res.sendFile(
        path.join(__dirname, '../../client/src/pages/cart', 'cart.html')
      )
    } else {
      cart = await Cart.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      })
      res.sendFile(
        path.join(__dirname, '../../client/src/pages/cart', 'cart.html')
      )
    }
  } catch (e) {
    console.error(e)
    res.sendFile(path.join(__dirname, '../../client/src/pages', 'error.html'))
  }
}

exports.deleteCart = (req, res) => {
  if (req.params.id == null) {
    res.json({
      status: 'error',
      message: 'cart id should be provided',
    })
  } else {
    Cart.remove({ id: req.params.id })
      .exec()
      .then(() => {
        res.redirect('/')
      })
      .catch((e) => console.error(e))
  }
}
