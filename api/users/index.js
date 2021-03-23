const { Router } = require('express')
const router = Router()
const { getUser, createUser, updateUser } = require('./controller')

router.route('/').get(getUser).post(createUser).put(updateUser)

module.exports = router
