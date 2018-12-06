const { User, Post } = require('../models')

class FeedController {
  async index (req, res) {
    console.log(req.session.user)
    const posts = await Post.findAll({ include: [{ model: User, as: 'user' }] })
    res.render('feed/begin', { posts })
  }
}

module.exports = new FeedController()
