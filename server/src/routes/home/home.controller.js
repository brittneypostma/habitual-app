const item = require('../../models/item.model.js')

function getItems(req, res) {
  return res.status(200).json(items)
}

module.exports = {
  getItems,
}
