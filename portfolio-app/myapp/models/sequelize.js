var Sequelize = require('sequelize');
require('sequelize-definer')(Sequelize);

var db = 'LJS';
var username = 'root';
var password = '123123';
var connectObject = {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  define: {
      underscored: false,
      freezeTableName: false,
      syncOnAssociation: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true
  },
  dialectOptions: {
      socketPath: './mysql.sock',
      bigNumberStrings: true,
      supportBigNumbers: true
  }
};

var sequelize = new Sequelize(db, username, password, connectObject);

module.exports = sequelize;
