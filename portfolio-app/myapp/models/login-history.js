var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

module.exports = {
    fields: {
        'ip': {
            'type': Sequelize.STRING,
            'allowNull': false,
            'unique': true
        },
        'count': {
            'type': Sequelize.INTEGER,
            'defaultValue': 0,
            'allowNull': false
        }
    },
    options: {
        'timestamps': true,
        'paranoid': true,
        'charset': 'utf8',
        'instanceMethods': Sequelize.Utils._.extend({

        }),
        'classMethods': Sequelize.Utils._.extend({
            "findLoginHistories": function (options, callback) {
                var loadedData = null;
                var where = {};
                var query = {
                    where: where
                };

                if (options.size !== undefined) {
                    query.limit = parseInt(options.size);
                }

                if (options.offset !== undefined) {
                    query.offset = parseInt(options.offset);
                }

                if (options.last !== undefined) {
                    if (options.sort !== undefined) {
                        if (options.sort == "DESC") {
                            where.createdAt = {
                                "lt": options.last
                            };
                        } else {
                            where.createdAt = {
                                "gt": options.last
                            };
                        }
                    } else {
                        options.sort = "DESC";
                        where.createdAt = {
                            "lt": options.last
                        };
                    }
                }

                if (options.sort !== undefined) {
                    query.order = [["createdAt", options.sort]];
                }

                sequelize.models.loginHistory.findAll(query).then(function (data) {
                    if (data && data.length) {
                        loadedData = data;
                        return 200;
                    } else {
                        return 404;
                    }
                }).catch(function (err) {
                    console.log(err);
                    callback(400, err);
                }).done(function (status) {
                    if (status == 200) {
                        callback(200, loadedData);
                    } else if (status == 404) {
                        callback(404);
                    }
                });
            },
            "findLoginHistoryById": function (id, callback) {
                var loadedData = null;
                sequelize.models.loginHistory.findById(id).then(function (data) {
                    if (data) {
                        loadedData = data;
                        return 200;
                    } else {
                        return 404;
                    }
                }).catch(function (err) {
                    console.log(err);
                    callback(400, err);
                }).done(function (status) {
                    if (status == 200) {
                        callback(200, loadedData);
                    } else if (status == 404) {
                        callback(404);
                    }
                });
            },
            "countLoginHistory": function (ip, callback) {
                sequelize.transaction(function (t) {
                    return sequelize.models.loginHistory.findOne({
                        where: {
                            ip: ip
                        },
                        transaction: t
                    }).then(function (data) {
                        if (data) {
                            data.increment('count', {
                                transaction: t
                            });
                        } else {
                            return sequelize.models.loginHistory.create({
                                ip: ip,
                                count: 1
                            }, {
                                transaction: t
                            });
                        }
                    }).then(function () {
                        return true;
                    });
                }).catch(function (err) {
                    console.log(err);
                    callback(400, err);
                }).done(function (isSuccess) {
                    if (isSuccess) {
                        callback(204);
                    }
                });
            }
        })
    }
};
