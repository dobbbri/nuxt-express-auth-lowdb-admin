const { Router } = require('express')
const router = Router()
const { login, refresh, logout } = require('./controller')

router.route('/login').post(login)
router.route('/refresh').post(refresh)
router.route('/logout').get(logout)

module.exports = router
