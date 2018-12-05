const bcrypt = require('bcryptjs')

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      birth: DataTypes.DATE,
      avatar: DataTypes.STRING,
      bio: DataTypes.TEXT,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      owner: DataTypes.BOOLEAN
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
        }
      }
    }
  )

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  return User
}
