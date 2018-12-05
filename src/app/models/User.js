// const bcrypt = require('bcryptjs')

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birth: DataTypes.DATE,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    owner: DataTypes.BOOLEAN
  })

  return User
}
