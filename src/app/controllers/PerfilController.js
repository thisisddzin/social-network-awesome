const { User } = require('../models')

class PerfilController {
  async index (req, res) {
    const id = req.query.user

    if (id) {
      const userShared = await User.findOne({ where: { id } })
      return res.render('auth/perfil', { userShared })
    }
    return res.render('feed/perfil')
  }
}

module.exports = new PerfilController()
