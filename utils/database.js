const { Sequelize } = require('sequelize')

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'b1e3n0j6a3',
  database: 'entregable1',
  logging: false
})

module.exports = { db }