const path = require('path')

exports.indexPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/home', 'index.html')
  )
}

exports.homePage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/home', 'home.html')
  )
}

exports.welcomePage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/home', 'welcome.html')
  )
}

exports.registerPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../client/src/pages/home', 'register.html')
  )
}
