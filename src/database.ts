import sq = require('sequelize');

let database = new sq('', '', '', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: '../database.sqlite'
});

export default database;
