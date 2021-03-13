const crypto = require('crypto')
const { conn } = require('../db')

const userId = 'cda8828d-173c-4635-a4e5-05f13846c515'
const controller = {}

controller.getUser = (req, res) => {
  const user = conn().get('users').find({ id: userId }).value()
  res.json(user)
}

controller.saveUser = async (req, res) => {
  const { username, password } = req.body
  const pwd = crypto.createHash('sha256').update(password).digest('hex')
  const qtd = await conn().get('users').size().value()
  if (qtd < 1) {
    await conn().get('users').push({ id: userId, username, password: pwd }).write()
    res.json({ message: 'Usário criado' })
  } else {
    await conn().get('users').find({ id: userId }).assign({ username, password: pwd }).write()
    res.json({ message: 'Usário alterado' })
  }
}

module.exports = controller
