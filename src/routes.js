const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const FeedController = require('./app/controllers/FeedController')

routes.get('/', SessionController.create)

routes.post('/signin', SessionController.store)

routes.get('/signup', UserController.create)

routes.post('/signup', UserController.store)

routes.get('/logout', UserController.logout)

routes.get('/feed', FeedController.index)

module.exports = routes
