var sequelize = require('./sequelize');
var models = require('./index');

sequelize.defineAll{models};

module.exports = sequelize.models;
