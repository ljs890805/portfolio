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
            "countLoginHistory": function (ip, callback) {
                sequelize.transaction(function (t) {
                    return sequelize.models.loginHistory.findOne({
                        where: {
                            ip: ip
                        },
                        transaction: t
                    }).then(function (data) {
                        if (data) {
                            return sequelize.models.loginHistory.update({
                                count: data.count + 1
                            }, {
                                where: {
                                    ip: ip
                                },
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
