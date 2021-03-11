const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
let db

const connectToDB = async () => {
  const adapter = new FileAsync('db.json')
  db = await low(adapter)
  db.defaults({ tasks: [] }).write()
}

const getConnection = () => db

module.exports = {
  connectToDB,
  getConnection
}
