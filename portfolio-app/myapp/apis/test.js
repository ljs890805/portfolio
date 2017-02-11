var path = require('path');
var resource = fileName = path.basename(__filename).split('.')[0];
var express = require('express');
var router = new express.Router();

var api = {
    post: function () {
        return function (req, res, next) {
            (function (req, res, next) {
                var createdData = null;
                req.sanitize.toBoolean(req.body, "testBoolean");
                console.log(req.body);
                req.models.test.create({
                    test: req.body.test,
                    testInteger: req.body.testInteger,
                    testBoolean: req.body.testBoolean
                }).then(function (data) {
                    createdData = data;
                    return true;
                }).catch(function (err) {
                    console.log(err);
                }).done(function (isSuccess) {
                    if (isSuccess) {
                        res.response(req, next, 201, createdData);
                    }
                });
            })(req, res, next);
        };
    },
    get: function () {
        return function (req, res, next) {
            (function (req, res, next) {
                var loadedData = null;
                req.models.test.findAll({
                    limit: 30
                }).then(function (data) {
                    loadedData = data;
                    return true;
                }).catch(function (err) {
                    console.log(err);
                }).done(function (isSuccess) {
                    if (isSuccess) {
                        res.response(req, next, 200, loadedData);
                    }
                });
            })(req, res, next);
        };
    },
    put: function () {
        return function (req, res, next) {
            (function (req, res, next) {
                console.log(req.params.id);
                res.response(req, next, 204);
            })(req, res, next);
        }
    }
};

router.post('/' + resource, api.post());
router.get('/' + resource, api.get());
router.put('/' + resource + '/:id', api.put());

module.exports = router;