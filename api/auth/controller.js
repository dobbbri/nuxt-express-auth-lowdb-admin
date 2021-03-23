const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { conn } = require('../db')
const controller = {}
const refreshTokens = {}
const expiresIn = 15

controller.login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await conn().get('users').find({ username }).value()
    if (!user) throw new Error('Usuário ou senha inválida')
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error('Usuário ou senha inválida')
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
  }
}

controller.refresh = (req, res, next) => {
  try {
    const refreshToken = req.body.refresh_token

    if (refreshToken in refreshTokens) {
      const user = refreshTokens[refreshToken].user
      const newRefreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
      delete refreshTokens[refreshToken]
      const accessToken = jsonwebtoken.sign(
        {
          user: user.username,
          picture: 'https://github.com/nuxt.png',
          name: 'User ' + user.username,
          scope: ['test', 'user']
        },
        'dummy',
        { expiresIn }
      )
      refreshTokens[newRefreshToken] = { accessToken, user }
      res.json({ token: { accessToken, refreshToken: newRefreshToken } })
    } else {
      throw new Error('Token não encontrado')
    }
  } catch (e) {
    next(e)
  }
}

controller.logout = (req, res, next) => {
  res.json({ token: null, status: 'OK' })
}

module.exports = controller
