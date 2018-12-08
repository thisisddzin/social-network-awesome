const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const FeedController = require('./app/controllers/FeedController')
const PostController = require('./app/controllers/PostController')
const PerfilController = require('./app/controllers/PerfilController')
const FileController = require('./app/controllers/FileController')

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

routes.get('/', guestMiddleware, SessionController.create)

routes.post('/newpost', PostController.create)

routes.get('/perfil', authMiddleware, PerfilController.index)

routes.post('/perfil_update', upload.single('avatar'), PerfilController.update)

routes.get('/files/:file', FileController.show)

routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)

routes.post('/signup', UserController.store)

routes.get('/logout', UserController.logout)

routes.get('/feed', authMiddleware, FeedController.index)

module.exports = routes
