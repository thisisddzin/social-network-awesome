class UserController {
  create (req, res) {
    res.render('auth/signup')
  }

  store (req, res) {
    res.redirect('/feed')
  }

  logout (req, res) {
    res.redirect('/')
  }
}

module.exports = new UserController()
