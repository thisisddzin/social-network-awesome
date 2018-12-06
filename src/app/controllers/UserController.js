const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { name, password, birth, email } = req.body
    console.log(req.body)
    if (!email || !name || !password || !birth) {
      return res.render(`auth/signup`, { email, name, password, birth })
    }

    const emailExist = await User.findOne({
      where: {
        email
      }
    })

    if (emailExist) {
      console.log('email já existe')
      return res.render('auth/signup', { emailExist })
    }

    await User.create(req.body)

    return res.redirect('/')
  }

  logout (req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/')
    })
  }
}

module.exports = new UserController()
