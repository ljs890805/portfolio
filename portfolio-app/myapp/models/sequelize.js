var Sequelize = require('sequelize');
require('sequelize-definer')(Sequelize);

var db = 'LJS';
var username = 'root';
var password = 'a159736';
var connectObject = {
    host: 'localhost',
    dialect: "mysql",
    port: '3306',
    define: {
        underscored: false,
        freezeTableName: false,
        syncOnAssociation: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
};

var sequelize = new Sequelize(db, username, password, connectObject);

module.exports = sequelize;
