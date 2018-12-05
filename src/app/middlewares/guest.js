module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    console.log(req.session.user)
    return res.redirect('/feed')
  }
  return next()
}
