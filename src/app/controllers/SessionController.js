class SessionController {
  create (req, res) {
    res.render('auth/signin')
  }

  store (req, res) {
    res.redirect('/feed')
  }
}

module.exports = new SessionController()
