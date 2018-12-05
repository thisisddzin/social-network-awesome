const { User } = require('../models')

class SessionController {
  create (req, res) {
    res.render('auth/signin')
  }

  async store (req, res) {
    const { email, password } = req.body

    console.log(req.body)

    if (!email || !password) {
      return res.render('auth/signin', { email, password })
    }

    const user = await User.findOne({ where: { email } })

    if (!user) {
      const unUser = 'Você errou seu E-mail ou ele não existe, tente novamente.'
      return res.render('auth/signin', { unUser })
    }

    if (!(await user.checkPassword(password))) {
      const unUserPass = 'Sua senha está incorreta, tente novamente.'
      return res.render('auth/signin', { unUserPass })
    }

    req.session.user = user

    res.redirect('/feed')
  }
}

module.exports = new SessionController()
