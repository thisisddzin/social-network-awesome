const { Post } = require('../models')

class PostController {
  create (req, res) {
    console.log(req.body)
    Post.create({ ...req.body, user_id: req.session.user.id })
    res.redirect('/feed')
  }
}

module.exports = new PostController()
