var testRouter = require('./test');
var loginHistoryRouter = require('./login-history');

/**
 * API를 등록한다.
 * 각 모듈마다 rest api 기반으로 동작한다.
 */
module.exports = function (app) {
    console.log("define apis part");
    app.use('/api', testRouter);
    app.use('/api', loginHistoryRouter);
    return app;
};
