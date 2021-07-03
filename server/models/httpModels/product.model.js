const product = require('../product.mongo')

async function getAllProducts() {
  return await product.find({})
}

module.exports = {
  getAllProducts,
}
