const items = require('../../models/items.model')

function getItems(req, res) {
  return res.status(200).json(items)
}

module.exports = {
  getItems
}