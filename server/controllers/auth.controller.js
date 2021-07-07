module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/')
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/home')
    }
  },
  getUser: function (req, res, next) {
    try {
      if (req.isAuthenticated() && req.user) {
        return res.status(201).json(req.user)
      } else
        res.status(404).json({
          message: 'User not found.',
        })
    } catch (e) {
      console.error(e)
    }
  },
}
