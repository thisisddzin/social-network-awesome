const { User } = require('../models')

class PerfilController {
  async index (req, res) {
    const id = req.query.user

    if (id) {
      const userShared = await User.findOne({ where: { id } })
      return res.render('feed/perfil', { userShared })
    }
    return res.render('feed/perfil')
  }

  update (req, res) {
    const { name, bio, email, password } = req.body

    // PARA ATUALIZAR A SESSÃO EM REALTIME
    req.session.user.name = name
    req.session.user.bio = bio
    req.session.user.email = email

    if (req.file) {
      const { filename } = req.file

      req.session.user.avatar = filename

      if (password) {
        User.update(
          {
            name,
            bio,
            email,
            password,
            avatar: filename
          },
          { where: { id: req.session.user.id } }
        )
        return res.redirect('/')
      }

      User.update(
        {
          name,
          bio,
          email,
          avatar: filename
        },
        { where: { id: req.session.user.id } }
      )
      return res.redirect('/')
    }

    if (password) {
      User.update(
        {
          name,
          bio,
          email,
          password
        },
        { where: { id: req.session.user.id } }
      )
      return res.redirect('/')
    }

    User.update(
      {
        name,
        bio,
        email
      },
      { where: { id: req.session.user.id } }
    )

    return res.redirect('/')
  }
}

module.exports = new PerfilController()
