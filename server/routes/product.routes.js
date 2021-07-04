const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/product.controller')
const { ensureAuth } = require('../controllers/auth.controller')

productRouter.get('/', productController.getAllProducts)
productRouter.get('/:productId', productController.getOneProduct)
productRouter.get('/categories', productController.getProductCategories)
productRouter.get(
  '/category/:category',
  productController.getProductsInCategory
)
productRouter.post('/', ensureAuth, productController.loadProducts)
// productRouter.patch(
//   '/:productId',
//   ensureAuth,
//   productController.updateOneProduct
// )
// productRouter.delete(
//   '/:productId',
//   ensureAuth,
//   productController.deleteOneProduct
// )

module.exports = productRouter

// productRouter.get('/:id', httpGetItem)
// productRouter.get('/categories', httpGetItemCategories)
// productRouter.get('/category/:category', httpGetItemsInCategory)
