const path = require('path')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

let connection

const connectToDB = async () => {
  if (connection) return
  const adapter = new FileAsync(path.join('data', 'db.json'))
  connection = await low(adapter)
  connection.defaults({ tasks: [] }).write()
}

const conn = () => connection

module.exports = {
  connectToDB,
  conn
}
