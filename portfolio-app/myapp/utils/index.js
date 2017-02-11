var response = require('./response');
var sanitize = require('./sanitize');
var reqIp = require('./req-ip');

module.exports = function (app) {
    app.use(response.connect());
    app.use(sanitize());
    app.use(reqIp());
    return app;
};