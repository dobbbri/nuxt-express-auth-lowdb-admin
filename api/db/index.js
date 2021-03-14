const path = require('path')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

let db

const connectToDB = async () => {
  // if (!connection) {
  const adapter = new FileAsync(path.join('data', 'db.json'))
  db = await low(adapter)
  db.defaults({ users: [] }).write()
  // if (!db.has('users').value()) {
  //   db.set('users', [{ userId: 'admin', password: '123456' }]).write()
  // }
  // }
}

const conn = () => db

module.exports = {
  connectToDB,
  conn
}
