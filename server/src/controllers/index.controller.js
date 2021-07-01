const path = require('path')

module.exports.indexPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'index.html'))
}