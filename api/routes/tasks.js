const { Router } = require('express')
const router = Router()
const { getTasks, getTask, createTask, removeTask, updateTask } = require('../controllers/tasks')

router.get('/', getTasks)
router.get('/:id', getTask)
router.post('/', createTask)
router.delete('/:id', removeTask)
router.put('/:id', updateTask)

module.exports = router
