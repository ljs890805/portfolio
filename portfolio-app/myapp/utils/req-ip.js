function getIp () {
    return ( this.headers["X-Forwarded-For"]
    || this.headers["x-forwarded-for"]
    || this.client.remoteAddress );
}

module.exports = function () {
    return function (req, res, next) {
        req.getIp = getIp;
        next();
    };
};