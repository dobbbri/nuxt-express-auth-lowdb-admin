const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { connectToDB } = require('./database')
const users = require('./routes/users')
const tasks = require('./routes/tasks')
const test = require('./routes/test')

connectToDB()

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(users)
app.use(tasks)
app.use(test)

module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`API server listening on port ${port}`))
}
