const { Post } = require('../models')

class PostController {
  async create (req, res) {
    console.log(req.body)
    await Post.create(req.body)
    res.redirect('/feed')
  }
}

module.exports = new PostController()
