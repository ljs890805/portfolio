var path = require('path');
/**
 * resource는 자신의 파일명이 담긴다.
 * ex) login-history
 */
var resource = fileName = path.basename(__filename).split('.')[0];
var express = require('express');
var router = new express.Router();

var api = {
    post: function () {
        return function (req, res, next) {
            /**
             * javascript closure를 생성하여 메모리 공유를 피한다.
             */
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
    },
    gets: function () {
        return function (req, res, next) {
            (function (req, res, next) {
                req.models.loginHistory.findLoginHistories(req.query, function (status, data) {
                    if (status == 200) {
                        console.log("find login histories success");
                        res.response(req, next, 200, data);
                    } else if (status == 404) {
                        console.log("find login histories not exist");
                        res.response(req, next, 404);
                    } else {
                        console.log("find login histories error");
                        res.response(req, next, status, data);
                    }
                });
            })(req, res, next);
        };
    },
    get: function () {
        return function (req, res, next) {
            (function (req, res, next) {
                req.models.loginHistory.findLoginHistoryById(req.params.id, function (status, data) {
                    if (status == 200) {
                        console.log("find login history by id success");
                        res.response(req, next, 200, data);
                    } else if (status == 404) {
                        console.log("find login history by id not exist");
                        res.response(req, next, 404);
                    } else {
                        console.log("find login history by id error");
                        res.response(req, next, status, data);
                    }
                });
            })(req, res, next);
        };
    }
};

router.get('/' + resource, api.gets());
router.get('/' + resource + '/:id', api.gets());
router.post('/' + resource, api.post());

module.exports = router;