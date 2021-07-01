const path = require('path')

module.exports.homePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/src', 'home.html'))
  }