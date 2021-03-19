const path = require('path')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

let db

const connectToDB = async () => {
  const adapter = new FileAsync(path.join('data', 'db.json'))
  db = await low(adapter)
  db.defaults({ users: [], products: [] }).write()
}

const conn = () => db

module.exports = {
  connectToDB,
  conn
}
