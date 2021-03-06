var response = function(req, next, status, body) {
    var tempCallback = req.callback;
    if (tempCallback) {
        delete req.callback;
        tempCallback(status, body);
    }
    else {
        this.status(status).json(body);
    }
};

module.exports.connect = function () {
    return function (req, res, next) {
        console.log("define util response part");
        res.response = response;
        next();
    };
};