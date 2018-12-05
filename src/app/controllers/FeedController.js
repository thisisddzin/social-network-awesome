class FeedController {
  index (req, res) {
    res.render('feed/begin')
  }
}

module.exports = new FeedController()
