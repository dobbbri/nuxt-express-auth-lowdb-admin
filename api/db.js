const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
let dbConn

const connectToDB = async () => {
  const adapter = new FileAsync('db.json')
  dbConn = await low(adapter)
  dbConn.defaults({ tasks: [] }).write()
}

const conn = () => dbConn

module.exports = {
  connectToDB,
  conn
}
