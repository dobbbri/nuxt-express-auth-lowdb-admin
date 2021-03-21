const { Router } = require('express')
const router = Router()
const { login, logout } = require('./controller')

router.route('/login').post(login)
router.route('/logout').get(logout)

module.exports = router
