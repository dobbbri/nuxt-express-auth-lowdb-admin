const { Router } = require('express')
const router = Router()
const { getUser, createUser, updateUser } = require('./controller')

router.route('/').post(createUser)
router.route('/:id').get(getUser).put(updateUser)

module.exports = router
