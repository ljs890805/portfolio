var testRouter = require('./test');
var loginHistoryRouter = require('./login-history');

module.exports = function (app) {
    app.use('/api', testRouter);
    app.use('/api', loginHistoryRouter);
    return app;
};
