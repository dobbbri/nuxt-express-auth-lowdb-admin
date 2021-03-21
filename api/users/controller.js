const bcrypt = require('bcrypt')
const { conn } = require('../db')

const userId = 'V1StGXR8_Z5jdHi6B-myT'
const controller = {}

controller.getUser = (req, res, next) => {
  try {
    const user = conn().get('users').find({ id: userId }).value()
    res.json(user)
  } catch (error) {
    next(error)
  }
}

controller.saveUser = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const pwd = await bcrypt.hash(password, salt)
    const qtd = await conn().get('users').size().value()
    if (qtd < 1) {
      await conn().get('users').push({ id: userId, username, password: pwd }).write()
      res.json({ message: 'Usário criado' })
    } else {
      await conn().get('users').find({ id: userId }).assign({ username, password: pwd }).write()
      res.json({ message: 'Usário alterado' })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = controller
