const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const auth = require('./auth')
const users = require('./users')
const products = require('./products')
const { connectToDB } = require('./db')

connectToDB()

// Create app
const app = express()

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// JWT middleware
app.use(
  jwt({
    secret: 'dummy',
    algorithms: ['sha1', 'RS256', 'HS256']
  }).unless({
    path: ['/api/auth/login']
  })
)

app.use('/auth', auth)
app.use('/users', users)
app.use('/products', products)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ message: err.message || 'Erro interno do servidor' })
})

module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => console.log(`API server listening on port ${port}`)) // eslint-disable-line
}
