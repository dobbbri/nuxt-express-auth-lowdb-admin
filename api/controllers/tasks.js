const { v4 } = require('uuid')
const { getConnection } = require('../database')

const tasksController = {}

tasksController.getTasks = (req, res) => {
  const tasks = getConnection().get('tasks').value()
  res.json(tasks)
}

tasksController.getTask = (req, res) => {
  const { id } = req.params
  const task = getConnection().get('tasks').find({ id }).value()
  res.json(task)
}

tasksController.createTask = (req, res) => {
  const { title, description } = req.body
  const newTask = {
    id: v4(),
    title,
    description
  }

  getConnection().get('tasks').push(newTask).write()
  res.json({ message: 'Task created' })
}

tasksController.removeTask = (req, res) => {
  const { id } = req.params
  getConnection().get('tasks').remove({ id }).write()
  res.json({ message: 'Task removed' })
}

tasksController.updateTask = (req, res) => {
  const { id } = req.params
  const { title, description } = req.body
  getConnection().get('tasks').find({ id }).assign({ title, description }).write()
  res.json({ message: 'Task updated' })
}

module.exports = tasksController
