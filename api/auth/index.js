const { Router } = require('express')
const router = Router()
const { login } = require('./controller')

router.route('/login').post(login)

module.exports = router
