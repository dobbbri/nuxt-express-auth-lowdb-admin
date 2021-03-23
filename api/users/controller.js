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

controller.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const pwd = await bcrypt.hash(password, salt)
    const user = await conn().get('users').find({ id: userId }).value()
    if (user) throw new Error('Usuário já existe')
    await conn().get('users').push({ id: userId, username, password: pwd }).write()
    res.json({ message: 'Usário criado' })
  } catch (error) {
    next(error)
  }
}

controller.updateUser = async (req, res, next) => {
  try {
    const { password, newPassword } = req.body
    const salt = await bcrypt.genSalt(10)
    const newPwd = await bcrypt.hash(newPassword, salt)
    const user = await conn().get('users').find({ id: userId }).value()
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error('Senha atual errada')
    await conn().get('users').find({ id: userId }).assign({ password: newPwd }).write()
    res.json({ message: 'Senha alterada' })
  } catch (error) {
    next(error)
  }
}

module.exports = controller
