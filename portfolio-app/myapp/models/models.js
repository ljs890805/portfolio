var sequelize = require('./sequelize');
var models = require('./index');

/**
 * DB 정의 (생성)하는 곳
 */
console.log("define database part");
sequelize.defineAll(models);

module.exports = sequelize.models;
