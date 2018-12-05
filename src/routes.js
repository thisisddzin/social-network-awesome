const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const FeedController = require('./app/controllers/FeedController')
const PostController = require('./app/controllers/PostController')

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

routes.get('/', guestMiddleware, SessionController.create)

routes.post('/newpost', PostController.create)

routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)

routes.post('/signup', UserController.store)

routes.get('/logout', UserController.logout)

routes.get('/feed', authMiddleware, FeedController.index)

module.exports = routes
