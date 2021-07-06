const mongoose = require('mongoose')
const path = require('path')
const Product = require('../models/product.mongo')

exports.itemPage = (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '../../client/src/pages/items', 'item.html')
  )
}

exports.loadProducts = (req, res, next) => {}

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .exec()
    .then((products) => {
      // const response = {
      //   count: products.length,
      //   products: products.map((product) => {
      //     return {
      //       _id: product._id,
      //       name: product.name,
      //       price: product.price,
      //       productImage: product.productImage,
      //     }
      //   }),
      // }
      const response = {
        products,
      }
      res.status(200).json(response)
    })
    .catch((error) => {
      next(error)
    })
}

exports.getProductCategories = (req, res) => {
  Product.distinct('category')
    .then((categories) => {
      res.json(categories)
    })
    .catch((err) => console.log(err))
}

module.exports.getProductsInCategory = (req, res) => {
  const category = req.params.category
  const limit = Number(req.query.limit) || 0
  const sort = req.query.sort == 'desc' ? -1 : 1

  Product.find({
    category,
  })
    .select(['-_id'])
    .limit(limit)
    .sort({ id: sort })
    .then((products) => {
      res.json(products)
    })
    .catch((err) => console.log(err))
}

exports.getOneProduct = (req, res, next) => {
  Product.findOne({'items.link': req.params.link})
    .exec()
    .then((product) => {
      if (product) {
        product.items.map(item => {
          if (item.link === req.params.link) {
            return res.status(200).json(item)
          }
        })
      } else {
        res.status(404).json({
          message: 'Product Not Found!',
        })
      }
    })
    .catch((error) => {
      next(error)
    })
}

exports.createOneProduct = (req, res, next) => {
  const product = createProduct(req)

  product
    .save()
    .then((product) => {
      res.status(200).json({
        message: 'Product Created Successfully!',
        product: {
          _id: product._id,
          name: product.name,
          price: product.price,
          productImage: product.productImage,
        },
      })
    })
    .catch((error) => {
      next(error)
    })
}

exports.updateOneProduct = (req, res, next) => {
  const productId = req.params.productId
  // const updateOps = {};
  // for (const prop of req.body) {
  // 	updateOps[prop.propName] = prop.propValue;
  // }

  Product.updateOne({ _id: productId }, { $set: req.body })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Updated Product Successfully!',
        result: result,
      })
    })
    .catch((error) => {
      next(error)
    })
}

exports.deleteOneProduct = (req, res, next) => {
  const productId = req.params.productId
  Product.remove({ _id: productId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Deleted Product Successfully!',
        result: result,
      })
    })
    .catch((error) => {
      next(error)
    })
}

function createProduct(req) {
  return new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.path,
  })
}

//* import model functions
// const { getAllItems } = require('../models/item.model')

// async function httpGetAllItems(req, res) {
//   return res.status(200).json(await getAllItems())
// }

// async function httpGetItem(req, res) {

// }

// module.exports = {
//   httpGetAllItems,
// }
