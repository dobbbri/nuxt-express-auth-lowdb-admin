const { Router } = require('express')
const router = Router()
const { getUser, saveUser } = require('./controller')

router.route('/').get(getUser).post(saveUser)

module.exports = router
