var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

module.exports = {
    fields: {
        'test': {
            'type': Sequelize.STRING,
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

        })
    }
};
