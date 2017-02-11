var path = require('path');
var resource = fileName = path.basename(__filename).split('.')[0];
var express = require('express');
var router = new express.Router();

var api = {
    post: function () {
        return function (req, res, next) {
            (function (req, res, next) {
                req.models.loginHistory.countLoginHistory(req.getIp(), function (status, data) {
                    if (status == 204) {
                        console.log("count login history success");
                        res.response(req, next, 204);
                    } else {
                        console.log("count login history error");
                        res.response(req, next, status, data);
                    }
                });
            })(req, res, next);
        };
    }
};

router.post('/' + resource, api.post());

module.exports = router;