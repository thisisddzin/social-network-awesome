module.exports = (Sequelize, DataTypes) => {
  const Post = Sequelize.define('Post', {
    post: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  })

  Post.associate = models => {
    Post.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' })
  }

  return Post
}
