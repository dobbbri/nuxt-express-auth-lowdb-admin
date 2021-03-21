const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { conn } = require('../db')
const controller = {}
const refreshTokens = {}

controller.login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await conn().get('users').find({ username }).value()
    if (!user) throw new Error('Usuário ou senha inválida')
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error('Usuário ou senha inválida')
    const expiresIn = 15
    const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
    const accessToken = jsonwebtoken.sign(
      {
        username,
        picture: 'https://github.com/nuxt.png',
        name: 'User ' + username,
        scope: ['test', 'user']
      },
      'dummy',
      {
        expiresIn
      }
    )
    refreshTokens[refreshToken] = {
      accessToken,
      user: {
        username,
        picture: 'https://github.com/nuxt.png',
        name: 'User ' + username
      }
    }
    res.json({ token: { accessToken, refreshToken } })
  } catch (e) {
    next(e)
    // res.status(500).json({ message: e.message })
  }
}

controller.logout = (req, res, next) => {
  res.json({ token: null, status: 'OK' })
}

module.exports = controller
