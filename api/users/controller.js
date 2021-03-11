const { conn } = require('../db')

const userID = 999
const controller = {}

controller.getUser = async (req, res) => {
  const user = await conn().get('users').find({ id: userID }).value()
  res.json(user)
}

controller.createUser = async (req, res) => {
  const user = await conn().get('users').size().value()
  if (user) {
    const { username, password } = req.body
    const newUser = { id: userID, username, password }
    await conn().get('users').push(newUser).write()
  }
  res.json({ message: 'Usário criado' })
}

controller.updateUser = async (req, res) => {
  const { username, password } = req.body
  await conn().get('users').find({ userID }).assign({ username, password }).write()
  res.status(200).json({ message: 'Usário alterado' })
}

module.exports = controller
