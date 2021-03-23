const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const auth = require('./auth')
const users = require('./users')
const products = require('./products')
const { connectToDB } = require('./db')

connectToDB()

// Create app
const app = express()

// Install middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

// JWT middleware
app.use('/auth', auth)
app.use('/users', users)
app.use('/products', products)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' })
})

module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => console.log(`API server listening on port ${port}`)) // eslint-disable-line
}
