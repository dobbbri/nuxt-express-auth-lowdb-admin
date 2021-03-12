const { conn } = require('../db')

const userId = 'cda8828d-173c-4635-a4e5-05f13846c515'
const controller = {}

controller.getUser = async (req, res) => {
  const user = await conn().get('users').find({ id: userId }).value()
  res.json(user)
}

controller.saveUser = async (req, res) => {
  const { username, password } = req.body
  const qtd = await conn().get('users').size().value()
  console.log('qtd: ', qtd)
  if (qtd < 1) {
    await conn().get('users').push({ id: userId, username, password }).write()
    res.json({ message: 'Usário criado' })
  } else {
    await conn().get('users').find({ id: userId }).assign({ username, password }).write()
    res.json({ message: 'Usário alterado' })
  }
}

module.exports = controller
