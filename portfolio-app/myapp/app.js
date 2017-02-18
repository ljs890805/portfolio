var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

console.log("use body parser middle ware part");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("use cookie parser middle ware part");
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log("require utils part");
var utils = require('./utils');
app = utils(app);

var models = require('./models/models');
var sequelize = require('./models/sequelize');

/**
 * req에 middle ware를 통해 sequelize와 model을 넣어둔다.
 * api 로직에서 사용할 수 있음.
 */
app.use(function (req, res, next) {
    console.log("use middle ware to use sequelize orm code");
    req.models = models;
    req.sequelize = sequelize;
    next();
});

/**
 * API 라우팅 설정 부분!
 * API middle ware
 */
console.log("require apis part");
var apis = require('./apis');
app = apis(app);

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
