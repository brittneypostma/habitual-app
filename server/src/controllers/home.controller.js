const path = require('path')

module.exports.indexPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'index.html'))
}

module.exports.homePage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/src', 'home.html'))
}