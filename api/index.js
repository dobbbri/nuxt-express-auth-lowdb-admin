const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { connectToDB } = require('./db')
const users = require('./users/router')
const products = require('./products/router')

connectToDB()

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/users', users)
app.use('/products', products)

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: { status: err.status || 500, message: err.message || 'Erro interno do servidor' }
  })
})

module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => console.log(`API server listening on port ${port}`)) // eslint-disable-line
}
