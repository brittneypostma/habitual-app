const path = require('path')

module.exports.indexPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/home', 'index.html')
  )
}

module.exports.homePage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/home', 'home.html')
  )
}

module.exports.welcomePage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/home', 'welcome.html')
  )
}

module.exports.registerPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/home', 'register.html')
  )
}
